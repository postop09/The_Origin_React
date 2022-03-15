import React, { useEffect, useState } from 'react'

const List = React.memo(({id, title, completed, todoData, setTodoData, handleClick, provided, snapshot}) => {
  const handleCompleteChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if(data.id === id) {
        data.completed = !data.completed;
      };
      return data;
    });
    setTodoData(newTodoData);
  };
  // 작성한 목록 수정
  const [edit, setEdit] = useState(false);
  const [editText, setEditText] = useState(title);
  const editList = (id) => {
    setEdit(!edit);
    if (edit) {
      let editTodoData = todoData.map((data) => {
        if (data.id === id) {
          data.title = editText;
        }
        return data;
      })
      setTodoData(editTodoData);
    }
  }
  const handleEditText = (e) => {
    setEditText(e.target.value);
  }
  // 로컬 스토리지 데이터 저장
  useEffect(() => {
    localStorage.setItem('saveLists', JSON.stringify(todoData));
  },[todoData])

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
        <p className={completed ? 'line-through' : undefined}>{edit === false ? editText : <input type='text' onChange={handleEditText}/>}</p>
      </div>
      <div className='flex items-center'>
        <button
          type='button'
          onClick={() => editList(id)}
          className='border-2 border-blue-400 rounded text-sm mr-4 p-1 text-blue-400 hover:bg-blue-400 hover:text-white'
        >
        {!edit ? '수정' : '적용'}
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