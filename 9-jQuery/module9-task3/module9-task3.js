const $listReqDiv = $("h3 + div");
$listReqDiv.each(function (index, element) {
  $(element).after($(element).prev());
});