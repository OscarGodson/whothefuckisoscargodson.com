/**
 * All the things Oscar Godson fucking is.
 * Each of these is picked at random.
 *
 */
var allTheThings = [
  'A fucking front-end engineer at <a href="http://simple.com">Simple</a>',
  'Used to be a fucking software engineer at <a href="http://yammer.com">Yammer</a>',
  'A fucking <a href="http://oscargodson.com">blogger</a>',
  'The fucking husband to <a href="http://twitter.com/ciarragodson">Ciarra</a>',
  'The fucking father of Ezra and Elliott',
  'The fucking creator of <a href="http://epiceditor.com">EpicEditor</a>',
  'A fucking open source <a href="http://github.com">contributor</a>',
  'A fucking drummer',
  'A fucking punk, metal, and folk music lover',
  'A fucking <a href="http://en.wikipedia.org/wiki/Portland,_Oregon">PDX</a> native',
  'The fucking <a href="http://www.businessinsider.com/tour-after-hours-at-yammer-the-hot-sf-startup-that-just-scored-85-million-2012-3#oscar-godson-is-the-baby-here-hes-only-21-years-old-his-nickname-is-justin-bieber-see-the-resemblance-9">Justin Bieber of JavaScript</a>',
  'Fucking <a href="http://twitter.com/oscargodson">@oscargodson</a> on Twitter',
  'Used to be a fucking web developer for the <a href="http://www.portlandoregon.gov/bts/">eGov team</a> at the City of Portland, Oregon',
  'A fucking Windows Phone 8 user',
  'Fucking <a href="http://instagram.com/oscargodson">@oscargodson</a> on Instagram',
  'A hot pepper enthusiast',
  'A fucking animated GIF lover',
  'A fucking whiskey connoisseur'
];

var theMessage = document.getElementById('the-message');

function pickRandomItem (arr) {
  var item,
      total = arr.length;
      randomNum = Math.round(Math.random() * (total - 1));

  item = arr[randomNum];

  return item;
}

theMessage.innerHTML = pickRandomItem(allTheThings);
