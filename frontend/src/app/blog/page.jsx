import React from 'react'
import './page.css'
import ReactMarkdown from 'react-markdown'
const markdown = `Just a link: https://reactjs.com.`

const Create = () => {
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
            <ReactMarkdown children={markdown} />
                </main>
        </div>

        
        </>
    )
}

export default Create