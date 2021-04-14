# Part1:
 * grader@143.198.224.52 	pass: Ucsd_2020
 * [private ssh key](./id_rsa)
 * [Hack In The Box](https://hackinthebox.site)
# Part2:
 * Detail of Github auto deploy setup: TODO
# Part3:
 * User/passwd to login the site:
 ** USER: grader
 ** PASSWD: Ucsd_2020
 * Changes to HTML file in DevTools after compression: In this step, I go to file at /etc/apache2/apache2.conf and then I commented out the line `LoadModule deflate_module /usr/lib/apache2/modules/mod_deflate.so`. After that, I used `sudo service apache2 restart` to restart again and then I go back to my site I saw them gzip in the encode.
 * Removing 'sever' header: TODO
