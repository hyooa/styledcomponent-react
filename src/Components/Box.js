import React from 'react';
import styles from './Box.module.css'; // 모듈은 styles from 이렇게 받음
// 같은 이름으로 각각의 다른 class, 겹쳐지지않음

const Box = (props) => {
    return (
        // styles 안에 있는 Box
        <div className={styles.Box}>
            나는 박스야
        </div>
    );
};

export default Box;