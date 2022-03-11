// rafce
import React from 'react';
import {DragDropContext, Draggable, Droppable} from 'react-beautiful-dnd';
import List from './List';

const Lists = React.memo(({todoData, setTodoData, handleClick, value, setValue}) => {
  console.log('Lists rendered');
  const handleEnd = (result) => {
    // console.log(result);
    if (!result.destination) return;

    const newTodoData = todoData;
    // 1. 변경시키는 아이템을 배열에서 지운다.
    // 2. return 값으로 지워진 아이템을 잡는다.
    const [reOrderedItem] = newTodoData.splice(result.source.index, 1);
    // 3. 원하는 자리에 배치시킨다.
    newTodoData.splice(result.destination.index, 0, reOrderedItem);
    setTodoData(newTodoData);
  }

  return (
    <div>
      <DragDropContext onDragEnd={handleEnd}>
        <Droppable droppableId='todo'>
          {(provided) => (
            <div {...provided.droppableProps} ref={provided.innerRef}>
              {todoData.map((data, index) => (
                <Draggable
                  key={data.id}
                  draggableId={data.id.toString()}
                  index={index}>
                    {(provided, snapshot) => (
                      <List
                        key={data.id}
                        id={data.id}
                        title={data.title}
                        completed={data.completed}
                        todoData={todoData}
                        setTodoData={setTodoData}
                        handleClick={handleClick}
                        value={value}
                        setValue={setValue}
                        provided={provided}
                        snapshot={snapshot}
                      />
                    )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
})
export default Lists