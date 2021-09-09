import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/reducers';
import { bindActionCreators } from 'redux';
import { actionCreators, actionShow } from '../state';
import { TodoItemType } from '../dummyData';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core'

const Footer = () => {

    const dataTodo = useSelector((state: RootState) => state.dataTodo)
    const show = useSelector((state: RootState) => state.show)

    const dispatch = useDispatch();
    const { changeShow } = bindActionCreators(actionShow, dispatch)
    const { removeItem } = bindActionCreators(actionCreators, dispatch)

    const clearCompleted = () =>
    {
        dataTodo.forEach(function (item: TodoItemType)
        {
            if ( item.checked === true )
            {
                removeItem(item.id)
            }
        })
    }

  const styles = FooferStyle();

    return (
        <div className={styles.root}> 
            <div>
                <p className={styles.fontLight}> {dataTodo.length} Item left</p>
            </div>
            <div className={styles.flexWrap}>
                <p 
                    className={`
                        ${styles.fontBold} 
                        ${styles.button} 
                        ${(show === "all") ? styles.active : undefined} 
                    `} 
                    onClick={ () => changeShow("all")} 
                > All </p>
                <p 
                    className={`
                        ${styles.fontBold} 
                        ${styles.button}
                        ${(show === "active") ? styles.active : undefined} 
                    `} 
                    onClick={ () => changeShow("active")} 
                >Active</p>
                <p 
                    className={`
                        ${styles.fontBold} 
                        ${styles.button}
                        ${(show === "completed") ? styles.active : undefined} 
                    `} 
                    onClick={ () => changeShow("completed")} 
                >Completed</p>                
            </div>
            <div>
                <p className={`${styles.fontLight} ${styles.button}`} onClick={ clearCompleted }>Clear Completed</p>                
            </div>


        </div>
    )
}

//******************* Style ********************/

const FooferStyle = makeStyles((theme: Theme) => createStyles({
    root:
    {
        padding: '20px',
        fontSize: '14px',
        fontFamily: "'Josefin Sans', sans-serif",
        backgroundColor: 'white',
        // boxShadow: '0px 35px 50px #c2c3d680',
        // width: '100%',
        borderRadius: '5px',
        // flex
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    flexWrap:
    {
        display: 'flex',
        flexDirection: 'row',
        // width: '166px',
        justifyContent: 'space-between',
        boxSizing: 'border-box',
    },
    fontBold:
    {
        fontSize: '14px',
        fontWeight: 'bold',
        // background: 'transparent',
        // border: 'none',
        padding: '10px',
        color: '#777a92',
    },
    fontLight:
    {
        display: 'block',
        // width: '100px',
        fontSize: '14px',
        letterSpacing: '-0.25px',
        color: '#777a92',
    },
    button:
    {
        cursor: 'pointer',
        '&:hover':
        {
            color: '#4d5066',
        }
    },
    active:
    {
        color: '#3a7cfd',
    }
}));


export default Footer;
