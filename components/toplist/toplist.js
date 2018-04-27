//toplist.js
import API from '../../common/js/api'

Component({
    data: {
        topList: []
    },
    properties: {
        showIndex: {
            type: Number,
            value: 0,
            observer: function(newVal, oldVal) {
                if(!this.data.topList.length && newVal==1) {
                    this.getTopList();
                }
            }
        }
    },
    created: function () {

    },
    attached: function() {
        
    },
    methods: {
    	getTopList: function() {
            wx.request({
                url: API.topList,
                method: 'GET',
                data: {
                    format: 'json'
                },
                success: (res) =>{
                    this.setData({
                        topList: res.data.data.topList
                    })
                }
            })
        }
    }
})
