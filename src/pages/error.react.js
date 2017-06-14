import React from 'react'

//   import { fetchRepository } from 'api'

class error_page extends React.Component {

    render() {
        
          
        return (
            <div className="row">
               Error
            </div>
        )
    }
}
class error_page_repo extends React.Component {

    render() {
        
          
        return (
            <div className="row">
               Error REPO name
            </div>
        )
    }
}

module.exports = {
    error_page: error_page,
    error_page_repo: error_page_repo
}