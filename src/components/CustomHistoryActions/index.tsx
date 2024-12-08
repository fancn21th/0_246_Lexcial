import React from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  UNDO_COMMAND,
  REDO_COMMAND,
  FORMAT_TEXT_COMMAND,
  TextFormatType,
  FORMAT_ELEMENT_COMMAND,
  ElementFormatType,
  OUTDENT_CONTENT_COMMAND,
  INDENT_CONTENT_COMMAND,
} from "lexical";

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

export const CustomTextActions = () => {
  const [editor] = useLexicalComposerContext();

  const handleOnClick = (formatType: TextFormatType) => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, formatType);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <span style={{ fontWeight: "bold" }}>Text actions</span>
      <div className="flex gap-1">
        {[
          "Bold",
          "Italic",
          "Underline",
          "Code",
          "Highlight",
          "Strikethrough",
          "Subscript",
          "Superscript",
        ].map((value) => {
          return (
            <button
              onClick={() =>
                handleOnClick(value.toLowerCase() as TextFormatType)
              }
              className="border border-blue-400 p-2"
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export const CustomAlignActions = () => {
  const [editor] = useLexicalComposerContext();

  const handleOnClick = (formatType: ElementFormatType) => {
    editor.dispatchCommand(FORMAT_ELEMENT_COMMAND, formatType);
  };

  return (
    <div style={{ marginTop: "10px" }}>
      <span style={{ fontWeight: "bold" }}>Align actions</span>
      <div className="flex gap-1">
        {["Left", "Center", "Right", "Justify"].map((value) => {
          return (
            <button
              onClick={() =>
                handleOnClick(value.toLowerCase() as ElementFormatType)
              }
              className="border border-blue-400 p-2"
            >
              {value}
            </button>
          );
        })}
        <button
          onClick={() =>
            editor.dispatchCommand(OUTDENT_CONTENT_COMMAND, undefined)
          }
          className="border border-blue-400 p-2"
        >
          Outdent
        </button>
        <button
          onClick={() =>
            editor.dispatchCommand(INDENT_CONTENT_COMMAND, undefined)
          }
          className="border border-blue-400 p-2"
        >
          Indent
        </button>
      </div>
    </div>
  );
};
