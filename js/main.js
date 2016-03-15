var $ul = $('ul');


grains.forEach(function (grain) {
  var $li = $('<li>');
  var $h2 = $('<h2>');
  var $img = $('<img>');
  var $p = $('<p>');

  $h2.html(grain.name);
  $p.html(grain.desc);
  $img.attr('src', 'images/' + grain.img);

  $li.append($img, $h2, $p);
  $ul.append($li)
});

