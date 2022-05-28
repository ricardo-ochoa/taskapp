import { Button, Card, CardContent, CardHeader, Grid, IconButton, Stack, Typography } from '@mui/material';
import type { NextPage } from 'next'
import { Layout } from '../componets/layout';
import { EntryList } from '../componets/ui';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import AddIcon from '@mui/icons-material/Add';
import NewEntry from '../componets/ui/NewEntry';
import EntryWall from '../componets/ui/EntryWall';


const HomePage: NextPage = () => {
  return (
    <Layout title=' TaskApp'>

      <Button size='large' variant="contained" startIcon={ <AddIcon /> } sx={{ margin:"1.5rem 0 1.5rem 0" }} >
       Add Wall
      </Button>
      
      <EntryWall/>
    </Layout>
  )
}

export default HomePage;
