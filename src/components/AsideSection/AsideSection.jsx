import React from 'react';
import { useSelector } from 'react-redux';
import DetailsFilter from '../DetailsFilter/DetailsFilter';
import LastRoutes from '../LastRoutes/LastRoutes';
import RouteDetails from '../RouteDetails/RouteDetails';
import './AsideSection.css';

export default function AsideSection(props) {
  const { orderStatus } = useSelector(state => state.order);

  return (
    <aside className="Order-Details">
      {(orderStatus === 1)
        && <DetailsFilter />}

      {(orderStatus === 1)
        && <LastRoutes />}

      {(orderStatus > 1)
        && <RouteDetails />}
    </aside>
  )
};
