import './index.css'

const Emojis = props => {
  const {emoji, onThanksCard} = props
  const {id, name, imageUrl} = emoji
  const thanksCard = () => {
    if (id === 2) {
      onThanksCard()
    }
  }

  return (
    <li className="listOrder">
      <img
        className="emoji-image"
        src={imageUrl}
        alt={name}
        onClick={thanksCard}
      />

      <p>{name}</p>
    </li>
  )
}
export default Emojis
