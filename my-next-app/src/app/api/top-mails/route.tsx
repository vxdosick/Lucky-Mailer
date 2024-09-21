import { NextResponse } from "next/server";

export async function GET(req: Request) {
    return NextResponse.json([
        {
          id: Date.now(),
          title: "Lorem1",
          text: "lorem some text info about mt mails products",
          image: "/",
          price: "Free",
          free: true
        },
        {
          id: Date.now(),
          title: "Lorem2",
          text: "lorem some text info about mt mails products",
          image: "/",
          price: 100,
          free: false
        },
        {
          id: Date.now(),
          title: "Lorem3",
          text: "lorem some text info about mt mails products",
          image: "/",
          price: "Free",
          free: true
        },
        {
          id: Date.now(),
          title: "Lorem4",
          text: "lorem some text info about mt mails products",
          image: "/",
          price: 100,
          free: false
        },
      ]);
}