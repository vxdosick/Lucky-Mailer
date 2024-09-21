"use client"
import { useEffect, useState } from "react";
import Image from 'next/image';
import { CartButton } from "./CartButton";

interface Mails {
  id: number;
  title: string;
  text: string;
  image: string;
  price: number | string;
  free: boolean;
}

export const GetTopMails = () => {
  const [mails, setMails] = useState<Mails[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch('/api/top-mails');
        const getMails: Mails[] = await result.json();
        setMails(getMails);
      } catch (error) {
        console.error("Error fetching mails:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  if (loading) {
    return <li><h2>Loading...</h2></li>;
  }

  return (
    <>
      {mails.map(mail => (
        <li key={mail.id} className="rounded-md">
          <Image  
            src={mail.image}
            layout="responsive"
            width={100}
            height={50}
            alt="product image"
            className="border-yellow-400 border rounded-md mb-5"
          />
          <h3 className="card__title mb-2">{mail.title}</h3>
          <p className="mb-5 small__text">{mail.text}</p>
          <div className="flex items-center justify-between">
            <span className="text">{mail.price}{mail.free ? "" : "$"}</span>
            <CartButton cart={false} link={false} free={mail.free} />
          </div>
        </li>
      ))}
    </>
  );
};

