'use client'
import React from 'react'
import { useState, useEffect } from 'react'
import './page.css'
import ReactMarkdown from 'react-markdown'
const markdown = `##Just a link: https://reactjs.com.`

const Create = () => {
    const [text, setText] = useState('')

    return (
        <>
            <div className='main'>
                <nav className='navCreate'>
                    <h1 className='logo'>YourBlog</h1>
                    <h2 className='createTag'>Wrtie your story.</h2>
                    <div className='buttons'>
                        <button className='blogButton'>
                            Publish
                        </button>
                        <button className='blogButton previewButton'>
                            Preview
                        </button>
                    </div>
                </nav>

                <main>
                    <textarea name="text-area" id="" cols="30" rows="10"></textarea>
                    {/* <PageContent /> */}
                </main>
            </div>


        </>
    )
}

export default Create


const PageContent = () => {
    const [content, setContent] = useState('')

    useEffect(() => {
        fetch("README.md")
            .then((res) => res.text())
            .then((text) => setContent(text))
    }, [])

    return (
        <div>
            <ReactMarkdown children={content} />
        </div>
    )
}
