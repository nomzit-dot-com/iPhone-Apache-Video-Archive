If you have a load of .m4v files on a server in sensibly-named directories this will give you a nice iPhone interface to them, presuming that your server runs Apache and you're using the default directory listings.

It works by reading the html Apache generates for directory listings and creating a nice menu system based on that.

Installation Instructions
-------------------------
Clone this repository and its submodules:

	git clone --recursive -- git://github.com/nomzit-dot-com/iPhone-Apache-Video-Archive.git iphone

Move, copy or link the files in the newly created iphone directory to the root of the directory containing your media files.

Visit iphone.html in the directory via the corresponding HTTP URL

License
-------
This work is licensed under the [Creative Commons Attribution-NonCommercial-ShareAlike 2.0 UK: England & Wales License](http://creativecommons.org/licenses/by-nc-sa/2.0/uk/).
