import { useState } from 'react';
import './blogMenu.css'
import { useDeletePostMutation } from '@/store/posts';
import { useUser } from '@/store/user';
import { useRouter } from 'next/navigation';

export default function BlogMenu({ blog }) {
    const { create_by: uid, id } = blog;
    const [deleteBlog] = useDeletePostMutation()
    const [showDropdown, setShowDropdown] = useState(false);
    const router = useRouter();

    return (
        <div className="blog__menu">
            <button className={`menu__button ${showDropdown && 'menu__button--active'}`} onClick={(e) => {
                e.stopPropagation();
                e.preventDefault();
                setShowDropdown(!showDropdown)
            }}>
                <li></li>
                <li></li>
                <li></li>
            </button>
            {showDropdown ?
                <div className="menu__dropdown">
                    <button
                        onClick={() => deleteBlog({ id }) && router.push('/')}
                        className={`menu__dropdown-option`}
                    >Delete</button>
                </div> :
                null
            }
        </div>
    )
}