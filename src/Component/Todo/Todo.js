import React from 'react';
import './style.css';

const getLocalData = () => {
  const lists = localStorage.getItem("myTodoList");
  if(lists) {
    return JSON.parse(lists);
  } else {
    return [];
  }
}

const Todo = () => {

  const [inputdata, setInputData] = React.useState("");
  const [items, setItems] = React.useState(getLocalData());
  const [isEditItem, setIsEditItem] = React.useState("");

  const addItem = () => {
    if(!inputdata){
      alert("Please fill the data");
    } 
    else if (inputdata && isEditItem) {
      setItems(items.map((element) => {
        if(element.id === isEditItem){
          // element.title = inputdata;
          return {...element, title:inputdata};
        }
        return element;
      }));
      setInputData("");
      setIsEditItem("");
    }
    else {
      const myInputData = {
        id: new Date().getTime().toString(),
        title: inputdata
      };
      setItems([...items, myInputData]);
      setInputData("");
    }
  }

  const updateItem = (id) => {
    const item_todo_edited = items.find((element) => {
      return element.id === id;
    });
    // const updatedItem = items.filter((element) => {
    //   return element.id === id;
    //     // return element.title;
    // });
    // setInputData(updatedItem[0].title);
    // setItems(updatedItems);
    setIsEditItem(item_todo_edited.id);
    setInputData(item_todo_edited.title);
  }

  const deleteItem = (id) => {
    const updatedItems = items.filter((element) => {
      return element.id !== id;
    });
    setItems(updatedItems);
  }

  const deleteAllItem = () => {
    setItems([]);
  }

  React.useEffect(() => {
    localStorage.setItem("myTodoList",JSON.stringify(items))
  }, [items]);

  return (
    <>
      <div className='main-div'>
        <div className='child-div'>
          <figure>
            <img src='https://cdn.pixabay.com/photo/2013/07/12/19/03/checklist-154274__480.png' alt='todologo' style={{height: "10rem", width: "8rem"}}/>
            <figcaption>Add Your List Here</figcaption>
          </figure>

          {/* show text field */}
          <div className='addItems'>
            <input type="text" 
              placeholder='Add Item' 
              className='form-control'
              value={inputdata}
              onChange={(event) => setInputData(event.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  addItem();
                }
              }}
            />
            {isEditItem === "" ? <i className="fa fa-plus add-btn" onClick={addItem}></i> : <i className="fa fa-edit add-btn" onClick={addItem}></i>}
            {/* <i className="fa fa-plus add-btn" onClick={addItem}></i> */}
          </div>

          {/* show our items */}
          <div className='showItems'>
            {items.map((element, index) => {
              return (
              <div className='eachItem' key={index}>
                <h3>{element.title}</h3>
                <div className='todo-btn'>
                <i className="far fa-edit add-btn" onClick={() => updateItem(element.id)}></i>
                <i className="far fa-trash-alt add-btn" onClick={() => deleteItem(element.id)}></i>
                </div>
              </div>
            );
            })}
          </div>

          {/* remove all button */}
          <div className='showItems'>
            <button className='btn effect04' data-sm-link-text="Remove All" onClick={() => deleteAllItem()}>
              <span>
                Check List
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;