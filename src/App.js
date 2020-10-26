import React, { useRef, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './shared/List';
import { last, defaultTo, uniq, includes, filter} from 'lodash'

const myList = [];


export default function App() {
  const [list, setList] = useState([...myList]);
  const [selectedList, setSelectedList] = useState([]);
  const inputRef = useRef(null);

  const clearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  const handleInputKeyDown = e => {
    if(e.key === 'Enter') {
      setList([
        ...list,
        {
          id: defaultTo(last(list), {id: 0}).id + 1,
          value: e.target.value
        }
      ]);
      clearInput();
    }
  };

  const handleSelect = e => {
    if(includes(selectedList, e)) {
      setSelectedList(filter(selectedList, selectedElement => selectedElement !== e));
    } else {
      setSelectedList(uniq([...selectedList, e]));
    }
  }

  const handleDelete = e => {
    setList(filter(list, selectedElement => selectedElement !== e));
    setSelectedList(filter(selectedList, selectedElement => selectedElement !== e));
  };

  return (
    <div>
      <div>
        <input ref={inputRef} type="text" onKeyDown={handleInputKeyDown} />
      </div>
      <List list={list}
            selected={selectedList} 
            onSelect={handleSelect} 
            onDelete={handleDelete}/>
    </div>
  );
}
