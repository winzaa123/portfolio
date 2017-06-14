import React from 'react'
 
class RepoListItem extends React.Component {
 
    render() {
      const {
        full_name = "Loading...",
        owner = {},
        description  
      } = this.props.propResult;
      
     
      
    return (

      <li className="input-lg-live-search-list" onClick={() => { this.props.ClickRepo(this,full_name) }} >
            <div className="card-content">
              <div className="media">
                <div className="media-left">
                    <figure className="image is-48x48">
                        <img alt="" src={owner.avatar_url}/>
                    
                    </figure>
                </div>
                  <div className="media-content">
                    <p className="title is-5">{full_name}</p>
                    <p className="subtitle is-6">{description}    </p>
                  </div>
              </div>
            </div>
      </li>
    );
    }
}

export default RepoListItem