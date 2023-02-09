(function() {
  const bgcolor = '#004a14';

  // 指定間隔で監視(msec)
  setInterval(setBgColorOfCircleTweets, 200);

  //サークルツイートの背景色を変える
  function setBgColorOfCircleTweets()
  {
    let tweetsWithInactiveRT = document.querySelectorAll('article:has(.r-icoktb)');

    Array.prototype.map.call(tweetsWithInactiveRT, function(tweet) {
      //鍵アカウントの場合は背景色を変えない
      isKeyAccount = tweet.matches('article:has([data-testid="icon-lock"])');
      if(!isKeyAccount){
        tweet.setAttribute('style','background-color: '+bgcolor);
      }
    });
  }
}());
