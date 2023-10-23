import React from 'react'
import { categories } from '../../constants'

const Categories = () => {
    return (
        <div className="flex gap-6 overflow-scroll">
            {categories.map((ctegory, i) => (
                <div className="flex gap-2 items-center justify-center cursor-pointer" key={i}>
                    {ctegory.icon} {ctegory.name}
                </div>
            ))}
        </div>
    )
}

export default Categories