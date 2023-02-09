import Spline from '@splinetool/react-spline';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

export default function App() {
  function onMouseDown(e) {
    console.log(e);
    switch (e.target.name) {
      case 'face':
        console.log('I have been clicked!');
        toast('Het gezicht is aangeklikt');
        break;
      case 'belly':
        console.log('I have been clicked!');
        toast('De buik is aangeklikt');
        break;
      default:
        break;
    }
    
    if (e.target.name === 'face') {
    }
  }

  return (
    <div className='container'>
      <ToastContainer />
      <Spline
        scene="https://prod.spline.design/lkQIpfW1jhzImY3P/scene.splinecode"
        onMouseDown={onMouseDown}
      />
    </div>
  );
}