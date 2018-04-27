//component.js
import API from '../../common/js/api'

Component({
    data: {
        
    },
    properties: {
        showFlag: {
            type: Boolean,
            value: false
        }
    },
    created: function () {

    },
    attached: function() {
        this.getTopSong('26');
    },
    methods: {
    	getTopSong: function(topid) {
            wx.request({
                url: API.topsong,
                method: 'GET',
                data: {
                    format: 'json',
                    platform: 'h5',
                    page: 'detail',
                    type: 'top',
                    topid: topid
                },
                success: (res) =>{
                    this.setData({
                        songList: this.formatData(res.data)
                    })
                }
            })
        },
        formatData: function(data) {
            let songList = {};
            songList.listname = data.topinfo.ListName;
            songList.bgImage = data.topinfo.pic_album;
            let songs = [];
            songs = data.songlist.map((item, index) =>{
                return this.createSong(item.data);
            })
            songList.songs = songs;
            return songList;
        },
        createSong: function(songItem) {
            let song = {
                songid: songItem.songid,
                songmid: songItem.songmid,
                songname: songItem.songname,
                singername: this.filterSinger(songItem.singer),
                album: songItem.albumname,
                songImg: `https://y.gtimg.cn/music/photo_new/T002R300x300M000${songItem.albummid}.jpg?max_age=2592000`,
                url: `http://100.100.1.10:8081/C400${songItem.songmid}.m4a`,
                collectFlag: false
            }
            return song;
        },
        filterSinger: function(singer) {
            let ret = []
            if (!singer) {
                return ''
            }
            singer.forEach((s) => {
                ret.push(s.name)
            })
            return ret.join(' / ')
        }
    }
})
