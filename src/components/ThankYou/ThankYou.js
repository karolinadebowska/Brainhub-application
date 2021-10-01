import {Link} from "react-router-dom";

const ThankYou = (props) =>
  <div className='parent'>
    <div className='container m-5' style={{textAlign:"center"}}>
      <h3 data-testid='success_header'>The event has been added to the database.</h3>
      <br/>
      <p>
        <Link to="/" onClick={props.handler}>Add more </Link>
      </p>
    </div>
  </div>

export default ThankYou;