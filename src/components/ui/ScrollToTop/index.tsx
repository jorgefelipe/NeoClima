import { useEffect } from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import { animateScroll } from 'react-scroll';

const ScrollToTop: React.FC<RouteComponentProps> = ({ history, children }) => {
  useEffect(() => {
    if (!history.location.hash) {
      animateScroll.scrollToTop();
    }
  } // função / o codico que quer que execute

  , [history.location.hash, history.location.pathname]);
   // array de dependencia / Quando quer que execute

  return <>{children}</>;
};

export default withRouter(ScrollToTop);
