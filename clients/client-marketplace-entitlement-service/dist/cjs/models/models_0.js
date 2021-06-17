"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThrottlingException = exports.InvalidParameterException = exports.InternalServiceErrorException = exports.GetEntitlementsResult = exports.Entitlement = exports.EntitlementValue = exports.GetEntitlementsRequest = exports.GetEntitlementFilterName = void 0;
var GetEntitlementFilterName;
(function (GetEntitlementFilterName) {
    GetEntitlementFilterName["CUSTOMER_IDENTIFIER"] = "CUSTOMER_IDENTIFIER";
    GetEntitlementFilterName["DIMENSION"] = "DIMENSION";
})(GetEntitlementFilterName = exports.GetEntitlementFilterName || (exports.GetEntitlementFilterName = {}));
var GetEntitlementsRequest;
(function (GetEntitlementsRequest) {
    /**
     * @internal
     */
    GetEntitlementsRequest.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetEntitlementsRequest = exports.GetEntitlementsRequest || (exports.GetEntitlementsRequest = {}));
var EntitlementValue;
(function (EntitlementValue) {
    EntitlementValue.visit = (value, visitor) => {
        if (value.IntegerValue !== undefined)
            return visitor.IntegerValue(value.IntegerValue);
        if (value.DoubleValue !== undefined)
            return visitor.DoubleValue(value.DoubleValue);
        if (value.BooleanValue !== undefined)
            return visitor.BooleanValue(value.BooleanValue);
        if (value.StringValue !== undefined)
            return visitor.StringValue(value.StringValue);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
    /**
     * @internal
     */
    EntitlementValue.filterSensitiveLog = (obj) => {
        if (obj.IntegerValue !== undefined)
            return { IntegerValue: obj.IntegerValue };
        if (obj.DoubleValue !== undefined)
            return { DoubleValue: obj.DoubleValue };
        if (obj.BooleanValue !== undefined)
            return { BooleanValue: obj.BooleanValue };
        if (obj.StringValue !== undefined)
            return { StringValue: obj.StringValue };
        if (obj.$unknown !== undefined)
            return { [obj.$unknown[0]]: "UNKNOWN" };
    };
})(EntitlementValue = exports.EntitlementValue || (exports.EntitlementValue = {}));
var Entitlement;
(function (Entitlement) {
    /**
     * @internal
     */
    Entitlement.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Value && { Value: EntitlementValue.filterSensitiveLog(obj.Value) }),
    });
})(Entitlement = exports.Entitlement || (exports.Entitlement = {}));
var GetEntitlementsResult;
(function (GetEntitlementsResult) {
    /**
     * @internal
     */
    GetEntitlementsResult.filterSensitiveLog = (obj) => ({
        ...obj,
        ...(obj.Entitlements && { Entitlements: obj.Entitlements.map((item) => Entitlement.filterSensitiveLog(item)) }),
    });
})(GetEntitlementsResult = exports.GetEntitlementsResult || (exports.GetEntitlementsResult = {}));
var InternalServiceErrorException;
(function (InternalServiceErrorException) {
    /**
     * @internal
     */
    InternalServiceErrorException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceErrorException = exports.InternalServiceErrorException || (exports.InternalServiceErrorException = {}));
var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidParameterException = exports.InvalidParameterException || (exports.InvalidParameterException = {}));
var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ThrottlingException = exports.ThrottlingException || (exports.ThrottlingException = {}));
//# sourceMappingURL=models_0.js.map