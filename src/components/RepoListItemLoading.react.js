import React from 'react'
 
class RepoListItemLoading extends React.Component {

    render() {

    return (
          <ul className="input-lg-live-search"  >
            <li className="input-lg-live-search-list">
                    <div className="card-content">
                    <div className="media">

                        <div className="media-content">
                            <p className="title is-5">Loading...</p>
                        
                        </div>
                    </div>
                    </div>
            </li>
      </ul>
    );
    }
}

export default RepoListItemLoading