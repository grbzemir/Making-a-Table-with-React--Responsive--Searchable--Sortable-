import PropTypes from 'prop-types';

export default function TableMobile({ head, body }) {
    return (
        <div>
            {head.map((h, key) => (
                <section key={key}>
                    <h6>{h.title}</h6>
                </section>
            ))}
        </div>
    );
}


TableMobile.propTypes = {
    head: PropTypes.array.isRequired,
    body: PropTypes.array.isRequired,
};