"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CountAction = exports.BlockAction = exports.CustomResponse = exports.WAFUnavailableEntityException = exports.WAFNonexistentItemException = exports.WAFInvalidParameterException = exports.ParameterExceptionField = exports.WAFInvalidOperationException = exports.WAFInternalErrorException = exports.AssociateWebACLResponse = exports.AssociateWebACLRequest = exports.XssMatchStatement = exports.SqliMatchStatement = exports.SizeConstraintStatement = exports.ComparisonOperator = exports.RuleGroupReferenceStatement = exports.RegexPatternSetReferenceStatement = exports.RateBasedStatementAggregateKeyType = exports.ExcludedRule = exports.LabelMatchStatement = exports.LabelMatchScope = exports.IPSetReferenceStatement = exports.IPSetForwardedIPConfig = exports.ForwardedIPPosition = exports.GeoMatchStatement = exports.ForwardedIPConfig = exports.FallbackBehavior = exports.CountryCode = exports.ByteMatchStatement = exports.TextTransformation = exports.TextTransformationType = exports.PositionalConstraint = exports.FieldToMatch = exports.UriPath = exports.SingleQueryArgument = exports.SingleHeader = exports.QueryString = exports.Method = exports.JsonBody = exports.JsonMatchScope = exports.JsonMatchPattern = exports.BodyParsingFallbackBehavior = exports.Body = exports.AllQueryArguments = exports.AllowAction = exports.CustomRequestHandling = exports.CustomHTTPHeader = exports.All = exports.ActionCondition = exports.ActionValue = void 0;
exports.DisassociateWebACLRequest = exports.DescribeManagedRuleGroupResponse = exports.RuleSummary = exports.LabelSummary = exports.DescribeManagedRuleGroupRequest = exports.DeleteWebACLResponse = exports.DeleteWebACLRequest = exports.DeleteRuleGroupResponse = exports.DeleteRuleGroupRequest = exports.DeleteRegexPatternSetResponse = exports.DeleteRegexPatternSetRequest = exports.DeletePermissionPolicyResponse = exports.DeletePermissionPolicyRequest = exports.DeleteLoggingConfigurationResponse = exports.DeleteLoggingConfigurationRequest = exports.WAFAssociatedItemException = exports.DeleteIPSetResponse = exports.DeleteIPSetRequest = exports.DeleteFirewallManagerRuleGroupsResponse = exports.DeleteFirewallManagerRuleGroupsRequest = exports.CreateWebACLResponse = exports.WebACLSummary = exports.DefaultAction = exports.CreateRuleGroupResponse = exports.RuleGroupSummary = exports.CustomResponseBody = exports.ResponseContentType = exports.CreateRegexPatternSetResponse = exports.RegexPatternSetSummary = exports.CreateRegexPatternSetRequest = exports.Regex = exports.WAFTagOperationInternalErrorException = exports.WAFTagOperationException = exports.WAFOptimisticLockException = exports.WAFDuplicateItemException = exports.CreateIPSetResponse = exports.IPSetSummary = exports.CreateIPSetRequest = exports.Tag = exports.IPAddressVersion = exports.WAFSubscriptionNotFoundException = exports.WAFLimitsExceededException = exports.WAFInvalidResourceException = exports.CheckCapacityResponse = exports.Scope = exports.VisibilityConfig = exports.Label = exports.OverrideAction = exports.NoneAction = exports.RuleAction = void 0;
exports.PutLoggingConfigurationRequest = exports.ListWebACLsResponse = exports.ListWebACLsRequest = exports.ListTagsForResourceResponse = exports.TagInfoForResource = exports.ListTagsForResourceRequest = exports.ListRuleGroupsResponse = exports.ListRuleGroupsRequest = exports.ListResourcesForWebACLResponse = exports.ListResourcesForWebACLRequest = exports.ResourceType = exports.ListRegexPatternSetsResponse = exports.ListRegexPatternSetsRequest = exports.ListLoggingConfigurationsResponse = exports.ListLoggingConfigurationsRequest = exports.ListIPSetsResponse = exports.ListIPSetsRequest = exports.ListAvailableManagedRuleGroupsResponse = exports.ManagedRuleGroupSummary = exports.ListAvailableManagedRuleGroupsRequest = exports.GetWebACLForResourceRequest = exports.GetWebACLRequest = exports.GetSampledRequestsResponse = exports.SampledHTTPRequest = exports.HTTPRequest = exports.HTTPHeader = exports.GetSampledRequestsRequest = exports.TimeWindow = exports.GetRuleGroupRequest = exports.GetRegexPatternSetResponse = exports.RegexPatternSet = exports.GetRegexPatternSetRequest = exports.GetRateBasedStatementManagedKeysResponse = exports.RateBasedStatementManagedKeysIPSet = exports.GetRateBasedStatementManagedKeysRequest = exports.GetPermissionPolicyResponse = exports.GetPermissionPolicyRequest = exports.GetLoggingConfigurationResponse = exports.LoggingConfiguration = exports.LoggingFilter = exports.Filter = exports.FilterRequirement = exports.Condition = exports.LabelNameCondition = exports.FilterBehavior = exports.GetLoggingConfigurationRequest = exports.GetIPSetResponse = exports.IPSet = exports.GetIPSetRequest = exports.DisassociateWebACLResponse = void 0;
exports.GetWebACLResponse = exports.GetWebACLForResourceResponse = exports.WebACL = exports.GetRuleGroupResponse = exports.UpdateWebACLRequest = exports.UpdateRuleGroupRequest = exports.RuleGroup = exports.CreateWebACLRequest = exports.CreateRuleGroupRequest = exports.CheckCapacityRequest = exports.FirewallManagerRuleGroup = exports.FirewallManagerStatement = exports.OrStatement = exports.AndStatement = exports.Rule = exports.RateBasedStatement = exports.NotStatement = exports.ManagedRuleGroupStatement = exports.Statement = exports.UpdateWebACLResponse = exports.UpdateRuleGroupResponse = exports.UpdateRegexPatternSetResponse = exports.UpdateRegexPatternSetRequest = exports.UpdateIPSetResponse = exports.UpdateIPSetRequest = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.WAFInvalidPermissionPolicyException = exports.PutPermissionPolicyResponse = exports.PutPermissionPolicyRequest = exports.WAFServiceLinkedRoleErrorException = exports.PutLoggingConfigurationResponse = void 0;
var ActionValue;
(function (ActionValue) {
    ActionValue["ALLOW"] = "ALLOW";
    ActionValue["BLOCK"] = "BLOCK";
    ActionValue["COUNT"] = "COUNT";
})(ActionValue = exports.ActionValue || (exports.ActionValue = {}));
var ActionCondition;
(function (ActionCondition) {
    /**
     * @internal
     */
    ActionCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActionCondition = exports.ActionCondition || (exports.ActionCondition = {}));
var All;
(function (All) {
    /**
     * @internal
     */
    All.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(All = exports.All || (exports.All = {}));
var CustomHTTPHeader;
(function (CustomHTTPHeader) {
    /**
     * @internal
     */
    CustomHTTPHeader.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomHTTPHeader = exports.CustomHTTPHeader || (exports.CustomHTTPHeader = {}));
var CustomRequestHandling;
(function (CustomRequestHandling) {
    /**
     * @internal
     */
    CustomRequestHandling.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomRequestHandling = exports.CustomRequestHandling || (exports.CustomRequestHandling = {}));
var AllowAction;
(function (AllowAction) {
    /**
     * @internal
     */
    AllowAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllowAction = exports.AllowAction || (exports.AllowAction = {}));
var AllQueryArguments;
(function (AllQueryArguments) {
    /**
     * @internal
     */
    AllQueryArguments.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AllQueryArguments = exports.AllQueryArguments || (exports.AllQueryArguments = {}));
var Body;
(function (Body) {
    /**
     * @internal
     */
    Body.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Body = exports.Body || (exports.Body = {}));
var BodyParsingFallbackBehavior;
(function (BodyParsingFallbackBehavior) {
    BodyParsingFallbackBehavior["EVALUATE_AS_STRING"] = "EVALUATE_AS_STRING";
    BodyParsingFallbackBehavior["MATCH"] = "MATCH";
    BodyParsingFallbackBehavior["NO_MATCH"] = "NO_MATCH";
})(BodyParsingFallbackBehavior = exports.BodyParsingFallbackBehavior || (exports.BodyParsingFallbackBehavior = {}));
var JsonMatchPattern;
(function (JsonMatchPattern) {
    /**
     * @internal
     */
    JsonMatchPattern.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JsonMatchPattern = exports.JsonMatchPattern || (exports.JsonMatchPattern = {}));
var JsonMatchScope;
(function (JsonMatchScope) {
    JsonMatchScope["ALL"] = "ALL";
    JsonMatchScope["KEY"] = "KEY";
    JsonMatchScope["VALUE"] = "VALUE";
})(JsonMatchScope = exports.JsonMatchScope || (exports.JsonMatchScope = {}));
var JsonBody;
(function (JsonBody) {
    /**
     * @internal
     */
    JsonBody.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(JsonBody = exports.JsonBody || (exports.JsonBody = {}));
var Method;
(function (Method) {
    /**
     * @internal
     */
    Method.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Method = exports.Method || (exports.Method = {}));
var QueryString;
(function (QueryString) {
    /**
     * @internal
     */
    QueryString.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryString = exports.QueryString || (exports.QueryString = {}));
var SingleHeader;
(function (SingleHeader) {
    /**
     * @internal
     */
    SingleHeader.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SingleHeader = exports.SingleHeader || (exports.SingleHeader = {}));
var SingleQueryArgument;
(function (SingleQueryArgument) {
    /**
     * @internal
     */
    SingleQueryArgument.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SingleQueryArgument = exports.SingleQueryArgument || (exports.SingleQueryArgument = {}));
var UriPath;
(function (UriPath) {
    /**
     * @internal
     */
    UriPath.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UriPath = exports.UriPath || (exports.UriPath = {}));
var FieldToMatch;
(function (FieldToMatch) {
    /**
     * @internal
     */
    FieldToMatch.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FieldToMatch = exports.FieldToMatch || (exports.FieldToMatch = {}));
var PositionalConstraint;
(function (PositionalConstraint) {
    PositionalConstraint["CONTAINS"] = "CONTAINS";
    PositionalConstraint["CONTAINS_WORD"] = "CONTAINS_WORD";
    PositionalConstraint["ENDS_WITH"] = "ENDS_WITH";
    PositionalConstraint["EXACTLY"] = "EXACTLY";
    PositionalConstraint["STARTS_WITH"] = "STARTS_WITH";
})(PositionalConstraint = exports.PositionalConstraint || (exports.PositionalConstraint = {}));
var TextTransformationType;
(function (TextTransformationType) {
    TextTransformationType["CMD_LINE"] = "CMD_LINE";
    TextTransformationType["COMPRESS_WHITE_SPACE"] = "COMPRESS_WHITE_SPACE";
    TextTransformationType["HTML_ENTITY_DECODE"] = "HTML_ENTITY_DECODE";
    TextTransformationType["LOWERCASE"] = "LOWERCASE";
    TextTransformationType["NONE"] = "NONE";
    TextTransformationType["URL_DECODE"] = "URL_DECODE";
})(TextTransformationType = exports.TextTransformationType || (exports.TextTransformationType = {}));
var TextTransformation;
(function (TextTransformation) {
    /**
     * @internal
     */
    TextTransformation.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TextTransformation = exports.TextTransformation || (exports.TextTransformation = {}));
var ByteMatchStatement;
(function (ByteMatchStatement) {
    /**
     * @internal
     */
    ByteMatchStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ByteMatchStatement = exports.ByteMatchStatement || (exports.ByteMatchStatement = {}));
var CountryCode;
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
})(CountryCode = exports.CountryCode || (exports.CountryCode = {}));
var FallbackBehavior;
(function (FallbackBehavior) {
    FallbackBehavior["MATCH"] = "MATCH";
    FallbackBehavior["NO_MATCH"] = "NO_MATCH";
})(FallbackBehavior = exports.FallbackBehavior || (exports.FallbackBehavior = {}));
var ForwardedIPConfig;
(function (ForwardedIPConfig) {
    /**
     * @internal
     */
    ForwardedIPConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ForwardedIPConfig = exports.ForwardedIPConfig || (exports.ForwardedIPConfig = {}));
var GeoMatchStatement;
(function (GeoMatchStatement) {
    /**
     * @internal
     */
    GeoMatchStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GeoMatchStatement = exports.GeoMatchStatement || (exports.GeoMatchStatement = {}));
var ForwardedIPPosition;
(function (ForwardedIPPosition) {
    ForwardedIPPosition["ANY"] = "ANY";
    ForwardedIPPosition["FIRST"] = "FIRST";
    ForwardedIPPosition["LAST"] = "LAST";
})(ForwardedIPPosition = exports.ForwardedIPPosition || (exports.ForwardedIPPosition = {}));
var IPSetForwardedIPConfig;
(function (IPSetForwardedIPConfig) {
    /**
     * @internal
     */
    IPSetForwardedIPConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IPSetForwardedIPConfig = exports.IPSetForwardedIPConfig || (exports.IPSetForwardedIPConfig = {}));
var IPSetReferenceStatement;
(function (IPSetReferenceStatement) {
    /**
     * @internal
     */
    IPSetReferenceStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IPSetReferenceStatement = exports.IPSetReferenceStatement || (exports.IPSetReferenceStatement = {}));
var LabelMatchScope;
(function (LabelMatchScope) {
    LabelMatchScope["LABEL"] = "LABEL";
    LabelMatchScope["NAMESPACE"] = "NAMESPACE";
})(LabelMatchScope = exports.LabelMatchScope || (exports.LabelMatchScope = {}));
var LabelMatchStatement;
(function (LabelMatchStatement) {
    /**
     * @internal
     */
    LabelMatchStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelMatchStatement = exports.LabelMatchStatement || (exports.LabelMatchStatement = {}));
var ExcludedRule;
(function (ExcludedRule) {
    /**
     * @internal
     */
    ExcludedRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExcludedRule = exports.ExcludedRule || (exports.ExcludedRule = {}));
var RateBasedStatementAggregateKeyType;
(function (RateBasedStatementAggregateKeyType) {
    RateBasedStatementAggregateKeyType["FORWARDED_IP"] = "FORWARDED_IP";
    RateBasedStatementAggregateKeyType["IP"] = "IP";
})(RateBasedStatementAggregateKeyType = exports.RateBasedStatementAggregateKeyType || (exports.RateBasedStatementAggregateKeyType = {}));
var RegexPatternSetReferenceStatement;
(function (RegexPatternSetReferenceStatement) {
    /**
     * @internal
     */
    RegexPatternSetReferenceStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegexPatternSetReferenceStatement = exports.RegexPatternSetReferenceStatement || (exports.RegexPatternSetReferenceStatement = {}));
var RuleGroupReferenceStatement;
(function (RuleGroupReferenceStatement) {
    /**
     * @internal
     */
    RuleGroupReferenceStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleGroupReferenceStatement = exports.RuleGroupReferenceStatement || (exports.RuleGroupReferenceStatement = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["EQ"] = "EQ";
    ComparisonOperator["GE"] = "GE";
    ComparisonOperator["GT"] = "GT";
    ComparisonOperator["LE"] = "LE";
    ComparisonOperator["LT"] = "LT";
    ComparisonOperator["NE"] = "NE";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var SizeConstraintStatement;
(function (SizeConstraintStatement) {
    /**
     * @internal
     */
    SizeConstraintStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SizeConstraintStatement = exports.SizeConstraintStatement || (exports.SizeConstraintStatement = {}));
var SqliMatchStatement;
(function (SqliMatchStatement) {
    /**
     * @internal
     */
    SqliMatchStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqliMatchStatement = exports.SqliMatchStatement || (exports.SqliMatchStatement = {}));
var XssMatchStatement;
(function (XssMatchStatement) {
    /**
     * @internal
     */
    XssMatchStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(XssMatchStatement = exports.XssMatchStatement || (exports.XssMatchStatement = {}));
var AssociateWebACLRequest;
(function (AssociateWebACLRequest) {
    /**
     * @internal
     */
    AssociateWebACLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWebACLRequest = exports.AssociateWebACLRequest || (exports.AssociateWebACLRequest = {}));
var AssociateWebACLResponse;
(function (AssociateWebACLResponse) {
    /**
     * @internal
     */
    AssociateWebACLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AssociateWebACLResponse = exports.AssociateWebACLResponse || (exports.AssociateWebACLResponse = {}));
var WAFInternalErrorException;
(function (WAFInternalErrorException) {
    /**
     * @internal
     */
    WAFInternalErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFInternalErrorException = exports.WAFInternalErrorException || (exports.WAFInternalErrorException = {}));
var WAFInvalidOperationException;
(function (WAFInvalidOperationException) {
    /**
     * @internal
     */
    WAFInvalidOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFInvalidOperationException = exports.WAFInvalidOperationException || (exports.WAFInvalidOperationException = {}));
var ParameterExceptionField;
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
})(ParameterExceptionField = exports.ParameterExceptionField || (exports.ParameterExceptionField = {}));
var WAFInvalidParameterException;
(function (WAFInvalidParameterException) {
    /**
     * @internal
     */
    WAFInvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFInvalidParameterException = exports.WAFInvalidParameterException || (exports.WAFInvalidParameterException = {}));
var WAFNonexistentItemException;
(function (WAFNonexistentItemException) {
    /**
     * @internal
     */
    WAFNonexistentItemException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFNonexistentItemException = exports.WAFNonexistentItemException || (exports.WAFNonexistentItemException = {}));
var WAFUnavailableEntityException;
(function (WAFUnavailableEntityException) {
    /**
     * @internal
     */
    WAFUnavailableEntityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFUnavailableEntityException = exports.WAFUnavailableEntityException || (exports.WAFUnavailableEntityException = {}));
var CustomResponse;
(function (CustomResponse) {
    /**
     * @internal
     */
    CustomResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomResponse = exports.CustomResponse || (exports.CustomResponse = {}));
var BlockAction;
(function (BlockAction) {
    /**
     * @internal
     */
    BlockAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(BlockAction = exports.BlockAction || (exports.BlockAction = {}));
var CountAction;
(function (CountAction) {
    /**
     * @internal
     */
    CountAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CountAction = exports.CountAction || (exports.CountAction = {}));
var RuleAction;
(function (RuleAction) {
    /**
     * @internal
     */
    RuleAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleAction = exports.RuleAction || (exports.RuleAction = {}));
var NoneAction;
(function (NoneAction) {
    /**
     * @internal
     */
    NoneAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NoneAction = exports.NoneAction || (exports.NoneAction = {}));
var OverrideAction;
(function (OverrideAction) {
    /**
     * @internal
     */
    OverrideAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OverrideAction = exports.OverrideAction || (exports.OverrideAction = {}));
var Label;
(function (Label) {
    /**
     * @internal
     */
    Label.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Label = exports.Label || (exports.Label = {}));
var VisibilityConfig;
(function (VisibilityConfig) {
    /**
     * @internal
     */
    VisibilityConfig.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(VisibilityConfig = exports.VisibilityConfig || (exports.VisibilityConfig = {}));
var Scope;
(function (Scope) {
    Scope["CLOUDFRONT"] = "CLOUDFRONT";
    Scope["REGIONAL"] = "REGIONAL";
})(Scope = exports.Scope || (exports.Scope = {}));
var CheckCapacityResponse;
(function (CheckCapacityResponse) {
    /**
     * @internal
     */
    CheckCapacityResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckCapacityResponse = exports.CheckCapacityResponse || (exports.CheckCapacityResponse = {}));
var WAFInvalidResourceException;
(function (WAFInvalidResourceException) {
    /**
     * @internal
     */
    WAFInvalidResourceException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFInvalidResourceException = exports.WAFInvalidResourceException || (exports.WAFInvalidResourceException = {}));
var WAFLimitsExceededException;
(function (WAFLimitsExceededException) {
    /**
     * @internal
     */
    WAFLimitsExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFLimitsExceededException = exports.WAFLimitsExceededException || (exports.WAFLimitsExceededException = {}));
var WAFSubscriptionNotFoundException;
(function (WAFSubscriptionNotFoundException) {
    /**
     * @internal
     */
    WAFSubscriptionNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFSubscriptionNotFoundException = exports.WAFSubscriptionNotFoundException || (exports.WAFSubscriptionNotFoundException = {}));
var IPAddressVersion;
(function (IPAddressVersion) {
    IPAddressVersion["IPV4"] = "IPV4";
    IPAddressVersion["IPV6"] = "IPV6";
})(IPAddressVersion = exports.IPAddressVersion || (exports.IPAddressVersion = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateIPSetRequest;
(function (CreateIPSetRequest) {
    /**
     * @internal
     */
    CreateIPSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIPSetRequest = exports.CreateIPSetRequest || (exports.CreateIPSetRequest = {}));
var IPSetSummary;
(function (IPSetSummary) {
    /**
     * @internal
     */
    IPSetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IPSetSummary = exports.IPSetSummary || (exports.IPSetSummary = {}));
var CreateIPSetResponse;
(function (CreateIPSetResponse) {
    /**
     * @internal
     */
    CreateIPSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIPSetResponse = exports.CreateIPSetResponse || (exports.CreateIPSetResponse = {}));
var WAFDuplicateItemException;
(function (WAFDuplicateItemException) {
    /**
     * @internal
     */
    WAFDuplicateItemException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFDuplicateItemException = exports.WAFDuplicateItemException || (exports.WAFDuplicateItemException = {}));
var WAFOptimisticLockException;
(function (WAFOptimisticLockException) {
    /**
     * @internal
     */
    WAFOptimisticLockException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFOptimisticLockException = exports.WAFOptimisticLockException || (exports.WAFOptimisticLockException = {}));
var WAFTagOperationException;
(function (WAFTagOperationException) {
    /**
     * @internal
     */
    WAFTagOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFTagOperationException = exports.WAFTagOperationException || (exports.WAFTagOperationException = {}));
var WAFTagOperationInternalErrorException;
(function (WAFTagOperationInternalErrorException) {
    /**
     * @internal
     */
    WAFTagOperationInternalErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFTagOperationInternalErrorException = exports.WAFTagOperationInternalErrorException || (exports.WAFTagOperationInternalErrorException = {}));
var Regex;
(function (Regex) {
    /**
     * @internal
     */
    Regex.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Regex = exports.Regex || (exports.Regex = {}));
var CreateRegexPatternSetRequest;
(function (CreateRegexPatternSetRequest) {
    /**
     * @internal
     */
    CreateRegexPatternSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRegexPatternSetRequest = exports.CreateRegexPatternSetRequest || (exports.CreateRegexPatternSetRequest = {}));
var RegexPatternSetSummary;
(function (RegexPatternSetSummary) {
    /**
     * @internal
     */
    RegexPatternSetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegexPatternSetSummary = exports.RegexPatternSetSummary || (exports.RegexPatternSetSummary = {}));
var CreateRegexPatternSetResponse;
(function (CreateRegexPatternSetResponse) {
    /**
     * @internal
     */
    CreateRegexPatternSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRegexPatternSetResponse = exports.CreateRegexPatternSetResponse || (exports.CreateRegexPatternSetResponse = {}));
var ResponseContentType;
(function (ResponseContentType) {
    ResponseContentType["APPLICATION_JSON"] = "APPLICATION_JSON";
    ResponseContentType["TEXT_HTML"] = "TEXT_HTML";
    ResponseContentType["TEXT_PLAIN"] = "TEXT_PLAIN";
})(ResponseContentType = exports.ResponseContentType || (exports.ResponseContentType = {}));
var CustomResponseBody;
(function (CustomResponseBody) {
    /**
     * @internal
     */
    CustomResponseBody.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CustomResponseBody = exports.CustomResponseBody || (exports.CustomResponseBody = {}));
var RuleGroupSummary;
(function (RuleGroupSummary) {
    /**
     * @internal
     */
    RuleGroupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleGroupSummary = exports.RuleGroupSummary || (exports.RuleGroupSummary = {}));
var CreateRuleGroupResponse;
(function (CreateRuleGroupResponse) {
    /**
     * @internal
     */
    CreateRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRuleGroupResponse = exports.CreateRuleGroupResponse || (exports.CreateRuleGroupResponse = {}));
var DefaultAction;
(function (DefaultAction) {
    /**
     * @internal
     */
    DefaultAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DefaultAction = exports.DefaultAction || (exports.DefaultAction = {}));
var WebACLSummary;
(function (WebACLSummary) {
    /**
     * @internal
     */
    WebACLSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebACLSummary = exports.WebACLSummary || (exports.WebACLSummary = {}));
var CreateWebACLResponse;
(function (CreateWebACLResponse) {
    /**
     * @internal
     */
    CreateWebACLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWebACLResponse = exports.CreateWebACLResponse || (exports.CreateWebACLResponse = {}));
var DeleteFirewallManagerRuleGroupsRequest;
(function (DeleteFirewallManagerRuleGroupsRequest) {
    /**
     * @internal
     */
    DeleteFirewallManagerRuleGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallManagerRuleGroupsRequest = exports.DeleteFirewallManagerRuleGroupsRequest || (exports.DeleteFirewallManagerRuleGroupsRequest = {}));
var DeleteFirewallManagerRuleGroupsResponse;
(function (DeleteFirewallManagerRuleGroupsResponse) {
    /**
     * @internal
     */
    DeleteFirewallManagerRuleGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteFirewallManagerRuleGroupsResponse = exports.DeleteFirewallManagerRuleGroupsResponse || (exports.DeleteFirewallManagerRuleGroupsResponse = {}));
var DeleteIPSetRequest;
(function (DeleteIPSetRequest) {
    /**
     * @internal
     */
    DeleteIPSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIPSetRequest = exports.DeleteIPSetRequest || (exports.DeleteIPSetRequest = {}));
var DeleteIPSetResponse;
(function (DeleteIPSetResponse) {
    /**
     * @internal
     */
    DeleteIPSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteIPSetResponse = exports.DeleteIPSetResponse || (exports.DeleteIPSetResponse = {}));
var WAFAssociatedItemException;
(function (WAFAssociatedItemException) {
    /**
     * @internal
     */
    WAFAssociatedItemException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFAssociatedItemException = exports.WAFAssociatedItemException || (exports.WAFAssociatedItemException = {}));
var DeleteLoggingConfigurationRequest;
(function (DeleteLoggingConfigurationRequest) {
    /**
     * @internal
     */
    DeleteLoggingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLoggingConfigurationRequest = exports.DeleteLoggingConfigurationRequest || (exports.DeleteLoggingConfigurationRequest = {}));
var DeleteLoggingConfigurationResponse;
(function (DeleteLoggingConfigurationResponse) {
    /**
     * @internal
     */
    DeleteLoggingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLoggingConfigurationResponse = exports.DeleteLoggingConfigurationResponse || (exports.DeleteLoggingConfigurationResponse = {}));
var DeletePermissionPolicyRequest;
(function (DeletePermissionPolicyRequest) {
    /**
     * @internal
     */
    DeletePermissionPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePermissionPolicyRequest = exports.DeletePermissionPolicyRequest || (exports.DeletePermissionPolicyRequest = {}));
var DeletePermissionPolicyResponse;
(function (DeletePermissionPolicyResponse) {
    /**
     * @internal
     */
    DeletePermissionPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePermissionPolicyResponse = exports.DeletePermissionPolicyResponse || (exports.DeletePermissionPolicyResponse = {}));
var DeleteRegexPatternSetRequest;
(function (DeleteRegexPatternSetRequest) {
    /**
     * @internal
     */
    DeleteRegexPatternSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegexPatternSetRequest = exports.DeleteRegexPatternSetRequest || (exports.DeleteRegexPatternSetRequest = {}));
var DeleteRegexPatternSetResponse;
(function (DeleteRegexPatternSetResponse) {
    /**
     * @internal
     */
    DeleteRegexPatternSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegexPatternSetResponse = exports.DeleteRegexPatternSetResponse || (exports.DeleteRegexPatternSetResponse = {}));
var DeleteRuleGroupRequest;
(function (DeleteRuleGroupRequest) {
    /**
     * @internal
     */
    DeleteRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRuleGroupRequest = exports.DeleteRuleGroupRequest || (exports.DeleteRuleGroupRequest = {}));
var DeleteRuleGroupResponse;
(function (DeleteRuleGroupResponse) {
    /**
     * @internal
     */
    DeleteRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRuleGroupResponse = exports.DeleteRuleGroupResponse || (exports.DeleteRuleGroupResponse = {}));
var DeleteWebACLRequest;
(function (DeleteWebACLRequest) {
    /**
     * @internal
     */
    DeleteWebACLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWebACLRequest = exports.DeleteWebACLRequest || (exports.DeleteWebACLRequest = {}));
var DeleteWebACLResponse;
(function (DeleteWebACLResponse) {
    /**
     * @internal
     */
    DeleteWebACLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteWebACLResponse = exports.DeleteWebACLResponse || (exports.DeleteWebACLResponse = {}));
var DescribeManagedRuleGroupRequest;
(function (DescribeManagedRuleGroupRequest) {
    /**
     * @internal
     */
    DescribeManagedRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeManagedRuleGroupRequest = exports.DescribeManagedRuleGroupRequest || (exports.DescribeManagedRuleGroupRequest = {}));
var LabelSummary;
(function (LabelSummary) {
    /**
     * @internal
     */
    LabelSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelSummary = exports.LabelSummary || (exports.LabelSummary = {}));
var RuleSummary;
(function (RuleSummary) {
    /**
     * @internal
     */
    RuleSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleSummary = exports.RuleSummary || (exports.RuleSummary = {}));
var DescribeManagedRuleGroupResponse;
(function (DescribeManagedRuleGroupResponse) {
    /**
     * @internal
     */
    DescribeManagedRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeManagedRuleGroupResponse = exports.DescribeManagedRuleGroupResponse || (exports.DescribeManagedRuleGroupResponse = {}));
var DisassociateWebACLRequest;
(function (DisassociateWebACLRequest) {
    /**
     * @internal
     */
    DisassociateWebACLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWebACLRequest = exports.DisassociateWebACLRequest || (exports.DisassociateWebACLRequest = {}));
var DisassociateWebACLResponse;
(function (DisassociateWebACLResponse) {
    /**
     * @internal
     */
    DisassociateWebACLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DisassociateWebACLResponse = exports.DisassociateWebACLResponse || (exports.DisassociateWebACLResponse = {}));
var GetIPSetRequest;
(function (GetIPSetRequest) {
    /**
     * @internal
     */
    GetIPSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIPSetRequest = exports.GetIPSetRequest || (exports.GetIPSetRequest = {}));
var IPSet;
(function (IPSet) {
    /**
     * @internal
     */
    IPSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IPSet = exports.IPSet || (exports.IPSet = {}));
var GetIPSetResponse;
(function (GetIPSetResponse) {
    /**
     * @internal
     */
    GetIPSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIPSetResponse = exports.GetIPSetResponse || (exports.GetIPSetResponse = {}));
var GetLoggingConfigurationRequest;
(function (GetLoggingConfigurationRequest) {
    /**
     * @internal
     */
    GetLoggingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoggingConfigurationRequest = exports.GetLoggingConfigurationRequest || (exports.GetLoggingConfigurationRequest = {}));
var FilterBehavior;
(function (FilterBehavior) {
    FilterBehavior["DROP"] = "DROP";
    FilterBehavior["KEEP"] = "KEEP";
})(FilterBehavior = exports.FilterBehavior || (exports.FilterBehavior = {}));
var LabelNameCondition;
(function (LabelNameCondition) {
    /**
     * @internal
     */
    LabelNameCondition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LabelNameCondition = exports.LabelNameCondition || (exports.LabelNameCondition = {}));
var Condition;
(function (Condition) {
    /**
     * @internal
     */
    Condition.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Condition = exports.Condition || (exports.Condition = {}));
var FilterRequirement;
(function (FilterRequirement) {
    FilterRequirement["MEETS_ALL"] = "MEETS_ALL";
    FilterRequirement["MEETS_ANY"] = "MEETS_ANY";
})(FilterRequirement = exports.FilterRequirement || (exports.FilterRequirement = {}));
var Filter;
(function (Filter) {
    /**
     * @internal
     */
    Filter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Filter = exports.Filter || (exports.Filter = {}));
var LoggingFilter;
(function (LoggingFilter) {
    /**
     * @internal
     */
    LoggingFilter.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingFilter = exports.LoggingFilter || (exports.LoggingFilter = {}));
var LoggingConfiguration;
(function (LoggingConfiguration) {
    /**
     * @internal
     */
    LoggingConfiguration.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LoggingConfiguration = exports.LoggingConfiguration || (exports.LoggingConfiguration = {}));
var GetLoggingConfigurationResponse;
(function (GetLoggingConfigurationResponse) {
    /**
     * @internal
     */
    GetLoggingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLoggingConfigurationResponse = exports.GetLoggingConfigurationResponse || (exports.GetLoggingConfigurationResponse = {}));
var GetPermissionPolicyRequest;
(function (GetPermissionPolicyRequest) {
    /**
     * @internal
     */
    GetPermissionPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPermissionPolicyRequest = exports.GetPermissionPolicyRequest || (exports.GetPermissionPolicyRequest = {}));
var GetPermissionPolicyResponse;
(function (GetPermissionPolicyResponse) {
    /**
     * @internal
     */
    GetPermissionPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPermissionPolicyResponse = exports.GetPermissionPolicyResponse || (exports.GetPermissionPolicyResponse = {}));
var GetRateBasedStatementManagedKeysRequest;
(function (GetRateBasedStatementManagedKeysRequest) {
    /**
     * @internal
     */
    GetRateBasedStatementManagedKeysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRateBasedStatementManagedKeysRequest = exports.GetRateBasedStatementManagedKeysRequest || (exports.GetRateBasedStatementManagedKeysRequest = {}));
var RateBasedStatementManagedKeysIPSet;
(function (RateBasedStatementManagedKeysIPSet) {
    /**
     * @internal
     */
    RateBasedStatementManagedKeysIPSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RateBasedStatementManagedKeysIPSet = exports.RateBasedStatementManagedKeysIPSet || (exports.RateBasedStatementManagedKeysIPSet = {}));
var GetRateBasedStatementManagedKeysResponse;
(function (GetRateBasedStatementManagedKeysResponse) {
    /**
     * @internal
     */
    GetRateBasedStatementManagedKeysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRateBasedStatementManagedKeysResponse = exports.GetRateBasedStatementManagedKeysResponse || (exports.GetRateBasedStatementManagedKeysResponse = {}));
var GetRegexPatternSetRequest;
(function (GetRegexPatternSetRequest) {
    /**
     * @internal
     */
    GetRegexPatternSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegexPatternSetRequest = exports.GetRegexPatternSetRequest || (exports.GetRegexPatternSetRequest = {}));
var RegexPatternSet;
(function (RegexPatternSet) {
    /**
     * @internal
     */
    RegexPatternSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegexPatternSet = exports.RegexPatternSet || (exports.RegexPatternSet = {}));
var GetRegexPatternSetResponse;
(function (GetRegexPatternSetResponse) {
    /**
     * @internal
     */
    GetRegexPatternSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegexPatternSetResponse = exports.GetRegexPatternSetResponse || (exports.GetRegexPatternSetResponse = {}));
var GetRuleGroupRequest;
(function (GetRuleGroupRequest) {
    /**
     * @internal
     */
    GetRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRuleGroupRequest = exports.GetRuleGroupRequest || (exports.GetRuleGroupRequest = {}));
var TimeWindow;
(function (TimeWindow) {
    /**
     * @internal
     */
    TimeWindow.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TimeWindow = exports.TimeWindow || (exports.TimeWindow = {}));
var GetSampledRequestsRequest;
(function (GetSampledRequestsRequest) {
    /**
     * @internal
     */
    GetSampledRequestsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSampledRequestsRequest = exports.GetSampledRequestsRequest || (exports.GetSampledRequestsRequest = {}));
var HTTPHeader;
(function (HTTPHeader) {
    /**
     * @internal
     */
    HTTPHeader.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HTTPHeader = exports.HTTPHeader || (exports.HTTPHeader = {}));
var HTTPRequest;
(function (HTTPRequest) {
    /**
     * @internal
     */
    HTTPRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(HTTPRequest = exports.HTTPRequest || (exports.HTTPRequest = {}));
var SampledHTTPRequest;
(function (SampledHTTPRequest) {
    /**
     * @internal
     */
    SampledHTTPRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SampledHTTPRequest = exports.SampledHTTPRequest || (exports.SampledHTTPRequest = {}));
var GetSampledRequestsResponse;
(function (GetSampledRequestsResponse) {
    /**
     * @internal
     */
    GetSampledRequestsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSampledRequestsResponse = exports.GetSampledRequestsResponse || (exports.GetSampledRequestsResponse = {}));
var GetWebACLRequest;
(function (GetWebACLRequest) {
    /**
     * @internal
     */
    GetWebACLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWebACLRequest = exports.GetWebACLRequest || (exports.GetWebACLRequest = {}));
var GetWebACLForResourceRequest;
(function (GetWebACLForResourceRequest) {
    /**
     * @internal
     */
    GetWebACLForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWebACLForResourceRequest = exports.GetWebACLForResourceRequest || (exports.GetWebACLForResourceRequest = {}));
var ListAvailableManagedRuleGroupsRequest;
(function (ListAvailableManagedRuleGroupsRequest) {
    /**
     * @internal
     */
    ListAvailableManagedRuleGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAvailableManagedRuleGroupsRequest = exports.ListAvailableManagedRuleGroupsRequest || (exports.ListAvailableManagedRuleGroupsRequest = {}));
var ManagedRuleGroupSummary;
(function (ManagedRuleGroupSummary) {
    /**
     * @internal
     */
    ManagedRuleGroupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedRuleGroupSummary = exports.ManagedRuleGroupSummary || (exports.ManagedRuleGroupSummary = {}));
var ListAvailableManagedRuleGroupsResponse;
(function (ListAvailableManagedRuleGroupsResponse) {
    /**
     * @internal
     */
    ListAvailableManagedRuleGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListAvailableManagedRuleGroupsResponse = exports.ListAvailableManagedRuleGroupsResponse || (exports.ListAvailableManagedRuleGroupsResponse = {}));
var ListIPSetsRequest;
(function (ListIPSetsRequest) {
    /**
     * @internal
     */
    ListIPSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIPSetsRequest = exports.ListIPSetsRequest || (exports.ListIPSetsRequest = {}));
var ListIPSetsResponse;
(function (ListIPSetsResponse) {
    /**
     * @internal
     */
    ListIPSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIPSetsResponse = exports.ListIPSetsResponse || (exports.ListIPSetsResponse = {}));
var ListLoggingConfigurationsRequest;
(function (ListLoggingConfigurationsRequest) {
    /**
     * @internal
     */
    ListLoggingConfigurationsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLoggingConfigurationsRequest = exports.ListLoggingConfigurationsRequest || (exports.ListLoggingConfigurationsRequest = {}));
var ListLoggingConfigurationsResponse;
(function (ListLoggingConfigurationsResponse) {
    /**
     * @internal
     */
    ListLoggingConfigurationsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListLoggingConfigurationsResponse = exports.ListLoggingConfigurationsResponse || (exports.ListLoggingConfigurationsResponse = {}));
var ListRegexPatternSetsRequest;
(function (ListRegexPatternSetsRequest) {
    /**
     * @internal
     */
    ListRegexPatternSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegexPatternSetsRequest = exports.ListRegexPatternSetsRequest || (exports.ListRegexPatternSetsRequest = {}));
var ListRegexPatternSetsResponse;
(function (ListRegexPatternSetsResponse) {
    /**
     * @internal
     */
    ListRegexPatternSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegexPatternSetsResponse = exports.ListRegexPatternSetsResponse || (exports.ListRegexPatternSetsResponse = {}));
var ResourceType;
(function (ResourceType) {
    ResourceType["API_GATEWAY"] = "API_GATEWAY";
    ResourceType["APPLICATION_LOAD_BALANCER"] = "APPLICATION_LOAD_BALANCER";
    ResourceType["APPSYNC"] = "APPSYNC";
})(ResourceType = exports.ResourceType || (exports.ResourceType = {}));
var ListResourcesForWebACLRequest;
(function (ListResourcesForWebACLRequest) {
    /**
     * @internal
     */
    ListResourcesForWebACLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesForWebACLRequest = exports.ListResourcesForWebACLRequest || (exports.ListResourcesForWebACLRequest = {}));
var ListResourcesForWebACLResponse;
(function (ListResourcesForWebACLResponse) {
    /**
     * @internal
     */
    ListResourcesForWebACLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListResourcesForWebACLResponse = exports.ListResourcesForWebACLResponse || (exports.ListResourcesForWebACLResponse = {}));
var ListRuleGroupsRequest;
(function (ListRuleGroupsRequest) {
    /**
     * @internal
     */
    ListRuleGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRuleGroupsRequest = exports.ListRuleGroupsRequest || (exports.ListRuleGroupsRequest = {}));
var ListRuleGroupsResponse;
(function (ListRuleGroupsResponse) {
    /**
     * @internal
     */
    ListRuleGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRuleGroupsResponse = exports.ListRuleGroupsResponse || (exports.ListRuleGroupsResponse = {}));
var ListTagsForResourceRequest;
(function (ListTagsForResourceRequest) {
    /**
     * @internal
     */
    ListTagsForResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceRequest = exports.ListTagsForResourceRequest || (exports.ListTagsForResourceRequest = {}));
var TagInfoForResource;
(function (TagInfoForResource) {
    /**
     * @internal
     */
    TagInfoForResource.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagInfoForResource = exports.TagInfoForResource || (exports.TagInfoForResource = {}));
var ListTagsForResourceResponse;
(function (ListTagsForResourceResponse) {
    /**
     * @internal
     */
    ListTagsForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceResponse = exports.ListTagsForResourceResponse || (exports.ListTagsForResourceResponse = {}));
var ListWebACLsRequest;
(function (ListWebACLsRequest) {
    /**
     * @internal
     */
    ListWebACLsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWebACLsRequest = exports.ListWebACLsRequest || (exports.ListWebACLsRequest = {}));
var ListWebACLsResponse;
(function (ListWebACLsResponse) {
    /**
     * @internal
     */
    ListWebACLsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWebACLsResponse = exports.ListWebACLsResponse || (exports.ListWebACLsResponse = {}));
var PutLoggingConfigurationRequest;
(function (PutLoggingConfigurationRequest) {
    /**
     * @internal
     */
    PutLoggingConfigurationRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLoggingConfigurationRequest = exports.PutLoggingConfigurationRequest || (exports.PutLoggingConfigurationRequest = {}));
var PutLoggingConfigurationResponse;
(function (PutLoggingConfigurationResponse) {
    /**
     * @internal
     */
    PutLoggingConfigurationResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLoggingConfigurationResponse = exports.PutLoggingConfigurationResponse || (exports.PutLoggingConfigurationResponse = {}));
var WAFServiceLinkedRoleErrorException;
(function (WAFServiceLinkedRoleErrorException) {
    /**
     * @internal
     */
    WAFServiceLinkedRoleErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFServiceLinkedRoleErrorException = exports.WAFServiceLinkedRoleErrorException || (exports.WAFServiceLinkedRoleErrorException = {}));
var PutPermissionPolicyRequest;
(function (PutPermissionPolicyRequest) {
    /**
     * @internal
     */
    PutPermissionPolicyRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPermissionPolicyRequest = exports.PutPermissionPolicyRequest || (exports.PutPermissionPolicyRequest = {}));
var PutPermissionPolicyResponse;
(function (PutPermissionPolicyResponse) {
    /**
     * @internal
     */
    PutPermissionPolicyResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPermissionPolicyResponse = exports.PutPermissionPolicyResponse || (exports.PutPermissionPolicyResponse = {}));
var WAFInvalidPermissionPolicyException;
(function (WAFInvalidPermissionPolicyException) {
    /**
     * @internal
     */
    WAFInvalidPermissionPolicyException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFInvalidPermissionPolicyException = exports.WAFInvalidPermissionPolicyException || (exports.WAFInvalidPermissionPolicyException = {}));
var TagResourceRequest;
(function (TagResourceRequest) {
    /**
     * @internal
     */
    TagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceRequest = exports.TagResourceRequest || (exports.TagResourceRequest = {}));
var TagResourceResponse;
(function (TagResourceResponse) {
    /**
     * @internal
     */
    TagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceResponse = exports.TagResourceResponse || (exports.TagResourceResponse = {}));
var UntagResourceRequest;
(function (UntagResourceRequest) {
    /**
     * @internal
     */
    UntagResourceRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceRequest = exports.UntagResourceRequest || (exports.UntagResourceRequest = {}));
var UntagResourceResponse;
(function (UntagResourceResponse) {
    /**
     * @internal
     */
    UntagResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceResponse = exports.UntagResourceResponse || (exports.UntagResourceResponse = {}));
var UpdateIPSetRequest;
(function (UpdateIPSetRequest) {
    /**
     * @internal
     */
    UpdateIPSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIPSetRequest = exports.UpdateIPSetRequest || (exports.UpdateIPSetRequest = {}));
var UpdateIPSetResponse;
(function (UpdateIPSetResponse) {
    /**
     * @internal
     */
    UpdateIPSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateIPSetResponse = exports.UpdateIPSetResponse || (exports.UpdateIPSetResponse = {}));
var UpdateRegexPatternSetRequest;
(function (UpdateRegexPatternSetRequest) {
    /**
     * @internal
     */
    UpdateRegexPatternSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRegexPatternSetRequest = exports.UpdateRegexPatternSetRequest || (exports.UpdateRegexPatternSetRequest = {}));
var UpdateRegexPatternSetResponse;
(function (UpdateRegexPatternSetResponse) {
    /**
     * @internal
     */
    UpdateRegexPatternSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRegexPatternSetResponse = exports.UpdateRegexPatternSetResponse || (exports.UpdateRegexPatternSetResponse = {}));
var UpdateRuleGroupResponse;
(function (UpdateRuleGroupResponse) {
    /**
     * @internal
     */
    UpdateRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuleGroupResponse = exports.UpdateRuleGroupResponse || (exports.UpdateRuleGroupResponse = {}));
var UpdateWebACLResponse;
(function (UpdateWebACLResponse) {
    /**
     * @internal
     */
    UpdateWebACLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWebACLResponse = exports.UpdateWebACLResponse || (exports.UpdateWebACLResponse = {}));
var Statement;
(function (Statement) {
    /**
     * @internal
     */
    Statement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Statement = exports.Statement || (exports.Statement = {}));
var ManagedRuleGroupStatement;
(function (ManagedRuleGroupStatement) {
    /**
     * @internal
     */
    ManagedRuleGroupStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ManagedRuleGroupStatement = exports.ManagedRuleGroupStatement || (exports.ManagedRuleGroupStatement = {}));
var NotStatement;
(function (NotStatement) {
    /**
     * @internal
     */
    NotStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(NotStatement = exports.NotStatement || (exports.NotStatement = {}));
var RateBasedStatement;
(function (RateBasedStatement) {
    /**
     * @internal
     */
    RateBasedStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RateBasedStatement = exports.RateBasedStatement || (exports.RateBasedStatement = {}));
var Rule;
(function (Rule) {
    /**
     * @internal
     */
    Rule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Rule = exports.Rule || (exports.Rule = {}));
var AndStatement;
(function (AndStatement) {
    /**
     * @internal
     */
    AndStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AndStatement = exports.AndStatement || (exports.AndStatement = {}));
var OrStatement;
(function (OrStatement) {
    /**
     * @internal
     */
    OrStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(OrStatement = exports.OrStatement || (exports.OrStatement = {}));
var FirewallManagerStatement;
(function (FirewallManagerStatement) {
    /**
     * @internal
     */
    FirewallManagerStatement.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallManagerStatement = exports.FirewallManagerStatement || (exports.FirewallManagerStatement = {}));
var FirewallManagerRuleGroup;
(function (FirewallManagerRuleGroup) {
    /**
     * @internal
     */
    FirewallManagerRuleGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(FirewallManagerRuleGroup = exports.FirewallManagerRuleGroup || (exports.FirewallManagerRuleGroup = {}));
var CheckCapacityRequest;
(function (CheckCapacityRequest) {
    /**
     * @internal
     */
    CheckCapacityRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CheckCapacityRequest = exports.CheckCapacityRequest || (exports.CheckCapacityRequest = {}));
var CreateRuleGroupRequest;
(function (CreateRuleGroupRequest) {
    /**
     * @internal
     */
    CreateRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRuleGroupRequest = exports.CreateRuleGroupRequest || (exports.CreateRuleGroupRequest = {}));
var CreateWebACLRequest;
(function (CreateWebACLRequest) {
    /**
     * @internal
     */
    CreateWebACLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWebACLRequest = exports.CreateWebACLRequest || (exports.CreateWebACLRequest = {}));
var RuleGroup;
(function (RuleGroup) {
    /**
     * @internal
     */
    RuleGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleGroup = exports.RuleGroup || (exports.RuleGroup = {}));
var UpdateRuleGroupRequest;
(function (UpdateRuleGroupRequest) {
    /**
     * @internal
     */
    UpdateRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuleGroupRequest = exports.UpdateRuleGroupRequest || (exports.UpdateRuleGroupRequest = {}));
var UpdateWebACLRequest;
(function (UpdateWebACLRequest) {
    /**
     * @internal
     */
    UpdateWebACLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWebACLRequest = exports.UpdateWebACLRequest || (exports.UpdateWebACLRequest = {}));
var GetRuleGroupResponse;
(function (GetRuleGroupResponse) {
    /**
     * @internal
     */
    GetRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRuleGroupResponse = exports.GetRuleGroupResponse || (exports.GetRuleGroupResponse = {}));
var WebACL;
(function (WebACL) {
    /**
     * @internal
     */
    WebACL.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebACL = exports.WebACL || (exports.WebACL = {}));
var GetWebACLForResourceResponse;
(function (GetWebACLForResourceResponse) {
    /**
     * @internal
     */
    GetWebACLForResourceResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWebACLForResourceResponse = exports.GetWebACLForResourceResponse || (exports.GetWebACLForResourceResponse = {}));
var GetWebACLResponse;
(function (GetWebACLResponse) {
    /**
     * @internal
     */
    GetWebACLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWebACLResponse = exports.GetWebACLResponse || (exports.GetWebACLResponse = {}));
//# sourceMappingURL=models_0.js.map