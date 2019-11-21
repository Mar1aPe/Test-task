import React from 'react';
import Image from '../components/Images'


// let gallery = []

// const apiUrl = 'https://www.flickr.com/services/feeds/photos_public.gne?tags=marilynmonroe'

// fetch(apiUrl)
//     .then(response => response.json())
//     .then(data => gallery.push(...data.items))
//     .catch(error => console.log(error));

let gallery = [
    {
        "title": "Daily Mail Quiz Book - No.6: Films - Published 1957",
        "link": "https:\/\/www.flickr.com\/photos\/183174946@N03\/49095465501\/",
        "media": { "m": "https:\/\/live.staticflickr.com\/65535\/49095465501_750a0ce5b6_m.jpg" },
        "date_taken": "2019-11-20T13:18:10-08:00",
        "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/183174946@N03\/\">Vintageflicksfan<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/183174946@N03\/49095465501\/\" title=\"Daily Mail Quiz Book - No.6: Films - Published 1957\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49095465501_750a0ce5b6_m.jpg\" width=\"156\" height=\"240\" alt=\"Daily Mail Quiz Book - No.6: Films - Published 1957\" \/><\/a><\/p> <p>Sixth in a series of quiz books published by The Daily Mail newspaper in the mid-late 1950's, on subjects ranging from Art to Nature to The Military.<br \/> <br \/> Cover shows Marilyn Monroe and Laurence Olivier during filming of The Prince And The Showgirl.<\/p>",
        "published": "2019-11-20T15:51:35Z",
        "author": "nobody@flickr.com (\"Vintageflicksfan\")",
        "author_id": "183174946@N03",
        "tags": "marilynmonroe laurenceolivier vintagemoviebook films"
    },
    {
        "title": "Caricatures Morphing",
        "link": "https:\/\/www.flickr.com\/photos\/153014321@N05\/49093279758\/",
        "media": { "m": "https:\/\/live.staticflickr.com\/65535\/49093279758_0a54b78f18_m.jpg" },
        "date_taken": "2019-11-19T22:30:59-08:00",
        "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/153014321@N05\/\">Drakre52<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/153014321@N05\/49093279758\/\" title=\"Caricatures Morphing\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49093279758_0a54b78f18_m.jpg\" width=\"240\" height=\"226\" alt=\"Caricatures Morphing\" \/><\/a><\/p> <p>Albert Einstein with David Bowie<br \/> <a href=\"https:\/\/www.facebook.com\/Drakre52\/videos\/412687372684519\/\" rel=\"noreferrer nofollow\">www.facebook.com\/Drakre52\/videos\/412687372684519\/<\/a><br \/> <a href=\"https:\/\/vimeo.com\/357518341\" rel=\"noreferrer nofollow\">vimeo.com\/357518341<\/a><br \/> <a href=\"https:\/\/drakre52.jimdo.com\/2012-2019\/\" rel=\"noreferrer nofollow\">drakre52.jimdo.com\/2012-2019\/<\/a><\/p>",
        "published": "2019-11-20T06:32:31Z",
        "author": "nobody@flickr.com (\"Drakre52\")",
        "author_id": "153014321@N05",
        "tags": "drakre52 parka morph morphing beautiful amazing art cool good splendid great nice funny faces portrait grappig humor lol jimihendrix michaeljackson brigittebardot whoopiegoldberg johnnydepp slash robertplant marilynmonroe steventyler mickjagger johnlennon frankzappa alberteinstein davidbowie iggypop"
    },
    {
        "title": "Marilyn Monroe",
        "link": "https:\/\/www.flickr.com\/photos\/daddio\/49091727441\/",
        "media": { "m": "https:\/\/live.staticflickr.com\/65535\/49091727441_a8d87c9bfe_m.jpg" },
        "date_taken": "2015-08-25T08:44:03-08:00",
        "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/daddio\/\">bballchico<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/daddio\/49091727441\/\" title=\"Marilyn Monroe\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49091727441_a8d87c9bfe_m.jpg\" width=\"240\" height=\"160\" alt=\"Marilyn Monroe\" \/><\/a><\/p> ",
        "published": "2019-11-19T19:52:46Z",
        "author": "nobody@flickr.com (\"bballchico\")",
        "author_id": "32524965@N00",
        "tags": "marilynmonroe woman babe actor actress movies photos icon legend"
    },
    {
        "title": "Marilyn Monroe",
        "link": "https:\/\/www.flickr.com\/photos\/daddio\/49091214043\/",
        "media": { "m": "https:\/\/live.staticflickr.com\/65535\/49091214043_256af1f810_m.jpg" },
        "date_taken": "2015-08-25T08:49:17-08:00",
        "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/daddio\/\">bballchico<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/daddio\/49091214043\/\" title=\"Marilyn Monroe\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49091214043_256af1f810_m.jpg\" width=\"240\" height=\"217\" alt=\"Marilyn Monroe\" \/><\/a><\/p> ",
        "published": "2019-11-19T19:52:48Z",
        "author": "nobody@flickr.com (\"bballchico\")",
        "author_id": "32524965@N00",
        "tags": "marilynmonroe woman babe actor actress movies photos icon legend"
    },
    {
        "title": "Marilyn Monroe",
        "link": "https:\/\/www.flickr.com\/photos\/daddio\/49091927637\/",
        "media": { "m": "https:\/\/live.staticflickr.com\/65535\/49091927637_dd0483e297_m.jpg" },
        "date_taken": "2015-08-25T08:41:05-08:00",
        "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/daddio\/\">bballchico<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/daddio\/49091927637\/\" title=\"Marilyn Monroe\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49091927637_dd0483e297_m.jpg\" width=\"160\" height=\"240\" alt=\"Marilyn Monroe\" \/><\/a><\/p> ",
        "published": "2019-11-19T19:52:43Z",
        "author": "nobody@flickr.com (\"bballchico\")",
        "author_id": "32524965@N00",
        "tags": "marilynmonroe woman babe actor actress movies photos icon legend"
    },
    {
        "title": "Marilyn Monroe",
        "link": "https:\/\/www.flickr.com\/photos\/daddio\/49091215348\/",
        "media": { "m": "https:\/\/live.staticflickr.com\/65535\/49091215348_f246597610_m.jpg" },
        "date_taken": "2015-08-25T08:45:51-08:00",
        "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/daddio\/\">bballchico<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/daddio\/49091215348\/\" title=\"Marilyn Monroe\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49091215348_f246597610_m.jpg\" width=\"240\" height=\"239\" alt=\"Marilyn Monroe\" \/><\/a><\/p> ",
        "published": "2019-11-19T19:52:47Z",
        "author": "nobody@flickr.com (\"bballchico\")",
        "author_id": "32524965@N00",
        "tags": "marilynmonroe woman babe actor actress movies photos icon legend"
    },
    {
        "title": "Marilyn Monroe",
        "link": "https:\/\/www.flickr.com\/photos\/daddio\/49091220263\/",
        "media": { "m": "https:\/\/live.staticflickr.com\/65535\/49091220263_981359908d_m.jpg" },
        "date_taken": "2015-08-25T08:42:21-08:00",
        "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/daddio\/\">bballchico<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/daddio\/49091220263\/\" title=\"Marilyn Monroe\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49091220263_981359908d_m.jpg\" width=\"200\" height=\"240\" alt=\"Marilyn Monroe\" \/><\/a><\/p> ",
        "published": "2019-11-19T19:52:44Z",
        "author": "nobody@flickr.com (\"bballchico\")",
        "author_id": "32524965@N00",
        "tags": "marilynmonroe woman babe actor actress movies photos icon legend"
    },
    {
        "title": "Marilyn Monroe",
        "link": "https:\/\/www.flickr.com\/photos\/daddio\/49091934772\/",
        "media": { "m": "https:\/\/live.staticflickr.com\/65535\/49091934772_02a967d700_m.jpg" },
        "date_taken": "2015-08-25T08:43:12-08:00",
        "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/daddio\/\">bballchico<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/daddio\/49091934772\/\" title=\"Marilyn Monroe\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49091934772_02a967d700_m.jpg\" width=\"240\" height=\"221\" alt=\"Marilyn Monroe\" \/><\/a><\/p> ",
        "published": "2019-11-19T19:52:44Z",
        "author": "nobody@flickr.com (\"bballchico\")",
        "author_id": "32524965@N00",
        "tags": "marilynmonroe woman babe actor actress movies photos icon legend"
    },
    {
        "title": "Marilyn Monroe",
        "link": "https:\/\/www.flickr.com\/photos\/daddio\/49091217338\/",
        "media": { "m": "https:\/\/live.staticflickr.com\/65535\/49091217338_5f50f3befd_m.jpg" },
        "date_taken": "2015-08-25T08:43:36-08:00",
        "description": " <p><a href=\"https:\/\/www.flickr.com\/people\/daddio\/\">bballchico<\/a> posted a photo:<\/p> <p><a href=\"https:\/\/www.flickr.com\/photos\/daddio\/49091217338\/\" title=\"Marilyn Monroe\"><img src=\"https:\/\/live.staticflickr.com\/65535\/49091217338_5f50f3befd_m.jpg\" width=\"240\" height=\"189\" alt=\"Marilyn Monroe\" \/><\/a><\/p> ",
        "published": "2019-11-19T19:52:46Z",
        "author": "nobody@flickr.com (\"bballchico\")",
        "author_id": "32524965@N00",
        "tags": "marilynmonroe woman babe actor actress movies photos icon legend"
    }
]


console.log(gallery)
const Gallery = () => {

    const galleryView = gallery.map(picture => {

        return <Image key={picture.link} {...picture} />

    })

    return (

        <div className='gallery'>
            {galleryView}
        </div>
    );
}


export default Gallery;


