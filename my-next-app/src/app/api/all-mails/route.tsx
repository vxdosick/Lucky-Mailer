import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json([
      {
        id: 1, 
        title: "Mail 1", 
        text: "lorem some text info about mt mails products",
        image: "/",
        price: "Free",
        free: true
      },
      {
        id: 2, 
        title: "Mail 2", 
        text: "lorem some text info about mt mails products",
        image: "/",
        price: "Free",
        free: true
      },
      {
        id: 3, 
        title: "Mail 3", 
        text: "lorem some text info about mt mails products",
        image: "/",
        price: "Free",
        free: true
      },
      {
        id: 4, 
        title: "Mail 4", 
        text: "lorem some text info about mt mails products",
        image: "/",
        price: "Free",
        free: true
      },
      {
          id: 5, 
          title: "Mail 5", 
          text: "lorem some text info about mt mails products",
          image: "/",
          price: "Free",
          free: true
      },
      {
          id: 6, 
          title: "Mail 6", 
          text: "lorem some text info about mt mails products",
          image: "/",
          price: "Free",
          free: true
      },
      {
          id: 7, 
          title: "Mail 7", 
          text: "lorem some text info about mt mails products",
          image: "/",
          price: "Free",
          free: true
      },
      ]);
}