import React from 'react'

export default function Delete({setTodoData}) {
  // 리스트 모두 지우기
  const removeList = () => {
    setTodoData([]);
    // 로컬 스토리지의 기록도 지워져야 함.
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
