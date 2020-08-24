import React, {Component} from "react"

class MemeGenerator extends Component {
    constructor() {
        super()
        this.state = {
          topText: '',
          bottomText: '',
          randomImg: 'http://i.imgflip.com/1bij.jpg',
          allMemeImgs: [],
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
      const { name, value } = event.target;
      this.setState({
        [name]: value,
      })
    }

    componentDidMount() {
      fetch('https://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
          const { memes } = response.data
          console.log(memes[0]);
          this.setState({
            allMemeImgs: memes,
          })
        })
    }

    render() {
        return (
          <div>
            <form className="meme-from">
              <input
                type="text"
                name="topText"
                value={this.state.topText}
                onChange={this.handleChange}
                placeholder="Top Text"
              />

              <input
                type="text"
                name="bottomText"
                value={this.state.bottomText}
                onChange={this.handleChange}
                placeholder="Bottom Text"
              />

              <button>Gen</button>
            </form>
          </div>
        )
    }
}

export default MemeGenerator
