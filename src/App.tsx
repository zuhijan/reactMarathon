import React, { FC } from 'react';
import cn from 'classnames';
import s from './App.modules.scss';
import "./custom.css";
import {one} from "./example";

const App: FC = () => {
    one();
    return (
        <div className={cn(s.header, "color")}>
            THiS iiiis SPARTA!
        </div>
    )
}

export default App;
