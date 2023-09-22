import { useState } from 'react';
import './blogMenu.css'

export default function BlogMenu({ blogId }) {
    const [showDropdown, setShowDropdown] = useState(true);

    return (
        <div class="blog__menu">
            <button class="menu__button" onClick={() => setShowDropdown(!showDropdown)}>
                <li></li>
                <li></li>
                <li></li>
            </button>
            {showDropdown ?
                <div class="menu__dropdown">
                    <button
                        class="menu__dropdown-option"
                    >Delete</button>
                    <button
                        class="menu__dropdown-option"
                    >Report</button>
                </div> :
                null
            }
        </div>
    )
}