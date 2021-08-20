import React from 'react';
import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({title,onAdd,showAddTask}) => {
    
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAddTask ? 'red' : 'green'} 
            text={showAddTask ? 'CLOSE' : 'ADD'} 
            onClick={onAdd}/>
        </header>
    )
}
Header.defaultProps={
    title:'Task Tracker',
}
Header.propTypes={
    title: PropTypes.string,
}
// const styling={color:'red',backgroundColor:'black'}

export default Header
