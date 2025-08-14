import * as React from 'react';
import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';

 
const Home: FunctionComponent= () => {
    const navigate = useNavigate()

    const handleNavigate = () => navigate('/form')
    return ( 
    <div>
        <button className='btn btn-primary' onClick={handleNavigate}>FORM</button>
        
    </div> );
}
 
export default Home;