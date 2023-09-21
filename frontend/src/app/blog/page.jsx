'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './page.css'
import ReactMarkdown from 'react-markdown'

const Create = () => {
    const [markdownDisplay, setMarkdownDisplay] = useState('')
    const markdown = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        setMarkdownDisplay(markdown.current.value)
    }

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

                <form onSubmit={handleSubmit}>
                    <textarea name="text-area" id="" cols="30" rows="10" ref={markdown}></textarea>
                    {/* <PageContent /> */}

                    <button type='submit'>Submit</button>
                </form>
                <ReactMarkdown>
                    {markdownDisplay}
                </ReactMarkdown>
            </div>

        </>
    )
}

export default Create

