import React from 'react';
import './App.css';
import axios from 'axios';
import Nav from './Nav/Nav';
import SearchBar from './SearchBar/SearchBar';
import VideoList from './VideoList/VideoList';
import VideoPlayer from './VideoPlayer/VideoPlayer';
import InfiniteScroll from 'react-infinite-scroller';
import spinner from './spinner.gif';
import { v4 } from 'uuid';
import { debounce } from "loadsh";
import VideoListItems from './VideoList/VideoListItems';




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        videoDatas : [
          {
            "kind": "youtube#video",
            "etag": "SLZWvKMGnPvgwLeFxaL3wRJRif0",
            "id": "nMPCXuvL8EM",
            "snippet": {
              "publishedAt": "2022-10-06T20:19:10Z",
              "channelId": "UCGIY_O-8vW4rfX98KlMkvRg",
              "title": "The Super Mario Bros. Movie Direct",
              "description": "Watch this Nintendo Direct: The Super Mario Bros. Movie presentation introducing the world premiere trailer for the upcoming film (no game information will be featured).\n\nSubscribe for more Nintendo fun! https://goo.gl/HYYsot\r\n\r\nVisit Nintendo.com for all the latest! http://www.nintendo.com/\r\n\r\nLike Nintendo on Facebook: http://www.facebook.com/Nintendo\r\nFollow us on Twitter: http://twitter.com/NintendoAmerica\r\nFollow us on Instagram: http://instagram.com/Nintendo\r\nFollow us on Pinterest: http://pinterest.com/Nintendo",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/nMPCXuvL8EM/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/nMPCXuvL8EM/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/nMPCXuvL8EM/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/nMPCXuvL8EM/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/nMPCXuvL8EM/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Nintendo of America",
              "tags": [
                "adventure",
                "fun",
                "nintendo"
              ],
              "categoryId": "1",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "The Super Mario Bros. Movie Direct",
                "description": "Watch this Nintendo Direct: The Super Mario Bros. Movie presentation introducing the world premiere trailer for the upcoming film (no game information will be featured).\n\nSubscribe for more Nintendo fun! https://goo.gl/HYYsot\r\n\r\nVisit Nintendo.com for all the latest! http://www.nintendo.com/\r\n\r\nLike Nintendo on Facebook: http://www.facebook.com/Nintendo\r\nFollow us on Twitter: http://twitter.com/NintendoAmerica\r\nFollow us on Instagram: http://instagram.com/Nintendo\r\nFollow us on Pinterest: http://pinterest.com/Nintendo"
              },
              "defaultAudioLanguage": "en-US"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "O6z5JBEl2Ygak23TMZkojKxekaQ",
            "id": "Ut68FBnWbAI",
            "snippet": {
              "publishedAt": "2022-10-06T15:00:31Z",
              "channelId": "UCRrigpc864fw8ZNsJ2AnEJA",
              "title": "ok, let's talk about it. - The TryPod Ep. 181",
              "description": "This episode is sponsored by BetterHelp. Take charge of your mental health with 10% off your first month of online therapy at https://betterhelp.com/trypod\nSupport local restaurants from the comfort of your home. Download the Doordash app and use code TRYPOD for 25% off and zero delivery fees on your first order of $15 or more.\nFor fiendish fun anytime, anywhere, download Best Fiends for FREE from the App Store or Google Play.\nShop the most protective and sustainable phone cases at CASETiFY. Check out http://cst.fyi/g2zDe today to get 15% off your cases!\n_____________________________________________________\n\nSOCIALS\n@keithhabs\n@korndiddy\n@milesbon\n\nPODCAST PRODUCER\nMiles Bonsignore\n\nPODCAST INTERN\nRainie Toll",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/Ut68FBnWbAI/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/Ut68FBnWbAI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/Ut68FBnWbAI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "TryPods",
              "tags": [
                "tryguys",
                "keith",
                "ned",
                "zach",
                "eugene",
                "habersberger",
                "fulmer",
                "kornfeld",
                "yang",
                "buzzfeedvideo",
                "buzzfeed",
                "ariel",
                "ned & ariel",
                "comedy",
                "education",
                "funny",
                "try",
                "learn",
                "fail",
                "experiment",
                "test",
                "tryceratops",
                "podcast",
                "advice",
                "miles",
                "miles nation",
                "secrets",
                "show",
                "talkshow",
                "behind the scenes",
                "youtubers",
                "ramble",
                "audio",
                "video podcast",
                "clip",
                "segment",
                "silly",
                "becky",
                "maggie",
                "you can sit with us",
                "try wives",
                "girls",
                "female",
                "women",
                "commentary",
                "garrick bernard",
                "kelsey darragh",
                "movies",
                "tv",
                "scandal",
                "controversy",
                "drama"
              ],
              "categoryId": "23",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "ok, let's talk about it. - The TryPod Ep. 181",
                "description": "This episode is sponsored by BetterHelp. Take charge of your mental health with 10% off your first month of online therapy at https://betterhelp.com/trypod\nSupport local restaurants from the comfort of your home. Download the Doordash app and use code TRYPOD for 25% off and zero delivery fees on your first order of $15 or more.\nFor fiendish fun anytime, anywhere, download Best Fiends for FREE from the App Store or Google Play.\nShop the most protective and sustainable phone cases at CASETiFY. Check out http://cst.fyi/g2zDe today to get 15% off your cases!\n_____________________________________________________\n\nSOCIALS\n@keithhabs\n@korndiddy\n@milesbon\n\nPODCAST PRODUCER\nMiles Bonsignore\n\nPODCAST INTERN\nRainie Toll"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "74hy-0bQDgJb4nx7UaHzQrnxfdo",
            "id": "4YEEDqke-D0",
            "snippet": {
              "publishedAt": "2022-10-06T13:00:21Z",
              "channelId": "UCFctpiB_Hnlk3ejWfHqSm6Q",
              "title": "Jump into a Paldean Journey | Pokémon Scarlet and Pokémon Violet",
              "description": "Every big journey begins with a single step! 🌄 Take a peek at some of the adventure you'll find through the open world of Paldea!\n\nWhere will you go? What will you discover? Find your treasure in your own journey in Pokémon Scarlet & Pokémon Violet, available 11/18!\n\nPre-order Pokémon Scarlet & Pokémon Violet today to get ready for an exciting adventure in Paldea! ❤️💜 https://pkmn.news/BuyScarletViolet\n\nOfficial Site: https://www.pokemon.com\nShop: http://www.pokemoncenter.com\nFacebook: http://www.facebook.com/Pokemon\nTwitter: http://www.twitter.com/Pokemon\nInstagram: http://www.instagram.com/pokemon\nTikTok: https://www.tiktok.com/@pokemonofficial",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/4YEEDqke-D0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/4YEEDqke-D0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/4YEEDqke-D0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "The Official Pokémon YouTube channel",
              "tags": [
                "Pokémon Scarlet",
                "Pokémon Violet",
                "Pokémon Scarlet and Violet",
                "Pokémon",
                "Pokémon picnic",
                "New Pokémon Scarlet",
                "New Pokémon Violet",
                "Farigiraf",
                "TM Machine",
                "Pokémon Profile",
                "Pokémon VG",
                "Pokémon video games",
                "Scarlet and Violet",
                "Gen 9",
                "Paldea",
                "Paldea region",
                "Pokémon SV",
                "Pokémon ScaVio"
              ],
              "categoryId": "20",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Jump into a Paldean Journey | Pokémon Scarlet and Pokémon Violet",
                "description": "Every big journey begins with a single step! 🌄 Take a peek at some of the adventure you'll find through the open world of Paldea!\n\nWhere will you go? What will you discover? Find your treasure in your own journey in Pokémon Scarlet & Pokémon Violet, available 11/18!\n\nPre-order Pokémon Scarlet & Pokémon Violet today to get ready for an exciting adventure in Paldea! ❤️💜 https://pkmn.news/BuyScarletViolet\n\nOfficial Site: https://www.pokemon.com\nShop: http://www.pokemoncenter.com\nFacebook: http://www.facebook.com/Pokemon\nTwitter: http://www.twitter.com/Pokemon\nInstagram: http://www.instagram.com/pokemon\nTikTok: https://www.tiktok.com/@pokemonofficial"
              },
              "defaultAudioLanguage": "en-US"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "QZteMU3SWIFPf9AuyamPNzEH9mI",
            "id": "5EYP3_yRD1k",
            "snippet": {
              "publishedAt": "2022-10-06T15:00:03Z",
              "channelId": "UC1sELGmy5jp5fQUugmuYlXQ",
              "title": "Minecraft Live 2022: Vote for the Tuff Golem!",
              "description": "Meet the tuff golem, a statue with a twist – it comes alive! When the tuff golem awakens, it will walk around, pick up, and hold any item it comes across. Don’t worry, it will return to the same spot that you’ve placed it when it turns back into a statue. It may be a work of art, but you’re the designer!\n\nVote for your favorite mob on https://Minecraft.net, the Minecraft launcher, or in a special Bedrock server! Voting opens on October 14, noon EDT giving you 24 hours to make your voice heard. Read more about the mob vote at https://Minecraft.net/live",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/5EYP3_yRD1k/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/5EYP3_yRD1k/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/5EYP3_yRD1k/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/5EYP3_yRD1k/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/5EYP3_yRD1k/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Minecraft",
              "tags": [
                "minecraft mob vote",
                "minecraft mob vote 2022",
                "minecraft live 2022"
              ],
              "categoryId": "20",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Minecraft Live 2022: Vote for the Tuff Golem!",
                "description": "Meet the tuff golem, a statue with a twist – it comes alive! When the tuff golem awakens, it will walk around, pick up, and hold any item it comes across. Don’t worry, it will return to the same spot that you’ve placed it when it turns back into a statue. It may be a work of art, but you’re the designer!\n\nVote for your favorite mob on https://Minecraft.net, the Minecraft launcher, or in a special Bedrock server! Voting opens on October 14, noon EDT giving you 24 hours to make your voice heard. Read more about the mob vote at https://Minecraft.net/live"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "j03ycTk4m9P5zgYDS2mX_5fcjv8",
            "id": "OeVapCrI1pY",
            "snippet": {
              "publishedAt": "2022-10-06T13:00:16Z",
              "channelId": "UC9YydG57epLqxA9cTzZXSeQ",
              "title": "Official Launch Trailer | Call of Duty: Modern Warfare II",
              "description": "You are the company you keep 💪\n \nTeam up with TF141 a week early with Campaign Early Access. Available with #MWII digital pre-order here: https://bit.ly/MWIIPREORDER\n\nFollow #CallofDuty for the latest intel:\nTwitter: http://twitter.com/CallofDuty\nInstagram: http://instagram.com/callofduty\nFacebook: http://facebook.com/CallofDuty\nTikTok: http://www.tiktok.com/@callofduty\n\n#ModernWarfare2",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/OeVapCrI1pY/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/OeVapCrI1pY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/OeVapCrI1pY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/OeVapCrI1pY/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/OeVapCrI1pY/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Call of Duty",
              "tags": [
                "call of duty",
                "cod",
                "activision",
                "mwii launch trailer",
                "cod mwii launch trailer",
                "mw2 launch trailer",
                "cod mw2 launch trailer",
                "mwii launch",
                "mwii trailer",
                "mw2 launch",
                "mw2 trailer",
                "call of duty trailer",
                "call of duty launch",
                "modern warfare 2",
                "cod mw2",
                "modern warfare",
                "call of duty modern warfare 2",
                "modern warfare 2 preorder",
                "Modern Warfare II Gameplay trailer",
                "MW II Gameplay Trailer",
                "MW 2 Gameplay Trailer",
                "Modern Warfare 2 launch",
                "Modern Warfare II launch",
                "MWII Launch Gameplay Trailer"
              ],
              "categoryId": "20",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Official Launch Trailer | Call of Duty: Modern Warfare II",
                "description": "You are the company you keep 💪\n \nTeam up with TF141 a week early with Campaign Early Access. Available with #MWII digital pre-order here: https://bit.ly/MWIIPREORDER\n\nFollow #CallofDuty for the latest intel:\nTwitter: http://twitter.com/CallofDuty\nInstagram: http://instagram.com/callofduty\nFacebook: http://facebook.com/CallofDuty\nTikTok: http://www.tiktok.com/@callofduty\n\n#ModernWarfare2"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "cf2Aoi5r5T7KeFcABrkxBXXnUCc",
            "id": "H2Y8XCe7F9E",
            "snippet": {
              "publishedAt": "2022-10-06T13:28:26Z",
              "channelId": "UCXXBi6rvC-u8VDZRD23F7tw",
              "title": "Need for Speed Unbound - Official Reveal Trailer (ft. A$AP Rocky)",
              "description": "Start at the bottom and race to the top in Need for Speed Unbound, coming to PlayStation 5, Xbox Series X|S and PC on December 2, 2022.\n\nRace against time, outsmart the cops, and take on weekly qualifiers to reach The Grand, Lakeshore's ultimate street racing challenge. Pack your garage with precision-tuned, custom rides and light up the streets with your style, exclusive fits, and a vibrant global soundtrack that bumps in every corner of the world.\nPre-order now to get 3 days early access and exclusive Need For Speed Unbound items: http://x.ea.com/74626 \n\n“Shittin Me”\nOriginal song by: A$AP Rocky\nEdit by: 2WEI\nA$AP Rocky Outfit by Marine Serre x AWGE\nA$AP Rocky Shoes by Vans x AWGE\n\nFind out more about Need for Speed Unbound: http://x.ea.com/74625\n\nSubscribe to stay up to speed...\nhttps://www.youtube.com/needforspeed?sub_confirmation=1\n\nFollow us on Twitter: https://twitter.com/needforspeed \nFollow us on Instagram: https://www.instagram.com/needforspeed/ \nFollow us on Tik Tok: https://www.tiktok.com/@needforspeed \nFollow us on Facebook: https://www.facebook.com/needforspeed \n\n#NeedForSpeed #ChangeYourLane",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/H2Y8XCe7F9E/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/H2Y8XCe7F9E/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/H2Y8XCe7F9E/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/H2Y8XCe7F9E/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/H2Y8XCe7F9E/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Need for Speed",
              "tags": [
                "Need for Speed Unbound Official Reveal Trailer",
                "Need for Speed Unbound",
                "Need for Speed",
                "Need for Speed trailer",
                "Need for Speed gameplay",
                "New NFS",
                "New Need for Speed",
                "NFS",
                "NFS 2022",
                "NFS trailer",
                "Need for Speed 2022",
                "NFS gameplay",
                "Need for Speed 2022 gameplay",
                "Need for Speed Heat",
                "Need for Speed pre-order",
                "Need for Speed reveal trailer",
                "Need for Speed game",
                "Criterion Games",
                "Racing game",
                "Need for Speed PS5",
                "Need for Speed Xbox",
                "Need for Speed PC",
                "A$AP Rocky",
                "2WEI"
              ],
              "categoryId": "20",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Need for Speed Unbound - Official Reveal Trailer (ft. A$AP Rocky)",
                "description": "Start at the bottom and race to the top in Need for Speed Unbound, coming to PlayStation 5, Xbox Series X|S and PC on December 2, 2022.\n\nRace against time, outsmart the cops, and take on weekly qualifiers to reach The Grand, Lakeshore's ultimate street racing challenge. Pack your garage with precision-tuned, custom rides and light up the streets with your style, exclusive fits, and a vibrant global soundtrack that bumps in every corner of the world.\nPre-order now to get 3 days early access and exclusive Need For Speed Unbound items: http://x.ea.com/74626 \n\n“Shittin Me”\nOriginal song by: A$AP Rocky\nEdit by: 2WEI\nA$AP Rocky Outfit by Marine Serre x AWGE\nA$AP Rocky Shoes by Vans x AWGE\n\nFind out more about Need for Speed Unbound: http://x.ea.com/74625\n\nSubscribe to stay up to speed...\nhttps://www.youtube.com/needforspeed?sub_confirmation=1\n\nFollow us on Twitter: https://twitter.com/needforspeed \nFollow us on Instagram: https://www.instagram.com/needforspeed/ \nFollow us on Tik Tok: https://www.tiktok.com/@needforspeed \nFollow us on Facebook: https://www.facebook.com/needforspeed \n\n#NeedForSpeed #ChangeYourLane"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "7I6p6_bik4xlunFaMiWP_n2Z1JY",
            "id": "0allwd60wS4",
            "snippet": {
              "publishedAt": "2022-10-06T15:11:39Z",
              "channelId": "UCPD_bxCRGpmmeQcbe2kpPaA",
              "title": "Kid Cudi Goes to the Moon While Eating Spicy Wings | Hot Ones",
              "description": "Kid Cudi is a Grammy Award–winning artist, multi-hyphenate entertainer, and—true to form—he just dropped a brand-new album accompanied by an animated TV special of the same name. Check out Entergalactic wherever you get your music, and watch the special now on Netflix. But how is he with spicy food? Find out as one the massively influential artist breaks down his fashion history, shares some very strong burger opinions, and waxes philosophical about the future of Kid Cudi.\n\nBUY HOT ONES BONELESS CHICKEN BITES NOW: https://hotoneschallenge.com/\n\nMAKE A DIFFERENCE BY DONATING TO COMMON THREADS, THE BRAND-NEW CHARITY PARTNER OF HOT ONES: https://www.commonthreads.org/firstwefeast/\n\nBUY HOT ONES TRUTH OR DAB THE GAME NOW: http://truthordabgame.com\n\nBUY HOT ONES HOT SAUCE NOW:https://fwfea.st/hotsauces\n\nHOT ONES MERCH AVAILABLE NOW: https://bit.ly/2AIS271\n\nSIGN UP FOR THE HOT ONES MONTHLY HOT SAUCE SUB BOX: https://bit.ly/2veY50P\n\nSIGN UP FOR THE FIRST WE FEAST NEWSLETTER: http://firstwefeast.com/signup\n\nSubscribe to First We Feast on YouTube: http://goo.gl/UxFzhK\n\nCheck out more of First We Feast here:\n\nhttp://firstwefeast.com/\n\nhttps://twitter.com/firstwefeast\n\nhttps://www.facebook.com/FirstWeFeast\n\nhttp://instagram.com/firstwefeast\n\nFirst We Feast videos offer an iconoclastic view into the culinary world, taking you behind-the-scenes with some of the country’s best chefs and finding the unexpected places where food and pop culture intersect. #hotones #kidcudi #seanevans",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/0allwd60wS4/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/0allwd60wS4/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/0allwd60wS4/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "First We Feast",
              "tags": [
                "First we feast",
                "fwf",
                "firstwefeast",
                "food",
                "food porn",
                "cook",
                "cooking",
                "chef",
                "recipe",
                "cocktail",
                "bartender",
                "craft beer",
                "complex",
                "complex networks",
                "spicy food",
                "foodie",
                "burgers",
                "food documentary",
                "kid cudi",
                "kid cudi interview",
                "hot ones",
                "kid cudi hot ones",
                "spicy food recipe",
                "hot ones hot sauce"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Kid Cudi Goes to the Moon While Eating Spicy Wings | Hot Ones",
                "description": "Kid Cudi is a Grammy Award–winning artist, multi-hyphenate entertainer, and—true to form—he just dropped a brand-new album accompanied by an animated TV special of the same name. Check out Entergalactic wherever you get your music, and watch the special now on Netflix. But how is he with spicy food? Find out as one the massively influential artist breaks down his fashion history, shares some very strong burger opinions, and waxes philosophical about the future of Kid Cudi.\n\nBUY HOT ONES BONELESS CHICKEN BITES NOW: https://hotoneschallenge.com/\n\nMAKE A DIFFERENCE BY DONATING TO COMMON THREADS, THE BRAND-NEW CHARITY PARTNER OF HOT ONES: https://www.commonthreads.org/firstwefeast/\n\nBUY HOT ONES TRUTH OR DAB THE GAME NOW: http://truthordabgame.com\n\nBUY HOT ONES HOT SAUCE NOW:https://fwfea.st/hotsauces\n\nHOT ONES MERCH AVAILABLE NOW: https://bit.ly/2AIS271\n\nSIGN UP FOR THE HOT ONES MONTHLY HOT SAUCE SUB BOX: https://bit.ly/2veY50P\n\nSIGN UP FOR THE FIRST WE FEAST NEWSLETTER: http://firstwefeast.com/signup\n\nSubscribe to First We Feast on YouTube: http://goo.gl/UxFzhK\n\nCheck out more of First We Feast here:\n\nhttp://firstwefeast.com/\n\nhttps://twitter.com/firstwefeast\n\nhttps://www.facebook.com/FirstWeFeast\n\nhttp://instagram.com/firstwefeast\n\nFirst We Feast videos offer an iconoclastic view into the culinary world, taking you behind-the-scenes with some of the country’s best chefs and finding the unexpected places where food and pop culture intersect. #hotones #kidcudi #seanevans"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "-CRSqVN-KpzyFhg7H_JrWkd7Wks",
            "id": "rFO1iqDpMZU",
            "snippet": {
              "publishedAt": "2022-10-06T15:20:02Z",
              "channelId": "UC_GDu2QH3kp6vJlgEYyqjUA",
              "title": "I Collected Every Illegal Item In Minecraft Hardcore",
              "description": "In this video we go back in time through Minecrafts versions to collect the most illegal items in the game in 100% hardcore! If you enjoyed this video remember to leave a like, it helps ya boy out a lot :D\n\nWatch more videos: https://www.youtube.com/c/Kolanii/videos\n\nThis video wouldn't be possible without these guys, go subscribe: @PuffingFish HQ @Sensei \n\n(Also a big thanks to Surf for helping me with the machine)\n\nWatch @PuffingFish HQ 's  'Unobtained' series here: https://www.youtube.com/playlist?list=PLO8ujWDupWbTJ3ULJ_GJF_7s-6wWdw7Et\n\nAnd here: https://youtube.com/playlist?list=PLO8ujWDupWbQ0002LHe9SmHlYBB4ZshuO\n\nLearn about @Sensei 's Update Suppression machine here: https://www.youtube.com/watch?v=Dtke-Co5HFM\n\nThe gold farm I used @ianxofour  : https://www.youtube.com/watch?v=uBpMwXVn6iY\n\nFollow Me: \nTwitter: https://twitter.com/kolaniiyt\u200b\u200b\nReddit: https://www.reddit.com/user/KolaniiYT\u200b\u200b\u200b\n\n#minecraft",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/rFO1iqDpMZU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/rFO1iqDpMZU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/rFO1iqDpMZU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/rFO1iqDpMZU/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/rFO1iqDpMZU/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Kolanii",
              "tags": [
                "minecraft hardcore",
                "minecraft illegal",
                "rarest items in minecraft",
                "kolanii",
                "minecraft cursed",
                "pether nortal",
                "i collected every illegal item in minecraft hardcore"
              ],
              "categoryId": "20",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "I Collected Every Illegal Item In Minecraft Hardcore",
                "description": "In this video we go back in time through Minecrafts versions to collect the most illegal items in the game in 100% hardcore! If you enjoyed this video remember to leave a like, it helps ya boy out a lot :D\n\nWatch more videos: https://www.youtube.com/c/Kolanii/videos\n\nThis video wouldn't be possible without these guys, go subscribe: @PuffingFish HQ @Sensei \n\n(Also a big thanks to Surf for helping me with the machine)\n\nWatch @PuffingFish HQ 's  'Unobtained' series here: https://www.youtube.com/playlist?list=PLO8ujWDupWbTJ3ULJ_GJF_7s-6wWdw7Et\n\nAnd here: https://youtube.com/playlist?list=PLO8ujWDupWbQ0002LHe9SmHlYBB4ZshuO\n\nLearn about @Sensei 's Update Suppression machine here: https://www.youtube.com/watch?v=Dtke-Co5HFM\n\nThe gold farm I used @ianxofour  : https://www.youtube.com/watch?v=uBpMwXVn6iY\n\nFollow Me: \nTwitter: https://twitter.com/kolaniiyt\u200b\u200b\nReddit: https://www.reddit.com/user/KolaniiYT\u200b\u200b\u200b\n\n#minecraft"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "_QaaTFGdxxNmtI7qJ1_GrbbTx-A",
            "id": "zPfaUcElZl0",
            "snippet": {
              "publishedAt": "2022-10-06T17:09:54Z",
              "channelId": "UCU9pX8hKcrx06XfOB-VQLdw",
              "title": "Minecraft 1.20 : Tuff Golem, Sniffer & Rascal!",
              "description": "Minecraft 1.20 Update Playlist ► https://www.youtube.com/playlist?list=PL7VmhWGNRxKixIX8tWEQn-BnYKE9AaAXk\n\nFeatured in this video\nhttps://www.reddit.com/r/Minecraft/comments/xwbxrd/not_my_image_someone_pointed_out_that_the_pixels/\nhttps://www.reddit.com/r/Minecraft/comments/xwxoa8/my_depiction_of_the_rascal/\nhttps://www.reddit.com/r/Minecraft/comments/xx98vr/tuff_golem_model/\n\nAll My Links In One Place\n🔗 https://linktree.xisuma.co\n\n🙏 Support Xisuma Directly 🙏\n💜 Membership ► https://www.youtube.com/xisumavoid/join\n👍 Patreon ► https://www.patreon.com/xisuma\n📺 Subscribe ► https://www.twitch.tv/subs/xisuma\n\n#tuffgolem #rascal #sniffer",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/zPfaUcElZl0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/zPfaUcElZl0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/zPfaUcElZl0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "xisumavoid",
              "tags": [
                "ancient seeds",
                "minecraft hats",
                "golem cloak",
                "minecraft",
                "1.20",
                "minecraft 1.20",
                "mob vote",
                "1.20 mob vote",
                "minecraft live",
                "minecraft live mob vote",
                "minecraft news",
                "1.20 news",
                "inventory update",
                "xisuma",
                "xisumavoid",
                "xisuma news",
                "mob vote news",
                "tuff golem",
                "rascal",
                "sniffer",
                "minecraft tuff golem",
                "minecraft sniffer",
                "minecraft rascal",
                "1.20 release date",
                "minecraft live date",
                "mob vote theory",
                "1.20 theory",
                "1.20 rumours",
                "xisuma 1.20",
                "hermitcraft 1.20",
                "mojang news",
                "next minecraft update"
              ],
              "categoryId": "20",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en-GB",
              "localized": {
                "title": "Minecraft 1.20 : Tuff Golem, Sniffer & Rascal!",
                "description": "Minecraft 1.20 Update Playlist ► https://www.youtube.com/playlist?list=PL7VmhWGNRxKixIX8tWEQn-BnYKE9AaAXk\n\nFeatured in this video\nhttps://www.reddit.com/r/Minecraft/comments/xwbxrd/not_my_image_someone_pointed_out_that_the_pixels/\nhttps://www.reddit.com/r/Minecraft/comments/xwxoa8/my_depiction_of_the_rascal/\nhttps://www.reddit.com/r/Minecraft/comments/xx98vr/tuff_golem_model/\n\nAll My Links In One Place\n🔗 https://linktree.xisuma.co\n\n🙏 Support Xisuma Directly 🙏\n💜 Membership ► https://www.youtube.com/xisumavoid/join\n👍 Patreon ► https://www.patreon.com/xisuma\n📺 Subscribe ► https://www.twitch.tv/subs/xisuma\n\n#tuffgolem #rascal #sniffer"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "LZjDPtAQqSqrMNMwXwAgTwjDqKo",
            "id": "Baflc_0XVfY",
            "snippet": {
              "publishedAt": "2022-10-06T15:00:39Z",
              "channelId": "UCVTQuK2CaWaTgSsoNkn5AiQ",
              "title": "The White Lotus Season 2 | Official Trailer | HBO",
              "description": "Experience all that #TheWhiteLotus Sicily has to offer. Season 2 premieres October 30 on @HBOMax.\n\n And it’s just getting started. #HBO50 \n\nABOUT HBO\nHBO is home to the shows and films that everyone is talking about, from groundbreaking series and documentaries to the biggest blockbuster movies.\n\nSUBSCRIBE TO HBO\nSubscribe to the official HBO Channel for the latest on your favorite HBO series, movies, documentaries & sports specials: https://itsh.bo/youtube\n\nGET HBO: https://itsh.bo/ways-to-get\n\nMORE HBO\nOfficial Site: https://itsh.bo/dotcom\nFollow HBO on Instagram: https://itsh.bo/instagram\nFollow HBO on TikTok: https://itsh.bo/tiktok\nFollow HBO on Twitter: https://itsh.bo/twitter\nLike HBO on Facebook: https://itsh.bo/facebook",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/Baflc_0XVfY/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/Baflc_0XVfY/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/Baflc_0XVfY/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/Baflc_0XVfY/sddefault.jpg",
                  "width": 640,
                  "height": 480
                }
              },
              "channelTitle": "HBO",
              "tags": [
                "hbo",
                "hbo youtube",
                "hbo series",
                "hbo show",
                "hbo movie",
                "hbo original",
                "hbo video",
                "hbo trailer",
                "hbo behind the scenes",
                "hbo actors",
                "the white lotus",
                "the white lotus season 2",
                "the white lotus sicily",
                "jennifer coolidge",
                "michael imperioli",
                "aubrey plaza",
                "meghann fahy",
                "theo james",
                "adam dimarco",
                "tom hollander",
                "the white lotus hbo",
                "hbo original the white lotus",
                "new season of the white lotus",
                "the white lotus italy",
                "sicily italy"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "The White Lotus Season 2 | Official Trailer | HBO",
                "description": "Experience all that #TheWhiteLotus Sicily has to offer. Season 2 premieres October 30 on @HBOMax.\n\n And it’s just getting started. #HBO50 \n\nABOUT HBO\nHBO is home to the shows and films that everyone is talking about, from groundbreaking series and documentaries to the biggest blockbuster movies.\n\nSUBSCRIBE TO HBO\nSubscribe to the official HBO Channel for the latest on your favorite HBO series, movies, documentaries & sports specials: https://itsh.bo/youtube\n\nGET HBO: https://itsh.bo/ways-to-get\n\nMORE HBO\nOfficial Site: https://itsh.bo/dotcom\nFollow HBO on Instagram: https://itsh.bo/instagram\nFollow HBO on TikTok: https://itsh.bo/tiktok\nFollow HBO on Twitter: https://itsh.bo/twitter\nLike HBO on Facebook: https://itsh.bo/facebook"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "mwWAFO4a3wSNYgSNQcweHYwjb5A",
            "id": "9NXbtp9uhOI",
            "snippet": {
              "publishedAt": "2022-10-05T15:00:08Z",
              "channelId": "UC1sELGmy5jp5fQUugmuYlXQ",
              "title": "Minecraft Live 2022: Vote for the Rascal!",
              "description": "Meet the rascal, a mischievous mob that loves to play Hide & Seek! The rascal lurks in underground mines, waiting to be found. If you spot the same rascal three times, it will reward you with a prize so keep your eyes open!\n\nVote for your favorite mob on https://Minecraft.net, the Minecraft launcher, or in a special Bedrock server! Voting opens on October 14, noon EDT giving you 24 hours to make your voice heard. Read more about the mob vote at https:// Minecraft.net/live",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/9NXbtp9uhOI/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/9NXbtp9uhOI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/9NXbtp9uhOI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/9NXbtp9uhOI/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/9NXbtp9uhOI/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Minecraft",
              "tags": [
                "minecraft live 2022",
                "mob vote",
                "minecraft mob vote",
                "minecraft mob vote 2022"
              ],
              "categoryId": "20",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Minecraft Live 2022: Vote for the Rascal!",
                "description": "Meet the rascal, a mischievous mob that loves to play Hide & Seek! The rascal lurks in underground mines, waiting to be found. If you spot the same rascal three times, it will reward you with a prize so keep your eyes open!\n\nVote for your favorite mob on https://Minecraft.net, the Minecraft launcher, or in a special Bedrock server! Voting opens on October 14, noon EDT giving you 24 hours to make your voice heard. Read more about the mob vote at https:// Minecraft.net/live"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "VKwEn12fUo3F81nCTEpueIyBVY8",
            "id": "4HRsrpavRUI",
            "snippet": {
              "publishedAt": "2022-10-06T04:47:58Z",
              "channelId": "UCWJ2lWNubArHWmf3FIHbfcQ",
              "title": "SUNS at LAKERS | NBA PRESEASON FULL GAME HIGHLIGHTS | October 5, 2022",
              "description": "Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.\nDownload now: https://app.link.nba.com/APP22\n\nThe Phoenix Suns defeated the Los Angeles Lakers, 119-115. Devin Booker recorded 22 PTS and 3 REB for the Suns, while Chris Paul (13 PTS, 10 AST) and Landry Shamet (21 PTS, 2 AST) combined for 34 PTS in the victory. LeBron James tallied a game-high 23 PTS (8-11 FG), along with 3 REB and 4 AST for the Lakers in the losing effort. The Suns improve to 1-1 in the NBA Preseason, while the Lakers fall to 0-2",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/4HRsrpavRUI/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/4HRsrpavRUI/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/4HRsrpavRUI/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/4HRsrpavRUI/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/4HRsrpavRUI/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "NBA",
              "tags": [
                "Basketball",
                "G League",
                "NBA",
                "game-0012200022"
              ],
              "categoryId": "17",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "SUNS at LAKERS | NBA PRESEASON FULL GAME HIGHLIGHTS | October 5, 2022",
                "description": "Never miss a moment with the latest news, trending stories and highlights to bring you closer to your favorite players and teams.\nDownload now: https://app.link.nba.com/APP22\n\nThe Phoenix Suns defeated the Los Angeles Lakers, 119-115. Devin Booker recorded 22 PTS and 3 REB for the Suns, while Chris Paul (13 PTS, 10 AST) and Landry Shamet (21 PTS, 2 AST) combined for 34 PTS in the victory. LeBron James tallied a game-high 23 PTS (8-11 FG), along with 3 REB and 4 AST for the Lakers in the losing effort. The Suns improve to 1-1 in the NBA Preseason, while the Lakers fall to 0-2"
              }
            }
          },
          {
            "kind": "youtube#video",
            "etag": "n0fYxzD5Xt7D9da-x9KdpswLGVA",
            "id": "TRGHIN2PGIA",
            "snippet": {
              "publishedAt": "2022-10-05T16:00:12Z",
              "channelId": "UCsEukrAd64fqA7FjwkmZ_Dw",
              "title": "Christian Bale Breaks Down His Most Iconic Characters | GQ",
              "description": "Christian Bale breaks down a few of his most iconic characters from 'American Psycho,' 'The Dark Knight' Trilogy, 'The Fighter,' 'The Machinist,' 'The Big Short,' 'Vice,' 'Empire of the Sun,' 'Amsterdam' and 'The Pale Blue Eye.'\r\n\r\nChristian Bale will star in AMSTERDAM, in theaters October 7, 2022, and THE PALE BLUE EYE, premiering on Netflix on December 23, 2022.\r\n\r\n00:00 Intro\r\n00:25 American Psycho\r\n04:53 The Dark Knight Trilogy\r\n08:29 The Fighter\r\n10:00 The Machinist\r\n12:03 The Big Short\r\n13:50 Vice\r\n16:17 Empire of the Sun\r\n19:01 Amsterdam\r\n21:46 The Pale Blue Eye\r\n\r\nDirector - Graham Corrigan\r\nDirector of Photography - Brad Wickham\r\nEditor - Graham Mooney\r\nTalent - Christian Bale\r\nProducer  - Arielle Neblett\r\nAssociate Producer - Camille Ramos\r\nProduction Manager - James Pipitone\r\nProduction Coordinator - Jamal Colvin\r\nTalent Booker - Dana Mathews\r\nCamera Operators - Chris Alfonso and Matthew Dinneny\r\nAudio - Rebecca O'Neill\r\nProduction Assistant - Kameryn Hamilton\r\nPost Production Supervisor - Rachael Knight\r\nSupervising Editor - Rob Lombardi\r\nPost Production Coordinator - Ian Bryant\r\nAssistant Editor - Andy Morell\n\nStill haven’t subscribed to GQ on YouTube? ►► http://bit.ly/2iij5wt\r\nSubscribe to GQ magazine and get rare swag: https://bit.ly/2xNBH3i\r\nJoin the GQ Discord to talk men's fashion, watches, and more: https://discord.gg/gqmagazine\r\n\r\nABOUT GQ\r\nFor more than 50 years, GQ has been the premier men’s magazine, providing definitive coverage of style, culture, politics and more. In that tradition, GQ’s video channel covers every part of a man’s life, from entertainment and sports to fashion and grooming advice. Welcome to the modern guide to style advice, dating tips, celebrity videos, music, sports and more.\r\n\r\nhttps://www.youtube.com/user/GQVideos",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/TRGHIN2PGIA/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/TRGHIN2PGIA/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/TRGHIN2PGIA/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/TRGHIN2PGIA/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/TRGHIN2PGIA/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "GQ",
              "tags": [
                "american psycho",
                "amsterdam",
                "celebrity",
                "christian bale",
                "christian bale 2022",
                "christian bale american psycho",
                "christian bale amsterdam",
                "christian bale dark knight",
                "christian bale gq",
                "christian bale gq cover",
                "christian bale iconic characters",
                "christian bale interview",
                "christian bale pale blue eye",
                "christian bale patrick bateman",
                "dark knight",
                "gq",
                "gq christian bale",
                "gq iconic",
                "gq iconic characters",
                "gq magazine",
                "iconic characters",
                "patrick bateman",
                "the big short",
                "the pale blue eye"
              ],
              "categoryId": "1",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Christian Bale Breaks Down His Most Iconic Characters | GQ",
                "description": "Christian Bale breaks down a few of his most iconic characters from 'American Psycho,' 'The Dark Knight' Trilogy, 'The Fighter,' 'The Machinist,' 'The Big Short,' 'Vice,' 'Empire of the Sun,' 'Amsterdam' and 'The Pale Blue Eye.'\r\n\r\nChristian Bale will star in AMSTERDAM, in theaters October 7, 2022, and THE PALE BLUE EYE, premiering on Netflix on December 23, 2022.\r\n\r\n00:00 Intro\r\n00:25 American Psycho\r\n04:53 The Dark Knight Trilogy\r\n08:29 The Fighter\r\n10:00 The Machinist\r\n12:03 The Big Short\r\n13:50 Vice\r\n16:17 Empire of the Sun\r\n19:01 Amsterdam\r\n21:46 The Pale Blue Eye\r\n\r\nDirector - Graham Corrigan\r\nDirector of Photography - Brad Wickham\r\nEditor - Graham Mooney\r\nTalent - Christian Bale\r\nProducer  - Arielle Neblett\r\nAssociate Producer - Camille Ramos\r\nProduction Manager - James Pipitone\r\nProduction Coordinator - Jamal Colvin\r\nTalent Booker - Dana Mathews\r\nCamera Operators - Chris Alfonso and Matthew Dinneny\r\nAudio - Rebecca O'Neill\r\nProduction Assistant - Kameryn Hamilton\r\nPost Production Supervisor - Rachael Knight\r\nSupervising Editor - Rob Lombardi\r\nPost Production Coordinator - Ian Bryant\r\nAssistant Editor - Andy Morell\n\nStill haven’t subscribed to GQ on YouTube? ►► http://bit.ly/2iij5wt\r\nSubscribe to GQ magazine and get rare swag: https://bit.ly/2xNBH3i\r\nJoin the GQ Discord to talk men's fashion, watches, and more: https://discord.gg/gqmagazine\r\n\r\nABOUT GQ\r\nFor more than 50 years, GQ has been the premier men’s magazine, providing definitive coverage of style, culture, politics and more. In that tradition, GQ’s video channel covers every part of a man’s life, from entertainment and sports to fashion and grooming advice. Welcome to the modern guide to style advice, dating tips, celebrity videos, music, sports and more.\r\n\r\nhttps://www.youtube.com/user/GQVideos"
              },
              "defaultAudioLanguage": "en-US"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "DhnAHUXf6P9cvVBU_KKAX4Uk36I",
            "id": "CQoHeHz5j5U",
            "snippet": {
              "publishedAt": "2022-10-06T14:00:11Z",
              "channelId": "UCH569oN0jV7lr0QZFLD4AZA",
              "title": "WE'RE MOVING!",
              "description": "We were not expecting this, but we decided to move!\n\n\nFollow us on Instagram:\nhttps://www.instagram.com/jingervuolo/\nhttps://www.instagram.com/jeremy_vuolo/",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/CQoHeHz5j5U/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/CQoHeHz5j5U/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/CQoHeHz5j5U/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/CQoHeHz5j5U/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/CQoHeHz5j5U/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "Jinger & Jeremy Vuolo",
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "WE'RE MOVING!",
                "description": "We were not expecting this, but we decided to move!\n\n\nFollow us on Instagram:\nhttps://www.instagram.com/jingervuolo/\nhttps://www.instagram.com/jeremy_vuolo/"
              }
            }
          },
          {
            "kind": "youtube#video",
            "etag": "0IxvTgJFzuEAOH3BDpFjSmcCSdM",
            "id": "xkwc5TZmdIs",
            "snippet": {
              "publishedAt": "2022-10-05T01:50:47Z",
              "channelId": "UCcVqCJ_9owb1zM43vqswMNQ",
              "title": "GloRilla Glows Up In Every Way With Performance Of \"Tomorrow!\" & \"F.N.F.\" | Hip Hop Awards '22",
              "description": "Watch GloRilla's performance of \"F.N.F.\" & \"Tomorrow\" from the 2022 Hip Hop Awards. #HipHopAwards22 #HipHopAwards #GloRilla #BET @theofficialGloRilla @GloRillaVEVO \n\nSUBSCRIBE to #BET! ►► http://bit.ly/1U0v9xG\n\nStream Black Culture with BET+. Kick back and enjoy movies, TV series, exclusive originals and the best of Tyler Perry. Sign up for BET+ ►► http://bit.ly/betplus \n\nConnect with BET \nWeb: http://www.BET.com\nFacebook: http://www.facebook.com/BET\nTwitter: http://www.twitter.com/BET\nInstagram: http://www.instagram.com/BET\nBET+: https://www.bet.plus \nhttps://www.instagram.com/betplus/\nhttps://twitter.com/betplus\nhttps://www.facebook.com/yourbetplus/\nGoogle+: http://www.bet.us/gplusBET",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/xkwc5TZmdIs/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/xkwc5TZmdIs/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/xkwc5TZmdIs/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/xkwc5TZmdIs/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/xkwc5TZmdIs/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "BETNetworks",
              "tags": [
                "BET",
                "BET Networks",
                "BET Music",
                "Black Entertainment Television",
                "Hip Hop Awards",
                "Hip Hop Awards '22",
                "GloRilla"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "GloRilla Glows Up In Every Way With Performance Of \"Tomorrow!\" & \"F.N.F.\" | Hip Hop Awards '22",
                "description": "Watch GloRilla's performance of \"F.N.F.\" & \"Tomorrow\" from the 2022 Hip Hop Awards. #HipHopAwards22 #HipHopAwards #GloRilla #BET @theofficialGloRilla @GloRillaVEVO \n\nSUBSCRIBE to #BET! ►► http://bit.ly/1U0v9xG\n\nStream Black Culture with BET+. Kick back and enjoy movies, TV series, exclusive originals and the best of Tyler Perry. Sign up for BET+ ►► http://bit.ly/betplus \n\nConnect with BET \nWeb: http://www.BET.com\nFacebook: http://www.facebook.com/BET\nTwitter: http://www.twitter.com/BET\nInstagram: http://www.instagram.com/BET\nBET+: https://www.bet.plus \nhttps://www.instagram.com/betplus/\nhttps://twitter.com/betplus\nhttps://www.facebook.com/yourbetplus/\nGoogle+: http://www.bet.us/gplusBET"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "nvIc_YEAC0-0btsWDm2SMsqnapM",
            "id": "aZ82AvAa_tw",
            "snippet": {
              "publishedAt": "2022-10-05T12:15:11Z",
              "channelId": "UChi08h4577eFsNXGd3sxYhw",
              "title": "Diddy On Owing Artists Money, Mase's Debt, Alternatives To Marriage, Yung Miami + More",
              "description": "Subscribe NOW to The Breakfast Club: http://ihe.art/xZ4vAcA\n\nGet MORE of The Breakfast Club:\n► LISTEN LIVE: http://power1051fm.com/\n► CATCH UP on What You Missed: http://ihe.art/Dx2xSGN\n► FOLLOW us on Instagram: https://www.instagram.com/BreakfastClubAM/\n► FOLLOW us on Twitter: https://twitter.com/BreakfastClubAM\n► LIKE us on Facebook: https://www.facebook.com/BreakfastClubAM/\n\nExecutive Producer: Eddie F.\nAPD/Producer: Daniel Greene\nProducer: Taylor Hayes \nVideo Director: Nick Cio\nVideo Producer: Joey Geballa \nVideo Editor: Elijah Lugo\n\n\nThe Breakfast Club features celebrity interviews, Charlamagne tha God’s Donkey of the Day, Angela Yee’s Rumor Reports, DJ Envy’s mixes and so much more! Every guest visiting the world’s most dangerous morning show is grilled with their signature blend of honesty and humor. The results are the best interviews to be found on radio.\n\n#BreakfastClub #Diddy #Love",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/aZ82AvAa_tw/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/aZ82AvAa_tw/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/aZ82AvAa_tw/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Breakfast Club Power 105.1 FM",
              "tags": [
                "the breakfast club",
                "breakfast club",
                "power1051",
                "celebrity news",
                "radio",
                "video",
                "interview",
                "angela yee",
                "charlamagne tha god",
                "dj envy"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Diddy On Owing Artists Money, Mase's Debt, Alternatives To Marriage, Yung Miami + More",
                "description": "Subscribe NOW to The Breakfast Club: http://ihe.art/xZ4vAcA\n\nGet MORE of The Breakfast Club:\n► LISTEN LIVE: http://power1051fm.com/\n► CATCH UP on What You Missed: http://ihe.art/Dx2xSGN\n► FOLLOW us on Instagram: https://www.instagram.com/BreakfastClubAM/\n► FOLLOW us on Twitter: https://twitter.com/BreakfastClubAM\n► LIKE us on Facebook: https://www.facebook.com/BreakfastClubAM/\n\nExecutive Producer: Eddie F.\nAPD/Producer: Daniel Greene\nProducer: Taylor Hayes \nVideo Director: Nick Cio\nVideo Producer: Joey Geballa \nVideo Editor: Elijah Lugo\n\n\nThe Breakfast Club features celebrity interviews, Charlamagne tha God’s Donkey of the Day, Angela Yee’s Rumor Reports, DJ Envy’s mixes and so much more! Every guest visiting the world’s most dangerous morning show is grilled with their signature blend of honesty and humor. The results are the best interviews to be found on radio.\n\n#BreakfastClub #Diddy #Love"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "SouZPb1jxHbdMWUEG0CXbxdZTo8",
            "id": "Msg9hvHphtU",
            "snippet": {
              "publishedAt": "2022-10-05T17:30:02Z",
              "channelId": "UCYzPXprvl5Y-Sf0g4vX-m6g",
              "title": "this is my 5,000th video",
              "description": "I can't believe I've uploaded 5,000 videos to this channel. \nGet NordVPN: https://nordvpn.com/jacksepticeye\nBuy MY coffee: https://topofthemornincoffee.com/\n\nTwitter : https://twitter.com/Jacksepticeye\nInstagram : http://instagram.com/jacksepticeye\n\nEdited By: https://www.twitch.tv/pixl_pit",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/Msg9hvHphtU/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/Msg9hvHphtU/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/Msg9hvHphtU/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/Msg9hvHphtU/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/Msg9hvHphtU/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "jacksepticeye",
              "tags": [
                "jacksepticeye"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "this is my 5,000th video",
                "description": "I can't believe I've uploaded 5,000 videos to this channel. \nGet NordVPN: https://nordvpn.com/jacksepticeye\nBuy MY coffee: https://topofthemornincoffee.com/\n\nTwitter : https://twitter.com/Jacksepticeye\nInstagram : http://instagram.com/jacksepticeye\n\nEdited By: https://www.twitch.tv/pixl_pit"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "f5P--K5xQdr6LFU3BIdYt3JJrDQ",
            "id": "t6fIp7mMJ90",
            "snippet": {
              "publishedAt": "2022-10-04T00:30:15Z",
              "channelId": "UCpi8TJfiA4lKGkaXs__YdBA",
              "title": "what happened.",
              "description": "",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/t6fIp7mMJ90/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/t6fIp7mMJ90/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/t6fIp7mMJ90/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/t6fIp7mMJ90/sddefault.jpg",
                  "width": 640,
                  "height": 480
                },
                "maxres": {
                  "url": "https://i.ytimg.com/vi/t6fIp7mMJ90/maxresdefault.jpg",
                  "width": 1280,
                  "height": 720
                }
              },
              "channelTitle": "The Try Guys",
              "tags": [
                "try guys",
                "keith",
                "ned",
                "zach",
                "eugene",
                "habersberger",
                "fulmer",
                "kornfeld",
                "yang",
                "buzzfeedvideo",
                "buzzfeed",
                "ariel",
                "ned & ariel",
                "comedy",
                "education",
                "funny",
                "try",
                "learn",
                "fail",
                "experiment",
                "test",
                "tryceratops"
              ],
              "categoryId": "23",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "what happened.",
                "description": ""
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "mD2Ax8CLMCWNIOWqugxzf-_0pmk",
            "id": "-1vsm5bhoyE",
            "snippet": {
              "publishedAt": "2022-10-05T17:06:12Z",
              "channelId": "UCKsN6xyJ2w8g7p4p9apXkYQ",
              "title": "Grupo Frontera - No Se Va (Letra Oficial)",
              "description": "Grupo Frontera - No Se Va (Letra Oficial)\nEscucha más de Grupo Frontera aquí: https://bit.ly/GrupoFrontera\nSuscríbete aquí: https://bit.ly/GrupoFronteraYT\n\nInstagram: https://www.instagram.com/frontera_grupo/\nFacebook: https://www.facebook.com/fronteragrupo\n\nLetra: \nTan fácil que es enamorarme\nY tan difícil olvidarte\nPorque la vida me juraste\nY hoy te busco y tú no estás\nAunque me duela ver tu foto\nEntreno a mi corazón roto\nPor si mañana te vuelva a encontrar\nYa no sé disimular\nLlamo y no te puedo hablar\nTu recuerdo no se va\nNo se va, no se va\nAlgo en ti quiere volver\nY algo en mí te va a encontrar\nTu recuerdo no se va\nNo se va, no se va\nQuédate otra vez\nQuédate toda la noche\nQuédate otra vez\nQuédate más de las 12:00\nQuédate otra vez\nQue mi corazón no olvida\nAmor así no se olvida, y no se va\nNo se va, no se va\nQuédate otra vez\nQuédate toda la vida\nQuédate otra vez\nTú eres mi bala perdida\nQuédate otra vez\nQue mi corazón no olvida\nAmor así no se olvida, y no se va\nNo se va, no se va\nGrupo Frontera\nPerder mis ojos cuando bailes\nSentir mil besos en el aire\nFue suficiente para convencerme\nDe que, si te vas\nTe buscaré, aunque suene loco\nDe Bogotá hasta Buenos Aires\n¿Cómo te explico que no sé olvidar?\nYa no sé disimular\nLlamo y no te puedo hablar\nTu recuerdo no se va\nNo se va, no se va\nAlgo en ti quiere volver\nY algo en mí te va a encontrar\nTu recuerdo no se va\nNo se va, no se va\nQuédate otra vez\nQuédate toda la noche\nQuédate otra vez\nQuédate más de las 12:00\nQuédate otra vez\nQue mi corazón no olvida\nAmor así no se olvida, y no se va\nNo se va, no se va\nQuédate otra vez\nQuédate toda la vida\nQuédate otra vez\nTú eres mi bala perdida\nQuédate otra vez\nQue mi corazón no olvida\nAmor así no se olvida\n\n#GrupoFrontera #NoSeVa #RegionalMexicano #Morat",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/-1vsm5bhoyE/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/-1vsm5bhoyE/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/-1vsm5bhoyE/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Grupo Frontera",
              "tags": [
                "Grupo Frontera",
                "Latin",
                "No Se Va (Letra)"
              ],
              "categoryId": "10",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Grupo Frontera - No Se Va (Letra Oficial)",
                "description": "Grupo Frontera - No Se Va (Letra Oficial)\nEscucha más de Grupo Frontera aquí: https://bit.ly/GrupoFrontera\nSuscríbete aquí: https://bit.ly/GrupoFronteraYT\n\nInstagram: https://www.instagram.com/frontera_grupo/\nFacebook: https://www.facebook.com/fronteragrupo\n\nLetra: \nTan fácil que es enamorarme\nY tan difícil olvidarte\nPorque la vida me juraste\nY hoy te busco y tú no estás\nAunque me duela ver tu foto\nEntreno a mi corazón roto\nPor si mañana te vuelva a encontrar\nYa no sé disimular\nLlamo y no te puedo hablar\nTu recuerdo no se va\nNo se va, no se va\nAlgo en ti quiere volver\nY algo en mí te va a encontrar\nTu recuerdo no se va\nNo se va, no se va\nQuédate otra vez\nQuédate toda la noche\nQuédate otra vez\nQuédate más de las 12:00\nQuédate otra vez\nQue mi corazón no olvida\nAmor así no se olvida, y no se va\nNo se va, no se va\nQuédate otra vez\nQuédate toda la vida\nQuédate otra vez\nTú eres mi bala perdida\nQuédate otra vez\nQue mi corazón no olvida\nAmor así no se olvida, y no se va\nNo se va, no se va\nGrupo Frontera\nPerder mis ojos cuando bailes\nSentir mil besos en el aire\nFue suficiente para convencerme\nDe que, si te vas\nTe buscaré, aunque suene loco\nDe Bogotá hasta Buenos Aires\n¿Cómo te explico que no sé olvidar?\nYa no sé disimular\nLlamo y no te puedo hablar\nTu recuerdo no se va\nNo se va, no se va\nAlgo en ti quiere volver\nY algo en mí te va a encontrar\nTu recuerdo no se va\nNo se va, no se va\nQuédate otra vez\nQuédate toda la noche\nQuédate otra vez\nQuédate más de las 12:00\nQuédate otra vez\nQue mi corazón no olvida\nAmor así no se olvida, y no se va\nNo se va, no se va\nQuédate otra vez\nQuédate toda la vida\nQuédate otra vez\nTú eres mi bala perdida\nQuédate otra vez\nQue mi corazón no olvida\nAmor así no se olvida\n\n#GrupoFrontera #NoSeVa #RegionalMexicano #Morat"
              }
            }
          },
          {
            "kind": "youtube#video",
            "etag": "TvS7hWA_fVL9qtWzcTVjljK5xVQ",
            "id": "cgOmCTx6LZ0",
            "snippet": {
              "publishedAt": "2022-10-05T21:00:30Z",
              "channelId": "UC6QWhGQqf0YDYdRb0n6ojWw",
              "title": "Dakota and Brooklyn's OFFICIAL WEDDING VIDEO",
              "description": "Here is Brooklyn and Dakota's wedding video! \n\nWe have been looking forward to this day for months and now it is finally here! We decided to have our wedding in California since that's where the stunning venue was located https://www.sparrowvalleyretreat.com! \n\nWe kick-started the morning off with makeup and hair, and then moved on to bridal photos and first looks, Dakota cried so much it was so sweet! Once the first looks were finished, Dakota and I took some beautiful pictures together. (Special thanks to Ty and Abba for the bestttt pics!)  Finally, it was time for the actual ceremony, which Asa officiated. This whole day was a dream come true! \n\nFrom family pics to dinner and reception, the entire day was a dream! Enjoy this stunning video of my special day!\n\nTHANK YOU to Devin our videographer, who filmed and edited this stunning video so quickly! \nVideographer: https://www.devinwalston.com/\n\n❤️'s - Brooklyn\n\nYou can check out our shop HERE: www.lashnextdoor.com\n\nDon't forget to follow us on other platforms where we post daily!\n   📸  Instagram | http://instagram.com/brooklynandbailey\n   ⏰  Tik Tok | @BrooklynAndBailey\n   🐥  Twitter | http://twitter.com/brookandbailey\n   👤  Facebook | http://facebook.com/brooklynandbailey\n   👻  SnapChat | http://snapchat.com/add/BrookAndBailey\n   🎶  Spotify | https://open.spotify.com/artist/4Y8tcJEqYuIDSNAZEqu9Nd\n   ☁️  SoundCloud | http://soundcloud.com/brooklynandbailey\n\nFTC Disclaimer: This is not a sponsored video.\n\n\n💥HELP US OUT💥: You can help us translate our uploads, and get credit below each video! Click here to help: http://www.youtube.com/timedtext_cs_panel?tab=2&c=UC6QWhGQqf0YDYdRb0n6ojWw",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/cgOmCTx6LZ0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/cgOmCTx6LZ0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/cgOmCTx6LZ0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Brooklyn and Bailey",
              "tags": [
                "Brooklyn",
                "Bailey",
                "brooklynandbailey",
                "lifestyle",
                "college",
                "school",
                "teen",
                "fun",
                "twins",
                "family",
                "girls",
                "fashion",
                "beauty",
                "girltalk",
                "tiktok",
                "instagram",
                "girl"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en-US",
              "localized": {
                "title": "Dakota and Brooklyn's OFFICIAL WEDDING VIDEO",
                "description": "Here is Brooklyn and Dakota's wedding video! \n\nWe have been looking forward to this day for months and now it is finally here! We decided to have our wedding in California since that's where the stunning venue was located https://www.sparrowvalleyretreat.com! \n\nWe kick-started the morning off with makeup and hair, and then moved on to bridal photos and first looks, Dakota cried so much it was so sweet! Once the first looks were finished, Dakota and I took some beautiful pictures together. (Special thanks to Ty and Abba for the bestttt pics!)  Finally, it was time for the actual ceremony, which Asa officiated. This whole day was a dream come true! \n\nFrom family pics to dinner and reception, the entire day was a dream! Enjoy this stunning video of my special day!\n\nTHANK YOU to Devin our videographer, who filmed and edited this stunning video so quickly! \nVideographer: https://www.devinwalston.com/\n\n❤️'s - Brooklyn\n\nYou can check out our shop HERE: www.lashnextdoor.com\n\nDon't forget to follow us on other platforms where we post daily!\n   📸  Instagram | http://instagram.com/brooklynandbailey\n   ⏰  Tik Tok | @BrooklynAndBailey\n   🐥  Twitter | http://twitter.com/brookandbailey\n   👤  Facebook | http://facebook.com/brooklynandbailey\n   👻  SnapChat | http://snapchat.com/add/BrookAndBailey\n   🎶  Spotify | https://open.spotify.com/artist/4Y8tcJEqYuIDSNAZEqu9Nd\n   ☁️  SoundCloud | http://soundcloud.com/brooklynandbailey\n\nFTC Disclaimer: This is not a sponsored video.\n\n\n💥HELP US OUT💥: You can help us translate our uploads, and get credit below each video! Click here to help: http://www.youtube.com/timedtext_cs_panel?tab=2&c=UC6QWhGQqf0YDYdRb0n6ojWw"
              },
              "defaultAudioLanguage": "en-US"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "v6599ZlmE6yKC_XJIYjzzbC8N6c",
            "id": "qEfEhm7GTnc",
            "snippet": {
              "publishedAt": "2022-10-06T12:00:40Z",
              "channelId": "UC85aYbNSFjsJdxfpxgQr8tA",
              "title": "New Spell Towers and Monolith Explained (Clash of Clans)",
              "description": "The New Town Hall 15 Update brings New Defenses to Clash of Clans! Judo Sloth Gaming shares the Spell Tower and Monolith gameplay in this tutorial guide style sneak peek. I wanted to assure you fully knew how the new defenses worked alongside some strategy for their use. The Rage, Poison and Invisibility Towers are incredibly fun and the Monolith brings the most powerful defense we have ever seen in CoC. The TH15 Update is massively and we are only onto sneak peek 2, so be sure to subscribe as I will be explaining all of the new content to you. Clash On!\n\nNew Update - Town Hall 15 Revealed: https://www.youtube.com/watch?v=C7Zpl7RtPjc\n\nJoin 'The Dojo' to gain Exclusive Perks by becoming a Member of the Judo Sloth Gaming YT Channel: https://www.youtube.com/judosloth/join\n\nThank you for using Code 'Judo' in Clash of Clans to support me: https://bit.ly/CodeJudo\n\nMy Clash of Clans Playlists\nClash Explained: https://bit.ly/ClashExplained\nBase Upgrading Advice: https://bit.ly/UpgradeBase\nTip for Everything Series: https://bit.ly/TipsForEverything\n\nWatch my Livestreams on Twitch and Facebook:\nTWITCH ► https://www.twitch.tv/judo_sloth\nFACEBOOK ► https://www.facebook.com/JudoSloth\n\nFollow me on Social Media:\nTWITTER ► https://twitter.com/JudoSloth\nINSTAGRAM ► https://www.instagram.com/judosloth\nDISCORD ► https://discord.gg/JudoSloth\n\n#ClashOfClans #TH15 #TownHall15 \n\nVideo Chapters:\n0:00 New Defenses Introduced\n1:21 New Monolith Upgrades and Stats\n2:28 Monolith Gameplay\n3:54 New Spell Tower Upgrades and Stats\n5:23 Spell Tower Range and Activation Info\n9:02 TIP: Zap Quake Weakness\n9:45 TIP: Activate with Skeleton or Bats\n10:14 Rage Spell Tower Strategy and Comparisons\n12:30 Attack Spells vs Defense Spells\n13:38 Which is Best, Rage or Poison?\n15:15 Invisibility Spell Tower Strategy and Gameplay\n\n► Judo Sloth Gaming is a mobile gaming channel focused on Clash of Clans. You will see a variety of videos focused on being Educational but Entertaining! You will find Informational Guides on Everything in CoC. Attack Strategies, 3 Star Attacks, Farming or Upgrade Advice, Lets Play and Update News - you'll want to Subscribe to see it all. Clash On!",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/qEfEhm7GTnc/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/qEfEhm7GTnc/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/qEfEhm7GTnc/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Judo Sloth Gaming",
              "tags": [
                "clash of clans",
                "coc",
                "clash of clans gameplay",
                "clash of clans attacks",
                "clash of clans strategy",
                "judo sloth",
                "clash of clans update",
                "coc update",
                "town hall 15",
                "th15",
                "town hall 15 update",
                "th15 update",
                "monolith",
                "spell tower",
                "clash of clans new defense",
                "clash of clans spell tower",
                "clash of clans monolith",
                "th 15",
                "th15 clash of clans",
                "coc th 15",
                "th 15 update in coc",
                "spell tower strategy",
                "monolith strategy",
                "spell tower gameplay",
                "monolith gameplay",
                "spell tower attack"
              ],
              "categoryId": "20",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "New Spell Towers and Monolith Explained (Clash of Clans)",
                "description": "The New Town Hall 15 Update brings New Defenses to Clash of Clans! Judo Sloth Gaming shares the Spell Tower and Monolith gameplay in this tutorial guide style sneak peek. I wanted to assure you fully knew how the new defenses worked alongside some strategy for their use. The Rage, Poison and Invisibility Towers are incredibly fun and the Monolith brings the most powerful defense we have ever seen in CoC. The TH15 Update is massively and we are only onto sneak peek 2, so be sure to subscribe as I will be explaining all of the new content to you. Clash On!\n\nNew Update - Town Hall 15 Revealed: https://www.youtube.com/watch?v=C7Zpl7RtPjc\n\nJoin 'The Dojo' to gain Exclusive Perks by becoming a Member of the Judo Sloth Gaming YT Channel: https://www.youtube.com/judosloth/join\n\nThank you for using Code 'Judo' in Clash of Clans to support me: https://bit.ly/CodeJudo\n\nMy Clash of Clans Playlists\nClash Explained: https://bit.ly/ClashExplained\nBase Upgrading Advice: https://bit.ly/UpgradeBase\nTip for Everything Series: https://bit.ly/TipsForEverything\n\nWatch my Livestreams on Twitch and Facebook:\nTWITCH ► https://www.twitch.tv/judo_sloth\nFACEBOOK ► https://www.facebook.com/JudoSloth\n\nFollow me on Social Media:\nTWITTER ► https://twitter.com/JudoSloth\nINSTAGRAM ► https://www.instagram.com/judosloth\nDISCORD ► https://discord.gg/JudoSloth\n\n#ClashOfClans #TH15 #TownHall15 \n\nVideo Chapters:\n0:00 New Defenses Introduced\n1:21 New Monolith Upgrades and Stats\n2:28 Monolith Gameplay\n3:54 New Spell Tower Upgrades and Stats\n5:23 Spell Tower Range and Activation Info\n9:02 TIP: Zap Quake Weakness\n9:45 TIP: Activate with Skeleton or Bats\n10:14 Rage Spell Tower Strategy and Comparisons\n12:30 Attack Spells vs Defense Spells\n13:38 Which is Best, Rage or Poison?\n15:15 Invisibility Spell Tower Strategy and Gameplay\n\n► Judo Sloth Gaming is a mobile gaming channel focused on Clash of Clans. You will see a variety of videos focused on being Educational but Entertaining! You will find Informational Guides on Everything in CoC. Attack Strategies, 3 Star Attacks, Farming or Upgrade Advice, Lets Play and Update News - you'll want to Subscribe to see it all. Clash On!"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "ZrmYyKIh6WA6P-QM0bTIrIBQxvc",
            "id": "VA-oQpNstQE",
            "snippet": {
              "publishedAt": "2022-10-06T15:00:07Z",
              "channelId": "UCaSgsFdGbwjfdawl3rOXiwQ",
              "title": "Dead by Daylight | Haunted by Daylight Reveal Trailer",
              "description": "The season of fear begins with Haunted by Daylight. \nCelebrate Halloween in Dead by Daylight with a thrilling gameplay event, a spine-tingling Tome, Cosmetic Collections for your next costume party, and many more treats to uncover.  \n\nLearn more about everything coming this Halloween season: https://dbd.game/3SAhXV7\n\n\nDead by Daylight is a multiplayer action horror game where one player takes on the role of a brutal Killer and the other four play as Survivors. As a Killer your goal is to sacrifice as many Survivors as possible. As Survivors your goal is to work together to evade, escape, and most importantly – stay alive.         \n\nPLAY DEAD BY DAYLIGHT:  https://buythegame.deadbydaylight.com  \nJoin the official forum: https://forum.deadbydaylight.com/en  \n\n Like and follow us on our official Social Media Channels:        \n- Facebook: https://www.facebook.com/DeadByDaylight  \n- Twitter: https://twitter.com/deadbybhvr   \n- Instagram: https://www.instagram.com/deadbydaylight   \n\n#deadbydaylight #dbd",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/VA-oQpNstQE/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/VA-oQpNstQE/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/VA-oQpNstQE/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                },
                "standard": {
                  "url": "https://i.ytimg.com/vi/VA-oQpNstQE/sddefault.jpg",
                  "width": 640,
                  "height": 480
                }
              },
              "channelTitle": "Dead by Daylight",
              "tags": [
                "dead by daylight",
                "dbd",
                "behaviour interactive",
                "bhvr",
                "slasher game",
                "survival horror"
              ],
              "categoryId": "20",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Dead by Daylight | Haunted by Daylight Reveal Trailer",
                "description": "The season of fear begins with Haunted by Daylight. \nCelebrate Halloween in Dead by Daylight with a thrilling gameplay event, a spine-tingling Tome, Cosmetic Collections for your next costume party, and many more treats to uncover.  \n\nLearn more about everything coming this Halloween season: https://dbd.game/3SAhXV7\n\n\nDead by Daylight is a multiplayer action horror game where one player takes on the role of a brutal Killer and the other four play as Survivors. As a Killer your goal is to sacrifice as many Survivors as possible. As Survivors your goal is to work together to evade, escape, and most importantly – stay alive.         \n\nPLAY DEAD BY DAYLIGHT:  https://buythegame.deadbydaylight.com  \nJoin the official forum: https://forum.deadbydaylight.com/en  \n\n Like and follow us on our official Social Media Channels:        \n- Facebook: https://www.facebook.com/DeadByDaylight  \n- Twitter: https://twitter.com/deadbybhvr   \n- Instagram: https://www.instagram.com/deadbydaylight   \n\n#deadbydaylight #dbd"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "H7la54lgqXHSq0QefCqjR248ntY",
            "id": "7FEyjd2hNSk",
            "snippet": {
              "publishedAt": "2022-10-06T13:00:00Z",
              "channelId": "UCBSs9x2KzSLhyyA9IKyt4YA",
              "title": "Black Clover: Sword of the Wizard King | Official Teaser | Netflix Anime",
              "description": "The Netflix Series \"Black Clover: Sword of the Wizard King\" starts streaming from March 31, 2023, only on Netflix!\nhttps://www.netflix.com/title/81448990\n\nSubscribe: https://bit.ly/33okaL0\n\nAbout Netflix:\nNetflix is the world's leading streaming entertainment service with 221 million paid memberships in over 190 countries enjoying TV series, documentaries, feature films and mobile games across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any Internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.\n\nBlack Clover: Sword of the Wizard King | Official Teaser | Netflix Anime\nhttps://www.youtube.com/NetflixAnime",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/7FEyjd2hNSk/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/7FEyjd2hNSk/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/7FEyjd2hNSk/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "Netflix Anime",
              "tags": [
                "Black Clover",
                "Netflix",
                "anime"
              ],
              "categoryId": "1",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Black Clover: Sword of the Wizard King | Official Teaser | Netflix Anime",
                "description": "The Netflix Series \"Black Clover: Sword of the Wizard King\" starts streaming from March 31, 2023, only on Netflix!\nhttps://www.netflix.com/title/81448990\n\nSubscribe: https://bit.ly/33okaL0\n\nAbout Netflix:\nNetflix is the world's leading streaming entertainment service with 221 million paid memberships in over 190 countries enjoying TV series, documentaries, feature films and mobile games across a wide variety of genres and languages. Members can watch as much as they want, anytime, anywhere, on any Internet-connected screen. Members can play, pause and resume watching, all without commercials or commitments.\n\nBlack Clover: Sword of the Wizard King | Official Teaser | Netflix Anime\nhttps://www.youtube.com/NetflixAnime"
              },
              "defaultAudioLanguage": "en-US"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "vrM8eqrA3k2SBF6tezG0K_Wz_xQ",
            "id": "2u7nlMY7FPs",
            "snippet": {
              "publishedAt": "2022-10-05T03:06:24Z",
              "channelId": "UCcVqCJ_9owb1zM43vqswMNQ",
              "title": "Fat Joe, Wu-Tang Clan & More Shook Us WIth Their Legendary Performance | HIp Hop Awards '22",
              "description": "Watch legends Dead Prez, Mobb Deep, M.O.P., Fat Joe, Remy ma, Lil' Flip, David Banner, Project Pat, Three Six Mafia, and Wu-Tang Clan perform their hits on the 2022 Hip Hop Awards stage. #HipHopAwards22 #HipHopAwards #BET\n\nSUBSCRIBE to #BET! ►► http://bit.ly/1U0v9xG\n\nStream Black Culture with BET+. Kick back and enjoy movies, TV series, exclusive originals and the best of Tyler Perry. Sign up for BET+ ►► http://bit.ly/betplus \n\nConnect with BET \nWeb: http://www.BET.com\nFacebook: http://www.facebook.com/BET\nTwitter: http://www.twitter.com/BET\nInstagram: http://www.instagram.com/BET\nBET+: https://www.bet.plus \nhttps://www.instagram.com/betplus/\nhttps://twitter.com/betplus\nhttps://www.facebook.com/yourbetplus/\nGoogle+: http://www.bet.us/gplusBET",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/2u7nlMY7FPs/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/2u7nlMY7FPs/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/2u7nlMY7FPs/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "BETNetworks",
              "tags": [
                "BET",
                "BET Networks",
                "BET Music",
                "Black Entertainment Television",
                "Hip Hop Awards",
                "Hip Hop Awards '22",
                "Dead Prez",
                "Mobb Deep",
                "M.O.P.",
                "Fat Joe",
                "Remy Ma",
                "Lil' Flip",
                "David Banner",
                "Project Pat",
                "Three Six Mafia",
                "Wu-Tang Clan"
              ],
              "categoryId": "24",
              "liveBroadcastContent": "none",
              "defaultLanguage": "en",
              "localized": {
                "title": "Fat Joe, Wu-Tang Clan & More Shook Us WIth Their Legendary Performance | HIp Hop Awards '22",
                "description": "Watch legends Dead Prez, Mobb Deep, M.O.P., Fat Joe, Remy ma, Lil' Flip, David Banner, Project Pat, Three Six Mafia, and Wu-Tang Clan perform their hits on the 2022 Hip Hop Awards stage. #HipHopAwards22 #HipHopAwards #BET\n\nSUBSCRIBE to #BET! ►► http://bit.ly/1U0v9xG\n\nStream Black Culture with BET+. Kick back and enjoy movies, TV series, exclusive originals and the best of Tyler Perry. Sign up for BET+ ►► http://bit.ly/betplus \n\nConnect with BET \nWeb: http://www.BET.com\nFacebook: http://www.facebook.com/BET\nTwitter: http://www.twitter.com/BET\nInstagram: http://www.instagram.com/BET\nBET+: https://www.bet.plus \nhttps://www.instagram.com/betplus/\nhttps://twitter.com/betplus\nhttps://www.facebook.com/yourbetplus/\nGoogle+: http://www.bet.us/gplusBET"
              },
              "defaultAudioLanguage": "en"
            }
          },
          {
            "kind": "youtube#video",
            "etag": "OPz6jGEleIoy6ZPSIEgRbFjyF1g",
            "id": "fXl5dPuiJa0",
            "snippet": {
              "publishedAt": "2022-10-06T15:06:45Z",
              "channelId": "UCU9R50wyBPKpdbcIScAyZig",
              "title": "Asake - Joha (Official Video)",
              "description": "Listen to the album “Mr. Money with the Vibe\". Out Now!\nStream: https://music.empi.re/mmwtv\n\n\n#Asake  #MrMoneywiththeVibe   #EMPIRE\n\n\nOfficial Video by Asake - \"Joha\"  © 2022 YBNL Nation / EMPIRE",
              "thumbnails": {
                "default": {
                  "url": "https://i.ytimg.com/vi/fXl5dPuiJa0/default.jpg",
                  "width": 120,
                  "height": 90
                },
                "medium": {
                  "url": "https://i.ytimg.com/vi/fXl5dPuiJa0/mqdefault.jpg",
                  "width": 320,
                  "height": 180
                },
                "high": {
                  "url": "https://i.ytimg.com/vi/fXl5dPuiJa0/hqdefault.jpg",
                  "width": 480,
                  "height": 360
                }
              },
              "channelTitle": "ASAKE",
              "categoryId": "22",
              "liveBroadcastContent": "none",
              "localized": {
                "title": "Asake - Joha (Official Video)",
                "description": "Listen to the album “Mr. Money with the Vibe\". Out Now!\nStream: https://music.empi.re/mmwtv\n\n\n#Asake  #MrMoneywiththeVibe   #EMPIRE\n\n\nOfficial Video by Asake - \"Joha\"  © 2022 YBNL Nation / EMPIRE"
              }
            }
          }
        ],
        query : '여행',
        nextPageToken : '',
        videoId: ''  // 추가
  }

  this.defaultState = this.state; // 초기화 default 작성
  this.getYoutube = this.getYoutube.bind(this);
  this.setVideoId = this.setVideoId.bind(this);
  this.getData = this.getData.bind(this);
}

async getData() {
  const URL = 'https://www.googleapis.com/youtube/v3/search';

  const params = {
    key : 'AIzaSyCfVt3Fh8IrvK24xxr4aGPg7yoVcvS0XsI',
    q : this.state.query,
    pageToken : this.state.nextPageToken,
    part : 'snippet'
  }
  
  try {
    const { data } = await axios.get( URL, { params } );
    console.log( data );
    this.setState({
      videoDatas : [...this.state.videoDatas, ...data.items],
      q : this.state.query,
      nextPageToken : data.nextPageToken
    },() => console.log(data))
  } catch (error) {
    console.error('에러',error);
  }
}
  componentDidMount() {
    this.getData();
  }

  async getYoutube(query) {
    console.log("getYoutube");
    if (!query) return;
    // 여기 작성
    if (this.state.query !== query) {
      this.setState(this.defaultState);
    }

    this.setState({q: query});
    this.getData();
  }
  
  setVideoId(id) {
    this.setState({ videoId : id })
  }


  render() {
    const { videoId } = this.state
  return (
    <div className = 'App'>
      <Nav>
        <SearchBar onSearchVideo={debounce(this.getYoutube, 500)}></SearchBar>
      </Nav>
      <main>
        <div className="c3">
          {
            videoId
            ? <VideoPlayer videoId = { videoId }></VideoPlayer>
            :
              // <InfiniteScroll
              //   loadMore = {() => this.getYoutube(this.state.query)}
              //   hasMore = {!!this.state.nextPageToken}
              //   loader = {
              //       <div key={v4()}>
              //       <img src={spinner} alt="로딩 중"></img>
              //       </div>
              //   }
              // >
              <VideoList
            		{...this.state}
                onSetVideoId = {this.setVideoId}/>
              // </InfiniteScroll>
          }
        </div>
      </main>
    </div>
    )
  }
}

export default App;

