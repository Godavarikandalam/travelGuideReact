import {Component} from 'react'
import './App.css'
import Loader from 'react-loader-spinner'
import BlogItem from './components/BlogItem'

// Replace your code here
class App extends Component {
  state = {blogData: [], isLoading: true}

  componentDidMount() {
    this.getBlogData()
  }

  getBlogData = async () => {
    const response = await fetch('https://apis.ccbp.in/tg/packages')
    const data = await response.json()
    const updatedData = {
      packages: data.packages.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        imageUrl: eachItem.image_url,
        description: eachItem.description,
      })),
    }
    console.log(updatedData)
    this.setState({blogData: updatedData, isLoading: false})
  }

  renderBlogData = () => {
    const {blogData} = this.state
    return (
      <ul className="blog-list-container">
        {blogData.packages.map(eachItem => (
          <BlogItem details={eachItem} key={eachItem.id} />
        ))}
      </ul>
    )
  }

  renderLoading = () => (
    <div data-testid="loader" className="loading-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className="app-container">
        <h1 className="heading">Travel Guide</h1>
        {isLoading ? this.renderLoading() : this.renderBlogData()}
      </div>
    )
  }
}

export default App
