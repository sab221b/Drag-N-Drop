import { useEffect } from 'react';
import './DraggableContainer.css';
import { useState } from 'react';

function DraggableContainer(props) {

  const childrenComponents = props.children.map((item, index) => {
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
    if (dragItem.item && dropItem.item) {
      if (dragItem.index === dropItem.index) {
        return;
      } else {
        if (Math.abs(dragItem.index - dropItem.index) === 1) {
          const temp1 = list[dragItem.index];
          list[dragItem.index] = list[dropItem.index]
          list[dropItem.index] = temp1;
        } else {
          const temp = list.splice(dragItem.index, 1);
          list.splice(dropItem.index, 0, ...temp);
          setList([...list])
        }
        resetDragDrop();
      }
    }
  }, [dragItem, dropItem])

  const resetDragDrop = () => {
    setDragItem({});
    setDropItem({});
  }

  const onDrag = (item, index) => {
    setDragItem({ item, index });
  }

  const onDrop = (item, index) => {
    setDropItem({ item, index });
  }

  return (
    <div id="container-1">
      <ul className="targetUL-1" id="targetUL" onDragOver={allowDrag}>
        {list.map((item, index) =>
          <li
            key={item.id}
            onDragStart={() => onDrag(item, index)}
            onDrop={() => onDrop(item, index)}
            className="list-item"
            id={item.id}
            draggable={true}
          >{item}</li>
        )}
      </ul>
    </div>
  );
}

export default DraggableContainer;
