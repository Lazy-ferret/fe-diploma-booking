import React from 'react';
import DetailsFilter from '../DetailsFilter/DetailsFilter';
import LastRoutes from '../LastRoutes/LastRoutes';
import './AsideSection.css';

export default function AsideSection(props) {
  return (

    <aside className="Order-Details">
        <DetailsFilter />        

        <LastRoutes />

    </aside>
    
  )
}
 