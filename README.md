# Part1:
 * Grader Login:
   * Username: grader@143.198.224.52 	
   * Password: Ucsd_2020
 * [private ssh key](./id_rsa)
   * (no passphrase for the ssh key)
 * [Hack In The Box](https://hackinthebox.site)
 * GitHub repo: [https://github.com/upchang/hackinthebox](https://github.com/upchang/hackinthebox)
# Part2:
 * Github auto deploy setup: Our setup uses a github action to replace the html folder on our server with the html folder from our GitHub repo
when changes are pushed to main. Just push or merge any changes to the main branch and the changes appear on our website in a matter of seconds. 
The workflow file can be found in our repo at .github/workflows/deploy.yml.
# Part3:
 * User/passwd to login the site:
   * USER: grader
   * PASSWD: Ucsd_2020
 * Changes to HTML file in DevTools after compression: In this step, I go to file at /etc/apache2/apache2.conf and then I commented out the line `LoadModule deflate_module /usr/lib/apache2/modules/mod_deflate.so`. After that, I used `sudo service apache2 restart` to restart again and then I go back to my site I saw them gzip in the encode.
 * Removing 'server' header: I researched online for ways to change the "Server:" header value. I ended up installing the mod_security module using `sudo apt-get install libpache2-mod-security2` to accomplish this change. I then went into the `apache2.conf` file and added the following line `SecServerSignature "CSE135 Server"`. I then used `sudo service apache2 restart` to restart apache. After this the changes were visible when inspecting the "Server:" header value on the live site.
## NOTE: The images for this assignment can also be found in our GitHub repo in the pictures folder.
