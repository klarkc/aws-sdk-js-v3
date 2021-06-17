"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegexPatternSet = exports.CreateRegexPatternSetRequest = exports.CreateRegexMatchSetResponse = exports.RegexMatchSet = exports.RegexMatchTuple = exports.CreateRegexMatchSetRequest = exports.WAFTagOperationInternalErrorException = exports.WAFTagOperationException = exports.WAFBadRequestException = exports.CreateRateBasedRuleResponse = exports.RateBasedRule = exports.Predicate = exports.PredicateType = exports.CreateRateBasedRuleRequest = exports.Tag = exports.RateKey = exports.CreateIPSetResponse = exports.IPSet = exports.IPSetDescriptor = exports.IPSetDescriptorType = exports.CreateIPSetRequest = exports.CreateGeoMatchSetResponse = exports.GeoMatchSet = exports.GeoMatchConstraint = exports.GeoMatchConstraintValue = exports.GeoMatchConstraintType = exports.CreateGeoMatchSetRequest = exports.WAFStaleDataException = exports.WAFLimitsExceededException = exports.WAFInvalidParameterException = exports.ParameterExceptionReason = exports.ParameterExceptionField = exports.WAFInvalidAccountException = exports.WAFInternalErrorException = exports.WAFDisallowedNameException = exports.CreateByteMatchSetResponse = exports.ByteMatchSet = exports.ByteMatchTuple = exports.TextTransformation = exports.PositionalConstraint = exports.FieldToMatch = exports.MatchFieldType = exports.CreateByteMatchSetRequest = exports.ActivatedRule = exports.WafRuleType = exports.WafOverrideAction = exports.WafOverrideActionType = exports.ExcludedRule = exports.WafAction = exports.WafActionType = void 0;
exports.DeleteRuleGroupRequest = exports.DeleteRuleResponse = exports.DeleteRuleRequest = exports.DeleteRegexPatternSetResponse = exports.DeleteRegexPatternSetRequest = exports.DeleteRegexMatchSetResponse = exports.DeleteRegexMatchSetRequest = exports.DeleteRateBasedRuleResponse = exports.DeleteRateBasedRuleRequest = exports.DeletePermissionPolicyResponse = exports.DeletePermissionPolicyRequest = exports.DeleteLoggingConfigurationResponse = exports.DeleteLoggingConfigurationRequest = exports.DeleteIPSetResponse = exports.DeleteIPSetRequest = exports.DeleteGeoMatchSetResponse = exports.DeleteGeoMatchSetRequest = exports.WAFReferencedItemException = exports.WAFNonEmptyEntityException = exports.DeleteByteMatchSetResponse = exports.DeleteByteMatchSetRequest = exports.CreateXssMatchSetResponse = exports.XssMatchSet = exports.XssMatchTuple = exports.CreateXssMatchSetRequest = exports.WAFNonexistentItemException = exports.WAFInvalidOperationException = exports.WAFEntityMigrationException = exports.MigrationErrorType = exports.CreateWebACLMigrationStackResponse = exports.CreateWebACLMigrationStackRequest = exports.CreateWebACLResponse = exports.WebACL = exports.CreateWebACLRequest = exports.CreateSqlInjectionMatchSetResponse = exports.SqlInjectionMatchSet = exports.SqlInjectionMatchTuple = exports.CreateSqlInjectionMatchSetRequest = exports.CreateSizeConstraintSetResponse = exports.SizeConstraintSet = exports.SizeConstraint = exports.ComparisonOperator = exports.CreateSizeConstraintSetRequest = exports.CreateRuleGroupResponse = exports.RuleGroup = exports.CreateRuleGroupRequest = exports.CreateRuleResponse = exports.Rule = exports.CreateRuleRequest = exports.CreateRegexPatternSetResponse = void 0;
exports.GetXssMatchSetRequest = exports.GetWebACLResponse = exports.GetWebACLRequest = exports.GetSqlInjectionMatchSetResponse = exports.GetSqlInjectionMatchSetRequest = exports.GetSizeConstraintSetResponse = exports.GetSizeConstraintSetRequest = exports.GetSampledRequestsResponse = exports.SampledHTTPRequest = exports.HTTPRequest = exports.HTTPHeader = exports.GetSampledRequestsRequest = exports.TimeWindow = exports.GetRuleGroupResponse = exports.GetRuleGroupRequest = exports.GetRuleResponse = exports.GetRuleRequest = exports.GetRegexPatternSetResponse = exports.GetRegexPatternSetRequest = exports.GetRegexMatchSetResponse = exports.GetRegexMatchSetRequest = exports.GetRateBasedRuleManagedKeysResponse = exports.GetRateBasedRuleManagedKeysRequest = exports.GetRateBasedRuleResponse = exports.GetRateBasedRuleRequest = exports.GetPermissionPolicyResponse = exports.GetPermissionPolicyRequest = exports.GetLoggingConfigurationResponse = exports.LoggingConfiguration = exports.GetLoggingConfigurationRequest = exports.GetIPSetResponse = exports.GetIPSetRequest = exports.GetGeoMatchSetResponse = exports.GetGeoMatchSetRequest = exports.GetChangeTokenStatusResponse = exports.ChangeTokenStatus = exports.GetChangeTokenStatusRequest = exports.GetChangeTokenResponse = exports.GetChangeTokenRequest = exports.GetByteMatchSetResponse = exports.GetByteMatchSetRequest = exports.DeleteXssMatchSetResponse = exports.DeleteXssMatchSetRequest = exports.DeleteWebACLResponse = exports.DeleteWebACLRequest = exports.DeleteSqlInjectionMatchSetResponse = exports.DeleteSqlInjectionMatchSetRequest = exports.DeleteSizeConstraintSetResponse = exports.DeleteSizeConstraintSetRequest = exports.DeleteRuleGroupResponse = void 0;
exports.PutPermissionPolicyRequest = exports.WAFServiceLinkedRoleErrorException = exports.PutLoggingConfigurationResponse = exports.PutLoggingConfigurationRequest = exports.ListXssMatchSetsResponse = exports.XssMatchSetSummary = exports.ListXssMatchSetsRequest = exports.ListWebACLsResponse = exports.WebACLSummary = exports.ListWebACLsRequest = exports.ListTagsForResourceResponse = exports.TagInfoForResource = exports.ListTagsForResourceRequest = exports.ListSubscribedRuleGroupsResponse = exports.SubscribedRuleGroupSummary = exports.ListSubscribedRuleGroupsRequest = exports.ListSqlInjectionMatchSetsResponse = exports.SqlInjectionMatchSetSummary = exports.ListSqlInjectionMatchSetsRequest = exports.ListSizeConstraintSetsResponse = exports.SizeConstraintSetSummary = exports.ListSizeConstraintSetsRequest = exports.ListRulesResponse = exports.ListRulesRequest = exports.ListRuleGroupsResponse = exports.RuleGroupSummary = exports.ListRuleGroupsRequest = exports.ListRegexPatternSetsResponse = exports.RegexPatternSetSummary = exports.ListRegexPatternSetsRequest = exports.ListRegexMatchSetsResponse = exports.RegexMatchSetSummary = exports.ListRegexMatchSetsRequest = exports.ListRateBasedRulesResponse = exports.RuleSummary = exports.ListRateBasedRulesRequest = exports.ListLoggingConfigurationsResponse = exports.ListLoggingConfigurationsRequest = exports.ListIPSetsResponse = exports.IPSetSummary = exports.ListIPSetsRequest = exports.ListGeoMatchSetsResponse = exports.GeoMatchSetSummary = exports.ListGeoMatchSetsRequest = exports.ListByteMatchSetsResponse = exports.ByteMatchSetSummary = exports.ListByteMatchSetsRequest = exports.ListActivatedRulesInRuleGroupResponse = exports.ListActivatedRulesInRuleGroupRequest = exports.GetXssMatchSetResponse = void 0;
exports.UpdateXssMatchSetResponse = exports.UpdateXssMatchSetRequest = exports.XssMatchSetUpdate = exports.WAFSubscriptionNotFoundException = exports.UpdateWebACLResponse = exports.UpdateWebACLRequest = exports.WebACLUpdate = exports.UpdateSqlInjectionMatchSetResponse = exports.UpdateSqlInjectionMatchSetRequest = exports.SqlInjectionMatchSetUpdate = exports.UpdateSizeConstraintSetResponse = exports.UpdateSizeConstraintSetRequest = exports.SizeConstraintSetUpdate = exports.UpdateRuleGroupResponse = exports.UpdateRuleGroupRequest = exports.RuleGroupUpdate = exports.UpdateRuleResponse = exports.UpdateRuleRequest = exports.WAFInvalidRegexPatternException = exports.UpdateRegexPatternSetResponse = exports.UpdateRegexPatternSetRequest = exports.RegexPatternSetUpdate = exports.UpdateRegexMatchSetResponse = exports.UpdateRegexMatchSetRequest = exports.RegexMatchSetUpdate = exports.UpdateRateBasedRuleResponse = exports.UpdateRateBasedRuleRequest = exports.RuleUpdate = exports.UpdateIPSetResponse = exports.UpdateIPSetRequest = exports.IPSetUpdate = exports.UpdateGeoMatchSetResponse = exports.UpdateGeoMatchSetRequest = exports.GeoMatchSetUpdate = exports.WAFNonexistentContainerException = exports.UpdateByteMatchSetResponse = exports.UpdateByteMatchSetRequest = exports.ByteMatchSetUpdate = exports.ChangeAction = exports.UntagResourceResponse = exports.UntagResourceRequest = exports.TagResourceResponse = exports.TagResourceRequest = exports.WAFInvalidPermissionPolicyException = exports.PutPermissionPolicyResponse = void 0;
var WafActionType;
(function (WafActionType) {
    WafActionType["ALLOW"] = "ALLOW";
    WafActionType["BLOCK"] = "BLOCK";
    WafActionType["COUNT"] = "COUNT";
})(WafActionType = exports.WafActionType || (exports.WafActionType = {}));
var WafAction;
(function (WafAction) {
    /**
     * @internal
     */
    WafAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WafAction = exports.WafAction || (exports.WafAction = {}));
var ExcludedRule;
(function (ExcludedRule) {
    /**
     * @internal
     */
    ExcludedRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ExcludedRule = exports.ExcludedRule || (exports.ExcludedRule = {}));
var WafOverrideActionType;
(function (WafOverrideActionType) {
    WafOverrideActionType["COUNT"] = "COUNT";
    WafOverrideActionType["NONE"] = "NONE";
})(WafOverrideActionType = exports.WafOverrideActionType || (exports.WafOverrideActionType = {}));
var WafOverrideAction;
(function (WafOverrideAction) {
    /**
     * @internal
     */
    WafOverrideAction.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WafOverrideAction = exports.WafOverrideAction || (exports.WafOverrideAction = {}));
var WafRuleType;
(function (WafRuleType) {
    WafRuleType["GROUP"] = "GROUP";
    WafRuleType["RATE_BASED"] = "RATE_BASED";
    WafRuleType["REGULAR"] = "REGULAR";
})(WafRuleType = exports.WafRuleType || (exports.WafRuleType = {}));
var ActivatedRule;
(function (ActivatedRule) {
    /**
     * @internal
     */
    ActivatedRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivatedRule = exports.ActivatedRule || (exports.ActivatedRule = {}));
var CreateByteMatchSetRequest;
(function (CreateByteMatchSetRequest) {
    /**
     * @internal
     */
    CreateByteMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateByteMatchSetRequest = exports.CreateByteMatchSetRequest || (exports.CreateByteMatchSetRequest = {}));
var MatchFieldType;
(function (MatchFieldType) {
    MatchFieldType["ALL_QUERY_ARGS"] = "ALL_QUERY_ARGS";
    MatchFieldType["BODY"] = "BODY";
    MatchFieldType["HEADER"] = "HEADER";
    MatchFieldType["METHOD"] = "METHOD";
    MatchFieldType["QUERY_STRING"] = "QUERY_STRING";
    MatchFieldType["SINGLE_QUERY_ARG"] = "SINGLE_QUERY_ARG";
    MatchFieldType["URI"] = "URI";
})(MatchFieldType = exports.MatchFieldType || (exports.MatchFieldType = {}));
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
var TextTransformation;
(function (TextTransformation) {
    TextTransformation["CMD_LINE"] = "CMD_LINE";
    TextTransformation["COMPRESS_WHITE_SPACE"] = "COMPRESS_WHITE_SPACE";
    TextTransformation["HTML_ENTITY_DECODE"] = "HTML_ENTITY_DECODE";
    TextTransformation["LOWERCASE"] = "LOWERCASE";
    TextTransformation["NONE"] = "NONE";
    TextTransformation["URL_DECODE"] = "URL_DECODE";
})(TextTransformation = exports.TextTransformation || (exports.TextTransformation = {}));
var ByteMatchTuple;
(function (ByteMatchTuple) {
    /**
     * @internal
     */
    ByteMatchTuple.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ByteMatchTuple = exports.ByteMatchTuple || (exports.ByteMatchTuple = {}));
var ByteMatchSet;
(function (ByteMatchSet) {
    /**
     * @internal
     */
    ByteMatchSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ByteMatchSet = exports.ByteMatchSet || (exports.ByteMatchSet = {}));
var CreateByteMatchSetResponse;
(function (CreateByteMatchSetResponse) {
    /**
     * @internal
     */
    CreateByteMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateByteMatchSetResponse = exports.CreateByteMatchSetResponse || (exports.CreateByteMatchSetResponse = {}));
var WAFDisallowedNameException;
(function (WAFDisallowedNameException) {
    /**
     * @internal
     */
    WAFDisallowedNameException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFDisallowedNameException = exports.WAFDisallowedNameException || (exports.WAFDisallowedNameException = {}));
var WAFInternalErrorException;
(function (WAFInternalErrorException) {
    /**
     * @internal
     */
    WAFInternalErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFInternalErrorException = exports.WAFInternalErrorException || (exports.WAFInternalErrorException = {}));
var WAFInvalidAccountException;
(function (WAFInvalidAccountException) {
    /**
     * @internal
     */
    WAFInvalidAccountException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFInvalidAccountException = exports.WAFInvalidAccountException || (exports.WAFInvalidAccountException = {}));
var ParameterExceptionField;
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
})(ParameterExceptionField = exports.ParameterExceptionField || (exports.ParameterExceptionField = {}));
var ParameterExceptionReason;
(function (ParameterExceptionReason) {
    ParameterExceptionReason["ILLEGAL_ARGUMENT"] = "ILLEGAL_ARGUMENT";
    ParameterExceptionReason["ILLEGAL_COMBINATION"] = "ILLEGAL_COMBINATION";
    ParameterExceptionReason["INVALID_OPTION"] = "INVALID_OPTION";
    ParameterExceptionReason["INVALID_TAG_KEY"] = "INVALID_TAG_KEY";
})(ParameterExceptionReason = exports.ParameterExceptionReason || (exports.ParameterExceptionReason = {}));
var WAFInvalidParameterException;
(function (WAFInvalidParameterException) {
    /**
     * @internal
     */
    WAFInvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFInvalidParameterException = exports.WAFInvalidParameterException || (exports.WAFInvalidParameterException = {}));
var WAFLimitsExceededException;
(function (WAFLimitsExceededException) {
    /**
     * @internal
     */
    WAFLimitsExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFLimitsExceededException = exports.WAFLimitsExceededException || (exports.WAFLimitsExceededException = {}));
var WAFStaleDataException;
(function (WAFStaleDataException) {
    /**
     * @internal
     */
    WAFStaleDataException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFStaleDataException = exports.WAFStaleDataException || (exports.WAFStaleDataException = {}));
var CreateGeoMatchSetRequest;
(function (CreateGeoMatchSetRequest) {
    /**
     * @internal
     */
    CreateGeoMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGeoMatchSetRequest = exports.CreateGeoMatchSetRequest || (exports.CreateGeoMatchSetRequest = {}));
var GeoMatchConstraintType;
(function (GeoMatchConstraintType) {
    GeoMatchConstraintType["Country"] = "Country";
})(GeoMatchConstraintType = exports.GeoMatchConstraintType || (exports.GeoMatchConstraintType = {}));
var GeoMatchConstraintValue;
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
})(GeoMatchConstraintValue = exports.GeoMatchConstraintValue || (exports.GeoMatchConstraintValue = {}));
var GeoMatchConstraint;
(function (GeoMatchConstraint) {
    /**
     * @internal
     */
    GeoMatchConstraint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GeoMatchConstraint = exports.GeoMatchConstraint || (exports.GeoMatchConstraint = {}));
var GeoMatchSet;
(function (GeoMatchSet) {
    /**
     * @internal
     */
    GeoMatchSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GeoMatchSet = exports.GeoMatchSet || (exports.GeoMatchSet = {}));
var CreateGeoMatchSetResponse;
(function (CreateGeoMatchSetResponse) {
    /**
     * @internal
     */
    CreateGeoMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateGeoMatchSetResponse = exports.CreateGeoMatchSetResponse || (exports.CreateGeoMatchSetResponse = {}));
var CreateIPSetRequest;
(function (CreateIPSetRequest) {
    /**
     * @internal
     */
    CreateIPSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIPSetRequest = exports.CreateIPSetRequest || (exports.CreateIPSetRequest = {}));
var IPSetDescriptorType;
(function (IPSetDescriptorType) {
    IPSetDescriptorType["IPV4"] = "IPV4";
    IPSetDescriptorType["IPV6"] = "IPV6";
})(IPSetDescriptorType = exports.IPSetDescriptorType || (exports.IPSetDescriptorType = {}));
var IPSetDescriptor;
(function (IPSetDescriptor) {
    /**
     * @internal
     */
    IPSetDescriptor.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IPSetDescriptor = exports.IPSetDescriptor || (exports.IPSetDescriptor = {}));
var IPSet;
(function (IPSet) {
    /**
     * @internal
     */
    IPSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IPSet = exports.IPSet || (exports.IPSet = {}));
var CreateIPSetResponse;
(function (CreateIPSetResponse) {
    /**
     * @internal
     */
    CreateIPSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateIPSetResponse = exports.CreateIPSetResponse || (exports.CreateIPSetResponse = {}));
var RateKey;
(function (RateKey) {
    RateKey["IP"] = "IP";
})(RateKey = exports.RateKey || (exports.RateKey = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateRateBasedRuleRequest;
(function (CreateRateBasedRuleRequest) {
    /**
     * @internal
     */
    CreateRateBasedRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRateBasedRuleRequest = exports.CreateRateBasedRuleRequest || (exports.CreateRateBasedRuleRequest = {}));
var PredicateType;
(function (PredicateType) {
    PredicateType["BYTE_MATCH"] = "ByteMatch";
    PredicateType["GEO_MATCH"] = "GeoMatch";
    PredicateType["IP_MATCH"] = "IPMatch";
    PredicateType["REGEX_MATCH"] = "RegexMatch";
    PredicateType["SIZE_CONSTRAINT"] = "SizeConstraint";
    PredicateType["SQL_INJECTION_MATCH"] = "SqlInjectionMatch";
    PredicateType["XSS_MATCH"] = "XssMatch";
})(PredicateType = exports.PredicateType || (exports.PredicateType = {}));
var Predicate;
(function (Predicate) {
    /**
     * @internal
     */
    Predicate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Predicate = exports.Predicate || (exports.Predicate = {}));
var RateBasedRule;
(function (RateBasedRule) {
    /**
     * @internal
     */
    RateBasedRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RateBasedRule = exports.RateBasedRule || (exports.RateBasedRule = {}));
var CreateRateBasedRuleResponse;
(function (CreateRateBasedRuleResponse) {
    /**
     * @internal
     */
    CreateRateBasedRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRateBasedRuleResponse = exports.CreateRateBasedRuleResponse || (exports.CreateRateBasedRuleResponse = {}));
var WAFBadRequestException;
(function (WAFBadRequestException) {
    /**
     * @internal
     */
    WAFBadRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFBadRequestException = exports.WAFBadRequestException || (exports.WAFBadRequestException = {}));
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
var CreateRegexMatchSetRequest;
(function (CreateRegexMatchSetRequest) {
    /**
     * @internal
     */
    CreateRegexMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRegexMatchSetRequest = exports.CreateRegexMatchSetRequest || (exports.CreateRegexMatchSetRequest = {}));
var RegexMatchTuple;
(function (RegexMatchTuple) {
    /**
     * @internal
     */
    RegexMatchTuple.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegexMatchTuple = exports.RegexMatchTuple || (exports.RegexMatchTuple = {}));
var RegexMatchSet;
(function (RegexMatchSet) {
    /**
     * @internal
     */
    RegexMatchSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegexMatchSet = exports.RegexMatchSet || (exports.RegexMatchSet = {}));
var CreateRegexMatchSetResponse;
(function (CreateRegexMatchSetResponse) {
    /**
     * @internal
     */
    CreateRegexMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRegexMatchSetResponse = exports.CreateRegexMatchSetResponse || (exports.CreateRegexMatchSetResponse = {}));
var CreateRegexPatternSetRequest;
(function (CreateRegexPatternSetRequest) {
    /**
     * @internal
     */
    CreateRegexPatternSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRegexPatternSetRequest = exports.CreateRegexPatternSetRequest || (exports.CreateRegexPatternSetRequest = {}));
var RegexPatternSet;
(function (RegexPatternSet) {
    /**
     * @internal
     */
    RegexPatternSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegexPatternSet = exports.RegexPatternSet || (exports.RegexPatternSet = {}));
var CreateRegexPatternSetResponse;
(function (CreateRegexPatternSetResponse) {
    /**
     * @internal
     */
    CreateRegexPatternSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRegexPatternSetResponse = exports.CreateRegexPatternSetResponse || (exports.CreateRegexPatternSetResponse = {}));
var CreateRuleRequest;
(function (CreateRuleRequest) {
    /**
     * @internal
     */
    CreateRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRuleRequest = exports.CreateRuleRequest || (exports.CreateRuleRequest = {}));
var Rule;
(function (Rule) {
    /**
     * @internal
     */
    Rule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Rule = exports.Rule || (exports.Rule = {}));
var CreateRuleResponse;
(function (CreateRuleResponse) {
    /**
     * @internal
     */
    CreateRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRuleResponse = exports.CreateRuleResponse || (exports.CreateRuleResponse = {}));
var CreateRuleGroupRequest;
(function (CreateRuleGroupRequest) {
    /**
     * @internal
     */
    CreateRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRuleGroupRequest = exports.CreateRuleGroupRequest || (exports.CreateRuleGroupRequest = {}));
var RuleGroup;
(function (RuleGroup) {
    /**
     * @internal
     */
    RuleGroup.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleGroup = exports.RuleGroup || (exports.RuleGroup = {}));
var CreateRuleGroupResponse;
(function (CreateRuleGroupResponse) {
    /**
     * @internal
     */
    CreateRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateRuleGroupResponse = exports.CreateRuleGroupResponse || (exports.CreateRuleGroupResponse = {}));
var CreateSizeConstraintSetRequest;
(function (CreateSizeConstraintSetRequest) {
    /**
     * @internal
     */
    CreateSizeConstraintSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSizeConstraintSetRequest = exports.CreateSizeConstraintSetRequest || (exports.CreateSizeConstraintSetRequest = {}));
var ComparisonOperator;
(function (ComparisonOperator) {
    ComparisonOperator["EQ"] = "EQ";
    ComparisonOperator["GE"] = "GE";
    ComparisonOperator["GT"] = "GT";
    ComparisonOperator["LE"] = "LE";
    ComparisonOperator["LT"] = "LT";
    ComparisonOperator["NE"] = "NE";
})(ComparisonOperator = exports.ComparisonOperator || (exports.ComparisonOperator = {}));
var SizeConstraint;
(function (SizeConstraint) {
    /**
     * @internal
     */
    SizeConstraint.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SizeConstraint = exports.SizeConstraint || (exports.SizeConstraint = {}));
var SizeConstraintSet;
(function (SizeConstraintSet) {
    /**
     * @internal
     */
    SizeConstraintSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SizeConstraintSet = exports.SizeConstraintSet || (exports.SizeConstraintSet = {}));
var CreateSizeConstraintSetResponse;
(function (CreateSizeConstraintSetResponse) {
    /**
     * @internal
     */
    CreateSizeConstraintSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSizeConstraintSetResponse = exports.CreateSizeConstraintSetResponse || (exports.CreateSizeConstraintSetResponse = {}));
var CreateSqlInjectionMatchSetRequest;
(function (CreateSqlInjectionMatchSetRequest) {
    /**
     * @internal
     */
    CreateSqlInjectionMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSqlInjectionMatchSetRequest = exports.CreateSqlInjectionMatchSetRequest || (exports.CreateSqlInjectionMatchSetRequest = {}));
var SqlInjectionMatchTuple;
(function (SqlInjectionMatchTuple) {
    /**
     * @internal
     */
    SqlInjectionMatchTuple.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlInjectionMatchTuple = exports.SqlInjectionMatchTuple || (exports.SqlInjectionMatchTuple = {}));
var SqlInjectionMatchSet;
(function (SqlInjectionMatchSet) {
    /**
     * @internal
     */
    SqlInjectionMatchSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlInjectionMatchSet = exports.SqlInjectionMatchSet || (exports.SqlInjectionMatchSet = {}));
var CreateSqlInjectionMatchSetResponse;
(function (CreateSqlInjectionMatchSetResponse) {
    /**
     * @internal
     */
    CreateSqlInjectionMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateSqlInjectionMatchSetResponse = exports.CreateSqlInjectionMatchSetResponse || (exports.CreateSqlInjectionMatchSetResponse = {}));
var CreateWebACLRequest;
(function (CreateWebACLRequest) {
    /**
     * @internal
     */
    CreateWebACLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWebACLRequest = exports.CreateWebACLRequest || (exports.CreateWebACLRequest = {}));
var WebACL;
(function (WebACL) {
    /**
     * @internal
     */
    WebACL.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebACL = exports.WebACL || (exports.WebACL = {}));
var CreateWebACLResponse;
(function (CreateWebACLResponse) {
    /**
     * @internal
     */
    CreateWebACLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWebACLResponse = exports.CreateWebACLResponse || (exports.CreateWebACLResponse = {}));
var CreateWebACLMigrationStackRequest;
(function (CreateWebACLMigrationStackRequest) {
    /**
     * @internal
     */
    CreateWebACLMigrationStackRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWebACLMigrationStackRequest = exports.CreateWebACLMigrationStackRequest || (exports.CreateWebACLMigrationStackRequest = {}));
var CreateWebACLMigrationStackResponse;
(function (CreateWebACLMigrationStackResponse) {
    /**
     * @internal
     */
    CreateWebACLMigrationStackResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateWebACLMigrationStackResponse = exports.CreateWebACLMigrationStackResponse || (exports.CreateWebACLMigrationStackResponse = {}));
var MigrationErrorType;
(function (MigrationErrorType) {
    MigrationErrorType["ENTITY_NOT_FOUND"] = "ENTITY_NOT_FOUND";
    MigrationErrorType["ENTITY_NOT_SUPPORTED"] = "ENTITY_NOT_SUPPORTED";
    MigrationErrorType["S3_BUCKET_INVALID_REGION"] = "S3_BUCKET_INVALID_REGION";
    MigrationErrorType["S3_BUCKET_NOT_ACCESSIBLE"] = "S3_BUCKET_NOT_ACCESSIBLE";
    MigrationErrorType["S3_BUCKET_NOT_FOUND"] = "S3_BUCKET_NOT_FOUND";
    MigrationErrorType["S3_BUCKET_NO_PERMISSION"] = "S3_BUCKET_NO_PERMISSION";
    MigrationErrorType["S3_INTERNAL_ERROR"] = "S3_INTERNAL_ERROR";
})(MigrationErrorType = exports.MigrationErrorType || (exports.MigrationErrorType = {}));
var WAFEntityMigrationException;
(function (WAFEntityMigrationException) {
    /**
     * @internal
     */
    WAFEntityMigrationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFEntityMigrationException = exports.WAFEntityMigrationException || (exports.WAFEntityMigrationException = {}));
var WAFInvalidOperationException;
(function (WAFInvalidOperationException) {
    /**
     * @internal
     */
    WAFInvalidOperationException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFInvalidOperationException = exports.WAFInvalidOperationException || (exports.WAFInvalidOperationException = {}));
var WAFNonexistentItemException;
(function (WAFNonexistentItemException) {
    /**
     * @internal
     */
    WAFNonexistentItemException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFNonexistentItemException = exports.WAFNonexistentItemException || (exports.WAFNonexistentItemException = {}));
var CreateXssMatchSetRequest;
(function (CreateXssMatchSetRequest) {
    /**
     * @internal
     */
    CreateXssMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateXssMatchSetRequest = exports.CreateXssMatchSetRequest || (exports.CreateXssMatchSetRequest = {}));
var XssMatchTuple;
(function (XssMatchTuple) {
    /**
     * @internal
     */
    XssMatchTuple.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(XssMatchTuple = exports.XssMatchTuple || (exports.XssMatchTuple = {}));
var XssMatchSet;
(function (XssMatchSet) {
    /**
     * @internal
     */
    XssMatchSet.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(XssMatchSet = exports.XssMatchSet || (exports.XssMatchSet = {}));
var CreateXssMatchSetResponse;
(function (CreateXssMatchSetResponse) {
    /**
     * @internal
     */
    CreateXssMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateXssMatchSetResponse = exports.CreateXssMatchSetResponse || (exports.CreateXssMatchSetResponse = {}));
var DeleteByteMatchSetRequest;
(function (DeleteByteMatchSetRequest) {
    /**
     * @internal
     */
    DeleteByteMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteByteMatchSetRequest = exports.DeleteByteMatchSetRequest || (exports.DeleteByteMatchSetRequest = {}));
var DeleteByteMatchSetResponse;
(function (DeleteByteMatchSetResponse) {
    /**
     * @internal
     */
    DeleteByteMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteByteMatchSetResponse = exports.DeleteByteMatchSetResponse || (exports.DeleteByteMatchSetResponse = {}));
var WAFNonEmptyEntityException;
(function (WAFNonEmptyEntityException) {
    /**
     * @internal
     */
    WAFNonEmptyEntityException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFNonEmptyEntityException = exports.WAFNonEmptyEntityException || (exports.WAFNonEmptyEntityException = {}));
var WAFReferencedItemException;
(function (WAFReferencedItemException) {
    /**
     * @internal
     */
    WAFReferencedItemException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFReferencedItemException = exports.WAFReferencedItemException || (exports.WAFReferencedItemException = {}));
var DeleteGeoMatchSetRequest;
(function (DeleteGeoMatchSetRequest) {
    /**
     * @internal
     */
    DeleteGeoMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGeoMatchSetRequest = exports.DeleteGeoMatchSetRequest || (exports.DeleteGeoMatchSetRequest = {}));
var DeleteGeoMatchSetResponse;
(function (DeleteGeoMatchSetResponse) {
    /**
     * @internal
     */
    DeleteGeoMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteGeoMatchSetResponse = exports.DeleteGeoMatchSetResponse || (exports.DeleteGeoMatchSetResponse = {}));
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
var DeleteRateBasedRuleRequest;
(function (DeleteRateBasedRuleRequest) {
    /**
     * @internal
     */
    DeleteRateBasedRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRateBasedRuleRequest = exports.DeleteRateBasedRuleRequest || (exports.DeleteRateBasedRuleRequest = {}));
var DeleteRateBasedRuleResponse;
(function (DeleteRateBasedRuleResponse) {
    /**
     * @internal
     */
    DeleteRateBasedRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRateBasedRuleResponse = exports.DeleteRateBasedRuleResponse || (exports.DeleteRateBasedRuleResponse = {}));
var DeleteRegexMatchSetRequest;
(function (DeleteRegexMatchSetRequest) {
    /**
     * @internal
     */
    DeleteRegexMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegexMatchSetRequest = exports.DeleteRegexMatchSetRequest || (exports.DeleteRegexMatchSetRequest = {}));
var DeleteRegexMatchSetResponse;
(function (DeleteRegexMatchSetResponse) {
    /**
     * @internal
     */
    DeleteRegexMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRegexMatchSetResponse = exports.DeleteRegexMatchSetResponse || (exports.DeleteRegexMatchSetResponse = {}));
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
var DeleteRuleRequest;
(function (DeleteRuleRequest) {
    /**
     * @internal
     */
    DeleteRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRuleRequest = exports.DeleteRuleRequest || (exports.DeleteRuleRequest = {}));
var DeleteRuleResponse;
(function (DeleteRuleResponse) {
    /**
     * @internal
     */
    DeleteRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteRuleResponse = exports.DeleteRuleResponse || (exports.DeleteRuleResponse = {}));
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
var DeleteSizeConstraintSetRequest;
(function (DeleteSizeConstraintSetRequest) {
    /**
     * @internal
     */
    DeleteSizeConstraintSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSizeConstraintSetRequest = exports.DeleteSizeConstraintSetRequest || (exports.DeleteSizeConstraintSetRequest = {}));
var DeleteSizeConstraintSetResponse;
(function (DeleteSizeConstraintSetResponse) {
    /**
     * @internal
     */
    DeleteSizeConstraintSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSizeConstraintSetResponse = exports.DeleteSizeConstraintSetResponse || (exports.DeleteSizeConstraintSetResponse = {}));
var DeleteSqlInjectionMatchSetRequest;
(function (DeleteSqlInjectionMatchSetRequest) {
    /**
     * @internal
     */
    DeleteSqlInjectionMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSqlInjectionMatchSetRequest = exports.DeleteSqlInjectionMatchSetRequest || (exports.DeleteSqlInjectionMatchSetRequest = {}));
var DeleteSqlInjectionMatchSetResponse;
(function (DeleteSqlInjectionMatchSetResponse) {
    /**
     * @internal
     */
    DeleteSqlInjectionMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteSqlInjectionMatchSetResponse = exports.DeleteSqlInjectionMatchSetResponse || (exports.DeleteSqlInjectionMatchSetResponse = {}));
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
var DeleteXssMatchSetRequest;
(function (DeleteXssMatchSetRequest) {
    /**
     * @internal
     */
    DeleteXssMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteXssMatchSetRequest = exports.DeleteXssMatchSetRequest || (exports.DeleteXssMatchSetRequest = {}));
var DeleteXssMatchSetResponse;
(function (DeleteXssMatchSetResponse) {
    /**
     * @internal
     */
    DeleteXssMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteXssMatchSetResponse = exports.DeleteXssMatchSetResponse || (exports.DeleteXssMatchSetResponse = {}));
var GetByteMatchSetRequest;
(function (GetByteMatchSetRequest) {
    /**
     * @internal
     */
    GetByteMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetByteMatchSetRequest = exports.GetByteMatchSetRequest || (exports.GetByteMatchSetRequest = {}));
var GetByteMatchSetResponse;
(function (GetByteMatchSetResponse) {
    /**
     * @internal
     */
    GetByteMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetByteMatchSetResponse = exports.GetByteMatchSetResponse || (exports.GetByteMatchSetResponse = {}));
var GetChangeTokenRequest;
(function (GetChangeTokenRequest) {
    /**
     * @internal
     */
    GetChangeTokenRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChangeTokenRequest = exports.GetChangeTokenRequest || (exports.GetChangeTokenRequest = {}));
var GetChangeTokenResponse;
(function (GetChangeTokenResponse) {
    /**
     * @internal
     */
    GetChangeTokenResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChangeTokenResponse = exports.GetChangeTokenResponse || (exports.GetChangeTokenResponse = {}));
var GetChangeTokenStatusRequest;
(function (GetChangeTokenStatusRequest) {
    /**
     * @internal
     */
    GetChangeTokenStatusRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChangeTokenStatusRequest = exports.GetChangeTokenStatusRequest || (exports.GetChangeTokenStatusRequest = {}));
var ChangeTokenStatus;
(function (ChangeTokenStatus) {
    ChangeTokenStatus["INSYNC"] = "INSYNC";
    ChangeTokenStatus["PENDING"] = "PENDING";
    ChangeTokenStatus["PROVISIONED"] = "PROVISIONED";
})(ChangeTokenStatus = exports.ChangeTokenStatus || (exports.ChangeTokenStatus = {}));
var GetChangeTokenStatusResponse;
(function (GetChangeTokenStatusResponse) {
    /**
     * @internal
     */
    GetChangeTokenStatusResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetChangeTokenStatusResponse = exports.GetChangeTokenStatusResponse || (exports.GetChangeTokenStatusResponse = {}));
var GetGeoMatchSetRequest;
(function (GetGeoMatchSetRequest) {
    /**
     * @internal
     */
    GetGeoMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGeoMatchSetRequest = exports.GetGeoMatchSetRequest || (exports.GetGeoMatchSetRequest = {}));
var GetGeoMatchSetResponse;
(function (GetGeoMatchSetResponse) {
    /**
     * @internal
     */
    GetGeoMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetGeoMatchSetResponse = exports.GetGeoMatchSetResponse || (exports.GetGeoMatchSetResponse = {}));
var GetIPSetRequest;
(function (GetIPSetRequest) {
    /**
     * @internal
     */
    GetIPSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetIPSetRequest = exports.GetIPSetRequest || (exports.GetIPSetRequest = {}));
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
var GetRateBasedRuleRequest;
(function (GetRateBasedRuleRequest) {
    /**
     * @internal
     */
    GetRateBasedRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRateBasedRuleRequest = exports.GetRateBasedRuleRequest || (exports.GetRateBasedRuleRequest = {}));
var GetRateBasedRuleResponse;
(function (GetRateBasedRuleResponse) {
    /**
     * @internal
     */
    GetRateBasedRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRateBasedRuleResponse = exports.GetRateBasedRuleResponse || (exports.GetRateBasedRuleResponse = {}));
var GetRateBasedRuleManagedKeysRequest;
(function (GetRateBasedRuleManagedKeysRequest) {
    /**
     * @internal
     */
    GetRateBasedRuleManagedKeysRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRateBasedRuleManagedKeysRequest = exports.GetRateBasedRuleManagedKeysRequest || (exports.GetRateBasedRuleManagedKeysRequest = {}));
var GetRateBasedRuleManagedKeysResponse;
(function (GetRateBasedRuleManagedKeysResponse) {
    /**
     * @internal
     */
    GetRateBasedRuleManagedKeysResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRateBasedRuleManagedKeysResponse = exports.GetRateBasedRuleManagedKeysResponse || (exports.GetRateBasedRuleManagedKeysResponse = {}));
var GetRegexMatchSetRequest;
(function (GetRegexMatchSetRequest) {
    /**
     * @internal
     */
    GetRegexMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegexMatchSetRequest = exports.GetRegexMatchSetRequest || (exports.GetRegexMatchSetRequest = {}));
var GetRegexMatchSetResponse;
(function (GetRegexMatchSetResponse) {
    /**
     * @internal
     */
    GetRegexMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegexMatchSetResponse = exports.GetRegexMatchSetResponse || (exports.GetRegexMatchSetResponse = {}));
var GetRegexPatternSetRequest;
(function (GetRegexPatternSetRequest) {
    /**
     * @internal
     */
    GetRegexPatternSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegexPatternSetRequest = exports.GetRegexPatternSetRequest || (exports.GetRegexPatternSetRequest = {}));
var GetRegexPatternSetResponse;
(function (GetRegexPatternSetResponse) {
    /**
     * @internal
     */
    GetRegexPatternSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRegexPatternSetResponse = exports.GetRegexPatternSetResponse || (exports.GetRegexPatternSetResponse = {}));
var GetRuleRequest;
(function (GetRuleRequest) {
    /**
     * @internal
     */
    GetRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRuleRequest = exports.GetRuleRequest || (exports.GetRuleRequest = {}));
var GetRuleResponse;
(function (GetRuleResponse) {
    /**
     * @internal
     */
    GetRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRuleResponse = exports.GetRuleResponse || (exports.GetRuleResponse = {}));
var GetRuleGroupRequest;
(function (GetRuleGroupRequest) {
    /**
     * @internal
     */
    GetRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRuleGroupRequest = exports.GetRuleGroupRequest || (exports.GetRuleGroupRequest = {}));
var GetRuleGroupResponse;
(function (GetRuleGroupResponse) {
    /**
     * @internal
     */
    GetRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetRuleGroupResponse = exports.GetRuleGroupResponse || (exports.GetRuleGroupResponse = {}));
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
var GetSizeConstraintSetRequest;
(function (GetSizeConstraintSetRequest) {
    /**
     * @internal
     */
    GetSizeConstraintSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSizeConstraintSetRequest = exports.GetSizeConstraintSetRequest || (exports.GetSizeConstraintSetRequest = {}));
var GetSizeConstraintSetResponse;
(function (GetSizeConstraintSetResponse) {
    /**
     * @internal
     */
    GetSizeConstraintSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSizeConstraintSetResponse = exports.GetSizeConstraintSetResponse || (exports.GetSizeConstraintSetResponse = {}));
var GetSqlInjectionMatchSetRequest;
(function (GetSqlInjectionMatchSetRequest) {
    /**
     * @internal
     */
    GetSqlInjectionMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSqlInjectionMatchSetRequest = exports.GetSqlInjectionMatchSetRequest || (exports.GetSqlInjectionMatchSetRequest = {}));
var GetSqlInjectionMatchSetResponse;
(function (GetSqlInjectionMatchSetResponse) {
    /**
     * @internal
     */
    GetSqlInjectionMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetSqlInjectionMatchSetResponse = exports.GetSqlInjectionMatchSetResponse || (exports.GetSqlInjectionMatchSetResponse = {}));
var GetWebACLRequest;
(function (GetWebACLRequest) {
    /**
     * @internal
     */
    GetWebACLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWebACLRequest = exports.GetWebACLRequest || (exports.GetWebACLRequest = {}));
var GetWebACLResponse;
(function (GetWebACLResponse) {
    /**
     * @internal
     */
    GetWebACLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetWebACLResponse = exports.GetWebACLResponse || (exports.GetWebACLResponse = {}));
var GetXssMatchSetRequest;
(function (GetXssMatchSetRequest) {
    /**
     * @internal
     */
    GetXssMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetXssMatchSetRequest = exports.GetXssMatchSetRequest || (exports.GetXssMatchSetRequest = {}));
var GetXssMatchSetResponse;
(function (GetXssMatchSetResponse) {
    /**
     * @internal
     */
    GetXssMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetXssMatchSetResponse = exports.GetXssMatchSetResponse || (exports.GetXssMatchSetResponse = {}));
var ListActivatedRulesInRuleGroupRequest;
(function (ListActivatedRulesInRuleGroupRequest) {
    /**
     * @internal
     */
    ListActivatedRulesInRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActivatedRulesInRuleGroupRequest = exports.ListActivatedRulesInRuleGroupRequest || (exports.ListActivatedRulesInRuleGroupRequest = {}));
var ListActivatedRulesInRuleGroupResponse;
(function (ListActivatedRulesInRuleGroupResponse) {
    /**
     * @internal
     */
    ListActivatedRulesInRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListActivatedRulesInRuleGroupResponse = exports.ListActivatedRulesInRuleGroupResponse || (exports.ListActivatedRulesInRuleGroupResponse = {}));
var ListByteMatchSetsRequest;
(function (ListByteMatchSetsRequest) {
    /**
     * @internal
     */
    ListByteMatchSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListByteMatchSetsRequest = exports.ListByteMatchSetsRequest || (exports.ListByteMatchSetsRequest = {}));
var ByteMatchSetSummary;
(function (ByteMatchSetSummary) {
    /**
     * @internal
     */
    ByteMatchSetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ByteMatchSetSummary = exports.ByteMatchSetSummary || (exports.ByteMatchSetSummary = {}));
var ListByteMatchSetsResponse;
(function (ListByteMatchSetsResponse) {
    /**
     * @internal
     */
    ListByteMatchSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListByteMatchSetsResponse = exports.ListByteMatchSetsResponse || (exports.ListByteMatchSetsResponse = {}));
var ListGeoMatchSetsRequest;
(function (ListGeoMatchSetsRequest) {
    /**
     * @internal
     */
    ListGeoMatchSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGeoMatchSetsRequest = exports.ListGeoMatchSetsRequest || (exports.ListGeoMatchSetsRequest = {}));
var GeoMatchSetSummary;
(function (GeoMatchSetSummary) {
    /**
     * @internal
     */
    GeoMatchSetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GeoMatchSetSummary = exports.GeoMatchSetSummary || (exports.GeoMatchSetSummary = {}));
var ListGeoMatchSetsResponse;
(function (ListGeoMatchSetsResponse) {
    /**
     * @internal
     */
    ListGeoMatchSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListGeoMatchSetsResponse = exports.ListGeoMatchSetsResponse || (exports.ListGeoMatchSetsResponse = {}));
var ListIPSetsRequest;
(function (ListIPSetsRequest) {
    /**
     * @internal
     */
    ListIPSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListIPSetsRequest = exports.ListIPSetsRequest || (exports.ListIPSetsRequest = {}));
var IPSetSummary;
(function (IPSetSummary) {
    /**
     * @internal
     */
    IPSetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IPSetSummary = exports.IPSetSummary || (exports.IPSetSummary = {}));
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
var ListRateBasedRulesRequest;
(function (ListRateBasedRulesRequest) {
    /**
     * @internal
     */
    ListRateBasedRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRateBasedRulesRequest = exports.ListRateBasedRulesRequest || (exports.ListRateBasedRulesRequest = {}));
var RuleSummary;
(function (RuleSummary) {
    /**
     * @internal
     */
    RuleSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleSummary = exports.RuleSummary || (exports.RuleSummary = {}));
var ListRateBasedRulesResponse;
(function (ListRateBasedRulesResponse) {
    /**
     * @internal
     */
    ListRateBasedRulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRateBasedRulesResponse = exports.ListRateBasedRulesResponse || (exports.ListRateBasedRulesResponse = {}));
var ListRegexMatchSetsRequest;
(function (ListRegexMatchSetsRequest) {
    /**
     * @internal
     */
    ListRegexMatchSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegexMatchSetsRequest = exports.ListRegexMatchSetsRequest || (exports.ListRegexMatchSetsRequest = {}));
var RegexMatchSetSummary;
(function (RegexMatchSetSummary) {
    /**
     * @internal
     */
    RegexMatchSetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegexMatchSetSummary = exports.RegexMatchSetSummary || (exports.RegexMatchSetSummary = {}));
var ListRegexMatchSetsResponse;
(function (ListRegexMatchSetsResponse) {
    /**
     * @internal
     */
    ListRegexMatchSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegexMatchSetsResponse = exports.ListRegexMatchSetsResponse || (exports.ListRegexMatchSetsResponse = {}));
var ListRegexPatternSetsRequest;
(function (ListRegexPatternSetsRequest) {
    /**
     * @internal
     */
    ListRegexPatternSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegexPatternSetsRequest = exports.ListRegexPatternSetsRequest || (exports.ListRegexPatternSetsRequest = {}));
var RegexPatternSetSummary;
(function (RegexPatternSetSummary) {
    /**
     * @internal
     */
    RegexPatternSetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegexPatternSetSummary = exports.RegexPatternSetSummary || (exports.RegexPatternSetSummary = {}));
var ListRegexPatternSetsResponse;
(function (ListRegexPatternSetsResponse) {
    /**
     * @internal
     */
    ListRegexPatternSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRegexPatternSetsResponse = exports.ListRegexPatternSetsResponse || (exports.ListRegexPatternSetsResponse = {}));
var ListRuleGroupsRequest;
(function (ListRuleGroupsRequest) {
    /**
     * @internal
     */
    ListRuleGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRuleGroupsRequest = exports.ListRuleGroupsRequest || (exports.ListRuleGroupsRequest = {}));
var RuleGroupSummary;
(function (RuleGroupSummary) {
    /**
     * @internal
     */
    RuleGroupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleGroupSummary = exports.RuleGroupSummary || (exports.RuleGroupSummary = {}));
var ListRuleGroupsResponse;
(function (ListRuleGroupsResponse) {
    /**
     * @internal
     */
    ListRuleGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRuleGroupsResponse = exports.ListRuleGroupsResponse || (exports.ListRuleGroupsResponse = {}));
var ListRulesRequest;
(function (ListRulesRequest) {
    /**
     * @internal
     */
    ListRulesRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRulesRequest = exports.ListRulesRequest || (exports.ListRulesRequest = {}));
var ListRulesResponse;
(function (ListRulesResponse) {
    /**
     * @internal
     */
    ListRulesResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListRulesResponse = exports.ListRulesResponse || (exports.ListRulesResponse = {}));
var ListSizeConstraintSetsRequest;
(function (ListSizeConstraintSetsRequest) {
    /**
     * @internal
     */
    ListSizeConstraintSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSizeConstraintSetsRequest = exports.ListSizeConstraintSetsRequest || (exports.ListSizeConstraintSetsRequest = {}));
var SizeConstraintSetSummary;
(function (SizeConstraintSetSummary) {
    /**
     * @internal
     */
    SizeConstraintSetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SizeConstraintSetSummary = exports.SizeConstraintSetSummary || (exports.SizeConstraintSetSummary = {}));
var ListSizeConstraintSetsResponse;
(function (ListSizeConstraintSetsResponse) {
    /**
     * @internal
     */
    ListSizeConstraintSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSizeConstraintSetsResponse = exports.ListSizeConstraintSetsResponse || (exports.ListSizeConstraintSetsResponse = {}));
var ListSqlInjectionMatchSetsRequest;
(function (ListSqlInjectionMatchSetsRequest) {
    /**
     * @internal
     */
    ListSqlInjectionMatchSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSqlInjectionMatchSetsRequest = exports.ListSqlInjectionMatchSetsRequest || (exports.ListSqlInjectionMatchSetsRequest = {}));
var SqlInjectionMatchSetSummary;
(function (SqlInjectionMatchSetSummary) {
    /**
     * @internal
     */
    SqlInjectionMatchSetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlInjectionMatchSetSummary = exports.SqlInjectionMatchSetSummary || (exports.SqlInjectionMatchSetSummary = {}));
var ListSqlInjectionMatchSetsResponse;
(function (ListSqlInjectionMatchSetsResponse) {
    /**
     * @internal
     */
    ListSqlInjectionMatchSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSqlInjectionMatchSetsResponse = exports.ListSqlInjectionMatchSetsResponse || (exports.ListSqlInjectionMatchSetsResponse = {}));
var ListSubscribedRuleGroupsRequest;
(function (ListSubscribedRuleGroupsRequest) {
    /**
     * @internal
     */
    ListSubscribedRuleGroupsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscribedRuleGroupsRequest = exports.ListSubscribedRuleGroupsRequest || (exports.ListSubscribedRuleGroupsRequest = {}));
var SubscribedRuleGroupSummary;
(function (SubscribedRuleGroupSummary) {
    /**
     * @internal
     */
    SubscribedRuleGroupSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SubscribedRuleGroupSummary = exports.SubscribedRuleGroupSummary || (exports.SubscribedRuleGroupSummary = {}));
var ListSubscribedRuleGroupsResponse;
(function (ListSubscribedRuleGroupsResponse) {
    /**
     * @internal
     */
    ListSubscribedRuleGroupsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListSubscribedRuleGroupsResponse = exports.ListSubscribedRuleGroupsResponse || (exports.ListSubscribedRuleGroupsResponse = {}));
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
var WebACLSummary;
(function (WebACLSummary) {
    /**
     * @internal
     */
    WebACLSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebACLSummary = exports.WebACLSummary || (exports.WebACLSummary = {}));
var ListWebACLsResponse;
(function (ListWebACLsResponse) {
    /**
     * @internal
     */
    ListWebACLsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListWebACLsResponse = exports.ListWebACLsResponse || (exports.ListWebACLsResponse = {}));
var ListXssMatchSetsRequest;
(function (ListXssMatchSetsRequest) {
    /**
     * @internal
     */
    ListXssMatchSetsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListXssMatchSetsRequest = exports.ListXssMatchSetsRequest || (exports.ListXssMatchSetsRequest = {}));
var XssMatchSetSummary;
(function (XssMatchSetSummary) {
    /**
     * @internal
     */
    XssMatchSetSummary.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(XssMatchSetSummary = exports.XssMatchSetSummary || (exports.XssMatchSetSummary = {}));
var ListXssMatchSetsResponse;
(function (ListXssMatchSetsResponse) {
    /**
     * @internal
     */
    ListXssMatchSetsResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListXssMatchSetsResponse = exports.ListXssMatchSetsResponse || (exports.ListXssMatchSetsResponse = {}));
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
var ChangeAction;
(function (ChangeAction) {
    ChangeAction["DELETE"] = "DELETE";
    ChangeAction["INSERT"] = "INSERT";
})(ChangeAction = exports.ChangeAction || (exports.ChangeAction = {}));
var ByteMatchSetUpdate;
(function (ByteMatchSetUpdate) {
    /**
     * @internal
     */
    ByteMatchSetUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ByteMatchSetUpdate = exports.ByteMatchSetUpdate || (exports.ByteMatchSetUpdate = {}));
var UpdateByteMatchSetRequest;
(function (UpdateByteMatchSetRequest) {
    /**
     * @internal
     */
    UpdateByteMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateByteMatchSetRequest = exports.UpdateByteMatchSetRequest || (exports.UpdateByteMatchSetRequest = {}));
var UpdateByteMatchSetResponse;
(function (UpdateByteMatchSetResponse) {
    /**
     * @internal
     */
    UpdateByteMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateByteMatchSetResponse = exports.UpdateByteMatchSetResponse || (exports.UpdateByteMatchSetResponse = {}));
var WAFNonexistentContainerException;
(function (WAFNonexistentContainerException) {
    /**
     * @internal
     */
    WAFNonexistentContainerException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFNonexistentContainerException = exports.WAFNonexistentContainerException || (exports.WAFNonexistentContainerException = {}));
var GeoMatchSetUpdate;
(function (GeoMatchSetUpdate) {
    /**
     * @internal
     */
    GeoMatchSetUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GeoMatchSetUpdate = exports.GeoMatchSetUpdate || (exports.GeoMatchSetUpdate = {}));
var UpdateGeoMatchSetRequest;
(function (UpdateGeoMatchSetRequest) {
    /**
     * @internal
     */
    UpdateGeoMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGeoMatchSetRequest = exports.UpdateGeoMatchSetRequest || (exports.UpdateGeoMatchSetRequest = {}));
var UpdateGeoMatchSetResponse;
(function (UpdateGeoMatchSetResponse) {
    /**
     * @internal
     */
    UpdateGeoMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateGeoMatchSetResponse = exports.UpdateGeoMatchSetResponse || (exports.UpdateGeoMatchSetResponse = {}));
var IPSetUpdate;
(function (IPSetUpdate) {
    /**
     * @internal
     */
    IPSetUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(IPSetUpdate = exports.IPSetUpdate || (exports.IPSetUpdate = {}));
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
var RuleUpdate;
(function (RuleUpdate) {
    /**
     * @internal
     */
    RuleUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleUpdate = exports.RuleUpdate || (exports.RuleUpdate = {}));
var UpdateRateBasedRuleRequest;
(function (UpdateRateBasedRuleRequest) {
    /**
     * @internal
     */
    UpdateRateBasedRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRateBasedRuleRequest = exports.UpdateRateBasedRuleRequest || (exports.UpdateRateBasedRuleRequest = {}));
var UpdateRateBasedRuleResponse;
(function (UpdateRateBasedRuleResponse) {
    /**
     * @internal
     */
    UpdateRateBasedRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRateBasedRuleResponse = exports.UpdateRateBasedRuleResponse || (exports.UpdateRateBasedRuleResponse = {}));
var RegexMatchSetUpdate;
(function (RegexMatchSetUpdate) {
    /**
     * @internal
     */
    RegexMatchSetUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegexMatchSetUpdate = exports.RegexMatchSetUpdate || (exports.RegexMatchSetUpdate = {}));
var UpdateRegexMatchSetRequest;
(function (UpdateRegexMatchSetRequest) {
    /**
     * @internal
     */
    UpdateRegexMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRegexMatchSetRequest = exports.UpdateRegexMatchSetRequest || (exports.UpdateRegexMatchSetRequest = {}));
var UpdateRegexMatchSetResponse;
(function (UpdateRegexMatchSetResponse) {
    /**
     * @internal
     */
    UpdateRegexMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRegexMatchSetResponse = exports.UpdateRegexMatchSetResponse || (exports.UpdateRegexMatchSetResponse = {}));
var RegexPatternSetUpdate;
(function (RegexPatternSetUpdate) {
    /**
     * @internal
     */
    RegexPatternSetUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RegexPatternSetUpdate = exports.RegexPatternSetUpdate || (exports.RegexPatternSetUpdate = {}));
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
var WAFInvalidRegexPatternException;
(function (WAFInvalidRegexPatternException) {
    /**
     * @internal
     */
    WAFInvalidRegexPatternException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFInvalidRegexPatternException = exports.WAFInvalidRegexPatternException || (exports.WAFInvalidRegexPatternException = {}));
var UpdateRuleRequest;
(function (UpdateRuleRequest) {
    /**
     * @internal
     */
    UpdateRuleRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuleRequest = exports.UpdateRuleRequest || (exports.UpdateRuleRequest = {}));
var UpdateRuleResponse;
(function (UpdateRuleResponse) {
    /**
     * @internal
     */
    UpdateRuleResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuleResponse = exports.UpdateRuleResponse || (exports.UpdateRuleResponse = {}));
var RuleGroupUpdate;
(function (RuleGroupUpdate) {
    /**
     * @internal
     */
    RuleGroupUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RuleGroupUpdate = exports.RuleGroupUpdate || (exports.RuleGroupUpdate = {}));
var UpdateRuleGroupRequest;
(function (UpdateRuleGroupRequest) {
    /**
     * @internal
     */
    UpdateRuleGroupRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuleGroupRequest = exports.UpdateRuleGroupRequest || (exports.UpdateRuleGroupRequest = {}));
var UpdateRuleGroupResponse;
(function (UpdateRuleGroupResponse) {
    /**
     * @internal
     */
    UpdateRuleGroupResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateRuleGroupResponse = exports.UpdateRuleGroupResponse || (exports.UpdateRuleGroupResponse = {}));
var SizeConstraintSetUpdate;
(function (SizeConstraintSetUpdate) {
    /**
     * @internal
     */
    SizeConstraintSetUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SizeConstraintSetUpdate = exports.SizeConstraintSetUpdate || (exports.SizeConstraintSetUpdate = {}));
var UpdateSizeConstraintSetRequest;
(function (UpdateSizeConstraintSetRequest) {
    /**
     * @internal
     */
    UpdateSizeConstraintSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSizeConstraintSetRequest = exports.UpdateSizeConstraintSetRequest || (exports.UpdateSizeConstraintSetRequest = {}));
var UpdateSizeConstraintSetResponse;
(function (UpdateSizeConstraintSetResponse) {
    /**
     * @internal
     */
    UpdateSizeConstraintSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSizeConstraintSetResponse = exports.UpdateSizeConstraintSetResponse || (exports.UpdateSizeConstraintSetResponse = {}));
var SqlInjectionMatchSetUpdate;
(function (SqlInjectionMatchSetUpdate) {
    /**
     * @internal
     */
    SqlInjectionMatchSetUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SqlInjectionMatchSetUpdate = exports.SqlInjectionMatchSetUpdate || (exports.SqlInjectionMatchSetUpdate = {}));
var UpdateSqlInjectionMatchSetRequest;
(function (UpdateSqlInjectionMatchSetRequest) {
    /**
     * @internal
     */
    UpdateSqlInjectionMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSqlInjectionMatchSetRequest = exports.UpdateSqlInjectionMatchSetRequest || (exports.UpdateSqlInjectionMatchSetRequest = {}));
var UpdateSqlInjectionMatchSetResponse;
(function (UpdateSqlInjectionMatchSetResponse) {
    /**
     * @internal
     */
    UpdateSqlInjectionMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateSqlInjectionMatchSetResponse = exports.UpdateSqlInjectionMatchSetResponse || (exports.UpdateSqlInjectionMatchSetResponse = {}));
var WebACLUpdate;
(function (WebACLUpdate) {
    /**
     * @internal
     */
    WebACLUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WebACLUpdate = exports.WebACLUpdate || (exports.WebACLUpdate = {}));
var UpdateWebACLRequest;
(function (UpdateWebACLRequest) {
    /**
     * @internal
     */
    UpdateWebACLRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWebACLRequest = exports.UpdateWebACLRequest || (exports.UpdateWebACLRequest = {}));
var UpdateWebACLResponse;
(function (UpdateWebACLResponse) {
    /**
     * @internal
     */
    UpdateWebACLResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateWebACLResponse = exports.UpdateWebACLResponse || (exports.UpdateWebACLResponse = {}));
var WAFSubscriptionNotFoundException;
(function (WAFSubscriptionNotFoundException) {
    /**
     * @internal
     */
    WAFSubscriptionNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(WAFSubscriptionNotFoundException = exports.WAFSubscriptionNotFoundException || (exports.WAFSubscriptionNotFoundException = {}));
var XssMatchSetUpdate;
(function (XssMatchSetUpdate) {
    /**
     * @internal
     */
    XssMatchSetUpdate.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(XssMatchSetUpdate = exports.XssMatchSetUpdate || (exports.XssMatchSetUpdate = {}));
var UpdateXssMatchSetRequest;
(function (UpdateXssMatchSetRequest) {
    /**
     * @internal
     */
    UpdateXssMatchSetRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateXssMatchSetRequest = exports.UpdateXssMatchSetRequest || (exports.UpdateXssMatchSetRequest = {}));
var UpdateXssMatchSetResponse;
(function (UpdateXssMatchSetResponse) {
    /**
     * @internal
     */
    UpdateXssMatchSetResponse.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UpdateXssMatchSetResponse = exports.UpdateXssMatchSetResponse || (exports.UpdateXssMatchSetResponse = {}));
//# sourceMappingURL=models_0.js.map