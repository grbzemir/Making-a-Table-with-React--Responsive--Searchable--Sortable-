import PropTypes from 'prop-types';
export default function Table({ head, body }) {
    return (
        <div className="head1">
            <table>
                <thead>
                    <tr>
                        {head.map((h, key) => (
                            <th className=".head3"
                                key={key}>{h}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {body.map((items, key) => (
                        <tr key={key}>
                            {items.map((item, key) => (
                                <td key={key}>{item}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

Table.propTypes = {
    head: PropTypes.array.isRequired,
    body: PropTypes.array.isRequired
};