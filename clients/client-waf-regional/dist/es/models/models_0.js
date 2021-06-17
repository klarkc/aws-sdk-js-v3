import { __assign } from "tslib";
export var WafActionType;
(function (WafActionType) {
    WafActionType["ALLOW"] = "ALLOW";
    WafActionType["BLOCK"] = "BLOCK";
    WafActionType["COUNT"] = "COUNT";
})(WafActionType || (WafActionType = {}));
export var WafAction;
(function (WafAction) {
    /**
     * @internal
     */
    WafAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WafAction || (WafAction = {}));
export var ExcludedRule;
(function (ExcludedRule) {
    /**
     * @internal
     */
    ExcludedRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ExcludedRule || (ExcludedRule = {}));
export var WafOverrideActionType;
(function (WafOverrideActionType) {
    WafOverrideActionType["COUNT"] = "COUNT";
    WafOverrideActionType["NONE"] = "NONE";
})(WafOverrideActionType || (WafOverrideActionType = {}));
export var WafOverrideAction;
(function (WafOverrideAction) {
    /**
     * @internal
     */
    WafOverrideAction.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WafOverrideAction || (WafOverrideAction = {}));
export var WafRuleType;
(function (WafRuleType) {
    WafRuleType["GROUP"] = "GROUP";
    WafRuleType["RATE_BASED"] = "RATE_BASED";
    WafRuleType["REGULAR"] = "REGULAR";
})(WafRuleType || (WafRuleType = {}));
export var ActivatedRule;
(function (ActivatedRule) {
    /**
     * @internal
     */
    ActivatedRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ActivatedRule || (ActivatedRule = {}));
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
export var WAFInvalidAccountException;
(function (WAFInvalidAccountException) {
    /**
     * @internal
     */
    WAFInvalidAccountException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFInvalidAccountException || (WAFInvalidAccountException = {}));
export var ParameterExceptionField;
(function (ParameterExceptionField) {
    ParameterExceptionField["BYTE_MATCH_FIELD_TYPE"] = "BYTE_MATCH_FIELD_TYPE";
    ParameterExceptionField["BYTE_MATCH_POSITIONAL_CONSTRAINT"] = "BYTE_MATCH_POSITIONAL_CONSTRAINT";
    ParameterExceptionField["BYTE_MATCH_TEXT_TRANSFORMATION"] = "BYTE_MATCH_TEXT_TRANSFORMATION";
    ParameterExceptionField["CHANGE_ACTION"] = "CHANGE_ACTION";
    ParameterExceptionField["GEO_MATCH_LOCATION_TYPE"] = "GEO_MATCH_LOCATION_TYPE";
    ParameterExceptionField["GEO_MATCH_LOCATION_VALUE"] = "GEO_MATCH_LOCATION_VALUE";
    ParameterExceptionField["IPSET_TYPE"] = "IPSET_TYPE";
    ParameterExceptionField["NEXT_MARKER"] = "NEXT_MARKER";
    ParameterExceptionField["PREDICATE_TYPE"] = "PREDICATE_TYPE";
    ParameterExceptionField["RATE_KEY"] = "RATE_KEY";
    ParameterExceptionField["RESOURCE_ARN"] = "RESOURCE_ARN";
    ParameterExceptionField["RULE_TYPE"] = "RULE_TYPE";
    ParameterExceptionField["SIZE_CONSTRAINT_COMPARISON_OPERATOR"] = "SIZE_CONSTRAINT_COMPARISON_OPERATOR";
    ParameterExceptionField["SQL_INJECTION_MATCH_FIELD_TYPE"] = "SQL_INJECTION_MATCH_FIELD_TYPE";
    ParameterExceptionField["TAGS"] = "TAGS";
    ParameterExceptionField["TAG_KEYS"] = "TAG_KEYS";
    ParameterExceptionField["WAF_ACTION"] = "WAF_ACTION";
    ParameterExceptionField["WAF_OVERRIDE_ACTION"] = "WAF_OVERRIDE_ACTION";
})(ParameterExceptionField || (ParameterExceptionField = {}));
export var ParameterExceptionReason;
(function (ParameterExceptionReason) {
    ParameterExceptionReason["ILLEGAL_ARGUMENT"] = "ILLEGAL_ARGUMENT";
    ParameterExceptionReason["ILLEGAL_COMBINATION"] = "ILLEGAL_COMBINATION";
    ParameterExceptionReason["INVALID_OPTION"] = "INVALID_OPTION";
    ParameterExceptionReason["INVALID_TAG_KEY"] = "INVALID_TAG_KEY";
})(ParameterExceptionReason || (ParameterExceptionReason = {}));
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
export var CreateByteMatchSetRequest;
(function (CreateByteMatchSetRequest) {
    /**
     * @internal
     */
    CreateByteMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateByteMatchSetRequest || (CreateByteMatchSetRequest = {}));
export var MatchFieldType;
(function (MatchFieldType) {
    MatchFieldType["ALL_QUERY_ARGS"] = "ALL_QUERY_ARGS";
    MatchFieldType["BODY"] = "BODY";
    MatchFieldType["HEADER"] = "HEADER";
    MatchFieldType["METHOD"] = "METHOD";
    MatchFieldType["QUERY_STRING"] = "QUERY_STRING";
    MatchFieldType["SINGLE_QUERY_ARG"] = "SINGLE_QUERY_ARG";
    MatchFieldType["URI"] = "URI";
})(MatchFieldType || (MatchFieldType = {}));
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
export var TextTransformation;
(function (TextTransformation) {
    TextTransformation["CMD_LINE"] = "CMD_LINE";
    TextTransformation["COMPRESS_WHITE_SPACE"] = "COMPRESS_WHITE_SPACE";
    TextTransformation["HTML_ENTITY_DECODE"] = "HTML_ENTITY_DECODE";
    TextTransformation["LOWERCASE"] = "LOWERCASE";
    TextTransformation["NONE"] = "NONE";
    TextTransformation["URL_DECODE"] = "URL_DECODE";
})(TextTransformation || (TextTransformation = {}));
export var ByteMatchTuple;
(function (ByteMatchTuple) {
    /**
     * @internal
     */
    ByteMatchTuple.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ByteMatchTuple || (ByteMatchTuple = {}));
export var ByteMatchSet;
(function (ByteMatchSet) {
    /**
     * @internal
     */
    ByteMatchSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ByteMatchSet || (ByteMatchSet = {}));
export var CreateByteMatchSetResponse;
(function (CreateByteMatchSetResponse) {
    /**
     * @internal
     */
    CreateByteMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateByteMatchSetResponse || (CreateByteMatchSetResponse = {}));
export var WAFDisallowedNameException;
(function (WAFDisallowedNameException) {
    /**
     * @internal
     */
    WAFDisallowedNameException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFDisallowedNameException || (WAFDisallowedNameException = {}));
export var WAFLimitsExceededException;
(function (WAFLimitsExceededException) {
    /**
     * @internal
     */
    WAFLimitsExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFLimitsExceededException || (WAFLimitsExceededException = {}));
export var WAFStaleDataException;
(function (WAFStaleDataException) {
    /**
     * @internal
     */
    WAFStaleDataException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFStaleDataException || (WAFStaleDataException = {}));
export var CreateGeoMatchSetRequest;
(function (CreateGeoMatchSetRequest) {
    /**
     * @internal
     */
    CreateGeoMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGeoMatchSetRequest || (CreateGeoMatchSetRequest = {}));
export var GeoMatchConstraintType;
(function (GeoMatchConstraintType) {
    GeoMatchConstraintType["Country"] = "Country";
})(GeoMatchConstraintType || (GeoMatchConstraintType = {}));
export var GeoMatchConstraintValue;
(function (GeoMatchConstraintValue) {
    GeoMatchConstraintValue["AD"] = "AD";
    GeoMatchConstraintValue["AE"] = "AE";
    GeoMatchConstraintValue["AF"] = "AF";
    GeoMatchConstraintValue["AG"] = "AG";
    GeoMatchConstraintValue["AI"] = "AI";
    GeoMatchConstraintValue["AL"] = "AL";
    GeoMatchConstraintValue["AM"] = "AM";
    GeoMatchConstraintValue["AO"] = "AO";
    GeoMatchConstraintValue["AQ"] = "AQ";
    GeoMatchConstraintValue["AR"] = "AR";
    GeoMatchConstraintValue["AS"] = "AS";
    GeoMatchConstraintValue["AT"] = "AT";
    GeoMatchConstraintValue["AU"] = "AU";
    GeoMatchConstraintValue["AW"] = "AW";
    GeoMatchConstraintValue["AX"] = "AX";
    GeoMatchConstraintValue["AZ"] = "AZ";
    GeoMatchConstraintValue["BA"] = "BA";
    GeoMatchConstraintValue["BB"] = "BB";
    GeoMatchConstraintValue["BD"] = "BD";
    GeoMatchConstraintValue["BE"] = "BE";
    GeoMatchConstraintValue["BF"] = "BF";
    GeoMatchConstraintValue["BG"] = "BG";
    GeoMatchConstraintValue["BH"] = "BH";
    GeoMatchConstraintValue["BI"] = "BI";
    GeoMatchConstraintValue["BJ"] = "BJ";
    GeoMatchConstraintValue["BL"] = "BL";
    GeoMatchConstraintValue["BM"] = "BM";
    GeoMatchConstraintValue["BN"] = "BN";
    GeoMatchConstraintValue["BO"] = "BO";
    GeoMatchConstraintValue["BQ"] = "BQ";
    GeoMatchConstraintValue["BR"] = "BR";
    GeoMatchConstraintValue["BS"] = "BS";
    GeoMatchConstraintValue["BT"] = "BT";
    GeoMatchConstraintValue["BV"] = "BV";
    GeoMatchConstraintValue["BW"] = "BW";
    GeoMatchConstraintValue["BY"] = "BY";
    GeoMatchConstraintValue["BZ"] = "BZ";
    GeoMatchConstraintValue["CA"] = "CA";
    GeoMatchConstraintValue["CC"] = "CC";
    GeoMatchConstraintValue["CD"] = "CD";
    GeoMatchConstraintValue["CF"] = "CF";
    GeoMatchConstraintValue["CG"] = "CG";
    GeoMatchConstraintValue["CH"] = "CH";
    GeoMatchConstraintValue["CI"] = "CI";
    GeoMatchConstraintValue["CK"] = "CK";
    GeoMatchConstraintValue["CL"] = "CL";
    GeoMatchConstraintValue["CM"] = "CM";
    GeoMatchConstraintValue["CN"] = "CN";
    GeoMatchConstraintValue["CO"] = "CO";
    GeoMatchConstraintValue["CR"] = "CR";
    GeoMatchConstraintValue["CU"] = "CU";
    GeoMatchConstraintValue["CV"] = "CV";
    GeoMatchConstraintValue["CW"] = "CW";
    GeoMatchConstraintValue["CX"] = "CX";
    GeoMatchConstraintValue["CY"] = "CY";
    GeoMatchConstraintValue["CZ"] = "CZ";
    GeoMatchConstraintValue["DE"] = "DE";
    GeoMatchConstraintValue["DJ"] = "DJ";
    GeoMatchConstraintValue["DK"] = "DK";
    GeoMatchConstraintValue["DM"] = "DM";
    GeoMatchConstraintValue["DO"] = "DO";
    GeoMatchConstraintValue["DZ"] = "DZ";
    GeoMatchConstraintValue["EC"] = "EC";
    GeoMatchConstraintValue["EE"] = "EE";
    GeoMatchConstraintValue["EG"] = "EG";
    GeoMatchConstraintValue["EH"] = "EH";
    GeoMatchConstraintValue["ER"] = "ER";
    GeoMatchConstraintValue["ES"] = "ES";
    GeoMatchConstraintValue["ET"] = "ET";
    GeoMatchConstraintValue["FI"] = "FI";
    GeoMatchConstraintValue["FJ"] = "FJ";
    GeoMatchConstraintValue["FK"] = "FK";
    GeoMatchConstraintValue["FM"] = "FM";
    GeoMatchConstraintValue["FO"] = "FO";
    GeoMatchConstraintValue["FR"] = "FR";
    GeoMatchConstraintValue["GA"] = "GA";
    GeoMatchConstraintValue["GB"] = "GB";
    GeoMatchConstraintValue["GD"] = "GD";
    GeoMatchConstraintValue["GE"] = "GE";
    GeoMatchConstraintValue["GF"] = "GF";
    GeoMatchConstraintValue["GG"] = "GG";
    GeoMatchConstraintValue["GH"] = "GH";
    GeoMatchConstraintValue["GI"] = "GI";
    GeoMatchConstraintValue["GL"] = "GL";
    GeoMatchConstraintValue["GM"] = "GM";
    GeoMatchConstraintValue["GN"] = "GN";
    GeoMatchConstraintValue["GP"] = "GP";
    GeoMatchConstraintValue["GQ"] = "GQ";
    GeoMatchConstraintValue["GR"] = "GR";
    GeoMatchConstraintValue["GS"] = "GS";
    GeoMatchConstraintValue["GT"] = "GT";
    GeoMatchConstraintValue["GU"] = "GU";
    GeoMatchConstraintValue["GW"] = "GW";
    GeoMatchConstraintValue["GY"] = "GY";
    GeoMatchConstraintValue["HK"] = "HK";
    GeoMatchConstraintValue["HM"] = "HM";
    GeoMatchConstraintValue["HN"] = "HN";
    GeoMatchConstraintValue["HR"] = "HR";
    GeoMatchConstraintValue["HT"] = "HT";
    GeoMatchConstraintValue["HU"] = "HU";
    GeoMatchConstraintValue["ID"] = "ID";
    GeoMatchConstraintValue["IE"] = "IE";
    GeoMatchConstraintValue["IL"] = "IL";
    GeoMatchConstraintValue["IM"] = "IM";
    GeoMatchConstraintValue["IN"] = "IN";
    GeoMatchConstraintValue["IO"] = "IO";
    GeoMatchConstraintValue["IQ"] = "IQ";
    GeoMatchConstraintValue["IR"] = "IR";
    GeoMatchConstraintValue["IS"] = "IS";
    GeoMatchConstraintValue["IT"] = "IT";
    GeoMatchConstraintValue["JE"] = "JE";
    GeoMatchConstraintValue["JM"] = "JM";
    GeoMatchConstraintValue["JO"] = "JO";
    GeoMatchConstraintValue["JP"] = "JP";
    GeoMatchConstraintValue["KE"] = "KE";
    GeoMatchConstraintValue["KG"] = "KG";
    GeoMatchConstraintValue["KH"] = "KH";
    GeoMatchConstraintValue["KI"] = "KI";
    GeoMatchConstraintValue["KM"] = "KM";
    GeoMatchConstraintValue["KN"] = "KN";
    GeoMatchConstraintValue["KP"] = "KP";
    GeoMatchConstraintValue["KR"] = "KR";
    GeoMatchConstraintValue["KW"] = "KW";
    GeoMatchConstraintValue["KY"] = "KY";
    GeoMatchConstraintValue["KZ"] = "KZ";
    GeoMatchConstraintValue["LA"] = "LA";
    GeoMatchConstraintValue["LB"] = "LB";
    GeoMatchConstraintValue["LC"] = "LC";
    GeoMatchConstraintValue["LI"] = "LI";
    GeoMatchConstraintValue["LK"] = "LK";
    GeoMatchConstraintValue["LR"] = "LR";
    GeoMatchConstraintValue["LS"] = "LS";
    GeoMatchConstraintValue["LT"] = "LT";
    GeoMatchConstraintValue["LU"] = "LU";
    GeoMatchConstraintValue["LV"] = "LV";
    GeoMatchConstraintValue["LY"] = "LY";
    GeoMatchConstraintValue["MA"] = "MA";
    GeoMatchConstraintValue["MC"] = "MC";
    GeoMatchConstraintValue["MD"] = "MD";
    GeoMatchConstraintValue["ME"] = "ME";
    GeoMatchConstraintValue["MF"] = "MF";
    GeoMatchConstraintValue["MG"] = "MG";
    GeoMatchConstraintValue["MH"] = "MH";
    GeoMatchConstraintValue["MK"] = "MK";
    GeoMatchConstraintValue["ML"] = "ML";
    GeoMatchConstraintValue["MM"] = "MM";
    GeoMatchConstraintValue["MN"] = "MN";
    GeoMatchConstraintValue["MO"] = "MO";
    GeoMatchConstraintValue["MP"] = "MP";
    GeoMatchConstraintValue["MQ"] = "MQ";
    GeoMatchConstraintValue["MR"] = "MR";
    GeoMatchConstraintValue["MS"] = "MS";
    GeoMatchConstraintValue["MT"] = "MT";
    GeoMatchConstraintValue["MU"] = "MU";
    GeoMatchConstraintValue["MV"] = "MV";
    GeoMatchConstraintValue["MW"] = "MW";
    GeoMatchConstraintValue["MX"] = "MX";
    GeoMatchConstraintValue["MY"] = "MY";
    GeoMatchConstraintValue["MZ"] = "MZ";
    GeoMatchConstraintValue["NA"] = "NA";
    GeoMatchConstraintValue["NC"] = "NC";
    GeoMatchConstraintValue["NE"] = "NE";
    GeoMatchConstraintValue["NF"] = "NF";
    GeoMatchConstraintValue["NG"] = "NG";
    GeoMatchConstraintValue["NI"] = "NI";
    GeoMatchConstraintValue["NL"] = "NL";
    GeoMatchConstraintValue["NO"] = "NO";
    GeoMatchConstraintValue["NP"] = "NP";
    GeoMatchConstraintValue["NR"] = "NR";
    GeoMatchConstraintValue["NU"] = "NU";
    GeoMatchConstraintValue["NZ"] = "NZ";
    GeoMatchConstraintValue["OM"] = "OM";
    GeoMatchConstraintValue["PA"] = "PA";
    GeoMatchConstraintValue["PE"] = "PE";
    GeoMatchConstraintValue["PF"] = "PF";
    GeoMatchConstraintValue["PG"] = "PG";
    GeoMatchConstraintValue["PH"] = "PH";
    GeoMatchConstraintValue["PK"] = "PK";
    GeoMatchConstraintValue["PL"] = "PL";
    GeoMatchConstraintValue["PM"] = "PM";
    GeoMatchConstraintValue["PN"] = "PN";
    GeoMatchConstraintValue["PR"] = "PR";
    GeoMatchConstraintValue["PS"] = "PS";
    GeoMatchConstraintValue["PT"] = "PT";
    GeoMatchConstraintValue["PW"] = "PW";
    GeoMatchConstraintValue["PY"] = "PY";
    GeoMatchConstraintValue["QA"] = "QA";
    GeoMatchConstraintValue["RE"] = "RE";
    GeoMatchConstraintValue["RO"] = "RO";
    GeoMatchConstraintValue["RS"] = "RS";
    GeoMatchConstraintValue["RU"] = "RU";
    GeoMatchConstraintValue["RW"] = "RW";
    GeoMatchConstraintValue["SA"] = "SA";
    GeoMatchConstraintValue["SB"] = "SB";
    GeoMatchConstraintValue["SC"] = "SC";
    GeoMatchConstraintValue["SD"] = "SD";
    GeoMatchConstraintValue["SE"] = "SE";
    GeoMatchConstraintValue["SG"] = "SG";
    GeoMatchConstraintValue["SH"] = "SH";
    GeoMatchConstraintValue["SI"] = "SI";
    GeoMatchConstraintValue["SJ"] = "SJ";
    GeoMatchConstraintValue["SK"] = "SK";
    GeoMatchConstraintValue["SL"] = "SL";
    GeoMatchConstraintValue["SM"] = "SM";
    GeoMatchConstraintValue["SN"] = "SN";
    GeoMatchConstraintValue["SO"] = "SO";
    GeoMatchConstraintValue["SR"] = "SR";
    GeoMatchConstraintValue["SS"] = "SS";
    GeoMatchConstraintValue["ST"] = "ST";
    GeoMatchConstraintValue["SV"] = "SV";
    GeoMatchConstraintValue["SX"] = "SX";
    GeoMatchConstraintValue["SY"] = "SY";
    GeoMatchConstraintValue["SZ"] = "SZ";
    GeoMatchConstraintValue["TC"] = "TC";
    GeoMatchConstraintValue["TD"] = "TD";
    GeoMatchConstraintValue["TF"] = "TF";
    GeoMatchConstraintValue["TG"] = "TG";
    GeoMatchConstraintValue["TH"] = "TH";
    GeoMatchConstraintValue["TJ"] = "TJ";
    GeoMatchConstraintValue["TK"] = "TK";
    GeoMatchConstraintValue["TL"] = "TL";
    GeoMatchConstraintValue["TM"] = "TM";
    GeoMatchConstraintValue["TN"] = "TN";
    GeoMatchConstraintValue["TO"] = "TO";
    GeoMatchConstraintValue["TR"] = "TR";
    GeoMatchConstraintValue["TT"] = "TT";
    GeoMatchConstraintValue["TV"] = "TV";
    GeoMatchConstraintValue["TW"] = "TW";
    GeoMatchConstraintValue["TZ"] = "TZ";
    GeoMatchConstraintValue["UA"] = "UA";
    GeoMatchConstraintValue["UG"] = "UG";
    GeoMatchConstraintValue["UM"] = "UM";
    GeoMatchConstraintValue["US"] = "US";
    GeoMatchConstraintValue["UY"] = "UY";
    GeoMatchConstraintValue["UZ"] = "UZ";
    GeoMatchConstraintValue["VA"] = "VA";
    GeoMatchConstraintValue["VC"] = "VC";
    GeoMatchConstraintValue["VE"] = "VE";
    GeoMatchConstraintValue["VG"] = "VG";
    GeoMatchConstraintValue["VI"] = "VI";
    GeoMatchConstraintValue["VN"] = "VN";
    GeoMatchConstraintValue["VU"] = "VU";
    GeoMatchConstraintValue["WF"] = "WF";
    GeoMatchConstraintValue["WS"] = "WS";
    GeoMatchConstraintValue["YE"] = "YE";
    GeoMatchConstraintValue["YT"] = "YT";
    GeoMatchConstraintValue["ZA"] = "ZA";
    GeoMatchConstraintValue["ZM"] = "ZM";
    GeoMatchConstraintValue["ZW"] = "ZW";
})(GeoMatchConstraintValue || (GeoMatchConstraintValue = {}));
export var GeoMatchConstraint;
(function (GeoMatchConstraint) {
    /**
     * @internal
     */
    GeoMatchConstraint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GeoMatchConstraint || (GeoMatchConstraint = {}));
export var GeoMatchSet;
(function (GeoMatchSet) {
    /**
     * @internal
     */
    GeoMatchSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GeoMatchSet || (GeoMatchSet = {}));
export var CreateGeoMatchSetResponse;
(function (CreateGeoMatchSetResponse) {
    /**
     * @internal
     */
    CreateGeoMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateGeoMatchSetResponse || (CreateGeoMatchSetResponse = {}));
export var CreateIPSetRequest;
(function (CreateIPSetRequest) {
    /**
     * @internal
     */
    CreateIPSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIPSetRequest || (CreateIPSetRequest = {}));
export var IPSetDescriptorType;
(function (IPSetDescriptorType) {
    IPSetDescriptorType["IPV4"] = "IPV4";
    IPSetDescriptorType["IPV6"] = "IPV6";
})(IPSetDescriptorType || (IPSetDescriptorType = {}));
export var IPSetDescriptor;
(function (IPSetDescriptor) {
    /**
     * @internal
     */
    IPSetDescriptor.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IPSetDescriptor || (IPSetDescriptor = {}));
export var IPSet;
(function (IPSet) {
    /**
     * @internal
     */
    IPSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IPSet || (IPSet = {}));
export var CreateIPSetResponse;
(function (CreateIPSetResponse) {
    /**
     * @internal
     */
    CreateIPSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateIPSetResponse || (CreateIPSetResponse = {}));
export var RateKey;
(function (RateKey) {
    RateKey["IP"] = "IP";
})(RateKey || (RateKey = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateRateBasedRuleRequest;
(function (CreateRateBasedRuleRequest) {
    /**
     * @internal
     */
    CreateRateBasedRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRateBasedRuleRequest || (CreateRateBasedRuleRequest = {}));
export var PredicateType;
(function (PredicateType) {
    PredicateType["BYTE_MATCH"] = "ByteMatch";
    PredicateType["GEO_MATCH"] = "GeoMatch";
    PredicateType["IP_MATCH"] = "IPMatch";
    PredicateType["REGEX_MATCH"] = "RegexMatch";
    PredicateType["SIZE_CONSTRAINT"] = "SizeConstraint";
    PredicateType["SQL_INJECTION_MATCH"] = "SqlInjectionMatch";
    PredicateType["XSS_MATCH"] = "XssMatch";
})(PredicateType || (PredicateType = {}));
export var Predicate;
(function (Predicate) {
    /**
     * @internal
     */
    Predicate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Predicate || (Predicate = {}));
export var RateBasedRule;
(function (RateBasedRule) {
    /**
     * @internal
     */
    RateBasedRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RateBasedRule || (RateBasedRule = {}));
export var CreateRateBasedRuleResponse;
(function (CreateRateBasedRuleResponse) {
    /**
     * @internal
     */
    CreateRateBasedRuleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRateBasedRuleResponse || (CreateRateBasedRuleResponse = {}));
export var WAFBadRequestException;
(function (WAFBadRequestException) {
    /**
     * @internal
     */
    WAFBadRequestException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFBadRequestException || (WAFBadRequestException = {}));
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
export var CreateRegexMatchSetRequest;
(function (CreateRegexMatchSetRequest) {
    /**
     * @internal
     */
    CreateRegexMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRegexMatchSetRequest || (CreateRegexMatchSetRequest = {}));
export var RegexMatchTuple;
(function (RegexMatchTuple) {
    /**
     * @internal
     */
    RegexMatchTuple.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegexMatchTuple || (RegexMatchTuple = {}));
export var RegexMatchSet;
(function (RegexMatchSet) {
    /**
     * @internal
     */
    RegexMatchSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegexMatchSet || (RegexMatchSet = {}));
export var CreateRegexMatchSetResponse;
(function (CreateRegexMatchSetResponse) {
    /**
     * @internal
     */
    CreateRegexMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRegexMatchSetResponse || (CreateRegexMatchSetResponse = {}));
export var CreateRegexPatternSetRequest;
(function (CreateRegexPatternSetRequest) {
    /**
     * @internal
     */
    CreateRegexPatternSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRegexPatternSetRequest || (CreateRegexPatternSetRequest = {}));
export var RegexPatternSet;
(function (RegexPatternSet) {
    /**
     * @internal
     */
    RegexPatternSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegexPatternSet || (RegexPatternSet = {}));
export var CreateRegexPatternSetResponse;
(function (CreateRegexPatternSetResponse) {
    /**
     * @internal
     */
    CreateRegexPatternSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRegexPatternSetResponse || (CreateRegexPatternSetResponse = {}));
export var CreateRuleRequest;
(function (CreateRuleRequest) {
    /**
     * @internal
     */
    CreateRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRuleRequest || (CreateRuleRequest = {}));
export var Rule;
(function (Rule) {
    /**
     * @internal
     */
    Rule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Rule || (Rule = {}));
export var CreateRuleResponse;
(function (CreateRuleResponse) {
    /**
     * @internal
     */
    CreateRuleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRuleResponse || (CreateRuleResponse = {}));
export var CreateRuleGroupRequest;
(function (CreateRuleGroupRequest) {
    /**
     * @internal
     */
    CreateRuleGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRuleGroupRequest || (CreateRuleGroupRequest = {}));
export var RuleGroup;
(function (RuleGroup) {
    /**
     * @internal
     */
    RuleGroup.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleGroup || (RuleGroup = {}));
export var CreateRuleGroupResponse;
(function (CreateRuleGroupResponse) {
    /**
     * @internal
     */
    CreateRuleGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateRuleGroupResponse || (CreateRuleGroupResponse = {}));
export var CreateSizeConstraintSetRequest;
(function (CreateSizeConstraintSetRequest) {
    /**
     * @internal
     */
    CreateSizeConstraintSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSizeConstraintSetRequest || (CreateSizeConstraintSetRequest = {}));
export var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["EQ"] = "EQ";
    ComparisonOperator["GE"] = "GE";
    ComparisonOperator["GT"] = "GT";
    ComparisonOperator["LE"] = "LE";
    ComparisonOperator["LT"] = "LT";
    ComparisonOperator["NE"] = "NE";
})(ComparisonOperator || (ComparisonOperator = {}));
export var SizeConstraint;
(function (SizeConstraint) {
    /**
     * @internal
     */
    SizeConstraint.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SizeConstraint || (SizeConstraint = {}));
export var SizeConstraintSet;
(function (SizeConstraintSet) {
    /**
     * @internal
     */
    SizeConstraintSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SizeConstraintSet || (SizeConstraintSet = {}));
export var CreateSizeConstraintSetResponse;
(function (CreateSizeConstraintSetResponse) {
    /**
     * @internal
     */
    CreateSizeConstraintSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSizeConstraintSetResponse || (CreateSizeConstraintSetResponse = {}));
export var CreateSqlInjectionMatchSetRequest;
(function (CreateSqlInjectionMatchSetRequest) {
    /**
     * @internal
     */
    CreateSqlInjectionMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSqlInjectionMatchSetRequest || (CreateSqlInjectionMatchSetRequest = {}));
export var SqlInjectionMatchTuple;
(function (SqlInjectionMatchTuple) {
    /**
     * @internal
     */
    SqlInjectionMatchTuple.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SqlInjectionMatchTuple || (SqlInjectionMatchTuple = {}));
export var SqlInjectionMatchSet;
(function (SqlInjectionMatchSet) {
    /**
     * @internal
     */
    SqlInjectionMatchSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SqlInjectionMatchSet || (SqlInjectionMatchSet = {}));
export var CreateSqlInjectionMatchSetResponse;
(function (CreateSqlInjectionMatchSetResponse) {
    /**
     * @internal
     */
    CreateSqlInjectionMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateSqlInjectionMatchSetResponse || (CreateSqlInjectionMatchSetResponse = {}));
export var CreateWebACLRequest;
(function (CreateWebACLRequest) {
    /**
     * @internal
     */
    CreateWebACLRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWebACLRequest || (CreateWebACLRequest = {}));
export var WebACL;
(function (WebACL) {
    /**
     * @internal
     */
    WebACL.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebACL || (WebACL = {}));
export var CreateWebACLResponse;
(function (CreateWebACLResponse) {
    /**
     * @internal
     */
    CreateWebACLResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWebACLResponse || (CreateWebACLResponse = {}));
export var CreateWebACLMigrationStackRequest;
(function (CreateWebACLMigrationStackRequest) {
    /**
     * @internal
     */
    CreateWebACLMigrationStackRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWebACLMigrationStackRequest || (CreateWebACLMigrationStackRequest = {}));
export var CreateWebACLMigrationStackResponse;
(function (CreateWebACLMigrationStackResponse) {
    /**
     * @internal
     */
    CreateWebACLMigrationStackResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateWebACLMigrationStackResponse || (CreateWebACLMigrationStackResponse = {}));
export var MigrationErrorType;
(function (MigrationErrorType) {
    MigrationErrorType["ENTITY_NOT_FOUND"] = "ENTITY_NOT_FOUND";
    MigrationErrorType["ENTITY_NOT_SUPPORTED"] = "ENTITY_NOT_SUPPORTED";
    MigrationErrorType["S3_BUCKET_INVALID_REGION"] = "S3_BUCKET_INVALID_REGION";
    MigrationErrorType["S3_BUCKET_NOT_ACCESSIBLE"] = "S3_BUCKET_NOT_ACCESSIBLE";
    MigrationErrorType["S3_BUCKET_NOT_FOUND"] = "S3_BUCKET_NOT_FOUND";
    MigrationErrorType["S3_BUCKET_NO_PERMISSION"] = "S3_BUCKET_NO_PERMISSION";
    MigrationErrorType["S3_INTERNAL_ERROR"] = "S3_INTERNAL_ERROR";
})(MigrationErrorType || (MigrationErrorType = {}));
export var WAFEntityMigrationException;
(function (WAFEntityMigrationException) {
    /**
     * @internal
     */
    WAFEntityMigrationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFEntityMigrationException || (WAFEntityMigrationException = {}));
export var WAFInvalidOperationException;
(function (WAFInvalidOperationException) {
    /**
     * @internal
     */
    WAFInvalidOperationException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFInvalidOperationException || (WAFInvalidOperationException = {}));
export var CreateXssMatchSetRequest;
(function (CreateXssMatchSetRequest) {
    /**
     * @internal
     */
    CreateXssMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateXssMatchSetRequest || (CreateXssMatchSetRequest = {}));
export var XssMatchTuple;
(function (XssMatchTuple) {
    /**
     * @internal
     */
    XssMatchTuple.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(XssMatchTuple || (XssMatchTuple = {}));
export var XssMatchSet;
(function (XssMatchSet) {
    /**
     * @internal
     */
    XssMatchSet.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(XssMatchSet || (XssMatchSet = {}));
export var CreateXssMatchSetResponse;
(function (CreateXssMatchSetResponse) {
    /**
     * @internal
     */
    CreateXssMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateXssMatchSetResponse || (CreateXssMatchSetResponse = {}));
export var DeleteByteMatchSetRequest;
(function (DeleteByteMatchSetRequest) {
    /**
     * @internal
     */
    DeleteByteMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteByteMatchSetRequest || (DeleteByteMatchSetRequest = {}));
export var DeleteByteMatchSetResponse;
(function (DeleteByteMatchSetResponse) {
    /**
     * @internal
     */
    DeleteByteMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteByteMatchSetResponse || (DeleteByteMatchSetResponse = {}));
export var WAFNonEmptyEntityException;
(function (WAFNonEmptyEntityException) {
    /**
     * @internal
     */
    WAFNonEmptyEntityException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFNonEmptyEntityException || (WAFNonEmptyEntityException = {}));
export var WAFReferencedItemException;
(function (WAFReferencedItemException) {
    /**
     * @internal
     */
    WAFReferencedItemException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFReferencedItemException || (WAFReferencedItemException = {}));
export var DeleteGeoMatchSetRequest;
(function (DeleteGeoMatchSetRequest) {
    /**
     * @internal
     */
    DeleteGeoMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGeoMatchSetRequest || (DeleteGeoMatchSetRequest = {}));
export var DeleteGeoMatchSetResponse;
(function (DeleteGeoMatchSetResponse) {
    /**
     * @internal
     */
    DeleteGeoMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteGeoMatchSetResponse || (DeleteGeoMatchSetResponse = {}));
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
export var DeleteRateBasedRuleRequest;
(function (DeleteRateBasedRuleRequest) {
    /**
     * @internal
     */
    DeleteRateBasedRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRateBasedRuleRequest || (DeleteRateBasedRuleRequest = {}));
export var DeleteRateBasedRuleResponse;
(function (DeleteRateBasedRuleResponse) {
    /**
     * @internal
     */
    DeleteRateBasedRuleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRateBasedRuleResponse || (DeleteRateBasedRuleResponse = {}));
export var DeleteRegexMatchSetRequest;
(function (DeleteRegexMatchSetRequest) {
    /**
     * @internal
     */
    DeleteRegexMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRegexMatchSetRequest || (DeleteRegexMatchSetRequest = {}));
export var DeleteRegexMatchSetResponse;
(function (DeleteRegexMatchSetResponse) {
    /**
     * @internal
     */
    DeleteRegexMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRegexMatchSetResponse || (DeleteRegexMatchSetResponse = {}));
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
export var DeleteRuleRequest;
(function (DeleteRuleRequest) {
    /**
     * @internal
     */
    DeleteRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRuleRequest || (DeleteRuleRequest = {}));
export var DeleteRuleResponse;
(function (DeleteRuleResponse) {
    /**
     * @internal
     */
    DeleteRuleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteRuleResponse || (DeleteRuleResponse = {}));
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
export var DeleteSizeConstraintSetRequest;
(function (DeleteSizeConstraintSetRequest) {
    /**
     * @internal
     */
    DeleteSizeConstraintSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSizeConstraintSetRequest || (DeleteSizeConstraintSetRequest = {}));
export var DeleteSizeConstraintSetResponse;
(function (DeleteSizeConstraintSetResponse) {
    /**
     * @internal
     */
    DeleteSizeConstraintSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSizeConstraintSetResponse || (DeleteSizeConstraintSetResponse = {}));
export var DeleteSqlInjectionMatchSetRequest;
(function (DeleteSqlInjectionMatchSetRequest) {
    /**
     * @internal
     */
    DeleteSqlInjectionMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSqlInjectionMatchSetRequest || (DeleteSqlInjectionMatchSetRequest = {}));
export var DeleteSqlInjectionMatchSetResponse;
(function (DeleteSqlInjectionMatchSetResponse) {
    /**
     * @internal
     */
    DeleteSqlInjectionMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteSqlInjectionMatchSetResponse || (DeleteSqlInjectionMatchSetResponse = {}));
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
export var DeleteXssMatchSetRequest;
(function (DeleteXssMatchSetRequest) {
    /**
     * @internal
     */
    DeleteXssMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteXssMatchSetRequest || (DeleteXssMatchSetRequest = {}));
export var DeleteXssMatchSetResponse;
(function (DeleteXssMatchSetResponse) {
    /**
     * @internal
     */
    DeleteXssMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteXssMatchSetResponse || (DeleteXssMatchSetResponse = {}));
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
export var GetByteMatchSetRequest;
(function (GetByteMatchSetRequest) {
    /**
     * @internal
     */
    GetByteMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetByteMatchSetRequest || (GetByteMatchSetRequest = {}));
export var GetByteMatchSetResponse;
(function (GetByteMatchSetResponse) {
    /**
     * @internal
     */
    GetByteMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetByteMatchSetResponse || (GetByteMatchSetResponse = {}));
export var GetChangeTokenRequest;
(function (GetChangeTokenRequest) {
    /**
     * @internal
     */
    GetChangeTokenRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetChangeTokenRequest || (GetChangeTokenRequest = {}));
export var GetChangeTokenResponse;
(function (GetChangeTokenResponse) {
    /**
     * @internal
     */
    GetChangeTokenResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetChangeTokenResponse || (GetChangeTokenResponse = {}));
export var GetChangeTokenStatusRequest;
(function (GetChangeTokenStatusRequest) {
    /**
     * @internal
     */
    GetChangeTokenStatusRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetChangeTokenStatusRequest || (GetChangeTokenStatusRequest = {}));
export var ChangeTokenStatus;
(function (ChangeTokenStatus) {
    ChangeTokenStatus["INSYNC"] = "INSYNC";
    ChangeTokenStatus["PENDING"] = "PENDING";
    ChangeTokenStatus["PROVISIONED"] = "PROVISIONED";
})(ChangeTokenStatus || (ChangeTokenStatus = {}));
export var GetChangeTokenStatusResponse;
(function (GetChangeTokenStatusResponse) {
    /**
     * @internal
     */
    GetChangeTokenStatusResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetChangeTokenStatusResponse || (GetChangeTokenStatusResponse = {}));
export var GetGeoMatchSetRequest;
(function (GetGeoMatchSetRequest) {
    /**
     * @internal
     */
    GetGeoMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGeoMatchSetRequest || (GetGeoMatchSetRequest = {}));
export var GetGeoMatchSetResponse;
(function (GetGeoMatchSetResponse) {
    /**
     * @internal
     */
    GetGeoMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetGeoMatchSetResponse || (GetGeoMatchSetResponse = {}));
export var GetIPSetRequest;
(function (GetIPSetRequest) {
    /**
     * @internal
     */
    GetIPSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetIPSetRequest || (GetIPSetRequest = {}));
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
export var GetRateBasedRuleRequest;
(function (GetRateBasedRuleRequest) {
    /**
     * @internal
     */
    GetRateBasedRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRateBasedRuleRequest || (GetRateBasedRuleRequest = {}));
export var GetRateBasedRuleResponse;
(function (GetRateBasedRuleResponse) {
    /**
     * @internal
     */
    GetRateBasedRuleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRateBasedRuleResponse || (GetRateBasedRuleResponse = {}));
export var GetRateBasedRuleManagedKeysRequest;
(function (GetRateBasedRuleManagedKeysRequest) {
    /**
     * @internal
     */
    GetRateBasedRuleManagedKeysRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRateBasedRuleManagedKeysRequest || (GetRateBasedRuleManagedKeysRequest = {}));
export var GetRateBasedRuleManagedKeysResponse;
(function (GetRateBasedRuleManagedKeysResponse) {
    /**
     * @internal
     */
    GetRateBasedRuleManagedKeysResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRateBasedRuleManagedKeysResponse || (GetRateBasedRuleManagedKeysResponse = {}));
export var GetRegexMatchSetRequest;
(function (GetRegexMatchSetRequest) {
    /**
     * @internal
     */
    GetRegexMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegexMatchSetRequest || (GetRegexMatchSetRequest = {}));
export var GetRegexMatchSetResponse;
(function (GetRegexMatchSetResponse) {
    /**
     * @internal
     */
    GetRegexMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegexMatchSetResponse || (GetRegexMatchSetResponse = {}));
export var GetRegexPatternSetRequest;
(function (GetRegexPatternSetRequest) {
    /**
     * @internal
     */
    GetRegexPatternSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegexPatternSetRequest || (GetRegexPatternSetRequest = {}));
export var GetRegexPatternSetResponse;
(function (GetRegexPatternSetResponse) {
    /**
     * @internal
     */
    GetRegexPatternSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRegexPatternSetResponse || (GetRegexPatternSetResponse = {}));
export var GetRuleRequest;
(function (GetRuleRequest) {
    /**
     * @internal
     */
    GetRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRuleRequest || (GetRuleRequest = {}));
export var GetRuleResponse;
(function (GetRuleResponse) {
    /**
     * @internal
     */
    GetRuleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRuleResponse || (GetRuleResponse = {}));
export var GetRuleGroupRequest;
(function (GetRuleGroupRequest) {
    /**
     * @internal
     */
    GetRuleGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRuleGroupRequest || (GetRuleGroupRequest = {}));
export var GetRuleGroupResponse;
(function (GetRuleGroupResponse) {
    /**
     * @internal
     */
    GetRuleGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetRuleGroupResponse || (GetRuleGroupResponse = {}));
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
export var GetSizeConstraintSetRequest;
(function (GetSizeConstraintSetRequest) {
    /**
     * @internal
     */
    GetSizeConstraintSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSizeConstraintSetRequest || (GetSizeConstraintSetRequest = {}));
export var GetSizeConstraintSetResponse;
(function (GetSizeConstraintSetResponse) {
    /**
     * @internal
     */
    GetSizeConstraintSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSizeConstraintSetResponse || (GetSizeConstraintSetResponse = {}));
export var GetSqlInjectionMatchSetRequest;
(function (GetSqlInjectionMatchSetRequest) {
    /**
     * @internal
     */
    GetSqlInjectionMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSqlInjectionMatchSetRequest || (GetSqlInjectionMatchSetRequest = {}));
export var GetSqlInjectionMatchSetResponse;
(function (GetSqlInjectionMatchSetResponse) {
    /**
     * @internal
     */
    GetSqlInjectionMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetSqlInjectionMatchSetResponse || (GetSqlInjectionMatchSetResponse = {}));
export var GetWebACLRequest;
(function (GetWebACLRequest) {
    /**
     * @internal
     */
    GetWebACLRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWebACLRequest || (GetWebACLRequest = {}));
export var GetWebACLResponse;
(function (GetWebACLResponse) {
    /**
     * @internal
     */
    GetWebACLResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWebACLResponse || (GetWebACLResponse = {}));
export var GetWebACLForResourceRequest;
(function (GetWebACLForResourceRequest) {
    /**
     * @internal
     */
    GetWebACLForResourceRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWebACLForResourceRequest || (GetWebACLForResourceRequest = {}));
export var WebACLSummary;
(function (WebACLSummary) {
    /**
     * @internal
     */
    WebACLSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebACLSummary || (WebACLSummary = {}));
export var GetWebACLForResourceResponse;
(function (GetWebACLForResourceResponse) {
    /**
     * @internal
     */
    GetWebACLForResourceResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetWebACLForResourceResponse || (GetWebACLForResourceResponse = {}));
export var GetXssMatchSetRequest;
(function (GetXssMatchSetRequest) {
    /**
     * @internal
     */
    GetXssMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetXssMatchSetRequest || (GetXssMatchSetRequest = {}));
export var GetXssMatchSetResponse;
(function (GetXssMatchSetResponse) {
    /**
     * @internal
     */
    GetXssMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetXssMatchSetResponse || (GetXssMatchSetResponse = {}));
export var ListActivatedRulesInRuleGroupRequest;
(function (ListActivatedRulesInRuleGroupRequest) {
    /**
     * @internal
     */
    ListActivatedRulesInRuleGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListActivatedRulesInRuleGroupRequest || (ListActivatedRulesInRuleGroupRequest = {}));
export var ListActivatedRulesInRuleGroupResponse;
(function (ListActivatedRulesInRuleGroupResponse) {
    /**
     * @internal
     */
    ListActivatedRulesInRuleGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListActivatedRulesInRuleGroupResponse || (ListActivatedRulesInRuleGroupResponse = {}));
export var ListByteMatchSetsRequest;
(function (ListByteMatchSetsRequest) {
    /**
     * @internal
     */
    ListByteMatchSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListByteMatchSetsRequest || (ListByteMatchSetsRequest = {}));
export var ByteMatchSetSummary;
(function (ByteMatchSetSummary) {
    /**
     * @internal
     */
    ByteMatchSetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ByteMatchSetSummary || (ByteMatchSetSummary = {}));
export var ListByteMatchSetsResponse;
(function (ListByteMatchSetsResponse) {
    /**
     * @internal
     */
    ListByteMatchSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListByteMatchSetsResponse || (ListByteMatchSetsResponse = {}));
export var ListGeoMatchSetsRequest;
(function (ListGeoMatchSetsRequest) {
    /**
     * @internal
     */
    ListGeoMatchSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGeoMatchSetsRequest || (ListGeoMatchSetsRequest = {}));
export var GeoMatchSetSummary;
(function (GeoMatchSetSummary) {
    /**
     * @internal
     */
    GeoMatchSetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GeoMatchSetSummary || (GeoMatchSetSummary = {}));
export var ListGeoMatchSetsResponse;
(function (ListGeoMatchSetsResponse) {
    /**
     * @internal
     */
    ListGeoMatchSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListGeoMatchSetsResponse || (ListGeoMatchSetsResponse = {}));
export var ListIPSetsRequest;
(function (ListIPSetsRequest) {
    /**
     * @internal
     */
    ListIPSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListIPSetsRequest || (ListIPSetsRequest = {}));
export var IPSetSummary;
(function (IPSetSummary) {
    /**
     * @internal
     */
    IPSetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IPSetSummary || (IPSetSummary = {}));
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
export var ListRateBasedRulesRequest;
(function (ListRateBasedRulesRequest) {
    /**
     * @internal
     */
    ListRateBasedRulesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRateBasedRulesRequest || (ListRateBasedRulesRequest = {}));
export var RuleSummary;
(function (RuleSummary) {
    /**
     * @internal
     */
    RuleSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleSummary || (RuleSummary = {}));
export var ListRateBasedRulesResponse;
(function (ListRateBasedRulesResponse) {
    /**
     * @internal
     */
    ListRateBasedRulesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRateBasedRulesResponse || (ListRateBasedRulesResponse = {}));
export var ListRegexMatchSetsRequest;
(function (ListRegexMatchSetsRequest) {
    /**
     * @internal
     */
    ListRegexMatchSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRegexMatchSetsRequest || (ListRegexMatchSetsRequest = {}));
export var RegexMatchSetSummary;
(function (RegexMatchSetSummary) {
    /**
     * @internal
     */
    RegexMatchSetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegexMatchSetSummary || (RegexMatchSetSummary = {}));
export var ListRegexMatchSetsResponse;
(function (ListRegexMatchSetsResponse) {
    /**
     * @internal
     */
    ListRegexMatchSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRegexMatchSetsResponse || (ListRegexMatchSetsResponse = {}));
export var ListRegexPatternSetsRequest;
(function (ListRegexPatternSetsRequest) {
    /**
     * @internal
     */
    ListRegexPatternSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRegexPatternSetsRequest || (ListRegexPatternSetsRequest = {}));
export var RegexPatternSetSummary;
(function (RegexPatternSetSummary) {
    /**
     * @internal
     */
    RegexPatternSetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegexPatternSetSummary || (RegexPatternSetSummary = {}));
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
export var RuleGroupSummary;
(function (RuleGroupSummary) {
    /**
     * @internal
     */
    RuleGroupSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleGroupSummary || (RuleGroupSummary = {}));
export var ListRuleGroupsResponse;
(function (ListRuleGroupsResponse) {
    /**
     * @internal
     */
    ListRuleGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRuleGroupsResponse || (ListRuleGroupsResponse = {}));
export var ListRulesRequest;
(function (ListRulesRequest) {
    /**
     * @internal
     */
    ListRulesRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRulesRequest || (ListRulesRequest = {}));
export var ListRulesResponse;
(function (ListRulesResponse) {
    /**
     * @internal
     */
    ListRulesResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListRulesResponse || (ListRulesResponse = {}));
export var ListSizeConstraintSetsRequest;
(function (ListSizeConstraintSetsRequest) {
    /**
     * @internal
     */
    ListSizeConstraintSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSizeConstraintSetsRequest || (ListSizeConstraintSetsRequest = {}));
export var SizeConstraintSetSummary;
(function (SizeConstraintSetSummary) {
    /**
     * @internal
     */
    SizeConstraintSetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SizeConstraintSetSummary || (SizeConstraintSetSummary = {}));
export var ListSizeConstraintSetsResponse;
(function (ListSizeConstraintSetsResponse) {
    /**
     * @internal
     */
    ListSizeConstraintSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSizeConstraintSetsResponse || (ListSizeConstraintSetsResponse = {}));
export var ListSqlInjectionMatchSetsRequest;
(function (ListSqlInjectionMatchSetsRequest) {
    /**
     * @internal
     */
    ListSqlInjectionMatchSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSqlInjectionMatchSetsRequest || (ListSqlInjectionMatchSetsRequest = {}));
export var SqlInjectionMatchSetSummary;
(function (SqlInjectionMatchSetSummary) {
    /**
     * @internal
     */
    SqlInjectionMatchSetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SqlInjectionMatchSetSummary || (SqlInjectionMatchSetSummary = {}));
export var ListSqlInjectionMatchSetsResponse;
(function (ListSqlInjectionMatchSetsResponse) {
    /**
     * @internal
     */
    ListSqlInjectionMatchSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSqlInjectionMatchSetsResponse || (ListSqlInjectionMatchSetsResponse = {}));
export var ListSubscribedRuleGroupsRequest;
(function (ListSubscribedRuleGroupsRequest) {
    /**
     * @internal
     */
    ListSubscribedRuleGroupsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSubscribedRuleGroupsRequest || (ListSubscribedRuleGroupsRequest = {}));
export var SubscribedRuleGroupSummary;
(function (SubscribedRuleGroupSummary) {
    /**
     * @internal
     */
    SubscribedRuleGroupSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SubscribedRuleGroupSummary || (SubscribedRuleGroupSummary = {}));
export var ListSubscribedRuleGroupsResponse;
(function (ListSubscribedRuleGroupsResponse) {
    /**
     * @internal
     */
    ListSubscribedRuleGroupsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListSubscribedRuleGroupsResponse || (ListSubscribedRuleGroupsResponse = {}));
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
export var ListXssMatchSetsRequest;
(function (ListXssMatchSetsRequest) {
    /**
     * @internal
     */
    ListXssMatchSetsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListXssMatchSetsRequest || (ListXssMatchSetsRequest = {}));
export var XssMatchSetSummary;
(function (XssMatchSetSummary) {
    /**
     * @internal
     */
    XssMatchSetSummary.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(XssMatchSetSummary || (XssMatchSetSummary = {}));
export var ListXssMatchSetsResponse;
(function (ListXssMatchSetsResponse) {
    /**
     * @internal
     */
    ListXssMatchSetsResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListXssMatchSetsResponse || (ListXssMatchSetsResponse = {}));
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
export var ChangeAction;
(function (ChangeAction) {
    ChangeAction["DELETE"] = "DELETE";
    ChangeAction["INSERT"] = "INSERT";
})(ChangeAction || (ChangeAction = {}));
export var ByteMatchSetUpdate;
(function (ByteMatchSetUpdate) {
    /**
     * @internal
     */
    ByteMatchSetUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ByteMatchSetUpdate || (ByteMatchSetUpdate = {}));
export var UpdateByteMatchSetRequest;
(function (UpdateByteMatchSetRequest) {
    /**
     * @internal
     */
    UpdateByteMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateByteMatchSetRequest || (UpdateByteMatchSetRequest = {}));
export var UpdateByteMatchSetResponse;
(function (UpdateByteMatchSetResponse) {
    /**
     * @internal
     */
    UpdateByteMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateByteMatchSetResponse || (UpdateByteMatchSetResponse = {}));
export var WAFNonexistentContainerException;
(function (WAFNonexistentContainerException) {
    /**
     * @internal
     */
    WAFNonexistentContainerException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFNonexistentContainerException || (WAFNonexistentContainerException = {}));
export var GeoMatchSetUpdate;
(function (GeoMatchSetUpdate) {
    /**
     * @internal
     */
    GeoMatchSetUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GeoMatchSetUpdate || (GeoMatchSetUpdate = {}));
export var UpdateGeoMatchSetRequest;
(function (UpdateGeoMatchSetRequest) {
    /**
     * @internal
     */
    UpdateGeoMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGeoMatchSetRequest || (UpdateGeoMatchSetRequest = {}));
export var UpdateGeoMatchSetResponse;
(function (UpdateGeoMatchSetResponse) {
    /**
     * @internal
     */
    UpdateGeoMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateGeoMatchSetResponse || (UpdateGeoMatchSetResponse = {}));
export var IPSetUpdate;
(function (IPSetUpdate) {
    /**
     * @internal
     */
    IPSetUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(IPSetUpdate || (IPSetUpdate = {}));
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
export var RuleUpdate;
(function (RuleUpdate) {
    /**
     * @internal
     */
    RuleUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleUpdate || (RuleUpdate = {}));
export var UpdateRateBasedRuleRequest;
(function (UpdateRateBasedRuleRequest) {
    /**
     * @internal
     */
    UpdateRateBasedRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRateBasedRuleRequest || (UpdateRateBasedRuleRequest = {}));
export var UpdateRateBasedRuleResponse;
(function (UpdateRateBasedRuleResponse) {
    /**
     * @internal
     */
    UpdateRateBasedRuleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRateBasedRuleResponse || (UpdateRateBasedRuleResponse = {}));
export var RegexMatchSetUpdate;
(function (RegexMatchSetUpdate) {
    /**
     * @internal
     */
    RegexMatchSetUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegexMatchSetUpdate || (RegexMatchSetUpdate = {}));
export var UpdateRegexMatchSetRequest;
(function (UpdateRegexMatchSetRequest) {
    /**
     * @internal
     */
    UpdateRegexMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRegexMatchSetRequest || (UpdateRegexMatchSetRequest = {}));
export var UpdateRegexMatchSetResponse;
(function (UpdateRegexMatchSetResponse) {
    /**
     * @internal
     */
    UpdateRegexMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRegexMatchSetResponse || (UpdateRegexMatchSetResponse = {}));
export var RegexPatternSetUpdate;
(function (RegexPatternSetUpdate) {
    /**
     * @internal
     */
    RegexPatternSetUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RegexPatternSetUpdate || (RegexPatternSetUpdate = {}));
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
export var WAFInvalidRegexPatternException;
(function (WAFInvalidRegexPatternException) {
    /**
     * @internal
     */
    WAFInvalidRegexPatternException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFInvalidRegexPatternException || (WAFInvalidRegexPatternException = {}));
export var UpdateRuleRequest;
(function (UpdateRuleRequest) {
    /**
     * @internal
     */
    UpdateRuleRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRuleRequest || (UpdateRuleRequest = {}));
export var UpdateRuleResponse;
(function (UpdateRuleResponse) {
    /**
     * @internal
     */
    UpdateRuleResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRuleResponse || (UpdateRuleResponse = {}));
export var RuleGroupUpdate;
(function (RuleGroupUpdate) {
    /**
     * @internal
     */
    RuleGroupUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(RuleGroupUpdate || (RuleGroupUpdate = {}));
export var UpdateRuleGroupRequest;
(function (UpdateRuleGroupRequest) {
    /**
     * @internal
     */
    UpdateRuleGroupRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRuleGroupRequest || (UpdateRuleGroupRequest = {}));
export var UpdateRuleGroupResponse;
(function (UpdateRuleGroupResponse) {
    /**
     * @internal
     */
    UpdateRuleGroupResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateRuleGroupResponse || (UpdateRuleGroupResponse = {}));
export var SizeConstraintSetUpdate;
(function (SizeConstraintSetUpdate) {
    /**
     * @internal
     */
    SizeConstraintSetUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SizeConstraintSetUpdate || (SizeConstraintSetUpdate = {}));
export var UpdateSizeConstraintSetRequest;
(function (UpdateSizeConstraintSetRequest) {
    /**
     * @internal
     */
    UpdateSizeConstraintSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSizeConstraintSetRequest || (UpdateSizeConstraintSetRequest = {}));
export var UpdateSizeConstraintSetResponse;
(function (UpdateSizeConstraintSetResponse) {
    /**
     * @internal
     */
    UpdateSizeConstraintSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSizeConstraintSetResponse || (UpdateSizeConstraintSetResponse = {}));
export var SqlInjectionMatchSetUpdate;
(function (SqlInjectionMatchSetUpdate) {
    /**
     * @internal
     */
    SqlInjectionMatchSetUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(SqlInjectionMatchSetUpdate || (SqlInjectionMatchSetUpdate = {}));
export var UpdateSqlInjectionMatchSetRequest;
(function (UpdateSqlInjectionMatchSetRequest) {
    /**
     * @internal
     */
    UpdateSqlInjectionMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSqlInjectionMatchSetRequest || (UpdateSqlInjectionMatchSetRequest = {}));
export var UpdateSqlInjectionMatchSetResponse;
(function (UpdateSqlInjectionMatchSetResponse) {
    /**
     * @internal
     */
    UpdateSqlInjectionMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateSqlInjectionMatchSetResponse || (UpdateSqlInjectionMatchSetResponse = {}));
export var WebACLUpdate;
(function (WebACLUpdate) {
    /**
     * @internal
     */
    WebACLUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WebACLUpdate || (WebACLUpdate = {}));
export var UpdateWebACLRequest;
(function (UpdateWebACLRequest) {
    /**
     * @internal
     */
    UpdateWebACLRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWebACLRequest || (UpdateWebACLRequest = {}));
export var UpdateWebACLResponse;
(function (UpdateWebACLResponse) {
    /**
     * @internal
     */
    UpdateWebACLResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateWebACLResponse || (UpdateWebACLResponse = {}));
export var WAFSubscriptionNotFoundException;
(function (WAFSubscriptionNotFoundException) {
    /**
     * @internal
     */
    WAFSubscriptionNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(WAFSubscriptionNotFoundException || (WAFSubscriptionNotFoundException = {}));
export var XssMatchSetUpdate;
(function (XssMatchSetUpdate) {
    /**
     * @internal
     */
    XssMatchSetUpdate.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(XssMatchSetUpdate || (XssMatchSetUpdate = {}));
export var UpdateXssMatchSetRequest;
(function (UpdateXssMatchSetRequest) {
    /**
     * @internal
     */
    UpdateXssMatchSetRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateXssMatchSetRequest || (UpdateXssMatchSetRequest = {}));
export var UpdateXssMatchSetResponse;
(function (UpdateXssMatchSetResponse) {
    /**
     * @internal
     */
    UpdateXssMatchSetResponse.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UpdateXssMatchSetResponse || (UpdateXssMatchSetResponse = {}));
//# sourceMappingURL=models_0.js.map