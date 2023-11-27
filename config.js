window.global_config = {
  MAX_WAITING_TIME: 1000 * 60 * 3,
  // 用以区分当前运行环境
  ENVIRONMENT: 'HS',
  SYNCHRO_TYPE: 'K3',
  CORPORATE_NAME: '沙塔思iMDC系统',
  PRINT_URL: 'http://127.0.0.1:12345/',
  MDCADDRESS: 'http://47.96.190.16:8080/idevcloudweb/',

  // BASE_URL: 'http://10.10.2.90:8091/idev/', // 公网接口
  // BASE_URL: 'http://122.112.160.41:8080/idev/', // 公网接口
  // BASE_URL: 'http://192.168.0.30:8091/idev/',
  // BASE_URL: 'http://172.16.0.15:8092/idev/',
  // BASE_URL: 'http://10.1.139.200:8092/idev/', // 日升
  // BASE_URL: 'http://125.124.195.250:8091/idev/', // 公网接口
  BASE_URL_JX: 'http://61.153.185.13:8093/jiexiang/', // 公网接口
  // BASE_URL_JX: 'http://192.168.0.162:8093/jiexiang/', // 公网接口
  // BASE_URL_JX: 'http://122.112.160.41:8093/jiexiang/', // 公网接口
  // BASE_URL: 'http://172.16.0.15:8080/idev/',
  // BASE_URL: 'http://124.70.162.138:8091/idev/', // 公网接口
  // BASE_URL: 'http://192.168.1.181:8091/idev/', // 百事宝
  // BASE_URL: 'http://61.153.185.13:8091/idev/', // 杰祥
  // BASE_URL: 'http://115.238.136.74:8091/idev/', // 嘉乐
  // BASE_URL: 'http://122.227.139.198:8091/idev/', // 日月
  BASE_URL: 'http://121.36.253.102:8091/idev/', // 公网接口2
  // BASE_URL: 'http://192.168.2.66:8091/idev/',
  // BASE_URL: 'http://172.18.109.24:8091/idev/', // 信维内网
  // BASE_URL: 'http://localhost:58091/idev/', // 公网接口2
  // BASE_URL: 'http://192.168.10.50:8091/idev/', // 公网接口2
  // BASE_URL: 'http://122.112.238.97:8091/idev/', // 天仑
  // BASE_URL: 'http://192.168.99.80:8091/idev/', // 德清内网
  // BASE_URL: 'http://10.162.105.226:8091/idev/',
  BASE_URL_RZ: 'http://121.36.253.102:8094/runzhou/', // 润轴
  // BASE_URL_XW: 'http://172.18.109.24:8097/xinwei/', // 信维内网
  BASE_URL_XW: 'http://localhost:58097/xinwei/', // 信维
  // BASE_URL_XW:'http://192.168.33.171:8093/xinwei/',
  // BASE_URL_XW: 'http://81.68.188.168:8093/xinwei/', // 信维
  // BASE_URL: 'http://124.70.162.138:8091/idev', // 大承
  // BASE_URL: 'http://192.168.1.251:8092/idev/', // 海宏内网接口
  // BASE_URL: 'http://192.168.1.2:8091/idev/', // 华一接口
  // BASE_URL: 'http://192.168.99.80:8091/idev/',
  // BASE_URL_FBS: 'http://10.162.105.226:9090/fbs/',
  BASE_URL_FBS: 'http://192.168.99.222:8093/fbs/',

  // NETWORK_URL: 'http://192.168.99.139:8090/match_cloud/', // 网关接口

  // SUPOS_URL: 'http://10.10.2.90:8095/suposHosted/', // 蓝卓接口
  // MK_URL: 'http://122.112.160.41:8093/meikang/', // 美康接口
  // MK_URL: 'http://172.17.200.151:8093/meikang/', // 美康内网接口
  // BASE_URL: 'http://172.17.200.151:8092/idev/', // 美康内网接口

  // BASE_URL: 'http://10.10.2.90:8091/idev/', // 公网接口

  // SUPOS_URL: 'http://10.10.2.90:8095/suposHosted/', // 蓝卓接口
  IS_Mk: false, // 判断是否美康企业用
  IMPLANT_PAGE: false, // 嵌入式页面，将隐藏导航栏和菜单栏
  MK_IP: '172.17.200.151',

  SHOW_COMMON: true, // 主控室是否显示常用功能
  MAIN_DEVICE_INFO_JUMP: false, // true为路由调整，false为切换组件

  FZ_PASSWORD: false, // 开启复杂密码
  SYSTEM_HOLIDAY: false, // 工厂日历（美康）
  REPORT_TOOL: false, // 设备管理_工具
  LOGO: 'SHATA', // null 无logo -- SUPOS 蓝卓 -- SHATA 沙塔   -- YIY 一元  --SL 双鹿 --BY 白云 --LT 联通
  LOGO_CONFIG: {
    // 瑞成
    149: {
      logo: 'null'
    },
    46: {
      logo: 'LT'
    },
    47: {
      logo: 'SUPOS'
    },
    182: {
      logo: 'LT'
    }
  },
  ROUTER_CONFIG: { // 首页配置
    168: {
      url: '/energy/EnergyAll?id=67'
    },
    300: {
      url: '/main/UserConfiguration?id=8'
    },
    183: {
      url: '/MainControlRoomFbs'
    }
  },
  SYSTEM_CONFIG: {
    168: {

    },
    157: {
      ANDON_STATUS_TIME: true, // 安灯设备状态异常记录阈值配置
      ANDON_STATUS_SEND: true // 设备异常时间消息推送配置
    },
    300: {
      ANDON_STATUS_TIME: true, // 安灯设备状态异常记录阈值配置
      ANDON_STATUS_SEND: true // 设备异常时间消息推送配置
    },
    182: {
      CHECK_IMG: true // 点检项图片必传
    }
  },
  PRIENT_LOGO_CONFIG: {
    155: {
      logo: 'JX_LOGO'
    }
  },
  MES_CONFIG: {
    169: {}
  },
  // DNC跳转链接
  DNC_URL: 'http://192.168.99.192:8687/#/programManage/creation',
  // MES跳转链接
  MES_URL: 'http://192.168.1.251:8089/index',
  // ERP_URL: 'http://101.37.150.212:8089/setCommonFunctions?id=1049&token=eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJzeXN0ZW0iLCJjcmVhdGVkIjoxNjY2OTMzMzQyOTUxLCJleHAiOjE2NjY5NzY1NDJ9.TTlJ5uRSt6-xeM25jP0B2b7nX7gFqN_Ntr0Ybc3SQ0GBi9KyLQDm5KEDtDzgY6sLt8gG4cOmrA23iiDJxyqHVQ&tokenHead=Bearer',
  // 能源单位名称
  GAS_NAME: '气',
  // 看板配置 // lk 磊科 -- st 沙塔 -- lt 联通  --nt 耐特  --by 白云
  KANBAN_CONFIG: {
    39: { title: '华一流量计看板', key: '6w/tB9uE/N0=', logo: 'ry', time: 15000 },
    74: { title: '数字化车间看板', key: 'vIsyVWgobpE=', logo: '', time: 15000 },
    90: { title: '设备管理看板', key: 'jjXJY9wDsQQ=', logo: 'lk', time: 1000 * 20 }, // 美康
    127: { title: '华一流量计看板', key: 'h7SvoFYiqtI=', logo: '', time: 15000 }, // 华一
    142: { title: '三毛红木车间看板', key: 'GqnWmlUFgIM=', logo: '', time: 15000 }, // 三毛
    145: { title: '南宇派车间看板', key: 'yMvzZXI6RRU=', logo: '', time: 15000 }, // 南宇派
    148: { title: '耐特驱动车间看板', key: 'Y1YetZX4s84=', logo: 'nt', time: 15000 }, // 耐特
    150: { bgTitle: '百事宝数字化车间大屏', title: '东欣科技车间看板', key: '4mUHolstiFU=', logo: '', time: 15000 }, // 东欣
    154: { title: '诸暨虹成车间看板', key: 'L2TpTXVeHTA=', logo: '', time: 15000 }, // 弘成
    87: { title: '基力思车间看板', key: 'NA1CT7/1MBo=', logo: '', time: 15000, showEnergy: true }, // 基力思
    149: { title: '瑞成车间看板', key: 's9fuiTCW6Co=', logo: '', time: 15000 }, // 瑞成
    176: { title: '安灯看板', key: 'oOg1hjGXEDw=', logo: '', time: 3000 }, // 日升
    161: { title: '若宇车间看板', key: 'fEXst7eIafk=', logo: 'ry', time: 15000 }, // 若宇
    172: { title: '高格MDC看板', key: 'GB/hUY48TSk=', logo: '', time: 15000 }, // 高格
    188: { title: '新东方看板', key: '9zUDQT2PESY=', logo: '', time: 15000 }, // 新东方
    194: { title: '浙江罗速数字化车间看板', key: 'XfWn313nlow=', logo: '', time: 15000 }, // 罗速
    193: { title: '盾运数字化车间看板', key: 'e+3AewCrMcQ=', logo: '', time: 15000 }, // 高格
    203: { title: '凯勒数字化车间看板', key: '5DkdKnR4t1w=', logo: '', time: 15000 }, // 高格
    205: { title: '方杰数字化车间看板', key: 'TpZq/11VlFE=', logo: '', time: 15000 }, // 高格
    208: { title: '中博数字化车间看板', key: 'wkk6aWMitok=', logo: '', time: 15000 }, // 高格
    // 贝隆内网看板
    151: {
      title: '贝隆车间看板',
      key: 'JyuUwjga6V8=',
      logo: '',
      time: 15000,
      byGroup: true,
      group: [
        {
          id: 11, title: '注塑看板', runArr: ['00000047_00000928', '00000047_00000925', '00000047_00000994'], noArr: ['00000047_00000924', '00000047_00000040'], addNum: 0, addName: '', pd: 45, isProduct: 1, pdxs: 1
        },
        { id: 5, title: '裁切分穴摆盘机看板', runArr: [], noArr: ['00000047_00000040', '00000047_00000045'], addNum: 0, addName: '', pd: 55, isProduct: 1, pdxs: 1 },
        { id: 6, title: '拉料、冲压设备看板', runArr: [], noArr: [], addNum: 0, addName: '', pd: 45, isProduct: 1, pdxs: 1 },
        { id: 8, title: '清洗、打码、AVI设备看板', runArr: [], noArr: [], addNum: 0, addName: '', pd: 55, isProduct: 1, pdxs: 1 },
        { id: 15, title: '离心清洗设备看板', runArr: [], noArr: [], addNum: 0, addName: '', pd: 45, isProduct: 1, pdxs: 1 }
      ]
    },
    // 双鹿内网看板
    160: {
      title: '5G+双鹿车间数字化看板',
      key: '2ouhGSYMtcw=',
      logo: '',
      time: 15000,
      byGroup: true,
      group: [
        { id: 4, title: '双鹿521分区看板' },
        { id: 5, title: '双鹿710分区看板' }
      ]
    },
    // 嘉乐内网看板
    158: {
      title: '嘉乐车间看板',
      key: 'RnC278p43dI=',
      logo: '',
      time: 15000,
      byGroup: true,
      group: [
        { id: 2, title: '宁波嘉乐注塑一课车间看板' },
        { id: 5, title: '宁波嘉乐配件课车间看板' }
      ]
    },
    // 杰祥看板
    155: {
      title: '车间看板',
      key: 'YwsEAEz1ODU=',
      logo: '',
      time: 15000,
      byGroup: true,
      group: [
        { id: 8, title: '螺母车间看板' },
        { id: 8, title: '螺母车间看板' },
        { id: 6, title: '丝杆车间看板' },
        { id: 8, title: '螺母车间看板' },
        { id: 6, title: '丝杆车间看板' },
        { id: 10, title: '滚牙车间看板' },
        { id: 6, title: '丝杆车间看板' },
        { id: 5, title: '滑块车间看板' },
        { id: 2, title: '导轨车间看板' },
        { id: 2, title: '导轨车间看板' }
      ]
    },
    // 白云内网看板
    146: {
      title: '白云车间看板',
      key: 'xzKhxIhYcKQ=',
      logo: 'by',
      time: 15000,
      byGroup: true,
      group: [
        { id: 16, title: '白云一楼车间看板' },
        { id: 17, title: '白云二楼车间看板' }
      ]
    },
    179: {
      title: '百事宝车间看板',
      bgTitle: '百事宝数字化车间大屏',
      key: 'iZMPJ8bzexk=',
      logo: 'by',
      time: 15000,
      byGroup: true,
      group: [
        { id: '2,3,4,5,6,7,8,9,10,11,12,13,14', title: '百事宝车间看板' },
        { id: '2,3,4,5,6,7,8,9,10,11,12,13,14', title: '百事宝车间看板' }
      ]
    },
    184: {
      title: '海川车间看板',
      bgTitle: '',
      key: 'TFM6x8r3YTA=',
      logo: '',
      time: 15000,
      byGroup: true,
      group: [
        { id: '2,4,5,6,7', title: '海川车间看板' },
        { id: '2,4,5,6,7', title: '海川车间看板' }
      ]
    },
    185: {
      title: '实利合车间看板',
      bgTitle: '',
      key: 'ZLTkIXGfyy8=',
      logo: '',
      time: 15000,
      byGroup: true,
      group: [
        { id: 2, title: '实利合车间看板' },
        { id: 2, title: '实利合车间看板' },
        { id: 2, title: '实利合车间看板' }
      ]
    },
    182: {
      title: '润轴科技车间看板',
      bgTitle: '',
      key: '6p4ttR0ReYQ=',
      logo: 'runzhou',
      time: 60000,
      byGroup: true,
      group: [
        { id: '2,4,5,6,7', title: '润轴科技汇总看板', showRun: true },
        { id: '2', title: '精工车间1看板' },
        { id: '4', title: '精工车间2看板' },
        { id: '5', title: '扭杆车间看板' },
        { id: '2,4,5,6,7', title: '设备组看板' }
      ]
    },
    190: {
      title: '信维通信车间看板',
      bgTitle: '',
      key: 'ppZzJyJ8i0c=',
      logo: '',
      time: 15000,
      byGroup: true,
      group: [
        { id: '3', title: '613-25305-1#', code: '00000190_00000005' },
        { id: '10', title: '613-25305-2#', code: '00000190_00000012' },
        { id: '11', title: '613-28031-1#', code: '00000190_00000015' },
        { id: '12', title: '613-28031-2#', code: '00000190_00000026' },
        { id: '15', title: '613-26492-1#', code: '00000190_00000019' },
        { id: '16', title: '613-26492-2#', code: '00000190_00000023' },
        { id: '3,10,11,12,15,16', allId: '2', title: 'IMP汇总看板' },
        { id: '18', title: 'SCADA-冲压车间看板' },
        { id: '19', title: 'SCADA-注塑车间看板' },
        { id: '20', title: 'SCADA-组装车间看板' }
      ]
    }
    // 188: { title: '', bgTitle: '宁波天仑—球冠电缆股份', key: '9zUDQT2PESY=', logo: '', time: 15000 }, // 天仑——球管电缆
    // 189: { title: '', bgTitle: '宁波天仑—富强鑫机械制造', key: 'oKeZjaNASNg=', logo: '', time: 15000 }, // 天仑——球管电缆
    // 190: { title: '', bgTitle: '宁波天仑—拓普集团', key: 'ppZzJyJ8i0c=', logo: '', time: 15000 }, // 天仑——球管电缆
    // 191: { title: '', bgTitle: '宁波天仑—万里学院', key: '7KqiAnKhqR0=', logo: '', time: 15000 }, // 天仑——球管电缆
    // 192: { title: '', bgTitle: '宁波天仑—奇亚新能源', key: '+oo6M2QfOyI=', logo: '', time: 15000 }, // 天仑——球管电缆
    // 193: { title: '', bgTitle: '宁波天仑—永久磁业', key: 'e+3AewCrMcQ=', logo: '', time: 15000 }, // 天仑——球管电缆
    // 194: { title: '', bgTitle: '宁波天仑—大承精密机械', key: 'XfWn313nlow=', logo: '', time: 15000 }, // 天仑——球管电缆
    // 195: { title: '', bgTitle: '宁波天仑—施捷电子', key: 'f0Tqdwap+Go=', logo: '', time: 15000 }, // 天仑——球管电缆
    // 196: { title: '', bgTitle: '宁波天仑—旭升集团', key: 'omUjdyo38Ag=', logo: '', time: 15000 }, // 天仑——球管电缆
    // 197: { title: '', bgTitle: '宁波天仑—美亚特精密', key: 'IMGrGO0467Q=', logo: '', time: 15000 } // 天仑——球管电缆
  },
  // 设备实况 - 参数信息 - 参数统计报表与特殊参数统计 为true：展示特殊参数图标 false：展示参数统计报表
  SPECIAL_PARAM: {
    170: true
  },
  // 是否为安灯
  ISANDON: false,
  ISXINWEI: false
};
