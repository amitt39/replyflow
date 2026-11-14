import ConversationMessages from "./ConversationMessages";
import ReplyComposer from "./ReplyComposer";

export default function Conversation({
  ticket,
  isReplyMode,
  handleSend,
  replyText,
  setIsReplyMode,
  handleReplyText,
}) {
  return (
    <section
      aria-labelledby="conversation-title"
      className="flex min-h-0 flex-1 flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm"
    >
      <ConversationMessages ticket={ticket} />

      <ReplyComposer
        isReplyMode={isReplyMode}
        handleSend={handleSend}
        replyText={replyText}
        setIsReplyMode={setIsReplyMode}
        handleReplyText={handleReplyText}
      />
    </section>
  );
}
