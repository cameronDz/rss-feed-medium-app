import React from "react";
import PropTypes from "prop-types";
import Entry from "../Entry/Entry";

const propTypes = {
    entries: PropTypes.arrayOf(PropTypes.shape({
        author: PropTypes.string,
        id: PropTypes.string,
        link: PropTypes.string,
        name: PropTypes.string,
        publishDate: PropTypes.string,
        thumbnailUrl: PropTypes.string,
    })),
};
const EntryList = ({ entries = [] }) => {
    return (
        <section>
            {entries.map((entry) => {
                return (
                    <Entry key={entry.id}
                        author={entry.author}
                        link={entry.link}
                        name={entry.name}
                        publishDate={entry.publishDate}
                        thumbnailUrl={entry.thumbnailUrl}
                    />
                );
            })}
        </section>
    );
};

EntryList.propTypes = propTypes;
export default EntryList;
