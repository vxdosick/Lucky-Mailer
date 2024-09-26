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
  code: string;
}

export const GetAllMails = () => {
  const [mails, setMails] = useState<Mails[]>([]);
  const [loading, setLoading] = useState(true);
  const [mailProduct, setMailProduct] = useState<Mails | null>()
  const [descriptionModal, setDescriptionModal] = useState(false)
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetch('/api/all-mails');
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

  const openDescription = (mail: Mails) => {
    setMailProduct(mail);
    setDescriptionModal(true);
    document.body.style.overflow = 'hidden';
  }
  const closeDescription = () => {
    setMailProduct(null);
    setDescriptionModal(false);
    setCopied(false);
    document.body.style.overflow = 'auto';
  }

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
            className="border-yellow-400 border rounded-md mb-5 max-h-[250px] object-cover"
          />
          <h3 className="card__title mb-2">{mail.title}</h3>
          <p className="mb-5 small__text">{mail.text}</p>
          <div className="flex items-center justify-between">
            <span className="text">{mail.price}{mail.free ? "" : "$"}</span>
            <CartButton cart={false} link={false} onClickFunc={() => openDescription(mail)} />
          </div>
          {mailProduct && descriptionModal && (
            <div onClick={closeDescription} className="card__modal">
              <div className="card__modalcontainer" onClick={(e) => e.stopPropagation()}>
                <div className="w-full relative">
                  <Image src={mailProduct.image} layout="responsive"
                    width={100}
                    height={50}
                   alt="product image" className="h-full object-cover" />
                </div>
                <div className="">
                  <h3 className="card__title mb-2">{mailProduct.title}</h3>
                  <p className="mb-5 small__text">{mailProduct.text}</p>
                </div>
                <div className="mb-[50px] flex flex-col gap-5 items-start ">
                  <CartButton cart={false} link={false} 
                  text={copied ? "Code copied" : "Copy code"} 
                  onClickFunc={() => {
                    navigator.clipboard.writeText(mailProduct.code);
                    setCopied(true);
                  }} />
                  <div className="card__modalcode w-full max-h-[600px] overflow-auto p-[10px]
                   rounded-md 
                  bg-slate-500 
                  text-white">
                    <pre style={{whiteSpace: 'pre-wrap', wordWrap: 'break-word'}}>
                      <code>
                        {mailProduct.code}
                      </code>
                    </pre>
                  </div>
                </div>
                <div className="w-full flex justify-end">
                  <button onClick={closeDescription} className="link__general">Close</button>
                </div>
              </div>
            </div>
          )}
        </li>
      ))}
    </>
  );
};

