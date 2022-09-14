import React from 'react'
import { localTime } from '../helpers'

const DateAndTime = ({weather : { dt, timezone }}) => {
  return (
    <div>
      <span className='number'>{localTime(dt, timezone)}</span>
    </div>
  )
}

export default DateAndTime