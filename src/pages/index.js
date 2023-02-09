import Collection from '@/Components/Collection';
import HotDeals from '@/Components/HotDeals';
import Layout from '@/Components/Layout';
import Tab from '@/Components/Tab';
import TopSelling from '@/Components/TopSelling';

import React from 'react';

export default function index() {
  return (
    <div>
      <Layout>
        <Collection />
        <Tab />
        <HotDeals />
        {/* <TopSelling /> */}
      </Layout>
    </div>
  );
}
