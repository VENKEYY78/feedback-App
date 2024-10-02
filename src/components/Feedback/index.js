import {Component} from 'react'

import './index.css'

class Feedback extends Component {
  state = {
    status: true,
  }

  onClikcEmoji = () => {
    //  const {status} = this.state
    this.setState({status: false})
  }

  render() {
    const {status} = this.state
    const {resources} = this.props
    const {emojis} = resources // emojis array ను destructure చేసాం

    return (
      <div className="app-container">
        {status ? (
          <div className="feedback-container">
            <h1 className="heading">
              How satisfied are you with our customer support performance
            </h1>
            <ul className="emoji-container">
              {emojis.map(eachEmoji => (
                <li className="emoji-item" key={eachEmoji.id}>
                  <img
                    src={eachEmoji.imageUrl}
                    className="emoji"
                    alt={eachEmoji.name}
                    onClick={this.onClikcEmoji}
                  />
                  <p>{eachEmoji.name}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="feedback-container">
            <img
              src={resources.loveEmojiUrl}
              className="emoji"
              alt="love emoji"
            />
            <h1>Thank You!</h1>
            <p>
              We will use your feedback to improve our customer support
              performance
            </p>
          </div>
        )}
      </div>
    )
  }
}

export default Feedback
