(function() {
  const bgcolor = '#1a3606';
  const searchTarget = '.r-knv0ih'

  // 指定間隔で監視(msec)
  setInterval(setBgColorOfCircleTweets, 200);

  //サークルツイートの背景色を変える
  function setBgColorOfCircleTweets()
  {
    let tweetsWithCircleDescription = document.querySelectorAll('article:has('+searchTarget+')');
    Array.prototype.map.call(tweetsWithCircleDescription, function(tweet) {
      tweet.setAttribute('style','background-color: '+bgcolor);
    });
  }
}());