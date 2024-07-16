// src/components/Sample.test.tsx
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Sample } from './Sample'

describe('Sample', () => {
  it('renders the title', () => {
    render(<Sample title="Test Title" />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })
})