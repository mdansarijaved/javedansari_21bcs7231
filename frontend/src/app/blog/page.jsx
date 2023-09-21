'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react'
import './page.css'
import ReactMarkdown from 'react-markdown'

const Create = () => {
    const [markdownDisplay, setMarkdownDisplay] = useState('')
    const [showPreview, setShowPreview] = useState(false);

    const markdown = useRef();

    function handleSubmit(e) {
        e.preventDefault();

        setMarkdownDisplay(markdown.current.value)
        markdown.current.style.display = 'none';
        setShowPreview(true);
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
                        {showPreview ? (
                            <button onClick={()=>{
                                markdown.current.style.display = 'block'
                                setShowPreview(false);
                                setMarkdownDisplay('')
                            }} className='blogButton previewButton'>
                                Go Back
                            </button>
                        ) : (
                            <button onClick={handleSubmit} className='blogButton previewButton'>
                                Preview
                            </button>
                        )}                    </div>
                </nav>
                <textarea id='blog-textarea' placeholder='Tell your story to the world' ref={markdown}></textarea>
                {/* <PageContent /> */}
                <div style={{ display: markdownDisplay ? 'block' : 'none' }} className='Markdown-Div'>

                    <ReactMarkdown>
                        {markdownDisplay}
                    </ReactMarkdown>
                   
                </div>
            </div>

        </>
    )
}

export default Create

