import './BlogCard.css'
export const EventCard = ({image,title,tag,date, cols}) => {
  return (
    <div className={`${cols} mb-4`}>
      <div className="card blog-card bg-dark text-white border-0 position-relative overflow-hidden">
        <div className="card-image-wrapper">
          <img
            src={image}
            className="card-img"
            alt={title}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <div
          className="card-img-overlay d-flex flex-column justify-content-end"
          style={{
            background: 'rgba(0, 0, 0, 0.4)',
            padding: '1rem',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
          }}
        >
          {tag && (
            <span className={`badge ${tag.color} mb-2`} style={{ width: 'fit-content' }}>
              {tag.label}
            </span>
          )}
          <h5 className="card-title mb-1">{title}</h5>
          {date && <p className="card-text mb-0"><small>{date}</small></p>}
        </div>
      </div>
    </div>
  )
}
