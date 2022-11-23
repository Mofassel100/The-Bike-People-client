import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routes';

function App() {
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
      <button className="btn btn-info">Info</button>
<button className="btn btn-success">Success</button>
<button className="btn btn-warning">Warning</button>
<button className="btn btn-error">Error</button>
    
    </div>
  );
}

export default App;
