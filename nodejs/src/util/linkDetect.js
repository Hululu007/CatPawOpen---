export const isAliLink = (shareUrl) => /www.alipan.com|www.aliyundrive.com/.test(shareUrl)
export const isQuarkLink = (shareUrl) => shareUrl.includes('https://pan.quark.cn')
export const isUcLink = (shareUrl) => shareUrl.includes('https://drive.uc.cn')
export const isTyLink = (shareUrl) => shareUrl.includes('https://cloud.189.cn')
export const isYdLink = (shareUrl) => shareUrl.includes('yun.139.com')
export const is123Link = (shareUrl) => /www.123684.com|www.123865.com|www.123912.com|www.123pan.com|www.123pan.cn|www.123592.com/.test(shareUrl)
export const is115Link = (shareUrl) => /115.com|anxia.com|115cdn.com/.test(shareUrl)