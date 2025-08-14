import * as React from 'react';
import { FunctionComponent } from 'react';

interface CreatedProps {
    inputs : {[key : string]: number}
}
 
const Created: FunctionComponent<CreatedProps> = ({inputs}) => {

    const renderInputs = (inputs: {[key : string]: number}) => {
        const result = [];
        for (const key in inputs){

            if (inputs[key] > 0){
                for (let i = 0; i < inputs[key]; i++){
                    switch (key) {
                        case 'input': 
                        result.push(<input type={'text'} key={`text${i}`}/>); break
                        case 'textarea' : result.push(<textarea key={`textarea${i}`}/>); break
                        case 'checkbox' : result.push(<input type={'checkbox'} key={`checkbox${i}`}/>); break
                    }
                }
            }
        }

        return result
    }

    return ( 
    <div>
        {renderInputs(inputs)}
    </div> );
}
 
export default Created;