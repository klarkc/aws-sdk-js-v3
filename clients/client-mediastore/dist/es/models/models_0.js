import { __assign } from "tslib";
export var MethodName;
(function (MethodName) {
    MethodName["DELETE"] = "DELETE";
    MethodName["GET"] = "GET";
    MethodName["HEAD"] = "HEAD";
    MethodName["PUT"] = "PUT";
})(MethodName || (MethodName = {}));
export var ContainerStatus;
(function (ContainerStatus) {
    ContainerStatus["ACTIVE"] = "ACTIVE";
    ContainerStatus["CREATING"] = "CREATING";
    ContainerStatus["DELETING"] = "DELETING";
})(ContainerStatus || (ContainerStatus = {}));
export var Container;
(function (Container) {
    /**
     * @internal
     */
    Container.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Container || (Container = {}));
export var ContainerInUseException;
(function (ContainerInUseException) {
    /**
     * @internal
     */
    ContainerInUseException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerInUseException || (ContainerInUseException = {}));
export var ContainerLevelMetrics;
(function (ContainerLevelMetrics) {
    ContainerLevelMetrics["DISABLED"] = "DISABLED";
    ContainerLevelMetrics["ENABLED"] = "ENABLED";
})(ContainerLevelMetrics || (ContainerLevelMetrics = {}));
export var ContainerNotFoundException;
(function (ContainerNotFoundException) {
    /**
     * @internal
     */
    ContainerNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ContainerNotFoundException || (ContainerNotFoundException = {}));
export var CorsRule;
(function (CorsRule) {
    /**
     * @internal
     */
    CorsRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CorsRule || (CorsRule = {}));
export var CorsPolicyNotFoundException;
(function (CorsPolicyNotFoundException) {
    /**
     * @internal
     */
    CorsPolicyNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CorsPolicyNotFoundException || (CorsPolicyNotFoundException = {}));
export var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(Tag || (Tag = {}));
export var CreateContainerInput;
(function (CreateContainerInput) {
    /**
     * @internal
     */
    CreateContainerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContainerInput || (CreateContainerInput = {}));
export var CreateContainerOutput;
(function (CreateContainerOutput) {
    /**
     * @internal
     */
    CreateContainerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(CreateContainerOutput || (CreateContainerOutput = {}));
export var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(InternalServerError || (InternalServerError = {}));
export var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(LimitExceededException || (LimitExceededException = {}));
export var DeleteContainerInput;
(function (DeleteContainerInput) {
    /**
     * @internal
     */
    DeleteContainerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContainerInput || (DeleteContainerInput = {}));
export var DeleteContainerOutput;
(function (DeleteContainerOutput) {
    /**
     * @internal
     */
    DeleteContainerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContainerOutput || (DeleteContainerOutput = {}));
export var DeleteContainerPolicyInput;
(function (DeleteContainerPolicyInput) {
    /**
     * @internal
     */
    DeleteContainerPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContainerPolicyInput || (DeleteContainerPolicyInput = {}));
export var DeleteContainerPolicyOutput;
(function (DeleteContainerPolicyOutput) {
    /**
     * @internal
     */
    DeleteContainerPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteContainerPolicyOutput || (DeleteContainerPolicyOutput = {}));
export var PolicyNotFoundException;
(function (PolicyNotFoundException) {
    /**
     * @internal
     */
    PolicyNotFoundException.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PolicyNotFoundException || (PolicyNotFoundException = {}));
export var DeleteCorsPolicyInput;
(function (DeleteCorsPolicyInput) {
    /**
     * @internal
     */
    DeleteCorsPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCorsPolicyInput || (DeleteCorsPolicyInput = {}));
export var DeleteCorsPolicyOutput;
(function (DeleteCorsPolicyOutput) {
    /**
     * @internal
     */
    DeleteCorsPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteCorsPolicyOutput || (DeleteCorsPolicyOutput = {}));
export var DeleteLifecyclePolicyInput;
(function (DeleteLifecyclePolicyInput) {
    /**
     * @internal
     */
    DeleteLifecyclePolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLifecyclePolicyInput || (DeleteLifecyclePolicyInput = {}));
export var DeleteLifecyclePolicyOutput;
(function (DeleteLifecyclePolicyOutput) {
    /**
     * @internal
     */
    DeleteLifecyclePolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteLifecyclePolicyOutput || (DeleteLifecyclePolicyOutput = {}));
export var DeleteMetricPolicyInput;
(function (DeleteMetricPolicyInput) {
    /**
     * @internal
     */
    DeleteMetricPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMetricPolicyInput || (DeleteMetricPolicyInput = {}));
export var DeleteMetricPolicyOutput;
(function (DeleteMetricPolicyOutput) {
    /**
     * @internal
     */
    DeleteMetricPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DeleteMetricPolicyOutput || (DeleteMetricPolicyOutput = {}));
export var DescribeContainerInput;
(function (DescribeContainerInput) {
    /**
     * @internal
     */
    DescribeContainerInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeContainerInput || (DescribeContainerInput = {}));
export var DescribeContainerOutput;
(function (DescribeContainerOutput) {
    /**
     * @internal
     */
    DescribeContainerOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(DescribeContainerOutput || (DescribeContainerOutput = {}));
export var GetContainerPolicyInput;
(function (GetContainerPolicyInput) {
    /**
     * @internal
     */
    GetContainerPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerPolicyInput || (GetContainerPolicyInput = {}));
export var GetContainerPolicyOutput;
(function (GetContainerPolicyOutput) {
    /**
     * @internal
     */
    GetContainerPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetContainerPolicyOutput || (GetContainerPolicyOutput = {}));
export var GetCorsPolicyInput;
(function (GetCorsPolicyInput) {
    /**
     * @internal
     */
    GetCorsPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCorsPolicyInput || (GetCorsPolicyInput = {}));
export var GetCorsPolicyOutput;
(function (GetCorsPolicyOutput) {
    /**
     * @internal
     */
    GetCorsPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetCorsPolicyOutput || (GetCorsPolicyOutput = {}));
export var GetLifecyclePolicyInput;
(function (GetLifecyclePolicyInput) {
    /**
     * @internal
     */
    GetLifecyclePolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLifecyclePolicyInput || (GetLifecyclePolicyInput = {}));
export var GetLifecyclePolicyOutput;
(function (GetLifecyclePolicyOutput) {
    /**
     * @internal
     */
    GetLifecyclePolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetLifecyclePolicyOutput || (GetLifecyclePolicyOutput = {}));
export var GetMetricPolicyInput;
(function (GetMetricPolicyInput) {
    /**
     * @internal
     */
    GetMetricPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMetricPolicyInput || (GetMetricPolicyInput = {}));
export var MetricPolicyRule;
(function (MetricPolicyRule) {
    /**
     * @internal
     */
    MetricPolicyRule.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricPolicyRule || (MetricPolicyRule = {}));
export var MetricPolicy;
(function (MetricPolicy) {
    /**
     * @internal
     */
    MetricPolicy.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(MetricPolicy || (MetricPolicy = {}));
export var GetMetricPolicyOutput;
(function (GetMetricPolicyOutput) {
    /**
     * @internal
     */
    GetMetricPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(GetMetricPolicyOutput || (GetMetricPolicyOutput = {}));
export var ListContainersInput;
(function (ListContainersInput) {
    /**
     * @internal
     */
    ListContainersInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContainersInput || (ListContainersInput = {}));
export var ListContainersOutput;
(function (ListContainersOutput) {
    /**
     * @internal
     */
    ListContainersOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListContainersOutput || (ListContainersOutput = {}));
export var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceInput || (ListTagsForResourceInput = {}));
export var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(ListTagsForResourceOutput || (ListTagsForResourceOutput = {}));
export var PutContainerPolicyInput;
(function (PutContainerPolicyInput) {
    /**
     * @internal
     */
    PutContainerPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutContainerPolicyInput || (PutContainerPolicyInput = {}));
export var PutContainerPolicyOutput;
(function (PutContainerPolicyOutput) {
    /**
     * @internal
     */
    PutContainerPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutContainerPolicyOutput || (PutContainerPolicyOutput = {}));
export var PutCorsPolicyInput;
(function (PutCorsPolicyInput) {
    /**
     * @internal
     */
    PutCorsPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutCorsPolicyInput || (PutCorsPolicyInput = {}));
export var PutCorsPolicyOutput;
(function (PutCorsPolicyOutput) {
    /**
     * @internal
     */
    PutCorsPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutCorsPolicyOutput || (PutCorsPolicyOutput = {}));
export var PutLifecyclePolicyInput;
(function (PutLifecyclePolicyInput) {
    /**
     * @internal
     */
    PutLifecyclePolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutLifecyclePolicyInput || (PutLifecyclePolicyInput = {}));
export var PutLifecyclePolicyOutput;
(function (PutLifecyclePolicyOutput) {
    /**
     * @internal
     */
    PutLifecyclePolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutLifecyclePolicyOutput || (PutLifecyclePolicyOutput = {}));
export var PutMetricPolicyInput;
(function (PutMetricPolicyInput) {
    /**
     * @internal
     */
    PutMetricPolicyInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutMetricPolicyInput || (PutMetricPolicyInput = {}));
export var PutMetricPolicyOutput;
(function (PutMetricPolicyOutput) {
    /**
     * @internal
     */
    PutMetricPolicyOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(PutMetricPolicyOutput || (PutMetricPolicyOutput = {}));
export var StartAccessLoggingInput;
(function (StartAccessLoggingInput) {
    /**
     * @internal
     */
    StartAccessLoggingInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAccessLoggingInput || (StartAccessLoggingInput = {}));
export var StartAccessLoggingOutput;
(function (StartAccessLoggingOutput) {
    /**
     * @internal
     */
    StartAccessLoggingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StartAccessLoggingOutput || (StartAccessLoggingOutput = {}));
export var StopAccessLoggingInput;
(function (StopAccessLoggingInput) {
    /**
     * @internal
     */
    StopAccessLoggingInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopAccessLoggingInput || (StopAccessLoggingInput = {}));
export var StopAccessLoggingOutput;
(function (StopAccessLoggingOutput) {
    /**
     * @internal
     */
    StopAccessLoggingOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(StopAccessLoggingOutput || (StopAccessLoggingOutput = {}));
export var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceInput || (TagResourceInput = {}));
export var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(TagResourceOutput || (TagResourceOutput = {}));
export var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceInput || (UntagResourceInput = {}));
export var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = function (obj) { return (__assign({}, obj)); };
})(UntagResourceOutput || (UntagResourceOutput = {}));
//# sourceMappingURL=models_0.js.map