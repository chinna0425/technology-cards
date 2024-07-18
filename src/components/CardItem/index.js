import './index.css'

const CardItems = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={className}>
      <h1>{title}</h1>
      <p>{description}</p>
      <img src={imgUrl} className="imageset" alt={title} />
    </li>
  )
}

export default CardItems
