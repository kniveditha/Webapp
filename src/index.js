import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './js/header';
import Content from './js/content';
import registerServiceWorker from './registerServiceWorker';
import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

ReactDOM.render(<div>
    <Header />
    <Content />      
</div>, document.getElementById('root'));
registerServiceWorker();
