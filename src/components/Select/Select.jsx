import React, { useState } from 'react'

const Select = ({ props, setData }) => {
    const [value, setValue] = useState('Select me')

    const setOurSelect = (e) => {
        setValue(e.target.value);
        setData(e.target.value)
    }
    return (
        <select
            onChange={(e) => setOurSelect(e)}
            className='select_item'

        >
            <option value="">{` Select me`}</option>
            {props.map((item) => (
                <option key={item.id} value={item.name}>
                    {item.name}
                </option>
            ))}
        </select>



    )
}

export default Select