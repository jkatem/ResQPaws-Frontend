import React from 'react'

const Organizations = (props) => {
    console.log(props)
    return (
        <div>
            {props.organizations.map(org => (
                <li key={org.id}>{org.name}</li>
            ))}
        </div>
    )
}

export default Organizations