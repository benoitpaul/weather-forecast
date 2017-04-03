import React from 'react';
import styles from './MediumWidget.scss';

function MediumWidget(/*{ location, weather }*/) {
    
    return (
        <div className={styles.mediumWidget}>
            MediumWidget
        </div>
    );
}
/*
MediumWidget.propTypes = {
  location: React.PropTypes.object,
  weather: React.PropTypes.shape({
    current: React.PropTypes.object,
    forecast: React.PropTypes.array
  }),
}
*/
export default MediumWidget;

