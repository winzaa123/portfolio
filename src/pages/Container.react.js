import React from 'react'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'
import {error_page} from './error.react';
import Stargazer from './Stargazer.react';
import About from './About.react';
import logoBulma from "../resources/img/bulma-logo.png";
import App from '../App';

const routes = [
  { path: '/',
    exact: true,
    component:  App,
    label : "Home",
    isSystem: true
  },
  { path: '/About',
   component:About,
   label : "About",
    isSystem: true
  },
  { path: '/Stargazer/:ownerName/:repoName',
    component: Stargazer,
    label : "Stargazer",
     isSystem: true
  },
  {
    component: error_page,
    label : "404"
  }
]
 
const MenuLink = ({ label, to, activeOnlyWhenExact,mobile }) => (
      <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
        <Link className={  mobile? (  match ? 'nav-item is-tab is-hidden-tablet is-active' : 'nav-item is-tab is-hidden-tablet') 
                                  :  (  match ? 'nav-item is-tab is-hidden-mobile is-active' : 'nav-item is-tab is-hidden-mobile') 
                        }   to={to}>
          {label} 
        </Link>
      )}/>
);
class Container extends React.Component {
      constructor() {
      super();
        this.nav_mobile_click = this.nav_mobile_click.bind(this);
  
    }
   
      nav_mobile_click(e) {
        let class_name = e.target.className.replace(/\s/g, ''); //nav-menu.is-active
         
        // console.log(this.refs.menu_nav_mobile);
        if(class_name === "nav-toggle"){
          e.target.className = "nav-toggle is-active";
          this.refs.menu_nav_mobile.className = "nav-right nav-menu is-active";
        }else{
           e.target.className = "nav-toggle" ;
            this.refs.menu_nav_mobile.className = "nav-right nav-menu";
        }
  }
         render() {
            return (
              <Router >
                  <div>
                        <nav className="nav has-shadow">
                              <div className="container">
                                  <div className="nav-left">
                                  <a className="nav-item">
                                      <img src={logoBulma}  alt="Bulma logo" />
                                  </a>
                                  
                                  <MenuLink activeOnlyWhenExact={true} to="/" label="Home"/>
                                  <MenuLink to="/About" label="About"/>
                                  </div>
                                  <span className="nav-toggle" onClick={this.nav_mobile_click}  >
                                  <span></span>
                                  <span></span>
                                  <span></span>
                                  </span>
                                  <div className="nav-right nav-menu" ref="menu_nav_mobile"     >
                                    <MenuLink activeOnlyWhenExact={true} to="/" label="Home" mobile={true}/>
                                    <MenuLink to="/About" label="About" mobile={true}/>
                                  </div>
                              </div>
                          </nav>
                  <Switch>
                    {routes.map((route, index) => (
                        // Render more <Route>s with the same paths as
                        // above, but different components this time.
                        <Route
                          key={index}
                          path={route.path}
                          exact={route.exact}
                          component={route.component}
                        />
                      ))}
      
                 
                  </Switch>
                    </div>
                </Router>
            );
          }
}

export default Container