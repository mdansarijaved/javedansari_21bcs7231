'use client'
import ProtectedRoute from '@/provider/ProtectedRoute'

export default function BlogCreateLayout({ children }) {
    return (
        <ProtectedRoute>
            {children}
        </ProtectedRoute>
    )
}