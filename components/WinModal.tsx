import './WinModal.css'
import Link from 'next/link'

export default function Component() {
  return (
    <div className='modal-overlay'>
      <div className='modal-content'>
        <h2>You Won!</h2>

        <Link href='/'>Close</Link>
      </div>
    </div>
  )
}
