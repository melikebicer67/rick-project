import React, { useState } from 'react'

const Card = ({ image, name, url, status, species, location, episode, gender }) => {
  const [loading, setLoading] = useState(true)
  const headingMaxLength = 23

  return (
    <Wrapper>
      <ImgWrapper isLoading={loading}>
        <img onLoad={() => setLoading(false)} src={image} alt={name} />
      </ImgWrapper>
      <ContentWrapper status={status.toLowerCase()} isSmallHeading={name.length > headingMaxLength}>
        <div className="section">
          <ExternalLink href={url}>
            <h2>{name}</h2>
          </ExternalLink>
          <span className="status">
            <span className="status__icon" /> {status} - {species} - {gender}
          </span>
        </div>

        <div className="section">
          <span className="text-gray">Last known location:</span>
          <ExternalLink href={location.url}>{location.name}</ExternalLink>
        </div>

        <div className="section">
          <span className="text-gray">First seen in:</span>
          <ExternalLink href={episode.url}>{episode.name}</ExternalLink>
        </div>
      </ContentWrapper>
    </Wrapper>
  )
}



export default Card
