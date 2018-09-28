/*
moonzju@twitter
野猪看电视
观看电视直播源的节目，外国电视为主，绝大部分是720P画质，某些频道可能需要翻墙才能观看
version：1.0.1
*/ 

var channelName=["TVB翡翠台", "TVB财经台","TVBS HD","NHK", "CNN", "ABC News", "Weather" ,"MSNBC","中国气象频道"]
var channelAddr=[
    "http://m.567it.com/jade.m3u8",
    "http://e1.vdowowza.vip.hk1.tvb.com/tvblive/smil:mobilehd_financeintl.smil/chunklist.m3u8",
    "http://210.201.54.102/gtlive2/tc-tvbs/chunklist_w1101125571.m3u8",
    "https://nhkworld.webcdn.stream.ne.jp/www11/nhkworld-tv/global/263941/live_wa_s.m3u8",
    "https://5b8ec3e62bc9e.streamlock.net:4044/cnewz/myStream//playlist.m3u8?",
    "https://abclive2-lh.akamaihd.net/i/abc_live11@423404/master.m3u8",
    "https://weather-lh.akamaihd.net/i/twc_1@92006/master.m3u8",
    "http://tvemsnbc-lh.akamaihd.net/i/nbcmsnbc_1@122532/master.m3u8",
    "http://hls.weathertv.cn/tslslive/qCFIfHB/hls/live_sd.m3u8"
]


$ui.render({
  props:{
    title:"野猪看电视"
  },
  views: [
    {
      type: "menu",
      props: {
        items: channelName
      },
      layout: function(make) {
        make.left.top.right.equalTo(0)
        make.height.equalTo(44)
      },
      events: {
        changed: function(sender) {
          //var items = sender.items
          //var index = sender.index
          var url=channelAddr[sender.index]
          $("player").src=url       
          $("player").play()
          $ui.toast(sender.index + ": " + sender.items[sender.index])
        }
      }
    },
     
    {
      type: "video",
     
      props: {
        id:"player",
        src: channelAddr[0]
      },
      layout: function(make, view) {
        make.left.right.equalTo(0)
        make.top.equalTo(40)
        make.height.equalTo(256)
      }
    }

  ]
})
