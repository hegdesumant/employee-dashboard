import React from 'react'

const Table = ({ columns, data }) => {

    return (
        <>
            <table>
                <thead>
                    <tr>
                        {columns.map(e => (
                            <th key={e.name}>{e.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {columns.map((cellData, celIndex) => (
                                <td key={`${celIndex}-${cellData}-${rowIndex}`}>{row[cellData.selector]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Table;