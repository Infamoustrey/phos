import React from "reactn";

import { useGlobal } from "../store";
import { SET_BIBLE_ITEM } from "../store/BibleItems";

const BibleEditor = () => {
  const [selectedItem] = useGlobal("selectedItem");

  const [bibleItems, setBibleItems] = useGlobal("bibleItems");

  const bibleItem = bibleItems.find(
    item => item.service_item_id == selectedItem.id
  );

  // const setBibleItem = useDispatch(SET_BIBLE_ITEM);

  return <p>Testing this thinger</p>;
};

export default BibleEditor;
