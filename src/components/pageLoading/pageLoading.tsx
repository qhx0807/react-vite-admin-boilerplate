import React from 'react';
import { Spin } from 'antd';
import styles from './index.module.less';

const PageLoading: React.FC = () => (
  <div className={styles.pageLoading}>
    <Spin tip="loading..." delay={100} />
  </div>
);

export default PageLoading;
