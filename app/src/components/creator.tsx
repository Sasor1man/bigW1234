import * as React from 'react';
import { FunctionComponent } from 'react';
import Created from './created';

 
const Creator: FunctionComponent = () => {

    const [inputs, setInputs] = React.useState(0)
    const [textareas, setTextareas] = React.useState(0)
    const [checkboxes, setCheckboxes] = React.useState(0)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()

        const form = e.currentTarget.form

        if (form) {
            const input = form.elements.namedItem('inputNum') as HTMLInputElement
            const textarea = form.elements.namedItem('textareaNum') as HTMLInputElement
            const checkbox = form.elements.namedItem('checkboxNum') as HTMLInputElement

            setInputs(Number(input.value))
            setTextareas(Number(textarea.value))
            setCheckboxes(Number(checkbox.value))
        }
    }

    return ( 
    <div>
        <form >

        <ul className='list-group'>
            <li className="list-group-item">
                <label htmlFor="inputNum">Inputs</label>
                <input type="number" name="inputNum" id="inputNum" />
            </li>
            <li className="list-group-item">
                <label htmlFor="textareaNum">Textarea</label>
                <input type="number" name="textareaNum" id="textareaNum" />
            </li>
            <li className="list-group-item">
                <label htmlFor="checkboxNum">Checkbox</label>
                <input type="number" name="checkboxNum" id="checkboxNum" />
            </li>
        </ul>
        <button className='btn btn-primary' onClick={(e) => handleClick(e)}>Build</button>
        </form>
        <Created inputs={{input: inputs, textarea :textareas, checkbox : checkboxes}}/>
    </div> );
}
 
export default Creator;