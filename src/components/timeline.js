import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import Data from "./history";

export default function Timeline() {
  return (
    <VerticalTimeline layout="2-columns" animate="true" lineColor="white">
      {Data.map(
        ({
          id,
          image,
          abbreviation,
          gen,
          year,
          discontinued,
          system,
          price,
          describe,
          icon,
          manufacture,
          units,
          game1,
          game2,
          game3,
          game4,
          game5,
        }) => {
          return (
            <VerticalTimelineElement
              className={"vertical-timeline-element--" + { system }}
              id={abbreviation}
              date={year}
              icon={icon}
            >
              <div className="Tags">
                <div className="Tag" aria-labelledby={units}>
                  <span>{units}</span>
                </div>
                <div className="Tag" aria-labelledby={year}>
                  <span>
                    {year}-{discontinued}
                  </span>
                </div>
                <div className="Tag" aria-labelledby={price}>
                  <span>{price}</span>
                </div>
              </div>
              <h3 className="vertical-timeline-element-title">{system}</h3>
              <h4 className="vertical-timeline-element-subtitle">
                {manufacture}
              </h4>
              <img
                className="vertical-timeline-element-image"
                alt={system}
                src={image}
                loading="lazy"
              />
              <p>{describe}</p>
              <div className="best-selling-games">
                <h4>Best Selling Games</h4>
                <ol>
                  <li>{game1}</li>
                  <li>{game2}</li>
                  <li>{game3}</li>
                  <li>{game4}</li>
                  <li>{game5}</li>
                </ol>
              </div>
            </VerticalTimelineElement>
          );
        }
      )}
    </VerticalTimeline>
  );
}
