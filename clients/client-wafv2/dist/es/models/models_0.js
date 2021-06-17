import { __assign } from "tslib";
export var ActionValue;
(function (ActionValue) {
    ActionValue["ALLOW"] = "ALLOW";
    ActionValue["BLOCK"] = "BLOCK";
    ActionValue["COUNT"] = "COUNT";
})(ActionValue || (ActionValue = {}));
export var ActionCondition;
(function (ActionCondition) {
    /**
     * @internal
     */
    ActionCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActionCondition || (ActionCondition = {}));
export var All;
(function (All) {
    /**
     * @internal
     */
    All.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(All || (All = {}));
export var CustomHTTPHeader;
(function (CustomHTTPHeader) {
    /**
     * @internal
     */
    CustomHTTPHeader.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomHTTPHeader || (CustomHTTPHeader = {}));
export var CustomRequestHandling;
(function (CustomRequestHandling) {
    /**
     * @internal
     */
    CustomRequestHandling.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomRequestHandling || (CustomRequestHandling = {}));
export var AllowAction;
(function (AllowAction) {
    /**
     * @internal
     */
    AllowAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AllowAction || (AllowAction = {}));
export var AllQueryArguments;
(function (AllQueryArguments) {
    /**
     * @internal
     */
    AllQueryArguments.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AllQueryArguments || (AllQueryArguments = {}));
export var Body;
(function (Body) {
    /**
     * @internal
     */
    Body.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Body || (Body = {}));
export var BodyParsingFallbackBehavior;
(function (BodyParsingFallbackBehavior) {
    BodyParsingFallbackBehavior["EVALUATE_AS_STRING"] = "EVALUATE_AS_STRING";
    BodyParsingFallbackBehavior["MATCH"] = "MATCH";
    BodyParsingFallbackBehavior["NO_MATCH"] = "NO_MATCH";
})(BodyParsingFallbackBehavior || (BodyParsingFallbackBehavior = {}));
export var JsonMatchPattern;
(function (JsonMatchPattern) {
    /**
     * @internal
     */
    JsonMatchPattern.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JsonMatchPattern || (JsonMatchPattern = {}));
export var JsonMatchScope;
(function (JsonMatchScope) {
    JsonMatchScope["ALL"] = "ALL";
    JsonMatchScope["KEY"] = "KEY";
    JsonMatchScope["VALUE"] = "VALUE";
})(JsonMatchScope || (JsonMatchScope = {}));
export var JsonBody;
(function (JsonBody) {
    /**
     * @internal
     */
    JsonBody.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(JsonBody || (JsonBody = {}));
export var Method;
(function (Method) {
    /**
     * @internal
     */
    Method.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Method || (Method = {}));
export var QueryString;
(function (QueryString) {
    /**
     * @internal
     */
    QueryString.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(QueryString || (QueryString = {}));
export var SingleHeader;
(function (SingleHeader) {
    /**
     * @internal
     */
    SingleHeader.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SingleHeader || (SingleHeader = {}));
export var SingleQueryArgument;
(function (SingleQueryArgument) {
    /**
     * @internal
     */
    SingleQueryArgument.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SingleQueryArgument || (SingleQueryArgument = {}));
export var UriPath;
(function (UriPath) {
    /**
     * @internal
     */
    UriPath.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UriPath || (UriPath = {}));
export var FieldToMatch;
(function (FieldToMatch) {
    /**
     * @internal
     */
    FieldToMatch.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FieldToMatch || (FieldToMatch = {}));
export var PositionalConstraint;
(function (PositionalConstraint) {
    PositionalConstraint["CONTAINS"] = "CONTAINS";
    PositionalConstraint["CONTAINS_WORD"] = "CONTAINS_WORD";
    PositionalConstraint["ENDS_WITH"] = "ENDS_WITH";
    PositionalConstraint["EXACTLY"] = "EXACTLY";
    PositionalConstraint["STARTS_WITH"] = "STARTS_WITH";
})(PositionalConstraint || (PositionalConstraint = {}));
export var TextTransformationType;
(function (TextTransformationType) {
    TextTransformationType["CMD_LINE"] = "CMD_LINE";
    TextTransformationType["COMPRESS_WHITE_SPACE"] = "COMPRESS_WHITE_SPACE";
    TextTransformationType["HTML_ENTITY_DECODE"] = "HTML_ENTITY_DECODE";
    TextTransformationType["LOWERCASE"] = "LOWERCASE";
    TextTransformationType["NONE"] = "NONE";
    TextTransformationType["URL_DECODE"] = "URL_DECODE";
})(TextTransformationType || (TextTransformationType = {}));
export var TextTransformation;
(function (TextTransformation) {
    /**
     * @internal
     */
    TextTransformation.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TextTransformation || (TextTransformation = {}));
export var ByteMatchStatement;
(function (ByteMatchStatement) {
    /**
     * @internal
     */
    ByteMatchStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ByteMatchStatement || (ByteMatchStatement = {}));
export var CountryCode;
(function (CountryCode) {
    CountryCode["AD"] = "AD";
    CountryCode["AE"] = "AE";
    CountryCode["AF"] = "AF";
    CountryCode["AG"] = "AG";
    CountryCode["AI"] = "AI";
    CountryCode["AL"] = "AL";
    CountryCode["AM"] = "AM";
    CountryCode["AO"] = "AO";
    CountryCode["AQ"] = "AQ";
    CountryCode["AR"] = "AR";
    CountryCode["AS"] = "AS";
    CountryCode["AT"] = "AT";
    CountryCode["AU"] = "AU";
    CountryCode["AW"] = "AW";
    CountryCode["AX"] = "AX";
    CountryCode["AZ"] = "AZ";
    CountryCode["BA"] = "BA";
    CountryCode["BB"] = "BB";
    CountryCode["BD"] = "BD";
    CountryCode["BE"] = "BE";
    CountryCode["BF"] = "BF";
    CountryCode["BG"] = "BG";
    CountryCode["BH"] = "BH";
    CountryCode["BI"] = "BI";
    CountryCode["BJ"] = "BJ";
    CountryCode["BL"] = "BL";
    CountryCode["BM"] = "BM";
    CountryCode["BN"] = "BN";
    CountryCode["BO"] = "BO";
    CountryCode["BQ"] = "BQ";
    CountryCode["BR"] = "BR";
    CountryCode["BS"] = "BS";
    CountryCode["BT"] = "BT";
    CountryCode["BV"] = "BV";
    CountryCode["BW"] = "BW";
    CountryCode["BY"] = "BY";
    CountryCode["BZ"] = "BZ";
    CountryCode["CA"] = "CA";
    CountryCode["CC"] = "CC";
    CountryCode["CD"] = "CD";
    CountryCode["CF"] = "CF";
    CountryCode["CG"] = "CG";
    CountryCode["CH"] = "CH";
    CountryCode["CI"] = "CI";
    CountryCode["CK"] = "CK";
    CountryCode["CL"] = "CL";
    CountryCode["CM"] = "CM";
    CountryCode["CN"] = "CN";
    CountryCode["CO"] = "CO";
    CountryCode["CR"] = "CR";
    CountryCode["CU"] = "CU";
    CountryCode["CV"] = "CV";
    CountryCode["CW"] = "CW";
    CountryCode["CX"] = "CX";
    CountryCode["CY"] = "CY";
    CountryCode["CZ"] = "CZ";
    CountryCode["DE"] = "DE";
    CountryCode["DJ"] = "DJ";
    CountryCode["DK"] = "DK";
    CountryCode["DM"] = "DM";
    CountryCode["DO"] = "DO";
    CountryCode["DZ"] = "DZ";
    CountryCode["EC"] = "EC";
    CountryCode["EE"] = "EE";
    CountryCode["EG"] = "EG";
    CountryCode["EH"] = "EH";
    CountryCode["ER"] = "ER";
    CountryCode["ES"] = "ES";
    CountryCode["ET"] = "ET";
    CountryCode["FI"] = "FI";
    CountryCode["FJ"] = "FJ";
    CountryCode["FK"] = "FK";
    CountryCode["FM"] = "FM";
    CountryCode["FO"] = "FO";
    CountryCode["FR"] = "FR";
    CountryCode["GA"] = "GA";
    CountryCode["GB"] = "GB";
    CountryCode["GD"] = "GD";
    CountryCode["GE"] = "GE";
    CountryCode["GF"] = "GF";
    CountryCode["GG"] = "GG";
    CountryCode["GH"] = "GH";
    CountryCode["GI"] = "GI";
    CountryCode["GL"] = "GL";
    CountryCode["GM"] = "GM";
    CountryCode["GN"] = "GN";
    CountryCode["GP"] = "GP";
    CountryCode["GQ"] = "GQ";
    CountryCode["GR"] = "GR";
    CountryCode["GS"] = "GS";
    CountryCode["GT"] = "GT";
    CountryCode["GU"] = "GU";
    CountryCode["GW"] = "GW";
    CountryCode["GY"] = "GY";
    CountryCode["HK"] = "HK";
    CountryCode["HM"] = "HM";
    CountryCode["HN"] = "HN";
    CountryCode["HR"] = "HR";
    CountryCode["HT"] = "HT";
    CountryCode["HU"] = "HU";
    CountryCode["ID"] = "ID";
    CountryCode["IE"] = "IE";
    CountryCode["IL"] = "IL";
    CountryCode["IM"] = "IM";
    CountryCode["IN"] = "IN";
    CountryCode["IO"] = "IO";
    CountryCode["IQ"] = "IQ";
    CountryCode["IR"] = "IR";
    CountryCode["IS"] = "IS";
    CountryCode["IT"] = "IT";
    CountryCode["JE"] = "JE";
    CountryCode["JM"] = "JM";
    CountryCode["JO"] = "JO";
    CountryCode["JP"] = "JP";
    CountryCode["KE"] = "KE";
    CountryCode["KG"] = "KG";
    CountryCode["KH"] = "KH";
    CountryCode["KI"] = "KI";
    CountryCode["KM"] = "KM";
    CountryCode["KN"] = "KN";
    CountryCode["KP"] = "KP";
    CountryCode["KR"] = "KR";
    CountryCode["KW"] = "KW";
    CountryCode["KY"] = "KY";
    CountryCode["KZ"] = "KZ";
    CountryCode["LA"] = "LA";
    CountryCode["LB"] = "LB";
    CountryCode["LC"] = "LC";
    CountryCode["LI"] = "LI";
    CountryCode["LK"] = "LK";
    CountryCode["LR"] = "LR";
    CountryCode["LS"] = "LS";
    CountryCode["LT"] = "LT";
    CountryCode["LU"] = "LU";
    CountryCode["LV"] = "LV";
    CountryCode["LY"] = "LY";
    CountryCode["MA"] = "MA";
    CountryCode["MC"] = "MC";
    CountryCode["MD"] = "MD";
    CountryCode["ME"] = "ME";
    CountryCode["MF"] = "MF";
    CountryCode["MG"] = "MG";
    CountryCode["MH"] = "MH";
    CountryCode["MK"] = "MK";
    CountryCode["ML"] = "ML";
    CountryCode["MM"] = "MM";
    CountryCode["MN"] = "MN";
    CountryCode["MO"] = "MO";
    CountryCode["MP"] = "MP";
    CountryCode["MQ"] = "MQ";
    CountryCode["MR"] = "MR";
    CountryCode["MS"] = "MS";
    CountryCode["MT"] = "MT";
    CountryCode["MU"] = "MU";
    CountryCode["MV"] = "MV";
    CountryCode["MW"] = "MW";
    CountryCode["MX"] = "MX";
    CountryCode["MY"] = "MY";
    CountryCode["MZ"] = "MZ";
    CountryCode["NA"] = "NA";
    CountryCode["NC"] = "NC";
    CountryCode["NE"] = "NE";
    CountryCode["NF"] = "NF";
    CountryCode["NG"] = "NG";
    CountryCode["NI"] = "NI";
    CountryCode["NL"] = "NL";
    CountryCode["NO"] = "NO";
    CountryCode["NP"] = "NP";
    CountryCode["NR"] = "NR";
    CountryCode["NU"] = "NU";
    CountryCode["NZ"] = "NZ";
    CountryCode["OM"] = "OM";
    CountryCode["PA"] = "PA";
    CountryCode["PE"] = "PE";
    CountryCode["PF"] = "PF";
    CountryCode["PG"] = "PG";
    CountryCode["PH"] = "PH";
    CountryCode["PK"] = "PK";
    CountryCode["PL"] = "PL";
    CountryCode["PM"] = "PM";
    CountryCode["PN"] = "PN";
    CountryCode["PR"] = "PR";
    CountryCode["PS"] = "PS";
    CountryCode["PT"] = "PT";
    CountryCode["PW"] = "PW";
    CountryCode["PY"] = "PY";
    CountryCode["QA"] = "QA";
    CountryCode["RE"] = "RE";
    CountryCode["RO"] = "RO";
    CountryCode["RS"] = "RS";
    CountryCode["RU"] = "RU";
    CountryCode["RW"] = "RW";
    CountryCode["SA"] = "SA";
    CountryCode["SB"] = "SB";
    CountryCode["SC"] = "SC";
    CountryCode["SD"] = "SD";
    CountryCode["SE"] = "SE";
    CountryCode["SG"] = "SG";
    CountryCode["SH"] = "SH";
    CountryCode["SI"] = "SI";
    CountryCode["SJ"] = "SJ";
    CountryCode["SK"] = "SK";
    CountryCode["SL"] = "SL";
    CountryCode["SM"] = "SM";
    CountryCode["SN"] = "SN";
    CountryCode["SO"] = "SO";
    CountryCode["SR"] = "SR";
    CountryCode["SS"] = "SS";
    CountryCode["ST"] = "ST";
    CountryCode["SV"] = "SV";
    CountryCode["SX"] = "SX";
    CountryCode["SY"] = "SY";
    CountryCode["SZ"] = "SZ";
    CountryCode["TC"] = "TC";
    CountryCode["TD"] = "TD";
    CountryCode["TF"] = "TF";
    CountryCode["TG"] = "TG";
    CountryCode["TH"] = "TH";
    CountryCode["TJ"] = "TJ";
    CountryCode["TK"] = "TK";
    CountryCode["TL"] = "TL";
    CountryCode["TM"] = "TM";
    CountryCode["TN"] = "TN";
    CountryCode["TO"] = "TO";
    CountryCode["TR"] = "TR";
    CountryCode["TT"] = "TT";
    CountryCode["TV"] = "TV";
    CountryCode["TW"] = "TW";
    CountryCode["TZ"] = "TZ";
    CountryCode["UA"] = "UA";
    CountryCode["UG"] = "UG";
    CountryCode["UM"] = "UM";
    CountryCode["US"] = "US";
    CountryCode["UY"] = "UY";
    CountryCode["UZ"] = "UZ";
    CountryCode["VA"] = "VA";
    CountryCode["VC"] = "VC";
    CountryCode["VE"] = "VE";
    CountryCode["VG"] = "VG";
    CountryCode["VI"] = "VI";
    CountryCode["VN"] = "VN";
    CountryCode["VU"] = "VU";
    CountryCode["WF"] = "WF";
    CountryCode["WS"] = "WS";
    CountryCode["YE"] = "YE";
    CountryCode["YT"] = "YT";
    CountryCode["ZA"] = "ZA";
    CountryCode["ZM"] = "ZM";
    CountryCode["ZW"] = "ZW";
})(CountryCode || (CountryCode = {}));
export var FallbackBehavior;
(function (FallbackBehavior) {
    FallbackBehavior["MATCH"] = "MATCH";
    FallbackBehavior["NO_MATCH"] = "NO_MATCH";
})(FallbackBehavior || (FallbackBehavior = {}));
export var ForwardedIPConfig;
(function (ForwardedIPConfig) {
    /**
     * @internal
     */
    ForwardedIPConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ForwardedIPConfig || (ForwardedIPConfig = {}));
export var GeoMatchStatement;
(function (GeoMatchStatement) {
    /**
     * @internal
     */
    GeoMatchStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GeoMatchStatement || (GeoMatchStatement = {}));
export var ForwardedIPPosition;
(function (ForwardedIPPosition) {
    ForwardedIPPosition["ANY"] = "ANY";
    ForwardedIPPosition["FIRST"] = "FIRST";
    ForwardedIPPosition["LAST"] = "LAST";
})(ForwardedIPPosition || (ForwardedIPPosition = {}));
export var IPSetForwardedIPConfig;
(function (IPSetForwardedIPConfig) {
    /**
     * @internal
     */
    IPSetForwardedIPConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IPSetForwardedIPConfig || (IPSetForwardedIPConfig = {}));
export var IPSetReferenceStatement;
(function (IPSetReferenceStatement) {
    /**
     * @internal
     */
    IPSetReferenceStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IPSetReferenceStatement || (IPSetReferenceStatement = {}));
export var LabelMatchScope;
(function (LabelMatchScope) {
    LabelMatchScope["LABEL"] = "LABEL";
    LabelMatchScope["NAMESPACE"] = "NAMESPACE";
})(LabelMatchScope || (LabelMatchScope = {}));
export var LabelMatchStatement;
(function (LabelMatchStatement) {
    /**
     * @internal
     */
    LabelMatchStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelMatchStatement || (LabelMatchStatement = {}));
export var ExcludedRule;
(function (ExcludedRule) {
    /**
     * @internal
     */
    ExcludedRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExcludedRule || (ExcludedRule = {}));
export var RateBasedStatementAggregateKeyType;
(function (RateBasedStatementAggregateKeyType) {
    RateBasedStatementAggregateKeyType["FORWARDED_IP"] = "FORWARDED_IP";
    RateBasedStatementAggregateKeyType["IP"] = "IP";
})(RateBasedStatementAggregateKeyType || (RateBasedStatementAggregateKeyType = {}));
export var RegexPatternSetReferenceStatement;
(function (RegexPatternSetReferenceStatement) {
    /**
     * @internal
     */
    RegexPatternSetReferenceStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegexPatternSetReferenceStatement || (RegexPatternSetReferenceStatement = {}));
export var RuleGroupReferenceStatement;
(function (RuleGroupReferenceStatement) {
    /**
     * @internal
     */
    RuleGroupReferenceStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleGroupReferenceStatement || (RuleGroupReferenceStatement = {}));
export var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["EQ"] = "EQ";
    ComparisonOperator["GE"] = "GE";
    ComparisonOperator["GT"] = "GT";
    ComparisonOperator["LE"] = "LE";
    ComparisonOperator["LT"] = "LT";
    ComparisonOperator["NE"] = "NE";
})(ComparisonOperator || (ComparisonOperator = {}));
export var SizeConstraintStatement;
(function (SizeConstraintStatement) {
    /**
     * @internal
     */
    SizeConstraintStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SizeConstraintStatement || (SizeConstraintStatement = {}));
export var SqliMatchStatement;
(function (SqliMatchStatement) {
    /**
     * @internal
     */
    SqliMatchStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SqliMatchStatement || (SqliMatchStatement = {}));
export var XssMatchStatement;
(function (XssMatchStatement) {
    /**
     * @internal
     */
    XssMatchStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(XssMatchStatement || (XssMatchStatement = {}));
export var AssociateWebACLRequest;
(function (AssociateWebACLRequest) {
    /**
     * @internal
     */
    AssociateWebACLRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateWebACLRequest || (AssociateWebACLRequest = {}));
export var AssociateWebACLResponse;
(function (AssociateWebACLResponse) {
    /**
     * @internal
     */
    AssociateWebACLResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AssociateWebACLResponse || (AssociateWebACLResponse = {}));
export var WAFInternalErrorException;
(function (WAFInternalErrorException) {
    /**
     * @internal
     */
    WAFInternalErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFInternalErrorException || (WAFInternalErrorException = {}));
export var WAFInvalidOperationException;
(function (WAFInvalidOperationException) {
    /**
     * @internal
     */
    WAFInvalidOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFInvalidOperationException || (WAFInvalidOperationException = {}));
export var ParameterExceptionField;
(function (ParameterExceptionField) {
    ParameterExceptionField["AND_STATEMENT"] = "AND_STATEMENT";
    ParameterExceptionField["BODY_PARSING_FALLBACK_BEHAVIOR"] = "BODY_PARSING_FALLBACK_BEHAVIOR";
    ParameterExceptionField["BYTE_MATCH_STATEMENT"] = "BYTE_MATCH_STATEMENT";
    ParameterExceptionField["CUSTOM_REQUEST_HANDLING"] = "CUSTOM_REQUEST_HANDLING";
    ParameterExceptionField["CUSTOM_RESPONSE"] = "CUSTOM_RESPONSE";
    ParameterExceptionField["CUSTOM_RESPONSE_BODY"] = "CUSTOM_RESPONSE_BODY";
    ParameterExceptionField["DEFAULT_ACTION"] = "DEFAULT_ACTION";
    ParameterExceptionField["ENTITY_LIMIT"] = "ENTITY_LIMIT";
    ParameterExceptionField["EXCLUDED_RULE"] = "EXCLUDED_RULE";
    ParameterExceptionField["FALLBACK_BEHAVIOR"] = "FALLBACK_BEHAVIOR";
    ParameterExceptionField["FIELD_TO_MATCH"] = "FIELD_TO_MATCH";
    ParameterExceptionField["FILTER_CONDITION"] = "FILTER_CONDITION";
    ParameterExceptionField["FIREWALL_MANAGER_STATEMENT"] = "FIREWALL_MANAGER_STATEMENT";
    ParameterExceptionField["FORWARDED_IP_CONFIG"] = "FORWARDED_IP_CONFIG";
    ParameterExceptionField["GEO_MATCH_STATEMENT"] = "GEO_MATCH_STATEMENT";
    ParameterExceptionField["HEADER_NAME"] = "HEADER_NAME";
    ParameterExceptionField["IP_ADDRESS"] = "IP_ADDRESS";
    ParameterExceptionField["IP_ADDRESS_VERSION"] = "IP_ADDRESS_VERSION";
    ParameterExceptionField["IP_SET"] = "IP_SET";
    ParameterExceptionField["IP_SET_FORWARDED_IP_CONFIG"] = "IP_SET_FORWARDED_IP_CONFIG";
    ParameterExceptionField["IP_SET_REFERENCE_STATEMENT"] = "IP_SET_REFERENCE_STATEMENT";
    ParameterExceptionField["JSON_MATCH_PATTERN"] = "JSON_MATCH_PATTERN";
    ParameterExceptionField["JSON_MATCH_SCOPE"] = "JSON_MATCH_SCOPE";
    ParameterExceptionField["LABEL_MATCH_STATEMENT"] = "LABEL_MATCH_STATEMENT";
    ParameterExceptionField["LOGGING_FILTER"] = "LOGGING_FILTER";
    ParameterExceptionField["MANAGED_RULE_SET"] = "MANAGED_RULE_SET";
    ParameterExceptionField["MANAGED_RULE_SET_STATEMENT"] = "MANAGED_RULE_SET_STATEMENT";
    ParameterExceptionField["METRIC_NAME"] = "METRIC_NAME";
    ParameterExceptionField["NOT_STATEMENT"] = "NOT_STATEMENT";
    ParameterExceptionField["OR_STATEMENT"] = "OR_STATEMENT";
    ParameterExceptionField["OVERRIDE_ACTION"] = "OVERRIDE_ACTION";
    ParameterExceptionField["POSITION"] = "POSITION";
    ParameterExceptionField["RATE_BASED_STATEMENT"] = "RATE_BASED_STATEMENT";
    ParameterExceptionField["REGEX_PATTERN_REFERENCE_STATEMENT"] = "REGEX_PATTERN_REFERENCE_STATEMENT";
    ParameterExceptionField["REGEX_PATTERN_SET"] = "REGEX_PATTERN_SET";
    ParameterExceptionField["RESOURCE_ARN"] = "RESOURCE_ARN";
    ParameterExceptionField["RESOURCE_TYPE"] = "RESOURCE_TYPE";
    ParameterExceptionField["RESPONSE_CONTENT_TYPE"] = "RESPONSE_CONTENT_TYPE";
    ParameterExceptionField["RULE"] = "RULE";
    ParameterExceptionField["RULE_ACTION"] = "RULE_ACTION";
    ParameterExceptionField["RULE_GROUP"] = "RULE_GROUP";
    ParameterExceptionField["RULE_GROUP_REFERENCE_STATEMENT"] = "RULE_GROUP_REFERENCE_STATEMENT";
    ParameterExceptionField["SCOPE_VALUE"] = "SCOPE_VALUE";
    ParameterExceptionField["SINGLE_HEADER"] = "SINGLE_HEADER";
    ParameterExceptionField["SINGLE_QUERY_ARGUMENT"] = "SINGLE_QUERY_ARGUMENT";
    ParameterExceptionField["SIZE_CONSTRAINT_STATEMENT"] = "SIZE_CONSTRAINT_STATEMENT";
    ParameterExceptionField["SQLI_MATCH_STATEMENT"] = "SQLI_MATCH_STATEMENT";
    ParameterExceptionField["STATEMENT"] = "STATEMENT";
    ParameterExceptionField["TAGS"] = "TAGS";
    ParameterExceptionField["TAG_KEYS"] = "TAG_KEYS";
    ParameterExceptionField["TEXT_TRANSFORMATION"] = "TEXT_TRANSFORMATION";
    ParameterExceptionField["WEB_ACL"] = "WEB_ACL";
    ParameterExceptionField["XSS_MATCH_STATEMENT"] = "XSS_MATCH_STATEMENT";
})(ParameterExceptionField || (ParameterExceptionField = {}));
export var WAFInvalidParameterException;
(function (WAFInvalidParameterException) {
    /**
     * @internal
     */
    WAFInvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFInvalidParameterException || (WAFInvalidParameterException = {}));
export var WAFNonexistentItemException;
(function (WAFNonexistentItemException) {
    /**
     * @internal
     */
    WAFNonexistentItemException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFNonexistentItemException || (WAFNonexistentItemException = {}));
export var WAFUnavailableEntityException;
(function (WAFUnavailableEntityException) {
    /**
     * @internal
     */
    WAFUnavailableEntityException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFUnavailableEntityException || (WAFUnavailableEntityException = {}));
export var CustomResponse;
(function (CustomResponse) {
    /**
     * @internal
     */
    CustomResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomResponse || (CustomResponse = {}));
export var BlockAction;
(function (BlockAction) {
    /**
     * @internal
     */
    BlockAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(BlockAction || (BlockAction = {}));
export var CountAction;
(function (CountAction) {
    /**
     * @internal
     */
    CountAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CountAction || (CountAction = {}));
export var RuleAction;
(function (RuleAction) {
    /**
     * @internal
     */
    RuleAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleAction || (RuleAction = {}));
export var NoneAction;
(function (NoneAction) {
    /**
     * @internal
     */
    NoneAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NoneAction || (NoneAction = {}));
export var OverrideAction;
(function (OverrideAction) {
    /**
     * @internal
     */
    OverrideAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OverrideAction || (OverrideAction = {}));
export var Label;
(function (Label) {
    /**
     * @internal
     */
    Label.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Label || (Label = {}));
export var VisibilityConfig;
(function (VisibilityConfig) {
    /**
     * @internal
     */
    VisibilityConfig.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(VisibilityConfig || (VisibilityConfig = {}));
export var Scope;
(function (Scope) {
    Scope["CLOUDFRONT"] = "CLOUDFRONT";
    Scope["REGIONAL"] = "REGIONAL";
})(Scope || (Scope = {}));
export var CheckCapacityResponse;
(function (CheckCapacityResponse) {
    /**
     * @internal
     */
    CheckCapacityResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckCapacityResponse || (CheckCapacityResponse = {}));
export var WAFInvalidResourceException;
(function (WAFInvalidResourceException) {
    /**
     * @internal
     */
    WAFInvalidResourceException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFInvalidResourceException || (WAFInvalidResourceException = {}));
export var WAFLimitsExceededException;
(function (WAFLimitsExceededException) {
    /**
     * @internal
     */
    WAFLimitsExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFLimitsExceededException || (WAFLimitsExceededException = {}));
export var WAFSubscriptionNotFoundException;
(function (WAFSubscriptionNotFoundException) {
    /**
     * @internal
     */
    WAFSubscriptionNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFSubscriptionNotFoundException || (WAFSubscriptionNotFoundException = {}));
export var IPAddressVersion;
(function (IPAddressVersion) {
    IPAddressVersion["IPV4"] = "IPV4";
    IPAddressVersion["IPV6"] = "IPV6";
})(IPAddressVersion || (IPAddressVersion = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateIPSetRequest;
(function (CreateIPSetRequest) {
    /**
     * @internal
     */
    CreateIPSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIPSetRequest || (CreateIPSetRequest = {}));
export var IPSetSummary;
(function (IPSetSummary) {
    /**
     * @internal
     */
    IPSetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IPSetSummary || (IPSetSummary = {}));
export var CreateIPSetResponse;
(function (CreateIPSetResponse) {
    /**
     * @internal
     */
    CreateIPSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIPSetResponse || (CreateIPSetResponse = {}));
export var WAFDuplicateItemException;
(function (WAFDuplicateItemException) {
    /**
     * @internal
     */
    WAFDuplicateItemException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFDuplicateItemException || (WAFDuplicateItemException = {}));
export var WAFOptimisticLockException;
(function (WAFOptimisticLockException) {
    /**
     * @internal
     */
    WAFOptimisticLockException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFOptimisticLockException || (WAFOptimisticLockException = {}));
export var WAFTagOperationException;
(function (WAFTagOperationException) {
    /**
     * @internal
     */
    WAFTagOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFTagOperationException || (WAFTagOperationException = {}));
export var WAFTagOperationInternalErrorException;
(function (WAFTagOperationInternalErrorException) {
    /**
     * @internal
     */
    WAFTagOperationInternalErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFTagOperationInternalErrorException || (WAFTagOperationInternalErrorException = {}));
export var Regex;
(function (Regex) {
    /**
     * @internal
     */
    Regex.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Regex || (Regex = {}));
export var CreateRegexPatternSetRequest;
(function (CreateRegexPatternSetRequest) {
    /**
     * @internal
     */
    CreateRegexPatternSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRegexPatternSetRequest || (CreateRegexPatternSetRequest = {}));
export var RegexPatternSetSummary;
(function (RegexPatternSetSummary) {
    /**
     * @internal
     */
    RegexPatternSetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegexPatternSetSummary || (RegexPatternSetSummary = {}));
export var CreateRegexPatternSetResponse;
(function (CreateRegexPatternSetResponse) {
    /**
     * @internal
     */
    CreateRegexPatternSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRegexPatternSetResponse || (CreateRegexPatternSetResponse = {}));
export var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType["APPLICATION_JSON"] = "APPLICATION_JSON";
    ResponseContentType["TEXT_HTML"] = "TEXT_HTML";
    ResponseContentType["TEXT_PLAIN"] = "TEXT_PLAIN";
})(ResponseContentType || (ResponseContentType = {}));
export var CustomResponseBody;
(function (CustomResponseBody) {
    /**
     * @internal
     */
    CustomResponseBody.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CustomResponseBody || (CustomResponseBody = {}));
export var RuleGroupSummary;
(function (RuleGroupSummary) {
    /**
     * @internal
     */
    RuleGroupSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleGroupSummary || (RuleGroupSummary = {}));
export var CreateRuleGroupResponse;
(function (CreateRuleGroupResponse) {
    /**
     * @internal
     */
    CreateRuleGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRuleGroupResponse || (CreateRuleGroupResponse = {}));
export var DefaultAction;
(function (DefaultAction) {
    /**
     * @internal
     */
    DefaultAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DefaultAction || (DefaultAction = {}));
export var WebACLSummary;
(function (WebACLSummary) {
    /**
     * @internal
     */
    WebACLSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebACLSummary || (WebACLSummary = {}));
export var CreateWebACLResponse;
(function (CreateWebACLResponse) {
    /**
     * @internal
     */
    CreateWebACLResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWebACLResponse || (CreateWebACLResponse = {}));
export var DeleteFirewallManagerRuleGroupsRequest;
(function (DeleteFirewallManagerRuleGroupsRequest) {
    /**
     * @internal
     */
    DeleteFirewallManagerRuleGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFirewallManagerRuleGroupsRequest || (DeleteFirewallManagerRuleGroupsRequest = {}));
export var DeleteFirewallManagerRuleGroupsResponse;
(function (DeleteFirewallManagerRuleGroupsResponse) {
    /**
     * @internal
     */
    DeleteFirewallManagerRuleGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteFirewallManagerRuleGroupsResponse || (DeleteFirewallManagerRuleGroupsResponse = {}));
export var DeleteIPSetRequest;
(function (DeleteIPSetRequest) {
    /**
     * @internal
     */
    DeleteIPSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIPSetRequest || (DeleteIPSetRequest = {}));
export var DeleteIPSetResponse;
(function (DeleteIPSetResponse) {
    /**
     * @internal
     */
    DeleteIPSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteIPSetResponse || (DeleteIPSetResponse = {}));
export var WAFAssociatedItemException;
(function (WAFAssociatedItemException) {
    /**
     * @internal
     */
    WAFAssociatedItemException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFAssociatedItemException || (WAFAssociatedItemException = {}));
export var DeleteLoggingConfigurationRequest;
(function (DeleteLoggingConfigurationRequest) {
    /**
     * @internal
     */
    DeleteLoggingConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLoggingConfigurationRequest || (DeleteLoggingConfigurationRequest = {}));
export var DeleteLoggingConfigurationResponse;
(function (DeleteLoggingConfigurationResponse) {
    /**
     * @internal
     */
    DeleteLoggingConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLoggingConfigurationResponse || (DeleteLoggingConfigurationResponse = {}));
export var DeletePermissionPolicyRequest;
(function (DeletePermissionPolicyRequest) {
    /**
     * @internal
     */
    DeletePermissionPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePermissionPolicyRequest || (DeletePermissionPolicyRequest = {}));
export var DeletePermissionPolicyResponse;
(function (DeletePermissionPolicyResponse) {
    /**
     * @internal
     */
    DeletePermissionPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeletePermissionPolicyResponse || (DeletePermissionPolicyResponse = {}));
export var DeleteRegexPatternSetRequest;
(function (DeleteRegexPatternSetRequest) {
    /**
     * @internal
     */
    DeleteRegexPatternSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRegexPatternSetRequest || (DeleteRegexPatternSetRequest = {}));
export var DeleteRegexPatternSetResponse;
(function (DeleteRegexPatternSetResponse) {
    /**
     * @internal
     */
    DeleteRegexPatternSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRegexPatternSetResponse || (DeleteRegexPatternSetResponse = {}));
export var DeleteRuleGroupRequest;
(function (DeleteRuleGroupRequest) {
    /**
     * @internal
     */
    DeleteRuleGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRuleGroupRequest || (DeleteRuleGroupRequest = {}));
export var DeleteRuleGroupResponse;
(function (DeleteRuleGroupResponse) {
    /**
     * @internal
     */
    DeleteRuleGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRuleGroupResponse || (DeleteRuleGroupResponse = {}));
export var DeleteWebACLRequest;
(function (DeleteWebACLRequest) {
    /**
     * @internal
     */
    DeleteWebACLRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWebACLRequest || (DeleteWebACLRequest = {}));
export var DeleteWebACLResponse;
(function (DeleteWebACLResponse) {
    /**
     * @internal
     */
    DeleteWebACLResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteWebACLResponse || (DeleteWebACLResponse = {}));
export var DescribeManagedRuleGroupRequest;
(function (DescribeManagedRuleGroupRequest) {
    /**
     * @internal
     */
    DescribeManagedRuleGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeManagedRuleGroupRequest || (DescribeManagedRuleGroupRequest = {}));
export var LabelSummary;
(function (LabelSummary) {
    /**
     * @internal
     */
    LabelSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelSummary || (LabelSummary = {}));
export var RuleSummary;
(function (RuleSummary) {
    /**
     * @internal
     */
    RuleSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleSummary || (RuleSummary = {}));
export var DescribeManagedRuleGroupResponse;
(function (DescribeManagedRuleGroupResponse) {
    /**
     * @internal
     */
    DescribeManagedRuleGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeManagedRuleGroupResponse || (DescribeManagedRuleGroupResponse = {}));
export var DisassociateWebACLRequest;
(function (DisassociateWebACLRequest) {
    /**
     * @internal
     */
    DisassociateWebACLRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateWebACLRequest || (DisassociateWebACLRequest = {}));
export var DisassociateWebACLResponse;
(function (DisassociateWebACLResponse) {
    /**
     * @internal
     */
    DisassociateWebACLResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DisassociateWebACLResponse || (DisassociateWebACLResponse = {}));
export var GetIPSetRequest;
(function (GetIPSetRequest) {
    /**
     * @internal
     */
    GetIPSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIPSetRequest || (GetIPSetRequest = {}));
export var IPSet;
(function (IPSet) {
    /**
     * @internal
     */
    IPSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IPSet || (IPSet = {}));
export var GetIPSetResponse;
(function (GetIPSetResponse) {
    /**
     * @internal
     */
    GetIPSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIPSetResponse || (GetIPSetResponse = {}));
export var GetLoggingConfigurationRequest;
(function (GetLoggingConfigurationRequest) {
    /**
     * @internal
     */
    GetLoggingConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoggingConfigurationRequest || (GetLoggingConfigurationRequest = {}));
export var FilterBehavior;
(function (FilterBehavior) {
    FilterBehavior["DROP"] = "DROP";
    FilterBehavior["KEEP"] = "KEEP";
})(FilterBehavior || (FilterBehavior = {}));
export var LabelNameCondition;
(function (LabelNameCondition) {
    /**
     * @internal
     */
    LabelNameCondition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LabelNameCondition || (LabelNameCondition = {}));
export var Condition;
(function (Condition) {
    /**
     * @internal
     */
    Condition.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Condition || (Condition = {}));
export var FilterRequirement;
(function (FilterRequirement) {
    FilterRequirement["MEETS_ALL"] = "MEETS_ALL";
    FilterRequirement["MEETS_ANY"] = "MEETS_ANY";
})(FilterRequirement || (FilterRequirement = {}));
export var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Filter || (Filter = {}));
export var LoggingFilter;
(function (LoggingFilter) {
    /**
     * @internal
     */
    LoggingFilter.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoggingFilter || (LoggingFilter = {}));
export var LoggingConfiguration;
(function (LoggingConfiguration) {
    /**
     * @internal
     */
    LoggingConfiguration.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LoggingConfiguration || (LoggingConfiguration = {}));
export var GetLoggingConfigurationResponse;
(function (GetLoggingConfigurationResponse) {
    /**
     * @internal
     */
    GetLoggingConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLoggingConfigurationResponse || (GetLoggingConfigurationResponse = {}));
export var GetPermissionPolicyRequest;
(function (GetPermissionPolicyRequest) {
    /**
     * @internal
     */
    GetPermissionPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPermissionPolicyRequest || (GetPermissionPolicyRequest = {}));
export var GetPermissionPolicyResponse;
(function (GetPermissionPolicyResponse) {
    /**
     * @internal
     */
    GetPermissionPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetPermissionPolicyResponse || (GetPermissionPolicyResponse = {}));
export var GetRateBasedStatementManagedKeysRequest;
(function (GetRateBasedStatementManagedKeysRequest) {
    /**
     * @internal
     */
    GetRateBasedStatementManagedKeysRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRateBasedStatementManagedKeysRequest || (GetRateBasedStatementManagedKeysRequest = {}));
export var RateBasedStatementManagedKeysIPSet;
(function (RateBasedStatementManagedKeysIPSet) {
    /**
     * @internal
     */
    RateBasedStatementManagedKeysIPSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RateBasedStatementManagedKeysIPSet || (RateBasedStatementManagedKeysIPSet = {}));
export var GetRateBasedStatementManagedKeysResponse;
(function (GetRateBasedStatementManagedKeysResponse) {
    /**
     * @internal
     */
    GetRateBasedStatementManagedKeysResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRateBasedStatementManagedKeysResponse || (GetRateBasedStatementManagedKeysResponse = {}));
export var GetRegexPatternSetRequest;
(function (GetRegexPatternSetRequest) {
    /**
     * @internal
     */
    GetRegexPatternSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegexPatternSetRequest || (GetRegexPatternSetRequest = {}));
export var RegexPatternSet;
(function (RegexPatternSet) {
    /**
     * @internal
     */
    RegexPatternSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegexPatternSet || (RegexPatternSet = {}));
export var GetRegexPatternSetResponse;
(function (GetRegexPatternSetResponse) {
    /**
     * @internal
     */
    GetRegexPatternSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegexPatternSetResponse || (GetRegexPatternSetResponse = {}));
export var GetRuleGroupRequest;
(function (GetRuleGroupRequest) {
    /**
     * @internal
     */
    GetRuleGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRuleGroupRequest || (GetRuleGroupRequest = {}));
export var TimeWindow;
(function (TimeWindow) {
    /**
     * @internal
     */
    TimeWindow.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TimeWindow || (TimeWindow = {}));
export var GetSampledRequestsRequest;
(function (GetSampledRequestsRequest) {
    /**
     * @internal
     */
    GetSampledRequestsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSampledRequestsRequest || (GetSampledRequestsRequest = {}));
export var HTTPHeader;
(function (HTTPHeader) {
    /**
     * @internal
     */
    HTTPHeader.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HTTPHeader || (HTTPHeader = {}));
export var HTTPRequest;
(function (HTTPRequest) {
    /**
     * @internal
     */
    HTTPRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(HTTPRequest || (HTTPRequest = {}));
export var SampledHTTPRequest;
(function (SampledHTTPRequest) {
    /**
     * @internal
     */
    SampledHTTPRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SampledHTTPRequest || (SampledHTTPRequest = {}));
export var GetSampledRequestsResponse;
(function (GetSampledRequestsResponse) {
    /**
     * @internal
     */
    GetSampledRequestsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSampledRequestsResponse || (GetSampledRequestsResponse = {}));
export var GetWebACLRequest;
(function (GetWebACLRequest) {
    /**
     * @internal
     */
    GetWebACLRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWebACLRequest || (GetWebACLRequest = {}));
export var GetWebACLForResourceRequest;
(function (GetWebACLForResourceRequest) {
    /**
     * @internal
     */
    GetWebACLForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWebACLForResourceRequest || (GetWebACLForResourceRequest = {}));
export var ListAvailableManagedRuleGroupsRequest;
(function (ListAvailableManagedRuleGroupsRequest) {
    /**
     * @internal
     */
    ListAvailableManagedRuleGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAvailableManagedRuleGroupsRequest || (ListAvailableManagedRuleGroupsRequest = {}));
export var ManagedRuleGroupSummary;
(function (ManagedRuleGroupSummary) {
    /**
     * @internal
     */
    ManagedRuleGroupSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ManagedRuleGroupSummary || (ManagedRuleGroupSummary = {}));
export var ListAvailableManagedRuleGroupsResponse;
(function (ListAvailableManagedRuleGroupsResponse) {
    /**
     * @internal
     */
    ListAvailableManagedRuleGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListAvailableManagedRuleGroupsResponse || (ListAvailableManagedRuleGroupsResponse = {}));
export var ListIPSetsRequest;
(function (ListIPSetsRequest) {
    /**
     * @internal
     */
    ListIPSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIPSetsRequest || (ListIPSetsRequest = {}));
export var ListIPSetsResponse;
(function (ListIPSetsResponse) {
    /**
     * @internal
     */
    ListIPSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIPSetsResponse || (ListIPSetsResponse = {}));
export var ListLoggingConfigurationsRequest;
(function (ListLoggingConfigurationsRequest) {
    /**
     * @internal
     */
    ListLoggingConfigurationsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLoggingConfigurationsRequest || (ListLoggingConfigurationsRequest = {}));
export var ListLoggingConfigurationsResponse;
(function (ListLoggingConfigurationsResponse) {
    /**
     * @internal
     */
    ListLoggingConfigurationsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListLoggingConfigurationsResponse || (ListLoggingConfigurationsResponse = {}));
export var ListRegexPatternSetsRequest;
(function (ListRegexPatternSetsRequest) {
    /**
     * @internal
     */
    ListRegexPatternSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRegexPatternSetsRequest || (ListRegexPatternSetsRequest = {}));
export var ListRegexPatternSetsResponse;
(function (ListRegexPatternSetsResponse) {
    /**
     * @internal
     */
    ListRegexPatternSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRegexPatternSetsResponse || (ListRegexPatternSetsResponse = {}));
export var ResourceType;
(function (ResourceType) {
    ResourceType["API_GATEWAY"] = "API_GATEWAY";
    ResourceType["APPLICATION_LOAD_BALANCER"] = "APPLICATION_LOAD_BALANCER";
    ResourceType["APPSYNC"] = "APPSYNC";
})(ResourceType || (ResourceType = {}));
export var ListResourcesForWebACLRequest;
(function (ListResourcesForWebACLRequest) {
    /**
     * @internal
     */
    ListResourcesForWebACLRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourcesForWebACLRequest || (ListResourcesForWebACLRequest = {}));
export var ListResourcesForWebACLResponse;
(function (ListResourcesForWebACLResponse) {
    /**
     * @internal
     */
    ListResourcesForWebACLResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListResourcesForWebACLResponse || (ListResourcesForWebACLResponse = {}));
export var ListRuleGroupsRequest;
(function (ListRuleGroupsRequest) {
    /**
     * @internal
     */
    ListRuleGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRuleGroupsRequest || (ListRuleGroupsRequest = {}));
export var ListRuleGroupsResponse;
(function (ListRuleGroupsResponse) {
    /**
     * @internal
     */
    ListRuleGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRuleGroupsResponse || (ListRuleGroupsResponse = {}));
export var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceRequest || (ListTagsForResourceRequest = {}));
export var TagInfoForResource;
(function (TagInfoForResource) {
    /**
     * @internal
     */
    TagInfoForResource.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagInfoForResource || (TagInfoForResource = {}));
export var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceResponse || (ListTagsForResourceResponse = {}));
export var ListWebACLsRequest;
(function (ListWebACLsRequest) {
    /**
     * @internal
     */
    ListWebACLsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWebACLsRequest || (ListWebACLsRequest = {}));
export var ListWebACLsResponse;
(function (ListWebACLsResponse) {
    /**
     * @internal
     */
    ListWebACLsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListWebACLsResponse || (ListWebACLsResponse = {}));
export var PutLoggingConfigurationRequest;
(function (PutLoggingConfigurationRequest) {
    /**
     * @internal
     */
    PutLoggingConfigurationRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutLoggingConfigurationRequest || (PutLoggingConfigurationRequest = {}));
export var PutLoggingConfigurationResponse;
(function (PutLoggingConfigurationResponse) {
    /**
     * @internal
     */
    PutLoggingConfigurationResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutLoggingConfigurationResponse || (PutLoggingConfigurationResponse = {}));
export var WAFServiceLinkedRoleErrorException;
(function (WAFServiceLinkedRoleErrorException) {
    /**
     * @internal
     */
    WAFServiceLinkedRoleErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFServiceLinkedRoleErrorException || (WAFServiceLinkedRoleErrorException = {}));
export var PutPermissionPolicyRequest;
(function (PutPermissionPolicyRequest) {
    /**
     * @internal
     */
    PutPermissionPolicyRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPermissionPolicyRequest || (PutPermissionPolicyRequest = {}));
export var PutPermissionPolicyResponse;
(function (PutPermissionPolicyResponse) {
    /**
     * @internal
     */
    PutPermissionPolicyResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutPermissionPolicyResponse || (PutPermissionPolicyResponse = {}));
export var WAFInvalidPermissionPolicyException;
(function (WAFInvalidPermissionPolicyException) {
    /**
     * @internal
     */
    WAFInvalidPermissionPolicyException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFInvalidPermissionPolicyException || (WAFInvalidPermissionPolicyException = {}));
export var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceRequest || (TagResourceRequest = {}));
export var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceResponse || (TagResourceResponse = {}));
export var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceRequest || (UntagResourceRequest = {}));
export var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceResponse || (UntagResourceResponse = {}));
export var UpdateIPSetRequest;
(function (UpdateIPSetRequest) {
    /**
     * @internal
     */
    UpdateIPSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIPSetRequest || (UpdateIPSetRequest = {}));
export var UpdateIPSetResponse;
(function (UpdateIPSetResponse) {
    /**
     * @internal
     */
    UpdateIPSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateIPSetResponse || (UpdateIPSetResponse = {}));
export var UpdateRegexPatternSetRequest;
(function (UpdateRegexPatternSetRequest) {
    /**
     * @internal
     */
    UpdateRegexPatternSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRegexPatternSetRequest || (UpdateRegexPatternSetRequest = {}));
export var UpdateRegexPatternSetResponse;
(function (UpdateRegexPatternSetResponse) {
    /**
     * @internal
     */
    UpdateRegexPatternSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRegexPatternSetResponse || (UpdateRegexPatternSetResponse = {}));
export var UpdateRuleGroupResponse;
(function (UpdateRuleGroupResponse) {
    /**
     * @internal
     */
    UpdateRuleGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRuleGroupResponse || (UpdateRuleGroupResponse = {}));
export var UpdateWebACLResponse;
(function (UpdateWebACLResponse) {
    /**
     * @internal
     */
    UpdateWebACLResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWebACLResponse || (UpdateWebACLResponse = {}));
export var Statement;
(function (Statement) {
    /**
     * @internal
     */
    Statement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Statement || (Statement = {}));
export var ManagedRuleGroupStatement;
(function (ManagedRuleGroupStatement) {
    /**
     * @internal
     */
    ManagedRuleGroupStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ManagedRuleGroupStatement || (ManagedRuleGroupStatement = {}));
export var NotStatement;
(function (NotStatement) {
    /**
     * @internal
     */
    NotStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(NotStatement || (NotStatement = {}));
export var RateBasedStatement;
(function (RateBasedStatement) {
    /**
     * @internal
     */
    RateBasedStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RateBasedStatement || (RateBasedStatement = {}));
export var Rule;
(function (Rule) {
    /**
     * @internal
     */
    Rule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Rule || (Rule = {}));
export var AndStatement;
(function (AndStatement) {
    /**
     * @internal
     */
    AndStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(AndStatement || (AndStatement = {}));
export var OrStatement;
(function (OrStatement) {
    /**
     * @internal
     */
    OrStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(OrStatement || (OrStatement = {}));
export var FirewallManagerStatement;
(function (FirewallManagerStatement) {
    /**
     * @internal
     */
    FirewallManagerStatement.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FirewallManagerStatement || (FirewallManagerStatement = {}));
export var FirewallManagerRuleGroup;
(function (FirewallManagerRuleGroup) {
    /**
     * @internal
     */
    FirewallManagerRuleGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(FirewallManagerRuleGroup || (FirewallManagerRuleGroup = {}));
export var CheckCapacityRequest;
(function (CheckCapacityRequest) {
    /**
     * @internal
     */
    CheckCapacityRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CheckCapacityRequest || (CheckCapacityRequest = {}));
export var CreateRuleGroupRequest;
(function (CreateRuleGroupRequest) {
    /**
     * @internal
     */
    CreateRuleGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRuleGroupRequest || (CreateRuleGroupRequest = {}));
export var CreateWebACLRequest;
(function (CreateWebACLRequest) {
    /**
     * @internal
     */
    CreateWebACLRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWebACLRequest || (CreateWebACLRequest = {}));
export var RuleGroup;
(function (RuleGroup) {
    /**
     * @internal
     */
    RuleGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleGroup || (RuleGroup = {}));
export var UpdateRuleGroupRequest;
(function (UpdateRuleGroupRequest) {
    /**
     * @internal
     */
    UpdateRuleGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRuleGroupRequest || (UpdateRuleGroupRequest = {}));
export var UpdateWebACLRequest;
(function (UpdateWebACLRequest) {
    /**
     * @internal
     */
    UpdateWebACLRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWebACLRequest || (UpdateWebACLRequest = {}));
export var GetRuleGroupResponse;
(function (GetRuleGroupResponse) {
    /**
     * @internal
     */
    GetRuleGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRuleGroupResponse || (GetRuleGroupResponse = {}));
export var WebACL;
(function (WebACL) {
    /**
     * @internal
     */
    WebACL.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebACL || (WebACL = {}));
export var GetWebACLForResourceResponse;
(function (GetWebACLForResourceResponse) {
    /**
     * @internal
     */
    GetWebACLForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWebACLForResourceResponse || (GetWebACLForResourceResponse = {}));
export var GetWebACLResponse;
(function (GetWebACLResponse) {
    /**
     * @internal
     */
    GetWebACLResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWebACLResponse || (GetWebACLResponse = {}));
//# sourceMappingURL=models_0.js.map