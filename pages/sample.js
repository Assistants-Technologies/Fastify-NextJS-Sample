import React from 'react'

export const getServerSideProps = ({ query }) => {
    const { text } = query
    return {
        props: {
            text: text || null, // Note that Next.js doesn't like undefined and null values passed from the query. Just add the "|| null".
        }
    }
}

const SamplePage = ({ text }) => {
    return <>
        <h1>Hello, world!</h1>
        <p>{text}</p>
    </>
}

export default SamplePage
