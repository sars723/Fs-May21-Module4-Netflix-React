import "./App.css"

import NetflixNavbar from "./components/NetflixNavbar"
import SearchArea from "./components/SearchArea"
import CustomCarousel from "./components/CustomCarousel"
import Footer from "./components/Footer"
import React,{Component} from "react"
import {BrowserRouter as Router,Route} from 'react-router-dom'
import ShowDetail from "./components/ShowDetail"
import CommentArea from "./components/CommentArea"
import TvShows from "./components/TvShows"

class App extends Component{
  state={
    query:""
  }
  render(){
     return (
       <div className="container-fluid mx-3 ">
        <Router>
         <NetflixNavbar
           searchCallback={(childSearchquery) =>
             this.setState({ query: childSearchquery })
           }
         />
         <Route path="/"  exact component={SearchArea}/>
        <Route  path="/Tv-Shows" exact component={SearchArea}/>
         {!this.state.query ? (
          <Route path="/" exact render={props=> <CustomCarousel {...props} searchQuery="Kung Fu Panda" title="Kung Fu Panda" />}/> 
         ) : (
          <Route path="/" exact render={props=><CustomCarousel {...props}
             searchQuery={this.state.query}
             title=" Searched Movies"
           />} />
         )}
       <Route path="/" exact render={props=><CustomCarousel {...props} searchQuery="Luca" title="Luca" />}  />
        <Route path="/" exact render={props=><CustomCarousel {...props} searchQuery="Shrek" title="Shrek" />} />
        <Route path="/" exact render={props=><CustomCarousel {...props} searchQuery="Toy Story" title="Toy Story" />} />

           <Route path="/details/:id" exact render={props=><ShowDetail {...props}/>}/>
           <Route path="/comments/:id" exact render={props=> <CommentArea {...props}/>}/>
           {console.log(this.state.query)}
          {/*  <Route path="/Tv-Shows" exact render={props=> <TvShows series="r{...props}/>}/> */}
           {!this.state.query ? (
            <Route path="/Tv-Shows" exact render={props=> <TvShows title="Vikings" series="Vikings"{...props}/>}/>
           ) : (
            <Route path="/Tv-Shows" exact render={props=> <TvShows title={this.state.query} series={this.state.query}{...props}/>}/>
           )}
           <Route path="/Tv-Shows" exact render={props=> <TvShows title="Scorpion" series="Scorpion"{...props}/>}/>
           <Route path="/Tv-Shows" exact render={props=> <TvShows title="Spartacus" series="Spartacus"{...props}/>}/>
           <Route path="/Tv-Shows" exact render={props=> <TvShows title="Game of Thrones" series="Game of Thrones"{...props}/>}/>
         </Router>
         <Footer />
       </div>
     );
  }
 
}

export default App
// eslint-disable-next-line react-hooks/exhaustive-deps
