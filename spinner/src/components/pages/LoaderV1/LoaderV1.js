import React from 'react';
import styles from './LoaderV1.module.css';

const LoaderV1 = () => {
    return (
        <div className={`${styles.mainBody}`}>
            <div className={`${styles.container}`}>
                <div className={`${styles.ring}`}></div>
                <div className={`${styles.ring}`}></div>
                <div className={`${styles.ring}`}></div>
                <span className={`${styles.loading}`}>Loading...</span>
            </div>
        </div>
    );
};

export default LoaderV1;