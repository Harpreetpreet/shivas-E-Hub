import Collection from '@/Components/Collection';
import Layout from '@/Components/Layout';
import Tab from '@/Components/Tab';

import React from 'react';

export default function index() {
  return (
    <div>
      <Layout>
        <Collection />
        <Tab />
      </Layout>
    </div>
  );
}
