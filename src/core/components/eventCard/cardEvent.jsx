import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
export const cardEvent = ({image,title,tag,date}) => {
  return (
    <div className="col-md-4 mb-4">
        <div className="card h-100">
            <img src=""  className="card-img-top" alt={title} />
            <div className="card-body">
                {tag&&(
                    <span className={`badge ${tag.color} mb-2`}>{tag.label}</span>
                )}
                <h5 className="card-title">{title}</h5>
                {date && <p className='card-text text-muted'>{date}</p>}
            </div>
        </div>
    </div>
  )
}
