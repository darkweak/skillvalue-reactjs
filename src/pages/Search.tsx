import React from 'react';
import { Layout } from '../components/Layout';
import { UsersProvider } from '../contexts';
import { Item, List, Search as SearchComponent } from '../components/User';

export const Search: React.FC = () => (
    <Layout>
        <UsersProvider>
            <div className='row'>
                <div className='col-6'>
                    <SearchComponent/>
                    <List/>
                </div>
                <div className='col-6'>
                    <Item/>
                </div>
            </div>
        </UsersProvider>
    </Layout>
);
