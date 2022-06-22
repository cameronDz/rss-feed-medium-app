import React from "react";
import PropTypes from "prop-types";
import "./Entry.css";

const propTypes = {
    author: PropTypes.string,
    link: PropTypes.string,
    name: PropTypes.string,
    publishDate: PropTypes.string,
    thumbnailUrl: PropTypes.string,
};
const Entry = ({
    author = "",
    link = "",
    name = "",
    publishDate = "",
    thumbnailUrl = "",
}) => {
    return (
        <div className="Entry-root">
            <div className="Entry-box-left">
                <a href={link} rel="noreferrer" target="_blank">
                    <img
                        alt="entry img"
                        onError={() => console.warn("error occured")}
                        src={thumbnailUrl}
                        width="160px"
                    />
                </a>
                <a href={link} rel="noreferrer" target="_blank">{`[Open]`}</a>
            </div>
            <div className="Entry-box-right">
                <p className="Entry-author">{author}</p>
                <p className="Entry-name">{name}</p>
                <p className="Entry-date">{`Released: ${new Date(publishDate).toDateString()}`}</p>
            </div>
        </div>
    );
};

Entry.propTypes = propTypes;
export default Entry;
