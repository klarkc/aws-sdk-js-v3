import { __extends } from "tslib";
import { SageMakerClient } from "./SageMakerClient";
import { AddAssociationCommand, } from "./commands/AddAssociationCommand";
import { AddTagsCommand } from "./commands/AddTagsCommand";
import { AssociateTrialComponentCommand, } from "./commands/AssociateTrialComponentCommand";
import { CreateActionCommand, } from "./commands/CreateActionCommand";
import { CreateAlgorithmCommand, } from "./commands/CreateAlgorithmCommand";
import { CreateAppCommand } from "./commands/CreateAppCommand";
import { CreateAppImageConfigCommand, } from "./commands/CreateAppImageConfigCommand";
import { CreateArtifactCommand, } from "./commands/CreateArtifactCommand";
import { CreateAutoMLJobCommand, } from "./commands/CreateAutoMLJobCommand";
import { CreateCodeRepositoryCommand, } from "./commands/CreateCodeRepositoryCommand";
import { CreateCompilationJobCommand, } from "./commands/CreateCompilationJobCommand";
import { CreateContextCommand, } from "./commands/CreateContextCommand";
import { CreateDataQualityJobDefinitionCommand, } from "./commands/CreateDataQualityJobDefinitionCommand";
import { CreateDeviceFleetCommand, } from "./commands/CreateDeviceFleetCommand";
import { CreateDomainCommand, } from "./commands/CreateDomainCommand";
import { CreateEdgePackagingJobCommand, } from "./commands/CreateEdgePackagingJobCommand";
import { CreateEndpointCommand, } from "./commands/CreateEndpointCommand";
import { CreateEndpointConfigCommand, } from "./commands/CreateEndpointConfigCommand";
import { CreateExperimentCommand, } from "./commands/CreateExperimentCommand";
import { CreateFeatureGroupCommand, } from "./commands/CreateFeatureGroupCommand";
import { CreateFlowDefinitionCommand, } from "./commands/CreateFlowDefinitionCommand";
import { CreateHumanTaskUiCommand, } from "./commands/CreateHumanTaskUiCommand";
import { CreateHyperParameterTuningJobCommand, } from "./commands/CreateHyperParameterTuningJobCommand";
import { CreateImageCommand } from "./commands/CreateImageCommand";
import { CreateImageVersionCommand, } from "./commands/CreateImageVersionCommand";
import { CreateLabelingJobCommand, } from "./commands/CreateLabelingJobCommand";
import { CreateModelBiasJobDefinitionCommand, } from "./commands/CreateModelBiasJobDefinitionCommand";
import { CreateModelCommand } from "./commands/CreateModelCommand";
import { CreateModelExplainabilityJobDefinitionCommand, } from "./commands/CreateModelExplainabilityJobDefinitionCommand";
import { CreateModelPackageCommand, } from "./commands/CreateModelPackageCommand";
import { CreateModelPackageGroupCommand, } from "./commands/CreateModelPackageGroupCommand";
import { CreateModelQualityJobDefinitionCommand, } from "./commands/CreateModelQualityJobDefinitionCommand";
import { CreateMonitoringScheduleCommand, } from "./commands/CreateMonitoringScheduleCommand";
import { CreateNotebookInstanceCommand, } from "./commands/CreateNotebookInstanceCommand";
import { CreateNotebookInstanceLifecycleConfigCommand, } from "./commands/CreateNotebookInstanceLifecycleConfigCommand";
import { CreatePipelineCommand, } from "./commands/CreatePipelineCommand";
import { CreatePresignedDomainUrlCommand, } from "./commands/CreatePresignedDomainUrlCommand";
import { CreatePresignedNotebookInstanceUrlCommand, } from "./commands/CreatePresignedNotebookInstanceUrlCommand";
import { CreateProcessingJobCommand, } from "./commands/CreateProcessingJobCommand";
import { CreateProjectCommand, } from "./commands/CreateProjectCommand";
import { CreateTrainingJobCommand, } from "./commands/CreateTrainingJobCommand";
import { CreateTransformJobCommand, } from "./commands/CreateTransformJobCommand";
import { CreateTrialCommand } from "./commands/CreateTrialCommand";
import { CreateTrialComponentCommand, } from "./commands/CreateTrialComponentCommand";
import { CreateUserProfileCommand, } from "./commands/CreateUserProfileCommand";
import { CreateWorkforceCommand, } from "./commands/CreateWorkforceCommand";
import { CreateWorkteamCommand, } from "./commands/CreateWorkteamCommand";
import { DeleteActionCommand, } from "./commands/DeleteActionCommand";
import { DeleteAlgorithmCommand, } from "./commands/DeleteAlgorithmCommand";
import { DeleteAppCommand } from "./commands/DeleteAppCommand";
import { DeleteAppImageConfigCommand, } from "./commands/DeleteAppImageConfigCommand";
import { DeleteArtifactCommand, } from "./commands/DeleteArtifactCommand";
import { DeleteAssociationCommand, } from "./commands/DeleteAssociationCommand";
import { DeleteCodeRepositoryCommand, } from "./commands/DeleteCodeRepositoryCommand";
import { DeleteContextCommand, } from "./commands/DeleteContextCommand";
import { DeleteDataQualityJobDefinitionCommand, } from "./commands/DeleteDataQualityJobDefinitionCommand";
import { DeleteDeviceFleetCommand, } from "./commands/DeleteDeviceFleetCommand";
import { DeleteDomainCommand, } from "./commands/DeleteDomainCommand";
import { DeleteEndpointCommand, } from "./commands/DeleteEndpointCommand";
import { DeleteEndpointConfigCommand, } from "./commands/DeleteEndpointConfigCommand";
import { DeleteExperimentCommand, } from "./commands/DeleteExperimentCommand";
import { DeleteFeatureGroupCommand, } from "./commands/DeleteFeatureGroupCommand";
import { DeleteFlowDefinitionCommand, } from "./commands/DeleteFlowDefinitionCommand";
import { DeleteHumanTaskUiCommand, } from "./commands/DeleteHumanTaskUiCommand";
import { DeleteImageCommand } from "./commands/DeleteImageCommand";
import { DeleteImageVersionCommand, } from "./commands/DeleteImageVersionCommand";
import { DeleteModelBiasJobDefinitionCommand, } from "./commands/DeleteModelBiasJobDefinitionCommand";
import { DeleteModelCommand } from "./commands/DeleteModelCommand";
import { DeleteModelExplainabilityJobDefinitionCommand, } from "./commands/DeleteModelExplainabilityJobDefinitionCommand";
import { DeleteModelPackageCommand, } from "./commands/DeleteModelPackageCommand";
import { DeleteModelPackageGroupCommand, } from "./commands/DeleteModelPackageGroupCommand";
import { DeleteModelPackageGroupPolicyCommand, } from "./commands/DeleteModelPackageGroupPolicyCommand";
import { DeleteModelQualityJobDefinitionCommand, } from "./commands/DeleteModelQualityJobDefinitionCommand";
import { DeleteMonitoringScheduleCommand, } from "./commands/DeleteMonitoringScheduleCommand";
import { DeleteNotebookInstanceCommand, } from "./commands/DeleteNotebookInstanceCommand";
import { DeleteNotebookInstanceLifecycleConfigCommand, } from "./commands/DeleteNotebookInstanceLifecycleConfigCommand";
import { DeletePipelineCommand, } from "./commands/DeletePipelineCommand";
import { DeleteProjectCommand, } from "./commands/DeleteProjectCommand";
import { DeleteTagsCommand } from "./commands/DeleteTagsCommand";
import { DeleteTrialCommand } from "./commands/DeleteTrialCommand";
import { DeleteTrialComponentCommand, } from "./commands/DeleteTrialComponentCommand";
import { DeleteUserProfileCommand, } from "./commands/DeleteUserProfileCommand";
import { DeleteWorkforceCommand, } from "./commands/DeleteWorkforceCommand";
import { DeleteWorkteamCommand, } from "./commands/DeleteWorkteamCommand";
import { DeregisterDevicesCommand, } from "./commands/DeregisterDevicesCommand";
import { DescribeActionCommand, } from "./commands/DescribeActionCommand";
import { DescribeAlgorithmCommand, } from "./commands/DescribeAlgorithmCommand";
import { DescribeAppCommand } from "./commands/DescribeAppCommand";
import { DescribeAppImageConfigCommand, } from "./commands/DescribeAppImageConfigCommand";
import { DescribeArtifactCommand, } from "./commands/DescribeArtifactCommand";
import { DescribeAutoMLJobCommand, } from "./commands/DescribeAutoMLJobCommand";
import { DescribeCodeRepositoryCommand, } from "./commands/DescribeCodeRepositoryCommand";
import { DescribeCompilationJobCommand, } from "./commands/DescribeCompilationJobCommand";
import { DescribeContextCommand, } from "./commands/DescribeContextCommand";
import { DescribeDataQualityJobDefinitionCommand, } from "./commands/DescribeDataQualityJobDefinitionCommand";
import { DescribeDeviceCommand, } from "./commands/DescribeDeviceCommand";
import { DescribeDeviceFleetCommand, } from "./commands/DescribeDeviceFleetCommand";
import { DescribeDomainCommand, } from "./commands/DescribeDomainCommand";
import { DescribeEdgePackagingJobCommand, } from "./commands/DescribeEdgePackagingJobCommand";
import { DescribeEndpointCommand, } from "./commands/DescribeEndpointCommand";
import { DescribeEndpointConfigCommand, } from "./commands/DescribeEndpointConfigCommand";
import { DescribeExperimentCommand, } from "./commands/DescribeExperimentCommand";
import { DescribeFeatureGroupCommand, } from "./commands/DescribeFeatureGroupCommand";
import { DescribeFlowDefinitionCommand, } from "./commands/DescribeFlowDefinitionCommand";
import { DescribeHumanTaskUiCommand, } from "./commands/DescribeHumanTaskUiCommand";
import { DescribeHyperParameterTuningJobCommand, } from "./commands/DescribeHyperParameterTuningJobCommand";
import { DescribeImageCommand, } from "./commands/DescribeImageCommand";
import { DescribeImageVersionCommand, } from "./commands/DescribeImageVersionCommand";
import { DescribeLabelingJobCommand, } from "./commands/DescribeLabelingJobCommand";
import { DescribeModelBiasJobDefinitionCommand, } from "./commands/DescribeModelBiasJobDefinitionCommand";
import { DescribeModelCommand, } from "./commands/DescribeModelCommand";
import { DescribeModelExplainabilityJobDefinitionCommand, } from "./commands/DescribeModelExplainabilityJobDefinitionCommand";
import { DescribeModelPackageCommand, } from "./commands/DescribeModelPackageCommand";
import { DescribeModelPackageGroupCommand, } from "./commands/DescribeModelPackageGroupCommand";
import { DescribeModelQualityJobDefinitionCommand, } from "./commands/DescribeModelQualityJobDefinitionCommand";
import { DescribeMonitoringScheduleCommand, } from "./commands/DescribeMonitoringScheduleCommand";
import { DescribeNotebookInstanceCommand, } from "./commands/DescribeNotebookInstanceCommand";
import { DescribeNotebookInstanceLifecycleConfigCommand, } from "./commands/DescribeNotebookInstanceLifecycleConfigCommand";
import { DescribePipelineCommand, } from "./commands/DescribePipelineCommand";
import { DescribePipelineDefinitionForExecutionCommand, } from "./commands/DescribePipelineDefinitionForExecutionCommand";
import { DescribePipelineExecutionCommand, } from "./commands/DescribePipelineExecutionCommand";
import { DescribeProcessingJobCommand, } from "./commands/DescribeProcessingJobCommand";
import { DescribeProjectCommand, } from "./commands/DescribeProjectCommand";
import { DescribeSubscribedWorkteamCommand, } from "./commands/DescribeSubscribedWorkteamCommand";
import { DescribeTrainingJobCommand, } from "./commands/DescribeTrainingJobCommand";
import { DescribeTransformJobCommand, } from "./commands/DescribeTransformJobCommand";
import { DescribeTrialCommand, } from "./commands/DescribeTrialCommand";
import { DescribeTrialComponentCommand, } from "./commands/DescribeTrialComponentCommand";
import { DescribeUserProfileCommand, } from "./commands/DescribeUserProfileCommand";
import { DescribeWorkforceCommand, } from "./commands/DescribeWorkforceCommand";
import { DescribeWorkteamCommand, } from "./commands/DescribeWorkteamCommand";
import { DisableSagemakerServicecatalogPortfolioCommand, } from "./commands/DisableSagemakerServicecatalogPortfolioCommand";
import { DisassociateTrialComponentCommand, } from "./commands/DisassociateTrialComponentCommand";
import { EnableSagemakerServicecatalogPortfolioCommand, } from "./commands/EnableSagemakerServicecatalogPortfolioCommand";
import { GetDeviceFleetReportCommand, } from "./commands/GetDeviceFleetReportCommand";
import { GetModelPackageGroupPolicyCommand, } from "./commands/GetModelPackageGroupPolicyCommand";
import { GetSagemakerServicecatalogPortfolioStatusCommand, } from "./commands/GetSagemakerServicecatalogPortfolioStatusCommand";
import { GetSearchSuggestionsCommand, } from "./commands/GetSearchSuggestionsCommand";
import { ListActionsCommand } from "./commands/ListActionsCommand";
import { ListAlgorithmsCommand, } from "./commands/ListAlgorithmsCommand";
import { ListAppImageConfigsCommand, } from "./commands/ListAppImageConfigsCommand";
import { ListAppsCommand } from "./commands/ListAppsCommand";
import { ListArtifactsCommand, } from "./commands/ListArtifactsCommand";
import { ListAssociationsCommand, } from "./commands/ListAssociationsCommand";
import { ListAutoMLJobsCommand, } from "./commands/ListAutoMLJobsCommand";
import { ListCandidatesForAutoMLJobCommand, } from "./commands/ListCandidatesForAutoMLJobCommand";
import { ListCodeRepositoriesCommand, } from "./commands/ListCodeRepositoriesCommand";
import { ListCompilationJobsCommand, } from "./commands/ListCompilationJobsCommand";
import { ListContextsCommand, } from "./commands/ListContextsCommand";
import { ListDataQualityJobDefinitionsCommand, } from "./commands/ListDataQualityJobDefinitionsCommand";
import { ListDeviceFleetsCommand, } from "./commands/ListDeviceFleetsCommand";
import { ListDevicesCommand } from "./commands/ListDevicesCommand";
import { ListDomainsCommand } from "./commands/ListDomainsCommand";
import { ListEdgePackagingJobsCommand, } from "./commands/ListEdgePackagingJobsCommand";
import { ListEndpointConfigsCommand, } from "./commands/ListEndpointConfigsCommand";
import { ListEndpointsCommand, } from "./commands/ListEndpointsCommand";
import { ListExperimentsCommand, } from "./commands/ListExperimentsCommand";
import { ListFeatureGroupsCommand, } from "./commands/ListFeatureGroupsCommand";
import { ListFlowDefinitionsCommand, } from "./commands/ListFlowDefinitionsCommand";
import { ListHumanTaskUisCommand, } from "./commands/ListHumanTaskUisCommand";
import { ListHyperParameterTuningJobsCommand, } from "./commands/ListHyperParameterTuningJobsCommand";
import { ListImageVersionsCommand, } from "./commands/ListImageVersionsCommand";
import { ListImagesCommand } from "./commands/ListImagesCommand";
import { ListLabelingJobsCommand, } from "./commands/ListLabelingJobsCommand";
import { ListLabelingJobsForWorkteamCommand, } from "./commands/ListLabelingJobsForWorkteamCommand";
import { ListModelBiasJobDefinitionsCommand, } from "./commands/ListModelBiasJobDefinitionsCommand";
import { ListModelExplainabilityJobDefinitionsCommand, } from "./commands/ListModelExplainabilityJobDefinitionsCommand";
import { ListModelPackageGroupsCommand, } from "./commands/ListModelPackageGroupsCommand";
import { ListModelPackagesCommand, } from "./commands/ListModelPackagesCommand";
import { ListModelQualityJobDefinitionsCommand, } from "./commands/ListModelQualityJobDefinitionsCommand";
import { ListModelsCommand } from "./commands/ListModelsCommand";
import { ListMonitoringExecutionsCommand, } from "./commands/ListMonitoringExecutionsCommand";
import { ListMonitoringSchedulesCommand, } from "./commands/ListMonitoringSchedulesCommand";
import { ListNotebookInstanceLifecycleConfigsCommand, } from "./commands/ListNotebookInstanceLifecycleConfigsCommand";
import { ListNotebookInstancesCommand, } from "./commands/ListNotebookInstancesCommand";
import { ListPipelineExecutionStepsCommand, } from "./commands/ListPipelineExecutionStepsCommand";
import { ListPipelineExecutionsCommand, } from "./commands/ListPipelineExecutionsCommand";
import { ListPipelineParametersForExecutionCommand, } from "./commands/ListPipelineParametersForExecutionCommand";
import { ListPipelinesCommand, } from "./commands/ListPipelinesCommand";
import { ListProcessingJobsCommand, } from "./commands/ListProcessingJobsCommand";
import { ListProjectsCommand, } from "./commands/ListProjectsCommand";
import { ListSubscribedWorkteamsCommand, } from "./commands/ListSubscribedWorkteamsCommand";
import { ListTagsCommand } from "./commands/ListTagsCommand";
import { ListTrainingJobsCommand, } from "./commands/ListTrainingJobsCommand";
import { ListTrainingJobsForHyperParameterTuningJobCommand, } from "./commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import { ListTransformJobsCommand, } from "./commands/ListTransformJobsCommand";
import { ListTrialComponentsCommand, } from "./commands/ListTrialComponentsCommand";
import { ListTrialsCommand } from "./commands/ListTrialsCommand";
import { ListUserProfilesCommand, } from "./commands/ListUserProfilesCommand";
import { ListWorkforcesCommand, } from "./commands/ListWorkforcesCommand";
import { ListWorkteamsCommand, } from "./commands/ListWorkteamsCommand";
import { PutModelPackageGroupPolicyCommand, } from "./commands/PutModelPackageGroupPolicyCommand";
import { RegisterDevicesCommand, } from "./commands/RegisterDevicesCommand";
import { RenderUiTemplateCommand, } from "./commands/RenderUiTemplateCommand";
import { SearchCommand } from "./commands/SearchCommand";
import { StartMonitoringScheduleCommand, } from "./commands/StartMonitoringScheduleCommand";
import { StartNotebookInstanceCommand, } from "./commands/StartNotebookInstanceCommand";
import { StartPipelineExecutionCommand, } from "./commands/StartPipelineExecutionCommand";
import { StopAutoMLJobCommand, } from "./commands/StopAutoMLJobCommand";
import { StopCompilationJobCommand, } from "./commands/StopCompilationJobCommand";
import { StopEdgePackagingJobCommand, } from "./commands/StopEdgePackagingJobCommand";
import { StopHyperParameterTuningJobCommand, } from "./commands/StopHyperParameterTuningJobCommand";
import { StopLabelingJobCommand, } from "./commands/StopLabelingJobCommand";
import { StopMonitoringScheduleCommand, } from "./commands/StopMonitoringScheduleCommand";
import { StopNotebookInstanceCommand, } from "./commands/StopNotebookInstanceCommand";
import { StopPipelineExecutionCommand, } from "./commands/StopPipelineExecutionCommand";
import { StopProcessingJobCommand, } from "./commands/StopProcessingJobCommand";
import { StopTrainingJobCommand, } from "./commands/StopTrainingJobCommand";
import { StopTransformJobCommand, } from "./commands/StopTransformJobCommand";
import { UpdateActionCommand, } from "./commands/UpdateActionCommand";
import { UpdateAppImageConfigCommand, } from "./commands/UpdateAppImageConfigCommand";
import { UpdateArtifactCommand, } from "./commands/UpdateArtifactCommand";
import { UpdateCodeRepositoryCommand, } from "./commands/UpdateCodeRepositoryCommand";
import { UpdateContextCommand, } from "./commands/UpdateContextCommand";
import { UpdateDeviceFleetCommand, } from "./commands/UpdateDeviceFleetCommand";
import { UpdateDevicesCommand, } from "./commands/UpdateDevicesCommand";
import { UpdateDomainCommand, } from "./commands/UpdateDomainCommand";
import { UpdateEndpointCommand, } from "./commands/UpdateEndpointCommand";
import { UpdateEndpointWeightsAndCapacitiesCommand, } from "./commands/UpdateEndpointWeightsAndCapacitiesCommand";
import { UpdateExperimentCommand, } from "./commands/UpdateExperimentCommand";
import { UpdateImageCommand } from "./commands/UpdateImageCommand";
import { UpdateModelPackageCommand, } from "./commands/UpdateModelPackageCommand";
import { UpdateMonitoringScheduleCommand, } from "./commands/UpdateMonitoringScheduleCommand";
import { UpdateNotebookInstanceCommand, } from "./commands/UpdateNotebookInstanceCommand";
import { UpdateNotebookInstanceLifecycleConfigCommand, } from "./commands/UpdateNotebookInstanceLifecycleConfigCommand";
import { UpdatePipelineCommand, } from "./commands/UpdatePipelineCommand";
import { UpdatePipelineExecutionCommand, } from "./commands/UpdatePipelineExecutionCommand";
import { UpdateTrainingJobCommand, } from "./commands/UpdateTrainingJobCommand";
import { UpdateTrialCommand } from "./commands/UpdateTrialCommand";
import { UpdateTrialComponentCommand, } from "./commands/UpdateTrialComponentCommand";
import { UpdateUserProfileCommand, } from "./commands/UpdateUserProfileCommand";
import { UpdateWorkforceCommand, } from "./commands/UpdateWorkforceCommand";
import { UpdateWorkteamCommand, } from "./commands/UpdateWorkteamCommand";
/**
 * <p>Provides APIs for creating and managing Amazon SageMaker resources. </p>
 *         <p>Other Resources:</p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/whatis.html#first-time-user">Amazon SageMaker Developer
 *                         Guide</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/augmented-ai/2019-11-07/APIReference/Welcome.html">Amazon Augmented AI
 *                         Runtime API Reference</a>
 *                </p>
 *             </li>
 *          </ul>
 */
var SageMaker = /** @class */ (function (_super) {
    __extends(SageMaker, _super);
    function SageMaker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SageMaker.prototype.addAssociation = function (args, optionsOrCb, cb) {
        var command = new AddAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.addTags = function (args, optionsOrCb, cb) {
        var command = new AddTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.associateTrialComponent = function (args, optionsOrCb, cb) {
        var command = new AssociateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createAction = function (args, optionsOrCb, cb) {
        var command = new CreateActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createAlgorithm = function (args, optionsOrCb, cb) {
        var command = new CreateAlgorithmCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createApp = function (args, optionsOrCb, cb) {
        var command = new CreateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createAppImageConfig = function (args, optionsOrCb, cb) {
        var command = new CreateAppImageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createArtifact = function (args, optionsOrCb, cb) {
        var command = new CreateArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createAutoMLJob = function (args, optionsOrCb, cb) {
        var command = new CreateAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createCodeRepository = function (args, optionsOrCb, cb) {
        var command = new CreateCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createCompilationJob = function (args, optionsOrCb, cb) {
        var command = new CreateCompilationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createContext = function (args, optionsOrCb, cb) {
        var command = new CreateContextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createDataQualityJobDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateDataQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createDeviceFleet = function (args, optionsOrCb, cb) {
        var command = new CreateDeviceFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createDomain = function (args, optionsOrCb, cb) {
        var command = new CreateDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createEdgePackagingJob = function (args, optionsOrCb, cb) {
        var command = new CreateEdgePackagingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createEndpoint = function (args, optionsOrCb, cb) {
        var command = new CreateEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createEndpointConfig = function (args, optionsOrCb, cb) {
        var command = new CreateEndpointConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createExperiment = function (args, optionsOrCb, cb) {
        var command = new CreateExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createFeatureGroup = function (args, optionsOrCb, cb) {
        var command = new CreateFeatureGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createFlowDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateFlowDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createHumanTaskUi = function (args, optionsOrCb, cb) {
        var command = new CreateHumanTaskUiCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createHyperParameterTuningJob = function (args, optionsOrCb, cb) {
        var command = new CreateHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createImage = function (args, optionsOrCb, cb) {
        var command = new CreateImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createImageVersion = function (args, optionsOrCb, cb) {
        var command = new CreateImageVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createLabelingJob = function (args, optionsOrCb, cb) {
        var command = new CreateLabelingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createModel = function (args, optionsOrCb, cb) {
        var command = new CreateModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createModelBiasJobDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateModelBiasJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createModelExplainabilityJobDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateModelExplainabilityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createModelPackage = function (args, optionsOrCb, cb) {
        var command = new CreateModelPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createModelPackageGroup = function (args, optionsOrCb, cb) {
        var command = new CreateModelPackageGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createModelQualityJobDefinition = function (args, optionsOrCb, cb) {
        var command = new CreateModelQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createMonitoringSchedule = function (args, optionsOrCb, cb) {
        var command = new CreateMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createNotebookInstance = function (args, optionsOrCb, cb) {
        var command = new CreateNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createNotebookInstanceLifecycleConfig = function (args, optionsOrCb, cb) {
        var command = new CreateNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createPipeline = function (args, optionsOrCb, cb) {
        var command = new CreatePipelineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createPresignedDomainUrl = function (args, optionsOrCb, cb) {
        var command = new CreatePresignedDomainUrlCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createPresignedNotebookInstanceUrl = function (args, optionsOrCb, cb) {
        var command = new CreatePresignedNotebookInstanceUrlCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createProcessingJob = function (args, optionsOrCb, cb) {
        var command = new CreateProcessingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createProject = function (args, optionsOrCb, cb) {
        var command = new CreateProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createTrainingJob = function (args, optionsOrCb, cb) {
        var command = new CreateTrainingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createTransformJob = function (args, optionsOrCb, cb) {
        var command = new CreateTransformJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createTrial = function (args, optionsOrCb, cb) {
        var command = new CreateTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createTrialComponent = function (args, optionsOrCb, cb) {
        var command = new CreateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createUserProfile = function (args, optionsOrCb, cb) {
        var command = new CreateUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createWorkforce = function (args, optionsOrCb, cb) {
        var command = new CreateWorkforceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.createWorkteam = function (args, optionsOrCb, cb) {
        var command = new CreateWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteAction = function (args, optionsOrCb, cb) {
        var command = new DeleteActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteAlgorithm = function (args, optionsOrCb, cb) {
        var command = new DeleteAlgorithmCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteApp = function (args, optionsOrCb, cb) {
        var command = new DeleteAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteAppImageConfig = function (args, optionsOrCb, cb) {
        var command = new DeleteAppImageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteArtifact = function (args, optionsOrCb, cb) {
        var command = new DeleteArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteAssociation = function (args, optionsOrCb, cb) {
        var command = new DeleteAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteCodeRepository = function (args, optionsOrCb, cb) {
        var command = new DeleteCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteContext = function (args, optionsOrCb, cb) {
        var command = new DeleteContextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteDataQualityJobDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteDataQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteDeviceFleet = function (args, optionsOrCb, cb) {
        var command = new DeleteDeviceFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteDomain = function (args, optionsOrCb, cb) {
        var command = new DeleteDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteEndpoint = function (args, optionsOrCb, cb) {
        var command = new DeleteEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteEndpointConfig = function (args, optionsOrCb, cb) {
        var command = new DeleteEndpointConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteExperiment = function (args, optionsOrCb, cb) {
        var command = new DeleteExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteFeatureGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteFeatureGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteFlowDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteFlowDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteHumanTaskUi = function (args, optionsOrCb, cb) {
        var command = new DeleteHumanTaskUiCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteImage = function (args, optionsOrCb, cb) {
        var command = new DeleteImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteImageVersion = function (args, optionsOrCb, cb) {
        var command = new DeleteImageVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteModel = function (args, optionsOrCb, cb) {
        var command = new DeleteModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteModelBiasJobDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteModelBiasJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteModelExplainabilityJobDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteModelExplainabilityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteModelPackage = function (args, optionsOrCb, cb) {
        var command = new DeleteModelPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteModelPackageGroup = function (args, optionsOrCb, cb) {
        var command = new DeleteModelPackageGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteModelPackageGroupPolicy = function (args, optionsOrCb, cb) {
        var command = new DeleteModelPackageGroupPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteModelQualityJobDefinition = function (args, optionsOrCb, cb) {
        var command = new DeleteModelQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteMonitoringSchedule = function (args, optionsOrCb, cb) {
        var command = new DeleteMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteNotebookInstance = function (args, optionsOrCb, cb) {
        var command = new DeleteNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteNotebookInstanceLifecycleConfig = function (args, optionsOrCb, cb) {
        var command = new DeleteNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deletePipeline = function (args, optionsOrCb, cb) {
        var command = new DeletePipelineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteProject = function (args, optionsOrCb, cb) {
        var command = new DeleteProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteTags = function (args, optionsOrCb, cb) {
        var command = new DeleteTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteTrial = function (args, optionsOrCb, cb) {
        var command = new DeleteTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteTrialComponent = function (args, optionsOrCb, cb) {
        var command = new DeleteTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteUserProfile = function (args, optionsOrCb, cb) {
        var command = new DeleteUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteWorkforce = function (args, optionsOrCb, cb) {
        var command = new DeleteWorkforceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deleteWorkteam = function (args, optionsOrCb, cb) {
        var command = new DeleteWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.deregisterDevices = function (args, optionsOrCb, cb) {
        var command = new DeregisterDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeAction = function (args, optionsOrCb, cb) {
        var command = new DescribeActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeAlgorithm = function (args, optionsOrCb, cb) {
        var command = new DescribeAlgorithmCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeApp = function (args, optionsOrCb, cb) {
        var command = new DescribeAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeAppImageConfig = function (args, optionsOrCb, cb) {
        var command = new DescribeAppImageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeArtifact = function (args, optionsOrCb, cb) {
        var command = new DescribeArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeAutoMLJob = function (args, optionsOrCb, cb) {
        var command = new DescribeAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeCodeRepository = function (args, optionsOrCb, cb) {
        var command = new DescribeCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeCompilationJob = function (args, optionsOrCb, cb) {
        var command = new DescribeCompilationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeContext = function (args, optionsOrCb, cb) {
        var command = new DescribeContextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeDataQualityJobDefinition = function (args, optionsOrCb, cb) {
        var command = new DescribeDataQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeDevice = function (args, optionsOrCb, cb) {
        var command = new DescribeDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeDeviceFleet = function (args, optionsOrCb, cb) {
        var command = new DescribeDeviceFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeDomain = function (args, optionsOrCb, cb) {
        var command = new DescribeDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeEdgePackagingJob = function (args, optionsOrCb, cb) {
        var command = new DescribeEdgePackagingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeEndpoint = function (args, optionsOrCb, cb) {
        var command = new DescribeEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeEndpointConfig = function (args, optionsOrCb, cb) {
        var command = new DescribeEndpointConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeExperiment = function (args, optionsOrCb, cb) {
        var command = new DescribeExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeFeatureGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeFeatureGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeFlowDefinition = function (args, optionsOrCb, cb) {
        var command = new DescribeFlowDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeHumanTaskUi = function (args, optionsOrCb, cb) {
        var command = new DescribeHumanTaskUiCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeHyperParameterTuningJob = function (args, optionsOrCb, cb) {
        var command = new DescribeHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeImage = function (args, optionsOrCb, cb) {
        var command = new DescribeImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeImageVersion = function (args, optionsOrCb, cb) {
        var command = new DescribeImageVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeLabelingJob = function (args, optionsOrCb, cb) {
        var command = new DescribeLabelingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeModel = function (args, optionsOrCb, cb) {
        var command = new DescribeModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeModelBiasJobDefinition = function (args, optionsOrCb, cb) {
        var command = new DescribeModelBiasJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeModelExplainabilityJobDefinition = function (args, optionsOrCb, cb) {
        var command = new DescribeModelExplainabilityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeModelPackage = function (args, optionsOrCb, cb) {
        var command = new DescribeModelPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeModelPackageGroup = function (args, optionsOrCb, cb) {
        var command = new DescribeModelPackageGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeModelQualityJobDefinition = function (args, optionsOrCb, cb) {
        var command = new DescribeModelQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeMonitoringSchedule = function (args, optionsOrCb, cb) {
        var command = new DescribeMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeNotebookInstance = function (args, optionsOrCb, cb) {
        var command = new DescribeNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeNotebookInstanceLifecycleConfig = function (args, optionsOrCb, cb) {
        var command = new DescribeNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describePipeline = function (args, optionsOrCb, cb) {
        var command = new DescribePipelineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describePipelineDefinitionForExecution = function (args, optionsOrCb, cb) {
        var command = new DescribePipelineDefinitionForExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describePipelineExecution = function (args, optionsOrCb, cb) {
        var command = new DescribePipelineExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeProcessingJob = function (args, optionsOrCb, cb) {
        var command = new DescribeProcessingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeProject = function (args, optionsOrCb, cb) {
        var command = new DescribeProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeSubscribedWorkteam = function (args, optionsOrCb, cb) {
        var command = new DescribeSubscribedWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeTrainingJob = function (args, optionsOrCb, cb) {
        var command = new DescribeTrainingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeTransformJob = function (args, optionsOrCb, cb) {
        var command = new DescribeTransformJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeTrial = function (args, optionsOrCb, cb) {
        var command = new DescribeTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeTrialComponent = function (args, optionsOrCb, cb) {
        var command = new DescribeTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeUserProfile = function (args, optionsOrCb, cb) {
        var command = new DescribeUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeWorkforce = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkforceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.describeWorkteam = function (args, optionsOrCb, cb) {
        var command = new DescribeWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.disableSagemakerServicecatalogPortfolio = function (args, optionsOrCb, cb) {
        var command = new DisableSagemakerServicecatalogPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.disassociateTrialComponent = function (args, optionsOrCb, cb) {
        var command = new DisassociateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.enableSagemakerServicecatalogPortfolio = function (args, optionsOrCb, cb) {
        var command = new EnableSagemakerServicecatalogPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.getDeviceFleetReport = function (args, optionsOrCb, cb) {
        var command = new GetDeviceFleetReportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.getModelPackageGroupPolicy = function (args, optionsOrCb, cb) {
        var command = new GetModelPackageGroupPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.getSagemakerServicecatalogPortfolioStatus = function (args, optionsOrCb, cb) {
        var command = new GetSagemakerServicecatalogPortfolioStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.getSearchSuggestions = function (args, optionsOrCb, cb) {
        var command = new GetSearchSuggestionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listActions = function (args, optionsOrCb, cb) {
        var command = new ListActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listAlgorithms = function (args, optionsOrCb, cb) {
        var command = new ListAlgorithmsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listAppImageConfigs = function (args, optionsOrCb, cb) {
        var command = new ListAppImageConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listApps = function (args, optionsOrCb, cb) {
        var command = new ListAppsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listArtifacts = function (args, optionsOrCb, cb) {
        var command = new ListArtifactsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listAssociations = function (args, optionsOrCb, cb) {
        var command = new ListAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listAutoMLJobs = function (args, optionsOrCb, cb) {
        var command = new ListAutoMLJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listCandidatesForAutoMLJob = function (args, optionsOrCb, cb) {
        var command = new ListCandidatesForAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listCodeRepositories = function (args, optionsOrCb, cb) {
        var command = new ListCodeRepositoriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listCompilationJobs = function (args, optionsOrCb, cb) {
        var command = new ListCompilationJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listContexts = function (args, optionsOrCb, cb) {
        var command = new ListContextsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listDataQualityJobDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListDataQualityJobDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listDeviceFleets = function (args, optionsOrCb, cb) {
        var command = new ListDeviceFleetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listDevices = function (args, optionsOrCb, cb) {
        var command = new ListDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listDomains = function (args, optionsOrCb, cb) {
        var command = new ListDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listEdgePackagingJobs = function (args, optionsOrCb, cb) {
        var command = new ListEdgePackagingJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listEndpointConfigs = function (args, optionsOrCb, cb) {
        var command = new ListEndpointConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listEndpoints = function (args, optionsOrCb, cb) {
        var command = new ListEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listExperiments = function (args, optionsOrCb, cb) {
        var command = new ListExperimentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listFeatureGroups = function (args, optionsOrCb, cb) {
        var command = new ListFeatureGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listFlowDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListFlowDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listHumanTaskUis = function (args, optionsOrCb, cb) {
        var command = new ListHumanTaskUisCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listHyperParameterTuningJobs = function (args, optionsOrCb, cb) {
        var command = new ListHyperParameterTuningJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listImages = function (args, optionsOrCb, cb) {
        var command = new ListImagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listImageVersions = function (args, optionsOrCb, cb) {
        var command = new ListImageVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listLabelingJobs = function (args, optionsOrCb, cb) {
        var command = new ListLabelingJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listLabelingJobsForWorkteam = function (args, optionsOrCb, cb) {
        var command = new ListLabelingJobsForWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listModelBiasJobDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListModelBiasJobDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listModelExplainabilityJobDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListModelExplainabilityJobDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listModelPackageGroups = function (args, optionsOrCb, cb) {
        var command = new ListModelPackageGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listModelPackages = function (args, optionsOrCb, cb) {
        var command = new ListModelPackagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listModelQualityJobDefinitions = function (args, optionsOrCb, cb) {
        var command = new ListModelQualityJobDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listModels = function (args, optionsOrCb, cb) {
        var command = new ListModelsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listMonitoringExecutions = function (args, optionsOrCb, cb) {
        var command = new ListMonitoringExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listMonitoringSchedules = function (args, optionsOrCb, cb) {
        var command = new ListMonitoringSchedulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listNotebookInstanceLifecycleConfigs = function (args, optionsOrCb, cb) {
        var command = new ListNotebookInstanceLifecycleConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listNotebookInstances = function (args, optionsOrCb, cb) {
        var command = new ListNotebookInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listPipelineExecutions = function (args, optionsOrCb, cb) {
        var command = new ListPipelineExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listPipelineExecutionSteps = function (args, optionsOrCb, cb) {
        var command = new ListPipelineExecutionStepsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listPipelineParametersForExecution = function (args, optionsOrCb, cb) {
        var command = new ListPipelineParametersForExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listPipelines = function (args, optionsOrCb, cb) {
        var command = new ListPipelinesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listProcessingJobs = function (args, optionsOrCb, cb) {
        var command = new ListProcessingJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listProjects = function (args, optionsOrCb, cb) {
        var command = new ListProjectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listSubscribedWorkteams = function (args, optionsOrCb, cb) {
        var command = new ListSubscribedWorkteamsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listTags = function (args, optionsOrCb, cb) {
        var command = new ListTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listTrainingJobs = function (args, optionsOrCb, cb) {
        var command = new ListTrainingJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listTrainingJobsForHyperParameterTuningJob = function (args, optionsOrCb, cb) {
        var command = new ListTrainingJobsForHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listTransformJobs = function (args, optionsOrCb, cb) {
        var command = new ListTransformJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listTrialComponents = function (args, optionsOrCb, cb) {
        var command = new ListTrialComponentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listTrials = function (args, optionsOrCb, cb) {
        var command = new ListTrialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listUserProfiles = function (args, optionsOrCb, cb) {
        var command = new ListUserProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listWorkforces = function (args, optionsOrCb, cb) {
        var command = new ListWorkforcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.listWorkteams = function (args, optionsOrCb, cb) {
        var command = new ListWorkteamsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.putModelPackageGroupPolicy = function (args, optionsOrCb, cb) {
        var command = new PutModelPackageGroupPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.registerDevices = function (args, optionsOrCb, cb) {
        var command = new RegisterDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.renderUiTemplate = function (args, optionsOrCb, cb) {
        var command = new RenderUiTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.search = function (args, optionsOrCb, cb) {
        var command = new SearchCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.startMonitoringSchedule = function (args, optionsOrCb, cb) {
        var command = new StartMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.startNotebookInstance = function (args, optionsOrCb, cb) {
        var command = new StartNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.startPipelineExecution = function (args, optionsOrCb, cb) {
        var command = new StartPipelineExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.stopAutoMLJob = function (args, optionsOrCb, cb) {
        var command = new StopAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.stopCompilationJob = function (args, optionsOrCb, cb) {
        var command = new StopCompilationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.stopEdgePackagingJob = function (args, optionsOrCb, cb) {
        var command = new StopEdgePackagingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.stopHyperParameterTuningJob = function (args, optionsOrCb, cb) {
        var command = new StopHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.stopLabelingJob = function (args, optionsOrCb, cb) {
        var command = new StopLabelingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.stopMonitoringSchedule = function (args, optionsOrCb, cb) {
        var command = new StopMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.stopNotebookInstance = function (args, optionsOrCb, cb) {
        var command = new StopNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.stopPipelineExecution = function (args, optionsOrCb, cb) {
        var command = new StopPipelineExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.stopProcessingJob = function (args, optionsOrCb, cb) {
        var command = new StopProcessingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.stopTrainingJob = function (args, optionsOrCb, cb) {
        var command = new StopTrainingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.stopTransformJob = function (args, optionsOrCb, cb) {
        var command = new StopTransformJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateAction = function (args, optionsOrCb, cb) {
        var command = new UpdateActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateAppImageConfig = function (args, optionsOrCb, cb) {
        var command = new UpdateAppImageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateArtifact = function (args, optionsOrCb, cb) {
        var command = new UpdateArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateCodeRepository = function (args, optionsOrCb, cb) {
        var command = new UpdateCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateContext = function (args, optionsOrCb, cb) {
        var command = new UpdateContextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateDeviceFleet = function (args, optionsOrCb, cb) {
        var command = new UpdateDeviceFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateDevices = function (args, optionsOrCb, cb) {
        var command = new UpdateDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateDomain = function (args, optionsOrCb, cb) {
        var command = new UpdateDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateEndpoint = function (args, optionsOrCb, cb) {
        var command = new UpdateEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateEndpointWeightsAndCapacities = function (args, optionsOrCb, cb) {
        var command = new UpdateEndpointWeightsAndCapacitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateExperiment = function (args, optionsOrCb, cb) {
        var command = new UpdateExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateImage = function (args, optionsOrCb, cb) {
        var command = new UpdateImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateModelPackage = function (args, optionsOrCb, cb) {
        var command = new UpdateModelPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateMonitoringSchedule = function (args, optionsOrCb, cb) {
        var command = new UpdateMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateNotebookInstance = function (args, optionsOrCb, cb) {
        var command = new UpdateNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateNotebookInstanceLifecycleConfig = function (args, optionsOrCb, cb) {
        var command = new UpdateNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updatePipeline = function (args, optionsOrCb, cb) {
        var command = new UpdatePipelineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updatePipelineExecution = function (args, optionsOrCb, cb) {
        var command = new UpdatePipelineExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateTrainingJob = function (args, optionsOrCb, cb) {
        var command = new UpdateTrainingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateTrial = function (args, optionsOrCb, cb) {
        var command = new UpdateTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateTrialComponent = function (args, optionsOrCb, cb) {
        var command = new UpdateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateUserProfile = function (args, optionsOrCb, cb) {
        var command = new UpdateUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateWorkforce = function (args, optionsOrCb, cb) {
        var command = new UpdateWorkforceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    SageMaker.prototype.updateWorkteam = function (args, optionsOrCb, cb) {
        var command = new UpdateWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error("Expect http options but get " + typeof optionsOrCb);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    };
    return SageMaker;
}(SageMakerClient));
export { SageMaker };
//# sourceMappingURL=SageMaker.js.map