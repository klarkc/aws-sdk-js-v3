"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SageMaker = void 0;
const SageMakerClient_1 = require("./SageMakerClient");
const AddAssociationCommand_1 = require("./commands/AddAssociationCommand");
const AddTagsCommand_1 = require("./commands/AddTagsCommand");
const AssociateTrialComponentCommand_1 = require("./commands/AssociateTrialComponentCommand");
const CreateActionCommand_1 = require("./commands/CreateActionCommand");
const CreateAlgorithmCommand_1 = require("./commands/CreateAlgorithmCommand");
const CreateAppCommand_1 = require("./commands/CreateAppCommand");
const CreateAppImageConfigCommand_1 = require("./commands/CreateAppImageConfigCommand");
const CreateArtifactCommand_1 = require("./commands/CreateArtifactCommand");
const CreateAutoMLJobCommand_1 = require("./commands/CreateAutoMLJobCommand");
const CreateCodeRepositoryCommand_1 = require("./commands/CreateCodeRepositoryCommand");
const CreateCompilationJobCommand_1 = require("./commands/CreateCompilationJobCommand");
const CreateContextCommand_1 = require("./commands/CreateContextCommand");
const CreateDataQualityJobDefinitionCommand_1 = require("./commands/CreateDataQualityJobDefinitionCommand");
const CreateDeviceFleetCommand_1 = require("./commands/CreateDeviceFleetCommand");
const CreateDomainCommand_1 = require("./commands/CreateDomainCommand");
const CreateEdgePackagingJobCommand_1 = require("./commands/CreateEdgePackagingJobCommand");
const CreateEndpointCommand_1 = require("./commands/CreateEndpointCommand");
const CreateEndpointConfigCommand_1 = require("./commands/CreateEndpointConfigCommand");
const CreateExperimentCommand_1 = require("./commands/CreateExperimentCommand");
const CreateFeatureGroupCommand_1 = require("./commands/CreateFeatureGroupCommand");
const CreateFlowDefinitionCommand_1 = require("./commands/CreateFlowDefinitionCommand");
const CreateHumanTaskUiCommand_1 = require("./commands/CreateHumanTaskUiCommand");
const CreateHyperParameterTuningJobCommand_1 = require("./commands/CreateHyperParameterTuningJobCommand");
const CreateImageCommand_1 = require("./commands/CreateImageCommand");
const CreateImageVersionCommand_1 = require("./commands/CreateImageVersionCommand");
const CreateLabelingJobCommand_1 = require("./commands/CreateLabelingJobCommand");
const CreateModelBiasJobDefinitionCommand_1 = require("./commands/CreateModelBiasJobDefinitionCommand");
const CreateModelCommand_1 = require("./commands/CreateModelCommand");
const CreateModelExplainabilityJobDefinitionCommand_1 = require("./commands/CreateModelExplainabilityJobDefinitionCommand");
const CreateModelPackageCommand_1 = require("./commands/CreateModelPackageCommand");
const CreateModelPackageGroupCommand_1 = require("./commands/CreateModelPackageGroupCommand");
const CreateModelQualityJobDefinitionCommand_1 = require("./commands/CreateModelQualityJobDefinitionCommand");
const CreateMonitoringScheduleCommand_1 = require("./commands/CreateMonitoringScheduleCommand");
const CreateNotebookInstanceCommand_1 = require("./commands/CreateNotebookInstanceCommand");
const CreateNotebookInstanceLifecycleConfigCommand_1 = require("./commands/CreateNotebookInstanceLifecycleConfigCommand");
const CreatePipelineCommand_1 = require("./commands/CreatePipelineCommand");
const CreatePresignedDomainUrlCommand_1 = require("./commands/CreatePresignedDomainUrlCommand");
const CreatePresignedNotebookInstanceUrlCommand_1 = require("./commands/CreatePresignedNotebookInstanceUrlCommand");
const CreateProcessingJobCommand_1 = require("./commands/CreateProcessingJobCommand");
const CreateProjectCommand_1 = require("./commands/CreateProjectCommand");
const CreateTrainingJobCommand_1 = require("./commands/CreateTrainingJobCommand");
const CreateTransformJobCommand_1 = require("./commands/CreateTransformJobCommand");
const CreateTrialCommand_1 = require("./commands/CreateTrialCommand");
const CreateTrialComponentCommand_1 = require("./commands/CreateTrialComponentCommand");
const CreateUserProfileCommand_1 = require("./commands/CreateUserProfileCommand");
const CreateWorkforceCommand_1 = require("./commands/CreateWorkforceCommand");
const CreateWorkteamCommand_1 = require("./commands/CreateWorkteamCommand");
const DeleteActionCommand_1 = require("./commands/DeleteActionCommand");
const DeleteAlgorithmCommand_1 = require("./commands/DeleteAlgorithmCommand");
const DeleteAppCommand_1 = require("./commands/DeleteAppCommand");
const DeleteAppImageConfigCommand_1 = require("./commands/DeleteAppImageConfigCommand");
const DeleteArtifactCommand_1 = require("./commands/DeleteArtifactCommand");
const DeleteAssociationCommand_1 = require("./commands/DeleteAssociationCommand");
const DeleteCodeRepositoryCommand_1 = require("./commands/DeleteCodeRepositoryCommand");
const DeleteContextCommand_1 = require("./commands/DeleteContextCommand");
const DeleteDataQualityJobDefinitionCommand_1 = require("./commands/DeleteDataQualityJobDefinitionCommand");
const DeleteDeviceFleetCommand_1 = require("./commands/DeleteDeviceFleetCommand");
const DeleteDomainCommand_1 = require("./commands/DeleteDomainCommand");
const DeleteEndpointCommand_1 = require("./commands/DeleteEndpointCommand");
const DeleteEndpointConfigCommand_1 = require("./commands/DeleteEndpointConfigCommand");
const DeleteExperimentCommand_1 = require("./commands/DeleteExperimentCommand");
const DeleteFeatureGroupCommand_1 = require("./commands/DeleteFeatureGroupCommand");
const DeleteFlowDefinitionCommand_1 = require("./commands/DeleteFlowDefinitionCommand");
const DeleteHumanTaskUiCommand_1 = require("./commands/DeleteHumanTaskUiCommand");
const DeleteImageCommand_1 = require("./commands/DeleteImageCommand");
const DeleteImageVersionCommand_1 = require("./commands/DeleteImageVersionCommand");
const DeleteModelBiasJobDefinitionCommand_1 = require("./commands/DeleteModelBiasJobDefinitionCommand");
const DeleteModelCommand_1 = require("./commands/DeleteModelCommand");
const DeleteModelExplainabilityJobDefinitionCommand_1 = require("./commands/DeleteModelExplainabilityJobDefinitionCommand");
const DeleteModelPackageCommand_1 = require("./commands/DeleteModelPackageCommand");
const DeleteModelPackageGroupCommand_1 = require("./commands/DeleteModelPackageGroupCommand");
const DeleteModelPackageGroupPolicyCommand_1 = require("./commands/DeleteModelPackageGroupPolicyCommand");
const DeleteModelQualityJobDefinitionCommand_1 = require("./commands/DeleteModelQualityJobDefinitionCommand");
const DeleteMonitoringScheduleCommand_1 = require("./commands/DeleteMonitoringScheduleCommand");
const DeleteNotebookInstanceCommand_1 = require("./commands/DeleteNotebookInstanceCommand");
const DeleteNotebookInstanceLifecycleConfigCommand_1 = require("./commands/DeleteNotebookInstanceLifecycleConfigCommand");
const DeletePipelineCommand_1 = require("./commands/DeletePipelineCommand");
const DeleteProjectCommand_1 = require("./commands/DeleteProjectCommand");
const DeleteTagsCommand_1 = require("./commands/DeleteTagsCommand");
const DeleteTrialCommand_1 = require("./commands/DeleteTrialCommand");
const DeleteTrialComponentCommand_1 = require("./commands/DeleteTrialComponentCommand");
const DeleteUserProfileCommand_1 = require("./commands/DeleteUserProfileCommand");
const DeleteWorkforceCommand_1 = require("./commands/DeleteWorkforceCommand");
const DeleteWorkteamCommand_1 = require("./commands/DeleteWorkteamCommand");
const DeregisterDevicesCommand_1 = require("./commands/DeregisterDevicesCommand");
const DescribeActionCommand_1 = require("./commands/DescribeActionCommand");
const DescribeAlgorithmCommand_1 = require("./commands/DescribeAlgorithmCommand");
const DescribeAppCommand_1 = require("./commands/DescribeAppCommand");
const DescribeAppImageConfigCommand_1 = require("./commands/DescribeAppImageConfigCommand");
const DescribeArtifactCommand_1 = require("./commands/DescribeArtifactCommand");
const DescribeAutoMLJobCommand_1 = require("./commands/DescribeAutoMLJobCommand");
const DescribeCodeRepositoryCommand_1 = require("./commands/DescribeCodeRepositoryCommand");
const DescribeCompilationJobCommand_1 = require("./commands/DescribeCompilationJobCommand");
const DescribeContextCommand_1 = require("./commands/DescribeContextCommand");
const DescribeDataQualityJobDefinitionCommand_1 = require("./commands/DescribeDataQualityJobDefinitionCommand");
const DescribeDeviceCommand_1 = require("./commands/DescribeDeviceCommand");
const DescribeDeviceFleetCommand_1 = require("./commands/DescribeDeviceFleetCommand");
const DescribeDomainCommand_1 = require("./commands/DescribeDomainCommand");
const DescribeEdgePackagingJobCommand_1 = require("./commands/DescribeEdgePackagingJobCommand");
const DescribeEndpointCommand_1 = require("./commands/DescribeEndpointCommand");
const DescribeEndpointConfigCommand_1 = require("./commands/DescribeEndpointConfigCommand");
const DescribeExperimentCommand_1 = require("./commands/DescribeExperimentCommand");
const DescribeFeatureGroupCommand_1 = require("./commands/DescribeFeatureGroupCommand");
const DescribeFlowDefinitionCommand_1 = require("./commands/DescribeFlowDefinitionCommand");
const DescribeHumanTaskUiCommand_1 = require("./commands/DescribeHumanTaskUiCommand");
const DescribeHyperParameterTuningJobCommand_1 = require("./commands/DescribeHyperParameterTuningJobCommand");
const DescribeImageCommand_1 = require("./commands/DescribeImageCommand");
const DescribeImageVersionCommand_1 = require("./commands/DescribeImageVersionCommand");
const DescribeLabelingJobCommand_1 = require("./commands/DescribeLabelingJobCommand");
const DescribeModelBiasJobDefinitionCommand_1 = require("./commands/DescribeModelBiasJobDefinitionCommand");
const DescribeModelCommand_1 = require("./commands/DescribeModelCommand");
const DescribeModelExplainabilityJobDefinitionCommand_1 = require("./commands/DescribeModelExplainabilityJobDefinitionCommand");
const DescribeModelPackageCommand_1 = require("./commands/DescribeModelPackageCommand");
const DescribeModelPackageGroupCommand_1 = require("./commands/DescribeModelPackageGroupCommand");
const DescribeModelQualityJobDefinitionCommand_1 = require("./commands/DescribeModelQualityJobDefinitionCommand");
const DescribeMonitoringScheduleCommand_1 = require("./commands/DescribeMonitoringScheduleCommand");
const DescribeNotebookInstanceCommand_1 = require("./commands/DescribeNotebookInstanceCommand");
const DescribeNotebookInstanceLifecycleConfigCommand_1 = require("./commands/DescribeNotebookInstanceLifecycleConfigCommand");
const DescribePipelineCommand_1 = require("./commands/DescribePipelineCommand");
const DescribePipelineDefinitionForExecutionCommand_1 = require("./commands/DescribePipelineDefinitionForExecutionCommand");
const DescribePipelineExecutionCommand_1 = require("./commands/DescribePipelineExecutionCommand");
const DescribeProcessingJobCommand_1 = require("./commands/DescribeProcessingJobCommand");
const DescribeProjectCommand_1 = require("./commands/DescribeProjectCommand");
const DescribeSubscribedWorkteamCommand_1 = require("./commands/DescribeSubscribedWorkteamCommand");
const DescribeTrainingJobCommand_1 = require("./commands/DescribeTrainingJobCommand");
const DescribeTransformJobCommand_1 = require("./commands/DescribeTransformJobCommand");
const DescribeTrialCommand_1 = require("./commands/DescribeTrialCommand");
const DescribeTrialComponentCommand_1 = require("./commands/DescribeTrialComponentCommand");
const DescribeUserProfileCommand_1 = require("./commands/DescribeUserProfileCommand");
const DescribeWorkforceCommand_1 = require("./commands/DescribeWorkforceCommand");
const DescribeWorkteamCommand_1 = require("./commands/DescribeWorkteamCommand");
const DisableSagemakerServicecatalogPortfolioCommand_1 = require("./commands/DisableSagemakerServicecatalogPortfolioCommand");
const DisassociateTrialComponentCommand_1 = require("./commands/DisassociateTrialComponentCommand");
const EnableSagemakerServicecatalogPortfolioCommand_1 = require("./commands/EnableSagemakerServicecatalogPortfolioCommand");
const GetDeviceFleetReportCommand_1 = require("./commands/GetDeviceFleetReportCommand");
const GetModelPackageGroupPolicyCommand_1 = require("./commands/GetModelPackageGroupPolicyCommand");
const GetSagemakerServicecatalogPortfolioStatusCommand_1 = require("./commands/GetSagemakerServicecatalogPortfolioStatusCommand");
const GetSearchSuggestionsCommand_1 = require("./commands/GetSearchSuggestionsCommand");
const ListActionsCommand_1 = require("./commands/ListActionsCommand");
const ListAlgorithmsCommand_1 = require("./commands/ListAlgorithmsCommand");
const ListAppImageConfigsCommand_1 = require("./commands/ListAppImageConfigsCommand");
const ListAppsCommand_1 = require("./commands/ListAppsCommand");
const ListArtifactsCommand_1 = require("./commands/ListArtifactsCommand");
const ListAssociationsCommand_1 = require("./commands/ListAssociationsCommand");
const ListAutoMLJobsCommand_1 = require("./commands/ListAutoMLJobsCommand");
const ListCandidatesForAutoMLJobCommand_1 = require("./commands/ListCandidatesForAutoMLJobCommand");
const ListCodeRepositoriesCommand_1 = require("./commands/ListCodeRepositoriesCommand");
const ListCompilationJobsCommand_1 = require("./commands/ListCompilationJobsCommand");
const ListContextsCommand_1 = require("./commands/ListContextsCommand");
const ListDataQualityJobDefinitionsCommand_1 = require("./commands/ListDataQualityJobDefinitionsCommand");
const ListDeviceFleetsCommand_1 = require("./commands/ListDeviceFleetsCommand");
const ListDevicesCommand_1 = require("./commands/ListDevicesCommand");
const ListDomainsCommand_1 = require("./commands/ListDomainsCommand");
const ListEdgePackagingJobsCommand_1 = require("./commands/ListEdgePackagingJobsCommand");
const ListEndpointConfigsCommand_1 = require("./commands/ListEndpointConfigsCommand");
const ListEndpointsCommand_1 = require("./commands/ListEndpointsCommand");
const ListExperimentsCommand_1 = require("./commands/ListExperimentsCommand");
const ListFeatureGroupsCommand_1 = require("./commands/ListFeatureGroupsCommand");
const ListFlowDefinitionsCommand_1 = require("./commands/ListFlowDefinitionsCommand");
const ListHumanTaskUisCommand_1 = require("./commands/ListHumanTaskUisCommand");
const ListHyperParameterTuningJobsCommand_1 = require("./commands/ListHyperParameterTuningJobsCommand");
const ListImageVersionsCommand_1 = require("./commands/ListImageVersionsCommand");
const ListImagesCommand_1 = require("./commands/ListImagesCommand");
const ListLabelingJobsCommand_1 = require("./commands/ListLabelingJobsCommand");
const ListLabelingJobsForWorkteamCommand_1 = require("./commands/ListLabelingJobsForWorkteamCommand");
const ListModelBiasJobDefinitionsCommand_1 = require("./commands/ListModelBiasJobDefinitionsCommand");
const ListModelExplainabilityJobDefinitionsCommand_1 = require("./commands/ListModelExplainabilityJobDefinitionsCommand");
const ListModelPackageGroupsCommand_1 = require("./commands/ListModelPackageGroupsCommand");
const ListModelPackagesCommand_1 = require("./commands/ListModelPackagesCommand");
const ListModelQualityJobDefinitionsCommand_1 = require("./commands/ListModelQualityJobDefinitionsCommand");
const ListModelsCommand_1 = require("./commands/ListModelsCommand");
const ListMonitoringExecutionsCommand_1 = require("./commands/ListMonitoringExecutionsCommand");
const ListMonitoringSchedulesCommand_1 = require("./commands/ListMonitoringSchedulesCommand");
const ListNotebookInstanceLifecycleConfigsCommand_1 = require("./commands/ListNotebookInstanceLifecycleConfigsCommand");
const ListNotebookInstancesCommand_1 = require("./commands/ListNotebookInstancesCommand");
const ListPipelineExecutionStepsCommand_1 = require("./commands/ListPipelineExecutionStepsCommand");
const ListPipelineExecutionsCommand_1 = require("./commands/ListPipelineExecutionsCommand");
const ListPipelineParametersForExecutionCommand_1 = require("./commands/ListPipelineParametersForExecutionCommand");
const ListPipelinesCommand_1 = require("./commands/ListPipelinesCommand");
const ListProcessingJobsCommand_1 = require("./commands/ListProcessingJobsCommand");
const ListProjectsCommand_1 = require("./commands/ListProjectsCommand");
const ListSubscribedWorkteamsCommand_1 = require("./commands/ListSubscribedWorkteamsCommand");
const ListTagsCommand_1 = require("./commands/ListTagsCommand");
const ListTrainingJobsCommand_1 = require("./commands/ListTrainingJobsCommand");
const ListTrainingJobsForHyperParameterTuningJobCommand_1 = require("./commands/ListTrainingJobsForHyperParameterTuningJobCommand");
const ListTransformJobsCommand_1 = require("./commands/ListTransformJobsCommand");
const ListTrialComponentsCommand_1 = require("./commands/ListTrialComponentsCommand");
const ListTrialsCommand_1 = require("./commands/ListTrialsCommand");
const ListUserProfilesCommand_1 = require("./commands/ListUserProfilesCommand");
const ListWorkforcesCommand_1 = require("./commands/ListWorkforcesCommand");
const ListWorkteamsCommand_1 = require("./commands/ListWorkteamsCommand");
const PutModelPackageGroupPolicyCommand_1 = require("./commands/PutModelPackageGroupPolicyCommand");
const RegisterDevicesCommand_1 = require("./commands/RegisterDevicesCommand");
const RenderUiTemplateCommand_1 = require("./commands/RenderUiTemplateCommand");
const SearchCommand_1 = require("./commands/SearchCommand");
const StartMonitoringScheduleCommand_1 = require("./commands/StartMonitoringScheduleCommand");
const StartNotebookInstanceCommand_1 = require("./commands/StartNotebookInstanceCommand");
const StartPipelineExecutionCommand_1 = require("./commands/StartPipelineExecutionCommand");
const StopAutoMLJobCommand_1 = require("./commands/StopAutoMLJobCommand");
const StopCompilationJobCommand_1 = require("./commands/StopCompilationJobCommand");
const StopEdgePackagingJobCommand_1 = require("./commands/StopEdgePackagingJobCommand");
const StopHyperParameterTuningJobCommand_1 = require("./commands/StopHyperParameterTuningJobCommand");
const StopLabelingJobCommand_1 = require("./commands/StopLabelingJobCommand");
const StopMonitoringScheduleCommand_1 = require("./commands/StopMonitoringScheduleCommand");
const StopNotebookInstanceCommand_1 = require("./commands/StopNotebookInstanceCommand");
const StopPipelineExecutionCommand_1 = require("./commands/StopPipelineExecutionCommand");
const StopProcessingJobCommand_1 = require("./commands/StopProcessingJobCommand");
const StopTrainingJobCommand_1 = require("./commands/StopTrainingJobCommand");
const StopTransformJobCommand_1 = require("./commands/StopTransformJobCommand");
const UpdateActionCommand_1 = require("./commands/UpdateActionCommand");
const UpdateAppImageConfigCommand_1 = require("./commands/UpdateAppImageConfigCommand");
const UpdateArtifactCommand_1 = require("./commands/UpdateArtifactCommand");
const UpdateCodeRepositoryCommand_1 = require("./commands/UpdateCodeRepositoryCommand");
const UpdateContextCommand_1 = require("./commands/UpdateContextCommand");
const UpdateDeviceFleetCommand_1 = require("./commands/UpdateDeviceFleetCommand");
const UpdateDevicesCommand_1 = require("./commands/UpdateDevicesCommand");
const UpdateDomainCommand_1 = require("./commands/UpdateDomainCommand");
const UpdateEndpointCommand_1 = require("./commands/UpdateEndpointCommand");
const UpdateEndpointWeightsAndCapacitiesCommand_1 = require("./commands/UpdateEndpointWeightsAndCapacitiesCommand");
const UpdateExperimentCommand_1 = require("./commands/UpdateExperimentCommand");
const UpdateImageCommand_1 = require("./commands/UpdateImageCommand");
const UpdateModelPackageCommand_1 = require("./commands/UpdateModelPackageCommand");
const UpdateMonitoringScheduleCommand_1 = require("./commands/UpdateMonitoringScheduleCommand");
const UpdateNotebookInstanceCommand_1 = require("./commands/UpdateNotebookInstanceCommand");
const UpdateNotebookInstanceLifecycleConfigCommand_1 = require("./commands/UpdateNotebookInstanceLifecycleConfigCommand");
const UpdatePipelineCommand_1 = require("./commands/UpdatePipelineCommand");
const UpdatePipelineExecutionCommand_1 = require("./commands/UpdatePipelineExecutionCommand");
const UpdateTrainingJobCommand_1 = require("./commands/UpdateTrainingJobCommand");
const UpdateTrialCommand_1 = require("./commands/UpdateTrialCommand");
const UpdateTrialComponentCommand_1 = require("./commands/UpdateTrialComponentCommand");
const UpdateUserProfileCommand_1 = require("./commands/UpdateUserProfileCommand");
const UpdateWorkforceCommand_1 = require("./commands/UpdateWorkforceCommand");
const UpdateWorkteamCommand_1 = require("./commands/UpdateWorkteamCommand");
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
class SageMaker extends SageMakerClient_1.SageMakerClient {
    addAssociation(args, optionsOrCb, cb) {
        const command = new AddAssociationCommand_1.AddAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    addTags(args, optionsOrCb, cb) {
        const command = new AddTagsCommand_1.AddTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    associateTrialComponent(args, optionsOrCb, cb) {
        const command = new AssociateTrialComponentCommand_1.AssociateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAction(args, optionsOrCb, cb) {
        const command = new CreateActionCommand_1.CreateActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAlgorithm(args, optionsOrCb, cb) {
        const command = new CreateAlgorithmCommand_1.CreateAlgorithmCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createApp(args, optionsOrCb, cb) {
        const command = new CreateAppCommand_1.CreateAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAppImageConfig(args, optionsOrCb, cb) {
        const command = new CreateAppImageConfigCommand_1.CreateAppImageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createArtifact(args, optionsOrCb, cb) {
        const command = new CreateArtifactCommand_1.CreateArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createAutoMLJob(args, optionsOrCb, cb) {
        const command = new CreateAutoMLJobCommand_1.CreateAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCodeRepository(args, optionsOrCb, cb) {
        const command = new CreateCodeRepositoryCommand_1.CreateCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createCompilationJob(args, optionsOrCb, cb) {
        const command = new CreateCompilationJobCommand_1.CreateCompilationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createContext(args, optionsOrCb, cb) {
        const command = new CreateContextCommand_1.CreateContextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDataQualityJobDefinition(args, optionsOrCb, cb) {
        const command = new CreateDataQualityJobDefinitionCommand_1.CreateDataQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDeviceFleet(args, optionsOrCb, cb) {
        const command = new CreateDeviceFleetCommand_1.CreateDeviceFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createDomain(args, optionsOrCb, cb) {
        const command = new CreateDomainCommand_1.CreateDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createEdgePackagingJob(args, optionsOrCb, cb) {
        const command = new CreateEdgePackagingJobCommand_1.CreateEdgePackagingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createEndpoint(args, optionsOrCb, cb) {
        const command = new CreateEndpointCommand_1.CreateEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createEndpointConfig(args, optionsOrCb, cb) {
        const command = new CreateEndpointConfigCommand_1.CreateEndpointConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createExperiment(args, optionsOrCb, cb) {
        const command = new CreateExperimentCommand_1.CreateExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFeatureGroup(args, optionsOrCb, cb) {
        const command = new CreateFeatureGroupCommand_1.CreateFeatureGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createFlowDefinition(args, optionsOrCb, cb) {
        const command = new CreateFlowDefinitionCommand_1.CreateFlowDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createHumanTaskUi(args, optionsOrCb, cb) {
        const command = new CreateHumanTaskUiCommand_1.CreateHumanTaskUiCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createHyperParameterTuningJob(args, optionsOrCb, cb) {
        const command = new CreateHyperParameterTuningJobCommand_1.CreateHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createImage(args, optionsOrCb, cb) {
        const command = new CreateImageCommand_1.CreateImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createImageVersion(args, optionsOrCb, cb) {
        const command = new CreateImageVersionCommand_1.CreateImageVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createLabelingJob(args, optionsOrCb, cb) {
        const command = new CreateLabelingJobCommand_1.CreateLabelingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createModel(args, optionsOrCb, cb) {
        const command = new CreateModelCommand_1.CreateModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createModelBiasJobDefinition(args, optionsOrCb, cb) {
        const command = new CreateModelBiasJobDefinitionCommand_1.CreateModelBiasJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createModelExplainabilityJobDefinition(args, optionsOrCb, cb) {
        const command = new CreateModelExplainabilityJobDefinitionCommand_1.CreateModelExplainabilityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createModelPackage(args, optionsOrCb, cb) {
        const command = new CreateModelPackageCommand_1.CreateModelPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createModelPackageGroup(args, optionsOrCb, cb) {
        const command = new CreateModelPackageGroupCommand_1.CreateModelPackageGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createModelQualityJobDefinition(args, optionsOrCb, cb) {
        const command = new CreateModelQualityJobDefinitionCommand_1.CreateModelQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new CreateMonitoringScheduleCommand_1.CreateMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNotebookInstance(args, optionsOrCb, cb) {
        const command = new CreateNotebookInstanceCommand_1.CreateNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createNotebookInstanceLifecycleConfig(args, optionsOrCb, cb) {
        const command = new CreateNotebookInstanceLifecycleConfigCommand_1.CreateNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPipeline(args, optionsOrCb, cb) {
        const command = new CreatePipelineCommand_1.CreatePipelineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPresignedDomainUrl(args, optionsOrCb, cb) {
        const command = new CreatePresignedDomainUrlCommand_1.CreatePresignedDomainUrlCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createPresignedNotebookInstanceUrl(args, optionsOrCb, cb) {
        const command = new CreatePresignedNotebookInstanceUrlCommand_1.CreatePresignedNotebookInstanceUrlCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createProcessingJob(args, optionsOrCb, cb) {
        const command = new CreateProcessingJobCommand_1.CreateProcessingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createProject(args, optionsOrCb, cb) {
        const command = new CreateProjectCommand_1.CreateProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTrainingJob(args, optionsOrCb, cb) {
        const command = new CreateTrainingJobCommand_1.CreateTrainingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTransformJob(args, optionsOrCb, cb) {
        const command = new CreateTransformJobCommand_1.CreateTransformJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTrial(args, optionsOrCb, cb) {
        const command = new CreateTrialCommand_1.CreateTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createTrialComponent(args, optionsOrCb, cb) {
        const command = new CreateTrialComponentCommand_1.CreateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createUserProfile(args, optionsOrCb, cb) {
        const command = new CreateUserProfileCommand_1.CreateUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createWorkforce(args, optionsOrCb, cb) {
        const command = new CreateWorkforceCommand_1.CreateWorkforceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    createWorkteam(args, optionsOrCb, cb) {
        const command = new CreateWorkteamCommand_1.CreateWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAction(args, optionsOrCb, cb) {
        const command = new DeleteActionCommand_1.DeleteActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAlgorithm(args, optionsOrCb, cb) {
        const command = new DeleteAlgorithmCommand_1.DeleteAlgorithmCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteApp(args, optionsOrCb, cb) {
        const command = new DeleteAppCommand_1.DeleteAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAppImageConfig(args, optionsOrCb, cb) {
        const command = new DeleteAppImageConfigCommand_1.DeleteAppImageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteArtifact(args, optionsOrCb, cb) {
        const command = new DeleteArtifactCommand_1.DeleteArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteAssociation(args, optionsOrCb, cb) {
        const command = new DeleteAssociationCommand_1.DeleteAssociationCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteCodeRepository(args, optionsOrCb, cb) {
        const command = new DeleteCodeRepositoryCommand_1.DeleteCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteContext(args, optionsOrCb, cb) {
        const command = new DeleteContextCommand_1.DeleteContextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDataQualityJobDefinition(args, optionsOrCb, cb) {
        const command = new DeleteDataQualityJobDefinitionCommand_1.DeleteDataQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDeviceFleet(args, optionsOrCb, cb) {
        const command = new DeleteDeviceFleetCommand_1.DeleteDeviceFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteDomain(args, optionsOrCb, cb) {
        const command = new DeleteDomainCommand_1.DeleteDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteEndpoint(args, optionsOrCb, cb) {
        const command = new DeleteEndpointCommand_1.DeleteEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteEndpointConfig(args, optionsOrCb, cb) {
        const command = new DeleteEndpointConfigCommand_1.DeleteEndpointConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteExperiment(args, optionsOrCb, cb) {
        const command = new DeleteExperimentCommand_1.DeleteExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFeatureGroup(args, optionsOrCb, cb) {
        const command = new DeleteFeatureGroupCommand_1.DeleteFeatureGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteFlowDefinition(args, optionsOrCb, cb) {
        const command = new DeleteFlowDefinitionCommand_1.DeleteFlowDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteHumanTaskUi(args, optionsOrCb, cb) {
        const command = new DeleteHumanTaskUiCommand_1.DeleteHumanTaskUiCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteImage(args, optionsOrCb, cb) {
        const command = new DeleteImageCommand_1.DeleteImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteImageVersion(args, optionsOrCb, cb) {
        const command = new DeleteImageVersionCommand_1.DeleteImageVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteModel(args, optionsOrCb, cb) {
        const command = new DeleteModelCommand_1.DeleteModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteModelBiasJobDefinition(args, optionsOrCb, cb) {
        const command = new DeleteModelBiasJobDefinitionCommand_1.DeleteModelBiasJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteModelExplainabilityJobDefinition(args, optionsOrCb, cb) {
        const command = new DeleteModelExplainabilityJobDefinitionCommand_1.DeleteModelExplainabilityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteModelPackage(args, optionsOrCb, cb) {
        const command = new DeleteModelPackageCommand_1.DeleteModelPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteModelPackageGroup(args, optionsOrCb, cb) {
        const command = new DeleteModelPackageGroupCommand_1.DeleteModelPackageGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteModelPackageGroupPolicy(args, optionsOrCb, cb) {
        const command = new DeleteModelPackageGroupPolicyCommand_1.DeleteModelPackageGroupPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteModelQualityJobDefinition(args, optionsOrCb, cb) {
        const command = new DeleteModelQualityJobDefinitionCommand_1.DeleteModelQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new DeleteMonitoringScheduleCommand_1.DeleteMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNotebookInstance(args, optionsOrCb, cb) {
        const command = new DeleteNotebookInstanceCommand_1.DeleteNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteNotebookInstanceLifecycleConfig(args, optionsOrCb, cb) {
        const command = new DeleteNotebookInstanceLifecycleConfigCommand_1.DeleteNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deletePipeline(args, optionsOrCb, cb) {
        const command = new DeletePipelineCommand_1.DeletePipelineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteProject(args, optionsOrCb, cb) {
        const command = new DeleteProjectCommand_1.DeleteProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTags(args, optionsOrCb, cb) {
        const command = new DeleteTagsCommand_1.DeleteTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTrial(args, optionsOrCb, cb) {
        const command = new DeleteTrialCommand_1.DeleteTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteTrialComponent(args, optionsOrCb, cb) {
        const command = new DeleteTrialComponentCommand_1.DeleteTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteUserProfile(args, optionsOrCb, cb) {
        const command = new DeleteUserProfileCommand_1.DeleteUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteWorkforce(args, optionsOrCb, cb) {
        const command = new DeleteWorkforceCommand_1.DeleteWorkforceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deleteWorkteam(args, optionsOrCb, cb) {
        const command = new DeleteWorkteamCommand_1.DeleteWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    deregisterDevices(args, optionsOrCb, cb) {
        const command = new DeregisterDevicesCommand_1.DeregisterDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAction(args, optionsOrCb, cb) {
        const command = new DescribeActionCommand_1.DescribeActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAlgorithm(args, optionsOrCb, cb) {
        const command = new DescribeAlgorithmCommand_1.DescribeAlgorithmCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeApp(args, optionsOrCb, cb) {
        const command = new DescribeAppCommand_1.DescribeAppCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAppImageConfig(args, optionsOrCb, cb) {
        const command = new DescribeAppImageConfigCommand_1.DescribeAppImageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeArtifact(args, optionsOrCb, cb) {
        const command = new DescribeArtifactCommand_1.DescribeArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeAutoMLJob(args, optionsOrCb, cb) {
        const command = new DescribeAutoMLJobCommand_1.DescribeAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCodeRepository(args, optionsOrCb, cb) {
        const command = new DescribeCodeRepositoryCommand_1.DescribeCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeCompilationJob(args, optionsOrCb, cb) {
        const command = new DescribeCompilationJobCommand_1.DescribeCompilationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeContext(args, optionsOrCb, cb) {
        const command = new DescribeContextCommand_1.DescribeContextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDataQualityJobDefinition(args, optionsOrCb, cb) {
        const command = new DescribeDataQualityJobDefinitionCommand_1.DescribeDataQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDevice(args, optionsOrCb, cb) {
        const command = new DescribeDeviceCommand_1.DescribeDeviceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDeviceFleet(args, optionsOrCb, cb) {
        const command = new DescribeDeviceFleetCommand_1.DescribeDeviceFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeDomain(args, optionsOrCb, cb) {
        const command = new DescribeDomainCommand_1.DescribeDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEdgePackagingJob(args, optionsOrCb, cb) {
        const command = new DescribeEdgePackagingJobCommand_1.DescribeEdgePackagingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEndpoint(args, optionsOrCb, cb) {
        const command = new DescribeEndpointCommand_1.DescribeEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeEndpointConfig(args, optionsOrCb, cb) {
        const command = new DescribeEndpointConfigCommand_1.DescribeEndpointConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeExperiment(args, optionsOrCb, cb) {
        const command = new DescribeExperimentCommand_1.DescribeExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFeatureGroup(args, optionsOrCb, cb) {
        const command = new DescribeFeatureGroupCommand_1.DescribeFeatureGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeFlowDefinition(args, optionsOrCb, cb) {
        const command = new DescribeFlowDefinitionCommand_1.DescribeFlowDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeHumanTaskUi(args, optionsOrCb, cb) {
        const command = new DescribeHumanTaskUiCommand_1.DescribeHumanTaskUiCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeHyperParameterTuningJob(args, optionsOrCb, cb) {
        const command = new DescribeHyperParameterTuningJobCommand_1.DescribeHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeImage(args, optionsOrCb, cb) {
        const command = new DescribeImageCommand_1.DescribeImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeImageVersion(args, optionsOrCb, cb) {
        const command = new DescribeImageVersionCommand_1.DescribeImageVersionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeLabelingJob(args, optionsOrCb, cb) {
        const command = new DescribeLabelingJobCommand_1.DescribeLabelingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeModel(args, optionsOrCb, cb) {
        const command = new DescribeModelCommand_1.DescribeModelCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeModelBiasJobDefinition(args, optionsOrCb, cb) {
        const command = new DescribeModelBiasJobDefinitionCommand_1.DescribeModelBiasJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeModelExplainabilityJobDefinition(args, optionsOrCb, cb) {
        const command = new DescribeModelExplainabilityJobDefinitionCommand_1.DescribeModelExplainabilityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeModelPackage(args, optionsOrCb, cb) {
        const command = new DescribeModelPackageCommand_1.DescribeModelPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeModelPackageGroup(args, optionsOrCb, cb) {
        const command = new DescribeModelPackageGroupCommand_1.DescribeModelPackageGroupCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeModelQualityJobDefinition(args, optionsOrCb, cb) {
        const command = new DescribeModelQualityJobDefinitionCommand_1.DescribeModelQualityJobDefinitionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new DescribeMonitoringScheduleCommand_1.DescribeMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNotebookInstance(args, optionsOrCb, cb) {
        const command = new DescribeNotebookInstanceCommand_1.DescribeNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeNotebookInstanceLifecycleConfig(args, optionsOrCb, cb) {
        const command = new DescribeNotebookInstanceLifecycleConfigCommand_1.DescribeNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePipeline(args, optionsOrCb, cb) {
        const command = new DescribePipelineCommand_1.DescribePipelineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePipelineDefinitionForExecution(args, optionsOrCb, cb) {
        const command = new DescribePipelineDefinitionForExecutionCommand_1.DescribePipelineDefinitionForExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describePipelineExecution(args, optionsOrCb, cb) {
        const command = new DescribePipelineExecutionCommand_1.DescribePipelineExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeProcessingJob(args, optionsOrCb, cb) {
        const command = new DescribeProcessingJobCommand_1.DescribeProcessingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeProject(args, optionsOrCb, cb) {
        const command = new DescribeProjectCommand_1.DescribeProjectCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeSubscribedWorkteam(args, optionsOrCb, cb) {
        const command = new DescribeSubscribedWorkteamCommand_1.DescribeSubscribedWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTrainingJob(args, optionsOrCb, cb) {
        const command = new DescribeTrainingJobCommand_1.DescribeTrainingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTransformJob(args, optionsOrCb, cb) {
        const command = new DescribeTransformJobCommand_1.DescribeTransformJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTrial(args, optionsOrCb, cb) {
        const command = new DescribeTrialCommand_1.DescribeTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeTrialComponent(args, optionsOrCb, cb) {
        const command = new DescribeTrialComponentCommand_1.DescribeTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeUserProfile(args, optionsOrCb, cb) {
        const command = new DescribeUserProfileCommand_1.DescribeUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeWorkforce(args, optionsOrCb, cb) {
        const command = new DescribeWorkforceCommand_1.DescribeWorkforceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    describeWorkteam(args, optionsOrCb, cb) {
        const command = new DescribeWorkteamCommand_1.DescribeWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disableSagemakerServicecatalogPortfolio(args, optionsOrCb, cb) {
        const command = new DisableSagemakerServicecatalogPortfolioCommand_1.DisableSagemakerServicecatalogPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    disassociateTrialComponent(args, optionsOrCb, cb) {
        const command = new DisassociateTrialComponentCommand_1.DisassociateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    enableSagemakerServicecatalogPortfolio(args, optionsOrCb, cb) {
        const command = new EnableSagemakerServicecatalogPortfolioCommand_1.EnableSagemakerServicecatalogPortfolioCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getDeviceFleetReport(args, optionsOrCb, cb) {
        const command = new GetDeviceFleetReportCommand_1.GetDeviceFleetReportCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getModelPackageGroupPolicy(args, optionsOrCb, cb) {
        const command = new GetModelPackageGroupPolicyCommand_1.GetModelPackageGroupPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSagemakerServicecatalogPortfolioStatus(args, optionsOrCb, cb) {
        const command = new GetSagemakerServicecatalogPortfolioStatusCommand_1.GetSagemakerServicecatalogPortfolioStatusCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    getSearchSuggestions(args, optionsOrCb, cb) {
        const command = new GetSearchSuggestionsCommand_1.GetSearchSuggestionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listActions(args, optionsOrCb, cb) {
        const command = new ListActionsCommand_1.ListActionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAlgorithms(args, optionsOrCb, cb) {
        const command = new ListAlgorithmsCommand_1.ListAlgorithmsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAppImageConfigs(args, optionsOrCb, cb) {
        const command = new ListAppImageConfigsCommand_1.ListAppImageConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listApps(args, optionsOrCb, cb) {
        const command = new ListAppsCommand_1.ListAppsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listArtifacts(args, optionsOrCb, cb) {
        const command = new ListArtifactsCommand_1.ListArtifactsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAssociations(args, optionsOrCb, cb) {
        const command = new ListAssociationsCommand_1.ListAssociationsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listAutoMLJobs(args, optionsOrCb, cb) {
        const command = new ListAutoMLJobsCommand_1.ListAutoMLJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCandidatesForAutoMLJob(args, optionsOrCb, cb) {
        const command = new ListCandidatesForAutoMLJobCommand_1.ListCandidatesForAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCodeRepositories(args, optionsOrCb, cb) {
        const command = new ListCodeRepositoriesCommand_1.ListCodeRepositoriesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listCompilationJobs(args, optionsOrCb, cb) {
        const command = new ListCompilationJobsCommand_1.ListCompilationJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listContexts(args, optionsOrCb, cb) {
        const command = new ListContextsCommand_1.ListContextsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDataQualityJobDefinitions(args, optionsOrCb, cb) {
        const command = new ListDataQualityJobDefinitionsCommand_1.ListDataQualityJobDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDeviceFleets(args, optionsOrCb, cb) {
        const command = new ListDeviceFleetsCommand_1.ListDeviceFleetsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDevices(args, optionsOrCb, cb) {
        const command = new ListDevicesCommand_1.ListDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listDomains(args, optionsOrCb, cb) {
        const command = new ListDomainsCommand_1.ListDomainsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listEdgePackagingJobs(args, optionsOrCb, cb) {
        const command = new ListEdgePackagingJobsCommand_1.ListEdgePackagingJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listEndpointConfigs(args, optionsOrCb, cb) {
        const command = new ListEndpointConfigsCommand_1.ListEndpointConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listEndpoints(args, optionsOrCb, cb) {
        const command = new ListEndpointsCommand_1.ListEndpointsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listExperiments(args, optionsOrCb, cb) {
        const command = new ListExperimentsCommand_1.ListExperimentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFeatureGroups(args, optionsOrCb, cb) {
        const command = new ListFeatureGroupsCommand_1.ListFeatureGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listFlowDefinitions(args, optionsOrCb, cb) {
        const command = new ListFlowDefinitionsCommand_1.ListFlowDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listHumanTaskUis(args, optionsOrCb, cb) {
        const command = new ListHumanTaskUisCommand_1.ListHumanTaskUisCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listHyperParameterTuningJobs(args, optionsOrCb, cb) {
        const command = new ListHyperParameterTuningJobsCommand_1.ListHyperParameterTuningJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listImages(args, optionsOrCb, cb) {
        const command = new ListImagesCommand_1.ListImagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listImageVersions(args, optionsOrCb, cb) {
        const command = new ListImageVersionsCommand_1.ListImageVersionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLabelingJobs(args, optionsOrCb, cb) {
        const command = new ListLabelingJobsCommand_1.ListLabelingJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listLabelingJobsForWorkteam(args, optionsOrCb, cb) {
        const command = new ListLabelingJobsForWorkteamCommand_1.ListLabelingJobsForWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listModelBiasJobDefinitions(args, optionsOrCb, cb) {
        const command = new ListModelBiasJobDefinitionsCommand_1.ListModelBiasJobDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listModelExplainabilityJobDefinitions(args, optionsOrCb, cb) {
        const command = new ListModelExplainabilityJobDefinitionsCommand_1.ListModelExplainabilityJobDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listModelPackageGroups(args, optionsOrCb, cb) {
        const command = new ListModelPackageGroupsCommand_1.ListModelPackageGroupsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listModelPackages(args, optionsOrCb, cb) {
        const command = new ListModelPackagesCommand_1.ListModelPackagesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listModelQualityJobDefinitions(args, optionsOrCb, cb) {
        const command = new ListModelQualityJobDefinitionsCommand_1.ListModelQualityJobDefinitionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listModels(args, optionsOrCb, cb) {
        const command = new ListModelsCommand_1.ListModelsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listMonitoringExecutions(args, optionsOrCb, cb) {
        const command = new ListMonitoringExecutionsCommand_1.ListMonitoringExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listMonitoringSchedules(args, optionsOrCb, cb) {
        const command = new ListMonitoringSchedulesCommand_1.ListMonitoringSchedulesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listNotebookInstanceLifecycleConfigs(args, optionsOrCb, cb) {
        const command = new ListNotebookInstanceLifecycleConfigsCommand_1.ListNotebookInstanceLifecycleConfigsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listNotebookInstances(args, optionsOrCb, cb) {
        const command = new ListNotebookInstancesCommand_1.ListNotebookInstancesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPipelineExecutions(args, optionsOrCb, cb) {
        const command = new ListPipelineExecutionsCommand_1.ListPipelineExecutionsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPipelineExecutionSteps(args, optionsOrCb, cb) {
        const command = new ListPipelineExecutionStepsCommand_1.ListPipelineExecutionStepsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPipelineParametersForExecution(args, optionsOrCb, cb) {
        const command = new ListPipelineParametersForExecutionCommand_1.ListPipelineParametersForExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listPipelines(args, optionsOrCb, cb) {
        const command = new ListPipelinesCommand_1.ListPipelinesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listProcessingJobs(args, optionsOrCb, cb) {
        const command = new ListProcessingJobsCommand_1.ListProcessingJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listProjects(args, optionsOrCb, cb) {
        const command = new ListProjectsCommand_1.ListProjectsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listSubscribedWorkteams(args, optionsOrCb, cb) {
        const command = new ListSubscribedWorkteamsCommand_1.ListSubscribedWorkteamsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTags(args, optionsOrCb, cb) {
        const command = new ListTagsCommand_1.ListTagsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTrainingJobs(args, optionsOrCb, cb) {
        const command = new ListTrainingJobsCommand_1.ListTrainingJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTrainingJobsForHyperParameterTuningJob(args, optionsOrCb, cb) {
        const command = new ListTrainingJobsForHyperParameterTuningJobCommand_1.ListTrainingJobsForHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTransformJobs(args, optionsOrCb, cb) {
        const command = new ListTransformJobsCommand_1.ListTransformJobsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTrialComponents(args, optionsOrCb, cb) {
        const command = new ListTrialComponentsCommand_1.ListTrialComponentsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listTrials(args, optionsOrCb, cb) {
        const command = new ListTrialsCommand_1.ListTrialsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listUserProfiles(args, optionsOrCb, cb) {
        const command = new ListUserProfilesCommand_1.ListUserProfilesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listWorkforces(args, optionsOrCb, cb) {
        const command = new ListWorkforcesCommand_1.ListWorkforcesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    listWorkteams(args, optionsOrCb, cb) {
        const command = new ListWorkteamsCommand_1.ListWorkteamsCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    putModelPackageGroupPolicy(args, optionsOrCb, cb) {
        const command = new PutModelPackageGroupPolicyCommand_1.PutModelPackageGroupPolicyCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    registerDevices(args, optionsOrCb, cb) {
        const command = new RegisterDevicesCommand_1.RegisterDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    renderUiTemplate(args, optionsOrCb, cb) {
        const command = new RenderUiTemplateCommand_1.RenderUiTemplateCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    search(args, optionsOrCb, cb) {
        const command = new SearchCommand_1.SearchCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new StartMonitoringScheduleCommand_1.StartMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startNotebookInstance(args, optionsOrCb, cb) {
        const command = new StartNotebookInstanceCommand_1.StartNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    startPipelineExecution(args, optionsOrCb, cb) {
        const command = new StartPipelineExecutionCommand_1.StartPipelineExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopAutoMLJob(args, optionsOrCb, cb) {
        const command = new StopAutoMLJobCommand_1.StopAutoMLJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopCompilationJob(args, optionsOrCb, cb) {
        const command = new StopCompilationJobCommand_1.StopCompilationJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopEdgePackagingJob(args, optionsOrCb, cb) {
        const command = new StopEdgePackagingJobCommand_1.StopEdgePackagingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopHyperParameterTuningJob(args, optionsOrCb, cb) {
        const command = new StopHyperParameterTuningJobCommand_1.StopHyperParameterTuningJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopLabelingJob(args, optionsOrCb, cb) {
        const command = new StopLabelingJobCommand_1.StopLabelingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new StopMonitoringScheduleCommand_1.StopMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopNotebookInstance(args, optionsOrCb, cb) {
        const command = new StopNotebookInstanceCommand_1.StopNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopPipelineExecution(args, optionsOrCb, cb) {
        const command = new StopPipelineExecutionCommand_1.StopPipelineExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopProcessingJob(args, optionsOrCb, cb) {
        const command = new StopProcessingJobCommand_1.StopProcessingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopTrainingJob(args, optionsOrCb, cb) {
        const command = new StopTrainingJobCommand_1.StopTrainingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    stopTransformJob(args, optionsOrCb, cb) {
        const command = new StopTransformJobCommand_1.StopTransformJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAction(args, optionsOrCb, cb) {
        const command = new UpdateActionCommand_1.UpdateActionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateAppImageConfig(args, optionsOrCb, cb) {
        const command = new UpdateAppImageConfigCommand_1.UpdateAppImageConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateArtifact(args, optionsOrCb, cb) {
        const command = new UpdateArtifactCommand_1.UpdateArtifactCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateCodeRepository(args, optionsOrCb, cb) {
        const command = new UpdateCodeRepositoryCommand_1.UpdateCodeRepositoryCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateContext(args, optionsOrCb, cb) {
        const command = new UpdateContextCommand_1.UpdateContextCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDeviceFleet(args, optionsOrCb, cb) {
        const command = new UpdateDeviceFleetCommand_1.UpdateDeviceFleetCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDevices(args, optionsOrCb, cb) {
        const command = new UpdateDevicesCommand_1.UpdateDevicesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateDomain(args, optionsOrCb, cb) {
        const command = new UpdateDomainCommand_1.UpdateDomainCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateEndpoint(args, optionsOrCb, cb) {
        const command = new UpdateEndpointCommand_1.UpdateEndpointCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateEndpointWeightsAndCapacities(args, optionsOrCb, cb) {
        const command = new UpdateEndpointWeightsAndCapacitiesCommand_1.UpdateEndpointWeightsAndCapacitiesCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateExperiment(args, optionsOrCb, cb) {
        const command = new UpdateExperimentCommand_1.UpdateExperimentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateImage(args, optionsOrCb, cb) {
        const command = new UpdateImageCommand_1.UpdateImageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateModelPackage(args, optionsOrCb, cb) {
        const command = new UpdateModelPackageCommand_1.UpdateModelPackageCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateMonitoringSchedule(args, optionsOrCb, cb) {
        const command = new UpdateMonitoringScheduleCommand_1.UpdateMonitoringScheduleCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateNotebookInstance(args, optionsOrCb, cb) {
        const command = new UpdateNotebookInstanceCommand_1.UpdateNotebookInstanceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateNotebookInstanceLifecycleConfig(args, optionsOrCb, cb) {
        const command = new UpdateNotebookInstanceLifecycleConfigCommand_1.UpdateNotebookInstanceLifecycleConfigCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updatePipeline(args, optionsOrCb, cb) {
        const command = new UpdatePipelineCommand_1.UpdatePipelineCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updatePipelineExecution(args, optionsOrCb, cb) {
        const command = new UpdatePipelineExecutionCommand_1.UpdatePipelineExecutionCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTrainingJob(args, optionsOrCb, cb) {
        const command = new UpdateTrainingJobCommand_1.UpdateTrainingJobCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTrial(args, optionsOrCb, cb) {
        const command = new UpdateTrialCommand_1.UpdateTrialCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateTrialComponent(args, optionsOrCb, cb) {
        const command = new UpdateTrialComponentCommand_1.UpdateTrialComponentCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateUserProfile(args, optionsOrCb, cb) {
        const command = new UpdateUserProfileCommand_1.UpdateUserProfileCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateWorkforce(args, optionsOrCb, cb) {
        const command = new UpdateWorkforceCommand_1.UpdateWorkforceCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
    updateWorkteam(args, optionsOrCb, cb) {
        const command = new UpdateWorkteamCommand_1.UpdateWorkteamCommand(args);
        if (typeof optionsOrCb === "function") {
            this.send(command, optionsOrCb);
        }
        else if (typeof cb === "function") {
            if (typeof optionsOrCb !== "object")
                throw new Error(`Expect http options but get ${typeof optionsOrCb}`);
            this.send(command, optionsOrCb || {}, cb);
        }
        else {
            return this.send(command, optionsOrCb);
        }
    }
}
exports.SageMaker = SageMaker;
//# sourceMappingURL=SageMaker.js.map