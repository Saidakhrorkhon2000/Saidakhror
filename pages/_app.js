import { Component } from "react"
import './style.css'
import NextNprogress from "nextjs-progressbar"
export default function MyApp({Component, PageProps}){
    return (
    <>
        <NextNprogress
        color="#29D"
        startPosition="0.3"
        stopDelayMs="200"
        height="3"
        />
    <Component {...PageProps}/>
    </>)
}