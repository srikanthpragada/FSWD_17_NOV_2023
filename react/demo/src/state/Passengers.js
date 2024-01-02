import React, {useState} from 'react'

function AddPassenger( {addPassenger}) {
    var [passenger, setPassenger]= useState({ name :'', mobile:''})

    function submitProcess(e) {
        e.preventDefault();  // cancels form submission
        addPassenger(passenger)
    }
    function updateName(e){
        setPassenger( { ...passenger, name: e.target.value})
    }

    function updateMobile(e){
        setPassenger( { ...passenger, mobile : e.target.value})
    }
    return(
      <>
       <h3>Add Passenger</h3>
       <form onSubmit={submitProcess}>
         Name : <input required type="text" value={passenger.name}
                      onChange={updateName} />*
         Mobile : <input  required type="text" value={passenger.mobile}  
                      onChange={updateMobile} />*
         <p></p>
         <button>Add</button>
       </form>
      </>
    )
}

export default function Passengers() {
  var [passengers, setPassengers]   = useState([])

  function addNewPassenger(passenger) {
      setPassengers( [...passengers, passenger])
      console.log(passengers)
  }
  return (
    <>
     <AddPassenger addPassenger= {addNewPassenger} />

    </>

  )
}
