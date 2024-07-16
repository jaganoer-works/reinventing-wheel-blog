// src/components/Sample.tsx
import React from 'react'

type Props = {
  title: string
}

export const Sample: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>
}