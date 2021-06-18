"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StaleRequestException =
  exports.StackSetNotFoundException =
  exports.OperationInProgressException =
  exports.OperationIdAlreadyExistsException =
  exports.InvalidOperationException =
  exports.CreateStackInstancesOutput =
  exports.CreateStackInstancesInput =
  exports.StackSetOperationPreferences =
  exports.RegionConcurrencyType =
  exports.DeploymentTargets =
  exports.CreateStackOutput =
  exports.CreateStackInput =
  exports.OnFailure =
  exports.LimitExceededException =
  exports.InsufficientCapabilitiesException =
  exports.CreateChangeSetOutput =
  exports.CreateChangeSetInput =
  exports.Tag =
  exports.RollbackConfiguration =
  exports.RollbackTrigger =
  exports.ResourceToImport =
  exports.Parameter =
  exports.ContinueUpdateRollbackOutput =
  exports.ContinueUpdateRollbackInput =
  exports.ChangeSetType =
  exports.ChangeSetSummary =
  exports.ExecutionStatus =
  exports.ChangeSetStatus =
  exports.ChangeSetNotFoundException =
  exports.Change =
  exports.ChangeType =
  exports.ResourceChange =
  exports.Replacement =
  exports.ModuleInfo =
  exports.ResourceChangeDetail =
  exports.ResourceTargetDefinition =
  exports.RequiresRecreation =
  exports.ResourceAttribute =
  exports.EvaluationType =
  exports.ChangeSource =
  exports.ChangeAction =
  exports.CFNRegistryException =
  exports.Capability =
  exports.TokenAlreadyExistsException =
  exports.CancelUpdateStackInput =
  exports.CallAs =
  exports.AutoDeployment =
  exports.AlreadyExistsException =
  exports.AccountLimit =
  exports.AccountGateResult =
    void 0;
exports.Output =
  exports.StackDriftInformation =
  exports.DescribeStacksInput =
  exports.DescribeStackResourcesOutput =
  exports.StackResource =
  exports.DescribeStackResourcesInput =
  exports.DescribeStackResourceDriftsOutput =
  exports.StackResourceDrift =
  exports.PropertyDifference =
  exports.DifferenceType =
  exports.PhysicalResourceIdContextKeyValuePair =
  exports.DescribeStackResourceDriftsInput =
  exports.DescribeStackResourceOutput =
  exports.StackResourceDetail =
  exports.StackResourceDriftInformation =
  exports.StackResourceDriftStatus =
  exports.DescribeStackResourceInput =
  exports.StackInstanceNotFoundException =
  exports.DescribeStackInstanceOutput =
  exports.StackInstance =
  exports.StackInstanceComprehensiveStatus =
  exports.DescribeStackInstanceInput =
  exports.DescribeStackEventsOutput =
  exports.StackEvent =
  exports.ResourceStatus =
  exports.DescribeStackEventsInput =
  exports.DescribeStackDriftDetectionStatusOutput =
  exports.StackDriftStatus =
  exports.StackDriftDetectionStatus =
  exports.DescribeStackDriftDetectionStatusInput =
  exports.DescribeChangeSetOutput =
  exports.DescribeChangeSetInput =
  exports.DescribeAccountLimitsOutput =
  exports.DescribeAccountLimitsInput =
  exports.TypeNotFoundException =
  exports.DeregisterTypeOutput =
  exports.DeregisterTypeInput =
  exports.StackSetNotEmptyException =
  exports.DeleteStackSetOutput =
  exports.DeleteStackSetInput =
  exports.DeleteStackInstancesOutput =
  exports.DeleteStackInstancesInput =
  exports.DeleteStackInput =
  exports.InvalidChangeSetStatusException =
  exports.DeleteChangeSetOutput =
  exports.DeleteChangeSetInput =
  exports.NameAlreadyExistsException =
  exports.CreateStackSetOutput =
  exports.CreateStackSetInput =
  exports.CreatedButModifiedException =
    void 0;
exports.ListStackResourcesInput =
  exports.ListStackInstancesOutput =
  exports.StackInstanceSummary =
  exports.ListStackInstancesInput =
  exports.StackInstanceFilter =
  exports.ListImportsOutput =
  exports.ListImportsInput =
  exports.ListExportsOutput =
  exports.Export =
  exports.ListExportsInput =
  exports.ListChangeSetsOutput =
  exports.ListChangeSetsInput =
  exports.GetTemplateSummaryOutput =
  exports.ResourceIdentifierSummary =
  exports.ParameterDeclaration =
  exports.ParameterConstraints =
  exports.GetTemplateSummaryInput =
  exports.GetTemplateOutput =
  exports.GetTemplateInput =
  exports.TemplateStage =
  exports.GetStackPolicyOutput =
  exports.GetStackPolicyInput =
  exports.ExecuteChangeSetOutput =
  exports.ExecuteChangeSetInput =
  exports.EstimateTemplateCostOutput =
  exports.EstimateTemplateCostInput =
  exports.DetectStackSetDriftOutput =
  exports.DetectStackSetDriftInput =
  exports.DetectStackResourceDriftOutput =
  exports.DetectStackResourceDriftInput =
  exports.DetectStackDriftOutput =
  exports.DetectStackDriftInput =
  exports.DescribeTypeRegistrationOutput =
  exports.DescribeTypeRegistrationInput =
  exports.DescribeTypeOutput =
  exports.LoggingConfig =
  exports.DescribeTypeInput =
  exports.OperationNotFoundException =
  exports.DescribeStackSetOperationOutput =
  exports.StackSetOperation =
  exports.DescribeStackSetOperationInput =
  exports.DescribeStackSetOutput =
  exports.StackSet =
  exports.StackSetDriftDetectionDetails =
  exports.StackSetDriftStatus =
  exports.StackSetDriftDetectionStatus =
  exports.DescribeStackSetInput =
  exports.DescribeStacksOutput =
  exports.Stack =
  exports.StackStatus =
    void 0;
exports.ValidateTemplateOutput =
  exports.TemplateParameter =
  exports.ValidateTemplateInput =
  exports.UpdateTerminationProtectionOutput =
  exports.UpdateTerminationProtectionInput =
  exports.UpdateStackSetOutput =
  exports.UpdateStackSetInput =
  exports.UpdateStackInstancesOutput =
  exports.UpdateStackInstancesInput =
  exports.UpdateStackOutput =
  exports.UpdateStackInput =
  exports.StopStackSetOperationOutput =
  exports.StopStackSetOperationInput =
  exports.SignalResourceInput =
  exports.ResourceSignalStatus =
  exports.SetTypeDefaultVersionOutput =
  exports.SetTypeDefaultVersionInput =
  exports.SetStackPolicyInput =
  exports.RegisterTypeOutput =
  exports.RegisterTypeInput =
  exports.RecordHandlerProgressOutput =
  exports.RecordHandlerProgressInput =
  exports.HandlerErrorCode =
  exports.OperationStatus =
  exports.OperationStatusCheckFailedException =
  exports.InvalidStateTransitionException =
  exports.ListTypeVersionsOutput =
  exports.TypeVersionSummary =
  exports.ListTypeVersionsInput =
  exports.ListTypesOutput =
  exports.TypeSummary =
  exports.ListTypesInput =
  exports.ListTypeRegistrationsOutput =
  exports.ListTypeRegistrationsInput =
  exports.ListStackSetsOutput =
  exports.StackSetSummary =
  exports.ListStackSetsInput =
  exports.ListStackSetOperationsOutput =
  exports.StackSetOperationSummary =
  exports.ListStackSetOperationsInput =
  exports.ListStackSetOperationResultsOutput =
  exports.StackSetOperationResultSummary =
  exports.ListStackSetOperationResultsInput =
  exports.ListStacksOutput =
  exports.StackSummary =
  exports.StackDriftInformationSummary =
  exports.ListStacksInput =
  exports.ListStackResourcesOutput =
  exports.StackResourceSummary =
  exports.StackResourceDriftInformationSummary =
    void 0;
var AccountGateResult;
(function (AccountGateResult) {
  /**
   * @internal
   */
  AccountGateResult.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccountGateResult = exports.AccountGateResult || (exports.AccountGateResult = {})));
var AccountLimit;
(function (AccountLimit) {
  /**
   * @internal
   */
  AccountLimit.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AccountLimit = exports.AccountLimit || (exports.AccountLimit = {})));
var AlreadyExistsException;
(function (AlreadyExistsException) {
  /**
   * @internal
   */
  AlreadyExistsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AlreadyExistsException = exports.AlreadyExistsException || (exports.AlreadyExistsException = {})));
var AutoDeployment;
(function (AutoDeployment) {
  /**
   * @internal
   */
  AutoDeployment.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((AutoDeployment = exports.AutoDeployment || (exports.AutoDeployment = {})));
var CallAs;
(function (CallAs) {
  CallAs["DELEGATED_ADMIN"] = "DELEGATED_ADMIN";
  CallAs["SELF"] = "SELF";
})((CallAs = exports.CallAs || (exports.CallAs = {})));
var CancelUpdateStackInput;
(function (CancelUpdateStackInput) {
  /**
   * @internal
   */
  CancelUpdateStackInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CancelUpdateStackInput = exports.CancelUpdateStackInput || (exports.CancelUpdateStackInput = {})));
var TokenAlreadyExistsException;
(function (TokenAlreadyExistsException) {
  /**
   * @internal
   */
  TokenAlreadyExistsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TokenAlreadyExistsException = exports.TokenAlreadyExistsException || (exports.TokenAlreadyExistsException = {})));
var Capability;
(function (Capability) {
  Capability["CAPABILITY_AUTO_EXPAND"] = "CAPABILITY_AUTO_EXPAND";
  Capability["CAPABILITY_IAM"] = "CAPABILITY_IAM";
  Capability["CAPABILITY_NAMED_IAM"] = "CAPABILITY_NAMED_IAM";
})((Capability = exports.Capability || (exports.Capability = {})));
var CFNRegistryException;
(function (CFNRegistryException) {
  /**
   * @internal
   */
  CFNRegistryException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CFNRegistryException = exports.CFNRegistryException || (exports.CFNRegistryException = {})));
var ChangeAction;
(function (ChangeAction) {
  ChangeAction["Add"] = "Add";
  ChangeAction["Dynamic"] = "Dynamic";
  ChangeAction["Import"] = "Import";
  ChangeAction["Modify"] = "Modify";
  ChangeAction["Remove"] = "Remove";
})((ChangeAction = exports.ChangeAction || (exports.ChangeAction = {})));
var ChangeSource;
(function (ChangeSource) {
  ChangeSource["Automatic"] = "Automatic";
  ChangeSource["DirectModification"] = "DirectModification";
  ChangeSource["ParameterReference"] = "ParameterReference";
  ChangeSource["ResourceAttribute"] = "ResourceAttribute";
  ChangeSource["ResourceReference"] = "ResourceReference";
})((ChangeSource = exports.ChangeSource || (exports.ChangeSource = {})));
var EvaluationType;
(function (EvaluationType) {
  EvaluationType["Dynamic"] = "Dynamic";
  EvaluationType["Static"] = "Static";
})((EvaluationType = exports.EvaluationType || (exports.EvaluationType = {})));
var ResourceAttribute;
(function (ResourceAttribute) {
  ResourceAttribute["CreationPolicy"] = "CreationPolicy";
  ResourceAttribute["DeletionPolicy"] = "DeletionPolicy";
  ResourceAttribute["Metadata"] = "Metadata";
  ResourceAttribute["Properties"] = "Properties";
  ResourceAttribute["Tags"] = "Tags";
  ResourceAttribute["UpdatePolicy"] = "UpdatePolicy";
})((ResourceAttribute = exports.ResourceAttribute || (exports.ResourceAttribute = {})));
var RequiresRecreation;
(function (RequiresRecreation) {
  RequiresRecreation["Always"] = "Always";
  RequiresRecreation["Conditionally"] = "Conditionally";
  RequiresRecreation["Never"] = "Never";
})((RequiresRecreation = exports.RequiresRecreation || (exports.RequiresRecreation = {})));
var ResourceTargetDefinition;
(function (ResourceTargetDefinition) {
  /**
   * @internal
   */
  ResourceTargetDefinition.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceTargetDefinition = exports.ResourceTargetDefinition || (exports.ResourceTargetDefinition = {})));
var ResourceChangeDetail;
(function (ResourceChangeDetail) {
  /**
   * @internal
   */
  ResourceChangeDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceChangeDetail = exports.ResourceChangeDetail || (exports.ResourceChangeDetail = {})));
var ModuleInfo;
(function (ModuleInfo) {
  /**
   * @internal
   */
  ModuleInfo.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ModuleInfo = exports.ModuleInfo || (exports.ModuleInfo = {})));
var Replacement;
(function (Replacement) {
  Replacement["Conditional"] = "Conditional";
  Replacement["False"] = "False";
  Replacement["True"] = "True";
})((Replacement = exports.Replacement || (exports.Replacement = {})));
var ResourceChange;
(function (ResourceChange) {
  /**
   * @internal
   */
  ResourceChange.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceChange = exports.ResourceChange || (exports.ResourceChange = {})));
var ChangeType;
(function (ChangeType) {
  ChangeType["Resource"] = "Resource";
})((ChangeType = exports.ChangeType || (exports.ChangeType = {})));
var Change;
(function (Change) {
  /**
   * @internal
   */
  Change.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Change = exports.Change || (exports.Change = {})));
var ChangeSetNotFoundException;
(function (ChangeSetNotFoundException) {
  /**
   * @internal
   */
  ChangeSetNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ChangeSetNotFoundException = exports.ChangeSetNotFoundException || (exports.ChangeSetNotFoundException = {})));
var ChangeSetStatus;
(function (ChangeSetStatus) {
  ChangeSetStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
  ChangeSetStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
  ChangeSetStatus["CREATE_PENDING"] = "CREATE_PENDING";
  ChangeSetStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
  ChangeSetStatus["DELETE_FAILED"] = "DELETE_FAILED";
  ChangeSetStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
  ChangeSetStatus["DELETE_PENDING"] = "DELETE_PENDING";
  ChangeSetStatus["FAILED"] = "FAILED";
})((ChangeSetStatus = exports.ChangeSetStatus || (exports.ChangeSetStatus = {})));
var ExecutionStatus;
(function (ExecutionStatus) {
  ExecutionStatus["AVAILABLE"] = "AVAILABLE";
  ExecutionStatus["EXECUTE_COMPLETE"] = "EXECUTE_COMPLETE";
  ExecutionStatus["EXECUTE_FAILED"] = "EXECUTE_FAILED";
  ExecutionStatus["EXECUTE_IN_PROGRESS"] = "EXECUTE_IN_PROGRESS";
  ExecutionStatus["OBSOLETE"] = "OBSOLETE";
  ExecutionStatus["UNAVAILABLE"] = "UNAVAILABLE";
})((ExecutionStatus = exports.ExecutionStatus || (exports.ExecutionStatus = {})));
var ChangeSetSummary;
(function (ChangeSetSummary) {
  /**
   * @internal
   */
  ChangeSetSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ChangeSetSummary = exports.ChangeSetSummary || (exports.ChangeSetSummary = {})));
var ChangeSetType;
(function (ChangeSetType) {
  ChangeSetType["CREATE"] = "CREATE";
  ChangeSetType["IMPORT"] = "IMPORT";
  ChangeSetType["UPDATE"] = "UPDATE";
})((ChangeSetType = exports.ChangeSetType || (exports.ChangeSetType = {})));
var ContinueUpdateRollbackInput;
(function (ContinueUpdateRollbackInput) {
  /**
   * @internal
   */
  ContinueUpdateRollbackInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ContinueUpdateRollbackInput = exports.ContinueUpdateRollbackInput || (exports.ContinueUpdateRollbackInput = {})));
var ContinueUpdateRollbackOutput;
(function (ContinueUpdateRollbackOutput) {
  /**
   * @internal
   */
  ContinueUpdateRollbackOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ContinueUpdateRollbackOutput = exports.ContinueUpdateRollbackOutput || (exports.ContinueUpdateRollbackOutput = {}))
);
var Parameter;
(function (Parameter) {
  /**
   * @internal
   */
  Parameter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Parameter = exports.Parameter || (exports.Parameter = {})));
var ResourceToImport;
(function (ResourceToImport) {
  /**
   * @internal
   */
  ResourceToImport.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceToImport = exports.ResourceToImport || (exports.ResourceToImport = {})));
var RollbackTrigger;
(function (RollbackTrigger) {
  /**
   * @internal
   */
  RollbackTrigger.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RollbackTrigger = exports.RollbackTrigger || (exports.RollbackTrigger = {})));
var RollbackConfiguration;
(function (RollbackConfiguration) {
  /**
   * @internal
   */
  RollbackConfiguration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RollbackConfiguration = exports.RollbackConfiguration || (exports.RollbackConfiguration = {})));
var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Tag = exports.Tag || (exports.Tag = {})));
var CreateChangeSetInput;
(function (CreateChangeSetInput) {
  /**
   * @internal
   */
  CreateChangeSetInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateChangeSetInput = exports.CreateChangeSetInput || (exports.CreateChangeSetInput = {})));
var CreateChangeSetOutput;
(function (CreateChangeSetOutput) {
  /**
   * @internal
   */
  CreateChangeSetOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateChangeSetOutput = exports.CreateChangeSetOutput || (exports.CreateChangeSetOutput = {})));
var InsufficientCapabilitiesException;
(function (InsufficientCapabilitiesException) {
  /**
   * @internal
   */
  InsufficientCapabilitiesException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InsufficientCapabilitiesException =
    exports.InsufficientCapabilitiesException || (exports.InsufficientCapabilitiesException = {}))
);
var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LimitExceededException = exports.LimitExceededException || (exports.LimitExceededException = {})));
var OnFailure;
(function (OnFailure) {
  OnFailure["DELETE"] = "DELETE";
  OnFailure["DO_NOTHING"] = "DO_NOTHING";
  OnFailure["ROLLBACK"] = "ROLLBACK";
})((OnFailure = exports.OnFailure || (exports.OnFailure = {})));
var CreateStackInput;
(function (CreateStackInput) {
  /**
   * @internal
   */
  CreateStackInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStackInput = exports.CreateStackInput || (exports.CreateStackInput = {})));
var CreateStackOutput;
(function (CreateStackOutput) {
  /**
   * @internal
   */
  CreateStackOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStackOutput = exports.CreateStackOutput || (exports.CreateStackOutput = {})));
var DeploymentTargets;
(function (DeploymentTargets) {
  /**
   * @internal
   */
  DeploymentTargets.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeploymentTargets = exports.DeploymentTargets || (exports.DeploymentTargets = {})));
var RegionConcurrencyType;
(function (RegionConcurrencyType) {
  RegionConcurrencyType["PARALLEL"] = "PARALLEL";
  RegionConcurrencyType["SEQUENTIAL"] = "SEQUENTIAL";
})((RegionConcurrencyType = exports.RegionConcurrencyType || (exports.RegionConcurrencyType = {})));
var StackSetOperationPreferences;
(function (StackSetOperationPreferences) {
  /**
   * @internal
   */
  StackSetOperationPreferences.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StackSetOperationPreferences = exports.StackSetOperationPreferences || (exports.StackSetOperationPreferences = {}))
);
var CreateStackInstancesInput;
(function (CreateStackInstancesInput) {
  /**
   * @internal
   */
  CreateStackInstancesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStackInstancesInput = exports.CreateStackInstancesInput || (exports.CreateStackInstancesInput = {})));
var CreateStackInstancesOutput;
(function (CreateStackInstancesOutput) {
  /**
   * @internal
   */
  CreateStackInstancesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStackInstancesOutput = exports.CreateStackInstancesOutput || (exports.CreateStackInstancesOutput = {})));
var InvalidOperationException;
(function (InvalidOperationException) {
  /**
   * @internal
   */
  InvalidOperationException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((InvalidOperationException = exports.InvalidOperationException || (exports.InvalidOperationException = {})));
var OperationIdAlreadyExistsException;
(function (OperationIdAlreadyExistsException) {
  /**
   * @internal
   */
  OperationIdAlreadyExistsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (OperationIdAlreadyExistsException =
    exports.OperationIdAlreadyExistsException || (exports.OperationIdAlreadyExistsException = {}))
);
var OperationInProgressException;
(function (OperationInProgressException) {
  /**
   * @internal
   */
  OperationInProgressException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (OperationInProgressException = exports.OperationInProgressException || (exports.OperationInProgressException = {}))
);
var StackSetNotFoundException;
(function (StackSetNotFoundException) {
  /**
   * @internal
   */
  StackSetNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackSetNotFoundException = exports.StackSetNotFoundException || (exports.StackSetNotFoundException = {})));
var StaleRequestException;
(function (StaleRequestException) {
  /**
   * @internal
   */
  StaleRequestException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StaleRequestException = exports.StaleRequestException || (exports.StaleRequestException = {})));
var CreatedButModifiedException;
(function (CreatedButModifiedException) {
  /**
   * @internal
   */
  CreatedButModifiedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreatedButModifiedException = exports.CreatedButModifiedException || (exports.CreatedButModifiedException = {})));
var CreateStackSetInput;
(function (CreateStackSetInput) {
  /**
   * @internal
   */
  CreateStackSetInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStackSetInput = exports.CreateStackSetInput || (exports.CreateStackSetInput = {})));
var CreateStackSetOutput;
(function (CreateStackSetOutput) {
  /**
   * @internal
   */
  CreateStackSetOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((CreateStackSetOutput = exports.CreateStackSetOutput || (exports.CreateStackSetOutput = {})));
var NameAlreadyExistsException;
(function (NameAlreadyExistsException) {
  /**
   * @internal
   */
  NameAlreadyExistsException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((NameAlreadyExistsException = exports.NameAlreadyExistsException || (exports.NameAlreadyExistsException = {})));
var DeleteChangeSetInput;
(function (DeleteChangeSetInput) {
  /**
   * @internal
   */
  DeleteChangeSetInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteChangeSetInput = exports.DeleteChangeSetInput || (exports.DeleteChangeSetInput = {})));
var DeleteChangeSetOutput;
(function (DeleteChangeSetOutput) {
  /**
   * @internal
   */
  DeleteChangeSetOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteChangeSetOutput = exports.DeleteChangeSetOutput || (exports.DeleteChangeSetOutput = {})));
var InvalidChangeSetStatusException;
(function (InvalidChangeSetStatusException) {
  /**
   * @internal
   */
  InvalidChangeSetStatusException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidChangeSetStatusException =
    exports.InvalidChangeSetStatusException || (exports.InvalidChangeSetStatusException = {}))
);
var DeleteStackInput;
(function (DeleteStackInput) {
  /**
   * @internal
   */
  DeleteStackInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteStackInput = exports.DeleteStackInput || (exports.DeleteStackInput = {})));
var DeleteStackInstancesInput;
(function (DeleteStackInstancesInput) {
  /**
   * @internal
   */
  DeleteStackInstancesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteStackInstancesInput = exports.DeleteStackInstancesInput || (exports.DeleteStackInstancesInput = {})));
var DeleteStackInstancesOutput;
(function (DeleteStackInstancesOutput) {
  /**
   * @internal
   */
  DeleteStackInstancesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteStackInstancesOutput = exports.DeleteStackInstancesOutput || (exports.DeleteStackInstancesOutput = {})));
var DeleteStackSetInput;
(function (DeleteStackSetInput) {
  /**
   * @internal
   */
  DeleteStackSetInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteStackSetInput = exports.DeleteStackSetInput || (exports.DeleteStackSetInput = {})));
var DeleteStackSetOutput;
(function (DeleteStackSetOutput) {
  /**
   * @internal
   */
  DeleteStackSetOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeleteStackSetOutput = exports.DeleteStackSetOutput || (exports.DeleteStackSetOutput = {})));
var StackSetNotEmptyException;
(function (StackSetNotEmptyException) {
  /**
   * @internal
   */
  StackSetNotEmptyException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackSetNotEmptyException = exports.StackSetNotEmptyException || (exports.StackSetNotEmptyException = {})));
var DeregisterTypeInput;
(function (DeregisterTypeInput) {
  /**
   * @internal
   */
  DeregisterTypeInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeregisterTypeInput = exports.DeregisterTypeInput || (exports.DeregisterTypeInput = {})));
var DeregisterTypeOutput;
(function (DeregisterTypeOutput) {
  /**
   * @internal
   */
  DeregisterTypeOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DeregisterTypeOutput = exports.DeregisterTypeOutput || (exports.DeregisterTypeOutput = {})));
var TypeNotFoundException;
(function (TypeNotFoundException) {
  /**
   * @internal
   */
  TypeNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TypeNotFoundException = exports.TypeNotFoundException || (exports.TypeNotFoundException = {})));
var DescribeAccountLimitsInput;
(function (DescribeAccountLimitsInput) {
  /**
   * @internal
   */
  DescribeAccountLimitsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeAccountLimitsInput = exports.DescribeAccountLimitsInput || (exports.DescribeAccountLimitsInput = {})));
var DescribeAccountLimitsOutput;
(function (DescribeAccountLimitsOutput) {
  /**
   * @internal
   */
  DescribeAccountLimitsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeAccountLimitsOutput = exports.DescribeAccountLimitsOutput || (exports.DescribeAccountLimitsOutput = {})));
var DescribeChangeSetInput;
(function (DescribeChangeSetInput) {
  /**
   * @internal
   */
  DescribeChangeSetInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeChangeSetInput = exports.DescribeChangeSetInput || (exports.DescribeChangeSetInput = {})));
var DescribeChangeSetOutput;
(function (DescribeChangeSetOutput) {
  /**
   * @internal
   */
  DescribeChangeSetOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeChangeSetOutput = exports.DescribeChangeSetOutput || (exports.DescribeChangeSetOutput = {})));
var DescribeStackDriftDetectionStatusInput;
(function (DescribeStackDriftDetectionStatusInput) {
  /**
   * @internal
   */
  DescribeStackDriftDetectionStatusInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeStackDriftDetectionStatusInput =
    exports.DescribeStackDriftDetectionStatusInput || (exports.DescribeStackDriftDetectionStatusInput = {}))
);
var StackDriftDetectionStatus;
(function (StackDriftDetectionStatus) {
  StackDriftDetectionStatus["DETECTION_COMPLETE"] = "DETECTION_COMPLETE";
  StackDriftDetectionStatus["DETECTION_FAILED"] = "DETECTION_FAILED";
  StackDriftDetectionStatus["DETECTION_IN_PROGRESS"] = "DETECTION_IN_PROGRESS";
})((StackDriftDetectionStatus = exports.StackDriftDetectionStatus || (exports.StackDriftDetectionStatus = {})));
var StackDriftStatus;
(function (StackDriftStatus) {
  StackDriftStatus["DRIFTED"] = "DRIFTED";
  StackDriftStatus["IN_SYNC"] = "IN_SYNC";
  StackDriftStatus["NOT_CHECKED"] = "NOT_CHECKED";
  StackDriftStatus["UNKNOWN"] = "UNKNOWN";
})((StackDriftStatus = exports.StackDriftStatus || (exports.StackDriftStatus = {})));
var DescribeStackDriftDetectionStatusOutput;
(function (DescribeStackDriftDetectionStatusOutput) {
  /**
   * @internal
   */
  DescribeStackDriftDetectionStatusOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeStackDriftDetectionStatusOutput =
    exports.DescribeStackDriftDetectionStatusOutput || (exports.DescribeStackDriftDetectionStatusOutput = {}))
);
var DescribeStackEventsInput;
(function (DescribeStackEventsInput) {
  /**
   * @internal
   */
  DescribeStackEventsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStackEventsInput = exports.DescribeStackEventsInput || (exports.DescribeStackEventsInput = {})));
var ResourceStatus;
(function (ResourceStatus) {
  ResourceStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
  ResourceStatus["CREATE_FAILED"] = "CREATE_FAILED";
  ResourceStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
  ResourceStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
  ResourceStatus["DELETE_FAILED"] = "DELETE_FAILED";
  ResourceStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
  ResourceStatus["DELETE_SKIPPED"] = "DELETE_SKIPPED";
  ResourceStatus["IMPORT_COMPLETE"] = "IMPORT_COMPLETE";
  ResourceStatus["IMPORT_FAILED"] = "IMPORT_FAILED";
  ResourceStatus["IMPORT_IN_PROGRESS"] = "IMPORT_IN_PROGRESS";
  ResourceStatus["IMPORT_ROLLBACK_COMPLETE"] = "IMPORT_ROLLBACK_COMPLETE";
  ResourceStatus["IMPORT_ROLLBACK_FAILED"] = "IMPORT_ROLLBACK_FAILED";
  ResourceStatus["IMPORT_ROLLBACK_IN_PROGRESS"] = "IMPORT_ROLLBACK_IN_PROGRESS";
  ResourceStatus["UPDATE_COMPLETE"] = "UPDATE_COMPLETE";
  ResourceStatus["UPDATE_FAILED"] = "UPDATE_FAILED";
  ResourceStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
})((ResourceStatus = exports.ResourceStatus || (exports.ResourceStatus = {})));
var StackEvent;
(function (StackEvent) {
  /**
   * @internal
   */
  StackEvent.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackEvent = exports.StackEvent || (exports.StackEvent = {})));
var DescribeStackEventsOutput;
(function (DescribeStackEventsOutput) {
  /**
   * @internal
   */
  DescribeStackEventsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStackEventsOutput = exports.DescribeStackEventsOutput || (exports.DescribeStackEventsOutput = {})));
var DescribeStackInstanceInput;
(function (DescribeStackInstanceInput) {
  /**
   * @internal
   */
  DescribeStackInstanceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStackInstanceInput = exports.DescribeStackInstanceInput || (exports.DescribeStackInstanceInput = {})));
var StackInstanceComprehensiveStatus;
(function (StackInstanceComprehensiveStatus) {
  /**
   * @internal
   */
  StackInstanceComprehensiveStatus.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StackInstanceComprehensiveStatus =
    exports.StackInstanceComprehensiveStatus || (exports.StackInstanceComprehensiveStatus = {}))
);
var StackInstance;
(function (StackInstance) {
  /**
   * @internal
   */
  StackInstance.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackInstance = exports.StackInstance || (exports.StackInstance = {})));
var DescribeStackInstanceOutput;
(function (DescribeStackInstanceOutput) {
  /**
   * @internal
   */
  DescribeStackInstanceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStackInstanceOutput = exports.DescribeStackInstanceOutput || (exports.DescribeStackInstanceOutput = {})));
var StackInstanceNotFoundException;
(function (StackInstanceNotFoundException) {
  /**
   * @internal
   */
  StackInstanceNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StackInstanceNotFoundException =
    exports.StackInstanceNotFoundException || (exports.StackInstanceNotFoundException = {}))
);
var DescribeStackResourceInput;
(function (DescribeStackResourceInput) {
  /**
   * @internal
   */
  DescribeStackResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStackResourceInput = exports.DescribeStackResourceInput || (exports.DescribeStackResourceInput = {})));
var StackResourceDriftStatus;
(function (StackResourceDriftStatus) {
  StackResourceDriftStatus["DELETED"] = "DELETED";
  StackResourceDriftStatus["IN_SYNC"] = "IN_SYNC";
  StackResourceDriftStatus["MODIFIED"] = "MODIFIED";
  StackResourceDriftStatus["NOT_CHECKED"] = "NOT_CHECKED";
})((StackResourceDriftStatus = exports.StackResourceDriftStatus || (exports.StackResourceDriftStatus = {})));
var StackResourceDriftInformation;
(function (StackResourceDriftInformation) {
  /**
   * @internal
   */
  StackResourceDriftInformation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StackResourceDriftInformation =
    exports.StackResourceDriftInformation || (exports.StackResourceDriftInformation = {}))
);
var StackResourceDetail;
(function (StackResourceDetail) {
  /**
   * @internal
   */
  StackResourceDetail.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackResourceDetail = exports.StackResourceDetail || (exports.StackResourceDetail = {})));
var DescribeStackResourceOutput;
(function (DescribeStackResourceOutput) {
  /**
   * @internal
   */
  DescribeStackResourceOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStackResourceOutput = exports.DescribeStackResourceOutput || (exports.DescribeStackResourceOutput = {})));
var DescribeStackResourceDriftsInput;
(function (DescribeStackResourceDriftsInput) {
  /**
   * @internal
   */
  DescribeStackResourceDriftsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeStackResourceDriftsInput =
    exports.DescribeStackResourceDriftsInput || (exports.DescribeStackResourceDriftsInput = {}))
);
var PhysicalResourceIdContextKeyValuePair;
(function (PhysicalResourceIdContextKeyValuePair) {
  /**
   * @internal
   */
  PhysicalResourceIdContextKeyValuePair.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (PhysicalResourceIdContextKeyValuePair =
    exports.PhysicalResourceIdContextKeyValuePair || (exports.PhysicalResourceIdContextKeyValuePair = {}))
);
var DifferenceType;
(function (DifferenceType) {
  DifferenceType["ADD"] = "ADD";
  DifferenceType["NOT_EQUAL"] = "NOT_EQUAL";
  DifferenceType["REMOVE"] = "REMOVE";
})((DifferenceType = exports.DifferenceType || (exports.DifferenceType = {})));
var PropertyDifference;
(function (PropertyDifference) {
  /**
   * @internal
   */
  PropertyDifference.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((PropertyDifference = exports.PropertyDifference || (exports.PropertyDifference = {})));
var StackResourceDrift;
(function (StackResourceDrift) {
  /**
   * @internal
   */
  StackResourceDrift.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackResourceDrift = exports.StackResourceDrift || (exports.StackResourceDrift = {})));
var DescribeStackResourceDriftsOutput;
(function (DescribeStackResourceDriftsOutput) {
  /**
   * @internal
   */
  DescribeStackResourceDriftsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeStackResourceDriftsOutput =
    exports.DescribeStackResourceDriftsOutput || (exports.DescribeStackResourceDriftsOutput = {}))
);
var DescribeStackResourcesInput;
(function (DescribeStackResourcesInput) {
  /**
   * @internal
   */
  DescribeStackResourcesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStackResourcesInput = exports.DescribeStackResourcesInput || (exports.DescribeStackResourcesInput = {})));
var StackResource;
(function (StackResource) {
  /**
   * @internal
   */
  StackResource.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackResource = exports.StackResource || (exports.StackResource = {})));
var DescribeStackResourcesOutput;
(function (DescribeStackResourcesOutput) {
  /**
   * @internal
   */
  DescribeStackResourcesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeStackResourcesOutput = exports.DescribeStackResourcesOutput || (exports.DescribeStackResourcesOutput = {}))
);
var DescribeStacksInput;
(function (DescribeStacksInput) {
  /**
   * @internal
   */
  DescribeStacksInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStacksInput = exports.DescribeStacksInput || (exports.DescribeStacksInput = {})));
var StackDriftInformation;
(function (StackDriftInformation) {
  /**
   * @internal
   */
  StackDriftInformation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackDriftInformation = exports.StackDriftInformation || (exports.StackDriftInformation = {})));
var Output;
(function (Output) {
  /**
   * @internal
   */
  Output.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Output = exports.Output || (exports.Output = {})));
var StackStatus;
(function (StackStatus) {
  StackStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
  StackStatus["CREATE_FAILED"] = "CREATE_FAILED";
  StackStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
  StackStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
  StackStatus["DELETE_FAILED"] = "DELETE_FAILED";
  StackStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
  StackStatus["IMPORT_COMPLETE"] = "IMPORT_COMPLETE";
  StackStatus["IMPORT_IN_PROGRESS"] = "IMPORT_IN_PROGRESS";
  StackStatus["IMPORT_ROLLBACK_COMPLETE"] = "IMPORT_ROLLBACK_COMPLETE";
  StackStatus["IMPORT_ROLLBACK_FAILED"] = "IMPORT_ROLLBACK_FAILED";
  StackStatus["IMPORT_ROLLBACK_IN_PROGRESS"] = "IMPORT_ROLLBACK_IN_PROGRESS";
  StackStatus["REVIEW_IN_PROGRESS"] = "REVIEW_IN_PROGRESS";
  StackStatus["ROLLBACK_COMPLETE"] = "ROLLBACK_COMPLETE";
  StackStatus["ROLLBACK_FAILED"] = "ROLLBACK_FAILED";
  StackStatus["ROLLBACK_IN_PROGRESS"] = "ROLLBACK_IN_PROGRESS";
  StackStatus["UPDATE_COMPLETE"] = "UPDATE_COMPLETE";
  StackStatus["UPDATE_COMPLETE_CLEANUP_IN_PROGRESS"] = "UPDATE_COMPLETE_CLEANUP_IN_PROGRESS";
  StackStatus["UPDATE_IN_PROGRESS"] = "UPDATE_IN_PROGRESS";
  StackStatus["UPDATE_ROLLBACK_COMPLETE"] = "UPDATE_ROLLBACK_COMPLETE";
  StackStatus["UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS"] = "UPDATE_ROLLBACK_COMPLETE_CLEANUP_IN_PROGRESS";
  StackStatus["UPDATE_ROLLBACK_FAILED"] = "UPDATE_ROLLBACK_FAILED";
  StackStatus["UPDATE_ROLLBACK_IN_PROGRESS"] = "UPDATE_ROLLBACK_IN_PROGRESS";
})((StackStatus = exports.StackStatus || (exports.StackStatus = {})));
var Stack;
(function (Stack) {
  /**
   * @internal
   */
  Stack.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Stack = exports.Stack || (exports.Stack = {})));
var DescribeStacksOutput;
(function (DescribeStacksOutput) {
  /**
   * @internal
   */
  DescribeStacksOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStacksOutput = exports.DescribeStacksOutput || (exports.DescribeStacksOutput = {})));
var DescribeStackSetInput;
(function (DescribeStackSetInput) {
  /**
   * @internal
   */
  DescribeStackSetInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStackSetInput = exports.DescribeStackSetInput || (exports.DescribeStackSetInput = {})));
var StackSetDriftDetectionStatus;
(function (StackSetDriftDetectionStatus) {
  StackSetDriftDetectionStatus["COMPLETED"] = "COMPLETED";
  StackSetDriftDetectionStatus["FAILED"] = "FAILED";
  StackSetDriftDetectionStatus["IN_PROGRESS"] = "IN_PROGRESS";
  StackSetDriftDetectionStatus["PARTIAL_SUCCESS"] = "PARTIAL_SUCCESS";
  StackSetDriftDetectionStatus["STOPPED"] = "STOPPED";
})(
  (StackSetDriftDetectionStatus = exports.StackSetDriftDetectionStatus || (exports.StackSetDriftDetectionStatus = {}))
);
var StackSetDriftStatus;
(function (StackSetDriftStatus) {
  StackSetDriftStatus["DRIFTED"] = "DRIFTED";
  StackSetDriftStatus["IN_SYNC"] = "IN_SYNC";
  StackSetDriftStatus["NOT_CHECKED"] = "NOT_CHECKED";
})((StackSetDriftStatus = exports.StackSetDriftStatus || (exports.StackSetDriftStatus = {})));
var StackSetDriftDetectionDetails;
(function (StackSetDriftDetectionDetails) {
  /**
   * @internal
   */
  StackSetDriftDetectionDetails.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StackSetDriftDetectionDetails =
    exports.StackSetDriftDetectionDetails || (exports.StackSetDriftDetectionDetails = {}))
);
var StackSet;
(function (StackSet) {
  /**
   * @internal
   */
  StackSet.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackSet = exports.StackSet || (exports.StackSet = {})));
var DescribeStackSetOutput;
(function (DescribeStackSetOutput) {
  /**
   * @internal
   */
  DescribeStackSetOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeStackSetOutput = exports.DescribeStackSetOutput || (exports.DescribeStackSetOutput = {})));
var DescribeStackSetOperationInput;
(function (DescribeStackSetOperationInput) {
  /**
   * @internal
   */
  DescribeStackSetOperationInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeStackSetOperationInput =
    exports.DescribeStackSetOperationInput || (exports.DescribeStackSetOperationInput = {}))
);
var StackSetOperation;
(function (StackSetOperation) {
  /**
   * @internal
   */
  StackSetOperation.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackSetOperation = exports.StackSetOperation || (exports.StackSetOperation = {})));
var DescribeStackSetOperationOutput;
(function (DescribeStackSetOperationOutput) {
  /**
   * @internal
   */
  DescribeStackSetOperationOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeStackSetOperationOutput =
    exports.DescribeStackSetOperationOutput || (exports.DescribeStackSetOperationOutput = {}))
);
var OperationNotFoundException;
(function (OperationNotFoundException) {
  /**
   * @internal
   */
  OperationNotFoundException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((OperationNotFoundException = exports.OperationNotFoundException || (exports.OperationNotFoundException = {})));
var DescribeTypeInput;
(function (DescribeTypeInput) {
  /**
   * @internal
   */
  DescribeTypeInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeTypeInput = exports.DescribeTypeInput || (exports.DescribeTypeInput = {})));
var LoggingConfig;
(function (LoggingConfig) {
  /**
   * @internal
   */
  LoggingConfig.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((LoggingConfig = exports.LoggingConfig || (exports.LoggingConfig = {})));
var DescribeTypeOutput;
(function (DescribeTypeOutput) {
  /**
   * @internal
   */
  DescribeTypeOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DescribeTypeOutput = exports.DescribeTypeOutput || (exports.DescribeTypeOutput = {})));
var DescribeTypeRegistrationInput;
(function (DescribeTypeRegistrationInput) {
  /**
   * @internal
   */
  DescribeTypeRegistrationInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeTypeRegistrationInput =
    exports.DescribeTypeRegistrationInput || (exports.DescribeTypeRegistrationInput = {}))
);
var DescribeTypeRegistrationOutput;
(function (DescribeTypeRegistrationOutput) {
  /**
   * @internal
   */
  DescribeTypeRegistrationOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DescribeTypeRegistrationOutput =
    exports.DescribeTypeRegistrationOutput || (exports.DescribeTypeRegistrationOutput = {}))
);
var DetectStackDriftInput;
(function (DetectStackDriftInput) {
  /**
   * @internal
   */
  DetectStackDriftInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetectStackDriftInput = exports.DetectStackDriftInput || (exports.DetectStackDriftInput = {})));
var DetectStackDriftOutput;
(function (DetectStackDriftOutput) {
  /**
   * @internal
   */
  DetectStackDriftOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetectStackDriftOutput = exports.DetectStackDriftOutput || (exports.DetectStackDriftOutput = {})));
var DetectStackResourceDriftInput;
(function (DetectStackResourceDriftInput) {
  /**
   * @internal
   */
  DetectStackResourceDriftInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DetectStackResourceDriftInput =
    exports.DetectStackResourceDriftInput || (exports.DetectStackResourceDriftInput = {}))
);
var DetectStackResourceDriftOutput;
(function (DetectStackResourceDriftOutput) {
  /**
   * @internal
   */
  DetectStackResourceDriftOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (DetectStackResourceDriftOutput =
    exports.DetectStackResourceDriftOutput || (exports.DetectStackResourceDriftOutput = {}))
);
var DetectStackSetDriftInput;
(function (DetectStackSetDriftInput) {
  /**
   * @internal
   */
  DetectStackSetDriftInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetectStackSetDriftInput = exports.DetectStackSetDriftInput || (exports.DetectStackSetDriftInput = {})));
var DetectStackSetDriftOutput;
(function (DetectStackSetDriftOutput) {
  /**
   * @internal
   */
  DetectStackSetDriftOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((DetectStackSetDriftOutput = exports.DetectStackSetDriftOutput || (exports.DetectStackSetDriftOutput = {})));
var EstimateTemplateCostInput;
(function (EstimateTemplateCostInput) {
  /**
   * @internal
   */
  EstimateTemplateCostInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EstimateTemplateCostInput = exports.EstimateTemplateCostInput || (exports.EstimateTemplateCostInput = {})));
var EstimateTemplateCostOutput;
(function (EstimateTemplateCostOutput) {
  /**
   * @internal
   */
  EstimateTemplateCostOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((EstimateTemplateCostOutput = exports.EstimateTemplateCostOutput || (exports.EstimateTemplateCostOutput = {})));
var ExecuteChangeSetInput;
(function (ExecuteChangeSetInput) {
  /**
   * @internal
   */
  ExecuteChangeSetInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExecuteChangeSetInput = exports.ExecuteChangeSetInput || (exports.ExecuteChangeSetInput = {})));
var ExecuteChangeSetOutput;
(function (ExecuteChangeSetOutput) {
  /**
   * @internal
   */
  ExecuteChangeSetOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ExecuteChangeSetOutput = exports.ExecuteChangeSetOutput || (exports.ExecuteChangeSetOutput = {})));
var GetStackPolicyInput;
(function (GetStackPolicyInput) {
  /**
   * @internal
   */
  GetStackPolicyInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetStackPolicyInput = exports.GetStackPolicyInput || (exports.GetStackPolicyInput = {})));
var GetStackPolicyOutput;
(function (GetStackPolicyOutput) {
  /**
   * @internal
   */
  GetStackPolicyOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetStackPolicyOutput = exports.GetStackPolicyOutput || (exports.GetStackPolicyOutput = {})));
var TemplateStage;
(function (TemplateStage) {
  TemplateStage["Original"] = "Original";
  TemplateStage["Processed"] = "Processed";
})((TemplateStage = exports.TemplateStage || (exports.TemplateStage = {})));
var GetTemplateInput;
(function (GetTemplateInput) {
  /**
   * @internal
   */
  GetTemplateInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTemplateInput = exports.GetTemplateInput || (exports.GetTemplateInput = {})));
var GetTemplateOutput;
(function (GetTemplateOutput) {
  /**
   * @internal
   */
  GetTemplateOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTemplateOutput = exports.GetTemplateOutput || (exports.GetTemplateOutput = {})));
var GetTemplateSummaryInput;
(function (GetTemplateSummaryInput) {
  /**
   * @internal
   */
  GetTemplateSummaryInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTemplateSummaryInput = exports.GetTemplateSummaryInput || (exports.GetTemplateSummaryInput = {})));
var ParameterConstraints;
(function (ParameterConstraints) {
  /**
   * @internal
   */
  ParameterConstraints.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ParameterConstraints = exports.ParameterConstraints || (exports.ParameterConstraints = {})));
var ParameterDeclaration;
(function (ParameterDeclaration) {
  /**
   * @internal
   */
  ParameterDeclaration.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ParameterDeclaration = exports.ParameterDeclaration || (exports.ParameterDeclaration = {})));
var ResourceIdentifierSummary;
(function (ResourceIdentifierSummary) {
  /**
   * @internal
   */
  ResourceIdentifierSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ResourceIdentifierSummary = exports.ResourceIdentifierSummary || (exports.ResourceIdentifierSummary = {})));
var GetTemplateSummaryOutput;
(function (GetTemplateSummaryOutput) {
  /**
   * @internal
   */
  GetTemplateSummaryOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((GetTemplateSummaryOutput = exports.GetTemplateSummaryOutput || (exports.GetTemplateSummaryOutput = {})));
var ListChangeSetsInput;
(function (ListChangeSetsInput) {
  /**
   * @internal
   */
  ListChangeSetsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListChangeSetsInput = exports.ListChangeSetsInput || (exports.ListChangeSetsInput = {})));
var ListChangeSetsOutput;
(function (ListChangeSetsOutput) {
  /**
   * @internal
   */
  ListChangeSetsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListChangeSetsOutput = exports.ListChangeSetsOutput || (exports.ListChangeSetsOutput = {})));
var ListExportsInput;
(function (ListExportsInput) {
  /**
   * @internal
   */
  ListExportsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListExportsInput = exports.ListExportsInput || (exports.ListExportsInput = {})));
var Export;
(function (Export) {
  /**
   * @internal
   */
  Export.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((Export = exports.Export || (exports.Export = {})));
var ListExportsOutput;
(function (ListExportsOutput) {
  /**
   * @internal
   */
  ListExportsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListExportsOutput = exports.ListExportsOutput || (exports.ListExportsOutput = {})));
var ListImportsInput;
(function (ListImportsInput) {
  /**
   * @internal
   */
  ListImportsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListImportsInput = exports.ListImportsInput || (exports.ListImportsInput = {})));
var ListImportsOutput;
(function (ListImportsOutput) {
  /**
   * @internal
   */
  ListImportsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListImportsOutput = exports.ListImportsOutput || (exports.ListImportsOutput = {})));
var StackInstanceFilter;
(function (StackInstanceFilter) {
  /**
   * @internal
   */
  StackInstanceFilter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackInstanceFilter = exports.StackInstanceFilter || (exports.StackInstanceFilter = {})));
var ListStackInstancesInput;
(function (ListStackInstancesInput) {
  /**
   * @internal
   */
  ListStackInstancesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListStackInstancesInput = exports.ListStackInstancesInput || (exports.ListStackInstancesInput = {})));
var StackInstanceSummary;
(function (StackInstanceSummary) {
  /**
   * @internal
   */
  StackInstanceSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackInstanceSummary = exports.StackInstanceSummary || (exports.StackInstanceSummary = {})));
var ListStackInstancesOutput;
(function (ListStackInstancesOutput) {
  /**
   * @internal
   */
  ListStackInstancesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListStackInstancesOutput = exports.ListStackInstancesOutput || (exports.ListStackInstancesOutput = {})));
var ListStackResourcesInput;
(function (ListStackResourcesInput) {
  /**
   * @internal
   */
  ListStackResourcesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListStackResourcesInput = exports.ListStackResourcesInput || (exports.ListStackResourcesInput = {})));
var StackResourceDriftInformationSummary;
(function (StackResourceDriftInformationSummary) {
  /**
   * @internal
   */
  StackResourceDriftInformationSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StackResourceDriftInformationSummary =
    exports.StackResourceDriftInformationSummary || (exports.StackResourceDriftInformationSummary = {}))
);
var StackResourceSummary;
(function (StackResourceSummary) {
  /**
   * @internal
   */
  StackResourceSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackResourceSummary = exports.StackResourceSummary || (exports.StackResourceSummary = {})));
var ListStackResourcesOutput;
(function (ListStackResourcesOutput) {
  /**
   * @internal
   */
  ListStackResourcesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListStackResourcesOutput = exports.ListStackResourcesOutput || (exports.ListStackResourcesOutput = {})));
var ListStacksInput;
(function (ListStacksInput) {
  /**
   * @internal
   */
  ListStacksInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListStacksInput = exports.ListStacksInput || (exports.ListStacksInput = {})));
var StackDriftInformationSummary;
(function (StackDriftInformationSummary) {
  /**
   * @internal
   */
  StackDriftInformationSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StackDriftInformationSummary = exports.StackDriftInformationSummary || (exports.StackDriftInformationSummary = {}))
);
var StackSummary;
(function (StackSummary) {
  /**
   * @internal
   */
  StackSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackSummary = exports.StackSummary || (exports.StackSummary = {})));
var ListStacksOutput;
(function (ListStacksOutput) {
  /**
   * @internal
   */
  ListStacksOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListStacksOutput = exports.ListStacksOutput || (exports.ListStacksOutput = {})));
var ListStackSetOperationResultsInput;
(function (ListStackSetOperationResultsInput) {
  /**
   * @internal
   */
  ListStackSetOperationResultsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListStackSetOperationResultsInput =
    exports.ListStackSetOperationResultsInput || (exports.ListStackSetOperationResultsInput = {}))
);
var StackSetOperationResultSummary;
(function (StackSetOperationResultSummary) {
  /**
   * @internal
   */
  StackSetOperationResultSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (StackSetOperationResultSummary =
    exports.StackSetOperationResultSummary || (exports.StackSetOperationResultSummary = {}))
);
var ListStackSetOperationResultsOutput;
(function (ListStackSetOperationResultsOutput) {
  /**
   * @internal
   */
  ListStackSetOperationResultsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListStackSetOperationResultsOutput =
    exports.ListStackSetOperationResultsOutput || (exports.ListStackSetOperationResultsOutput = {}))
);
var ListStackSetOperationsInput;
(function (ListStackSetOperationsInput) {
  /**
   * @internal
   */
  ListStackSetOperationsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListStackSetOperationsInput = exports.ListStackSetOperationsInput || (exports.ListStackSetOperationsInput = {})));
var StackSetOperationSummary;
(function (StackSetOperationSummary) {
  /**
   * @internal
   */
  StackSetOperationSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackSetOperationSummary = exports.StackSetOperationSummary || (exports.StackSetOperationSummary = {})));
var ListStackSetOperationsOutput;
(function (ListStackSetOperationsOutput) {
  /**
   * @internal
   */
  ListStackSetOperationsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (ListStackSetOperationsOutput = exports.ListStackSetOperationsOutput || (exports.ListStackSetOperationsOutput = {}))
);
var ListStackSetsInput;
(function (ListStackSetsInput) {
  /**
   * @internal
   */
  ListStackSetsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListStackSetsInput = exports.ListStackSetsInput || (exports.ListStackSetsInput = {})));
var StackSetSummary;
(function (StackSetSummary) {
  /**
   * @internal
   */
  StackSetSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StackSetSummary = exports.StackSetSummary || (exports.StackSetSummary = {})));
var ListStackSetsOutput;
(function (ListStackSetsOutput) {
  /**
   * @internal
   */
  ListStackSetsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListStackSetsOutput = exports.ListStackSetsOutput || (exports.ListStackSetsOutput = {})));
var ListTypeRegistrationsInput;
(function (ListTypeRegistrationsInput) {
  /**
   * @internal
   */
  ListTypeRegistrationsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTypeRegistrationsInput = exports.ListTypeRegistrationsInput || (exports.ListTypeRegistrationsInput = {})));
var ListTypeRegistrationsOutput;
(function (ListTypeRegistrationsOutput) {
  /**
   * @internal
   */
  ListTypeRegistrationsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTypeRegistrationsOutput = exports.ListTypeRegistrationsOutput || (exports.ListTypeRegistrationsOutput = {})));
var ListTypesInput;
(function (ListTypesInput) {
  /**
   * @internal
   */
  ListTypesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTypesInput = exports.ListTypesInput || (exports.ListTypesInput = {})));
var TypeSummary;
(function (TypeSummary) {
  /**
   * @internal
   */
  TypeSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TypeSummary = exports.TypeSummary || (exports.TypeSummary = {})));
var ListTypesOutput;
(function (ListTypesOutput) {
  /**
   * @internal
   */
  ListTypesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTypesOutput = exports.ListTypesOutput || (exports.ListTypesOutput = {})));
var ListTypeVersionsInput;
(function (ListTypeVersionsInput) {
  /**
   * @internal
   */
  ListTypeVersionsInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTypeVersionsInput = exports.ListTypeVersionsInput || (exports.ListTypeVersionsInput = {})));
var TypeVersionSummary;
(function (TypeVersionSummary) {
  /**
   * @internal
   */
  TypeVersionSummary.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TypeVersionSummary = exports.TypeVersionSummary || (exports.TypeVersionSummary = {})));
var ListTypeVersionsOutput;
(function (ListTypeVersionsOutput) {
  /**
   * @internal
   */
  ListTypeVersionsOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ListTypeVersionsOutput = exports.ListTypeVersionsOutput || (exports.ListTypeVersionsOutput = {})));
var InvalidStateTransitionException;
(function (InvalidStateTransitionException) {
  /**
   * @internal
   */
  InvalidStateTransitionException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (InvalidStateTransitionException =
    exports.InvalidStateTransitionException || (exports.InvalidStateTransitionException = {}))
);
var OperationStatusCheckFailedException;
(function (OperationStatusCheckFailedException) {
  /**
   * @internal
   */
  OperationStatusCheckFailedException.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (OperationStatusCheckFailedException =
    exports.OperationStatusCheckFailedException || (exports.OperationStatusCheckFailedException = {}))
);
var OperationStatus;
(function (OperationStatus) {
  OperationStatus["FAILED"] = "FAILED";
  OperationStatus["IN_PROGRESS"] = "IN_PROGRESS";
  OperationStatus["PENDING"] = "PENDING";
  OperationStatus["SUCCESS"] = "SUCCESS";
})((OperationStatus = exports.OperationStatus || (exports.OperationStatus = {})));
var HandlerErrorCode;
(function (HandlerErrorCode) {
  HandlerErrorCode["AccessDenied"] = "AccessDenied";
  HandlerErrorCode["AlreadyExists"] = "AlreadyExists";
  HandlerErrorCode["GeneralServiceException"] = "GeneralServiceException";
  HandlerErrorCode["InternalFailure"] = "InternalFailure";
  HandlerErrorCode["InvalidCredentials"] = "InvalidCredentials";
  HandlerErrorCode["InvalidRequest"] = "InvalidRequest";
  HandlerErrorCode["NetworkFailure"] = "NetworkFailure";
  HandlerErrorCode["NotFound"] = "NotFound";
  HandlerErrorCode["NotUpdatable"] = "NotUpdatable";
  HandlerErrorCode["ResourceConflict"] = "ResourceConflict";
  HandlerErrorCode["ServiceInternalError"] = "ServiceInternalError";
  HandlerErrorCode["ServiceLimitExceeded"] = "ServiceLimitExceeded";
  HandlerErrorCode["ServiceTimeout"] = "NotStabilized";
  HandlerErrorCode["Throttling"] = "Throttling";
})((HandlerErrorCode = exports.HandlerErrorCode || (exports.HandlerErrorCode = {})));
var RecordHandlerProgressInput;
(function (RecordHandlerProgressInput) {
  /**
   * @internal
   */
  RecordHandlerProgressInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RecordHandlerProgressInput = exports.RecordHandlerProgressInput || (exports.RecordHandlerProgressInput = {})));
var RecordHandlerProgressOutput;
(function (RecordHandlerProgressOutput) {
  /**
   * @internal
   */
  RecordHandlerProgressOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RecordHandlerProgressOutput = exports.RecordHandlerProgressOutput || (exports.RecordHandlerProgressOutput = {})));
var RegisterTypeInput;
(function (RegisterTypeInput) {
  /**
   * @internal
   */
  RegisterTypeInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RegisterTypeInput = exports.RegisterTypeInput || (exports.RegisterTypeInput = {})));
var RegisterTypeOutput;
(function (RegisterTypeOutput) {
  /**
   * @internal
   */
  RegisterTypeOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((RegisterTypeOutput = exports.RegisterTypeOutput || (exports.RegisterTypeOutput = {})));
var SetStackPolicyInput;
(function (SetStackPolicyInput) {
  /**
   * @internal
   */
  SetStackPolicyInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SetStackPolicyInput = exports.SetStackPolicyInput || (exports.SetStackPolicyInput = {})));
var SetTypeDefaultVersionInput;
(function (SetTypeDefaultVersionInput) {
  /**
   * @internal
   */
  SetTypeDefaultVersionInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SetTypeDefaultVersionInput = exports.SetTypeDefaultVersionInput || (exports.SetTypeDefaultVersionInput = {})));
var SetTypeDefaultVersionOutput;
(function (SetTypeDefaultVersionOutput) {
  /**
   * @internal
   */
  SetTypeDefaultVersionOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SetTypeDefaultVersionOutput = exports.SetTypeDefaultVersionOutput || (exports.SetTypeDefaultVersionOutput = {})));
var ResourceSignalStatus;
(function (ResourceSignalStatus) {
  ResourceSignalStatus["FAILURE"] = "FAILURE";
  ResourceSignalStatus["SUCCESS"] = "SUCCESS";
})((ResourceSignalStatus = exports.ResourceSignalStatus || (exports.ResourceSignalStatus = {})));
var SignalResourceInput;
(function (SignalResourceInput) {
  /**
   * @internal
   */
  SignalResourceInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((SignalResourceInput = exports.SignalResourceInput || (exports.SignalResourceInput = {})));
var StopStackSetOperationInput;
(function (StopStackSetOperationInput) {
  /**
   * @internal
   */
  StopStackSetOperationInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopStackSetOperationInput = exports.StopStackSetOperationInput || (exports.StopStackSetOperationInput = {})));
var StopStackSetOperationOutput;
(function (StopStackSetOperationOutput) {
  /**
   * @internal
   */
  StopStackSetOperationOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((StopStackSetOperationOutput = exports.StopStackSetOperationOutput || (exports.StopStackSetOperationOutput = {})));
var UpdateStackInput;
(function (UpdateStackInput) {
  /**
   * @internal
   */
  UpdateStackInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateStackInput = exports.UpdateStackInput || (exports.UpdateStackInput = {})));
var UpdateStackOutput;
(function (UpdateStackOutput) {
  /**
   * @internal
   */
  UpdateStackOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateStackOutput = exports.UpdateStackOutput || (exports.UpdateStackOutput = {})));
var UpdateStackInstancesInput;
(function (UpdateStackInstancesInput) {
  /**
   * @internal
   */
  UpdateStackInstancesInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateStackInstancesInput = exports.UpdateStackInstancesInput || (exports.UpdateStackInstancesInput = {})));
var UpdateStackInstancesOutput;
(function (UpdateStackInstancesOutput) {
  /**
   * @internal
   */
  UpdateStackInstancesOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateStackInstancesOutput = exports.UpdateStackInstancesOutput || (exports.UpdateStackInstancesOutput = {})));
var UpdateStackSetInput;
(function (UpdateStackSetInput) {
  /**
   * @internal
   */
  UpdateStackSetInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateStackSetInput = exports.UpdateStackSetInput || (exports.UpdateStackSetInput = {})));
var UpdateStackSetOutput;
(function (UpdateStackSetOutput) {
  /**
   * @internal
   */
  UpdateStackSetOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((UpdateStackSetOutput = exports.UpdateStackSetOutput || (exports.UpdateStackSetOutput = {})));
var UpdateTerminationProtectionInput;
(function (UpdateTerminationProtectionInput) {
  /**
   * @internal
   */
  UpdateTerminationProtectionInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateTerminationProtectionInput =
    exports.UpdateTerminationProtectionInput || (exports.UpdateTerminationProtectionInput = {}))
);
var UpdateTerminationProtectionOutput;
(function (UpdateTerminationProtectionOutput) {
  /**
   * @internal
   */
  UpdateTerminationProtectionOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})(
  (UpdateTerminationProtectionOutput =
    exports.UpdateTerminationProtectionOutput || (exports.UpdateTerminationProtectionOutput = {}))
);
var ValidateTemplateInput;
(function (ValidateTemplateInput) {
  /**
   * @internal
   */
  ValidateTemplateInput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidateTemplateInput = exports.ValidateTemplateInput || (exports.ValidateTemplateInput = {})));
var TemplateParameter;
(function (TemplateParameter) {
  /**
   * @internal
   */
  TemplateParameter.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((TemplateParameter = exports.TemplateParameter || (exports.TemplateParameter = {})));
var ValidateTemplateOutput;
(function (ValidateTemplateOutput) {
  /**
   * @internal
   */
  ValidateTemplateOutput.filterSensitiveLog = (obj) => ({
    ...obj,
  });
})((ValidateTemplateOutput = exports.ValidateTemplateOutput || (exports.ValidateTemplateOutput = {})));
//# sourceMappingURL=models_0.js.map
