import React from 'react'
import './page.css'

const Create = () => {
    return (
        <div className='main'>
            <nav className='navCreate'>
                <h1 className='logo'>YourBlog</h1>
                <h2 className='createTag'>Wrtie your story.</h2>
                <div>
                    <button className='blogButton'>
                        Publish
                    </button>
                    <button className='blogButton previewButton'>
                        Preview
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default Create