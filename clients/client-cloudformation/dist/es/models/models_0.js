import { __assign } from "tslib";
export var AccountGateResult;
(function (AccountGateResult) {
  /**
   * @internal
   */
  AccountGateResult.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccountGateResult || (AccountGateResult = {}));
export var AccountLimit;
(function (AccountLimit) {
  /**
   * @internal
   */
  AccountLimit.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AccountLimit || (AccountLimit = {}));
export var AlreadyExistsException;
(function (AlreadyExistsException) {
  /**
   * @internal
   */
  AlreadyExistsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AlreadyExistsException || (AlreadyExistsException = {}));
export var AutoDeployment;
(function (AutoDeployment) {
  /**
   * @internal
   */
  AutoDeployment.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(AutoDeployment || (AutoDeployment = {}));
export var CallAs;
(function (CallAs) {
  CallAs["DELEGATED_ADMIN"] = "DELEGATED_ADMIN";
  CallAs["SELF"] = "SELF";
})(CallAs || (CallAs = {}));
export var CancelUpdateStackInput;
(function (CancelUpdateStackInput) {
  /**
   * @internal
   */
  CancelUpdateStackInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CancelUpdateStackInput || (CancelUpdateStackInput = {}));
export var TokenAlreadyExistsException;
(function (TokenAlreadyExistsException) {
  /**
   * @internal
   */
  TokenAlreadyExistsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TokenAlreadyExistsException || (TokenAlreadyExistsException = {}));
export var Capability;
(function (Capability) {
  Capability["CAPABILITY_AUTO_EXPAND"] = "CAPABILITY_AUTO_EXPAND";
  Capability["CAPABILITY_IAM"] = "CAPABILITY_IAM";
  Capability["CAPABILITY_NAMED_IAM"] = "CAPABILITY_NAMED_IAM";
})(Capability || (Capability = {}));
export var CFNRegistryException;
(function (CFNRegistryException) {
  /**
   * @internal
   */
  CFNRegistryException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CFNRegistryException || (CFNRegistryException = {}));
export var ChangeAction;
(function (ChangeAction) {
  ChangeAction["Add"] = "Add";
  ChangeAction["Dynamic"] = "Dynamic";
  ChangeAction["Import"] = "Import";
  ChangeAction["Modify"] = "Modify";
  ChangeAction["Remove"] = "Remove";
})(ChangeAction || (ChangeAction = {}));
export var ChangeSource;
(function (ChangeSource) {
  ChangeSource["Automatic"] = "Automatic";
  ChangeSource["DirectModification"] = "DirectModification";
  ChangeSource["ParameterReference"] = "ParameterReference";
  ChangeSource["ResourceAttribute"] = "ResourceAttribute";
  ChangeSource["ResourceReference"] = "ResourceReference";
})(ChangeSource || (ChangeSource = {}));
export var EvaluationType;
(function (EvaluationType) {
  EvaluationType["Dynamic"] = "Dynamic";
  EvaluationType["Static"] = "Static";
})(EvaluationType || (EvaluationType = {}));
export var ResourceAttribute;
(function (ResourceAttribute) {
  ResourceAttribute["CreationPolicy"] = "CreationPolicy";
  ResourceAttribute["DeletionPolicy"] = "DeletionPolicy";
  ResourceAttribute["Metadata"] = "Metadata";
  ResourceAttribute["Properties"] = "Properties";
  ResourceAttribute["Tags"] = "Tags";
  ResourceAttribute["UpdatePolicy"] = "UpdatePolicy";
})(ResourceAttribute || (ResourceAttribute = {}));
export var RequiresRecreation;
(function (RequiresRecreation) {
  RequiresRecreation["Always"] = "Always";
  RequiresRecreation["Conditionally"] = "Conditionally";
  RequiresRecreation["Never"] = "Never";
})(RequiresRecreation || (RequiresRecreation = {}));
export var ResourceTargetDefinition;
(function (ResourceTargetDefinition) {
  /**
   * @internal
   */
  ResourceTargetDefinition.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceTargetDefinition || (ResourceTargetDefinition = {}));
export var ResourceChangeDetail;
(function (ResourceChangeDetail) {
  /**
   * @internal
   */
  ResourceChangeDetail.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceChangeDetail || (ResourceChangeDetail = {}));
export var ModuleInfo;
(function (ModuleInfo) {
  /**
   * @internal
   */
  ModuleInfo.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ModuleInfo || (ModuleInfo = {}));
export var Replacement;
(function (Replacement) {
  Replacement["Conditional"] = "Conditional";
  Replacement["False"] = "False";
  Replacement["True"] = "True";
})(Replacement || (Replacement = {}));
export var ResourceChange;
(function (ResourceChange) {
  /**
   * @internal
   */
  ResourceChange.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceChange || (ResourceChange = {}));
export var ChangeType;
(function (ChangeType) {
  ChangeType["Resource"] = "Resource";
})(ChangeType || (ChangeType = {}));
export var Change;
(function (Change) {
  /**
   * @internal
   */
  Change.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Change || (Change = {}));
export var ChangeSetNotFoundException;
(function (ChangeSetNotFoundException) {
  /**
   * @internal
   */
  ChangeSetNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ChangeSetNotFoundException || (ChangeSetNotFoundException = {}));
export var ChangeSetStatus;
(function (ChangeSetStatus) {
  ChangeSetStatus["CREATE_COMPLETE"] = "CREATE_COMPLETE";
  ChangeSetStatus["CREATE_IN_PROGRESS"] = "CREATE_IN_PROGRESS";
  ChangeSetStatus["CREATE_PENDING"] = "CREATE_PENDING";
  ChangeSetStatus["DELETE_COMPLETE"] = "DELETE_COMPLETE";
  ChangeSetStatus["DELETE_FAILED"] = "DELETE_FAILED";
  ChangeSetStatus["DELETE_IN_PROGRESS"] = "DELETE_IN_PROGRESS";
  ChangeSetStatus["DELETE_PENDING"] = "DELETE_PENDING";
  ChangeSetStatus["FAILED"] = "FAILED";
})(ChangeSetStatus || (ChangeSetStatus = {}));
export var ExecutionStatus;
(function (ExecutionStatus) {
  ExecutionStatus["AVAILABLE"] = "AVAILABLE";
  ExecutionStatus["EXECUTE_COMPLETE"] = "EXECUTE_COMPLETE";
  ExecutionStatus["EXECUTE_FAILED"] = "EXECUTE_FAILED";
  ExecutionStatus["EXECUTE_IN_PROGRESS"] = "EXECUTE_IN_PROGRESS";
  ExecutionStatus["OBSOLETE"] = "OBSOLETE";
  ExecutionStatus["UNAVAILABLE"] = "UNAVAILABLE";
})(ExecutionStatus || (ExecutionStatus = {}));
export var ChangeSetSummary;
(function (ChangeSetSummary) {
  /**
   * @internal
   */
  ChangeSetSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ChangeSetSummary || (ChangeSetSummary = {}));
export var ChangeSetType;
(function (ChangeSetType) {
  ChangeSetType["CREATE"] = "CREATE";
  ChangeSetType["IMPORT"] = "IMPORT";
  ChangeSetType["UPDATE"] = "UPDATE";
})(ChangeSetType || (ChangeSetType = {}));
export var ContinueUpdateRollbackInput;
(function (ContinueUpdateRollbackInput) {
  /**
   * @internal
   */
  ContinueUpdateRollbackInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ContinueUpdateRollbackInput || (ContinueUpdateRollbackInput = {}));
export var ContinueUpdateRollbackOutput;
(function (ContinueUpdateRollbackOutput) {
  /**
   * @internal
   */
  ContinueUpdateRollbackOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ContinueUpdateRollbackOutput || (ContinueUpdateRollbackOutput = {}));
export var Parameter;
(function (Parameter) {
  /**
   * @internal
   */
  Parameter.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Parameter || (Parameter = {}));
export var ResourceToImport;
(function (ResourceToImport) {
  /**
   * @internal
   */
  ResourceToImport.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceToImport || (ResourceToImport = {}));
export var RollbackTrigger;
(function (RollbackTrigger) {
  /**
   * @internal
   */
  RollbackTrigger.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RollbackTrigger || (RollbackTrigger = {}));
export var RollbackConfiguration;
(function (RollbackConfiguration) {
  /**
   * @internal
   */
  RollbackConfiguration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RollbackConfiguration || (RollbackConfiguration = {}));
export var Tag;
(function (Tag) {
  /**
   * @internal
   */
  Tag.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Tag || (Tag = {}));
export var CreateChangeSetInput;
(function (CreateChangeSetInput) {
  /**
   * @internal
   */
  CreateChangeSetInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateChangeSetInput || (CreateChangeSetInput = {}));
export var CreateChangeSetOutput;
(function (CreateChangeSetOutput) {
  /**
   * @internal
   */
  CreateChangeSetOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateChangeSetOutput || (CreateChangeSetOutput = {}));
export var InsufficientCapabilitiesException;
(function (InsufficientCapabilitiesException) {
  /**
   * @internal
   */
  InsufficientCapabilitiesException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InsufficientCapabilitiesException || (InsufficientCapabilitiesException = {}));
export var LimitExceededException;
(function (LimitExceededException) {
  /**
   * @internal
   */
  LimitExceededException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LimitExceededException || (LimitExceededException = {}));
export var OnFailure;
(function (OnFailure) {
  OnFailure["DELETE"] = "DELETE";
  OnFailure["DO_NOTHING"] = "DO_NOTHING";
  OnFailure["ROLLBACK"] = "ROLLBACK";
})(OnFailure || (OnFailure = {}));
export var CreateStackInput;
(function (CreateStackInput) {
  /**
   * @internal
   */
  CreateStackInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStackInput || (CreateStackInput = {}));
export var CreateStackOutput;
(function (CreateStackOutput) {
  /**
   * @internal
   */
  CreateStackOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStackOutput || (CreateStackOutput = {}));
export var DeploymentTargets;
(function (DeploymentTargets) {
  /**
   * @internal
   */
  DeploymentTargets.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeploymentTargets || (DeploymentTargets = {}));
export var RegionConcurrencyType;
(function (RegionConcurrencyType) {
  RegionConcurrencyType["PARALLEL"] = "PARALLEL";
  RegionConcurrencyType["SEQUENTIAL"] = "SEQUENTIAL";
})(RegionConcurrencyType || (RegionConcurrencyType = {}));
export var StackSetOperationPreferences;
(function (StackSetOperationPreferences) {
  /**
   * @internal
   */
  StackSetOperationPreferences.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackSetOperationPreferences || (StackSetOperationPreferences = {}));
export var CreateStackInstancesInput;
(function (CreateStackInstancesInput) {
  /**
   * @internal
   */
  CreateStackInstancesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStackInstancesInput || (CreateStackInstancesInput = {}));
export var CreateStackInstancesOutput;
(function (CreateStackInstancesOutput) {
  /**
   * @internal
   */
  CreateStackInstancesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStackInstancesOutput || (CreateStackInstancesOutput = {}));
export var InvalidOperationException;
(function (InvalidOperationException) {
  /**
   * @internal
   */
  InvalidOperationException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidOperationException || (InvalidOperationException = {}));
export var OperationIdAlreadyExistsException;
(function (OperationIdAlreadyExistsException) {
  /**
   * @internal
   */
  OperationIdAlreadyExistsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OperationIdAlreadyExistsException || (OperationIdAlreadyExistsException = {}));
export var OperationInProgressException;
(function (OperationInProgressException) {
  /**
   * @internal
   */
  OperationInProgressException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OperationInProgressException || (OperationInProgressException = {}));
export var StackSetNotFoundException;
(function (StackSetNotFoundException) {
  /**
   * @internal
   */
  StackSetNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackSetNotFoundException || (StackSetNotFoundException = {}));
export var StaleRequestException;
(function (StaleRequestException) {
  /**
   * @internal
   */
  StaleRequestException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StaleRequestException || (StaleRequestException = {}));
export var CreatedButModifiedException;
(function (CreatedButModifiedException) {
  /**
   * @internal
   */
  CreatedButModifiedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreatedButModifiedException || (CreatedButModifiedException = {}));
export var CreateStackSetInput;
(function (CreateStackSetInput) {
  /**
   * @internal
   */
  CreateStackSetInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStackSetInput || (CreateStackSetInput = {}));
export var CreateStackSetOutput;
(function (CreateStackSetOutput) {
  /**
   * @internal
   */
  CreateStackSetOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(CreateStackSetOutput || (CreateStackSetOutput = {}));
export var NameAlreadyExistsException;
(function (NameAlreadyExistsException) {
  /**
   * @internal
   */
  NameAlreadyExistsException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(NameAlreadyExistsException || (NameAlreadyExistsException = {}));
export var DeleteChangeSetInput;
(function (DeleteChangeSetInput) {
  /**
   * @internal
   */
  DeleteChangeSetInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteChangeSetInput || (DeleteChangeSetInput = {}));
export var DeleteChangeSetOutput;
(function (DeleteChangeSetOutput) {
  /**
   * @internal
   */
  DeleteChangeSetOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteChangeSetOutput || (DeleteChangeSetOutput = {}));
export var InvalidChangeSetStatusException;
(function (InvalidChangeSetStatusException) {
  /**
   * @internal
   */
  InvalidChangeSetStatusException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidChangeSetStatusException || (InvalidChangeSetStatusException = {}));
export var DeleteStackInput;
(function (DeleteStackInput) {
  /**
   * @internal
   */
  DeleteStackInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteStackInput || (DeleteStackInput = {}));
export var DeleteStackInstancesInput;
(function (DeleteStackInstancesInput) {
  /**
   * @internal
   */
  DeleteStackInstancesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteStackInstancesInput || (DeleteStackInstancesInput = {}));
export var DeleteStackInstancesOutput;
(function (DeleteStackInstancesOutput) {
  /**
   * @internal
   */
  DeleteStackInstancesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteStackInstancesOutput || (DeleteStackInstancesOutput = {}));
export var DeleteStackSetInput;
(function (DeleteStackSetInput) {
  /**
   * @internal
   */
  DeleteStackSetInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteStackSetInput || (DeleteStackSetInput = {}));
export var DeleteStackSetOutput;
(function (DeleteStackSetOutput) {
  /**
   * @internal
   */
  DeleteStackSetOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeleteStackSetOutput || (DeleteStackSetOutput = {}));
export var StackSetNotEmptyException;
(function (StackSetNotEmptyException) {
  /**
   * @internal
   */
  StackSetNotEmptyException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackSetNotEmptyException || (StackSetNotEmptyException = {}));
export var DeregisterTypeInput;
(function (DeregisterTypeInput) {
  /**
   * @internal
   */
  DeregisterTypeInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeregisterTypeInput || (DeregisterTypeInput = {}));
export var DeregisterTypeOutput;
(function (DeregisterTypeOutput) {
  /**
   * @internal
   */
  DeregisterTypeOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DeregisterTypeOutput || (DeregisterTypeOutput = {}));
export var TypeNotFoundException;
(function (TypeNotFoundException) {
  /**
   * @internal
   */
  TypeNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TypeNotFoundException || (TypeNotFoundException = {}));
export var DescribeAccountLimitsInput;
(function (DescribeAccountLimitsInput) {
  /**
   * @internal
   */
  DescribeAccountLimitsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeAccountLimitsInput || (DescribeAccountLimitsInput = {}));
export var DescribeAccountLimitsOutput;
(function (DescribeAccountLimitsOutput) {
  /**
   * @internal
   */
  DescribeAccountLimitsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeAccountLimitsOutput || (DescribeAccountLimitsOutput = {}));
export var DescribeChangeSetInput;
(function (DescribeChangeSetInput) {
  /**
   * @internal
   */
  DescribeChangeSetInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeChangeSetInput || (DescribeChangeSetInput = {}));
export var DescribeChangeSetOutput;
(function (DescribeChangeSetOutput) {
  /**
   * @internal
   */
  DescribeChangeSetOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeChangeSetOutput || (DescribeChangeSetOutput = {}));
export var DescribeStackDriftDetectionStatusInput;
(function (DescribeStackDriftDetectionStatusInput) {
  /**
   * @internal
   */
  DescribeStackDriftDetectionStatusInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackDriftDetectionStatusInput || (DescribeStackDriftDetectionStatusInput = {}));
export var StackDriftDetectionStatus;
(function (StackDriftDetectionStatus) {
  StackDriftDetectionStatus["DETECTION_COMPLETE"] = "DETECTION_COMPLETE";
  StackDriftDetectionStatus["DETECTION_FAILED"] = "DETECTION_FAILED";
  StackDriftDetectionStatus["DETECTION_IN_PROGRESS"] = "DETECTION_IN_PROGRESS";
})(StackDriftDetectionStatus || (StackDriftDetectionStatus = {}));
export var StackDriftStatus;
(function (StackDriftStatus) {
  StackDriftStatus["DRIFTED"] = "DRIFTED";
  StackDriftStatus["IN_SYNC"] = "IN_SYNC";
  StackDriftStatus["NOT_CHECKED"] = "NOT_CHECKED";
  StackDriftStatus["UNKNOWN"] = "UNKNOWN";
})(StackDriftStatus || (StackDriftStatus = {}));
export var DescribeStackDriftDetectionStatusOutput;
(function (DescribeStackDriftDetectionStatusOutput) {
  /**
   * @internal
   */
  DescribeStackDriftDetectionStatusOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackDriftDetectionStatusOutput || (DescribeStackDriftDetectionStatusOutput = {}));
export var DescribeStackEventsInput;
(function (DescribeStackEventsInput) {
  /**
   * @internal
   */
  DescribeStackEventsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackEventsInput || (DescribeStackEventsInput = {}));
export var ResourceStatus;
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
})(ResourceStatus || (ResourceStatus = {}));
export var StackEvent;
(function (StackEvent) {
  /**
   * @internal
   */
  StackEvent.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackEvent || (StackEvent = {}));
export var DescribeStackEventsOutput;
(function (DescribeStackEventsOutput) {
  /**
   * @internal
   */
  DescribeStackEventsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackEventsOutput || (DescribeStackEventsOutput = {}));
export var DescribeStackInstanceInput;
(function (DescribeStackInstanceInput) {
  /**
   * @internal
   */
  DescribeStackInstanceInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackInstanceInput || (DescribeStackInstanceInput = {}));
export var StackInstanceComprehensiveStatus;
(function (StackInstanceComprehensiveStatus) {
  /**
   * @internal
   */
  StackInstanceComprehensiveStatus.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackInstanceComprehensiveStatus || (StackInstanceComprehensiveStatus = {}));
export var StackInstance;
(function (StackInstance) {
  /**
   * @internal
   */
  StackInstance.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackInstance || (StackInstance = {}));
export var DescribeStackInstanceOutput;
(function (DescribeStackInstanceOutput) {
  /**
   * @internal
   */
  DescribeStackInstanceOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackInstanceOutput || (DescribeStackInstanceOutput = {}));
export var StackInstanceNotFoundException;
(function (StackInstanceNotFoundException) {
  /**
   * @internal
   */
  StackInstanceNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackInstanceNotFoundException || (StackInstanceNotFoundException = {}));
export var DescribeStackResourceInput;
(function (DescribeStackResourceInput) {
  /**
   * @internal
   */
  DescribeStackResourceInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackResourceInput || (DescribeStackResourceInput = {}));
export var StackResourceDriftStatus;
(function (StackResourceDriftStatus) {
  StackResourceDriftStatus["DELETED"] = "DELETED";
  StackResourceDriftStatus["IN_SYNC"] = "IN_SYNC";
  StackResourceDriftStatus["MODIFIED"] = "MODIFIED";
  StackResourceDriftStatus["NOT_CHECKED"] = "NOT_CHECKED";
})(StackResourceDriftStatus || (StackResourceDriftStatus = {}));
export var StackResourceDriftInformation;
(function (StackResourceDriftInformation) {
  /**
   * @internal
   */
  StackResourceDriftInformation.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackResourceDriftInformation || (StackResourceDriftInformation = {}));
export var StackResourceDetail;
(function (StackResourceDetail) {
  /**
   * @internal
   */
  StackResourceDetail.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackResourceDetail || (StackResourceDetail = {}));
export var DescribeStackResourceOutput;
(function (DescribeStackResourceOutput) {
  /**
   * @internal
   */
  DescribeStackResourceOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackResourceOutput || (DescribeStackResourceOutput = {}));
export var DescribeStackResourceDriftsInput;
(function (DescribeStackResourceDriftsInput) {
  /**
   * @internal
   */
  DescribeStackResourceDriftsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackResourceDriftsInput || (DescribeStackResourceDriftsInput = {}));
export var PhysicalResourceIdContextKeyValuePair;
(function (PhysicalResourceIdContextKeyValuePair) {
  /**
   * @internal
   */
  PhysicalResourceIdContextKeyValuePair.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PhysicalResourceIdContextKeyValuePair || (PhysicalResourceIdContextKeyValuePair = {}));
export var DifferenceType;
(function (DifferenceType) {
  DifferenceType["ADD"] = "ADD";
  DifferenceType["NOT_EQUAL"] = "NOT_EQUAL";
  DifferenceType["REMOVE"] = "REMOVE";
})(DifferenceType || (DifferenceType = {}));
export var PropertyDifference;
(function (PropertyDifference) {
  /**
   * @internal
   */
  PropertyDifference.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(PropertyDifference || (PropertyDifference = {}));
export var StackResourceDrift;
(function (StackResourceDrift) {
  /**
   * @internal
   */
  StackResourceDrift.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackResourceDrift || (StackResourceDrift = {}));
export var DescribeStackResourceDriftsOutput;
(function (DescribeStackResourceDriftsOutput) {
  /**
   * @internal
   */
  DescribeStackResourceDriftsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackResourceDriftsOutput || (DescribeStackResourceDriftsOutput = {}));
export var DescribeStackResourcesInput;
(function (DescribeStackResourcesInput) {
  /**
   * @internal
   */
  DescribeStackResourcesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackResourcesInput || (DescribeStackResourcesInput = {}));
export var StackResource;
(function (StackResource) {
  /**
   * @internal
   */
  StackResource.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackResource || (StackResource = {}));
export var DescribeStackResourcesOutput;
(function (DescribeStackResourcesOutput) {
  /**
   * @internal
   */
  DescribeStackResourcesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackResourcesOutput || (DescribeStackResourcesOutput = {}));
export var DescribeStacksInput;
(function (DescribeStacksInput) {
  /**
   * @internal
   */
  DescribeStacksInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStacksInput || (DescribeStacksInput = {}));
export var StackDriftInformation;
(function (StackDriftInformation) {
  /**
   * @internal
   */
  StackDriftInformation.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackDriftInformation || (StackDriftInformation = {}));
export var Output;
(function (Output) {
  /**
   * @internal
   */
  Output.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Output || (Output = {}));
export var StackStatus;
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
})(StackStatus || (StackStatus = {}));
export var Stack;
(function (Stack) {
  /**
   * @internal
   */
  Stack.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Stack || (Stack = {}));
export var DescribeStacksOutput;
(function (DescribeStacksOutput) {
  /**
   * @internal
   */
  DescribeStacksOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStacksOutput || (DescribeStacksOutput = {}));
export var DescribeStackSetInput;
(function (DescribeStackSetInput) {
  /**
   * @internal
   */
  DescribeStackSetInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackSetInput || (DescribeStackSetInput = {}));
export var StackSetDriftDetectionStatus;
(function (StackSetDriftDetectionStatus) {
  StackSetDriftDetectionStatus["COMPLETED"] = "COMPLETED";
  StackSetDriftDetectionStatus["FAILED"] = "FAILED";
  StackSetDriftDetectionStatus["IN_PROGRESS"] = "IN_PROGRESS";
  StackSetDriftDetectionStatus["PARTIAL_SUCCESS"] = "PARTIAL_SUCCESS";
  StackSetDriftDetectionStatus["STOPPED"] = "STOPPED";
})(StackSetDriftDetectionStatus || (StackSetDriftDetectionStatus = {}));
export var StackSetDriftStatus;
(function (StackSetDriftStatus) {
  StackSetDriftStatus["DRIFTED"] = "DRIFTED";
  StackSetDriftStatus["IN_SYNC"] = "IN_SYNC";
  StackSetDriftStatus["NOT_CHECKED"] = "NOT_CHECKED";
})(StackSetDriftStatus || (StackSetDriftStatus = {}));
export var StackSetDriftDetectionDetails;
(function (StackSetDriftDetectionDetails) {
  /**
   * @internal
   */
  StackSetDriftDetectionDetails.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackSetDriftDetectionDetails || (StackSetDriftDetectionDetails = {}));
export var StackSet;
(function (StackSet) {
  /**
   * @internal
   */
  StackSet.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackSet || (StackSet = {}));
export var DescribeStackSetOutput;
(function (DescribeStackSetOutput) {
  /**
   * @internal
   */
  DescribeStackSetOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackSetOutput || (DescribeStackSetOutput = {}));
export var DescribeStackSetOperationInput;
(function (DescribeStackSetOperationInput) {
  /**
   * @internal
   */
  DescribeStackSetOperationInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackSetOperationInput || (DescribeStackSetOperationInput = {}));
export var StackSetOperation;
(function (StackSetOperation) {
  /**
   * @internal
   */
  StackSetOperation.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackSetOperation || (StackSetOperation = {}));
export var DescribeStackSetOperationOutput;
(function (DescribeStackSetOperationOutput) {
  /**
   * @internal
   */
  DescribeStackSetOperationOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeStackSetOperationOutput || (DescribeStackSetOperationOutput = {}));
export var OperationNotFoundException;
(function (OperationNotFoundException) {
  /**
   * @internal
   */
  OperationNotFoundException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OperationNotFoundException || (OperationNotFoundException = {}));
export var DescribeTypeInput;
(function (DescribeTypeInput) {
  /**
   * @internal
   */
  DescribeTypeInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeTypeInput || (DescribeTypeInput = {}));
export var LoggingConfig;
(function (LoggingConfig) {
  /**
   * @internal
   */
  LoggingConfig.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(LoggingConfig || (LoggingConfig = {}));
export var DescribeTypeOutput;
(function (DescribeTypeOutput) {
  /**
   * @internal
   */
  DescribeTypeOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeTypeOutput || (DescribeTypeOutput = {}));
export var DescribeTypeRegistrationInput;
(function (DescribeTypeRegistrationInput) {
  /**
   * @internal
   */
  DescribeTypeRegistrationInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeTypeRegistrationInput || (DescribeTypeRegistrationInput = {}));
export var DescribeTypeRegistrationOutput;
(function (DescribeTypeRegistrationOutput) {
  /**
   * @internal
   */
  DescribeTypeRegistrationOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DescribeTypeRegistrationOutput || (DescribeTypeRegistrationOutput = {}));
export var DetectStackDriftInput;
(function (DetectStackDriftInput) {
  /**
   * @internal
   */
  DetectStackDriftInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetectStackDriftInput || (DetectStackDriftInput = {}));
export var DetectStackDriftOutput;
(function (DetectStackDriftOutput) {
  /**
   * @internal
   */
  DetectStackDriftOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetectStackDriftOutput || (DetectStackDriftOutput = {}));
export var DetectStackResourceDriftInput;
(function (DetectStackResourceDriftInput) {
  /**
   * @internal
   */
  DetectStackResourceDriftInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetectStackResourceDriftInput || (DetectStackResourceDriftInput = {}));
export var DetectStackResourceDriftOutput;
(function (DetectStackResourceDriftOutput) {
  /**
   * @internal
   */
  DetectStackResourceDriftOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetectStackResourceDriftOutput || (DetectStackResourceDriftOutput = {}));
export var DetectStackSetDriftInput;
(function (DetectStackSetDriftInput) {
  /**
   * @internal
   */
  DetectStackSetDriftInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetectStackSetDriftInput || (DetectStackSetDriftInput = {}));
export var DetectStackSetDriftOutput;
(function (DetectStackSetDriftOutput) {
  /**
   * @internal
   */
  DetectStackSetDriftOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(DetectStackSetDriftOutput || (DetectStackSetDriftOutput = {}));
export var EstimateTemplateCostInput;
(function (EstimateTemplateCostInput) {
  /**
   * @internal
   */
  EstimateTemplateCostInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EstimateTemplateCostInput || (EstimateTemplateCostInput = {}));
export var EstimateTemplateCostOutput;
(function (EstimateTemplateCostOutput) {
  /**
   * @internal
   */
  EstimateTemplateCostOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(EstimateTemplateCostOutput || (EstimateTemplateCostOutput = {}));
export var ExecuteChangeSetInput;
(function (ExecuteChangeSetInput) {
  /**
   * @internal
   */
  ExecuteChangeSetInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExecuteChangeSetInput || (ExecuteChangeSetInput = {}));
export var ExecuteChangeSetOutput;
(function (ExecuteChangeSetOutput) {
  /**
   * @internal
   */
  ExecuteChangeSetOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ExecuteChangeSetOutput || (ExecuteChangeSetOutput = {}));
export var GetStackPolicyInput;
(function (GetStackPolicyInput) {
  /**
   * @internal
   */
  GetStackPolicyInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetStackPolicyInput || (GetStackPolicyInput = {}));
export var GetStackPolicyOutput;
(function (GetStackPolicyOutput) {
  /**
   * @internal
   */
  GetStackPolicyOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetStackPolicyOutput || (GetStackPolicyOutput = {}));
export var TemplateStage;
(function (TemplateStage) {
  TemplateStage["Original"] = "Original";
  TemplateStage["Processed"] = "Processed";
})(TemplateStage || (TemplateStage = {}));
export var GetTemplateInput;
(function (GetTemplateInput) {
  /**
   * @internal
   */
  GetTemplateInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTemplateInput || (GetTemplateInput = {}));
export var GetTemplateOutput;
(function (GetTemplateOutput) {
  /**
   * @internal
   */
  GetTemplateOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTemplateOutput || (GetTemplateOutput = {}));
export var GetTemplateSummaryInput;
(function (GetTemplateSummaryInput) {
  /**
   * @internal
   */
  GetTemplateSummaryInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTemplateSummaryInput || (GetTemplateSummaryInput = {}));
export var ParameterConstraints;
(function (ParameterConstraints) {
  /**
   * @internal
   */
  ParameterConstraints.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ParameterConstraints || (ParameterConstraints = {}));
export var ParameterDeclaration;
(function (ParameterDeclaration) {
  /**
   * @internal
   */
  ParameterDeclaration.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ParameterDeclaration || (ParameterDeclaration = {}));
export var ResourceIdentifierSummary;
(function (ResourceIdentifierSummary) {
  /**
   * @internal
   */
  ResourceIdentifierSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ResourceIdentifierSummary || (ResourceIdentifierSummary = {}));
export var GetTemplateSummaryOutput;
(function (GetTemplateSummaryOutput) {
  /**
   * @internal
   */
  GetTemplateSummaryOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(GetTemplateSummaryOutput || (GetTemplateSummaryOutput = {}));
export var ListChangeSetsInput;
(function (ListChangeSetsInput) {
  /**
   * @internal
   */
  ListChangeSetsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListChangeSetsInput || (ListChangeSetsInput = {}));
export var ListChangeSetsOutput;
(function (ListChangeSetsOutput) {
  /**
   * @internal
   */
  ListChangeSetsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListChangeSetsOutput || (ListChangeSetsOutput = {}));
export var ListExportsInput;
(function (ListExportsInput) {
  /**
   * @internal
   */
  ListExportsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListExportsInput || (ListExportsInput = {}));
export var Export;
(function (Export) {
  /**
   * @internal
   */
  Export.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(Export || (Export = {}));
export var ListExportsOutput;
(function (ListExportsOutput) {
  /**
   * @internal
   */
  ListExportsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListExportsOutput || (ListExportsOutput = {}));
export var ListImportsInput;
(function (ListImportsInput) {
  /**
   * @internal
   */
  ListImportsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListImportsInput || (ListImportsInput = {}));
export var ListImportsOutput;
(function (ListImportsOutput) {
  /**
   * @internal
   */
  ListImportsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListImportsOutput || (ListImportsOutput = {}));
export var StackInstanceFilter;
(function (StackInstanceFilter) {
  /**
   * @internal
   */
  StackInstanceFilter.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackInstanceFilter || (StackInstanceFilter = {}));
export var ListStackInstancesInput;
(function (ListStackInstancesInput) {
  /**
   * @internal
   */
  ListStackInstancesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStackInstancesInput || (ListStackInstancesInput = {}));
export var StackInstanceSummary;
(function (StackInstanceSummary) {
  /**
   * @internal
   */
  StackInstanceSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackInstanceSummary || (StackInstanceSummary = {}));
export var ListStackInstancesOutput;
(function (ListStackInstancesOutput) {
  /**
   * @internal
   */
  ListStackInstancesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStackInstancesOutput || (ListStackInstancesOutput = {}));
export var ListStackResourcesInput;
(function (ListStackResourcesInput) {
  /**
   * @internal
   */
  ListStackResourcesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStackResourcesInput || (ListStackResourcesInput = {}));
export var StackResourceDriftInformationSummary;
(function (StackResourceDriftInformationSummary) {
  /**
   * @internal
   */
  StackResourceDriftInformationSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackResourceDriftInformationSummary || (StackResourceDriftInformationSummary = {}));
export var StackResourceSummary;
(function (StackResourceSummary) {
  /**
   * @internal
   */
  StackResourceSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackResourceSummary || (StackResourceSummary = {}));
export var ListStackResourcesOutput;
(function (ListStackResourcesOutput) {
  /**
   * @internal
   */
  ListStackResourcesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStackResourcesOutput || (ListStackResourcesOutput = {}));
export var ListStacksInput;
(function (ListStacksInput) {
  /**
   * @internal
   */
  ListStacksInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStacksInput || (ListStacksInput = {}));
export var StackDriftInformationSummary;
(function (StackDriftInformationSummary) {
  /**
   * @internal
   */
  StackDriftInformationSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackDriftInformationSummary || (StackDriftInformationSummary = {}));
export var StackSummary;
(function (StackSummary) {
  /**
   * @internal
   */
  StackSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackSummary || (StackSummary = {}));
export var ListStacksOutput;
(function (ListStacksOutput) {
  /**
   * @internal
   */
  ListStacksOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStacksOutput || (ListStacksOutput = {}));
export var ListStackSetOperationResultsInput;
(function (ListStackSetOperationResultsInput) {
  /**
   * @internal
   */
  ListStackSetOperationResultsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStackSetOperationResultsInput || (ListStackSetOperationResultsInput = {}));
export var StackSetOperationResultSummary;
(function (StackSetOperationResultSummary) {
  /**
   * @internal
   */
  StackSetOperationResultSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackSetOperationResultSummary || (StackSetOperationResultSummary = {}));
export var ListStackSetOperationResultsOutput;
(function (ListStackSetOperationResultsOutput) {
  /**
   * @internal
   */
  ListStackSetOperationResultsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStackSetOperationResultsOutput || (ListStackSetOperationResultsOutput = {}));
export var ListStackSetOperationsInput;
(function (ListStackSetOperationsInput) {
  /**
   * @internal
   */
  ListStackSetOperationsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStackSetOperationsInput || (ListStackSetOperationsInput = {}));
export var StackSetOperationSummary;
(function (StackSetOperationSummary) {
  /**
   * @internal
   */
  StackSetOperationSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackSetOperationSummary || (StackSetOperationSummary = {}));
export var ListStackSetOperationsOutput;
(function (ListStackSetOperationsOutput) {
  /**
   * @internal
   */
  ListStackSetOperationsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStackSetOperationsOutput || (ListStackSetOperationsOutput = {}));
export var ListStackSetsInput;
(function (ListStackSetsInput) {
  /**
   * @internal
   */
  ListStackSetsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStackSetsInput || (ListStackSetsInput = {}));
export var StackSetSummary;
(function (StackSetSummary) {
  /**
   * @internal
   */
  StackSetSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StackSetSummary || (StackSetSummary = {}));
export var ListStackSetsOutput;
(function (ListStackSetsOutput) {
  /**
   * @internal
   */
  ListStackSetsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListStackSetsOutput || (ListStackSetsOutput = {}));
export var ListTypeRegistrationsInput;
(function (ListTypeRegistrationsInput) {
  /**
   * @internal
   */
  ListTypeRegistrationsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTypeRegistrationsInput || (ListTypeRegistrationsInput = {}));
export var ListTypeRegistrationsOutput;
(function (ListTypeRegistrationsOutput) {
  /**
   * @internal
   */
  ListTypeRegistrationsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTypeRegistrationsOutput || (ListTypeRegistrationsOutput = {}));
export var ListTypesInput;
(function (ListTypesInput) {
  /**
   * @internal
   */
  ListTypesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTypesInput || (ListTypesInput = {}));
export var TypeSummary;
(function (TypeSummary) {
  /**
   * @internal
   */
  TypeSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TypeSummary || (TypeSummary = {}));
export var ListTypesOutput;
(function (ListTypesOutput) {
  /**
   * @internal
   */
  ListTypesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTypesOutput || (ListTypesOutput = {}));
export var ListTypeVersionsInput;
(function (ListTypeVersionsInput) {
  /**
   * @internal
   */
  ListTypeVersionsInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTypeVersionsInput || (ListTypeVersionsInput = {}));
export var TypeVersionSummary;
(function (TypeVersionSummary) {
  /**
   * @internal
   */
  TypeVersionSummary.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TypeVersionSummary || (TypeVersionSummary = {}));
export var ListTypeVersionsOutput;
(function (ListTypeVersionsOutput) {
  /**
   * @internal
   */
  ListTypeVersionsOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ListTypeVersionsOutput || (ListTypeVersionsOutput = {}));
export var InvalidStateTransitionException;
(function (InvalidStateTransitionException) {
  /**
   * @internal
   */
  InvalidStateTransitionException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(InvalidStateTransitionException || (InvalidStateTransitionException = {}));
export var OperationStatusCheckFailedException;
(function (OperationStatusCheckFailedException) {
  /**
   * @internal
   */
  OperationStatusCheckFailedException.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(OperationStatusCheckFailedException || (OperationStatusCheckFailedException = {}));
export var OperationStatus;
(function (OperationStatus) {
  OperationStatus["FAILED"] = "FAILED";
  OperationStatus["IN_PROGRESS"] = "IN_PROGRESS";
  OperationStatus["PENDING"] = "PENDING";
  OperationStatus["SUCCESS"] = "SUCCESS";
})(OperationStatus || (OperationStatus = {}));
export var HandlerErrorCode;
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
})(HandlerErrorCode || (HandlerErrorCode = {}));
export var RecordHandlerProgressInput;
(function (RecordHandlerProgressInput) {
  /**
   * @internal
   */
  RecordHandlerProgressInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RecordHandlerProgressInput || (RecordHandlerProgressInput = {}));
export var RecordHandlerProgressOutput;
(function (RecordHandlerProgressOutput) {
  /**
   * @internal
   */
  RecordHandlerProgressOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RecordHandlerProgressOutput || (RecordHandlerProgressOutput = {}));
export var RegisterTypeInput;
(function (RegisterTypeInput) {
  /**
   * @internal
   */
  RegisterTypeInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RegisterTypeInput || (RegisterTypeInput = {}));
export var RegisterTypeOutput;
(function (RegisterTypeOutput) {
  /**
   * @internal
   */
  RegisterTypeOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(RegisterTypeOutput || (RegisterTypeOutput = {}));
export var SetStackPolicyInput;
(function (SetStackPolicyInput) {
  /**
   * @internal
   */
  SetStackPolicyInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SetStackPolicyInput || (SetStackPolicyInput = {}));
export var SetTypeDefaultVersionInput;
(function (SetTypeDefaultVersionInput) {
  /**
   * @internal
   */
  SetTypeDefaultVersionInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SetTypeDefaultVersionInput || (SetTypeDefaultVersionInput = {}));
export var SetTypeDefaultVersionOutput;
(function (SetTypeDefaultVersionOutput) {
  /**
   * @internal
   */
  SetTypeDefaultVersionOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SetTypeDefaultVersionOutput || (SetTypeDefaultVersionOutput = {}));
export var ResourceSignalStatus;
(function (ResourceSignalStatus) {
  ResourceSignalStatus["FAILURE"] = "FAILURE";
  ResourceSignalStatus["SUCCESS"] = "SUCCESS";
})(ResourceSignalStatus || (ResourceSignalStatus = {}));
export var SignalResourceInput;
(function (SignalResourceInput) {
  /**
   * @internal
   */
  SignalResourceInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(SignalResourceInput || (SignalResourceInput = {}));
export var StopStackSetOperationInput;
(function (StopStackSetOperationInput) {
  /**
   * @internal
   */
  StopStackSetOperationInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopStackSetOperationInput || (StopStackSetOperationInput = {}));
export var StopStackSetOperationOutput;
(function (StopStackSetOperationOutput) {
  /**
   * @internal
   */
  StopStackSetOperationOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(StopStackSetOperationOutput || (StopStackSetOperationOutput = {}));
export var UpdateStackInput;
(function (UpdateStackInput) {
  /**
   * @internal
   */
  UpdateStackInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStackInput || (UpdateStackInput = {}));
export var UpdateStackOutput;
(function (UpdateStackOutput) {
  /**
   * @internal
   */
  UpdateStackOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStackOutput || (UpdateStackOutput = {}));
export var UpdateStackInstancesInput;
(function (UpdateStackInstancesInput) {
  /**
   * @internal
   */
  UpdateStackInstancesInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStackInstancesInput || (UpdateStackInstancesInput = {}));
export var UpdateStackInstancesOutput;
(function (UpdateStackInstancesOutput) {
  /**
   * @internal
   */
  UpdateStackInstancesOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStackInstancesOutput || (UpdateStackInstancesOutput = {}));
export var UpdateStackSetInput;
(function (UpdateStackSetInput) {
  /**
   * @internal
   */
  UpdateStackSetInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStackSetInput || (UpdateStackSetInput = {}));
export var UpdateStackSetOutput;
(function (UpdateStackSetOutput) {
  /**
   * @internal
   */
  UpdateStackSetOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateStackSetOutput || (UpdateStackSetOutput = {}));
export var UpdateTerminationProtectionInput;
(function (UpdateTerminationProtectionInput) {
  /**
   * @internal
   */
  UpdateTerminationProtectionInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateTerminationProtectionInput || (UpdateTerminationProtectionInput = {}));
export var UpdateTerminationProtectionOutput;
(function (UpdateTerminationProtectionOutput) {
  /**
   * @internal
   */
  UpdateTerminationProtectionOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(UpdateTerminationProtectionOutput || (UpdateTerminationProtectionOutput = {}));
export var ValidateTemplateInput;
(function (ValidateTemplateInput) {
  /**
   * @internal
   */
  ValidateTemplateInput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidateTemplateInput || (ValidateTemplateInput = {}));
export var TemplateParameter;
(function (TemplateParameter) {
  /**
   * @internal
   */
  TemplateParameter.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(TemplateParameter || (TemplateParameter = {}));
export var ValidateTemplateOutput;
(function (ValidateTemplateOutput) {
  /**
   * @internal
   */
  ValidateTemplateOutput.filterSensitiveLog = function (obj) {
    return __assign({}, obj);
  };
})(ValidateTemplateOutput || (ValidateTemplateOutput = {}));
//# sourceMappingURL=models_0.js.map
