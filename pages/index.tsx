import { Typography } from '@mui/material';
import type { NextPage } from 'next'
import { Layout } from '../componets/layout';
import { Navbar, Sidebar } from '../componets/ui';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <Sidebar />
      <Navbar />
      <Typography variant='h1' color="primary" >Hola mundo</Typography>
    </Layout>
  )
}

export default HomePage;
