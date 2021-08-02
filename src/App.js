import './App.css';
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import keyimage from '/home/keny/tlfrontend/src/images/keyboard.png';
import {ReactComponent as FacebookIcon} from '/home/keny/tlfrontend/src/images/facebook.svg';
import {ReactComponent as InstaIcon} from'/home/keny/tlfrontend/src/images/instagram.svg';
import {ReactComponent as TwitterIcon}from '/home/keny/tlfrontend/src/images/twitter.svg';
import {ReactComponent as PhoneIcon}from'/home/keny/tlfrontend/src/images/phone.svg';
function App() {
  return (
  <>
  <body className="bg-mydarkcolor">
<Navbar />
<div className="pb-8 pl-20 mt-20 ml-96"> 
  <p className="ml-64 text-9xl font-sans text-white ">TYPING</p>
  <p className="mt-8 ml-96 text-7xl text-yellow-color font-postcolombo">LORD</p>
  <p className="mt-16 ml-72 text-white text-3xl">"With HardWork and Passion"</p>
</div>
<div className="-mt-80 pb-10">
<img src={keyimage} className=" ml-24"  alt="keyboardimage" />
</div>
<div className="flex flex-row  ml-20 mt-24">
<Link to=""> <FacebookIcon className="fill-current text-yellow-color w-12 h-12 mr-12"/></Link> 
<Link to=""><InstaIcon className="fill-current text-yellow-color w-12 h-12 mr-12"/></Link>
<Link to=""><TwitterIcon className="fill-current text-yellow-color w-12 h-12 mr-12"/></Link>
</div>
<div className=" flex justify-end mr-96 -mt-16 pb-6">
<div className=" relative pl-12 pr-4 mt-4 bg-yellow-color rounded-md">
<Link to="" className="text-3xl"><PhoneIcon className="fill-current text-black w-8 h-8 absolute right-40 insest-y-1"/>
 Contact us</Link>
</div>
</div>
</body>
  </>
  );
}

export default App;
