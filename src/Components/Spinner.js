import React from 'react'
import loading from './loading.gif'

export default function Spinner() {
  return (
    <div className="spinner-wrap">
        <img src={loading} alt="Loading" width={72} height={72} />
    </div>
  )
}
