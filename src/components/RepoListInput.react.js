import React from 'react'
import RepoListItem from './RepoListItem.react' 


class RepoListInput extends React.Component {
 

 
    render() {
 
 
    const itemList = this.props.itemList;
    const MyRepo =  this.props.ListallRepo;
    const repositoryFormItems =  !itemList?null:itemList.map( (v) => {
                   if( MyRepo.filter( value => value === v.full_name).length===0){
                      return <RepoListItem   key={v.full_name}   propResult={v}  ClickRepo={this.props.ClickRepo} />
                   }else{
                      return null;
                   }
          
        })    
    return (
                 <ul className="input-lg-live-search"  >
                             {repositoryFormItems}
                                
                        </ul>
    );
    }
}

export default RepoListInput