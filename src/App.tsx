import React, { useMemo } from "react";
import {
  InitialConfigType,
  LexicalComposer,
} from "@lexical/react/LexicalComposer";
// import { PlainTextPlugin } from "@lexical/react/LexicalPlainTextPlugin";
import { RichTextPlugin } from "@lexical/react/LexicalRichTextPlugin";
import { ContentEditable } from "@lexical/react/LexicalContentEditable";
import LexicalErrorBoundary from "@lexical/react/LexicalErrorBoundary";
import { HistoryPlugin } from "@lexical/react/LexicalHistoryPlugin";
import {
  CustomHistoryActions,
  CustomTextActions,
  CustomAlignActions,
  OnChangePlugin,
} from "./components";

export const App: React.FC = () => {
  const CustomContent = useMemo(() => {
    return (
      <ContentEditable
        style={{
          position: "relative",
          borderColor: "rgba(255,211,2,0.68)",
          border: "2px solid red",
          borderRadius: "5px",
          maxWidth: "100%",
          padding: "10px",
        }}
      />
    );
  }, []);

  const CustomPlaceholder = useMemo(() => {
    return (
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 30,
        }}
      >
        Enter some text...
      </div>
    );
  }, []);

  const lexicalConfig: InitialConfigType = {
    namespace: "My Rich Text Editor",
    onError: (e) => {
      console.log("ERROR:", e);
    },
    editorState: JSON.stringify({
      root: {
        children: [
          {
            children: [
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "asd",
                type: "text",
                version: 1,
              },
              {
                type: "linebreak",
                version: 1,
              },
              {
                detail: 0,
                format: 0,
                mode: "normal",
                style: "",
                text: "dsa",
                type: "text",
                version: 1,
              },
            ],
            direction: "ltr",
            format: "",
            indent: 0,
            type: "paragraph",
            version: 1,
          },
        ],
        direction: "ltr",
        format: "",
        indent: 0,
        type: "root",
        version: 1,
      },
    }),
    theme: {
      text: {
        bold: "font-bold text-red-500",
        italic: "text-italic",
        underline: "text-underline",
        code: "text-code",
        highlight: "text-highlight",
        strikethrough: "text-strikethrough",
        subscript: "text-subscript",
        superscript: "text-superscript",
      },
    },
  };

  return (
    <div style={{ padding: "20px" }}>
      <LexicalComposer initialConfig={lexicalConfig}>
        <RichTextPlugin
          contentEditable={CustomContent}
          placeholder={CustomPlaceholder}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <HistoryPlugin />
        <OnChangePlugin />
        <div style={{ margin: "20px 0px" }}>
          <CustomHistoryActions />
          <CustomTextActions />
          <CustomAlignActions />
        </div>
      </LexicalComposer>
    </div>
  );
};
