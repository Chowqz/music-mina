//component.js
import API from '../../common/js/api'
Component({
    data: {
        slider: [],
        recommendList: []
    },
    properties: {
        showIndex: {
            type: Number,
            value: 0,
            observer: function(newVal, oldVal) {
                if(!this.data.slider.length && newVal==0) {
                    this.getRecommend();
                }
            }
        }
    },
    created: function () {

    },
    attached: function() {
        
    },
    methods: {
    	getRecommend: function() {
            wx.request({
                url: API.recommend,
                method: 'GET',
                data: {
                    format: 'json'
                },
                success: (res) =>{
                    let data = this.formatRecommend(res.data.data);
                    this.setData({
                        slider: data.slider,
                        recommendList: data.songList
                    })
                }
            })
        },
        formatRecommend: function(data) {
            data.songList.map((item, index) =>{
                item.accessnum = (item.accessnum / 10000).toFixed(1);
            });
            return data;
        }
    }
})
