import React from "react";
import { UNDO_COMMAND, REDO_COMMAND } from "lexical";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";

export const CustomHistoryActions = () => {
  const [editor] = useLexicalComposerContext();
  return (
    <div className="flex gap-1">
      <button
        onClick={() => editor.dispatchCommand(UNDO_COMMAND, undefined)}
        className="border border-blue-400 p-2"
      >
        Undo
      </button>
      <button
        onClick={() => editor.dispatchCommand(REDO_COMMAND, undefined)}
        className="border border-blue-400 p-2"
      >
        Redo
      </button>
    </div>
  );
};
