import React from 'react';
import { IndexLink } from 'react-router';

import logo from './roc.png';
import styles from './style.scss';

export default () =>
   (
     <div className={styles.header}>
       <ul className={styles.menu}>
         <li>
           <IndexLink
             to="/"
             className={styles.item}
             activeClassName={styles.active}
           >
          Start
           </IndexLink>
         </li>
       </ul>
       <img className={styles.logo} src={logo} alt="Logo" />
     </div>
  )
;
