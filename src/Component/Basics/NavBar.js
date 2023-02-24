import React from 'react'

const NavBar = ({filterFunction, catagoryNameList}) => {
  return (
    <>
    <nav className='navbar'>
        <div className='btn-group'>
          {catagoryNameList.map((element) => {
            return (
              <>
                <button className='btn-group__item' onClick={() => filterFunction(element)} key={element}>{element}</button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  )
}

export default NavBar