import PropTypes from 'prop-types'
import {Suspense } from 'react';
import loadimage from "./../assets/others/loadimage.gif"
const LazyLayout = ({component: Component, ...rest}) => {
  return (
    <Suspense fallback={<img src={loadimage} alt="Loading" id ="load_ani"/>}>
            <Component {...rest}/>
        </Suspense>
  )
}
LazyLayout.propTypes = {
    component:PropTypes.elementType.isRequired
}
export default LazyLayout