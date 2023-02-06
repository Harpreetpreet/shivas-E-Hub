import Collection from '@/Components/Collection';
import Layout from '@/Components/Layout';
import Navigation from '@/Components/Layout/Navigation';
import React from 'react';

export default function index() {
  return (
    <div>
      <Layout>
        <Navigation />
        <Collection />
      </Layout>
    </div>
  );
}
