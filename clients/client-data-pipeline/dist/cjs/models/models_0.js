"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReportTaskProgressOutput = exports.ReportTaskProgressInput = exports.RemoveTagsOutput = exports.RemoveTagsInput = exports.QueryObjectsOutput = exports.QueryObjectsInput = exports.Query = exports.Selector = exports.Operator = exports.OperatorType = exports.PutPipelineDefinitionOutput = exports.ValidationWarning = exports.ValidationError = exports.PutPipelineDefinitionInput = exports.PollForTaskOutput = exports.TaskObject = exports.PollForTaskInput = exports.InstanceIdentity = exports.ListPipelinesOutput = exports.PipelineIdName = exports.ListPipelinesInput = exports.GetPipelineDefinitionOutput = exports.ParameterObject = exports.ParameterAttribute = exports.GetPipelineDefinitionInput = exports.TaskNotFoundException = exports.EvaluateExpressionOutput = exports.EvaluateExpressionInput = exports.DescribePipelinesOutput = exports.PipelineDescription = exports.DescribePipelinesInput = exports.DescribeObjectsOutput = exports.PipelineObject = exports.Field = exports.DescribeObjectsInput = exports.DeletePipelineInput = exports.DeactivatePipelineOutput = exports.DeactivatePipelineInput = exports.CreatePipelineOutput = exports.CreatePipelineInput = exports.AddTagsOutput = exports.AddTagsInput = exports.Tag = exports.PipelineNotFoundException = exports.PipelineDeletedException = exports.InvalidRequestException = exports.InternalServiceError = exports.ActivatePipelineOutput = exports.ActivatePipelineInput = exports.ParameterValue = void 0;
exports.ValidatePipelineDefinitionOutput = exports.ValidatePipelineDefinitionInput = exports.SetTaskStatusOutput = exports.SetTaskStatusInput = exports.TaskStatus = exports.SetStatusInput = exports.ReportTaskRunnerHeartbeatOutput = exports.ReportTaskRunnerHeartbeatInput = void 0;
var ParameterValue;
(function (ParameterValue) {
    /**
     * @internal
     */
    ParameterValue.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterValue = exports.ParameterValue || (exports.ParameterValue = {}));
var ActivatePipelineInput;
(function (ActivatePipelineInput) {
    /**
     * @internal
     */
    ActivatePipelineInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivatePipelineInput = exports.ActivatePipelineInput || (exports.ActivatePipelineInput = {}));
var ActivatePipelineOutput;
(function (ActivatePipelineOutput) {
    /**
     * @internal
     */
    ActivatePipelineOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ActivatePipelineOutput = exports.ActivatePipelineOutput || (exports.ActivatePipelineOutput = {}));
var InternalServiceError;
(function (InternalServiceError) {
    /**
     * @internal
     */
    InternalServiceError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InternalServiceError = exports.InternalServiceError || (exports.InternalServiceError = {}));
var InvalidRequestException;
(function (InvalidRequestException) {
    /**
     * @internal
     */
    InvalidRequestException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InvalidRequestException = exports.InvalidRequestException || (exports.InvalidRequestException = {}));
var PipelineDeletedException;
(function (PipelineDeletedException) {
    /**
     * @internal
     */
    PipelineDeletedException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineDeletedException = exports.PipelineDeletedException || (exports.PipelineDeletedException = {}));
var PipelineNotFoundException;
(function (PipelineNotFoundException) {
    /**
     * @internal
     */
    PipelineNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineNotFoundException = exports.PipelineNotFoundException || (exports.PipelineNotFoundException = {}));
var Tag;
(function (Tag) {
    /**
     * @internal
     */
    Tag.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Tag = exports.Tag || (exports.Tag = {}));
var AddTagsInput;
(function (AddTagsInput) {
    /**
     * @internal
     */
    AddTagsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsInput = exports.AddTagsInput || (exports.AddTagsInput = {}));
var AddTagsOutput;
(function (AddTagsOutput) {
    /**
     * @internal
     */
    AddTagsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(AddTagsOutput = exports.AddTagsOutput || (exports.AddTagsOutput = {}));
var CreatePipelineInput;
(function (CreatePipelineInput) {
    /**
     * @internal
     */
    CreatePipelineInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePipelineInput = exports.CreatePipelineInput || (exports.CreatePipelineInput = {}));
var CreatePipelineOutput;
(function (CreatePipelineOutput) {
    /**
     * @internal
     */
    CreatePipelineOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(CreatePipelineOutput = exports.CreatePipelineOutput || (exports.CreatePipelineOutput = {}));
var DeactivatePipelineInput;
(function (DeactivatePipelineInput) {
    /**
     * @internal
     */
    DeactivatePipelineInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeactivatePipelineInput = exports.DeactivatePipelineInput || (exports.DeactivatePipelineInput = {}));
var DeactivatePipelineOutput;
(function (DeactivatePipelineOutput) {
    /**
     * @internal
     */
    DeactivatePipelineOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeactivatePipelineOutput = exports.DeactivatePipelineOutput || (exports.DeactivatePipelineOutput = {}));
var DeletePipelineInput;
(function (DeletePipelineInput) {
    /**
     * @internal
     */
    DeletePipelineInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DeletePipelineInput = exports.DeletePipelineInput || (exports.DeletePipelineInput = {}));
var DescribeObjectsInput;
(function (DescribeObjectsInput) {
    /**
     * @internal
     */
    DescribeObjectsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeObjectsInput = exports.DescribeObjectsInput || (exports.DescribeObjectsInput = {}));
var Field;
(function (Field) {
    /**
     * @internal
     */
    Field.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Field = exports.Field || (exports.Field = {}));
var PipelineObject;
(function (PipelineObject) {
    /**
     * @internal
     */
    PipelineObject.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineObject = exports.PipelineObject || (exports.PipelineObject = {}));
var DescribeObjectsOutput;
(function (DescribeObjectsOutput) {
    /**
     * @internal
     */
    DescribeObjectsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribeObjectsOutput = exports.DescribeObjectsOutput || (exports.DescribeObjectsOutput = {}));
var DescribePipelinesInput;
(function (DescribePipelinesInput) {
    /**
     * @internal
     */
    DescribePipelinesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePipelinesInput = exports.DescribePipelinesInput || (exports.DescribePipelinesInput = {}));
var PipelineDescription;
(function (PipelineDescription) {
    /**
     * @internal
     */
    PipelineDescription.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineDescription = exports.PipelineDescription || (exports.PipelineDescription = {}));
var DescribePipelinesOutput;
(function (DescribePipelinesOutput) {
    /**
     * @internal
     */
    DescribePipelinesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(DescribePipelinesOutput = exports.DescribePipelinesOutput || (exports.DescribePipelinesOutput = {}));
var EvaluateExpressionInput;
(function (EvaluateExpressionInput) {
    /**
     * @internal
     */
    EvaluateExpressionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluateExpressionInput = exports.EvaluateExpressionInput || (exports.EvaluateExpressionInput = {}));
var EvaluateExpressionOutput;
(function (EvaluateExpressionOutput) {
    /**
     * @internal
     */
    EvaluateExpressionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(EvaluateExpressionOutput = exports.EvaluateExpressionOutput || (exports.EvaluateExpressionOutput = {}));
var TaskNotFoundException;
(function (TaskNotFoundException) {
    /**
     * @internal
     */
    TaskNotFoundException.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskNotFoundException = exports.TaskNotFoundException || (exports.TaskNotFoundException = {}));
var GetPipelineDefinitionInput;
(function (GetPipelineDefinitionInput) {
    /**
     * @internal
     */
    GetPipelineDefinitionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPipelineDefinitionInput = exports.GetPipelineDefinitionInput || (exports.GetPipelineDefinitionInput = {}));
var ParameterAttribute;
(function (ParameterAttribute) {
    /**
     * @internal
     */
    ParameterAttribute.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterAttribute = exports.ParameterAttribute || (exports.ParameterAttribute = {}));
var ParameterObject;
(function (ParameterObject) {
    /**
     * @internal
     */
    ParameterObject.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ParameterObject = exports.ParameterObject || (exports.ParameterObject = {}));
var GetPipelineDefinitionOutput;
(function (GetPipelineDefinitionOutput) {
    /**
     * @internal
     */
    GetPipelineDefinitionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(GetPipelineDefinitionOutput = exports.GetPipelineDefinitionOutput || (exports.GetPipelineDefinitionOutput = {}));
var ListPipelinesInput;
(function (ListPipelinesInput) {
    /**
     * @internal
     */
    ListPipelinesInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelinesInput = exports.ListPipelinesInput || (exports.ListPipelinesInput = {}));
var PipelineIdName;
(function (PipelineIdName) {
    /**
     * @internal
     */
    PipelineIdName.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PipelineIdName = exports.PipelineIdName || (exports.PipelineIdName = {}));
var ListPipelinesOutput;
(function (ListPipelinesOutput) {
    /**
     * @internal
     */
    ListPipelinesOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ListPipelinesOutput = exports.ListPipelinesOutput || (exports.ListPipelinesOutput = {}));
var InstanceIdentity;
(function (InstanceIdentity) {
    /**
     * @internal
     */
    InstanceIdentity.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(InstanceIdentity = exports.InstanceIdentity || (exports.InstanceIdentity = {}));
var PollForTaskInput;
(function (PollForTaskInput) {
    /**
     * @internal
     */
    PollForTaskInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PollForTaskInput = exports.PollForTaskInput || (exports.PollForTaskInput = {}));
var TaskObject;
(function (TaskObject) {
    /**
     * @internal
     */
    TaskObject.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(TaskObject = exports.TaskObject || (exports.TaskObject = {}));
var PollForTaskOutput;
(function (PollForTaskOutput) {
    /**
     * @internal
     */
    PollForTaskOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PollForTaskOutput = exports.PollForTaskOutput || (exports.PollForTaskOutput = {}));
var PutPipelineDefinitionInput;
(function (PutPipelineDefinitionInput) {
    /**
     * @internal
     */
    PutPipelineDefinitionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPipelineDefinitionInput = exports.PutPipelineDefinitionInput || (exports.PutPipelineDefinitionInput = {}));
var ValidationError;
(function (ValidationError) {
    /**
     * @internal
     */
    ValidationError.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationError = exports.ValidationError || (exports.ValidationError = {}));
var ValidationWarning;
(function (ValidationWarning) {
    /**
     * @internal
     */
    ValidationWarning.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidationWarning = exports.ValidationWarning || (exports.ValidationWarning = {}));
var PutPipelineDefinitionOutput;
(function (PutPipelineDefinitionOutput) {
    /**
     * @internal
     */
    PutPipelineDefinitionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(PutPipelineDefinitionOutput = exports.PutPipelineDefinitionOutput || (exports.PutPipelineDefinitionOutput = {}));
var OperatorType;
(function (OperatorType) {
    OperatorType["Between"] = "BETWEEN";
    OperatorType["Equal"] = "EQ";
    OperatorType["GreaterThanOrEqual"] = "GE";
    OperatorType["LessThanOrEqual"] = "LE";
    OperatorType["ReferenceEqual"] = "REF_EQ";
})(OperatorType = exports.OperatorType || (exports.OperatorType = {}));
var Operator;
(function (Operator) {
    /**
     * @internal
     */
    Operator.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Operator = exports.Operator || (exports.Operator = {}));
var Selector;
(function (Selector) {
    /**
     * @internal
     */
    Selector.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Selector = exports.Selector || (exports.Selector = {}));
var Query;
(function (Query) {
    /**
     * @internal
     */
    Query.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(Query = exports.Query || (exports.Query = {}));
var QueryObjectsInput;
(function (QueryObjectsInput) {
    /**
     * @internal
     */
    QueryObjectsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryObjectsInput = exports.QueryObjectsInput || (exports.QueryObjectsInput = {}));
var QueryObjectsOutput;
(function (QueryObjectsOutput) {
    /**
     * @internal
     */
    QueryObjectsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(QueryObjectsOutput = exports.QueryObjectsOutput || (exports.QueryObjectsOutput = {}));
var RemoveTagsInput;
(function (RemoveTagsInput) {
    /**
     * @internal
     */
    RemoveTagsInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsInput = exports.RemoveTagsInput || (exports.RemoveTagsInput = {}));
var RemoveTagsOutput;
(function (RemoveTagsOutput) {
    /**
     * @internal
     */
    RemoveTagsOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(RemoveTagsOutput = exports.RemoveTagsOutput || (exports.RemoveTagsOutput = {}));
var ReportTaskProgressInput;
(function (ReportTaskProgressInput) {
    /**
     * @internal
     */
    ReportTaskProgressInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportTaskProgressInput = exports.ReportTaskProgressInput || (exports.ReportTaskProgressInput = {}));
var ReportTaskProgressOutput;
(function (ReportTaskProgressOutput) {
    /**
     * @internal
     */
    ReportTaskProgressOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportTaskProgressOutput = exports.ReportTaskProgressOutput || (exports.ReportTaskProgressOutput = {}));
var ReportTaskRunnerHeartbeatInput;
(function (ReportTaskRunnerHeartbeatInput) {
    /**
     * @internal
     */
    ReportTaskRunnerHeartbeatInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportTaskRunnerHeartbeatInput = exports.ReportTaskRunnerHeartbeatInput || (exports.ReportTaskRunnerHeartbeatInput = {}));
var ReportTaskRunnerHeartbeatOutput;
(function (ReportTaskRunnerHeartbeatOutput) {
    /**
     * @internal
     */
    ReportTaskRunnerHeartbeatOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ReportTaskRunnerHeartbeatOutput = exports.ReportTaskRunnerHeartbeatOutput || (exports.ReportTaskRunnerHeartbeatOutput = {}));
var SetStatusInput;
(function (SetStatusInput) {
    /**
     * @internal
     */
    SetStatusInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetStatusInput = exports.SetStatusInput || (exports.SetStatusInput = {}));
var TaskStatus;
(function (TaskStatus) {
    TaskStatus["FAILED"] = "FAILED";
    TaskStatus["FALSE"] = "FALSE";
    TaskStatus["FINISHED"] = "FINISHED";
})(TaskStatus = exports.TaskStatus || (exports.TaskStatus = {}));
var SetTaskStatusInput;
(function (SetTaskStatusInput) {
    /**
     * @internal
     */
    SetTaskStatusInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetTaskStatusInput = exports.SetTaskStatusInput || (exports.SetTaskStatusInput = {}));
var SetTaskStatusOutput;
(function (SetTaskStatusOutput) {
    /**
     * @internal
     */
    SetTaskStatusOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(SetTaskStatusOutput = exports.SetTaskStatusOutput || (exports.SetTaskStatusOutput = {}));
var ValidatePipelineDefinitionInput;
(function (ValidatePipelineDefinitionInput) {
    /**
     * @internal
     */
    ValidatePipelineDefinitionInput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidatePipelineDefinitionInput = exports.ValidatePipelineDefinitionInput || (exports.ValidatePipelineDefinitionInput = {}));
var ValidatePipelineDefinitionOutput;
(function (ValidatePipelineDefinitionOutput) {
    /**
     * @internal
     */
    ValidatePipelineDefinitionOutput.filterSensitiveLog = (obj) => ({
        ...obj,
    });
})(ValidatePipelineDefinitionOutput = exports.ValidatePipelineDefinitionOutput || (exports.ValidatePipelineDefinitionOutput = {}));
//# sourceMappingURL=models_0.js.map