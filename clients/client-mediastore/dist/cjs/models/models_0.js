"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StartAccessLoggingOutput = exports.StartAccessLoggingInput = exports.PutMetricPolicyOutput = exports.PutMetricPolicyInput = exports.PutLifecyclePolicyOutput = exports.PutLifecyclePolicyInput = exports.PutCorsPolicyOutput = exports.PutCorsPolicyInput = exports.PutContainerPolicyOutput = exports.PutContainerPolicyInput = exports.ListTagsForResourceOutput = exports.ListTagsForResourceInput = exports.ListContainersOutput = exports.ListContainersInput = exports.GetMetricPolicyOutput = exports.MetricPolicy = exports.MetricPolicyRule = exports.GetMetricPolicyInput = exports.GetLifecyclePolicyOutput = exports.GetLifecyclePolicyInput = exports.GetCorsPolicyOutput = exports.GetCorsPolicyInput = exports.GetContainerPolicyOutput = exports.GetContainerPolicyInput = exports.DescribeContainerOutput = exports.DescribeContainerInput = exports.DeleteMetricPolicyOutput = exports.DeleteMetricPolicyInput = exports.DeleteLifecyclePolicyOutput = exports.DeleteLifecyclePolicyInput = exports.DeleteCorsPolicyOutput = exports.DeleteCorsPolicyInput = exports.PolicyNotFoundException = exports.DeleteContainerPolicyOutput = exports.DeleteContainerPolicyInput = exports.DeleteContainerOutput = exports.DeleteContainerInput = exports.LimitExceededException = exports.InternalServerError = exports.CreateContainerOutput = exports.CreateContainerInput = exports.Tag = exports.CorsPolicyNotFoundException = exports.CorsRule = exports.ContainerNotFoundException = exports.ContainerLevelMetrics = exports.ContainerInUseException = exports.Container = exports.ContainerStatus = exports.MethodName = void 0;
exports.UntagResourceOutput = exports.UntagResourceInput = exports.TagResourceOutput = exports.TagResourceInput = exports.StopAccessLoggingOutput = exports.StopAccessLoggingInput = void 0;
var MethodName;
(function (MethodName) {
    MethodName["DELETE"] = "DELETE";
    MethodName["GET"] = "GET";
    MethodName["HEAD"] = "HEAD";
    MethodName["PUT"] = "PUT";
})(MethodName = exports.MethodName || (exports.MethodName = {}));
var ContainerStatus;
(function (ContainerStatus) {
    ContainerStatus["ACTIVE"] = "ACTIVE";
    ContainerStatus["CREATING"] = "CREATING";
    ContainerStatus["DELETING"] = "DELETING";
})(ContainerStatus = exports.ContainerStatus || (exports.ContainerStatus = {}));
var Container;
(function (Container) {
    /**
     * @internal
     */
    Container.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Container = exports.Container || (exports.Container = {}));
var ContainerInUseException;
(function (ContainerInUseException) {
    /**
     * @internal
     */
    ContainerInUseException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerInUseException = exports.ContainerInUseException || (exports.ContainerInUseException = {}));
var ContainerLevelMetrics;
(function (ContainerLevelMetrics) {
    ContainerLevelMetrics["DISABLED"] = "DISABLED";
    ContainerLevelMetrics["ENABLED"] = "ENABLED";
})(ContainerLevelMetrics = exports.ContainerLevelMetrics || (exports.ContainerLevelMetrics = {}));
var ContainerNotFoundException;
(function (ContainerNotFoundException) {
    /**
     * @internal
     */
    ContainerNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ContainerNotFoundException = exports.ContainerNotFoundException || (exports.ContainerNotFoundException = {}));
var CorsRule;
(function (CorsRule) {
    /**
     * @internal
     */
    CorsRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CorsRule = exports.CorsRule || (exports.CorsRule = {}));
var CorsPolicyNotFoundException;
(function (CorsPolicyNotFoundException) {
    /**
     * @internal
     */
    CorsPolicyNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CorsPolicyNotFoundException = exports.CorsPolicyNotFoundException || (exports.CorsPolicyNotFoundException = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var CreateContainerInput;
(function (CreateContainerInput) {
    /**
     * @internal
     */
    CreateContainerInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContainerInput = exports.CreateContainerInput || (exports.CreateContainerInput = {}));
var CreateContainerOutput;
(function (CreateContainerOutput) {
    /**
     * @internal
     */
    CreateContainerOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreateContainerOutput = exports.CreateContainerOutput || (exports.CreateContainerOutput = {}));
var InternalServerError;
(function (InternalServerError) {
    /**
     * @internal
     */
    InternalServerError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServerError = exports.InternalServerError || (exports.InternalServerError = {}));
var LimitExceededException;
(function (LimitExceededException) {
    /**
     * @internal
     */
    LimitExceededException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {}));
var DeleteContainerInput;
(function (DeleteContainerInput) {
    /**
     * @internal
     */
    DeleteContainerInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContainerInput = exports.DeleteContainerInput || (exports.DeleteContainerInput = {}));
var DeleteContainerOutput;
(function (DeleteContainerOutput) {
    /**
     * @internal
     */
    DeleteContainerOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContainerOutput = exports.DeleteContainerOutput || (exports.DeleteContainerOutput = {}));
var DeleteContainerPolicyInput;
(function (DeleteContainerPolicyInput) {
    /**
     * @internal
     */
    DeleteContainerPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContainerPolicyInput = exports.DeleteContainerPolicyInput || (exports.DeleteContainerPolicyInput = {}));
var DeleteContainerPolicyOutput;
(function (DeleteContainerPolicyOutput) {
    /**
     * @internal
     */
    DeleteContainerPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteContainerPolicyOutput = exports.DeleteContainerPolicyOutput || (exports.DeleteContainerPolicyOutput = {}));
var PolicyNotFoundException;
(function (PolicyNotFoundException) {
    /**
     * @internal
     */
    PolicyNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PolicyNotFoundException = exports.PolicyNotFoundException || (exports.PolicyNotFoundException = {}));
var DeleteCorsPolicyInput;
(function (DeleteCorsPolicyInput) {
    /**
     * @internal
     */
    DeleteCorsPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCorsPolicyInput = exports.DeleteCorsPolicyInput || (exports.DeleteCorsPolicyInput = {}));
var DeleteCorsPolicyOutput;
(function (DeleteCorsPolicyOutput) {
    /**
     * @internal
     */
    DeleteCorsPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteCorsPolicyOutput = exports.DeleteCorsPolicyOutput || (exports.DeleteCorsPolicyOutput = {}));
var DeleteLifecyclePolicyInput;
(function (DeleteLifecyclePolicyInput) {
    /**
     * @internal
     */
    DeleteLifecyclePolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLifecyclePolicyInput = exports.DeleteLifecyclePolicyInput || (exports.DeleteLifecyclePolicyInput = {}));
var DeleteLifecyclePolicyOutput;
(function (DeleteLifecyclePolicyOutput) {
    /**
     * @internal
     */
    DeleteLifecyclePolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteLifecyclePolicyOutput = exports.DeleteLifecyclePolicyOutput || (exports.DeleteLifecyclePolicyOutput = {}));
var DeleteMetricPolicyInput;
(function (DeleteMetricPolicyInput) {
    /**
     * @internal
     */
    DeleteMetricPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMetricPolicyInput = exports.DeleteMetricPolicyInput || (exports.DeleteMetricPolicyInput = {}));
var DeleteMetricPolicyOutput;
(function (DeleteMetricPolicyOutput) {
    /**
     * @internal
     */
    DeleteMetricPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeleteMetricPolicyOutput = exports.DeleteMetricPolicyOutput || (exports.DeleteMetricPolicyOutput = {}));
var DescribeContainerInput;
(function (DescribeContainerInput) {
    /**
     * @internal
     */
    DescribeContainerInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContainerInput = exports.DescribeContainerInput || (exports.DescribeContainerInput = {}));
var DescribeContainerOutput;
(function (DescribeContainerOutput) {
    /**
     * @internal
     */
    DescribeContainerOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeContainerOutput = exports.DescribeContainerOutput || (exports.DescribeContainerOutput = {}));
var GetContainerPolicyInput;
(function (GetContainerPolicyInput) {
    /**
     * @internal
     */
    GetContainerPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerPolicyInput = exports.GetContainerPolicyInput || (exports.GetContainerPolicyInput = {}));
var GetContainerPolicyOutput;
(function (GetContainerPolicyOutput) {
    /**
     * @internal
     */
    GetContainerPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetContainerPolicyOutput = exports.GetContainerPolicyOutput || (exports.GetContainerPolicyOutput = {}));
var GetCorsPolicyInput;
(function (GetCorsPolicyInput) {
    /**
     * @internal
     */
    GetCorsPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCorsPolicyInput = exports.GetCorsPolicyInput || (exports.GetCorsPolicyInput = {}));
var GetCorsPolicyOutput;
(function (GetCorsPolicyOutput) {
    /**
     * @internal
     */
    GetCorsPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetCorsPolicyOutput = exports.GetCorsPolicyOutput || (exports.GetCorsPolicyOutput = {}));
var GetLifecyclePolicyInput;
(function (GetLifecyclePolicyInput) {
    /**
     * @internal
     */
    GetLifecyclePolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLifecyclePolicyInput = exports.GetLifecyclePolicyInput || (exports.GetLifecyclePolicyInput = {}));
var GetLifecyclePolicyOutput;
(function (GetLifecyclePolicyOutput) {
    /**
     * @internal
     */
    GetLifecyclePolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetLifecyclePolicyOutput = exports.GetLifecyclePolicyOutput || (exports.GetLifecyclePolicyOutput = {}));
var GetMetricPolicyInput;
(function (GetMetricPolicyInput) {
    /**
     * @internal
     */
    GetMetricPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricPolicyInput = exports.GetMetricPolicyInput || (exports.GetMetricPolicyInput = {}));
var MetricPolicyRule;
(function (MetricPolicyRule) {
    /**
     * @internal
     */
    MetricPolicyRule.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricPolicyRule = exports.MetricPolicyRule || (exports.MetricPolicyRule = {}));
var MetricPolicy;
(function (MetricPolicy) {
    /**
     * @internal
     */
    MetricPolicy.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(MetricPolicy = exports.MetricPolicy || (exports.MetricPolicy = {}));
var GetMetricPolicyOutput;
(function (GetMetricPolicyOutput) {
    /**
     * @internal
     */
    GetMetricPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetMetricPolicyOutput = exports.GetMetricPolicyOutput || (exports.GetMetricPolicyOutput = {}));
var ListContainersInput;
(function (ListContainersInput) {
    /**
     * @internal
     */
    ListContainersInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContainersInput = exports.ListContainersInput || (exports.ListContainersInput = {}));
var ListContainersOutput;
(function (ListContainersOutput) {
    /**
     * @internal
     */
    ListContainersOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListContainersOutput = exports.ListContainersOutput || (exports.ListContainersOutput = {}));
var ListTagsForResourceInput;
(function (ListTagsForResourceInput) {
    /**
     * @internal
     */
    ListTagsForResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceInput = exports.ListTagsForResourceInput || (exports.ListTagsForResourceInput = {}));
var ListTagsForResourceOutput;
(function (ListTagsForResourceOutput) {
    /**
     * @internal
     */
    ListTagsForResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListTagsForResourceOutput = exports.ListTagsForResourceOutput || (exports.ListTagsForResourceOutput = {}));
var PutContainerPolicyInput;
(function (PutContainerPolicyInput) {
    /**
     * @internal
     */
    PutContainerPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutContainerPolicyInput = exports.PutContainerPolicyInput || (exports.PutContainerPolicyInput = {}));
var PutContainerPolicyOutput;
(function (PutContainerPolicyOutput) {
    /**
     * @internal
     */
    PutContainerPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutContainerPolicyOutput = exports.PutContainerPolicyOutput || (exports.PutContainerPolicyOutput = {}));
var PutCorsPolicyInput;
(function (PutCorsPolicyInput) {
    /**
     * @internal
     */
    PutCorsPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutCorsPolicyInput = exports.PutCorsPolicyInput || (exports.PutCorsPolicyInput = {}));
var PutCorsPolicyOutput;
(function (PutCorsPolicyOutput) {
    /**
     * @internal
     */
    PutCorsPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutCorsPolicyOutput = exports.PutCorsPolicyOutput || (exports.PutCorsPolicyOutput = {}));
var PutLifecyclePolicyInput;
(function (PutLifecyclePolicyInput) {
    /**
     * @internal
     */
    PutLifecyclePolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLifecyclePolicyInput = exports.PutLifecyclePolicyInput || (exports.PutLifecyclePolicyInput = {}));
var PutLifecyclePolicyOutput;
(function (PutLifecyclePolicyOutput) {
    /**
     * @internal
     */
    PutLifecyclePolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutLifecyclePolicyOutput = exports.PutLifecyclePolicyOutput || (exports.PutLifecyclePolicyOutput = {}));
var PutMetricPolicyInput;
(function (PutMetricPolicyInput) {
    /**
     * @internal
     */
    PutMetricPolicyInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutMetricPolicyInput = exports.PutMetricPolicyInput || (exports.PutMetricPolicyInput = {}));
var PutMetricPolicyOutput;
(function (PutMetricPolicyOutput) {
    /**
     * @internal
     */
    PutMetricPolicyOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutMetricPolicyOutput = exports.PutMetricPolicyOutput || (exports.PutMetricPolicyOutput = {}));
var StartAccessLoggingInput;
(function (StartAccessLoggingInput) {
    /**
     * @internal
     */
    StartAccessLoggingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAccessLoggingInput = exports.StartAccessLoggingInput || (exports.StartAccessLoggingInput = {}));
var StartAccessLoggingOutput;
(function (StartAccessLoggingOutput) {
    /**
     * @internal
     */
    StartAccessLoggingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StartAccessLoggingOutput = exports.StartAccessLoggingOutput || (exports.StartAccessLoggingOutput = {}));
var StopAccessLoggingInput;
(function (StopAccessLoggingInput) {
    /**
     * @internal
     */
    StopAccessLoggingInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopAccessLoggingInput = exports.StopAccessLoggingInput || (exports.StopAccessLoggingInput = {}));
var StopAccessLoggingOutput;
(function (StopAccessLoggingOutput) {
    /**
     * @internal
     */
    StopAccessLoggingOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(StopAccessLoggingOutput = exports.StopAccessLoggingOutput || (exports.StopAccessLoggingOutput = {}));
var TagResourceInput;
(function (TagResourceInput) {
    /**
     * @internal
     */
    TagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceInput = exports.TagResourceInput || (exports.TagResourceInput = {}));
var TagResourceOutput;
(function (TagResourceOutput) {
    /**
     * @internal
     */
    TagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TagResourceOutput = exports.TagResourceOutput || (exports.TagResourceOutput = {}));
var UntagResourceInput;
(function (UntagResourceInput) {
    /**
     * @internal
     */
    UntagResourceInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceInput = exports.UntagResourceInput || (exports.UntagResourceInput = {}));
var UntagResourceOutput;
(function (UntagResourceOutput) {
    /**
     * @internal
     */
    UntagResourceOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(UntagResourceOutput = exports.UntagResourceOutput || (exports.UntagResourceOutput = {}));
//# sourceMappingURL=models_0.js.map