interface IPreferences {
  langFirst: string;
  langSecond: string;
  defaultServiceProvider: TransServiceProviderTp;
  googleFreeTLD: GoogleFreeAPITLD;
  googleApiKey: string;
  disableGoogleCould: boolean;
  deeplAuthKey: string;
  deeplApiPro: boolean;
  disableDeepL: boolean;
  microsoftAccessKey: string;
  microsoftAPIEndpoint: string;
  microsoftRegion: string;
  disableMicrosoft: boolean;
  youdaoAppId: string;
  youdaoAppKey: string;
  disableYoudao: boolean;
  baiduAppId: string;
  baiduAppKey: string;
  disableBaidu: boolean;
  tencentAppId: string;
  tencentAppKey: string;
  disableTencent: boolean;
  aliyunAccessKeyId: string;
  aliyunAccessKeySecret: string;
  disableAliyun: boolean;
  selectedDefault: boolean;
  quickSwitchLang: boolean;
  delayTransInterval: number;
  enableHistory: boolean;
  historyLimit: number;
}

interface ILangItem {
  langId: string;
  deeplLangId?: string;
  baiduLangId?: string;
  tencentLangId?: string;
  youdaoLangId?: string;
  aliyunLangId?: string;
  microsoftLangId?: string;
  langTitle: string;
  voice?: string;
}

interface ITranslateRes {
  serviceProvider: TransServiceProviderTp;
  code: TransAPIErrCode;
  from: ILangItem;
  to: ILangItem;
  origin: string;
  res: string;
  start?: number;
  end?: number;
  fromPhonetic?: string;
  targetExplains?: string[];
  derivatives?: DerivativeItem[];
  isWord?: boolean;
  phonetic?: string;
}

interface DerivativeItem {
  key: string;
  value: string[];
}

interface ITransServiceProvider {
  appId: string;
  appKey: string;
  serviceProvider: TransServiceProviderTp;
}

interface IGoogleTranslateResult {
  text: string;
  from: {
    language: {
      iso: string;
    };
  };
}

interface IGoogleCloudTranslateResult {
  translations: IGoogleCloudTranslateItem[];
}

interface IGoogleCloudTranslateItem {
  translatedText: string;
  detectedSourceLanguage: string;
}

interface IDeepLTranslateResult {
  translations: IDeepLTranslateItem[];
}

interface IDeepLTranslateItem {
  detected_source_language: string;
  text: string;
}

interface IMicrosoftAzureTranslateResult {
  detectedLanguage: {
    language: string;
  };
  translations: IMicrosoftAzureTranslateItem[];
}

interface IMicrosoftAzureTranslateItem {
  text: string;
}

interface IYouDaoTranslateResult {
  l: string;
  query: string;
  returnPhrase: [];
  errorCode: string;
  translation: string[];
  web?: DerivativeItem[];
  basic?: ITranslateResultBasicItem;
  isWord: boolean;
}

interface ITranslateResultBasicItem {
  explains: string[];
  phonetic?: string;
}

interface IBaiduTranslateResult {
  from: string;
  to: string;
  errorCode: string;
  trans_result: IBaiduTranslateItem[];
  dict: string;
}

interface IBaiduTranslateItem {
  src: string;
  dst: string;
}

interface ITencentTranslateResult {
  Response: ITencentTranslateResponse;
}

interface ITencentTranslateResponse {
  Source: string;
  Target: string;
  TargetText: string;
  Error: {
    Code: string;
  };
}

interface IAliyunTransResponse {
  Data: {
    WordCount: string;
    Translated: string;
  };
  Code: string;
}

interface IAliyunDetectLangResponse {
  DetectedLanguage: string;
}

interface TransHistory {
  time: number;
  from: string;
  to: string;
  text: string;
  transList: {
    serviceProvider: TransServiceProviderTp;
    res: string;
  }[];
}
