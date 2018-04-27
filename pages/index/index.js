//index.js

const app = getApp()

Page({
    data: {
        showIndex: 4,
        songlistFlag: true
    },
    onLoad: function () {

    },
    tab: function(e) {
        this.setData({
            showIndex: e.target.dataset.index
        })
    }
})
