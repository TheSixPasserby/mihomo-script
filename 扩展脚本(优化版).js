// ===========================================
// 1. 常量与配置定义
// ===========================================

const test_interval = 300;
const test_tolerance = 50;

// 基础策略组配置
const groupBaseOption = {
  "interval": 300,
  "timeout": 3000,
  "url": "https://www.google.com/generate_204",
  "lazy": true,
  "max-failed-times": 3,
  "hidden": false
};

// 地区配置（支持正则匹配与图标）
const regionConfig = [
  {
      name: "🇺🇸 美国 📶",
      matcher: "美国|🇺🇸|US|United States|America",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/us.svg"
  },
  {
      name: "🇯🇵 日本 📶",
      matcher: "日本|🇯🇵|JP|Japan",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/jp.svg"
  },
  {
      name: "🇰🇷 韩国 📶",
      matcher: "韩|🇰🇷|kr|korea",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/kr.svg"
  },
  {
      name: "🇸🇬 新加坡 📶",
      matcher: "新加坡|🇸🇬|SG|狮城|Singapore",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/sg.svg"
  },
  {
      name: "🇭🇰 香港 📶",
      matcher: "香港|🇭🇰|HK|Hong Kong|HongKong",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/hk.svg"
  },
  {
      name: "🇹🇼 台湾 📶",
      matcher: "台湾|🇹🇼|tw|taiwan|tai wan",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/tw.svg"
  },
  {
      name: "🇬🇧 英国 📶",
      matcher: "英|🇬🇧|uk|united kingdom|great britain",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/gb.svg"
  },
  {
      name: "🇫🇷 法国 📶",
      matcher: "法国|🇫🇷|FR|France",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/fr.svg"
  },
  {
      name: "🇩🇪 德国 📶",
      matcher: "德国|🇩🇪|DE|germany",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/de.svg"
  },
  {
      name: "🇵🇱 波兰 📶",
      matcher: "波兰|🇵🇱|Poland|PL|Poland",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/pl.svg"
  },
  {
      name: "🇳🇱 荷兰 📶",
      matcher: "荷兰|🇳🇱|NL|Netherlands",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/nl.svg"
  },
  {
      name: "🇮🇪 爱尔兰 📶",
      matcher: "爱尔兰|🇮🇪|IE|Ireland",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ie.svg"
  },
  {
      name: "🇸🇪 瑞典 📶",
      matcher: "瑞典|🇸🇪|SE|Sweden",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/se.svg"
  },
  {
      name: "🇷🇺 俄罗斯 📶",
      matcher: "俄罗斯|🇷🇺|RU|Russia",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ru.svg"
  },
  {
      name: "🇮🇹 意大利 📶",
      matcher: "意大利|🇮🇹|IT|Italy",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/it.svg"
  },
  {
      name: "🇪🇸 西班牙 📶",
      matcher: "西班牙|🇪🇸|ES|Spain",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/es.svg"
  },
  {
      name: "🇵🇹 葡萄牙 📶",
      matcher: "葡萄牙|🇵🇹|PT|Portugal",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/pt.svg"
  },
  {
      name: "🇹🇷 土耳其 📶",
      matcher: "土耳其|🇹🇷|TR|Turkey",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/tr.svg"
  },
  {
      name: "🇦🇷 阿根廷 📶",
      matcher: "阿根廷|🇦🇷|AR|Argentina",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ar.svg"
  },
  {
      name: "🇨🇦 加拿大 📶",
      matcher: "加拿大|🇨🇦|CA|Canada",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ca.svg"
  },
  {
      name: "🇦🇺 澳大利亚 📶",
      matcher: "澳大利亚|🇦🇺|AU|Australia",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/au.svg"
  },
  {
      name: "🇮🇷 伊朗 📶",
      matcher: "伊朗|🇮🇷|IR|Iran",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ir.svg"
  },
  {
      name: "🇮🇩 印度尼西 📶",
      matcher: "印度尼西亚|印尼|🇮🇩|ID|Indonesia",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/id.svg"
  },
  {
      name: "🇲🇾 马来西亚 📶",
      matcher: "马来|🇲🇾|MY|Malaysia",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/my.svg"
  },
  {
      name: "🇵🇭 菲律宾 📶",
      matcher: "菲律宾|🇵🇭|PH|Philippines",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/ph.svg"
  },
  {
      name: "🇮🇳 印度 📶",
      matcher: "印度|🇮🇳|IN|India",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/in.svg"
  },
  {
      name: "🇻🇳 越南 📶",
      matcher: "越南|🇻🇳|VN|Vietnam",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/vn.svg"
  },
  {
      name: "🇹🇭 泰国 📶",
      matcher: "泰国|🇹🇭|TH|Thailand",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/th.svg"
  },
  {
      name: "🇨🇳 中国 📶",
      matcher: "中国|🇨🇳|CN|cn|china",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flags/cn.svg"
  },
  {
      name: "🌐 其他 📶",
      icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/Global.png"
  }
];

// DNS 服务器定义
const domesticNameservers = [
  "https://223.5.5.5/dns-query", 
  "https://doh.pub/dns-query" 
];
const foreignNameservers = [
  "https://208.67.222.222/dns-query", 
  "https://77.88.8.8/dns-query", 
  "https://1.1.1.1/dns-query", 
  "https://8.8.4.4/dns-query", 
];

// DNS 配置
const dnsConfig = {
  "enable": true,
  "listen": "0.0.0.0:1053",
  "ipv6": false,
  "prefer-h3": false,
  "respect-rules": true,
  "use-system-hosts": false,
  "cache-algorithm": "arc",
  "enhanced-mode": "fake-ip",
  "fake-ip-range": "198.18.0.1/16",
  "fake-ip-filter": [
    "+.lan", "+.local", "+.msftconnecttest.com", "+.msftncsi.com",
    "localhost.ptlogin2.qq.com", "localhost.sec.qq.com",
    "+.in-addr.arpa", "+.ip6.arpa", "time.*.com", "time.*.gov",
    "pool.ntp.org", "localhost.work.weixin.qq.com"
  ],
  "default-nameserver": ["223.5.5.5","1.2.4.8"],
  "nameserver": [...foreignNameservers],
  "proxy-server-nameserver":[...domesticNameservers],
  "direct-nameserver":[...domesticNameservers],
  "nameserver-policy": {
    "geosite:private,cn": domesticNameservers
  }
};

// 规则集 (Rule Providers) 配置
const ruleProviderCommon = { "type": "http", "format": "yaml", "interval": 86400 };
const ruleProviders = {
  "reject": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/reject.txt", "path": "./ruleset/loyalsoldier/reject.yaml" },
  "icloud": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/icloud.txt", "path": "./ruleset/loyalsoldier/icloud.yaml" },
  "apple": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/apple.txt", "path": "./ruleset/loyalsoldier/apple.yaml" },
  "google": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/google.txt", "path": "./ruleset/loyalsoldier/google.yaml" },
  "proxy": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/proxy.txt", "path": "./ruleset/loyalsoldier/proxy.yaml" },
  "direct": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/direct.txt", "path": "./ruleset/loyalsoldier/direct.yaml" },
  "private": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/private.txt", "path": "./ruleset/loyalsoldier/private.yaml" },
  "gfw": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/gfw.txt", "path": "./ruleset/loyalsoldier/gfw.yaml" },
  "tld-not-cn": { ...ruleProviderCommon, "behavior": "domain", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/tld-not-cn.txt", "path": "./ruleset/loyalsoldier/tld-not-cn.yaml" },
  "telegramcidr": { ...ruleProviderCommon, "behavior": "ipcidr", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/telegramcidr.txt", "path": "./ruleset/loyalsoldier/telegramcidr.yaml" },
  "cncidr": { ...ruleProviderCommon, "behavior": "ipcidr", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/cncidr.txt", "path": "./ruleset/loyalsoldier/cncidr.yaml" },
  "lancidr": { ...ruleProviderCommon, "behavior": "ipcidr", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/lancidr.txt", "path": "./ruleset/loyalsoldier/lancidr.yaml" },
  "applications": { ...ruleProviderCommon, "behavior": "classical", "url": "https://fastly.jsdelivr.net/gh/Loyalsoldier/clash-rules@release/applications.txt", "path": "./ruleset/loyalsoldier/applications.yaml" },
  "bahamut": { ...ruleProviderCommon, "behavior": "classical", "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Bahamut.txt", "path": "./ruleset/xiaolin-007/bahamut.yaml" },
  "SteamCN": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/SteamCN/SteamCN.yaml", "path": "./ruleset/blackmatrix7/SteamCN.yaml" },
  "Steam": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/rule/Clash/Steam/Steam.yaml", "path": "./ruleset/blackmatrix7/Steam.yaml" },
  "DMMGames": { ...ruleProviderCommon, "behavior": "classical", "url": "https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/refs/heads/master/rule/Clash/DMM/DMM.yaml", "path": "./ruleset/blackmatrix7/DMM.yaml" },
  "YouTube": { ...ruleProviderCommon, "behavior": "classical", "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/YouTube.txt", "path": "./ruleset/xiaolin-007/YouTube.yaml" },
  "Netflix": { ...ruleProviderCommon, "behavior": "classical", "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Netflix.txt", "path": "./ruleset/xiaolin-007/Netflix.yaml" },
  "Spotify": { ...ruleProviderCommon, "behavior": "classical", "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/Spotify.txt", "path": "./ruleset/xiaolin-007/Spotify.yaml" },
  "BilibiliHMT": { ...ruleProviderCommon, "behavior": "classical", "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/BilibiliHMT.txt", "path": "./ruleset/xiaolin-007/BilibiliHMT.yaml" },
  "AI": { ...ruleProviderCommon, "behavior": "classical", "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/AI.txt", "path": "./ruleset/xiaolin-007/AI.yaml" },
  "TikTok": { ...ruleProviderCommon, "behavior": "classical", "url": "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/rule/TikTok.txt", "path": "./ruleset/xiaolin-007/TikTok.yaml" },
};

// 规则列表
const rules = [
  "DOMAIN-SUFFIX,googleapis.cn,手动选择", "DOMAIN-SUFFIX,gstatic.com,手动选择",
  "DOMAIN-SUFFIX,xn--ngstr-lra8j.com,手动选择", "DOMAIN-SUFFIX,github.io,手动选择",
  "DOMAIN,v2rayse.com,手动选择", "RULE-SET,applications,全局直连",
  "RULE-SET,private,全局直连", "RULE-SET,reject,广告过滤",
  "RULE-SET,icloud,微软服务", "RULE-SET,apple,苹果服务",
  "RULE-SET,YouTube,YouTube", "RULE-SET,Netflix,Netflix",
  "RULE-SET,bahamut,动画疯", "RULE-SET,SteamCN,Steam下载",
  "RULE-SET,Steam,Steam商店", "RULE-SET,DMMGames,DMM Games",
  "RULE-SET,Spotify,Spotify", "RULE-SET,BilibiliHMT,哔哩哔哩港澳台",
  "RULE-SET,AI,AI", "RULE-SET,TikTok,TikTok",
  "RULE-SET,google,谷歌服务", "RULE-SET,proxy,手动选择",
  "RULE-SET,gfw,手动选择", "RULE-SET,tld-not-cn,手动选择",
  "RULE-SET,direct,全局直连", "RULE-SET,lancidr,全局直连,no-resolve",
  "RULE-SET,cncidr,全局直连,no-resolve", "RULE-SET,telegramcidr,电报消息,no-resolve",
  "GEOSITE,CN,全局直连", "GEOIP,LAN,全局直连,no-resolve",
  "GEOIP,CN,全局直连,no-resolve", "MATCH,漏网之鱼"
];

// ===========================================
// 2. 核心处理函数：动态注入地区与优化分组
// ===========================================

function addRegions(config) {
  let regions = []; // 存储生成的有效地区组名
  const providers = config["proxy-providers"] ? Object.keys(config["proxy-providers"]) : [];
  const proxies = Array.isArray(config.proxies) ? config.proxies.map(p => p.name) : [];

  // 如果没有节点，直接返回
  if (providers.length === 0 && proxies.length === 0) return;

  // 1. 预编译正则，提升匹配性能
  const compiledRegions = regionConfig.map(r => ({
    ...r,
    reg: r.matcher ? new RegExp(r.matcher, "i") : null
  }));

  // 2. 遍历并生成地区测速组 (url-test)
  for (const region of compiledRegions) {
    if (!region.reg) continue; 

    // 创建测速组对象
    const group = {
      ...groupBaseOption,
      name: region.name,
      type: "url-test",
      interval: test_interval,
      tolerance: test_tolerance,
      icon: region.icon
    };

    // 填充节点
    if (providers.length > 0) {
      group.use = providers;
      group.filter = region.matcher;
    } else {
      group.proxies = proxies.filter(n => region.reg.test(n));
    }

    // 【优化】仅当该地区确实存在有效节点时，才添加该分组
    if (group.use || (group.proxies && group.proxies.length > 0)) {
      config["proxy-groups"].push(group);
      regions.push(region.name);
    }
  }

  // 3. 生成“地区选择”汇总组，并将其注入到业务分组中
  if (regions.length > 0) {
    // 插入 "地区选择" 组 (type: select)
    config["proxy-groups"].splice(1, 0, {
      ...groupBaseOption,
      name: "地区选择",
      type: "select",
      proxies: regions,
      icon: "https://fastly.jsdelivr.net/gh/Koolson/Qure@master/IconSet/Color/World_Map.png",
    });

    // 4. 动态更新所有业务分组的节点列表
    config["proxy-groups"].forEach(group => {
      // 排除不需要注入的系统保留组
      const reserved = ["广告过滤", "全局拦截", "手动选择", "自动优选", "地区选择", ...regions];
      
      // 如果不在保留列表中，则认为是业务组 (如 YouTube, Google 等)
      if (!reserved.includes(group.name) && group.proxies) {
        // 重构节点列表，顺序：手动 -> 自动 -> 地区总开关 -> 各地区自动 -> (直连)
        // Set 去重防止重复添加
        group.proxies = [...new Set([
            "手动选择", 
            "⚡ 自动优选", 
            "地区选择", 
            ...regions, 
            ...group.proxies
        ])];
      }
    });
  }
}

// ===========================================
// 3. 主程序入口
// ===========================================

function main(config) {
  const proxyCount = config?.proxies?.length ?? 0;
  const proxyProviderCount = typeof config?.["proxy-providers"] === "object" ? Object.keys(config["proxy-providers"]).length : 0;
  
  if (proxyCount === 0 && proxyProviderCount === 0) {
    throw new Error("配置文件中未找到任何代理节点");
  }

  // 覆盖 DNS 配置
  config["dns"] = dnsConfig;

  // 定义基础代理组结构
  config["proxy-groups"] = [
    {
      ...groupBaseOption,
      name: "手动选择",
      type: "select",
      "include-all": true,
      filter: "^(?!.*(官网|套餐|流量|异常|剩余)).*$",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/adjust.svg"
    },
    {
      ...groupBaseOption,
      name: "⚡ 自动优选",
      type: "url-test",
      "include-all": true,
      filter: "^(?!.*(官网|套餐|流量|异常|剩余)).*$",
      icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/flash.svg"
    },
    // 业务分组（初始只定义基础项，addRegions 会自动注入地区）
    { ...groupBaseOption, name: "谷歌服务", type: "select", proxies: ["全局直连"], icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/google.svg" },
    { ...groupBaseOption, name: "YouTube", type: "select", proxies: ["全局直连"], icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/youtube.svg" },
    { ...groupBaseOption, name: "Netflix", type: "select", proxies: ["全局直连"], icon: "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/netflix.svg" },
    { ...groupBaseOption, name: "电报消息", type: "select", proxies: ["全局直连"], icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/telegram.svg" },
    { ...groupBaseOption, name: "AI", type: "select", proxies: [], icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/chatgpt.svg" },
    { ...groupBaseOption, name: "TikTok", type: "select", proxies: [], icon: "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/tiktok.svg" },
    { ...groupBaseOption, name: "微软服务", type: "select", proxies: ["全局直连"], icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/microsoft.svg" },
    { ...groupBaseOption, name: "苹果服务", type: "select", proxies: ["全局直连"], icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/apple.svg" },
    { ...groupBaseOption, name: "动画疯", type: "select", proxies: [], filter: "(?i)台|tw|TW", icon: "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/Bahamut.svg" },
    { ...groupBaseOption, name: "Steam下载", type: "select", proxies: ["全局直连"], icon: "https://www.svgrepo.com/show/528953/download-square.svg" },
    { ...groupBaseOption, name: "Steam商店", type: "select", proxies: ["全局直连"], icon: "https://upload.wikimedia.org/wikipedia/commons/8/83/Steam_icon_logo.svg" },
    { ...groupBaseOption, name: "DMM Games", type: "select", proxies: ["全局直连"], icon: "https://www.svgrepo.com/show/246314/gamepad.svg" },
    { ...groupBaseOption, name: "哔哩哔哩港澳台", type: "select", proxies: ["全局直连"], icon: "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/bilibili.svg" },
    { ...groupBaseOption, name: "Spotify", type: "select", proxies: ["全局直连"], icon: "https://fastly.jsdelivr.net/gh/xiaolin-007/clash@main/icon/spotify.svg" },
    
    // 功能分组
    { ...groupBaseOption, name: "广告过滤", type: "select", proxies: ["REJECT", "DIRECT"], icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/bug.svg" },
    { ...groupBaseOption, name: "全局直连", type: "select", proxies: ["DIRECT", "手动选择", "⚡ 自动优选"], icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/link.svg" },
    { ...groupBaseOption, name: "全局拦截", type: "select", proxies: ["REJECT", "DIRECT"], icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/block.svg" },
    { ...groupBaseOption, name: "漏网之鱼", type: "select", proxies: ["手动选择", "⚡ 自动优选", "全局直连"], icon: "https://fastly.jsdelivr.net/gh/clash-verge-rev/clash-verge-rev.github.io@main/docs/assets/icons/fish.svg" }
  ];

  // 覆盖规则配置
  config["rule-providers"] = ruleProviders;
  config["rules"] = rules;

  // 执行地区注入与逻辑优化
  addRegions(config);

  // 开启 UDP 转发（针对游戏和语音通话优化）
  if(config["proxies"]) {
    config["proxies"].forEach(p => p.udp = true);
  }

  return config;
}