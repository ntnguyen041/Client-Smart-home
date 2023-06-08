import React, { useEffect, useRef } from 'react'
import iro from '@jaames/iro'

const ColorPicker = ({ color, onChange }) => {
  const ref = useRef()
  const colorPicker = useRef()
  useEffect(() => {
    const cp = (colorPicker.current = new iro.ColorPicker(ref.current, {
      color,
    }))
    cp.on('color:change', (color) => onChange(color.hexString))
  }, [])
  return <div ref={ref} />
}

export default ColorPicker