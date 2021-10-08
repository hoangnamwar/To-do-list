import React, { FormEvent } from 'react'
import { useState } from 'react'

import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Input, InputAdornment, Theme } from '@material-ui/core'


const Form = () => {

    const styles = FormStyle();

    const dispatch = useDispatch();
    const { plusItem } = bindActionCreators(actionCreators, dispatch)

    const [text, setText] = useState('');

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // console.log(text);
        plusItem(text);
        setText('');
    }

    return (
        <form
            className={styles.root}
            onSubmit={onSubmit}
            >
            <Input
                className={styles.input}
                type="text" 
                value={text} 
                placeholder="Create a new todo..." 
                onChange={evt => setText(evt.target.value)} 
                startAdornment={
                    <InputAdornment 
                        position="start"
                    >
                        <div className={styles.todoItemEmpty}/>
                        {/* <img  src={ IconCheckLogo } alt="Icon" /> */}
                    </InputAdornment>
                }
            />
        </form>
    )
}

//******************* Style ********************/

const FormStyle = makeStyles((theme: Theme) => createStyles({
    root:
    {
        backgroundColor: 'white',
        boxShadow: '0px 35px 50px #c2c3d680',
        width: '100%',
        borderRadius: '5px',
    },
    input:
    {
        padding: '20px',
        width: '100%',
        fontWeight: 500,
    },
    todoItemCheck:
    {
        background: 'url(/static/media/icon-check.a8fb15d0.svg), linear-gradient( 135deg, #57ddff, #c058f3)' ,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'inline-block',
        borderRadius: '50%',
        height: '24px',
        width: '24px',
    },
    todoItemEmpty:
    {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'inline-block',
        borderRadius: '50%',
        height: '22px',
        width: '22px',
        border: '1px solid #e4e5f1',
        background: 'transparent',
        marginRight: '10px'
    }, 
    '@media (max-width: 600px)':
    {
        input:
        {
            padding: '17px',
        }
    }
}))

export default Form
