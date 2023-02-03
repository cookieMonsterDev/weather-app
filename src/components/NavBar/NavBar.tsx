import { useRouter } from 'next/router'
import style from './Navbar.module.scss'
import SearchBar from '../SearchBar/SearchBar'
import { Button } from '@mui/material'
import Link from 'next/link'

const Navbar = () => {

  const {asPath} = useRouter()
  
  if (asPath === '/login' || asPath === '/register') {
    return (
      <nav className={style.container} />
    )
  }

  return (
    <nav className={style.container}>
      <section>
        <SearchBar />
      </section>
      <section>
        <Link href="/login">
          <Button variant="contained">Sign in</Button>
        </Link>
      </section>
    </nav>
  )
}

export default Navbar