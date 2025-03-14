// https://cloud.google.com/translate/docs/languages

const zh = [
    { name: '简体中文', key: 'zh' },
    { name: '繁体中文', key: 'zh-TW' },
    { name: '英语', key: 'en' },
    { name: '南非荷兰语', key: 'af' },
    { name: '阿尔巴尼亚语', key: 'sq' },
    { name: '阿姆哈拉语', key: 'am' },
    { name: '阿拉伯语', key: 'ar' },
    { name: '亚美尼亚语', key: 'hy' },
    { name: '阿塞拜疆语', key: 'az' },
    { name: '巴斯克语', key: 'eu' },
    { name: '白俄罗斯语', key: 'be' },
    { name: '孟加拉语', key: 'bn' },
    { name: '波斯尼亚语', key: 'bs' },
    { name: '保加利亚语', key: 'bg' },
    { name: '加泰罗尼亚语', key: 'ca' },
    { name: '宿务语', key: 'ceb' },
    { name: '科西嘉语', key: 'co' },
    { name: '克罗地亚语', key: 'hr' },
    { name: '捷克语', key: 'cs' },
    { name: '丹麦语', key: 'da' },
    { name: '荷兰语', key: 'nl' },
    { name: '世界语', key: 'eo' },
    { name: '爱沙尼亚语', key: 'et' },
    { name: '芬兰语', key: 'fi' },
    { name: '法语', key: 'fr' },
    { name: '弗里斯兰语', key: 'fy' },
    { name: '加利西亚语', key: 'gl' },
    { name: '格鲁吉亚语', key: 'ka' },
    { name: '德语', key: 'de' },
    { name: '希腊语', key: 'el' },
    { name: '古吉拉特语', key: 'gu' },
    { name: '海地克里奥尔语', key: 'ht' },
    { name: '豪萨语', key: 'ha' },
    { name: '夏威夷语', key: 'haw' },
    { name: '希伯来语', key: 'he' },
    { name: '印地语', key: 'hi' },
    { name: '苗语', key: 'hmn' },
    { name: '匈牙利语', key: 'hu' },
    { name: '冰岛语', key: 'is' },
    { name: '伊博语', key: 'ig' },
    { name: '印度尼西亚语', key: 'id' },
    { name: '爱尔兰语', key: 'ga' },
    { name: '意大利语', key: 'it' },
    { name: '日语', key: 'ja' },
    { name: '爪哇语', key: 'jw' },
    { name: '卡纳达语', key: 'kn' },
    { name: '哈萨克语', key: 'kk' },
    { name: '高棉文', key: 'km' },
    { name: '韩语', key: 'ko' },
    { name: '库尔德语', key: 'ku' },
    { name: '吉尔吉斯语', key: 'ky' },
    { name: '老挝语', key: 'lo' },
    { name: '拉丁文', key: 'la' },
    { name: '拉脱维亚语', key: 'lv' },
    { name: '立陶宛语', key: 'lt' },
    { name: '卢森堡语', key: 'lb' },
    { name: '马其顿语', key: 'mk' },
    { name: '马尔加什语', key: 'mg' },
    { name: '马来语', key: 'ms' },
    { name: '马拉雅拉姆文', key: 'ml' },
    { name: '马耳他语', key: 'mt' },
    { name: '毛利语', key: 'mi' },
    { name: '马拉地语', key: 'mr' },
    { name: '蒙古文', key: 'mn' },
    { name: '缅甸语', key: 'my' },
    { name: '尼泊尔语', key: 'ne' },
    { name: '挪威语', key: 'no' },
    { name: '尼杨扎语', key: 'ny' },
    { name: '普什图语', key: 'ps' },
    { name: '波斯语', key: 'fa' },
    { name: '波兰语', key: 'pl' },
    { name: '葡萄牙语', key: 'pt' },
    { name: '旁遮普语', key: 'pa' },
    { name: '罗马尼亚语', key: 'ro' },
    { name: '俄语', key: 'ru' },
    { name: '萨摩亚语', key: 'sm' },
    { name: '苏格兰盖尔语', key: 'gd' },
    { name: '塞尔维亚语', key: 'sr' },
    { name: '塞索托语', key: 'st' },
    { name: '修纳语', key: 'sn' },
    { name: '信德语', key: 'sd' },
    { name: '僧伽罗语', key: 'si' },
    { name: '斯洛伐克语', key: 'sk' },
    { name: '斯洛文尼亚语', key: 'sl' },
    { name: '索马里语', key: 'so' },
    { name: '西班牙语', key: 'es' },
    { name: '巽他语', key: 'su' },
    { name: '斯瓦希里语', key: 'sw' },
    { name: '瑞典语', key: 'sv' },
    { name: '塔加路语', key: 'tl' },
    { name: '塔吉克语', key: 'tg' },
    { name: '泰米尔语', key: 'ta' },
    { name: '泰卢固语', key: 'te' },
    { name: '泰文', key: 'th' },
    { name: '土耳其语', key: 'tr' },
    { name: '乌克兰语', key: 'uk' },
    { name: '乌尔都语', key: 'ur' },
    { name: '乌兹别克语', key: 'uz' },
    { name: '越南语', key: 'vi' },
    { name: '威尔士语', key: 'cy' },
    { name: '班图语', key: 'xh' },
    { name: '意第绪语', key: 'yi' },
    { name: '约鲁巴语', key: 'yo' },
    { name: '祖鲁语', key: 'zu' },
];

const en = [
    { name: 'English', key: 'en' },
    { name: 'Bengali', key: 'bn' },
    { name: 'Gujarati', key: 'gu' },
    { name: 'Hindi', key: 'hi' },
    { name: 'Kannada', key: 'kn' },
    { name: 'Malayalam', key: 'ml' },
    { name: 'Marathi', key: 'mr' },
    { name: 'Nepalese', key: 'ne' },
    { name: 'Oriya', key: 'or' },
    { name: 'Punjabi', key: 'pa' },
    { name: 'Sinhala', key: 'si' },
    { name: 'Tamil', key: 'ta' },
    { name: 'Telugu', key: 'te' },
    { name: 'Urdu', key: 'ur' },
];

const tr = [
    { name: 'Basitleştirilmiş Çince', key: 'zh' },
    { name: 'Geleneksel Çince', key: 'zh-TW' },
    { name: 'İngilizce', key: 'en' },
    { name: 'Afrikaanca', key: 'af' },
    { name: 'Arnavutça', key: 'sq' },
    { name: 'Amharca', key: 'am' },
    { name: 'Arapça', key: 'ar' },
    { name: 'Ermenice', key: 'hy' },
    { name: 'Azerbaycanca', key: 'az' },
    { name: 'Baskça', key: 'eu' },
    { name: 'Belarusça', key: 'be' },
    { name: 'Bengalce', key: 'bn' },
    { name: 'Boşnakça', key: 'bs' },
    { name: 'Bulgarca', key: 'bg' },
    { name: 'Katalanca', key: 'ca' },
    { name: 'Sabuanca', key: 'ceb' },
    { name: 'Korsikaca', key: 'co' },
    { name: 'Hırvatça', key: 'hr' },
    { name: 'Çekçe', key: 'cs' },
    { name: 'Danca', key: 'da' },
    { name: 'Felemenkçe', key: 'nl' },
    { name: 'Esperanto', key: 'eo' },
    { name: 'Estonca', key: 'et' },
    { name: 'Fince', key: 'fi' },
    { name: 'Fransızca', key: 'fr' },
    { name: 'Frizce', key: 'fy' },
    { name: 'Galiçyaca', key: 'gl' },
    { name: 'Gürcüce', key: 'ka' },
    { name: 'Almanca', key: 'de' },
    { name: 'Yunanca', key: 'el' },
    { name: 'Guceratça', key: 'gu' },
    { name: 'Haiti Kreyolu', key: 'ht' },
    { name: 'Hausaca', key: 'ha' },
    { name: 'Hawaii dili', key: 'haw' },
    { name: 'İbranice', key: 'he' },
    { name: 'Hintçe', key: 'hi' },
    { name: 'Hmong', key: 'hmn' },
    { name: 'Macarca', key: 'hu' },
    { name: 'İzlandaca', key: 'is' },
    { name: 'İgbo dili', key: 'ig' },
    { name: 'Endonezce', key: 'id' },
    { name: 'İrlandaca', key: 'ga' },
    { name: 'İtalyanca', key: 'it' },
    { name: 'Japonca', key: 'ja' },
    { name: 'Cava dili', key: 'jw' },
    { name: 'Kannada dili', key: 'kn' },
    { name: 'Kazakça', key: 'kk' },
    { name: 'Kmerce', key: 'km' },
    { name: 'Korece', key: 'ko' },
    { name: 'Kürtçe', key: 'ku' },
    { name: 'Kırgızca', key: 'ky' },
    { name: 'Laoca', key: 'lo' },
    { name: 'Latince', key: 'la' },
    { name: 'Letonca', key: 'lv' },
    { name: 'Litvanca', key: 'lt' },
    { name: 'Lüksemburgca', key: 'lb' },
    { name: 'Makedonca', key: 'mk' },
    { name: 'Malgaşça', key: 'mg' },
    { name: 'Malayca', key: 'ms' },
    { name: 'Malayalamca', key: 'ml' },
    { name: 'Maltaca', key: 'mt' },
    { name: 'Maorice', key: 'mi' },
    { name: 'Marathice', key: 'mr' },
    { name: 'Moğolca', key: 'mn' },
    { name: 'Birmanca', key: 'my' },
    { name: 'Nepalce', key: 'ne' },
    { name: 'Norveççe', key: 'no' },
    { name: 'Çevaca', key: 'ny' },
    { name: 'Peştuca', key: 'ps' },
    { name: 'Farsça', key: 'fa' },
    { name: 'Lehçe', key: 'pl' },
    { name: 'Portekizce', key: 'pt' },
    { name: 'Pencapça', key: 'pa' },
    { name: 'Rumence', key: 'ro' },
    { name: 'Rusça', key: 'ru' },
    { name: 'Samoaca', key: 'sm' },
    { name: 'İskoçça Gaelic', key: 'gd' },
    { name: 'Sırpça', key: 'sr' },
    { name: 'Sotho dili', key: 'st' },
    { name: 'Şona dili', key: 'sn' },
    { name: 'Since', key: 'sd' },
    { name: 'Sinhala dili', key: 'si' },
    { name: 'Slovakça', key: 'sk' },
    { name: 'Slovence', key: 'sl' },
    { name: 'Somalice', key: 'so' },
    { name: 'İspanyolca', key: 'es' },
    { name: 'Sundaca', key: 'su' },
    { name: 'Svahili', key: 'sw' },
    { name: 'İsveççe', key: 'sv' },
    { name: 'Tagalogca', key: 'tl' },
    { name: 'Tacikçe', key: 'tg' },
    { name: 'Tamilce', key: 'ta' },
    { name: 'Teluguca', key: 'te' },
    { name: 'Tayca', key: 'th' },
    { name: 'Türkçe', key: 'tr' },
    { name: 'Ukraynaca', key: 'uk' },
    { name: 'Urduca', key: 'ur' },
    { name: 'Özbekçe', key: 'uz' },
    { name: 'Vietnamca', key: 'vi' },
    { name: 'Galce', key: 'cy' },
    { name: 'bantu', key: 'xh' },
    { name: 'Yidiş', key: 'yi' },
    { name: 'Yoruba dili', key: 'yo' },
    { name: 'Zuluca', key: 'zu' },
];

const languages = {
    en,
    zh,
    'zh-cn': zh,
    'zh-tw': zh,
    tr,
};

export default languages;
