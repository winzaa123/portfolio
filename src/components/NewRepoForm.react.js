import React from 'react'
 
import RepoListInput from './RepoListInput.react'
import RepoListItemLoading from './RepoListItemLoading.react' 
import { fetchSearchRepository } from 'api'
class NewRepoForm extends React.Component {
         state = {
    list_repo: [],
    loading : "No"
    }
 
    ClickChooseRepo( e,value){
       
       this.refs.reponame.value = value;
       this.refs.add_repo.click();
           this.setState({
                                list_repo: [],
           });
         this.refs.reponame.value = null;
    }
     componentDidMount() {
        window.addEventListener("keyup",this._inputKey);
    }
      componentWillUnmount() {
        window.removeEventListener('keyup', this._inputKey)
    }
      _inputKey = (e) => {
          let q = e.target.value;
           this.setState({
                                loading : "Wait"
                            })
                   if(q){
                    fetchSearchRepository(q)
                        .then((result) => {
                            this.setState({
                                list_repo: result,
                                loading : "True"
                            })
                        })
                        
                }else{
                    this.setState({
                                list_repo: [],
                                loading :"No"
                            })
                }
    }
    clear_disabled(e){
        if(this.refs.add_repo.getAttribute("disabled"))
        this.refs.add_repo.removeAttribute("disabled");
    }
    render() {
            const EventClick = this.ClickChooseRepo.bind(this);
        return (
            <div className="section ">
                <form  onSubmit={this.props.handleSubmit}  >
                    <div className="field  has-addons  ">
                
                        <p className="control">
                            <input className="input is-large" type="text" placeholder="Enter Repository Name"  name='reponame' ref="reponame" onChange={this.clear_disabled.bind(this)}    />
                        </p>
                         <p className="control">
                        <button className="button is-info is-large" type="submit"  ref='add_repo'>
                        Add Repository
                        </button>
                        </p>
                      
                           { this.state.loading==="Wait" ? <RepoListItemLoading/> :   <RepoListInput itemList={this.state.list_repo.items} ClickRepo={EventClick} ListallRepo={this.props.ListallRepo}/>}
                           
                    </div>
                     
                </form>
            </div>
        )
    }

}


 
 
export default NewRepoForm 