import React from 'react'

export default function Delete({setTodoData}) {
  // 목록 모두 삭제
  const removeList = () => {
    setTodoData([]);
    localStorage.removeItem('saveLists');
  }

  return (
    <button
      type='button'
      onClick={removeList}
      className='border-2 rounded shadow border-red-400 p-4 text-red-400 hover:bg-red-400 hover:text-white'>
      모두 지우기
    </button>
  )
}
