import React from 'react';
import SearchForm from './SearchForm';

const apiKey = "e38f1bc56d9486ca37e84667b7a98ba8";

const Nav = props => (

  <header>
  	{ (props.location.pathname.startsWith('/search') )
  		? <SearchForm props={props} apiKey={apiKey} />
  		: <br />  }
  </header>
);
export default Nav;