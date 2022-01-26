import './main-page.css';
import FeaturedHouse from './featured-house';
import Header from './header';
import { useEffect, useMemo, useState, useCallback } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchResults from '../search-results';
import HouseFilter from "./house-filter";
import HouseFromQuery from '../house/HouseFromQuery';
import useHouses from '../hooks/useHouses';
import useFeaturedHouse from '../hooks/useFeaturedHouses';
import HouseContext from '../context/houseContext';

function App() {
  const allHouses = useHouses();
  const featuredHouse = useFeaturedHouse(allHouses);

  
  return (
    <Router>
      <HouseContext.Provider value={allHouses}>
      <div className='container'>
        <Header subtitle="Providing houses all over the world" />
        <HouseFilter />
        <Switch>
          <Route path="/searchresults/:country">
            <SearchResults />
          </Route>

          <Route path="/house/:id">
            <HouseFromQuery />
          </Route>

          <Route path="/">
            <FeaturedHouse house={featuredHouse}></FeaturedHouse>
          </Route>
        </Switch>
      </div>
      </HouseContext.Provider>
    </Router>
      
  );
}

export default App;
