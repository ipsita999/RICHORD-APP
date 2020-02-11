import React, { Component } from 'react';
import Navbar from "./Navbar"


   class NavChange extends Component {

   constructor(props) {
    super(props);

      this.state = {  scrollBackground: 'nav-bg' };
      this.handleScroll = this.handleScroll.bind(this);
   }


   handleScroll(){
      this.setState ({
         scrollBackground: !this.state.scrollBackground
       })
    }

 render() {
 const scrollBg = this.scrollBackground ? 'nav-bg scrolling' : 'nav-bg';

 return (
   <div>

       <Navbar inverse toggleable className={this.state.scrollBackground} 
                                  onScroll={this.handleScroll}>
        ...
      </Navbar>

    </div>
   );
  }
}

export default NavChange;