import React from 'react';
import { metadata } from '../metadata';
import Layout from '../app/layout'; // Adjust the path as necessary
import Image from 'next/image';
import Link from 'next/link';

export default function AcornBiolabs() {
    return (
        <Layout>
            <h1>Acorn Biolabs</h1>
            {/* Clickable Image Link to Home */}
            <Link href="/" passHref>
                <Image src="/home-kit-diagram.png" alt="Home" width={50} height={50} layout="fixed" />
            </Link>
            <div>
                {/* Other content of your sub-page */}
            </div>
        </Layout>
    );
}
