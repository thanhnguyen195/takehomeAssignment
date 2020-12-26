# Create a Feed
## Description
A feed, or news feed, is a common component in many social network and content sharing apps, including Facebook, Instagram, YouTube, etc. Your assignment is to create a React app that displays a feed of audio track files, with each feed item showing the track's title, poster, and description. The exact design of the feed is up to you.

The data for your feed is contained in a JSON file in the `/data` folder. This file contains a list of audio tracks with {id, title, poster, description}.

## Requirement
* Create a React app,
* Render an feed based on the given data in **random** order,
* Implement a refresh/reload mechanism, so that each time user reloads/refreshes the feed screen, the order of the tracks will be shuffled.

## Deadline
You have 1 day (24 hours) to complete the assignment.

## Bonus points
If you finish the required tasks ahead of time, you can do either of the following tasks for bonus points:
* Implement an audio player screen that displays the track's poster, title, and a control bar. From the feed screen, when user presses on either the image or title of a track, they will be taken to this audio player screen.
* Implement a like button on the feed screen. For each track, there is a like button that would be toggled (between liked/unliked states) if user presses on it. The state of the like button should be "remembered" even after user reloads/refreshes the feed screen. 

## Submit
Either bundle your app into a .zip file or create a Github repo and share it with us.
