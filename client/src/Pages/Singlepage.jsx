import React from 'react'
import { useParams } from 'react-router'

export default function Singlepage() {
    const {id} = useParams()

  return (

    <div>Singlepage  {id}</div>
  )
}
