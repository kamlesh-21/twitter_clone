import { tweetsData } from './data.js';

const tweetInput = document.getElementById("tweet-input")
const tweetBtn = document.getElementById("tweet-btn")

tweetBtn.addEventListener("click", function(){
    console.log(tweetInput.value)
})

document.addEventListener("clcik", function(e){
    if(e.target.dataset.like){
        handleLikeClick(e.target.dataset.like)
    }
})

function handleLikeClick(tweetId){
    const targetTweetObj = tweetsData.filter(function(iterator){
        return iterator.uuid === tweetId
    })[0]
    targetTweetObj.likes++
    console.log(targetTweetObj.likes)

}

function getFeedHtml(){

    let feedHtml = ''
    
    tweetsData.forEach(function(tweets){
        feedHtml += 
            `<div class="tweet">
                <div class="tweet-inner">
                <img src="${tweets.profilePic}" class="profile-pic">
                    <div>
                        <p class="handle">${tweets.handle}</p>
                        <p class="tweet-text">${tweets.tweetText}</p>
                        <div class="tweet-details">
                            <span class="tweet-detail">
                            <i class="fa-regular fa-comment-dots" data-reply="${tweets.uuid}"></i>
                            ${tweets.replies.length}
                            </span>
                            <span class="tweet-detail">
                            <i class="fa-regular fa-heart" data-like="${tweets.uuid}"></i>
                            ${tweets.likes}
                            </span>
                            <span class="tweet-detail">
                            <i class="fa-solid fa-retweet" data-retweet="${tweets.uuid}"></i>
                            ${tweets.retweets}
                            </span>
                        </div>   
                    </div>            
                 </div>
            </div>
            `
    })

    return feedHtml
}

function render(){
    document.getElementById("feed").innerHTML = getFeedHtml()
}
render()