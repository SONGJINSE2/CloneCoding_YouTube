import React from 'react';
import './Header.css';

const Header = () => {
    return(
        <div>
            <div class="header_container">
                <div class="header_search">
                    <input type='text' name="search" placeholder="검색" />
                    <button onClick='#'/>
                </div> 
                <hr />
                
            </div>
            
        </div>
    )
}


export default Header;