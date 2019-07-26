document.write('<link rel="stylesheet" href="https://github.githubassets.com/assets/gist-embed-4e8330898d16b1b65e7f0856076a5a28.css">')
document.write('<div id=\"gist30264390\" class=\"gist\">\n    <div class=\"gist-file\">\n      <div class=\"gist-data\">\n        <div class=\"js-gist-file-update-container js-task-list-container file-box\">\n  <div id=\"file-service-worker-add-offline-page-js\" class=\"file\">\n    \n\n  <div itemprop=\"text\" class=\"Box-body p-0 blob-wrapper data type-javascript \">\n      \n<table class=\"highlight tab-size js-file-line-container\" data-tab-size=\"8\">\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L1\" class=\"blob-num js-line-number\" data-line-number=\"1\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC1\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>use strict<span class=\"pl-pds\">&#39;<\/span><\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L2\" class=\"blob-num js-line-number\" data-line-number=\"2\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC2\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L3\" class=\"blob-num js-line-number\" data-line-number=\"3\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC3\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">var<\/span> cacheVersion <span class=\"pl-k\">=<\/span> <span class=\"pl-c1\">1<\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L4\" class=\"blob-num js-line-number\" data-line-number=\"4\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC4\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">var<\/span> currentCache <span class=\"pl-k\">=<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L5\" class=\"blob-num js-line-number\" data-line-number=\"5\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC5\" class=\"blob-code blob-code-inner js-file-line\">  offline<span class=\"pl-k\">:<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>offline-cache<span class=\"pl-pds\">&#39;<\/span><\/span> <span class=\"pl-k\">+<\/span> cacheVersion<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L6\" class=\"blob-num js-line-number\" data-line-number=\"6\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC6\" class=\"blob-code blob-code-inner js-file-line\">};<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L7\" class=\"blob-num js-line-number\" data-line-number=\"7\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC7\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-k\">const<\/span> <span class=\"pl-c1\">offlineUrl<\/span> <span class=\"pl-k\">=<\/span> <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>offline-page.html<span class=\"pl-pds\">&#39;<\/span><\/span>;<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L8\" class=\"blob-num js-line-number\" data-line-number=\"8\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC8\" class=\"blob-code blob-code-inner js-file-line\">\n<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L9\" class=\"blob-num js-line-number\" data-line-number=\"9\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC9\" class=\"blob-code blob-code-inner js-file-line\"><span class=\"pl-c1\">this<\/span>.<span class=\"pl-c1\">addEventListener<\/span>(<span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>install<span class=\"pl-pds\">&#39;<\/span><\/span>, <span class=\"pl-smi\">event<\/span> <span class=\"pl-k\">=&gt;<\/span> {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L10\" class=\"blob-num js-line-number\" data-line-number=\"10\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC10\" class=\"blob-code blob-code-inner js-file-line\">  <span class=\"pl-c1\">event<\/span>.<span class=\"pl-en\">waitUntil<\/span>(<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L11\" class=\"blob-num js-line-number\" data-line-number=\"11\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC11\" class=\"blob-code blob-code-inner js-file-line\">    <span class=\"pl-smi\">caches<\/span>.<span class=\"pl-c1\">open<\/span>(<span class=\"pl-smi\">currentCache<\/span>.<span class=\"pl-smi\">offline<\/span>).<span class=\"pl-c1\">then<\/span>(<span class=\"pl-k\">function<\/span>(<span class=\"pl-smi\">cache<\/span>) {<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L12\" class=\"blob-num js-line-number\" data-line-number=\"12\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC12\" class=\"blob-code blob-code-inner js-file-line\">      <span class=\"pl-k\">return<\/span> <span class=\"pl-smi\">cache<\/span>.<span class=\"pl-en\">addAll<\/span>([<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L13\" class=\"blob-num js-line-number\" data-line-number=\"13\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC13\" class=\"blob-code blob-code-inner js-file-line\">          <span class=\"pl-s\"><span class=\"pl-pds\">&#39;<\/span>./img/offline.svg<span class=\"pl-pds\">&#39;<\/span><\/span>,<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L14\" class=\"blob-num js-line-number\" data-line-number=\"14\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC14\" class=\"blob-code blob-code-inner js-file-line\">          offlineUrl<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L15\" class=\"blob-num js-line-number\" data-line-number=\"15\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC15\" class=\"blob-code blob-code-inner js-file-line\">      ]);<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L16\" class=\"blob-num js-line-number\" data-line-number=\"16\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC16\" class=\"blob-code blob-code-inner js-file-line\">    })<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L17\" class=\"blob-num js-line-number\" data-line-number=\"17\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC17\" class=\"blob-code blob-code-inner js-file-line\">  );<\/td>\n      <\/tr>\n      <tr>\n        <td id=\"file-service-worker-add-offline-page-js-L18\" class=\"blob-num js-line-number\" data-line-number=\"18\"><\/td>\n        <td id=\"file-service-worker-add-offline-page-js-LC18\" class=\"blob-code blob-code-inner js-file-line\">});<\/td>\n      <\/tr>\n<\/table>\n\n\n  <\/div>\n\n  <\/div>\n<\/div>\n\n      <\/div>\n      <div class=\"gist-meta\">\n        <a href=\"https://gist.github.com/deanhume/81960f702ceab4f90725/raw/07332e091a96fad592ddfdae3271d8f69ae7977c/service-worker-add-offline-page.js\" style=\"float:right\">view raw<\/a>\n        <a href=\"https://gist.github.com/deanhume/81960f702ceab4f90725#file-service-worker-add-offline-page-js\">service-worker-add-offline-page.js<\/a>\n        hosted with &#10084; by <a href=\"https://github.com\">GitHub<\/a>\n      <\/div>\n    <\/div>\n<\/div>\n')
