import axios from 'axios'
import { useEffect,useState } from 'react'
import Card from './components/Card'
import Buttons from './components/Buttons'

const App = () => {

const [userdata, userSetdata] = useState([]);
const [page, setpage] = useState(1);

const getData = async () => {
console.log('process is running');
const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=10`);
userSetdata(response.data);
console.log(userdata);
}

useEffect(() => {
  getData();
},[page])

let noData = <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>loading...</div>

if(userdata.length > 0){
  noData = userdata.map((item,idx) => {
    return <div className='items-center text-center' key={idx}>
      <Card item={item} idx={idx} />
    </div>
  })
}



  return (
    <div className='bg-slate-900 text-white h-screen overflow-auto'>
      {/* <button className='bg-purple-500 hover:bg-purple-600 text-white m-3 ml-6 font-bold py-2 px-4 rounded' onClick={getData}>
        Get Data
      </button> */}
      <div className='flex flex-wrap gap-3 justify-center'>
        {noData}
      </div>
      {/* This can be used to send data from child to parent component. Here we are sending page and setpage to Buttons component so that we can change the page number from there. */}
      <Buttons page={page} setpage={setpage} userSetdata={userSetdata} />
    </div>
  )
}

export default App
