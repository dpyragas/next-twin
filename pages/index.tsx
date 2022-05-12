import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Hello from "../components/Hello";
import styles from "../styles/Home.module.css";
import fs from "fs";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js + Twin</title>
        <meta name="description" content="Next.js + Twin" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hello />
    </div>
  );
};

export default Home;
