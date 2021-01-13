import React,{useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route, useLocation, withRouter} from 'react-router-dom';

import Home from './Home';
import AllSection from './subsection/AllSection';
import BrandingSection from './subsection/BrandingSection';
import DesignSection from './subsection/DesignSection';
import PhotoSection from './subsection/PhotoSection';
import CoffeeSection from './subsection/CoffeeSection';

import '../style/index.css';

function _ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
      window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}
const ScrollToTop = withRouter(_ScrollToTop)


const App = () => {
  return (
    <main>
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/all" component={AllSection}/>
          <Route path="/branding" component={BrandingSection}/>
          <Route path="/design" component={DesignSection}/>
          <Route path="/photo" component={PhotoSection}/>
          <Route path="/coffee" component={CoffeeSection}/>
        </Switch>
      </Router>
    </main>
  );
};

export default App;