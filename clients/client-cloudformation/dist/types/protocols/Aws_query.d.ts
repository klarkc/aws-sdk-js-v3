import { CancelUpdateStackCommandInput, CancelUpdateStackCommandOutput } from "../commands/CancelUpdateStackCommand";
import {
  ContinueUpdateRollbackCommandInput,
  ContinueUpdateRollbackCommandOutput,
} from "../commands/ContinueUpdateRollbackCommand";
import { CreateChangeSetCommandInput, CreateChangeSetCommandOutput } from "../commands/CreateChangeSetCommand";
import { CreateStackCommandInput, CreateStackCommandOutput } from "../commands/CreateStackCommand";
import {
  CreateStackInstancesCommandInput,
  CreateStackInstancesCommandOutput,
} from "../commands/CreateStackInstancesCommand";
import { CreateStackSetCommandInput, CreateStackSetCommandOutput } from "../commands/CreateStackSetCommand";
import { DeleteChangeSetCommandInput, DeleteChangeSetCommandOutput } from "../commands/DeleteChangeSetCommand";
import { DeleteStackCommandInput, DeleteStackCommandOutput } from "../commands/DeleteStackCommand";
import {
  DeleteStackInstancesCommandInput,
  DeleteStackInstancesCommandOutput,
} from "../commands/DeleteStackInstancesCommand";
import { DeleteStackSetCommandInput, DeleteStackSetCommandOutput } from "../commands/DeleteStackSetCommand";
import { DeregisterTypeCommandInput, DeregisterTypeCommandOutput } from "../commands/DeregisterTypeCommand";
import {
  DescribeAccountLimitsCommandInput,
  DescribeAccountLimitsCommandOutput,
} from "../commands/DescribeAccountLimitsCommand";
import { DescribeChangeSetCommandInput, DescribeChangeSetCommandOutput } from "../commands/DescribeChangeSetCommand";
import {
  DescribeStackDriftDetectionStatusCommandInput,
  DescribeStackDriftDetectionStatusCommandOutput,
} from "../commands/DescribeStackDriftDetectionStatusCommand";
import {
  DescribeStackEventsCommandInput,
  DescribeStackEventsCommandOutput,
} from "../commands/DescribeStackEventsCommand";
import {
  DescribeStackInstanceCommandInput,
  DescribeStackInstanceCommandOutput,
} from "../commands/DescribeStackInstanceCommand";
import {
  DescribeStackResourceCommandInput,
  DescribeStackResourceCommandOutput,
} from "../commands/DescribeStackResourceCommand";
import {
  DescribeStackResourceDriftsCommandInput,
  DescribeStackResourceDriftsCommandOutput,
} from "../commands/DescribeStackResourceDriftsCommand";
import {
  DescribeStackResourcesCommandInput,
  DescribeStackResourcesCommandOutput,
} from "../commands/DescribeStackResourcesCommand";
import { DescribeStackSetCommandInput, DescribeStackSetCommandOutput } from "../commands/DescribeStackSetCommand";
import {
  DescribeStackSetOperationCommandInput,
  DescribeStackSetOperationCommandOutput,
} from "../commands/DescribeStackSetOperationCommand";
import { DescribeStacksCommandInput, DescribeStacksCommandOutput } from "../commands/DescribeStacksCommand";
import { DescribeTypeCommandInput, DescribeTypeCommandOutput } from "../commands/DescribeTypeCommand";
import {
  DescribeTypeRegistrationCommandInput,
  DescribeTypeRegistrationCommandOutput,
} from "../commands/DescribeTypeRegistrationCommand";
import { DetectStackDriftCommandInput, DetectStackDriftCommandOutput } from "../commands/DetectStackDriftCommand";
import {
  DetectStackResourceDriftCommandInput,
  DetectStackResourceDriftCommandOutput,
} from "../commands/DetectStackResourceDriftCommand";
import {
  DetectStackSetDriftCommandInput,
  DetectStackSetDriftCommandOutput,
} from "../commands/DetectStackSetDriftCommand";
import {
  EstimateTemplateCostCommandInput,
  EstimateTemplateCostCommandOutput,
} from "../commands/EstimateTemplateCostCommand";
import { ExecuteChangeSetCommandInput, ExecuteChangeSetCommandOutput } from "../commands/ExecuteChangeSetCommand";
import { GetStackPolicyCommandInput, GetStackPolicyCommandOutput } from "../commands/GetStackPolicyCommand";
import { GetTemplateCommandInput, GetTemplateCommandOutput } from "../commands/GetTemplateCommand";
import { GetTemplateSummaryCommandInput, GetTemplateSummaryCommandOutput } from "../commands/GetTemplateSummaryCommand";
import { ListChangeSetsCommandInput, ListChangeSetsCommandOutput } from "../commands/ListChangeSetsCommand";
import { ListExportsCommandInput, ListExportsCommandOutput } from "../commands/ListExportsCommand";
import { ListImportsCommandInput, ListImportsCommandOutput } from "../commands/ListImportsCommand";
import { ListStackInstancesCommandInput, ListStackInstancesCommandOutput } from "../commands/ListStackInstancesCommand";
import { ListStackResourcesCommandInput, ListStackResourcesCommandOutput } from "../commands/ListStackResourcesCommand";
import {
  ListStackSetOperationResultsCommandInput,
  ListStackSetOperationResultsCommandOutput,
} from "../commands/ListStackSetOperationResultsCommand";
import {
  ListStackSetOperationsCommandInput,
  ListStackSetOperationsCommandOutput,
} from "../commands/ListStackSetOperationsCommand";
import { ListStackSetsCommandInput, ListStackSetsCommandOutput } from "../commands/ListStackSetsCommand";
import { ListStacksCommandInput, ListStacksCommandOutput } from "../commands/ListStacksCommand";
import {
  ListTypeRegistrationsCommandInput,
  ListTypeRegistrationsCommandOutput,
} from "../commands/ListTypeRegistrationsCommand";
import { ListTypeVersionsCommandInput, ListTypeVersionsCommandOutput } from "../commands/ListTypeVersionsCommand";
import { ListTypesCommandInput, ListTypesCommandOutput } from "../commands/ListTypesCommand";
import {
  RecordHandlerProgressCommandInput,
  RecordHandlerProgressCommandOutput,
} from "../commands/RecordHandlerProgressCommand";
import { RegisterTypeCommandInput, RegisterTypeCommandOutput } from "../commands/RegisterTypeCommand";
import { SetStackPolicyCommandInput, SetStackPolicyCommandOutput } from "../commands/SetStackPolicyCommand";
import {
  SetTypeDefaultVersionCommandInput,
  SetTypeDefaultVersionCommandOutput,
} from "../commands/SetTypeDefaultVersionCommand";
import { SignalResourceCommandInput, SignalResourceCommandOutput } from "../commands/SignalResourceCommand";
import {
  StopStackSetOperationCommandInput,
  StopStackSetOperationCommandOutput,
} from "../commands/StopStackSetOperationCommand";
import { UpdateStackCommandInput, UpdateStackCommandOutput } from "../commands/UpdateStackCommand";
import {
  UpdateStackInstancesCommandInput,
  UpdateStackInstancesCommandOutput,
} from "../commands/UpdateStackInstancesCommand";
import { UpdateStackSetCommandInput, UpdateStackSetCommandOutput } from "../commands/UpdateStackSetCommand";
import {
  UpdateTerminationProtectionCommandInput,
  UpdateTerminationProtectionCommandOutput,
} from "../commands/UpdateTerminationProtectionCommand";
import { ValidateTemplateCommandInput, ValidateTemplateCommandOutput } from "../commands/ValidateTemplateCommand";
import { HttpRequest as __HttpRequest, HttpResponse as __HttpResponse } from "@aws-sdk/protocol-http";
import { SerdeContext as __SerdeContext } from "@aws-sdk/types";
export declare const serializeAws_queryCancelUpdateStackCommand: (
  input: CancelUpdateStackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryContinueUpdateRollbackCommand: (
  input: ContinueUpdateRollbackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryCreateChangeSetCommand: (
  input: CreateChangeSetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryCreateStackCommand: (
  input: CreateStackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryCreateStackInstancesCommand: (
  input: CreateStackInstancesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryCreateStackSetCommand: (
  input: CreateStackSetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDeleteChangeSetCommand: (
  input: DeleteChangeSetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDeleteStackCommand: (
  input: DeleteStackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDeleteStackInstancesCommand: (
  input: DeleteStackInstancesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDeleteStackSetCommand: (
  input: DeleteStackSetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDeregisterTypeCommand: (
  input: DeregisterTypeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeAccountLimitsCommand: (
  input: DescribeAccountLimitsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeChangeSetCommand: (
  input: DescribeChangeSetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeStackDriftDetectionStatusCommand: (
  input: DescribeStackDriftDetectionStatusCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeStackEventsCommand: (
  input: DescribeStackEventsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeStackInstanceCommand: (
  input: DescribeStackInstanceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeStackResourceCommand: (
  input: DescribeStackResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeStackResourceDriftsCommand: (
  input: DescribeStackResourceDriftsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeStackResourcesCommand: (
  input: DescribeStackResourcesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeStacksCommand: (
  input: DescribeStacksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeStackSetCommand: (
  input: DescribeStackSetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeStackSetOperationCommand: (
  input: DescribeStackSetOperationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeTypeCommand: (
  input: DescribeTypeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDescribeTypeRegistrationCommand: (
  input: DescribeTypeRegistrationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDetectStackDriftCommand: (
  input: DetectStackDriftCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDetectStackResourceDriftCommand: (
  input: DetectStackResourceDriftCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryDetectStackSetDriftCommand: (
  input: DetectStackSetDriftCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryEstimateTemplateCostCommand: (
  input: EstimateTemplateCostCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryExecuteChangeSetCommand: (
  input: ExecuteChangeSetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryGetStackPolicyCommand: (
  input: GetStackPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryGetTemplateCommand: (
  input: GetTemplateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryGetTemplateSummaryCommand: (
  input: GetTemplateSummaryCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListChangeSetsCommand: (
  input: ListChangeSetsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListExportsCommand: (
  input: ListExportsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListImportsCommand: (
  input: ListImportsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListStackInstancesCommand: (
  input: ListStackInstancesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListStackResourcesCommand: (
  input: ListStackResourcesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListStacksCommand: (
  input: ListStacksCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListStackSetOperationResultsCommand: (
  input: ListStackSetOperationResultsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListStackSetOperationsCommand: (
  input: ListStackSetOperationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListStackSetsCommand: (
  input: ListStackSetsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListTypeRegistrationsCommand: (
  input: ListTypeRegistrationsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListTypesCommand: (
  input: ListTypesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryListTypeVersionsCommand: (
  input: ListTypeVersionsCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryRecordHandlerProgressCommand: (
  input: RecordHandlerProgressCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryRegisterTypeCommand: (
  input: RegisterTypeCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_querySetStackPolicyCommand: (
  input: SetStackPolicyCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_querySetTypeDefaultVersionCommand: (
  input: SetTypeDefaultVersionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_querySignalResourceCommand: (
  input: SignalResourceCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryStopStackSetOperationCommand: (
  input: StopStackSetOperationCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryUpdateStackCommand: (
  input: UpdateStackCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryUpdateStackInstancesCommand: (
  input: UpdateStackInstancesCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryUpdateStackSetCommand: (
  input: UpdateStackSetCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryUpdateTerminationProtectionCommand: (
  input: UpdateTerminationProtectionCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const serializeAws_queryValidateTemplateCommand: (
  input: ValidateTemplateCommandInput,
  context: __SerdeContext
) => Promise<__HttpRequest>;
export declare const deserializeAws_queryCancelUpdateStackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CancelUpdateStackCommandOutput>;
export declare const deserializeAws_queryContinueUpdateRollbackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ContinueUpdateRollbackCommandOutput>;
export declare const deserializeAws_queryCreateChangeSetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateChangeSetCommandOutput>;
export declare const deserializeAws_queryCreateStackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateStackCommandOutput>;
export declare const deserializeAws_queryCreateStackInstancesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateStackInstancesCommandOutput>;
export declare const deserializeAws_queryCreateStackSetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<CreateStackSetCommandOutput>;
export declare const deserializeAws_queryDeleteChangeSetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteChangeSetCommandOutput>;
export declare const deserializeAws_queryDeleteStackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteStackCommandOutput>;
export declare const deserializeAws_queryDeleteStackInstancesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteStackInstancesCommandOutput>;
export declare const deserializeAws_queryDeleteStackSetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeleteStackSetCommandOutput>;
export declare const deserializeAws_queryDeregisterTypeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DeregisterTypeCommandOutput>;
export declare const deserializeAws_queryDescribeAccountLimitsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeAccountLimitsCommandOutput>;
export declare const deserializeAws_queryDescribeChangeSetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeChangeSetCommandOutput>;
export declare const deserializeAws_queryDescribeStackDriftDetectionStatusCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStackDriftDetectionStatusCommandOutput>;
export declare const deserializeAws_queryDescribeStackEventsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStackEventsCommandOutput>;
export declare const deserializeAws_queryDescribeStackInstanceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStackInstanceCommandOutput>;
export declare const deserializeAws_queryDescribeStackResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStackResourceCommandOutput>;
export declare const deserializeAws_queryDescribeStackResourceDriftsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStackResourceDriftsCommandOutput>;
export declare const deserializeAws_queryDescribeStackResourcesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStackResourcesCommandOutput>;
export declare const deserializeAws_queryDescribeStacksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStacksCommandOutput>;
export declare const deserializeAws_queryDescribeStackSetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStackSetCommandOutput>;
export declare const deserializeAws_queryDescribeStackSetOperationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeStackSetOperationCommandOutput>;
export declare const deserializeAws_queryDescribeTypeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeTypeCommandOutput>;
export declare const deserializeAws_queryDescribeTypeRegistrationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DescribeTypeRegistrationCommandOutput>;
export declare const deserializeAws_queryDetectStackDriftCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DetectStackDriftCommandOutput>;
export declare const deserializeAws_queryDetectStackResourceDriftCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DetectStackResourceDriftCommandOutput>;
export declare const deserializeAws_queryDetectStackSetDriftCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<DetectStackSetDriftCommandOutput>;
export declare const deserializeAws_queryEstimateTemplateCostCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<EstimateTemplateCostCommandOutput>;
export declare const deserializeAws_queryExecuteChangeSetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ExecuteChangeSetCommandOutput>;
export declare const deserializeAws_queryGetStackPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetStackPolicyCommandOutput>;
export declare const deserializeAws_queryGetTemplateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetTemplateCommandOutput>;
export declare const deserializeAws_queryGetTemplateSummaryCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<GetTemplateSummaryCommandOutput>;
export declare const deserializeAws_queryListChangeSetsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListChangeSetsCommandOutput>;
export declare const deserializeAws_queryListExportsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListExportsCommandOutput>;
export declare const deserializeAws_queryListImportsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListImportsCommandOutput>;
export declare const deserializeAws_queryListStackInstancesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListStackInstancesCommandOutput>;
export declare const deserializeAws_queryListStackResourcesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListStackResourcesCommandOutput>;
export declare const deserializeAws_queryListStacksCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListStacksCommandOutput>;
export declare const deserializeAws_queryListStackSetOperationResultsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListStackSetOperationResultsCommandOutput>;
export declare const deserializeAws_queryListStackSetOperationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListStackSetOperationsCommandOutput>;
export declare const deserializeAws_queryListStackSetsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListStackSetsCommandOutput>;
export declare const deserializeAws_queryListTypeRegistrationsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTypeRegistrationsCommandOutput>;
export declare const deserializeAws_queryListTypesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTypesCommandOutput>;
export declare const deserializeAws_queryListTypeVersionsCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ListTypeVersionsCommandOutput>;
export declare const deserializeAws_queryRecordHandlerProgressCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RecordHandlerProgressCommandOutput>;
export declare const deserializeAws_queryRegisterTypeCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<RegisterTypeCommandOutput>;
export declare const deserializeAws_querySetStackPolicyCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetStackPolicyCommandOutput>;
export declare const deserializeAws_querySetTypeDefaultVersionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SetTypeDefaultVersionCommandOutput>;
export declare const deserializeAws_querySignalResourceCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<SignalResourceCommandOutput>;
export declare const deserializeAws_queryStopStackSetOperationCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<StopStackSetOperationCommandOutput>;
export declare const deserializeAws_queryUpdateStackCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateStackCommandOutput>;
export declare const deserializeAws_queryUpdateStackInstancesCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateStackInstancesCommandOutput>;
export declare const deserializeAws_queryUpdateStackSetCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateStackSetCommandOutput>;
export declare const deserializeAws_queryUpdateTerminationProtectionCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<UpdateTerminationProtectionCommandOutput>;
export declare const deserializeAws_queryValidateTemplateCommand: (
  output: __HttpResponse,
  context: __SerdeContext
) => Promise<ValidateTemplateCommandOutput>;
