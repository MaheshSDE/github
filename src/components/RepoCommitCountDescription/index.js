import './index.css'

const RepoCommitCountDescription = props => {
  const {description} = props
  const {value} = description

  return <li className="repoCommitCountDescHeading">{value}</li>
}
export default RepoCommitCountDescription
