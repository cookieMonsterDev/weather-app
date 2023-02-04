import { useRouter } from 'next/router'
import style from './Navbar.module.scss'
import SearchBar from '../SearchBar/SearchBar'
import { Button } from '@mui/material'

const Navbar = () => {

  const router = useRouter()

  const handleClick = () => {
    router.push('/login')
  }

  return (
    <nav className={style.container}>
      <section>
        <SearchBar />
      </section>
      <section>
        <Button variant="contained" onClick={handleClick}>Sign in</Button>
      </section>
    </nav>
  )
}

export default Navbar