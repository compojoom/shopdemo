'use client'
import { useEffect, useState } from "react";
import Image from "next/image";
import Script from 'next/script';
import Metamask from './Metamask';
import Encryptor from './Encryptor';


export default function Home() {
    return (
            <main className="items-center justify-between p-24">
            <Encryptor />
            <Metamask />
            </main>
           );
}
