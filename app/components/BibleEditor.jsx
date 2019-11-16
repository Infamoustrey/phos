import React, { useGlobal } from "reactn";

import { SET_BIBLE_ITEM } from "../store/BibleItem";

const BibleEditor = () => {
  const [selectedItem] = useGlobal("selectedItem");

  const [bibleItems, setBibleItems] = useGlobal("bibleItems");

  const bibleItem = bibleItems.find(item => item.item_id == selectedItem._id);

  const setBibleItem = useDispatch(SET_BIBLE_ITEM);

  return <p>Testing this thinger</p>;
};

export default BibleEditor;
