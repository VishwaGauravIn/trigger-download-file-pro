# trigger-download-file-pro
It helps you to actually trigger download of any file available on any server, and avoiding opening of the file in browser.

# How to Use ?
There are 2 ways to use it
## First:
Just create anchor tag `<a>` and provide link in this format </BR>
`https://triggerdownload.herokuapp.com/api/download?url=YOUR_URL&filename=FILE_NAME&format=FILE_FORMAT`
#### **Required Parameters**
`url` = Your download URL </br>
`filename` = File Name for Downloaded file </br>
`format` = format/extension of the file that you want to download </br>

#### **Example 1:**
Simple Example
``` html
<a href="https://triggerdownload.herokuapp.com/api/download?url=https://ytdlpro.herokuapp.com/def_thumb.jpg&filename=logo&format=jpg">Click to Trigger Download!</a>
```
#### **Example 2:**
Pro Example , incase you need to pass url that contains `&` , we will just encode the url and then pass it. Let's assume you have to download from this url https://avatars.githubusercontent.com/u/81325730?v=4 then we will first use `encodeURIComponent` to remove the `&` from URL and then pass it in anchor tag. </br>
Simple HTML
``` html
<a href="https://triggerdownload.herokuapp.com/api/download?url="+url+"&filename=test&format=jpg">Click to Trigger Download!</a>
<script>
  const url = encodeURIComponent(https://avatars.githubusercontent.com/u/81325730?v=4)
</script>
```
React/NextJS
``` javascript
<a href="https://triggerdownload.herokuapp.com/api/download?url="+encodeURIComponent(https://avatars.githubusercontent.com/u/81325730?v=4)+"&filename=test&format=jpg">Click to Trigger Download!</a>
```
Similary, you can also pass variable as filename and format !

## Second:
You can copy `download.js` file from public/api folder of this repository and use it as your own API and you can also customise it as per your choice.

**ENJOY!**
