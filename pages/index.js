import { useSession, getSession } from 'next-auth/client';
import { useEffect, useState } from 'react';

import { getStatistics } from '../helpers/api-stats';
import StatisticList from '../components/dashboard/statistic-list';

function HomePage(props) {

    return(
        <section>
            <div className='page-header'>
                <h1>Performance Dashboard</h1>
                <p>Lorem ipsum blah blah make something up.</p>
            </div>
            <StatisticList stats={props.stats} />
        </section>
    );

}

export async function getServerSideProps(context) {

    const session = await getSession({req: context.req});

    if(!session) {
        return {
            redirect: {
                destination: '/auth',
                permanent: false
            }
        };
    }

    const allStatistics = await getStatistics();

    return {
        props: {
            session,
            stats: allStatistics
        },
    }

}

export default HomePage;