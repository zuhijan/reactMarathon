import React from 'react';
import cn from 'classnames';
import s from './App.modules.scss'
import "./custom.css"

const App = () => {
    return (
        <div className={cn(s.header, "color")}>
            THiS iiiis SPARTA!
        </div>
    )
}

export default App;
