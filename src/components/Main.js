import React, { useState, useEffect } from 'react';
import "../css/Main.css";
import axios from 'axios';

function Main() {

    return(
        <div>
            <h1>Shop's Name</h1>

            <div className="category-nav">
                <div className="category-items">All</div>
                <div className="category-items">Top</div>
                <div className="category-items">Bottom</div>
                <div className="category-items">Shoes</div>
            </div>
        </div>
    );
}

export default Main;