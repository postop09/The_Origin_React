import React, { useState } from 'react'

// React.memo 는 컴포넌트 랜더링이 될 필요 없는 부분에 적용시켜 준다.
const List = React.memo(({id, title, completed, todoData, setTodoData, handleClick, provided, snapshot}) => {
  console.log('List rendered');
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.completed = !data.completed;
      };
      return data;
    });
    setTodoData(newTodoData);
  };
  // 목록 내용 수정
  const editList = () => {
    console.log(title);
  }
  
  // key값은 고유한 값을 사용(id값) : key 값을 통해, 바뀐 부분을 인식할 수 있다.
  return (
    <div
      key={id} {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps}
      className={`${snapshot.isDragging ? 'bg-gray-400' : 'bg-gray-100'} flex items-center justify-between w-full px-4 py-1 my-2 text-gray-600 border rounded`}> 
      <div className='flex items-center'>
        <input
          type='checkbox'
          defaultChecked={false}
          onChange={() => handleCompleteChange(id)}
          className='mr-2 hover:cursor-pointer'>
        </input>
        {''}
        <span className={completed ? 'line-through' : undefined}>{title}</span>
      </div>
      <div className='flex items-center'>
        <button
          type='button'
          onClick={() => editList()}
          className='border-2 border-blue-400 rounded text-sm mr-4 p-1 text-blue-400 hover:bg-blue-400 hover:text-white'
        >
        수정
        </button>
        <button
          type='button'
          onClick={() => handleClick(id)}
          className='border-2 border-red-400 rounded text-sm p-1 text-red-400 hover:bg-red-400 hover:text-white'>
          삭제
        </button>
      </div>
    </div>
  )
})
export default List