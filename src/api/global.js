// eslint-disable-next-line no-unused-vars
const UserName = "";
// eslint-disable-next-line no-unused-vars
const Id = "";
var BASE_URL = "http://114.29.253.162:3198/";
export default
  {
    optioner: {
      Agentid: '',
      Agentname: "",
    },

    myLoginInfo: {
      loginId: "",
      loginName: '',
      loginBalance: '',
      loginEnable: ''
    },
  
    registerurl: BASE_URL + 'regist',
    loginurl :  BASE_URL + 'login',
    agentUrl: BASE_URL + 'getAgentInfo ',
    scrollData:  BASE_URL + 'getBulletin',
    PaymentUrl:'http://wlzh.hn885.com/payment/xjw/pay',
    PaymentCallbackUrl: BASE_URL + 'pay',
    Withdrawurl:'http://wlzh.hn885.com/payment/xjw/draw',
    WithDrawCallbackUrl: BASE_URL +'draw',

    // https://api.zf166.cc
    //sending oid partner to api data
    Oid_Partner: 'd9fce17200317431b1b43b27508224cf0294759a',
    // selectInfo: {
    //    selectAgent: "",
    //    selectItem: "",
    //    xmb_d:"",
    //    xmb_s:"",
    // },
    addPwStr: "$hn_ok$my_ok$hn_ok",
    en: {
      key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
      iv: '1234567890123456'
    },
    gameEn: {
      key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
      iv: '1234567890123456'
    },

    paymentEn: {
      key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
      iv: '1234567890123456'
    },

    withdrawEn: {
      key: "@hKe9@A1lKe9$Tz1kE@8HnG7",
      iv: '1234567890123456'
    },
    
    listDataMember: {
      memberListData: [],
      totalMemberCount: 0
    },
    shanji: {
      memberListData: [],
      totalMemberCount: 0
    },
    //提醒聊天记录
    noticeMessage: [
      // { "id": 1026, "msg" : "这是FromMember", "msgType" : 0, "userId": "19509", "name":"222", "nickname": "" },
      // { "id": 1029, "msg" : "是测试消息Member", "msgType" : 0, "userId": "19528", "name":"222", "nickname": "" }
    ],
    /**聊天记录 */
    chatRecord: [
      // {
      //    msgType: "1",
      //    userId: "id-1",
      //    nickname: "id1-nick",
      //    // time: "2020:08:03",
      //    msg: "hello i'm id-1",
      //    // imgHeadUrl: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      //  },
      //  {
      //    msgType: "2",
      //    userId: "id-2",
      //    nickname: "id2-nick",
      //    // time: "2020:08:03",
      //    msg: "hello i'm id-2",
      //    // imgHeadUrl: "https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100"
      //  }
    ],
    EXPS: [
      { file: '100.gif', code: '/::)', title: '微笑', reg: /\/::\)/g },
      { file: '101.gif', code: '/::~', title: '伤心', reg: /\/::~/g },
      { file: '102.gif', code: '/::B', title: '美女', reg: /\/::B/g },
      { file: '103.gif', code: '/::|', title: '发呆', reg: /\/::\|/g },
      { file: '104.gif', code: '/:8-)', title: '墨镜', reg: /\/:8-\)/g },
      { file: '105.gif', code: '/::<', title: '哭', reg: /\/::</g },
      { file: '106.gif', code: '/::$', title: '羞', reg: /\/::\$/g },
      { file: '107.gif', code: '/::X', title: '哑', reg: /\/::X/g },
      { file: '108.gif', code: '/::Z', title: '睡', reg: /\/::Z/g },
      { file: '109.gif', code: '/::\'(', title: '哭', reg: /\/::'\(/g },
      { file: '110.gif', code: '/::-|', title: '囧', reg: /\/::-\|/g },
      { file: '111.gif', code: '/::@', title: '怒', reg: /\/::@/g },
      { file: '112.gif', code: '/::P', title: '调皮', reg: /\/::P/g },
      { file: '113.gif', code: '/::D', title: '笑', reg: /\/::D/g },
      { file: '114.gif', code: '/::O', title: '惊讶', reg: /\/::O/g },
      { file: '115.gif', code: '/::(', title: '难过', reg: /\/::\(/g },
      { file: '116.gif', code: '/::+', title: '酷', reg: /\/::\+/g },
      { file: '117.gif', code: '/:--b', title: '汗', reg: /\/:--b/g },
      { file: '118.gif', code: '/::Q', title: '抓狂', reg: /\/::Q/g },
      { file: '119.gif', code: '/::T', title: '吐', reg: /\/::T/g },
      { file: '120.gif', code: '/:,@P', title: '笑', reg: /\/:,@P/g },
      { file: '121.gif', code: '/:,@-D', title: '快乐', reg: /\/:,@-D/g },
      { file: '122.gif', code: '/::d', title: '奇', reg: /\/::d/g },
      { file: '123.gif', code: '/:,@o', title: '傲', reg: /\/:,@o/g },
      { file: '124.gif', code: '/::g', title: '饿', reg: /\/::g/g },
      { file: '125.gif', code: '/:|-)', title: '累', reg: /\/:\|-\)/g },
      { file: '126.gif', code: '/::!', title: '吓', reg: /\/::!/g },
      { file: '127.gif', code: '/::L', title: '汗', reg: /\/::L/g },
      { file: '128.gif', code: '/::>', title: '高兴', reg: /\/::>/g },
      { file: '129.gif', code: '/::,@', title: '闲', reg: /\/::,@/g },
      { file: '130.gif', code: '/:,@f', title: '努力', reg: /\/:,@f/g },
      { file: '131.gif', code: '/::-S', title: '骂', reg: /\/::-S/g },
      // { file: '132.gif', code: '/:?', title: '疑问' ,reg:/\/:?/g },
      // { file: '133.gif', code: '/:,@x', title: '秘密' },
      // { file: '134.gif', code: '/:,@@', title: '乱' },
      // { file: '135.gif', code: '/::8', title: '疯' },
      // { file: '136.gif', code: '/:,@!', title: '哀' },
      // { file: '137.gif', code: '/:!!!', title: '鬼' },
      // { file: '138.gif', code: '/:xx', title: '打击' },
      // { file: '139.gif', code: '/:bye', title: 'bye' },
      // { file: '140.gif', code: '/:wipe', title: '汗' },
      // { file: '141.gif', code: '/:dig', title: '抠' },
      // { file: '142.gif', code: '/:handclap', title: '鼓掌' },
      // { file: '143.gif', code: '/:&-(', title: '糟糕' },
      // { file: '144.gif', code: '/:B-)', title: '恶搞' },
      // { file: '145.gif', code: '/:<@', title: '什么' },
      // { file: '146.gif', code: '/:@>', title: '什么' },
      // { file: '147.gif', code: '/::-O', title: '累' },
      // { file: '148.gif', code: '/:>-|', title: '看' },
      // { file: '149.gif', code: '/:P-(', title: '难过' },
      // { file: '150.gif', code: '/::\'|', title: '难过' },
      // { file: '151.gif', code: '/:X-)', title: '坏' },
      // { file: '152.gif', code: '/::*', title: '亲' },
      // { file: '153.gif', code: '/:@x', title: '吓' },
      // { file: '154.gif', code: '/:8*', title: '可怜' },
      // { file: '155.gif', code: '/:pd', title: '刀' },
      // { file: '156.gif', code: '/:<W>', title: '水果' },
      // { file: '157.gif', code: '/:beer', title: '酒' },
      // { file: '158.gif', code: '/:basketb', title: '篮球' },
      // { file: '159.gif', code: '/:oo', title: '乒乓' },
      // { file: '160.gif', code: '/:coffee', title: '咖啡' },
      // { file: '161.gif', code: '/:eat', title: '美食' },
      // { file: '162.gif', code: '/:pig', title: '动物' },
      // { file: '163.gif', code: '/:rose', title: '鲜花' },
      // { file: '164.gif', code: '/:fade', title: '枯' },
      // { file: '165.gif', code: '/:showlove', title: '唇' },
      // { file: '166.gif', code: '/:heart', title: '爱' },
      // { file: '167.gif', code: '/:break', title: '分手' },
      // { file: '168.gif', code: '/:cake', title: '生日' },
      // { file: '169.gif', code: '/:li', title: '电' },
      // { file: '170.gif', code: '/:bome', title: '炸弹' },
      // { file: '171.gif', code: '/:kn', title: '刀子' },
      // { file: '172.gif', code: '/:footb', title: '足球' },
      // { file: '173.gif', code: '/:ladybug', title: '瓢虫' },
      // { file: '174.gif', code: '/:shit', title: '翔' },
      // { file: '175.gif', code: '/:moon', title: '月亮' },
      // { file: '176.gif', code: '/:sun', title: '太阳' },
      // { file: '177.gif', code: '/:gift', title: '礼物' },
      // { file: '178.gif', code: '/:hug', title: '抱抱' },
      // { file: '179.gif', code: '/:strong', title: '拇指' },
      // { file: '180.gif', code: '/:weak', title: '贬低' },
      // { file: '181.gif', code: '/:share', title: '握手' },
      // { file: '182.gif', code: '/:v', title: '剪刀手' },
      // { file: '183.gif', code: '/:@)', title: '抱拳' },
      // { file: '184.gif', code: '/:jj', title: '勾引' },
      // { file: '185.gif', code: '/:@@', title: '拳头' },
      // { file: '186.gif', code: '/:bad', title: '小拇指' },
      // { file: '187.gif', code: '/:lvu', title: '拇指八' },
      // { file: '188.gif', code: '/:no', title: '食指' },
      // { file: '189.gif', code: '/:ok', title: 'ok' },
      // { file: '190.gif', code: '/:love', title: '情侣' },
      // { file: '191.gif', code: '/:<L>', title: '爱心' },
      // { file: '192.gif', code: '/:jump', title: '蹦哒' },
      // { file: '193.gif', code: '/:shake', title: '颤抖' },
      // { file: '194.gif', code: '/:<O>', title: '怄气' },
      // { file: '195.gif', code: '/:circle', title: '跳舞' },
      // { file: '196.gif', code: '/:kotow', title: '发呆' },
      // { file: '197.gif', code: '/:turn', title: '背着' },
      // { file: '198.gif', code: '/:skip', title: '伸手' },
      // { file: '199.gif', code: '/:oY', title: '耍帅' }
    ],
  }
