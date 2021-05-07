const slugify = require(`slugify`);

/* Generates user friendly links */
module.exports = {
  CreateFriendlyUrl: function (text, uid) {
    return slugify(`${text}-${uid}`, {
      replacement: '-',
      lower: true,
      remove: /[*+~.()'"!:@#?]/g
    });
  }
};
