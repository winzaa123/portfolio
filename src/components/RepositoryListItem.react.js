import React from 'react'
//   import { fetchRepository } from 'api'
import {Link} from 'react-router-dom'
import ListLoading from './RepositolyListLoading.react.js'

class RepositoryListItem extends React.Component {

    state = {
        repository: {},
       
    }
 
    componentDidMount() {     //old
        // console.log( this.props.repository);
    //     if(this.state.repository){
    //         this.state.repository.then(res=>{
    //         if(res["message"]==="Not Found"){
    //           this.setState({repository : res.full_name="No Repo"});  
    //         }
    //         this.setState({repository: res});
    //         this.setState({_isready: false});
    //    });
    //     }
}
  componentWillUnmount() {
    
  }
    render() {
        const { 
            full_name = "Loadings...",
            _isReady = true,
            description,
            stargazers_count,
            open_issues_count,
            forks_count,
            watchers_count,
            organization = {}   // firsttime not value {} = for Decalre
         } = this.props.repository;
          
         let EventClick,btnremove ;
         if(this.props.ClickRemove){
             EventClick = (this.props.ClickRemove.bind(this, this.props.repository));
             btnremove =  <button className="delete is-pulled-right"  onClick={EventClick}  > </button> ;
         }
        const link_star = "/Stargazer/"+full_name;
        if(_isReady){
                //   console.log("TEST PROP STATUS");
            return <ListLoading/>;
        }else
        return (
            <div className="box">
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img alt="" src={organization.avatar_url}/>
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            {btnremove}
                            <p>
                                <strong><a className="title" href="/">
                                { full_name }    {this.state.test}
                                </a></strong>
                            </p>
                            <p className="subtitle">
                                { description }
                            </p>
                        </div>
                    </div>
                </article>

                <hr/>

                <nav className="level is-mobile">
                    <div className="level-item has-text-centered">
                        <div>
                            <Link  className="title"  to={link_star}    >
                            <p className="heading">Stars </p>
                            { stargazers_count }
                            </Link>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Open Issues</p>
                            <p className="title">{ open_issues_count }</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                            <p className="heading">Forks</p>
                            <p className="title">{ forks_count }</p>
                        </div>
                    </div>
                    <div className="level-item has-text-centered">
                        <div>
                        <p className="heading">Watchers</p>
                        <p className="title">{ watchers_count }</p>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default RepositoryListItem