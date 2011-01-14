// Globals
var TopDirectory = window.location.pathname.replace(/iphone.html$/,'');
var TopURL = window.location.protocol + '//' + window.location.host + TopDirectory;
var jQT = $.jQTouch({
statusBar: 'black-translucent',
preloadImages: [
            'themes/jqt/img/chevron.png',
            'themes/jqt/img/back_button_clicked.png',
            'themes/jqt/img/button_clicked.png'
            ]
});

$(document).ready(function(){
    $('#home .edgetoedge').load(TopDirectory + ' a',function(){fixlist("home",TopDirectory);});
});
function loadDirectory(url,section)
{
  $('#' + section + ' .edgetoedge').load(url + ' a',function(){fixlist(section,url);});
}
function fixlist(section,baseURL)
{
  $('#'+section + ' .edgetoedge a[href^="/"]').remove();
  $('#'+section + ' .edgetoedge a[href^="?"]').remove();
  $('#'+section + ' .edgetoedge a[href^="jqtouch"]').remove();
  $('#'+section + ' .edgetoedge a[href^="themes"]').remove();
  $('#'+section + ' .edgetoedge a[href$="html"]').remove();
  $('#'+section + ' .edgetoedge a[href$="README.md"]').remove();
  $('#'+section + ' .edgetoedge a[href$="js"]').remove();
  $('#'+section + ' .edgetoedge a[href$="/"]').wrap('<li class="arrow" />');
  $('#'+section + ' a[href$="/"]').each(function(idx,elem)
  {
    this.innerText = this.innerText.replace(/\/$/,'');
    var url = this.href;
    url = url.replace(TopURL,'');
    var newsection = unescape(url).replace(/ /g,'_');
    newsection = newsection.replace(/\/$/,'');
    newsection = newsection.replace(/\//g,'.');
    $('#placeholder').before('<div id="' + newsection + '"><div class="toolbar"><a class="button back" href="#">Back</a><h1>'+url.replace(/%20/g,' ').replace(/\/$/,'')+'</h1></div><ul class="edgetoedge"></ul></div>');
    this.href = '#' + newsection;
    loadDirectory(baseURL+url,newsection);
  });
  $('#'+section + ' .edgetoedge > a').each(function(idx,elem)
  {
    this.innerText = this.innerText.replace(/\.m4v$/,'');
    this.innerText = this.innerText.replace(/^\d{1,4} - /,'');
    var name = this.innerText;
    var url = this.href;
    url = url.replace(TopURL,'');
    url = baseURL + url;
    this.href='#video';
    var vidwidth = window.innerWidth;
    var vidheight = window.innerWidth * 3 / 4;
    this.onclick=function()
    {
      $('#video h1').replaceWith(
	'<h1>' + name +
	'</h1>');
      $('#video video').replaceWith(
	'<video src="' + url + '" width="' + vidwidth + '" height="' + vidheight + '" ' +
	'class="edgetoedge" controls x-webkit-airplay="allow" autoplay>' +
	'Your browser does not support the &lt;video&gt; tag.</video>');
      $('#video video').each(function()
      {
	this.addEventListener('loadedmetadata',function()
	{
	  $('#video video').each(function()
	  {
	    var width = window.innerWidth;
	    var height = width * this.videoHeight / this.videoWidth;
	    if (height > window.innerHeight)
	    {
	      height = window.innerHeight;
	      width = height * this.videoWidth / this.videoHeight;
	    }
	    this.width = width;
	    this.height = height;
	    this.play();
	  });
	},false);
      });
    };
  });
  $('#'+section + ' .edgetoedge > a').wrap('<li />');
}
