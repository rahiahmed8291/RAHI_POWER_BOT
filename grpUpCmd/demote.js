module.exports = {
  event: 'demote',
  handle: async ({ api, event }) => {
    const demotedMembers = event.participants;
    console.log(event);
    for (const member of demotedMembers) {
      await api.sendMessage(event.id, {
        text: `😢 @${member.split('@')[0]} has been demoted. Better luck next time
        ├─➤ Powered by Mᴏʜᴀᴍᴍᴀᴅ Rꫝʜɪ!`,
        mentions: [member]
      });
    }
  }
};
