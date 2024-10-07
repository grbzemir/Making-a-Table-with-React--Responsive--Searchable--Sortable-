import PropTypes from 'prop-types';
import React, { useState } from 'react';
import CircularJSON from 'circular-json';
export default function Table({ head, body, searchable }) {

    const [sorting, setSorting] = useState(false)
    const [search, setSearch] = useState('')
    const filteredData = body.filter(
        items => items.some(item => item.toString().toLocaleLowerCase('TR').includes(search))
    ).sort((a, b) => {
        if (sorting?.orderBy === 'asc') {
            return a[sorting.key].localeCompare(b[sorting.key]);
            // a.localeCompare(b)
        }
        else if (sorting?.orderBy === 'desc') {
            return b[sorting.key].localeCompare(a[sorting.key]);
        }
    })

    return (
        <>
            {/* <pre>{JSON.stringify(filteredData, null, 2)}</pre> */}
            {/* <div className="w-full border rounded p-4"> */}
            {searchable && (
                <div className="mb-4 flex gap-x-2">
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type="text"
                        placeholder="Tabloda ara"
                        className="h-10 outline-none focus:border-black border rounded text-sm px-4 w-full border-gray-300"
                    />
                    {sorting && (
                        <button
                            onClick={() => setSorting(false)}
                            className="h-10 rounded whitespace-nowrap border border-red-500 text-red-500 text-sm px-4">
                            Sıralamayı İptal Et
                        </button>
                    )}
                </div>
            )}
            <table className="w-full">
                <thead>
                    <tr>
                        {head.map((h, key) => (
                            <th
                                width={h?.width}
                                className="text-left bg-gray-50 text-sm font-semibold text-gray-500 p-3 border-b"
                                key={key}>
                                {h.name}
                                {h.sortable &&
                                    (
                                        <button onClick={() => {
                                            if (sorting?.key === key) {
                                                setSorting({
                                                    key,
                                                    orderBy: sorting.orderBy === 'asc' ? 'desc' : 'asc'
                                                })
                                            }
                                            else {
                                                setSorting({
                                                    key,
                                                    orderBy: 'asc'
                                                })
                                            }
                                        }}>sortable</button>
                                    )}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {filteredData.map((items, key) => (
                        <tr className="group" key={key}>
                            {items.map((item, key) => (
                                <td
                                    className="p-3 text-sm
                                 group-hover:bg-blue-50
                                  group-hover:text-blue-600"
                                    key={key}>
                                    {Array.isArray(item) ? (
                                        <div className="flex gap-x-2.5 ">
                                            {item}
                                        </div>
                                    ) : item}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table >
            {/* </div> */}
        </>
    )
}

Table.propTypes = {
    head: PropTypes.array.isRequired,
    body: PropTypes.array.isRequired,
    searchable: PropTypes.bool
};