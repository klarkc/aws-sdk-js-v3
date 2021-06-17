import { __assign } from "tslib";
export var GetEntitlementFilterName;
(function (GetEntitlementFilterName) {
    GetEntitlementFilterName["CUSTOMER_IDENTIFIER"] = "CUSTOMER_IDENTIFIER";
    GetEntitlementFilterName["DIMENSION"] = "DIMENSION";
})(GetEntitlementFilterName || (GetEntitlementFilterName = {}));
export var GetEntitlementsRequest;
(function (GetEntitlementsRequest) {
    /**
     * @internal
     */
    GetEntitlementsRequest.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetEntitlementsRequest || (GetEntitlementsRequest = {}));
export var EntitlementValue;
(function (EntitlementValue) {
    EntitlementValue.visit = function (value, visitor) {
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
    EntitlementValue.filterSensitiveLog = function (obj) {
        var _a;
        if (obj.IntegerValue !== undefined)
            return { IntegerValue: obj.IntegerValue };
        if (obj.DoubleValue !== undefined)
            return { DoubleValue: obj.DoubleValue };
        if (obj.BooleanValue !== undefined)
            return { BooleanValue: obj.BooleanValue };
        if (obj.StringValue !== undefined)
            return { StringValue: obj.StringValue };
        if (obj.$unknown !== undefined)
            return _a = {}, _a[obj.$unknown[0]] = "UNKNOWN", _a;
    };
})(EntitlementValue || (EntitlementValue = {}));
export var Entitlement;
(function (Entitlement) {
    /**
     * @internal
     */
    Entitlement.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Value && { Value: EntitlementValue.filterSensitiveLog(obj.Value) }))); };
})(Entitlement || (Entitlement = {}));
export var GetEntitlementsResult;
(function (GetEntitlementsResult) {
    /**
     * @internal
     */
    GetEntitlementsResult.filterSensitiveLog = function (obj) { return (__assign(__assign({}, obj), (obj.Entitlements && { Entitlements: obj.Entitlements.map(function (item) { return Entitlement.filterSensitiveLog(item); }) }))); };
})(GetEntitlementsResult || (GetEntitlementsResult = {}));
export var InternalServiceErrorException;
(function (InternalServiceErrorException) {
    /**
     * @internal
     */
    InternalServiceErrorException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServiceErrorException || (InternalServiceErrorException = {}));
export var InvalidParameterException;
(function (InvalidParameterException) {
    /**
     * @internal
     */
    InvalidParameterException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InvalidParameterException || (InvalidParameterException = {}));
export var ThrottlingException;
(function (ThrottlingException) {
    /**
     * @internal
     */
    ThrottlingException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ThrottlingException || (ThrottlingException = {}));
//# sourceMappingURL=models_0.js.map