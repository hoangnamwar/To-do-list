import React from 'react'
import { TodoItemType } from '../dummyData';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../state/reducers/index';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';

import { makeStyles, createStyles } from '@material-ui/styles';
import { Theme } from '@material-ui/core'

import Footer from './Footer';

import IconCheck from '../assets/images/icon-check.svg';

const List = () => {

  const dataTodo = useSelector((state: RootState) => state.dataTodo)
  const show = useSelector((state: RootState) => state.show)

  const dispatch = useDispatch();
  const { removeItem, checkItem } = bindActionCreators(actionCreators, dispatch)

  const styles = ListStyle();

  return (
    <div className={styles.root}>
      {
        dataTodo.map((todoItem: TodoItemType) => {
          if (
            show === "all" ||
            (show === "active" && todoItem.checked === false) ||
            (show === "completed" && todoItem.checked === true)
          )
          return (
            <div
              key={todoItem.id}
              className={styles.item}
            >
              <div className={styles.flex}>
                <div
                  onClick={() => checkItem(todoItem.id)}
                >
                  {todoItem.checked ?
                    (
                      <div className={styles.checkIcon}></div>
                    ) :
                    (
                      <div className={styles.emptyIcon}>
                        <div className={styles.empty} />
                      </div>
                    )}
                </div>

                <p
                  className={todoItem.checked ? styles.lineDer : undefined}
                >{todoItem.text}</p>
              </div>

              <button
                className={styles.deleteIcon}
                onClick={() => removeItem(todoItem.id)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"></path></svg>
              </button>

            </div>
          )
        else return null;
        }
        )
      }
      <Footer />
    </div>
  )
}

//******************* Style ********************/

const ListStyle = makeStyles((theme: Theme) => createStyles({
  root:
  {
    backgroundColor: 'white',
    boxShadow: '0px 35px 50px #c2c3d680',
    width: '100%',
    borderRadius: '5px',
    minHeight: '300px',
    marginBottom: '150px',
  },
  item:
  {
    padding: '20px',
    fontSize: '18px',
    fontWeight: 500,
    fontFamily: "'Josefin Sans', sans-serif",
    color: '#777a92',
    borderBottom: '1px solid #e4e4f1',
    alignItem: 'start !important',
    cursor: 'grab',
    // textAlign: 'start !important',

    // flex
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    '&:hover':
    {
      "& $deleteIcon":
      {
        transition: 'opacity 0.5s ease-in-out',
        border: 'none',
        cursor: 'pointer',
        opacity: 1,
      },
      "& $emptyIcon":
      {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'inline-block',
        borderRadius: '50%',
        height: '25px',
        width: '25px',
        background: 'linear-gradient(135deg, #57ddff, #c058f3)',
        marginRight: '10px',
      },
      "& $empty":
      {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'inline-block',
        borderRadius: '50%',
        height: '23px',
        width: '23px',
        background: 'white',
        // marginRight: '10px',
      },
    },
  },
  flex:
  {
    display: 'flex',
    alignItems: 'center',
  },
  empty: {},
  emptyIcon:
  {
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'inline-block',
    borderRadius: '50%',
    height: '23px',
    width: '23px',
    background: 'transperent',
    border: '1px solid #e4e5f1',
    marginRight: '10px',
  },
  checkIcon:
  {
    background: `url(${IconCheck}), linear-gradient(135deg,#57ddff,#c058f3)`,

    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50%',
    display: 'inline-block',
    borderRadius: '50%',
    height: '25px',
    width: '25px',
    marginRight: '10px',
  },
  deleteIcon:
  {
    background: 'transparent',
    border: 'none',
    opacity: 0,
  },
  lineDer:
  {
    textDecoration: 'line-through',
    color: '#cacde8',
  },
  '@media (max-width: 600px)':
  {
    item:
    {
      padding: '17px',
    }
  }
}))

export default List;
