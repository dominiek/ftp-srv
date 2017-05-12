module.exports = {
  directive: 'PBSZ',
  handler: function ({command} = {}) {
    if (!this.server._tls || !this.secure) return this.reply(202, 'Not suppored');
    this.bufferSize = parseInt(command.arg, 10);
    return this.reply(200, this.bufferSize === 0 ? 'OK' : 'Buffer too large: PBSZ=0');
  },
  syntax: '{{cmd}}',
  description: 'Protection Buffer Size'
};
