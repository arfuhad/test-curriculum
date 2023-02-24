import React, { useState } from 'react';
import Menu from './menuApi';
import MenuCard from './MenuCard';
import NavBar from './NavBar';
import "./style.css";

const catagoryList = [
  ...new Set(
    Menu.map((element) => {
      return element.category;
    })
  ),
  'all'
];

catagoryList.sort((a, b) => a.localeCompare(b));

const Resturant = () => {

  const [menuData, setMenuData] = useState(Menu);

  const filterItem = (category) => {
    if(category === "all"){
      setMenuData(Menu);
      return;
    } 
    const updatedList = Menu.filter((element) => {
      return element.category === category;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <NavBar filterFunction={filterItem} catagoryNameList={catagoryList}/>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;