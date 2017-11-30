var library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             },


             // FUNCTIONS TO IMPLEMENT:

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks

  printPlaylists : function () {
    var playlists = this['playlists'];
    for(var key in playlists){
      var no_of_tracks = playlists[key]['tracks'].length;
      console.log(playlists[key]['id'] + ": " + playlists[key]['name'] + " - " + no_of_tracks + " tracks");
    }
  },

//printPlaylists();

// prints a list of all tracks, in the form:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)

  printTracks : function () {
    var tracks = this['tracks'];
    for(var key in tracks){
      console.log(tracks[key]['id'] + ": " + tracks[key]['name'] + "by " + tracks[key]['artist'] + "(" + tracks[key]['album'] + ")");
    }
  },

//printTracks();


// prints a list of tracks for a given playlist, in the form:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)

  printPlaylist : function (playlistId) {
    var no_of_tracks = this['playlists'][playlistId]['tracks'].length;
    console.log(this['playlists'][playlistId]['id'] + ": " + library['playlists'][playlistId]['name'] + " - " + no_of_tracks + " tracks");
    var tracksId = this['playlists'][playlistId]['tracks'];
    for(var key in tracksId){
      var playTrack = tracksId[key];
      console.log(this['tracks'][playTrack]['id'] + ": " + this['tracks'][playTrack]['name'] + "by " + this['tracks'][playTrack]['artist'] + "(" + this['tracks'][playTrack]['album'] + ")" );
    }
  },

//printPlaylist("p01");
//printPlaylist("p02");


// adds an existing track to an existing playlist

  addTrackToPlaylist : function (trackId, playlistId) {
    var trackArr = this['playlists'][playlistId]['tracks'];
    var trackadd = trackArr.push("trackId");
    this.printPlaylists();
  },

//addTrackToPlaylist("t03","p01");



// generates a unique id
// (use this for addTrack and addPlaylist)
  uid : function() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  },


// adds a track to the library

  addTrack : function (name, artist, album) {
    var tracks = this.tracks;
    var id = this.uid();
    var newTrack = {
      id: id,
      name: name,
      artist: artist,
      album: album
    };
    this.tracks[id] = newTrack;
  },



//addTrack("a","c", "b");
//console.log(library.tracks);
// adds a playlist to the library

  addPlaylist : function (name) {
    var playlists = this.playlists;
    var id = this.uid();
    var newPlaylist = {
      id: id,
      name: name
    };
    this.playlists[id] = newPlaylist;
  }

//addPlaylist("cool");
//console.log(library.playlists);



}



/*
// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search

var printSearchResults = function(query) {

}
*/



library.printPlaylists();
library.printTracks();
library.printPlaylist("p01");
library.printPlaylist("p02");
library.addTrackToPlaylist("t03","p01");
library.addTrack("a","c", "b");
library.addPlaylist("cool");

