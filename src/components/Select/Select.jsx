import React, { useState, useContext } from 'react'
import { Data } from '../../App'

const Select = ({ props, setData, differ }) => {

    const { setContcity, setContcountry, setContaddress } = useContext(Data)
    const setOurSelect = (e) => {


        if (differ == 'city') {
            setContcity(e.target.value)
        }
        if (differ == 'country') {
            setContcountry(e.target.value)
        }
        if (differ == 'address') {
            setContaddress(e.target.value)
        }
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