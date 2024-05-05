import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Welcome = () => {

  const [resData, setResData] = useState();
  const [oringinalResData, setOriginalResData] = useState();
  const [reload, setReload] = useState(1);
  const [loader, setLoader] = useState(false);
  const [options, setOptions] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  useEffect(()=>{
    setLoader(true);
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => {
      // Handle successful response
      console.log('Response:', response.data);
      setOriginalResData(response.data)
      setLoader(false);
      let temp = [];
      temp.push({
        label: "All",
        value: 1
      })
      response.data?.forEach((item)=>
        {
          temp.push({label: item.address.zipcode, value: item.address.zipcode })
        }
      )
      setOptions(temp);
    })
    .catch(error => {
      // Handle error
      console.error('Error:', error);
      setLoader(false);
    });

  },[reload])

  useEffect(()=>{
    if(oringinalResData){
      setResData(oringinalResData)
    }
  },[oringinalResData])
  return (
    <div>
    <button onClick={()=>{setReload(reload+1)}}>Refresh</button>
    <div className='d-flex'>

      <input value={searchInput} onChange={(e)=>{
        setSearchInput(e.target.value);
      
      }} />
            <button onClick={()=>{
                let temp = oringinalResData
                if(searchInput === ""){
                  setResData([]);
                }
                else
                setResData(temp.filter((item)=> item.name.toLowerCase()?.includes(searchInput.toLowerCase())))
            }}>
        Search
      </button>
    </div>
    <div>
      filter
      <select 
        onChange={(e)=> {
          let temp = oringinalResData
          console.log("all",temp,"here", e.target.value);
          if(parseInt(e.target.value) === 1){
            console.log("all",temp,"here");
            setResData(temp);
          }else{

            setResData(temp?.filter((item) => item.address.zipcode === e.target.value))
          }
        }}>
        Zipcode
        {
          options?.map((item)=>

              <option value={item?.value}>
                  {item?.label}
              </option>
          )
        }
      </select>
    </div>
{
  loader ?
  <h4>Loading ...</h4>
  :
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Address</th>
          <th>Phone</th>
          <th>Website</th>
          <th>Company</th>
        </tr>
      </thead>
      <tbody>
        {resData?.map(user => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</td>
            <td>{user.phone}</td>
            <td>{user.website}</td>
            <td>{user.company.name}</td>
          </tr>
        ))}
      </tbody>
    </table>
}
    </div>
  )
}

export default Welcome
