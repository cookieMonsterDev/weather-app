import { useRouter } from 'next/router'
import style from './Navbar.module.scss'
import SearchBar from '../SearchBar/SearchBar'
import { Button } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

const Navbar = () => {
  const { user } = useSelector(
    (state: RootState) => state.user
  );

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
        {user ? <MenuIcon className={style.icon}/> : <Button variant="contained" onClick={handleClick}>Sign in</Button>}
      </section>
    </nav>
  )
}

export default Navbar