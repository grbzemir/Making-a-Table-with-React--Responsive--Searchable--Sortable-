import PropTypes from 'prop-types';
export default function TableMobile({ head, body }) {
    return (
        <div className="border rounded p-4 grid divide-y gap-y-4">
            {body.map((items, key) => (
                <section key={key} className="pt-4 first:pt-0 grid gap-y-2">
                    {items.map((item, key) => Array.isArray(item) ? (
                        <div key={key} className="grid grid-cols-2 text-sm gap-x-4 text-center">
                            {item}
                        </div>
                    ) : (
                        <div key={key} className="text-sm flex items-center gap-x-6">
                            <h6 className="min-w-[65px] text-xs font-semibold text-gray-500">{head[key].name}</h6>
                            {item}
                        </div>
                    ))}
                </section>
            ))}
        </div>
    )
}


TableMobile.propTypes = {
    head: PropTypes.array.isRequired,
    body: PropTypes.array.isRequired,
};
