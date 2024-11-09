import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import App from "../App"

describe('てすと', () => {
  test('てすと', () => {
    render(<App />)
    expect(screen.getByText("Test")).toBeInTheDocument();
  })
})
