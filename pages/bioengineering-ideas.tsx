import React from 'react';
import { metadata } from '../metadata';
import Layout from '../app/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function BioengineeringIdeas() {
    return (
        <Layout>
            <h1>Bioengineering Ideas</h1>

            <Link href="/" passHref>
                <Image src="/growing_neurons_8mb.gif" alt="Home" width={500} height={500} layout="fixed" />
            </Link>

            <div>
                {/* Other content of your sub-page */}
            </div>

        </Layout>
    );
}
