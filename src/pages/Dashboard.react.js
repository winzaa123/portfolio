import React from 'react'
import ReactDOM from 'react-dom';
import NewRepoForm from 'components/NewRepoForm.react'
import RepositoryList from 'components/RepositoryList.react'

//   import { fetchRepository } from 'api'

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
             repositoryNames: [
            "facebook/react",
            "vuejs/vue",
            "angular/angular",
            ],
          
           
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.btnremoveRepo = this.btnremoveRepo.bind(this);
 
    }
    btnremoveRepo(value,e){
        const arr_repo =this.state.repositoryNames ;
        let id_index= arr_repo.findIndex(repo => repo ===value.full_name);
        arr_repo.splice(id_index,1);
        this.setState({ repositoryNames : arr_repo});
    }

    getUserInput () {
        return ReactDOM.findDOMNode(this.userEntry).value;
    }
    handleSubmit(e) {
        
          e.preventDefault();
            var form = e.target;
            var content = form.elements['reponame'].value;
             const arrayvar =this.state.repositoryNames ;
            if( arrayvar.filter(value=> value===content).length===0){
                arrayvar.push(content);
                this.setState({repositoryNames: arrayvar});
            }else{
               form.querySelectorAll("button[type='submit']")[0].setAttribute("disabled", true) ; //Finding elements by class name does not work in Internet Explorer 8 
            }
            
 
    }

    render() {
          var repositoryArray = this.state.repositoryNames;
        return (
            <div>
               
                <NewRepoForm repositoryArrays={repositoryArray}  handleSubmit={this.handleSubmit}   ListallRepo={this.state.repositoryNames}    />
                <RepositoryList repositoryArrays={repositoryArray} ClickRemove={this.btnremoveRepo} />
            </div>
        )
    }
}

export default Dashboard