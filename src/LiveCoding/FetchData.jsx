import React, { useEffect, useState } from 'react'

const FetchData = () => {
    const [data, setData] = useState([])


    const fetchData = () => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div>FetchData
            <div>
                <ul>
                    {
                        data.length > 0 && data.map((item) => (
                            <li key={item.id}> {item.name}- {item.email}  </li>
                        ))
                    }
                </ul>

            </div>

        </div>
    )
}

export default FetchData