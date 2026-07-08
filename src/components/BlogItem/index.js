import './index.css'

const BlogItem = props => {
  const {details} = props
  const {name, description, imageUrl} = details
  return (
    <li className="item-container">
      <img src={imageUrl} alt={name} className="item-image" />
      <div className="item-text-container">
        <h1 className="item-heading">{name}</h1>
        <p className="item-description">{description}</p>
      </div>
    </li>
  )
}
export default BlogItem
