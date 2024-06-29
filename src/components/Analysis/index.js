import {Component} from 'react'

import {Link} from 'react-router-dom'

import Loader from 'react-loader-spinner'

// import LinearChart from '../LinearChart'

import Header from '../Header'

import LinearChart from '../LinearChart'

import LanguageRepoCountPie from '../LangRepoCountPie'

import LanguageCommitCountPie from '../LangCommitCountPie'

import RepoCommitCountPie from '../RepoCommitCountPie'

import RepoCommitCountDescription from '../RepoCommitCountDescription'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'Failure',
  inProgress: 'IN_PROGRESS',
}

class Analysis extends Component {
  state = {analysisList: {}, apiStatus: apiStatusConstants.initial}

  componentDidMount() {
    this.getGitHubUserAnalysisDetails()
  }

  getGitHubUserAnalysisDetails = async () => {
    const {username} = this.props

    this.setState({apiStatus: apiStatusConstants.inProgress})

    const url = `https://apis2.ccbp.in/gpv/profile-summary/${username}`
    const options = {
      method: 'GET',
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data
      console.log(updatedData)
      this.setState({
        analysisList: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderAnalysisSuccessView = () => {
    const {analysisList} = this.state
    const analysisListLength = Object.keys(analysisList).length === 0
    const {
      quarterCommitCount,
      langRepoCount,
      langCommitCount,
      repoCommitCount,
      repoCommitCountDescriptions,
    } = analysisList

    const data = [
      {id: 1, name: 'bookshelf', value: repoCommitCountDescriptions.bookshelf},
      {
        id: 2,
        name: 'kcd-discord-bot-v1',
        value: repoCommitCountDescriptions['kcd-discord-bot-v1'],
      },
      {
        id: 3,
        name: 'kentcdodds.com',
        value: repoCommitCountDescriptions['kentcdodds.com'],
      },
      {
        id: 4,
        name: 'old-kentcdods.com',
        value: repoCommitCountDescriptions['old-kentcdodds.com'],
      },
      {
        id: 5,
        name: 'react-fundamentals',
        value: repoCommitCountDescriptions['react-fundamentals'],
      },
      {
        id: 6,
        name: 'react-hoooks',
        value: repoCommitCountDescriptions['react-hooks'],
      },
      {
        id: 7,
        name: 'react-performance',
        value: repoCommitCountDescriptions['react-performance'],
      },
      {
        id: 8,
        name: 'react-suspense',
        value: repoCommitCountDescriptions['react-suspense'],
      },
      {
        id: 9,
        name: 'react-workshop-app',
        value: repoCommitCountDescriptions['react-workshop-app'],
      },
      {
        id: 10,
        name: 'testing-react-apps',
        value: repoCommitCountDescriptions['testing-react-apps'],
      },
    ]

    return (
      <div className="AnalysisSuccessViewContainer">
        {analysisListLength ? (
          <div className="noDataRepoAnalysisContainer">
            <img
              src="https://res.cloudinary.com/ddsn9feta/image/upload/v1719653254/Layer_3_1_jxjnnu.png"
              alt="no analysis"
              className="no-data-image"
            />
            <h1 className="noDataHeading">No Analysis Found!</h1>
          </div>
        ) : (
          <>
            <div className="analysisHeadingContainer">
              <h1 className="analysis">Analysis</h1>
            </div>
            <div className="linearChartContainer">
              <LinearChart quarterCommitCount={quarterCommitCount} />
            </div>
            <div className="langRepoCommitCountContainer">
              <div className="pielanguageCountContainer">
                <h1 className="pieLangCountHeadingRep">Repos Per Language</h1>
                <LanguageRepoCountPie langRepoCount={langRepoCount} />
              </div>
              <div className="pielCommitanguageCountContainer">
                <h1 className="pieLangCountHeading">Commits Per Language</h1>
                <LanguageCommitCountPie langCommitCount={langCommitCount} />
              </div>
            </div>
            <div className="repoCommitDescContainer">
              <div className="repoCommitContainer">
                <h1 className="repoCommitHeading">Commits Per Repo (Top 10)</h1>
                <RepoCommitCountPie repoCommitCount={repoCommitCount} />
              </div>
              <ul className="list">
                {data.map(eachItem => (
                  <RepoCommitCountDescription
                    description={eachItem}
                    id={eachItem.id}
                  />
                ))}
              </ul>
            </div>
          </>
        )}
      </div>
    )
  }

  onClickTryAgain = () => {
    this.getGitHubUserAnalysisDetails()
  }

  renderFailureView = () => (
    <div className="analysisFailureContainer">
      <img
        src="https://res.cloudinary.com/ddsn9feta/image/upload/v1718604995/Group_7522_f4ueqy.png"
        alt="failure view"
        className="error-view"
      />
      <h1 className="errorName">Something went wrong. Please try again</h1>
      <button
        className="tryButton"
        type="button"
        onClick={this.onClickTryAgain}
      >
        Try again
      </button>
    </div>
  )

  renderLoaderView = () => (
    <div className="analysis-loader-container" data-testid="loader">
      <Loader type="TailSpin" color="#3B82F6" height={50} width={50} />
    </div>
  )

  renderGitAnalysisDetails = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderAnalysisSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoaderView()
      default:
        return null
    }
  }

  renderNoDataFound = () => (
    <div className="noDataFoundContainer">
      <img
        src="https://res.cloudinary.com/ddsn9feta/image/upload/v1718949987/Repository-NoDataFound-2x_dzw1h2.png"
        alt="empty analysis"
        className="analysis-no-data-img"
      />
      <h1 className="analysis-no-data-heading">No Data Found</h1>
      <p className="analysis-no-data-desc">
        GitHub Username is empty, please provide a valid username for Analysis.
      </p>
      <Link to="/">
        <button
          type="button"
          className="goto-home-button"
          onClick={this.onClickGotoHome}
        >
          Go to Home
        </button>
      </Link>
    </div>
  )

  render() {
    const {username} = this.props

    return (
      <>
        <Header />
        <div className="analysisContainer">
          {username === ''
            ? this.renderNoDataFound()
            : this.renderGitAnalysisDetails()}
        </div>
      </>
    )
  }
}
export default Analysis
