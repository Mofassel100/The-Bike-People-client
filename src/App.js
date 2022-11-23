import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routers/Routes';

function App() {
  return (
    <div style={{display:"grid",
    justifyContent:"center",
    alignItems:"center"}} className=" max-w-[1200px] ">
      <RouterProvider router={router}></RouterProvider>
     
    </div>
  );
}

export default App;
