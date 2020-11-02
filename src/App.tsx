import React, { FC } from 'react';
import cn from 'classnames';
import s from "./App.module.scss";
import {one} from "./example";

const App: FC = () => {
    one();
    return (
        <div className={cn(s.header)}>
            THiS iiiis SPARTA!
        </div>
    )
}

export default App;
