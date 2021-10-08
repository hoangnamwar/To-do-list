import React from 'react'
import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core'

const Info = () => {
    const styles = InfoStyle();

    return (
        <div className={styles.root}>
            <p >
                Todo App from Hoang Nam. Idea from 
                <a href="https://frontendmentor-todo-app-react.vercel.app/"> Frontendmentor </a>
                Sourcode on <a href="https://github.com/hoangnamwar/To-do-list/tree/app"> github </a>
            </p>
        </div>
        
    )
}

const InfoStyle = makeStyles((theme: Theme) => createStyles({
    root:
    {
        width: '100%',
        display: 'block',
        fontSize: '12px',
        letterSpacing: '2.5px',
        // color: '#777a92',
        color: 'white',
        // borderTop: '1px solid #3f51b5',
        // boxShadow: '35px 0px 0px #c2c3d680',
        background: 'linear-gradient(135deg, #c058f3, #57ddff)',
        padding: '10px',
        fontFamily: "'Josefin Sans', sans-serif",
        textAlign: 'center',
    }
}))


export default Info;