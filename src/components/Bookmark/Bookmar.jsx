import propTypes from 'prop-types'
const Bookmar = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className=' bg-slate-200 p-4 m-4 rounded-md'>
            <h3 className='text-xl font-bold'>{ title}</h3>
        </div>
    );
};
Bookmar.propTypes = {
    bookmark: propTypes.object
}
export default Bookmar;