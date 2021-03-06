import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectSearchText } from '../../redux/filters/filtersSelectors'
import { setSearchText } from '../../redux/filters/filtersActions'
import './SearchBar.scss'

const SearchBar = ({ searchText, setSearchText }) => {
    const handleChange = e => {
        setSearchText(e.target.value)
    }

    return (
        <div className='search-bar'>
            <input
                onChange={handleChange}
                value={searchText}
                className='search-bar__input'
                type='search'
                placeholder='Search for a country...'
            />
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    searchText: selectSearchText,
})

const mapDispatchToProps = dispatch => ({
    setSearchText: text => dispatch(setSearchText(text)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
