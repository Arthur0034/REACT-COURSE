import './Input.css'
import PropTypes from 'prop-types'

export default function Input(props) {
    
    return (
        <div className="input-container">
            <label htmlFor="">{props.label}: {props.inputValue}</label>
            <input
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                required={props.required}
                onChange={props.onChange}
            />
        </div>
    )
}

Input.prototype = {
    label: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    inputValue: PropTypes.string,
    onChange: PropTypes.func,
    required: PropTypes.bool,
}