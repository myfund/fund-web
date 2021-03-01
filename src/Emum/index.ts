export enum FundKeyZh {
  dwjz = '单位净值',
  fundcode = '代码',
  gsz = '估算值',
  gszzl = '估算值涨落',
  gztime = '估值时间',
  name = '名称',
  jzrq = '净值日期',
  shortcut = '简称',
  type = '类型',
  my_dwjz = '我的单位净值',
  buyAndHoldReturn = '持有收益率',
}

export enum TSDKeyZh {
  SHARP1 = '近一年\n夏普比率',
  STDDEV1 = '近一年\n波动率',
  MAXRETRA1 = '近一年\n最大回撤',

  DTCOUNT_Y = '近一月\n定投人数',
  FFAVORCOUNT = '加自选总人数',
  PV_Y = '近一月访问量',
  AVGHOLD = '用户平均持有时长(天)',

  PROFIT_1N = '持有一年\n收益概率',
  PROFIT_3Y = '持有三月\n收益概率',
  PROFIT_6Y = '持有六月\n收益概率',
  PROFIT_Y = '持有一月\n收益概率',

  SYL_1N = '近一年\n收益率',
  // 收益回撤比 SYL_1N /  MAXRETRA1
}

export enum FundListKey {
  fundcode,
  shortcut,
  name,
  type,
}

export const FundHolingKey = [
  '序号',
  '股票代码',
  '股票名称',
  '占净值比例',
  '持股数(万股)',
  '持仓市值(万元)',
];

export const ZQHolingKey = ['序号', '债券代码', '债券名称', '占净值比例', '持仓市值(万元)'];
