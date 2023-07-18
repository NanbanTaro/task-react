import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TaskList from './TaskList';

function MainPage() {
  return (
    <div>
      <h1>PageA</h1>
      <Link to="/Input">Go to Input</Link>
      <TaskList />
      <h1>上にタスクが表示される</h1>
    </div>
  );
}

export default MainPage;
