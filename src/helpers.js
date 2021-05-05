const slugify = require(`slugify`);

module.exports = {
  CreateFriendlyUrl: function (text, uid) {
    return slugify(`${text}-${uid}`, {
      replacement: '-', // replace spaces with replacement character, defaults to `-`
      lower: true,
      remove: /[*+~.()'"!:@#?]/g
    });
  }
};
