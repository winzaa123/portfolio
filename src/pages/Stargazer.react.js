import React from 'react'

import StargazerList from 'components/StargazerList.react'
 import RepoCard  from 'components/RepositoryListItem.react'

import { fetchStargazers } from 'api'
 

 import applyRepositoryContainer from 'libs/applyRepositoryContainer'

const RepoCardContainer = applyRepositoryContainer(RepoCard)
 
export default class Stargazer extends React.Component {

  state = {
    stargazers: [],
    fetching: true,
    currentPage: 1,
    repositoryItem: {}
  }

  componentDidMount() {

    window.addEventListener('scroll', this._onScroll)
    this.fetchStargazersFirst()
    
  }
  fetchStargazersFirst(){  // run for all height
         this.setState({
      fetching: true
    })

    fetchStargazers(this.getScopeName(), this.state.currentPage)
    .then((stargazers) => {
      this.setState({
        stargazers: this.state.stargazers.concat(stargazers),
        fetching: false,
        currentPage: this.state.currentPage + 1
      })
      if(document.body.offsetHeight < window.innerHeight){
          this.fetchStargazersFirst();
      }
      
    })

   
  }


  componentWillUnmount() {
    window.removeEventListener('scroll', this._onScroll)
  }

  _onScroll = () => {
    if (this.state.fetching) {
      return
    }
   
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight - 100) {
      this.fetchStargazersList()
    }
  }


  fetchStargazersList() {
    // Set Loading state
    this.setState({
      fetching: true
    })

    fetchStargazers(this.getScopeName(), this.state.currentPage)
    .then((stargazers) => {
      this.setState({
        stargazers: this.state.stargazers.concat(stargazers),
        fetching: false,
        currentPage: this.state.currentPage + 1
      })
      
    })
 
  }

  getScopeName() {
    const { ownerName, repoName } = this.props.match.params
    const scope = `${ownerName}/${repoName}`
    return scope
  }

        // const repositoryItems = this.state.repositoryArrays.map( (name) => {
          
  render() {
    // const data =  fetchRepository(this.getScopeName()).then((repoitem)=>{
    //        return repoitem
    //     })
   
    return (
      <div className="container">
      <section className="section">
           <RepoCardContainer scopeName={this.getScopeName()}   />
          <br />
           <StargazerList stargazers={this.state.stargazers} />
          { this.state.fetching ? <p className="column is-12-mobile has-text-centered">Loading...</p> : null}
      </section>
    </div>
      
    )
  }
}
