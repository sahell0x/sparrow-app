import type {
  ActiveSyncWrapper,
  DescriptionWrapper,
  IdWrapper,
  IndexWrapper,
  IsActiveWrapper,
  IsDeletedWrapper,
  IsSavedWrapper,
  NameWrapper,
  PathWrapper,
  SourceWrapper,
  TabIdWrapper,
  TimestampWrapper,
  TypeWrapper,
} from "./common";

export enum AuthTypeEnum {
  NO_AUTH = "No Auth",
  API_KEY = "API Key",
  BEARER_TOKEN = "Bearer Token",
  BASIC_AUTH = "Basic Auth",
}

export enum AuthSectionEnum {
  HEADER = "Header",
  QUERY_PARAMETER = "Query Parameter",
  COOKIES = "Cookies",
}
export enum RequestMethodEnum {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
  HEAD = "HEAD",
  OPTIONS = "OPTIONS",
}
export enum RequestDataTypeEnum {
  JSON = "JSON",
  XML = "XML",
  HTML = "HTML",
  TEXT = "Text",
  JAVASCRIPT = "JavaScript",
  IMAGE = "Image",
}
export enum RequestSectionEnum {
  PARAMETERS = "Parameters",
  AUTHORIZATION = "Authorization",
  HEADERS = "Headers",
  REQUEST_BODY = "Request Body",
  DOCUMENTATION = "Description",
}

export enum MessageTypeEnum {
  SENDER = "Sender",
  RECEIVER = "Receiver",
}

export enum ResponseFormatterEnum {
  PRETTY = "Pretty",
  RAW = "Raw",
  PREVIEW = "Preview",
  VISUALIZE = "Visualize",
}
export enum ResponseSectionEnum {
  RESPONSE = "Response",
  HEADERS = "Headers",
}

export enum RequestDatasetEnum {
  FORMDATA = "Form Data",
  URLENCODED = "URL Encoded",
  RAW = "Raw",
  NONE = "None",
}

export enum FormDataTypeEnum {
  TEXT = "text",
  FILE = "file",
}

export enum UntrackedItemsEnum {
  UNTRACKED = "UNTRACKED-",
}

export interface KeyWrapper {
  key: string;
}
export interface ValueWrapper {
  value: string;
}
export interface CheckedWrapper {
  checked: boolean;
}

export interface UrlWrapper {
  url: string;
}

export interface KeyValue extends KeyWrapper, ValueWrapper {}
export interface KeyValueChecked
  extends KeyWrapper,
    ValueWrapper,
    CheckedWrapper {}

export interface SocketBodyLanguageWrapper {
  socketBodyLanguage: RequestDataTypeEnum.TEXT;
}
export interface SocketNavigationWrapper {
  socketNavigation: RequestSectionEnum.PARAMETERS;
}
export interface SocketLeftSplitterWidthPercentageWrapper {
  socketLeftSplitterWidthPercentage: 50;
}
export interface SocketRightSplitterWidthPercentageWrapper {
  socketRightSplitterWidthPercentage: 50;
}
export interface IsSaveSocketInProgressWrapper {
  isSaveSocketInProgress: false;
}
export interface IsParameterBulkEditActiveWrapper {
  isParameterBulkEditActive: false;
}
export interface IsHeaderBulkEditActiveWrapper {
  isHeaderBulkEditActive: false;
}
export interface State
  extends SocketBodyLanguageWrapper,
    SocketNavigationWrapper,
    SocketLeftSplitterWidthPercentageWrapper,
    SocketRightSplitterWidthPercentageWrapper,
    IsSaveSocketInProgressWrapper,
    IsParameterBulkEditActiveWrapper,
    IsHeaderBulkEditActiveWrapper {}

export interface StatePartial
  extends Partial<SocketBodyLanguageWrapper>,
    Partial<SocketNavigationWrapper>,
    Partial<SocketLeftSplitterWidthPercentageWrapper>,
    Partial<SocketRightSplitterWidthPercentageWrapper>,
    Partial<IsSaveSocketInProgressWrapper>,
    Partial<IsParameterBulkEditActiveWrapper>,
    Partial<IsHeaderBulkEditActiveWrapper> {}

export interface StateWrapper {
  state: State;
}

export interface HeadersWrapper {
  headers: KeyValueChecked[];
}

export interface QueryParamsWrapper {
  queryParams: KeyValueChecked[];
}
export interface AutoGeneratedHeadersWrapper {
  autoGeneratedHeaders: KeyValueChecked[];
}

export interface WebSocket
  extends QueryParamsWrapper,
    AutoGeneratedHeadersWrapper,
    StateWrapper,
    UrlWrapper,
    HeadersWrapper {}

export enum WebSocketDefault {
  NAME = "New Web Socket",
}

export interface WebSocketTab
  extends ActiveSyncWrapper,
    DescriptionWrapper,
    IdWrapper,
    IndexWrapper,
    IsActiveWrapper,
    IsDeletedWrapper,
    IsSavedWrapper,
    NameWrapper,
    PathWrapper,
    SourceWrapper,
    TabIdWrapper,
    TimestampWrapper,
    TypeWrapper {
  property: {
    websocket: WebSocket;
  };
}
