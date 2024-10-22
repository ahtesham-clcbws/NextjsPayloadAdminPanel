import React from 'react'

export default function Button({ children }: any) {
    return (
        <button type="button" className="theme-btn">
            {children}
        </button>
    )
}
