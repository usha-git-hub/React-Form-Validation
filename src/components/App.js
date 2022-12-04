
import React from 'react';
/**
 * @task :add validation to email, if email is not valid, if not valid email, dont allow to submit
 * @error_message :  "Email is invalid"  if email is wrong. (must be same message) 
 * 
 * 
 */

function App()=> {

const handleClick=()=>{
 document.getElementById('button-a').addEventListener('click',(e)=>{
 console.log("button one")
 })
 document.getElementById('button-b').addEventListener('click',(ev)=>{
  console.log("button one")
})
}


  /*return(
    <div className="App">
      <h1>How About Them Apples</h1>
      <form>
        <fieldset>
          <label>
            <p>First Name</p>
            <input id='fname' name="name"  ref={fnameRef}/>
            <br></br>
            <p>Email</p>
            <input id='lname' name="name"   ref={emailRef}/>
            {error && <h2 style={{color: 'red'}}>{error}</h2>}
          </label>
        </fieldset>

        <button id='submit' type="submit">Submit</button>
      </form>
      {
        data.fname != undefined && (
          <div>
          <h1>{data.fname}</h1>
          <h2>{data.lname}</h2>
          </div>
        )
      }
    </div>
  )
}
*/
return( 
 <>
 <button onClick={handleClick}
id="button-a">click 1</button>
<button onClick={handleClick}
id="button-b">click 2</button>
</>
);
}

export default App;
