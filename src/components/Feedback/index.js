// Write your React code he
import {Component} from 'react'
import Emojis from '../Emojis'
import './index.css'

class Feedback extends Component {
  state = {ThanksClicked: true}

  onThanksCard = () => {
    this.setState({ThanksClicked: false})
  }

  render() {
    const {ThanksClicked} = this.state
    const {resources} = this.props
    const {loveEmojiUrl} = resources
    let code
    if (ThanksClicked) {
      code = (
        <div className="content-card">
          <h1 className="heading">
            How satisfied are you with our customer support performance?
          </h1>
          <ul className="unOrderList">
            {resources.emojis.map(each => (
              <Emojis
                emoji={each}
                key={each.id}
                onThanksCard={this.onThanksCard}
              />
            ))}
          </ul>
        </div>
      )
    } else {
      code = (
        <div className="thanks-card">
          <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
          <h1>Thank You</h1>
          <p>
            We will use your feed back to improve our customer support
            <br /> performance
          </p>
        </div>
      )
    }
    return <div className="Cont"> {code} </div>
  }
}

export default Feedback
