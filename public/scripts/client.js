/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  //By default, error messages are hidden.
  $("#error-message-empty").hide();
  $("#error-message-tooLong").hide();

  const data = [];

  //Escape function to re-encode text so that unsafe characters are converted into a safe "encoded" representation//
  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //Renders the tweet data by appending tweet html to #tweet-container form element"
  const renderTweets = function(tweets) {
    $('#tweets-container').empty();
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').append($tweet);
    }
  };

  //Creates a new tweet element (article) and feeds it information from the tweet data//
  const createTweetElement = function(tweetData) {
    let $tweet = $(`
  <article class="tweet">
        <header class="tweet-header">
          <div class="user-profile">
            <img class="user-icon" src="${tweetData.user.avatars}"></img> 
            <h4 class="user-name">${tweetData.user.name}</h4>
          </div>
          <div>
            <h4 class="user-handle">${tweetData.user.handle}</h4>
          </div>
        </header>
        <div class="tweet-text">
          ${escape(tweetData.content.text)}
        </div>
        <footer class="tweet-footer">
          <span class="tweet-date">${timeago.format(tweetData.created_at)}</span>
          <div class="tweet-response">
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>`);
    return $tweet;
  };

  //Ajax Get request to pull tweets form the server and feed it to the render function//
  const loadTweets = function() {
    $.get("/tweets/", function(newTweet) {
      renderTweets(newTweet.reverse());
    });
  };

  loadTweets();

  //Adds new tweet when clicking submit//
  $("#new-tweet-form").submit(function(event) {
    event.preventDefault();
    const maxChar = 140;
    const inputLength = $(this).find("#tweet-text").val().length;
  
    $("#error-message-empty").slideUp("slow");
    $("#error-message-tooLong").slideUp("slow");

    if (!inputLength) {
      $("#error-message-empty").slideDown("slow");
      $("#error-message-tooLong").hide();
    } else if (inputLength - maxChar > 0) {
      $("#error-message-tooLong").slideDown("slow");
      $("#error-message-empty").hide();
    } else {
      const newTweet = $(this).serialize();
      $.post("/tweets/", newTweet, () => {
        $(this).find("#tweet-text").val("");
        $(this).find(".counter").val(maxChar);
        loadTweets();
      });
    }
  });
});
