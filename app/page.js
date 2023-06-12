import Image from "next/image";
import "./globals.css";
import Head from "next/head";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title> </title>
      </Head>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="navbar">
          <nav>
            <ul className="ul">
              <Link href="/">
                <li className="li">Home</li>
              </Link>
              <Link href="/about">
                <li className="li">About</li>
              </Link>
              <Link href="/blog">
                <li className="li">Blog</li>
              </Link>
              <Link href="/contact">
                <li className="li">Contact</li>
              </Link>
            </ul>
          </nav>
          <h1 className="title"> Hunting Coder</h1>
          <div className="blogs">
            <div className="blog">
              <h1 className="h1"> How to learn javascript in 2022</h1>
              <p>Javascript is the lungusge used to design logic for the web</p>
            </div>
          </div>
          <div className="blogs">
            <div className="blog">
              <h1 className="h1"> How to learn javascript in 2022</h1>
              <p>Javascript is the lungusge used to design logic for the web</p>
            </div>
          </div>
          <div className="blogs">
            <div className="blog">
              <h1 className="h1"> How to learn javascript in 2022</h1>
              <p>Javascript is the lungusge used to design logic for the web</p>
            </div>
          </div>
          <div className="blogs">
            <div className="blog">
              <h1 className="h1"> How to learn javascript in 2022</h1>
              <p>Javascript is the lungusge used to design logic for the web</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
