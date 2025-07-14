import React from 'react'

const button = ({ onClick, children }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            className="w-full flex items-center justify-center gap-3 py-2 px-4 mb-4 border border-gray-300 bg-white rounded-lg shadow hover:bg-gray-50/80 transition-colors duration-150 font-medium text-gray-700 cursor-pointer"
        >
            {
                children
            }
        </button>
    )
}

export default button
