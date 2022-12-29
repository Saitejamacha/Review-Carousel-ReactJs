import {Component} from 'react'
import './index.css'

// Sai Teja's Code

class ReviewsCarousel extends Component {
  state = {
    currentReview: 0,
  }

  onRightClick = () => {
    const {currentReview} = this.state
    const {reviewsList} = this.props

    if (currentReview < reviewsList.length - 1) {
      this.setState(prevState => ({
        currentReview: prevState.currentReview + 1,
      }))
    }
  }

  renderActiveReview = review => {
    const {imgUrl, username, companyName, description} = review

    return (
      <div className="list-con">
        <img alt={username} src={imgUrl} />
        <p className="name">{username}</p>
        <p className="common-para">{companyName}</p>
        <p className="common-para">{description}</p>
      </div>
    )
  }

  onLeftClick = () => {
    const {currentReview} = this.state

    if (currentReview > 0) {
      this.setState(prevState => ({currentReview: prevState.currentReview - 1}))
    }
  }

  render() {
    const {reviewsList} = this.props
    const {currentReview} = this.state
    const currentActiveReview = reviewsList[currentReview]

    return (
      <div className="bg-con">
        <h1 className="head">Reviews</h1>

        <div className="carousel-con">
          <button type="button" onClick={this.onLeftClick}>
            <img
              alt="left arrow"
              src="https://assets.ccbp.in/frontend/react-js/left-arrow-img.png"
            />
          </button>
          {this.renderActiveReview(currentActiveReview)}
          <button onClick={this.onRightClick} type="button">
            <img
              alt="right arrow"
              src="https://assets.ccbp.in/frontend/react-js/right-arrow-img.png"
            />
          </button>
        </div>
      </div>
    )
  }
}

export default ReviewsCarousel
