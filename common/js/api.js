const domain = 'https://c.y.qq.com';

const API = {
	recommend: `${domain}//musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg`,	//推荐
	topList: `${domain}/v8/fcg-bin/fcg_myqq_toplist.fcg`,	//排行榜
	cdsong: `${domain}/qzone/fcg-bin/fcg_ucc_getcdinfo_byids_cp.fcg`,	//推荐歌单
	topsong: `${domain}/v8/fcg-bin/fcg_v8_toplist_cp.fcg`	//排行榜歌单
}

export default API