import React, { useEffect } from 'react';
import Form from './components/Form'
import List from './components/List'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { makeStyles, createStyles } from '@material-ui/styles'
import { Theme } from '@material-ui/core'
import Info from './components/Info';

import { useSelector } from 'react-redux';
import { RootState } from './state/reducers';

function App() {

  const dataTodo = useSelector((state: RootState) => state.dataTodo);

  useEffect(() => {
      localStorage.setItem('data', JSON.stringify(dataTodo))
    }, [dataTodo])

  const style = AppStyle()

  return (
    <>
      <Container className={style.root} maxWidth="sm">
        <Typography className={style.todoTitle} > TODO </Typography>
        <Form />
        <br />
        {/* <List /> */}
        <List />
      </Container>      
      <Info />
    </>
  );
}

//******************* Style ********************/
const AppStyle = makeStyles((theme: Theme) => createStyles({
  root:
  {
    marginTop: '65px',
  },
  todoTitle: {
    color: 'white',
    letterSpacing: '15px',
    fontWeight: 700,
    fontSize: '40px',
    paddingBottom: '45px',
    fontFamily: "'Josefin Sans', sans-serif",
  },
  '@media (max-width: 600px)':
  {
    root:
    {
      marginTop: '50px',
    },
    todoTitle: 
    {
      paddingBottom: '40px',
    }
  }

}))

export default App;
