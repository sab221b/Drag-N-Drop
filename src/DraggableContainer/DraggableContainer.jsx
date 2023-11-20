import { useEffect } from 'react';
import './DraggableContainer.scss';
import { useState } from 'react';

function DraggableContainer({ children }) {

  const childrenComponents = children.map((item, index) => {
    return {
      ...item,
      id: String(new Date().getTime() + index)
    }
  })
  const [list, setList] = useState(childrenComponents);
  const [dragItem, setDragItem] = useState({})
  const [dropItem, setDropItem] = useState({})

  const allowDrag = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    if (dragItem.item && dropItem.item && dragItem.index !== dropItem.index) {
      dragNdrop();
    } else if (dragItem.item && dropItem.item && dragItem.index === dropItem.index) {
      resetDragDrop();
    }
  }, [dragItem, dropItem])

  const resetDragDrop = () => {
    setDragItem({});
    setDropItem({});
  }

  const onDragStart = (item, index, event) => {
    event.target.style.opacity = '0.4';
    event.dataTransfer.effectAllowed = 'move';
    event?.dataTransfer.setData('text/html', event?.target.innerHTML);
    setDragItem({ item, index });
  }

  const onDragEnter = (event) => {
    if(event.target.classList.contains('draggable')) {
      event.target.classList.add('dragover');
    }
  }

  const onDragLeave = (event) => {
    event.stopPropagation();
    event.target.classList.remove('dragover');
  }

  const onDragEnd = (event) => {
    var listItems = document.querySelectorAll('.draggable');
    [].forEach.call(listItems, function(item) {
      item.classList.remove('dragover');
    });
    event.target.style.opacity = '1';
  }

  const onDrop = (item, index) => {
    setDropItem({ item, index });
  }

  const dragNdrop = () => {
    const temp = list.splice(dragItem.index, 1);
    list.splice(dropItem.index, 0, ...temp);
    setList([...list])
    resetDragDrop();
  }

  return (
    <div className="listWrapper" onDragOver={allowDrag}>
      {list.map((item, index) =>
        <div
          key={item.id}
          className="draggable"
          onDragStart={(event) => onDragStart(item, index, event)}
          onDragEnter={onDragEnter}
          onDragLeave={onDragLeave}
          onDragEnd={onDragEnd}
          onDrop={() => onDrop(item, index)}
          id={item.id}
          draggable={true}
        >{item}</div>
      )}
    </div>
  );
}

export default DraggableContainer;
