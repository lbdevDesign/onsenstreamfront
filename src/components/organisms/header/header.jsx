import React, { useState } from 'react';

//Atoms
import FuncButton from '../../atoms/buttons/functionalbutton/funcbutton';

//Molecules
import { Searchbar } from '../../molecules/searchbar/searchbar';

//Assets
import osesLogo from '../../../assets/OSSLogo.svg';
import {MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import {XMarkIcon} from '@heroicons/react/24/outline';
import {UserIcon} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

function Header() {

    const [showSearchbar, setSearchbar] = useState();

    function display() {
        setSearchbar(value=>!value)
    }

    function handleAccountClick() {
        console.log("J'accède à mon compte");
    }

    return(
        <div className="header">
            <Link to={"/"}>
                <img src={osesLogo} className='header__logo' alt="Logo On s'en stream" />
            </Link>
            <div className='header__cta'>
                {showSearchbar ? (
                    <button className='header__cta__close' onClick={display}>
                        <XMarkIcon className='header__cta__close--icon' alt='Close' />
                    </button>
                ) : (
                    <>
                        <button className='header__cta__search' onClick={display}>
                            <MagnifyingGlassIcon className="icons" alt='Search' />
                        </button>
                        <div className='header__cta__searchbar'>
                            <Searchbar placeholder='Film, genre, acteur...'/>
                        </div>
                        <FuncButton onClick={handleAccountClick}>
                            <UserIcon className="icons" alt='Mon compte' />
                        </FuncButton>
                    </>
                )}    
            </div>
            <div className={`header__searchfield${showSearchbar?' active':null}`}>
                <div className='header__searchfield__bar'>
                    <Searchbar placeholder='Film, genre, acteur...'/>
                </div>
                <div className='header__searchfield__results'>
                </div>
            </div>
        </div>
    )
}

export default Header;