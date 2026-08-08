<script>
  import CTA from '../lib/CTA.svelte';
</script>

<section class="chat-resume section">
  <div class="container">
    <div class="section-layout reverse">
      <div class="section-visual">
        <div class="chat-window">
          <div class="chat-toolbar"><div class="chat-dots"><span></span><span></span><span></span></div><span class="chat-title">Chat Resume Builder</span></div>
          <div class="chat-messages">
            <div class="chat-msg ai"><div class="chat-avatar ai-avatar">AI</div><div class="chat-bubble"><p>Hi! I'm your resume assistant. Let's build your resume together. What's your current or most recent job title?</p></div></div>
            <div class="chat-msg user"><div class="chat-bubble"><p>Senior Product Manager</p></div><div class="chat-avatar user-avatar">U</div></div>
            <div class="chat-msg ai"><div class="chat-avatar ai-avatar">AI</div><div class="chat-bubble"><p>Great! Let me build a profile for a Senior Product Manager. I'll guide you through each section.</p><p class="chat-next">First, tell me about the company and your key achievements there...</p></div></div>
            <div class="chat-typing"><span></span><span></span><span></span></div>
          </div>
          <div class="chat-input-bar"><input type="text" placeholder="Type your response..." disabled /><button disabled><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button></div>
        </div>
      </div>

      <div class="section-content">
        <span class="section-label">Chat-Resume Builder</span>
        <h2 class="section-title">Build your resume<br>by just chatting</h2>
        <p class="section-subtitle">No more wrestling with formatting or staring at blank sections. Our conversational AI asks the right questions and builds a perfect resume — as naturally as talking to a career coach.</p>
        <div class="chat-features-list">
          <div class="chat-feature"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg><span>Conversational interface — just answer questions naturally</span></div>
          <div class="chat-feature"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2"><path d="M12 2a10 10 0 1010 10 4 4 0 01-5-5 4 4 0 01-5-5"/><path d="M8.5 8.5v.01"/></svg><span>AI asks smart follow-ups to draw out your best achievements</span></div>
          <div class="chat-feature"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--brand-blue)" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg><span>Complete your entire resume in under 10 minutes</span></div>
        </div>
        <div class="chat-cta"><CTA variant="primary" size="lg">Start Chatting Now</CTA></div>
      </div>
    </div>
  </div>
</section>

<style>
  .chat-resume { background: var(--brand-blue-lightest); }
  .section-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 64px; align-items: center; }
  .section-layout.reverse .section-visual { order: -1; }
  .section-content { max-width: 560px; }
  .section-subtitle { margin-bottom: 28px; }
  .section-visual { display: flex; justify-content: center; }
  .chat-window { width: 100%; max-width: 440px; background: var(--white); border-radius: var(--radius-xl); border: 1px solid var(--gray-200); box-shadow: var(--shadow-xl); overflow: hidden; }
  .chat-toolbar { display: flex; align-items: center; gap: 10px; padding: 12px 16px; background: var(--brand-blue); }
  .chat-dots { display: flex; gap: 5px; } .chat-dots span { width: 8px; height: 8px; border-radius: 50%; background: rgba(255,255,255,0.5); }
  .chat-title { font-size: 0.8rem; color: rgba(255,255,255,0.9); font-weight: 600; margin-left: 8px; }
  .chat-messages { padding: 20px; display: flex; flex-direction: column; gap: 16px; max-height: 340px; overflow-y: auto; }
  .chat-msg { display: flex; gap: 10px; max-width: 90%; }
  .chat-msg.user { align-self: flex-end; flex-direction: row-reverse; }
  .chat-msg.ai { align-self: flex-start; }
  .chat-avatar { width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 0.7rem; font-weight: 700; flex-shrink: 0; }
  .ai-avatar { background: var(--brand-blue); color: var(--white); }
  .user-avatar { background: var(--gray-800); color: var(--white); }
  .chat-bubble { padding: 12px 16px; border-radius: var(--radius-md); font-size: 0.85rem; line-height: 1.6; }
  .chat-msg.ai .chat-bubble { background: var(--gray-50); color: var(--gray-700); border-top-left-radius: 4px; }
  .chat-msg.user .chat-bubble { background: var(--brand-blue-lightest); color: var(--gray-800); border-top-right-radius: 4px; }
  .chat-next { margin-top: 8px; opacity: 0.7; }
  .chat-typing { display: flex; gap: 4px; padding: 8px 16px; }
  .chat-typing span { width: 6px; height: 6px; border-radius: 50%; background: var(--gray-300); animation: typing 1.4s infinite; }
  .chat-typing span:nth-child(2) { animation-delay: 0.2s; } .chat-typing span:nth-child(3) { animation-delay: 0.4s; }
  @keyframes typing { 0%, 60%, 100% { opacity: 0.3; transform: translateY(0); } 30% { opacity: 1; transform: translateY(-4px); } }
  .chat-input-bar { display: flex; padding: 12px 16px; border-top: 1px solid var(--gray-100); gap: 8px; }
  .chat-input-bar input { flex: 1; padding: 10px 14px; border: 1px solid var(--gray-200); border-radius: var(--radius-sm); font-size: 0.85rem; background: var(--gray-50); }
  .chat-input-bar button { width: 38px; height: 38px; display: flex; align-items: center; justify-content: center; border-radius: var(--radius-sm); background: var(--brand-blue); color: var(--white); }
  .chat-features-list { display: flex; flex-direction: column; gap: 16px; margin-bottom: 32px; }
  .chat-feature { display: flex; align-items: center; gap: 12px; font-size: 0.925rem; color: var(--gray-600); }
  @media (max-width: 900px) { .section-layout, .section-layout.reverse { grid-template-columns: 1fr; gap: 40px; } .section-layout.reverse .section-visual { order: 0; } .section-content { max-width: 100%; } }
</style>
