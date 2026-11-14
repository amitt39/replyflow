import { useRef } from "react";

export default function ReplyComposer({
  isReplyMode,
  handleSend,
  replyText,
  setIsReplyMode,
  handleReplyText,
}) {
  const textareaRef = useRef(null);
  return (
    <div className="flex-none border-t border-slate-200 bg-white p-3 sm:p-4">
      <div className="mb-1.5 flex items-center justify-between gap-3">
        <div className="flex items-center gap-1 rounded-lg bg-slate-100 p-1">
          <button
            onClick={() => {
              setIsReplyMode(true);
              textareaRef.current?.focus();
            }}
            type="button"
            className={
              isReplyMode
                ? "rounded-md bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm"
                : "cursor-pointer rounded-md px-3 py-1 text-xs font-medium text-slate-500 transition-colors hover:bg-white/70 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            }
          >
            Reply
          </button>
          <button
            onClick={() => {
              setIsReplyMode(false);
              textareaRef.current?.focus();
            }}
            type="button"
            className={
              !isReplyMode
                ? "rounded-md bg-white px-3 py-1 text-xs font-semibold text-slate-800 shadow-sm"
                : "cursor-pointer rounded-md px-3 py-1 text-xs font-medium text-slate-500 transition-colors hover:bg-white/70 hover:text-slate-700 focus:outline-none focus:ring-2 focus:ring-indigo-200"
            }
          >
            Internal Note
          </button>
        </div>
        <button
          onClick={handleSend}
          type="button"
          className="cursor-pointer rounded-lg bg-indigo-600 px-4 py-1.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 active:bg-indigo-800"
        >
          Send
        </button>
      </div>
      <textarea
        ref={textareaRef}
        value={replyText}
        onChange={(e) => {
          handleReplyText(e.target.value);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
          }
        }}
        rows="2"
        placeholder={
          isReplyMode ? "Write a reply..." : "Write a internal note..."
        }
        aria-label="Reply message"
        className="w-full resize-none rounded-lg border border-slate-200 bg-slate-50 p-2.5 text-sm leading-5 text-slate-700 outline-none placeholder:text-slate-400 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-100"
      />
    </div>
  );
}
