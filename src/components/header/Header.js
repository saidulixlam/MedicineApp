import classes from './Header.module.css';
import { Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
    
    return (
        <Fragment >
            <header className={classes.header}>
                <h1>Med-Goo!</h1>
                <HeaderCartButton onShow={props.onShow}/>
            </header>
        </Fragment>
    );
}

export default Header;