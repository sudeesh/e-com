import React from "react";
import "./collection.preview.styles.scss";
import CollectionItem from "../collection-item/collection-item.component";

const CollectionPreview = ({ title, items, id }) => (
  <div className="collection-preview">
    <h1 className="title">{title}</h1>
    <div className="preview">
      {items
        .filter((item, i) => i < 4)
        .map(({ id, ...otherItemprops }) => (
          <CollectionItem key={id} {...otherItemprops} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
