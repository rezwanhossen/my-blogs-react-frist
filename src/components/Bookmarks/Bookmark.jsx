
import propTypes from 'prop-types'
import Bookmar from '../Bookmark/Bookmar'

const Bookmark = ({bookmarks,redtime}) => {
  return (
      <div className="w-1/3">
          <div className=' bg-slate-300 rounded-md p-5 text-2xl font-blod m-5'>
              <h3>reading time: { redtime}</h3>
          </div>
          <h2 className=" text-3xl font-bold m-5">Bookmarks blog :{bookmarks.length} </h2> 
          {
              bookmarks.map(bookmark=><Bookmar key={bookmark.id} bookmark={bookmark}></Bookmar>)
          }
         
</div>
  )
}
Bookmark.propTypes = {
    bookmarks: propTypes.array,
    redtime: propTypes.number

}


export default Bookmark