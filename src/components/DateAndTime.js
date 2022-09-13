import React from 'react'
import { localTime } from '../helpers'

const DateAndTime = ({weather : { dt, timezone }}) => {
  return (
    <div>
      <span>{localTime(dt, timezone)}</span>
    </div>
  )
}

export default DateAndTime