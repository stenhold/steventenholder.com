import React from 'react';
import { metadata } from '../metadata';
import Layout from '../app/layout';
import Image from 'next/image';
import Link from 'next/link';

export default function BioengineeringIdeas() {
    return (
        <Layout>

            <div className="space-y-4 w-full px-4 m-4 flex flex-col items-center">
                <h3 className="text-2xl font-bold text-white mt-4">
                    Engineering biology will revolutionize the human condition.
                </h3>
            </div>

            <div className="space-y-4 w-full px-4 m-4 flex flex-col items-center">
                <div className="text-center">
                    <Image src="/growing_neurons_8mb.gif" alt="Steven ten Holder" width={500} height={300} className="rounded-lg shadow-md" layout="intrinsic" />
                </div>
            </div>

            <div className="space-y-4 w-full px-4 m-4 flex flex-col items-center">
                <li>
                    <ul>
                        <p className="space-y-4 w-half px-4 flex flex-col m-8">
                            Earth-life emerged spontaneously and evolved itself into the mindboggling diversity we see today.
                        </p>
                    </ul>
                    <ul>
                        <p className="space-y-4 w-half px-12 flex flex-col m-4">
                            1.
                            That a purely self-emergent, resource-constrained process could generate entirely novel
                            categories of phenomena -- including consciousness itself -- strongly suggests our universe
                            is capable of hosting other undiscovered phenomena.
                        </p>
                    </ul>
                    <ul>
                        <p className="space-y-4 px-12 flex flex-col m-4">
                            2.
                            An intelligently-guided, non-resource-constrained version of biology would result in forms and phenomena with as yet unimaginable capabilities.
                        </p>
                    </ul>
                    <ul>
                        <p className="space-y-4 w-half px-12 flex flex-col m-4">
                            3.
                            We ourselves exist on that same biological operating system. New categories of phenomena applied to our own biology will be the ultimate, revolutionary exploration of the limits of what is possible from our universe.
                        </p>
                    </ul>
                </li>
            </div>

            <div className="space-y-4 w-full px-4 m-4 flex flex-col items-center">
                <p className="space-y-4 w-half px-4 flex flex-col m-8">
                    There&#39;s a certain excitement around the recent achievements and growth of computation.
                    No other new field of science has produced an engineering platform as productivity-boosting and lifestyle-enhancing as it.
                    We&#39;re confident it will continue to be improved and generate new phenomena, including the exciting possibility of
                    general artificial intelligence. However, a head-to-head comparison with the astounding capabilities of existing
                    biological systems serves to remind us to appreciate how powerful that operating system can be.
                </p>
            </div>


            <div className="flex overflow-x-auto py-4">
                <ul className="flex space-x-4">
                    {[
                        { href: "/bioengineering-ideas", imgSrc: "/davinci.jpg", text: "Bioengineering Ideas" },
                        { href: "/acorn-biolabs", imgSrc: "/acorn_biolabs.jpg", text: "Acorn Biolabs" },
                        { href: "/podcasts", imgSrc: "/podcast_conversations.jpg", text: "Podcast" },
                        { href: "/blog", imgSrc: "/blog.jpg", text: "Blog" },
                    ].map((item, index) => (
                        <li key={index} className="flex-none">
                            <Link href={item.href} passHref>
                                <Image src={item.imgSrc} alt={item.text} width={500} height={300} className="rounded-lg shadow-md" layout="intrinsic" />
                                <span className="mt-2 text-xl font-bold text-white">{item.text}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </Layout>
    );
}
