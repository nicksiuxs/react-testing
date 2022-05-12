import React from 'react'
import "./Header.css"

export default function Header({
    title
}) {
    return (
        <>
            <h1 data-testid="header" className="header">{title}</h1>
            {/* <h3 title="header" className="header">Cats</h3> */}
        </>
    )
}
