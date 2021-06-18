import { Button, Typography } from '@material-ui/core';
import './App.css';
import Layout from './components/Layout';

function App() {
 return (
   <Layout>
     <Typography variant="h4">Hello world</Typography>
     <Button variant="outlined">Click</Button>
   </Layout>
 );
}

export default App;
