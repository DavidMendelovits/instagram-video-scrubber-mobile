# Instagram video scrubbing

## About the extension

Instagram likely has the world's largest store of acrobatic videos. This extension aims to provide scrubbing functionality, allowing wannabe acrobats (like myself) to review some of the amazing footage that gets posted everyday.

![src/icon.png](src/icon.png)

## Get set up

1. clone & install

```jsx
git clone https://github.com/DavidMendelovits/instagram-video-scrubber-mobile.git
cd instagram-video-scrubber-mobile
yarn run build
```

Follow [this guide from google](https://developer.chrome.com/extensions/getstarted) to load an unpacked folder as a chrome extension

## How it works:

Use Instagram as you would normally. When you click a video to play, the content script will add frame-by-frame functionality.

## Features:

→Video scrubbing (tap left, or right, to scrub 1 frame backward or forward)

→keybindings should work on any desktop browser as well

## Feature ideas:

- reformat instagram using Vue components (I've seen this done in React among other things)
- store videos in browser for side-by-side comparison (This one has proven to be a lengthier task)