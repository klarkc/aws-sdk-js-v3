import { SageMakerClient } from "./SageMakerClient";
import { AddAssociationCommandInput, AddAssociationCommandOutput } from "./commands/AddAssociationCommand";
import { AddTagsCommandInput, AddTagsCommandOutput } from "./commands/AddTagsCommand";
import { AssociateTrialComponentCommandInput, AssociateTrialComponentCommandOutput } from "./commands/AssociateTrialComponentCommand";
import { CreateActionCommandInput, CreateActionCommandOutput } from "./commands/CreateActionCommand";
import { CreateAlgorithmCommandInput, CreateAlgorithmCommandOutput } from "./commands/CreateAlgorithmCommand";
import { CreateAppCommandInput, CreateAppCommandOutput } from "./commands/CreateAppCommand";
import { CreateAppImageConfigCommandInput, CreateAppImageConfigCommandOutput } from "./commands/CreateAppImageConfigCommand";
import { CreateArtifactCommandInput, CreateArtifactCommandOutput } from "./commands/CreateArtifactCommand";
import { CreateAutoMLJobCommandInput, CreateAutoMLJobCommandOutput } from "./commands/CreateAutoMLJobCommand";
import { CreateCodeRepositoryCommandInput, CreateCodeRepositoryCommandOutput } from "./commands/CreateCodeRepositoryCommand";
import { CreateCompilationJobCommandInput, CreateCompilationJobCommandOutput } from "./commands/CreateCompilationJobCommand";
import { CreateContextCommandInput, CreateContextCommandOutput } from "./commands/CreateContextCommand";
import { CreateDataQualityJobDefinitionCommandInput, CreateDataQualityJobDefinitionCommandOutput } from "./commands/CreateDataQualityJobDefinitionCommand";
import { CreateDeviceFleetCommandInput, CreateDeviceFleetCommandOutput } from "./commands/CreateDeviceFleetCommand";
import { CreateDomainCommandInput, CreateDomainCommandOutput } from "./commands/CreateDomainCommand";
import { CreateEdgePackagingJobCommandInput, CreateEdgePackagingJobCommandOutput } from "./commands/CreateEdgePackagingJobCommand";
import { CreateEndpointCommandInput, CreateEndpointCommandOutput } from "./commands/CreateEndpointCommand";
import { CreateEndpointConfigCommandInput, CreateEndpointConfigCommandOutput } from "./commands/CreateEndpointConfigCommand";
import { CreateExperimentCommandInput, CreateExperimentCommandOutput } from "./commands/CreateExperimentCommand";
import { CreateFeatureGroupCommandInput, CreateFeatureGroupCommandOutput } from "./commands/CreateFeatureGroupCommand";
import { CreateFlowDefinitionCommandInput, CreateFlowDefinitionCommandOutput } from "./commands/CreateFlowDefinitionCommand";
import { CreateHumanTaskUiCommandInput, CreateHumanTaskUiCommandOutput } from "./commands/CreateHumanTaskUiCommand";
import { CreateHyperParameterTuningJobCommandInput, CreateHyperParameterTuningJobCommandOutput } from "./commands/CreateHyperParameterTuningJobCommand";
import { CreateImageCommandInput, CreateImageCommandOutput } from "./commands/CreateImageCommand";
import { CreateImageVersionCommandInput, CreateImageVersionCommandOutput } from "./commands/CreateImageVersionCommand";
import { CreateLabelingJobCommandInput, CreateLabelingJobCommandOutput } from "./commands/CreateLabelingJobCommand";
import { CreateModelBiasJobDefinitionCommandInput, CreateModelBiasJobDefinitionCommandOutput } from "./commands/CreateModelBiasJobDefinitionCommand";
import { CreateModelCommandInput, CreateModelCommandOutput } from "./commands/CreateModelCommand";
import { CreateModelExplainabilityJobDefinitionCommandInput, CreateModelExplainabilityJobDefinitionCommandOutput } from "./commands/CreateModelExplainabilityJobDefinitionCommand";
import { CreateModelPackageCommandInput, CreateModelPackageCommandOutput } from "./commands/CreateModelPackageCommand";
import { CreateModelPackageGroupCommandInput, CreateModelPackageGroupCommandOutput } from "./commands/CreateModelPackageGroupCommand";
import { CreateModelQualityJobDefinitionCommandInput, CreateModelQualityJobDefinitionCommandOutput } from "./commands/CreateModelQualityJobDefinitionCommand";
import { CreateMonitoringScheduleCommandInput, CreateMonitoringScheduleCommandOutput } from "./commands/CreateMonitoringScheduleCommand";
import { CreateNotebookInstanceCommandInput, CreateNotebookInstanceCommandOutput } from "./commands/CreateNotebookInstanceCommand";
import { CreateNotebookInstanceLifecycleConfigCommandInput, CreateNotebookInstanceLifecycleConfigCommandOutput } from "./commands/CreateNotebookInstanceLifecycleConfigCommand";
import { CreatePipelineCommandInput, CreatePipelineCommandOutput } from "./commands/CreatePipelineCommand";
import { CreatePresignedDomainUrlCommandInput, CreatePresignedDomainUrlCommandOutput } from "./commands/CreatePresignedDomainUrlCommand";
import { CreatePresignedNotebookInstanceUrlCommandInput, CreatePresignedNotebookInstanceUrlCommandOutput } from "./commands/CreatePresignedNotebookInstanceUrlCommand";
import { CreateProcessingJobCommandInput, CreateProcessingJobCommandOutput } from "./commands/CreateProcessingJobCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { CreateTrainingJobCommandInput, CreateTrainingJobCommandOutput } from "./commands/CreateTrainingJobCommand";
import { CreateTransformJobCommandInput, CreateTransformJobCommandOutput } from "./commands/CreateTransformJobCommand";
import { CreateTrialCommandInput, CreateTrialCommandOutput } from "./commands/CreateTrialCommand";
import { CreateTrialComponentCommandInput, CreateTrialComponentCommandOutput } from "./commands/CreateTrialComponentCommand";
import { CreateUserProfileCommandInput, CreateUserProfileCommandOutput } from "./commands/CreateUserProfileCommand";
import { CreateWorkforceCommandInput, CreateWorkforceCommandOutput } from "./commands/CreateWorkforceCommand";
import { CreateWorkteamCommandInput, CreateWorkteamCommandOutput } from "./commands/CreateWorkteamCommand";
import { DeleteActionCommandInput, DeleteActionCommandOutput } from "./commands/DeleteActionCommand";
import { DeleteAlgorithmCommandInput, DeleteAlgorithmCommandOutput } from "./commands/DeleteAlgorithmCommand";
import { DeleteAppCommandInput, DeleteAppCommandOutput } from "./commands/DeleteAppCommand";
import { DeleteAppImageConfigCommandInput, DeleteAppImageConfigCommandOutput } from "./commands/DeleteAppImageConfigCommand";
import { DeleteArtifactCommandInput, DeleteArtifactCommandOutput } from "./commands/DeleteArtifactCommand";
import { DeleteAssociationCommandInput, DeleteAssociationCommandOutput } from "./commands/DeleteAssociationCommand";
import { DeleteCodeRepositoryCommandInput, DeleteCodeRepositoryCommandOutput } from "./commands/DeleteCodeRepositoryCommand";
import { DeleteContextCommandInput, DeleteContextCommandOutput } from "./commands/DeleteContextCommand";
import { DeleteDataQualityJobDefinitionCommandInput, DeleteDataQualityJobDefinitionCommandOutput } from "./commands/DeleteDataQualityJobDefinitionCommand";
import { DeleteDeviceFleetCommandInput, DeleteDeviceFleetCommandOutput } from "./commands/DeleteDeviceFleetCommand";
import { DeleteDomainCommandInput, DeleteDomainCommandOutput } from "./commands/DeleteDomainCommand";
import { DeleteEndpointCommandInput, DeleteEndpointCommandOutput } from "./commands/DeleteEndpointCommand";
import { DeleteEndpointConfigCommandInput, DeleteEndpointConfigCommandOutput } from "./commands/DeleteEndpointConfigCommand";
import { DeleteExperimentCommandInput, DeleteExperimentCommandOutput } from "./commands/DeleteExperimentCommand";
import { DeleteFeatureGroupCommandInput, DeleteFeatureGroupCommandOutput } from "./commands/DeleteFeatureGroupCommand";
import { DeleteFlowDefinitionCommandInput, DeleteFlowDefinitionCommandOutput } from "./commands/DeleteFlowDefinitionCommand";
import { DeleteHumanTaskUiCommandInput, DeleteHumanTaskUiCommandOutput } from "./commands/DeleteHumanTaskUiCommand";
import { DeleteImageCommandInput, DeleteImageCommandOutput } from "./commands/DeleteImageCommand";
import { DeleteImageVersionCommandInput, DeleteImageVersionCommandOutput } from "./commands/DeleteImageVersionCommand";
import { DeleteModelBiasJobDefinitionCommandInput, DeleteModelBiasJobDefinitionCommandOutput } from "./commands/DeleteModelBiasJobDefinitionCommand";
import { DeleteModelCommandInput, DeleteModelCommandOutput } from "./commands/DeleteModelCommand";
import { DeleteModelExplainabilityJobDefinitionCommandInput, DeleteModelExplainabilityJobDefinitionCommandOutput } from "./commands/DeleteModelExplainabilityJobDefinitionCommand";
import { DeleteModelPackageCommandInput, DeleteModelPackageCommandOutput } from "./commands/DeleteModelPackageCommand";
import { DeleteModelPackageGroupCommandInput, DeleteModelPackageGroupCommandOutput } from "./commands/DeleteModelPackageGroupCommand";
import { DeleteModelPackageGroupPolicyCommandInput, DeleteModelPackageGroupPolicyCommandOutput } from "./commands/DeleteModelPackageGroupPolicyCommand";
import { DeleteModelQualityJobDefinitionCommandInput, DeleteModelQualityJobDefinitionCommandOutput } from "./commands/DeleteModelQualityJobDefinitionCommand";
import { DeleteMonitoringScheduleCommandInput, DeleteMonitoringScheduleCommandOutput } from "./commands/DeleteMonitoringScheduleCommand";
import { DeleteNotebookInstanceCommandInput, DeleteNotebookInstanceCommandOutput } from "./commands/DeleteNotebookInstanceCommand";
import { DeleteNotebookInstanceLifecycleConfigCommandInput, DeleteNotebookInstanceLifecycleConfigCommandOutput } from "./commands/DeleteNotebookInstanceLifecycleConfigCommand";
import { DeletePipelineCommandInput, DeletePipelineCommandOutput } from "./commands/DeletePipelineCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DeleteTagsCommandInput, DeleteTagsCommandOutput } from "./commands/DeleteTagsCommand";
import { DeleteTrialCommandInput, DeleteTrialCommandOutput } from "./commands/DeleteTrialCommand";
import { DeleteTrialComponentCommandInput, DeleteTrialComponentCommandOutput } from "./commands/DeleteTrialComponentCommand";
import { DeleteUserProfileCommandInput, DeleteUserProfileCommandOutput } from "./commands/DeleteUserProfileCommand";
import { DeleteWorkforceCommandInput, DeleteWorkforceCommandOutput } from "./commands/DeleteWorkforceCommand";
import { DeleteWorkteamCommandInput, DeleteWorkteamCommandOutput } from "./commands/DeleteWorkteamCommand";
import { DeregisterDevicesCommandInput, DeregisterDevicesCommandOutput } from "./commands/DeregisterDevicesCommand";
import { DescribeActionCommandInput, DescribeActionCommandOutput } from "./commands/DescribeActionCommand";
import { DescribeAlgorithmCommandInput, DescribeAlgorithmCommandOutput } from "./commands/DescribeAlgorithmCommand";
import { DescribeAppCommandInput, DescribeAppCommandOutput } from "./commands/DescribeAppCommand";
import { DescribeAppImageConfigCommandInput, DescribeAppImageConfigCommandOutput } from "./commands/DescribeAppImageConfigCommand";
import { DescribeArtifactCommandInput, DescribeArtifactCommandOutput } from "./commands/DescribeArtifactCommand";
import { DescribeAutoMLJobCommandInput, DescribeAutoMLJobCommandOutput } from "./commands/DescribeAutoMLJobCommand";
import { DescribeCodeRepositoryCommandInput, DescribeCodeRepositoryCommandOutput } from "./commands/DescribeCodeRepositoryCommand";
import { DescribeCompilationJobCommandInput, DescribeCompilationJobCommandOutput } from "./commands/DescribeCompilationJobCommand";
import { DescribeContextCommandInput, DescribeContextCommandOutput } from "./commands/DescribeContextCommand";
import { DescribeDataQualityJobDefinitionCommandInput, DescribeDataQualityJobDefinitionCommandOutput } from "./commands/DescribeDataQualityJobDefinitionCommand";
import { DescribeDeviceCommandInput, DescribeDeviceCommandOutput } from "./commands/DescribeDeviceCommand";
import { DescribeDeviceFleetCommandInput, DescribeDeviceFleetCommandOutput } from "./commands/DescribeDeviceFleetCommand";
import { DescribeDomainCommandInput, DescribeDomainCommandOutput } from "./commands/DescribeDomainCommand";
import { DescribeEdgePackagingJobCommandInput, DescribeEdgePackagingJobCommandOutput } from "./commands/DescribeEdgePackagingJobCommand";
import { DescribeEndpointCommandInput, DescribeEndpointCommandOutput } from "./commands/DescribeEndpointCommand";
import { DescribeEndpointConfigCommandInput, DescribeEndpointConfigCommandOutput } from "./commands/DescribeEndpointConfigCommand";
import { DescribeExperimentCommandInput, DescribeExperimentCommandOutput } from "./commands/DescribeExperimentCommand";
import { DescribeFeatureGroupCommandInput, DescribeFeatureGroupCommandOutput } from "./commands/DescribeFeatureGroupCommand";
import { DescribeFlowDefinitionCommandInput, DescribeFlowDefinitionCommandOutput } from "./commands/DescribeFlowDefinitionCommand";
import { DescribeHumanTaskUiCommandInput, DescribeHumanTaskUiCommandOutput } from "./commands/DescribeHumanTaskUiCommand";
import { DescribeHyperParameterTuningJobCommandInput, DescribeHyperParameterTuningJobCommandOutput } from "./commands/DescribeHyperParameterTuningJobCommand";
import { DescribeImageCommandInput, DescribeImageCommandOutput } from "./commands/DescribeImageCommand";
import { DescribeImageVersionCommandInput, DescribeImageVersionCommandOutput } from "./commands/DescribeImageVersionCommand";
import { DescribeLabelingJobCommandInput, DescribeLabelingJobCommandOutput } from "./commands/DescribeLabelingJobCommand";
import { DescribeModelBiasJobDefinitionCommandInput, DescribeModelBiasJobDefinitionCommandOutput } from "./commands/DescribeModelBiasJobDefinitionCommand";
import { DescribeModelCommandInput, DescribeModelCommandOutput } from "./commands/DescribeModelCommand";
import { DescribeModelExplainabilityJobDefinitionCommandInput, DescribeModelExplainabilityJobDefinitionCommandOutput } from "./commands/DescribeModelExplainabilityJobDefinitionCommand";
import { DescribeModelPackageCommandInput, DescribeModelPackageCommandOutput } from "./commands/DescribeModelPackageCommand";
import { DescribeModelPackageGroupCommandInput, DescribeModelPackageGroupCommandOutput } from "./commands/DescribeModelPackageGroupCommand";
import { DescribeModelQualityJobDefinitionCommandInput, DescribeModelQualityJobDefinitionCommandOutput } from "./commands/DescribeModelQualityJobDefinitionCommand";
import { DescribeMonitoringScheduleCommandInput, DescribeMonitoringScheduleCommandOutput } from "./commands/DescribeMonitoringScheduleCommand";
import { DescribeNotebookInstanceCommandInput, DescribeNotebookInstanceCommandOutput } from "./commands/DescribeNotebookInstanceCommand";
import { DescribeNotebookInstanceLifecycleConfigCommandInput, DescribeNotebookInstanceLifecycleConfigCommandOutput } from "./commands/DescribeNotebookInstanceLifecycleConfigCommand";
import { DescribePipelineCommandInput, DescribePipelineCommandOutput } from "./commands/DescribePipelineCommand";
import { DescribePipelineDefinitionForExecutionCommandInput, DescribePipelineDefinitionForExecutionCommandOutput } from "./commands/DescribePipelineDefinitionForExecutionCommand";
import { DescribePipelineExecutionCommandInput, DescribePipelineExecutionCommandOutput } from "./commands/DescribePipelineExecutionCommand";
import { DescribeProcessingJobCommandInput, DescribeProcessingJobCommandOutput } from "./commands/DescribeProcessingJobCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import { DescribeSubscribedWorkteamCommandInput, DescribeSubscribedWorkteamCommandOutput } from "./commands/DescribeSubscribedWorkteamCommand";
import { DescribeTrainingJobCommandInput, DescribeTrainingJobCommandOutput } from "./commands/DescribeTrainingJobCommand";
import { DescribeTransformJobCommandInput, DescribeTransformJobCommandOutput } from "./commands/DescribeTransformJobCommand";
import { DescribeTrialCommandInput, DescribeTrialCommandOutput } from "./commands/DescribeTrialCommand";
import { DescribeTrialComponentCommandInput, DescribeTrialComponentCommandOutput } from "./commands/DescribeTrialComponentCommand";
import { DescribeUserProfileCommandInput, DescribeUserProfileCommandOutput } from "./commands/DescribeUserProfileCommand";
import { DescribeWorkforceCommandInput, DescribeWorkforceCommandOutput } from "./commands/DescribeWorkforceCommand";
import { DescribeWorkteamCommandInput, DescribeWorkteamCommandOutput } from "./commands/DescribeWorkteamCommand";
import { DisableSagemakerServicecatalogPortfolioCommandInput, DisableSagemakerServicecatalogPortfolioCommandOutput } from "./commands/DisableSagemakerServicecatalogPortfolioCommand";
import { DisassociateTrialComponentCommandInput, DisassociateTrialComponentCommandOutput } from "./commands/DisassociateTrialComponentCommand";
import { EnableSagemakerServicecatalogPortfolioCommandInput, EnableSagemakerServicecatalogPortfolioCommandOutput } from "./commands/EnableSagemakerServicecatalogPortfolioCommand";
import { GetDeviceFleetReportCommandInput, GetDeviceFleetReportCommandOutput } from "./commands/GetDeviceFleetReportCommand";
import { GetModelPackageGroupPolicyCommandInput, GetModelPackageGroupPolicyCommandOutput } from "./commands/GetModelPackageGroupPolicyCommand";
import { GetSagemakerServicecatalogPortfolioStatusCommandInput, GetSagemakerServicecatalogPortfolioStatusCommandOutput } from "./commands/GetSagemakerServicecatalogPortfolioStatusCommand";
import { GetSearchSuggestionsCommandInput, GetSearchSuggestionsCommandOutput } from "./commands/GetSearchSuggestionsCommand";
import { ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import { ListAlgorithmsCommandInput, ListAlgorithmsCommandOutput } from "./commands/ListAlgorithmsCommand";
import { ListAppImageConfigsCommandInput, ListAppImageConfigsCommandOutput } from "./commands/ListAppImageConfigsCommand";
import { ListAppsCommandInput, ListAppsCommandOutput } from "./commands/ListAppsCommand";
import { ListArtifactsCommandInput, ListArtifactsCommandOutput } from "./commands/ListArtifactsCommand";
import { ListAssociationsCommandInput, ListAssociationsCommandOutput } from "./commands/ListAssociationsCommand";
import { ListAutoMLJobsCommandInput, ListAutoMLJobsCommandOutput } from "./commands/ListAutoMLJobsCommand";
import { ListCandidatesForAutoMLJobCommandInput, ListCandidatesForAutoMLJobCommandOutput } from "./commands/ListCandidatesForAutoMLJobCommand";
import { ListCodeRepositoriesCommandInput, ListCodeRepositoriesCommandOutput } from "./commands/ListCodeRepositoriesCommand";
import { ListCompilationJobsCommandInput, ListCompilationJobsCommandOutput } from "./commands/ListCompilationJobsCommand";
import { ListContextsCommandInput, ListContextsCommandOutput } from "./commands/ListContextsCommand";
import { ListDataQualityJobDefinitionsCommandInput, ListDataQualityJobDefinitionsCommandOutput } from "./commands/ListDataQualityJobDefinitionsCommand";
import { ListDeviceFleetsCommandInput, ListDeviceFleetsCommandOutput } from "./commands/ListDeviceFleetsCommand";
import { ListDevicesCommandInput, ListDevicesCommandOutput } from "./commands/ListDevicesCommand";
import { ListDomainsCommandInput, ListDomainsCommandOutput } from "./commands/ListDomainsCommand";
import { ListEdgePackagingJobsCommandInput, ListEdgePackagingJobsCommandOutput } from "./commands/ListEdgePackagingJobsCommand";
import { ListEndpointConfigsCommandInput, ListEndpointConfigsCommandOutput } from "./commands/ListEndpointConfigsCommand";
import { ListEndpointsCommandInput, ListEndpointsCommandOutput } from "./commands/ListEndpointsCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "./commands/ListExperimentsCommand";
import { ListFeatureGroupsCommandInput, ListFeatureGroupsCommandOutput } from "./commands/ListFeatureGroupsCommand";
import { ListFlowDefinitionsCommandInput, ListFlowDefinitionsCommandOutput } from "./commands/ListFlowDefinitionsCommand";
import { ListHumanTaskUisCommandInput, ListHumanTaskUisCommandOutput } from "./commands/ListHumanTaskUisCommand";
import { ListHyperParameterTuningJobsCommandInput, ListHyperParameterTuningJobsCommandOutput } from "./commands/ListHyperParameterTuningJobsCommand";
import { ListImageVersionsCommandInput, ListImageVersionsCommandOutput } from "./commands/ListImageVersionsCommand";
import { ListImagesCommandInput, ListImagesCommandOutput } from "./commands/ListImagesCommand";
import { ListLabelingJobsCommandInput, ListLabelingJobsCommandOutput } from "./commands/ListLabelingJobsCommand";
import { ListLabelingJobsForWorkteamCommandInput, ListLabelingJobsForWorkteamCommandOutput } from "./commands/ListLabelingJobsForWorkteamCommand";
import { ListModelBiasJobDefinitionsCommandInput, ListModelBiasJobDefinitionsCommandOutput } from "./commands/ListModelBiasJobDefinitionsCommand";
import { ListModelExplainabilityJobDefinitionsCommandInput, ListModelExplainabilityJobDefinitionsCommandOutput } from "./commands/ListModelExplainabilityJobDefinitionsCommand";
import { ListModelPackageGroupsCommandInput, ListModelPackageGroupsCommandOutput } from "./commands/ListModelPackageGroupsCommand";
import { ListModelPackagesCommandInput, ListModelPackagesCommandOutput } from "./commands/ListModelPackagesCommand";
import { ListModelQualityJobDefinitionsCommandInput, ListModelQualityJobDefinitionsCommandOutput } from "./commands/ListModelQualityJobDefinitionsCommand";
import { ListModelsCommandInput, ListModelsCommandOutput } from "./commands/ListModelsCommand";
import { ListMonitoringExecutionsCommandInput, ListMonitoringExecutionsCommandOutput } from "./commands/ListMonitoringExecutionsCommand";
import { ListMonitoringSchedulesCommandInput, ListMonitoringSchedulesCommandOutput } from "./commands/ListMonitoringSchedulesCommand";
import { ListNotebookInstanceLifecycleConfigsCommandInput, ListNotebookInstanceLifecycleConfigsCommandOutput } from "./commands/ListNotebookInstanceLifecycleConfigsCommand";
import { ListNotebookInstancesCommandInput, ListNotebookInstancesCommandOutput } from "./commands/ListNotebookInstancesCommand";
import { ListPipelineExecutionStepsCommandInput, ListPipelineExecutionStepsCommandOutput } from "./commands/ListPipelineExecutionStepsCommand";
import { ListPipelineExecutionsCommandInput, ListPipelineExecutionsCommandOutput } from "./commands/ListPipelineExecutionsCommand";
import { ListPipelineParametersForExecutionCommandInput, ListPipelineParametersForExecutionCommandOutput } from "./commands/ListPipelineParametersForExecutionCommand";
import { ListPipelinesCommandInput, ListPipelinesCommandOutput } from "./commands/ListPipelinesCommand";
import { ListProcessingJobsCommandInput, ListProcessingJobsCommandOutput } from "./commands/ListProcessingJobsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListSubscribedWorkteamsCommandInput, ListSubscribedWorkteamsCommandOutput } from "./commands/ListSubscribedWorkteamsCommand";
import { ListTagsCommandInput, ListTagsCommandOutput } from "./commands/ListTagsCommand";
import { ListTrainingJobsCommandInput, ListTrainingJobsCommandOutput } from "./commands/ListTrainingJobsCommand";
import { ListTrainingJobsForHyperParameterTuningJobCommandInput, ListTrainingJobsForHyperParameterTuningJobCommandOutput } from "./commands/ListTrainingJobsForHyperParameterTuningJobCommand";
import { ListTransformJobsCommandInput, ListTransformJobsCommandOutput } from "./commands/ListTransformJobsCommand";
import { ListTrialComponentsCommandInput, ListTrialComponentsCommandOutput } from "./commands/ListTrialComponentsCommand";
import { ListTrialsCommandInput, ListTrialsCommandOutput } from "./commands/ListTrialsCommand";
import { ListUserProfilesCommandInput, ListUserProfilesCommandOutput } from "./commands/ListUserProfilesCommand";
import { ListWorkforcesCommandInput, ListWorkforcesCommandOutput } from "./commands/ListWorkforcesCommand";
import { ListWorkteamsCommandInput, ListWorkteamsCommandOutput } from "./commands/ListWorkteamsCommand";
import { PutModelPackageGroupPolicyCommandInput, PutModelPackageGroupPolicyCommandOutput } from "./commands/PutModelPackageGroupPolicyCommand";
import { RegisterDevicesCommandInput, RegisterDevicesCommandOutput } from "./commands/RegisterDevicesCommand";
import { RenderUiTemplateCommandInput, RenderUiTemplateCommandOutput } from "./commands/RenderUiTemplateCommand";
import { SearchCommandInput, SearchCommandOutput } from "./commands/SearchCommand";
import { StartMonitoringScheduleCommandInput, StartMonitoringScheduleCommandOutput } from "./commands/StartMonitoringScheduleCommand";
import { StartNotebookInstanceCommandInput, StartNotebookInstanceCommandOutput } from "./commands/StartNotebookInstanceCommand";
import { StartPipelineExecutionCommandInput, StartPipelineExecutionCommandOutput } from "./commands/StartPipelineExecutionCommand";
import { StopAutoMLJobCommandInput, StopAutoMLJobCommandOutput } from "./commands/StopAutoMLJobCommand";
import { StopCompilationJobCommandInput, StopCompilationJobCommandOutput } from "./commands/StopCompilationJobCommand";
import { StopEdgePackagingJobCommandInput, StopEdgePackagingJobCommandOutput } from "./commands/StopEdgePackagingJobCommand";
import { StopHyperParameterTuningJobCommandInput, StopHyperParameterTuningJobCommandOutput } from "./commands/StopHyperParameterTuningJobCommand";
import { StopLabelingJobCommandInput, StopLabelingJobCommandOutput } from "./commands/StopLabelingJobCommand";
import { StopMonitoringScheduleCommandInput, StopMonitoringScheduleCommandOutput } from "./commands/StopMonitoringScheduleCommand";
import { StopNotebookInstanceCommandInput, StopNotebookInstanceCommandOutput } from "./commands/StopNotebookInstanceCommand";
import { StopPipelineExecutionCommandInput, StopPipelineExecutionCommandOutput } from "./commands/StopPipelineExecutionCommand";
import { StopProcessingJobCommandInput, StopProcessingJobCommandOutput } from "./commands/StopProcessingJobCommand";
import { StopTrainingJobCommandInput, StopTrainingJobCommandOutput } from "./commands/StopTrainingJobCommand";
import { StopTransformJobCommandInput, StopTransformJobCommandOutput } from "./commands/StopTransformJobCommand";
import { UpdateActionCommandInput, UpdateActionCommandOutput } from "./commands/UpdateActionCommand";
import { UpdateAppImageConfigCommandInput, UpdateAppImageConfigCommandOutput } from "./commands/UpdateAppImageConfigCommand";
import { UpdateArtifactCommandInput, UpdateArtifactCommandOutput } from "./commands/UpdateArtifactCommand";
import { UpdateCodeRepositoryCommandInput, UpdateCodeRepositoryCommandOutput } from "./commands/UpdateCodeRepositoryCommand";
import { UpdateContextCommandInput, UpdateContextCommandOutput } from "./commands/UpdateContextCommand";
import { UpdateDeviceFleetCommandInput, UpdateDeviceFleetCommandOutput } from "./commands/UpdateDeviceFleetCommand";
import { UpdateDevicesCommandInput, UpdateDevicesCommandOutput } from "./commands/UpdateDevicesCommand";
import { UpdateDomainCommandInput, UpdateDomainCommandOutput } from "./commands/UpdateDomainCommand";
import { UpdateEndpointCommandInput, UpdateEndpointCommandOutput } from "./commands/UpdateEndpointCommand";
import { UpdateEndpointWeightsAndCapacitiesCommandInput, UpdateEndpointWeightsAndCapacitiesCommandOutput } from "./commands/UpdateEndpointWeightsAndCapacitiesCommand";
import { UpdateExperimentCommandInput, UpdateExperimentCommandOutput } from "./commands/UpdateExperimentCommand";
import { UpdateImageCommandInput, UpdateImageCommandOutput } from "./commands/UpdateImageCommand";
import { UpdateModelPackageCommandInput, UpdateModelPackageCommandOutput } from "./commands/UpdateModelPackageCommand";
import { UpdateMonitoringScheduleCommandInput, UpdateMonitoringScheduleCommandOutput } from "./commands/UpdateMonitoringScheduleCommand";
import { UpdateNotebookInstanceCommandInput, UpdateNotebookInstanceCommandOutput } from "./commands/UpdateNotebookInstanceCommand";
import { UpdateNotebookInstanceLifecycleConfigCommandInput, UpdateNotebookInstanceLifecycleConfigCommandOutput } from "./commands/UpdateNotebookInstanceLifecycleConfigCommand";
import { UpdatePipelineCommandInput, UpdatePipelineCommandOutput } from "./commands/UpdatePipelineCommand";
import { UpdatePipelineExecutionCommandInput, UpdatePipelineExecutionCommandOutput } from "./commands/UpdatePipelineExecutionCommand";
import { UpdateTrainingJobCommandInput, UpdateTrainingJobCommandOutput } from "./commands/UpdateTrainingJobCommand";
import { UpdateTrialCommandInput, UpdateTrialCommandOutput } from "./commands/UpdateTrialCommand";
import { UpdateTrialComponentCommandInput, UpdateTrialComponentCommandOutput } from "./commands/UpdateTrialComponentCommand";
import { UpdateUserProfileCommandInput, UpdateUserProfileCommandOutput } from "./commands/UpdateUserProfileCommand";
import { UpdateWorkforceCommandInput, UpdateWorkforceCommandOutput } from "./commands/UpdateWorkforceCommand";
import { UpdateWorkteamCommandInput, UpdateWorkteamCommandOutput } from "./commands/UpdateWorkteamCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
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
export declare class SageMaker extends SageMakerClient {
    /**
     * <p>Creates an <i>association</i> between the source and the destination. A
     *         source can be associated with multiple destinations, and a destination can be associated
     *         with multiple sources. An association is a lineage tracking entity. For more information, see
     *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
     *           ML Lineage Tracking</a>.</p>
     */
    addAssociation(args: AddAssociationCommandInput, options?: __HttpHandlerOptions): Promise<AddAssociationCommandOutput>;
    addAssociation(args: AddAssociationCommandInput, cb: (err: any, data?: AddAssociationCommandOutput) => void): void;
    addAssociation(args: AddAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddAssociationCommandOutput) => void): void;
    /**
     * <p>Adds or overwrites one or more tags for the specified Amazon SageMaker resource. You can add
     *             tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform
     *             jobs, models, labeling jobs, work teams, endpoint configurations, and
     *             endpoints.</p>
     *         <p>Each tag consists of a key and an optional value. Tag keys must be unique per
     *             resource. For more information about tags, see For more information, see <a href="https://aws.amazon.com/answers/account-management/aws-tagging-strategies/">AWS
     *                 Tagging Strategies</a>.</p>
     *         <note>
     *             <p>Tags that you add to a hyperparameter tuning job by calling this API are also
     *                 added to any training jobs that the hyperparameter tuning job launches after you
     *                 call this API, but not to training jobs that the hyperparameter tuning job launched
     *                 before you called this API. To make sure that the tags associated with a
     *                 hyperparameter tuning job are also added to all training jobs that the
     *                 hyperparameter tuning job launches, add the tags when you first create the tuning
     *                 job by specifying them in the <code>Tags</code> parameter of <a>CreateHyperParameterTuningJob</a>
     *             </p>
     *         </note>
     *         <note>
     *             <p>Tags that you add to a SageMaker Studio Domain or User Profile by calling this API are also
     *                 added to any Apps that the Domain or User Profile launches after you
     *                 call this API, but not to Apps that the Domain or User Profile launched
     *                 before you called this API. To make sure that the tags associated with a
     *                 Domain or User Profile are also added to all Apps that the
     *                 Domain or User Profile launches, add the tags when you first create the Domain or User Profile by specifying them in the <code>Tags</code> parameter of <a>CreateDomain</a> or <a>CreateUserProfile</a>.</p>
     *         </note>
     */
    addTags(args: AddTagsCommandInput, options?: __HttpHandlerOptions): Promise<AddTagsCommandOutput>;
    addTags(args: AddTagsCommandInput, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    addTags(args: AddTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AddTagsCommandOutput) => void): void;
    /**
     * <p>Associates a trial component with a trial. A trial component can be associated with
     *       multiple trials. To disassociate a trial component from a trial, call the <a>DisassociateTrialComponent</a> API.</p>
     */
    associateTrialComponent(args: AssociateTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<AssociateTrialComponentCommandOutput>;
    associateTrialComponent(args: AssociateTrialComponentCommandInput, cb: (err: any, data?: AssociateTrialComponentCommandOutput) => void): void;
    associateTrialComponent(args: AssociateTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: AssociateTrialComponentCommandOutput) => void): void;
    /**
     * <p>Creates an <i>action</i>. An action is a lineage tracking entity that
     *         represents an action or activity. For example, a model deployment or an HPO job.
     *         Generally, an action involves at least one input or output artifact. For more information, see
     *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
     *           ML Lineage Tracking</a>.</p>
     *          <note>
     *             <p>
     *                <code>CreateAction</code> can only be invoked from within an SageMaker managed
     *           environment. This includes SageMaker training jobs, processing jobs, transform jobs, and SageMaker
     *           notebooks. A call to <code>CreateAction</code> from outside one of these
     *           environments results in an error.</p>
     *          </note>
     */
    createAction(args: CreateActionCommandInput, options?: __HttpHandlerOptions): Promise<CreateActionCommandOutput>;
    createAction(args: CreateActionCommandInput, cb: (err: any, data?: CreateActionCommandOutput) => void): void;
    createAction(args: CreateActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateActionCommandOutput) => void): void;
    /**
     * <p>Create a machine learning algorithm that you can use in Amazon SageMaker and list in the AWS
     *             Marketplace.</p>
     */
    createAlgorithm(args: CreateAlgorithmCommandInput, options?: __HttpHandlerOptions): Promise<CreateAlgorithmCommandOutput>;
    createAlgorithm(args: CreateAlgorithmCommandInput, cb: (err: any, data?: CreateAlgorithmCommandOutput) => void): void;
    createAlgorithm(args: CreateAlgorithmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAlgorithmCommandOutput) => void): void;
    /**
     * <p>Creates a running app for the specified UserProfile. Supported apps are
     *       <code>JupyterServer</code> and <code>KernelGateway</code>. This operation is automatically
     *       invoked by Amazon SageMaker Studio upon access to the associated Domain, and when new kernel
     *       configurations are selected by the user. A user may have multiple Apps active simultaneously.</p>
     */
    createApp(args: CreateAppCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppCommandOutput>;
    createApp(args: CreateAppCommandInput, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
    createApp(args: CreateAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAppCommandOutput) => void): void;
    /**
     * <p>Creates a configuration for running a SageMaker image as a KernelGateway app. The
     *         configuration specifies the Amazon Elastic File System (EFS) storage volume on the image, and a list of the
     *         kernels in the image.</p>
     */
    createAppImageConfig(args: CreateAppImageConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateAppImageConfigCommandOutput>;
    createAppImageConfig(args: CreateAppImageConfigCommandInput, cb: (err: any, data?: CreateAppImageConfigCommandOutput) => void): void;
    createAppImageConfig(args: CreateAppImageConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAppImageConfigCommandOutput) => void): void;
    /**
     * <p>Creates an <i>artifact</i>. An artifact is a lineage tracking entity that
     *         represents a URI addressable object or data. Some examples are the S3 URI of a dataset and
     *         the ECR registry path of an image. For more information, see
     *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
     *           ML Lineage Tracking</a>.</p>
     *          <note>
     *             <p>
     *                <code>CreateArtifact</code> can only be invoked from within an SageMaker managed
     *           environment. This includes SageMaker training jobs, processing jobs, transform jobs, and SageMaker
     *           notebooks. A call to <code>CreateArtifact</code> from outside one of these
     *           environments results in an error.</p>
     *          </note>
     */
    createArtifact(args: CreateArtifactCommandInput, options?: __HttpHandlerOptions): Promise<CreateArtifactCommandOutput>;
    createArtifact(args: CreateArtifactCommandInput, cb: (err: any, data?: CreateArtifactCommandOutput) => void): void;
    createArtifact(args: CreateArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateArtifactCommandOutput) => void): void;
    /**
     * <p>Creates an Autopilot job.</p>
     *          <p>Find the best performing model after you run an Autopilot job by calling .</p>
     *          <p>For information about how to use Autopilot, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/autopilot-automate-model-development.html">Automate Model
     *             Development with Amazon SageMaker Autopilot</a>.</p>
     */
    createAutoMLJob(args: CreateAutoMLJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateAutoMLJobCommandOutput>;
    createAutoMLJob(args: CreateAutoMLJobCommandInput, cb: (err: any, data?: CreateAutoMLJobCommandOutput) => void): void;
    createAutoMLJob(args: CreateAutoMLJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAutoMLJobCommandOutput) => void): void;
    /**
     * <p>Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the
     *             repository with notebook instances so that you can use Git source control for the
     *             notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can
     *             be associated with more than one notebook instance, and it persists independently from
     *             the lifecycle of any notebook instances it is associated with.</p>
     *         <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
     *             other Git repository.</p>
     */
    createCodeRepository(args: CreateCodeRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<CreateCodeRepositoryCommandOutput>;
    createCodeRepository(args: CreateCodeRepositoryCommandInput, cb: (err: any, data?: CreateCodeRepositoryCommandOutput) => void): void;
    createCodeRepository(args: CreateCodeRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCodeRepositoryCommandOutput) => void): void;
    /**
     * <p>Starts a model compilation job. After the model has been compiled, Amazon SageMaker saves the
     *             resulting model artifacts to an Amazon Simple Storage Service (Amazon S3) bucket that you specify. </p>
     *         <p>If
     *             you choose to host your model using Amazon SageMaker hosting services, you can use the resulting
     *             model artifacts as part of the model. You can also use the artifacts with
     *             AWS
     *             IoT Greengrass. In that case, deploy them as an ML
     *             resource.</p>
     *         <p>In the request body, you provide the following:</p>
     *         <ul>
     *             <li>
     *                 <p>A name for the compilation job</p>
     *             </li>
     *             <li>
     *                 <p> Information about the input model artifacts </p>
     *             </li>
     *             <li>
     *                 <p>The output location for the compiled model and the device (target) that the
     *                     model runs on </p>
     *             </li>
     *             <li>
     *                 <p>The Amazon Resource Name (ARN) of the IAM role that Amazon SageMaker assumes to perform
     *                     the model compilation job. </p>
     *             </li>
     *          </ul>
     *         <p>You can also provide a <code>Tag</code> to track the model compilation job's resource
     *             use and costs. The response body contains the
     *                 <code>CompilationJobArn</code>
     *             for the compiled job.</p>
     *         <p>To stop a model compilation job, use <a>StopCompilationJob</a>. To get
     *             information about a particular model compilation job, use <a>DescribeCompilationJob</a>. To get information about multiple model
     *             compilation jobs, use <a>ListCompilationJobs</a>.</p>
     */
    createCompilationJob(args: CreateCompilationJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateCompilationJobCommandOutput>;
    createCompilationJob(args: CreateCompilationJobCommandInput, cb: (err: any, data?: CreateCompilationJobCommandOutput) => void): void;
    createCompilationJob(args: CreateCompilationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateCompilationJobCommandOutput) => void): void;
    /**
     * <p>Creates a <i>context</i>. A context is a lineage tracking entity that
     *         represents a logical grouping of other tracking or experiment entities. Some examples are
     *         an endpoint and a model package. For more information, see
     *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/lineage-tracking.html">Amazon SageMaker
     *           ML Lineage Tracking</a>.</p>
     *          <note>
     *             <p>
     *                <code>CreateContext</code> can only be invoked from within an SageMaker managed
     *           environment. This includes SageMaker training jobs, processing jobs, transform jobs, and SageMaker
     *           notebooks. A call to <code>CreateContext</code> from outside one of these
     *           environments results in an error.</p>
     *          </note>
     */
    createContext(args: CreateContextCommandInput, options?: __HttpHandlerOptions): Promise<CreateContextCommandOutput>;
    createContext(args: CreateContextCommandInput, cb: (err: any, data?: CreateContextCommandOutput) => void): void;
    createContext(args: CreateContextCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateContextCommandOutput) => void): void;
    /**
     * <p>Creates a definition for a job that monitors data quality and drift. For information
     *          about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.</p>
     */
    createDataQualityJobDefinition(args: CreateDataQualityJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateDataQualityJobDefinitionCommandOutput>;
    createDataQualityJobDefinition(args: CreateDataQualityJobDefinitionCommandInput, cb: (err: any, data?: CreateDataQualityJobDefinitionCommandOutput) => void): void;
    createDataQualityJobDefinition(args: CreateDataQualityJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDataQualityJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Creates a device fleet.</p>
     */
    createDeviceFleet(args: CreateDeviceFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeviceFleetCommandOutput>;
    createDeviceFleet(args: CreateDeviceFleetCommandInput, cb: (err: any, data?: CreateDeviceFleetCommandOutput) => void): void;
    createDeviceFleet(args: CreateDeviceFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeviceFleetCommandOutput) => void): void;
    /**
     * <p>Creates a <code>Domain</code> used by Amazon SageMaker Studio. A domain consists of an associated
     *     Amazon Elastic File System (EFS) volume, a list of authorized users, and a variety of security, application,
     *     policy, and Amazon Virtual Private Cloud (VPC) configurations. An AWS account is limited to one domain per region.
     *     Users within a domain can share notebook files and other artifacts with each other.</p>
     *
     *          <p>
     *             <b>EFS storage</b>
     *          </p>
     *          <p>When a domain is created, an EFS volume is created for use by all of the users within the
     *     domain. Each user receives a private home directory within the EFS volume for notebooks,
     *     Git repositories, and data files.</p>
     *          <p>SageMaker uses the AWS Key Management Service (AWS KMS) to encrypt the EFS volume attached to the domain with
     *     an AWS managed customer master key (CMK) by default. For more control, you can specify a
     *     customer managed CMK. For more information, see
     *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/encryption-at-rest.html">Protect Data at
     *       Rest Using Encryption</a>.</p>
     *
     *          <p>
     *             <b>VPC configuration</b>
     *          </p>
     *          <p>All SageMaker Studio traffic between the domain and the EFS volume is through the specified
     *     VPC and subnets. For other Studio traffic, you can specify the <code>AppNetworkAccessType</code>
     *     parameter. <code>AppNetworkAccessType</code> corresponds to the network access type that you
     *     choose when you onboard to Studio. The following options are available:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>PublicInternetOnly</code> - Non-EFS traffic goes through a VPC managed by
     *         Amazon SageMaker, which allows internet access. This is the default value.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>VpcOnly</code> - All Studio traffic is through the specified VPC and subnets.
     *         Internet access is disabled by default. To allow internet access, you must specify a
     *         NAT gateway.</p>
     *                <p>When internet access is disabled, you won't be able to run a Studio notebook or to
     *         train or host models unless your VPC has an interface endpoint to the SageMaker API and runtime
     *         or a NAT gateway and your security groups allow outbound connections.</p>
     *             </li>
     *          </ul>
     *          <p>For more information, see
     *     <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-notebooks-and-internet-access.html">Connect
     *       SageMaker Studio Notebooks to Resources in a VPC</a>.</p>
     */
    createDomain(args: CreateDomainCommandInput, options?: __HttpHandlerOptions): Promise<CreateDomainCommandOutput>;
    createDomain(args: CreateDomainCommandInput, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    createDomain(args: CreateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDomainCommandOutput) => void): void;
    /**
     * <p>Starts a SageMaker Edge Manager model packaging job. Edge Manager will use the model artifacts from the Amazon Simple Storage Service bucket that you specify. After the model has been packaged, Amazon SageMaker saves the resulting artifacts to an S3 bucket that you specify.</p>
     */
    createEdgePackagingJob(args: CreateEdgePackagingJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateEdgePackagingJobCommandOutput>;
    createEdgePackagingJob(args: CreateEdgePackagingJobCommandInput, cb: (err: any, data?: CreateEdgePackagingJobCommandOutput) => void): void;
    createEdgePackagingJob(args: CreateEdgePackagingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEdgePackagingJobCommandOutput) => void): void;
    /**
     * <p>Creates an endpoint using the endpoint configuration specified in the request. Amazon SageMaker
     *             uses the endpoint to provision resources and deploy models. You create the endpoint
     *             configuration with the <a>CreateEndpointConfig</a> API. </p>
     *         <p> Use this API to deploy models using Amazon SageMaker hosting services. </p>
     *         <p>For an example that calls this method when deploying a model to Amazon SageMaker hosting services,
     *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-deploy-model.html#ex1-deploy-model-boto">Deploy the
     *                 Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto
     *             3)).</a>
     *          </p>
     *         <note>
     *             <p> You must not delete an <code>EndpointConfig</code> that is in use by an endpoint
     *                 that is live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code>
     *                 operations are being performed on the endpoint. To update an endpoint, you must
     *                 create a new <code>EndpointConfig</code>.</p>
     *         </note>
     *         <p>The endpoint name must be unique within an AWS Region in your AWS account. </p>
     *         <p>When it receives the request, Amazon SageMaker creates the endpoint, launches the resources (ML
     *             compute instances), and deploys the model(s) on them. </p>
     *
     *         <note>
     *             <p>When you call <a>CreateEndpoint</a>, a load call is made to DynamoDB to
     *                 verify that your endpoint configuration exists. When you read data from a DynamoDB
     *                 table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html">
     *                   <code>Eventually Consistent Reads</code>
     *                </a>, the response might not
     *                 reflect the results of a recently completed write operation. The response might
     *                 include some stale data. If the dependent entities are not yet in DynamoDB, this
     *                 causes a validation error. If you repeat your read request after a short time, the
     *                 response should return the latest data. So retry logic is recommended to handle
     *                 these possible issues. We also recommend that customers call <a>DescribeEndpointConfig</a> before calling <a>CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p>
     *         </note>
     *         <p>When Amazon SageMaker receives the request, it sets the endpoint status to
     *                 <code>Creating</code>. After it creates the endpoint, it sets the status to
     *                 <code>InService</code>. Amazon SageMaker can then process incoming requests for inferences. To
     *             check the status of an endpoint, use the <a>DescribeEndpoint</a>
     *             API.</p>
     *         <p>If any of the models hosted at this endpoint get model data from an Amazon S3 location,
     *             Amazon SageMaker uses AWS Security Token Service to download model artifacts from the S3 path you
     *             provided. AWS STS is activated in your IAM user account by default. If you previously
     *             deactivated AWS STS for a region, you need to reactivate AWS STS for that region. For
     *             more information, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp_enable-regions.html">Activating and
     *                 Deactivating AWS STS in an AWS Region</a> in the <i>AWS Identity and Access Management User
     *                 Guide</i>.</p>
     *         <note>
     *             <p> To add the IAM role policies for using this API operation, go to the <a href="https://console.aws.amazon.com/iam/">IAM console</a>, and choose
     *                 Roles in the left navigation pane. Search the IAM role that you want to grant
     *                 access to use the <a>CreateEndpoint</a> and <a>CreateEndpointConfig</a> API operations, add the following policies to
     *                 the role. </p>
     *             <ul>
     *                <li>
     *                     <p>Option 1: For a full Amazon SageMaker access, search and attach the
     *                             <code>AmazonSageMakerFullAccess</code> policy.</p>
     *                 </li>
     *                <li>
     *                     <p>Option 2: For granting a limited access to an IAM role, paste the
     *                         following Action elements manually into the JSON file of the IAM role: </p>
     *                     <p>
     *                      <code>"Action": ["sagemaker:CreateEndpoint",
     *                             "sagemaker:CreateEndpointConfig"]</code>
     *                   </p>
     *                     <p>
     *                      <code>"Resource": [</code>
     *                   </p>
     *                     <p>
     *                      <code>"arn:aws:sagemaker:region:account-id:endpoint/endpointName"</code>
     *                   </p>
     *                     <p>
     *                      <code>"arn:aws:sagemaker:region:account-id:endpoint-config/endpointConfigName"</code>
     *                   </p>
     *                     <p>
     *                      <code>]</code>
     *                   </p>
     *                     <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/api-permissions-reference.html">Amazon SageMaker API
     *                             Permissions: Actions, Permissions, and Resources
     *                         Reference</a>.</p>
     *                 </li>
     *             </ul>
     *
     *         </note>
     */
    createEndpoint(args: CreateEndpointCommandInput, options?: __HttpHandlerOptions): Promise<CreateEndpointCommandOutput>;
    createEndpoint(args: CreateEndpointCommandInput, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
    createEndpoint(args: CreateEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEndpointCommandOutput) => void): void;
    /**
     * <p>Creates an endpoint configuration that Amazon SageMaker hosting services uses to deploy models. In
     *             the configuration, you identify one or more models, created using the
     *                 <code>CreateModel</code> API, to deploy and the resources that you want Amazon SageMaker to
     *             provision. Then you call the <a>CreateEndpoint</a> API.</p>
     *         <note>
     *             <p> Use this API if you want to use Amazon SageMaker hosting services to deploy models into
     *                 production. </p>
     *         </note>
     *         <p>In the request, you define a <code>ProductionVariant</code>, for each model that you
     *             want to deploy. Each <code>ProductionVariant</code> parameter also describes the
     *             resources that you want Amazon SageMaker to provision. This includes the number and type of ML
     *             compute instances to deploy. </p>
     *         <p>If you are hosting multiple models, you also assign a <code>VariantWeight</code> to
     *             specify how much traffic you want to allocate to each model. For example, suppose that
     *             you want to host two models, A and B, and you assign traffic weight 2 for model A and 1
     *             for model B. Amazon SageMaker distributes two-thirds of the traffic to Model A, and one-third to
     *             model B. </p>
     *         <p>For an example that calls this method when deploying a model to Amazon SageMaker hosting services,
     *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-deploy-model.html#ex1-deploy-model-boto">Deploy the
     *                 Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto
     *             3)).</a>
     *          </p>
     *         <note>
     *             <p>When you call <a>CreateEndpoint</a>, a load call is made to DynamoDB to
     *                 verify that your endpoint configuration exists. When you read data from a DynamoDB
     *                 table supporting <a href="https://docs.aws.amazon.com/amazondynamodb/latest/developerguide/HowItWorks.ReadConsistency.html">
     *                   <code>Eventually Consistent Reads</code>
     *                </a>, the response might not
     *                 reflect the results of a recently completed write operation. The response might
     *                 include some stale data. If the dependent entities are not yet in DynamoDB, this
     *                 causes a validation error. If you repeat your read request after a short time, the
     *                 response should return the latest data. So retry logic is recommended to handle
     *                 these possible issues. We also recommend that customers call <a>DescribeEndpointConfig</a> before calling <a>CreateEndpoint</a> to minimize the potential impact of a DynamoDB eventually consistent read.</p>
     *         </note>
     */
    createEndpointConfig(args: CreateEndpointConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateEndpointConfigCommandOutput>;
    createEndpointConfig(args: CreateEndpointConfigCommandInput, cb: (err: any, data?: CreateEndpointConfigCommandOutput) => void): void;
    createEndpointConfig(args: CreateEndpointConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateEndpointConfigCommandOutput) => void): void;
    /**
     * <p>Creates an SageMaker <i>experiment</i>. An experiment is a collection of
     *         <i>trials</i> that are observed, compared and evaluated as a group. A trial is
     *       a set of steps, called <i>trial components</i>, that produce a machine learning
     *       model.</p>
     *          <p>The goal of an experiment is to determine the components that produce the best model.
     *       Multiple trials are performed, each one isolating and measuring the impact of a change to one
     *       or more inputs, while keeping the remaining inputs constant.</p>
     *          <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial
     *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
     *       must use the logging APIs provided by the SDK.</p>
     *          <p>You can add tags to experiments, trials, trial components and then use the <a>Search</a> API to search for the tags.</p>
     *          <p>To add a description to an experiment, specify the optional <code>Description</code>
     *       parameter. To add a description later, or to change the description, call the <a>UpdateExperiment</a> API.</p>
     *          <p>To get a list of all your experiments, call the <a>ListExperiments</a> API. To
     *       view an experiment's properties, call the <a>DescribeExperiment</a> API. To get a
     *       list of all the trials associated with an experiment, call the <a>ListTrials</a>
     *       API. To create a trial call the <a>CreateTrial</a> API.</p>
     */
    createExperiment(args: CreateExperimentCommandInput, options?: __HttpHandlerOptions): Promise<CreateExperimentCommandOutput>;
    createExperiment(args: CreateExperimentCommandInput, cb: (err: any, data?: CreateExperimentCommandOutput) => void): void;
    createExperiment(args: CreateExperimentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateExperimentCommandOutput) => void): void;
    /**
     * <p>Create a new <code>FeatureGroup</code>. A <code>FeatureGroup</code> is a group of
     *             <code>Features</code> defined in the <code>FeatureStore</code> to describe a
     *             <code>Record</code>. </p>
     *          <p>The <code>FeatureGroup</code> defines the schema and features contained in the
     *          FeatureGroup. A <code>FeatureGroup</code> definition is composed of a list of
     *             <code>Features</code>, a <code>RecordIdentifierFeatureName</code>, an
     *             <code>EventTimeFeatureName</code> and configurations for its <code>OnlineStore</code>
     *             and <code>OfflineStore</code>. Check <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html">AWS service quotas</a> to see
     *          the <code>FeatureGroup</code>s quota for your AWS account.</p>
     *          <important>
     *             <p>You must include at least one of <code>OnlineStoreConfig</code> and
     *                <code>OfflineStoreConfig</code> to create a <code>FeatureGroup</code>.</p>
     *          </important>
     */
    createFeatureGroup(args: CreateFeatureGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateFeatureGroupCommandOutput>;
    createFeatureGroup(args: CreateFeatureGroupCommandInput, cb: (err: any, data?: CreateFeatureGroupCommandOutput) => void): void;
    createFeatureGroup(args: CreateFeatureGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFeatureGroupCommandOutput) => void): void;
    /**
     * <p>Creates a flow definition.</p>
     */
    createFlowDefinition(args: CreateFlowDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateFlowDefinitionCommandOutput>;
    createFlowDefinition(args: CreateFlowDefinitionCommandInput, cb: (err: any, data?: CreateFlowDefinitionCommandOutput) => void): void;
    createFlowDefinition(args: CreateFlowDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFlowDefinitionCommandOutput) => void): void;
    /**
     * <p>Defines the settings you will use for the human review workflow user interface. Reviewers will see a three-panel interface with an instruction area, the item to review, and an input area.</p>
     */
    createHumanTaskUi(args: CreateHumanTaskUiCommandInput, options?: __HttpHandlerOptions): Promise<CreateHumanTaskUiCommandOutput>;
    createHumanTaskUi(args: CreateHumanTaskUiCommandInput, cb: (err: any, data?: CreateHumanTaskUiCommandOutput) => void): void;
    createHumanTaskUi(args: CreateHumanTaskUiCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHumanTaskUiCommandOutput) => void): void;
    /**
     * <p>Starts a hyperparameter tuning job. A hyperparameter tuning job finds the best version
     *             of a model by running many training jobs on your dataset using the algorithm you choose
     *             and values for hyperparameters within ranges that you specify. It then chooses the
     *             hyperparameter values that result in a model that performs the best, as measured by an
     *             objective metric that you choose.</p>
     */
    createHyperParameterTuningJob(args: CreateHyperParameterTuningJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateHyperParameterTuningJobCommandOutput>;
    createHyperParameterTuningJob(args: CreateHyperParameterTuningJobCommandInput, cb: (err: any, data?: CreateHyperParameterTuningJobCommandOutput) => void): void;
    createHyperParameterTuningJob(args: CreateHyperParameterTuningJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateHyperParameterTuningJobCommandOutput) => void): void;
    /**
     * <p>Creates a custom SageMaker image. A SageMaker image is a set of image versions. Each image
     *         version represents a container image stored in Amazon Container Registry (ECR). For more information, see
     *         <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/studio-byoi.html">Bring your own SageMaker image</a>.</p>
     */
    createImage(args: CreateImageCommandInput, options?: __HttpHandlerOptions): Promise<CreateImageCommandOutput>;
    createImage(args: CreateImageCommandInput, cb: (err: any, data?: CreateImageCommandOutput) => void): void;
    createImage(args: CreateImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateImageCommandOutput) => void): void;
    /**
     * <p>Creates a version of the SageMaker image specified by <code>ImageName</code>. The version
     *         represents the Amazon Container Registry (ECR) container image specified by <code>BaseImage</code>.</p>
     */
    createImageVersion(args: CreateImageVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateImageVersionCommandOutput>;
    createImageVersion(args: CreateImageVersionCommandInput, cb: (err: any, data?: CreateImageVersionCommandOutput) => void): void;
    createImageVersion(args: CreateImageVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateImageVersionCommandOutput) => void): void;
    /**
     * <p>Creates a job that uses workers to label the data objects in your input dataset. You
     *             can use the labeled data to train machine learning models. </p>
     *         <p>You can select your workforce from one of three providers:</p>
     *         <ul>
     *             <li>
     *                 <p>A private workforce that you create. It can include employees, contractors,
     *                     and outside experts. Use a private workforce when want the data to stay within
     *                     your organization or when a specific set of skills is required.</p>
     *             </li>
     *             <li>
     *                 <p>One or more vendors that you select from the AWS Marketplace. Vendors provide
     *                     expertise in specific areas. </p>
     *             </li>
     *             <li>
     *                 <p>The Amazon Mechanical Turk workforce. This is the largest workforce, but it
     *                     should only be used for public data or data that has been stripped of any
     *                     personally identifiable information.</p>
     *             </li>
     *          </ul>
     *         <p>You can also use <i>automated data labeling</i> to reduce the number of
     *             data objects that need to be labeled by a human. Automated data labeling uses
     *                 <i>active learning</i> to determine if a data object can be labeled by
     *             machine or if it needs to be sent to a human worker. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-automated-labeling.html">Using
     *                 Automated Data Labeling</a>.</p>
     *         <p>The data objects to be labeled are contained in an Amazon S3 bucket. You create a
     *                 <i>manifest file</i> that describes the location of each object. For
     *             more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-data.html">Using Input and Output Data</a>.</p>
     *         <p>The output can be used as the manifest file for another labeling job or as training
     *             data for your machine learning models.</p>
     *         <p>You can use this operation to create a static labeling job or a streaming labeling
     *             job. A static labeling job stops if all data objects in the input manifest file
     *             identified in <code>ManifestS3Uri</code> have been labeled. A streaming labeling job
     *             runs perpetually until it is manually stopped, or remains idle for 10 days. You can send
     *             new data objects to an active (<code>InProgress</code>) streaming labeling job in real
     *             time. To learn how to create a static labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-create-labeling-job-api.html">Create a Labeling Job
     *                 (API) </a> in the Amazon SageMaker Developer Guide. To learn how to create a streaming
     *             labeling job, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-streaming-create-job.html">Create a Streaming Labeling
     *                 Job</a>.</p>
     */
    createLabelingJob(args: CreateLabelingJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateLabelingJobCommandOutput>;
    createLabelingJob(args: CreateLabelingJobCommandInput, cb: (err: any, data?: CreateLabelingJobCommandOutput) => void): void;
    createLabelingJob(args: CreateLabelingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateLabelingJobCommandOutput) => void): void;
    /**
     * <p>Creates a model in Amazon SageMaker. In the request, you name the model and describe a primary
     *             container. For the primary container,
     *             you specify the Docker image that contains inference code, artifacts (from prior
     *             training), and a custom environment map that the inference code uses when you deploy the
     *             model for predictions.</p>
     *         <p>Use this API to create a model if you want to use Amazon SageMaker hosting services or run a batch
     *             transform job.</p>
     *         <p>To host your model, you create an endpoint configuration with the
     *                 <code>CreateEndpointConfig</code> API, and then create an endpoint with the
     *                 <code>CreateEndpoint</code> API. Amazon SageMaker then deploys all of the containers that you
     *             defined for the model in the hosting environment. </p>
     *         <p>For an example that calls this method when deploying a model to Amazon SageMaker hosting services,
     *             see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/ex1-deploy-model.html#ex1-deploy-model-boto">Deploy the
     *                 Model to Amazon SageMaker Hosting Services (AWS SDK for Python (Boto
     *             3)).</a>
     *          </p>
     *         <p>To run a batch transform using your model, you start a job with the
     *                 <code>CreateTransformJob</code> API. Amazon SageMaker uses your model and your dataset to get
     *             inferences which are then saved to a specified S3 location.</p>
     *         <p>In the <code>CreateModel</code> request, you must define a container with the
     *                 <code>PrimaryContainer</code> parameter.</p>
     *         <p>In the request, you also provide an IAM role that Amazon SageMaker can assume to access model
     *             artifacts and docker image for deployment on ML compute hosting instances or for batch
     *             transform jobs. In addition, you also use the IAM role to manage permissions the
     *             inference code needs. For example, if the inference code access any other AWS resources,
     *             you grant necessary permissions via this role.</p>
     */
    createModel(args: CreateModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelCommandOutput>;
    createModel(args: CreateModelCommandInput, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
    createModel(args: CreateModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelCommandOutput) => void): void;
    /**
     * <p>Creates the definition for a model bias job.</p>
     */
    createModelBiasJobDefinition(args: CreateModelBiasJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelBiasJobDefinitionCommandOutput>;
    createModelBiasJobDefinition(args: CreateModelBiasJobDefinitionCommandInput, cb: (err: any, data?: CreateModelBiasJobDefinitionCommandOutput) => void): void;
    createModelBiasJobDefinition(args: CreateModelBiasJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelBiasJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Creates the definition for a model explainability job.</p>
     */
    createModelExplainabilityJobDefinition(args: CreateModelExplainabilityJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelExplainabilityJobDefinitionCommandOutput>;
    createModelExplainabilityJobDefinition(args: CreateModelExplainabilityJobDefinitionCommandInput, cb: (err: any, data?: CreateModelExplainabilityJobDefinitionCommandOutput) => void): void;
    createModelExplainabilityJobDefinition(args: CreateModelExplainabilityJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelExplainabilityJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Creates a model package that you can use to create Amazon SageMaker models or list on AWS
     *             Marketplace, or a versioned model that is part of a model group. Buyers can subscribe to
     *             model packages listed on AWS Marketplace to create models in Amazon SageMaker.</p>
     *         <p>To create a model package by specifying a Docker container that contains your
     *             inference code and the Amazon S3 location of your model artifacts, provide values for
     *                 <code>InferenceSpecification</code>. To create a model from an algorithm resource
     *             that you created or subscribed to in AWS Marketplace, provide a value for
     *                 <code>SourceAlgorithmSpecification</code>.</p>
     *         <note>
     *             <p>There are two types of model packages:</p>
     *             <ul>
     *                <li>
     *                     <p>Versioned - a model that is part of a model group in the model
     *                         registry.</p>
     *                 </li>
     *                <li>
     *                     <p>Unversioned - a model package that is not part of a model group.</p>
     *                 </li>
     *             </ul>
     *         </note>
     */
    createModelPackage(args: CreateModelPackageCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelPackageCommandOutput>;
    createModelPackage(args: CreateModelPackageCommandInput, cb: (err: any, data?: CreateModelPackageCommandOutput) => void): void;
    createModelPackage(args: CreateModelPackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelPackageCommandOutput) => void): void;
    /**
     * <p>Creates a model group. A model group contains a group of model versions.</p>
     */
    createModelPackageGroup(args: CreateModelPackageGroupCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelPackageGroupCommandOutput>;
    createModelPackageGroup(args: CreateModelPackageGroupCommandInput, cb: (err: any, data?: CreateModelPackageGroupCommandOutput) => void): void;
    createModelPackageGroup(args: CreateModelPackageGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelPackageGroupCommandOutput) => void): void;
    /**
     * <p>Creates a definition for a job that monitors model quality and drift. For information
     *          about model monitor, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-monitor.html">Amazon SageMaker Model Monitor</a>.</p>
     */
    createModelQualityJobDefinition(args: CreateModelQualityJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateModelQualityJobDefinitionCommandOutput>;
    createModelQualityJobDefinition(args: CreateModelQualityJobDefinitionCommandInput, cb: (err: any, data?: CreateModelQualityJobDefinitionCommandOutput) => void): void;
    createModelQualityJobDefinition(args: CreateModelQualityJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateModelQualityJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Creates a schedule that regularly starts Amazon SageMaker Processing Jobs to monitor the data
     *          captured for an Amazon SageMaker Endoint.</p>
     */
    createMonitoringSchedule(args: CreateMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<CreateMonitoringScheduleCommandOutput>;
    createMonitoringSchedule(args: CreateMonitoringScheduleCommandInput, cb: (err: any, data?: CreateMonitoringScheduleCommandOutput) => void): void;
    createMonitoringSchedule(args: CreateMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p>Creates an Amazon SageMaker notebook instance. A notebook instance is a machine learning (ML)
     *             compute instance running on a Jupyter notebook. </p>
     *         <p>In a <code>CreateNotebookInstance</code> request, specify the type of ML compute
     *             instance that you want to run. Amazon SageMaker launches the instance, installs common libraries
     *             that you can use to explore datasets for model training, and attaches an ML storage
     *             volume to the notebook instance. </p>
     *         <p>Amazon SageMaker also provides a set of example notebooks. Each notebook demonstrates how to
     *             use Amazon SageMaker with a specific algorithm or with a machine learning framework. </p>
     *         <p>After receiving the request, Amazon SageMaker does the following:</p>
     *         <ol>
     *             <li>
     *                 <p>Creates a network interface in the Amazon SageMaker VPC.</p>
     *             </li>
     *             <li>
     *                 <p>(Option) If you specified <code>SubnetId</code>, Amazon SageMaker creates a network
     *                     interface in your own VPC, which is inferred from the subnet ID that you provide
     *                     in the input. When creating this network interface, Amazon SageMaker attaches the security
     *                     group that you specified in the request to the network interface that it creates
     *                     in your VPC.</p>
     *
     *             </li>
     *             <li>
     *                 <p>Launches an EC2 instance of the type specified in the request in the Amazon SageMaker
     *                     VPC. If you specified <code>SubnetId</code> of your VPC, Amazon SageMaker specifies both
     *                     network interfaces when launching this instance. This enables inbound traffic
     *                     from your own VPC to the notebook instance, assuming that the security groups
     *                     allow it.</p>
     *             </li>
     *          </ol>
     *
     *         <p>After creating the notebook instance, Amazon SageMaker returns its Amazon Resource Name (ARN).
     *             You can't change the name of a notebook instance after you create it.</p>
     *         <p>After Amazon SageMaker creates the notebook instance, you can connect to the Jupyter server and
     *             work in Jupyter notebooks. For example, you can write code to explore a dataset that you
     *             can use for model training, train a model, host models by creating Amazon SageMaker endpoints, and
     *             validate hosted models. </p>
     *         <p>For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
     */
    createNotebookInstance(args: CreateNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<CreateNotebookInstanceCommandOutput>;
    createNotebookInstance(args: CreateNotebookInstanceCommandInput, cb: (err: any, data?: CreateNotebookInstanceCommandOutput) => void): void;
    createNotebookInstance(args: CreateNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>Creates a lifecycle configuration that you can associate with a notebook instance. A
     *                 <i>lifecycle configuration</i> is a collection of shell scripts that
     *             run when you create or start a notebook instance.</p>
     *         <p>Each lifecycle configuration script has a limit of 16384 characters.</p>
     *         <p>The value of the <code>$PATH</code> environment variable that is available to both
     *             scripts is <code>/sbin:bin:/usr/sbin:/usr/bin</code>.</p>
     *         <p>View CloudWatch Logs for notebook instance lifecycle configurations in log group
     *                 <code>/aws/sagemaker/NotebookInstances</code> in log stream
     *                 <code>[notebook-instance-name]/[LifecycleConfigHook]</code>.</p>
     *         <p>Lifecycle configuration scripts cannot run for longer than 5 minutes. If a script runs
     *             for longer than 5 minutes, it fails and the notebook instance is not created or
     *             started.</p>
     *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
     *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
     */
    createNotebookInstanceLifecycleConfig(args: CreateNotebookInstanceLifecycleConfigCommandInput, options?: __HttpHandlerOptions): Promise<CreateNotebookInstanceLifecycleConfigCommandOutput>;
    createNotebookInstanceLifecycleConfig(args: CreateNotebookInstanceLifecycleConfigCommandInput, cb: (err: any, data?: CreateNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    createNotebookInstanceLifecycleConfig(args: CreateNotebookInstanceLifecycleConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    /**
     * <p>Creates a pipeline using a JSON pipeline definition.</p>
     */
    createPipeline(args: CreatePipelineCommandInput, options?: __HttpHandlerOptions): Promise<CreatePipelineCommandOutput>;
    createPipeline(args: CreatePipelineCommandInput, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
    createPipeline(args: CreatePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePipelineCommandOutput) => void): void;
    /**
     * <p>Creates a URL for a specified UserProfile in a Domain.  When accessed in a web browser,
     *        the user will be automatically signed in to Amazon SageMaker Studio, and granted access to all of
     *        the Apps and files associated with the Domain's Amazon Elastic File System (EFS) volume.
     *        This operation can only be called when the authentication mode equals IAM.
     *    </p>
     *          <note>
     *             <p>The URL that you get from a call to <code>CreatePresignedDomainUrl</code> has a default timeout of 5 minutes. You can configure this value using <code>ExpiresInSeconds</code>. If you try to use the URL after the timeout limit expires, you
     *             are directed to the AWS console sign-in page.</p>
     *          </note>
     */
    createPresignedDomainUrl(args: CreatePresignedDomainUrlCommandInput, options?: __HttpHandlerOptions): Promise<CreatePresignedDomainUrlCommandOutput>;
    createPresignedDomainUrl(args: CreatePresignedDomainUrlCommandInput, cb: (err: any, data?: CreatePresignedDomainUrlCommandOutput) => void): void;
    createPresignedDomainUrl(args: CreatePresignedDomainUrlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePresignedDomainUrlCommandOutput) => void): void;
    /**
     * <p>Returns a URL that you can use to connect to the Jupyter server from a notebook
     *             instance. In the Amazon SageMaker console, when you choose <code>Open</code> next to a notebook
     *             instance, Amazon SageMaker opens a new tab showing the Jupyter server home page from the notebook
     *             instance. The console uses this API to get the URL and show the page.</p>
     *         <p> The IAM role or user used to call this API defines the permissions to access the
     *             notebook instance. Once the presigned URL is created, no additional permission is
     *             required to access this URL. IAM authorization policies for this API are also enforced
     *             for every HTTP request and WebSocket frame that attempts to connect to the notebook
     *             instance.</p>
     *         <p>You can restrict access to this API and to the URL that it returns to a list of IP
     *             addresses that you specify. Use the <code>NotIpAddress</code> condition operator and the
     *                 <code>aws:SourceIP</code> condition context key to specify the list of IP addresses
     *             that you want to have access to the notebook instance. For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/security_iam_id-based-policy-examples.html#nbi-ip-filter">Limit Access to a Notebook Instance by IP Address</a>.</p>
     *         <note>
     *             <p>The URL that you get from a call to <a>CreatePresignedNotebookInstanceUrl</a> is valid only for 5 minutes. If
     *                 you try to use the URL after the 5-minute limit expires, you are directed to the
     *                 AWS console sign-in page.</p>
     *         </note>
     */
    createPresignedNotebookInstanceUrl(args: CreatePresignedNotebookInstanceUrlCommandInput, options?: __HttpHandlerOptions): Promise<CreatePresignedNotebookInstanceUrlCommandOutput>;
    createPresignedNotebookInstanceUrl(args: CreatePresignedNotebookInstanceUrlCommandInput, cb: (err: any, data?: CreatePresignedNotebookInstanceUrlCommandOutput) => void): void;
    createPresignedNotebookInstanceUrl(args: CreatePresignedNotebookInstanceUrlCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreatePresignedNotebookInstanceUrlCommandOutput) => void): void;
    /**
     * <p>Creates a processing job.</p>
     */
    createProcessingJob(args: CreateProcessingJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateProcessingJobCommandOutput>;
    createProcessingJob(args: CreateProcessingJobCommandInput, cb: (err: any, data?: CreateProcessingJobCommandOutput) => void): void;
    createProcessingJob(args: CreateProcessingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProcessingJobCommandOutput) => void): void;
    /**
     * <p>Creates a machine learning (ML) project that can contain one or more templates that set
     *             up an ML pipeline from training to deploying an approved model.</p>
     */
    createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
    createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    createProject(args: CreateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    /**
     * <p>Starts a model training job. After training completes, Amazon SageMaker saves the resulting
     *             model artifacts to an Amazon S3 location that you specify. </p>
     *         <p>If you choose to host your model using Amazon SageMaker hosting services, you can use the
     *             resulting model artifacts as part of the model. You can also use the artifacts in a
     *             machine learning service other than Amazon SageMaker, provided that you know how to use them for
     *             inference.
     *
     *         </p>
     *         <p>In the request body, you provide the following: </p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>AlgorithmSpecification</code> - Identifies the training algorithm to
     *                     use.
     *                     </p>
     *             </li>
     *             <li>
     *                 <p>
     *                     <code>HyperParameters</code> - Specify these algorithm-specific parameters to
     *                     enable the estimation of model parameters during training. Hyperparameters can
     *                     be tuned to optimize this learning process. For a list of hyperparameters for
     *                     each training algorithm provided by Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/algos.html">Algorithms</a>. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>InputDataConfig</code> - Describes the training dataset and the Amazon S3,
     *                     EFS, or FSx location where it is stored.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>OutputDataConfig</code> - Identifies the Amazon S3 bucket where you want
     *                     Amazon SageMaker to save the results of model training. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>ResourceConfig</code> - Identifies the resources, ML compute
     *                     instances, and ML storage volumes to deploy for model training. In distributed
     *                     training, you specify more than one instance. </p>
     *
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>EnableManagedSpotTraining</code> - Optimize the cost of training machine
     *                     learning models by up to 80% by using Amazon EC2 Spot instances. For more
     *                     information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/model-managed-spot-training.html">Managed Spot
     *                         Training</a>. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>RoleArn</code> - The Amazon Resource Name (ARN) that Amazon SageMaker assumes to perform tasks on
     *                     your behalf during model training.
     *
     *                     You must grant this role the necessary permissions so that Amazon SageMaker can successfully
     *                     complete model training. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>StoppingCondition</code> - To help cap training costs, use
     *                         <code>MaxRuntimeInSeconds</code> to set a time limit for training. Use
     *                         <code>MaxWaitTimeInSeconds</code> to specify how long
     *                         a managed spot training job has to complete. </p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>Environment</code> - The environment variables to set in the Docker container.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>RetryStrategy</code> - The number of times to retry the job when the
     *                     job fails due to an <code>InternalServerError</code>.</p>
     *             </li>
     *          </ul>
     *         <p> For more information about Amazon SageMaker, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/how-it-works.html">How It Works</a>. </p>
     */
    createTrainingJob(args: CreateTrainingJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrainingJobCommandOutput>;
    createTrainingJob(args: CreateTrainingJobCommandInput, cb: (err: any, data?: CreateTrainingJobCommandOutput) => void): void;
    createTrainingJob(args: CreateTrainingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTrainingJobCommandOutput) => void): void;
    /**
     * <p>Starts a transform job. A transform job uses a trained model to get inferences on a
     *             dataset and saves these results to an Amazon S3 location that you specify.</p>
     *         <p>To perform batch transformations, you create a transform job and use the data that you
     *             have readily available.</p>
     *         <p>In the request body, you provide the following:</p>
     *         <ul>
     *             <li>
     *                 <p>
     *                   <code>TransformJobName</code> - Identifies the transform job. The name must be
     *                     unique within an AWS Region in an AWS account.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>ModelName</code> - Identifies the model to use. <code>ModelName</code>
     *                     must be the name of an existing Amazon SageMaker model in the same AWS Region and AWS
     *                     account. For information on creating a model, see <a>CreateModel</a>.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>TransformInput</code> - Describes the dataset to be transformed and the
     *                     Amazon S3 location where it is stored.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>TransformOutput</code> - Identifies the Amazon S3 location where you want
     *                     Amazon SageMaker to save the results from the transform job.</p>
     *             </li>
     *             <li>
     *                 <p>
     *                   <code>TransformResources</code> - Identifies the ML compute instances for the
     *                     transform job.</p>
     *             </li>
     *          </ul>
     *         <p>For more information about how batch transformation works, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/batch-transform.html">Batch
     *                 Transform</a>.</p>
     */
    createTransformJob(args: CreateTransformJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateTransformJobCommandOutput>;
    createTransformJob(args: CreateTransformJobCommandInput, cb: (err: any, data?: CreateTransformJobCommandOutput) => void): void;
    createTransformJob(args: CreateTransformJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTransformJobCommandOutput) => void): void;
    /**
     * <p>Creates an SageMaker <i>trial</i>. A trial is a set of steps called
     *         <i>trial components</i> that produce a machine learning model. A trial is part
     *       of a single SageMaker <i>experiment</i>.</p>
     *          <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial
     *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
     *       must use the logging APIs provided by the SDK.</p>
     *          <p>You can add tags to a trial and then use the <a>Search</a> API to search for
     *       the tags.</p>
     *          <p>To get a list of all your trials, call the <a>ListTrials</a> API. To view a
     *       trial's properties, call the <a>DescribeTrial</a> API. To create a trial component,
     *       call the <a>CreateTrialComponent</a> API.</p>
     */
    createTrial(args: CreateTrialCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrialCommandOutput>;
    createTrial(args: CreateTrialCommandInput, cb: (err: any, data?: CreateTrialCommandOutput) => void): void;
    createTrial(args: CreateTrialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTrialCommandOutput) => void): void;
    /**
     * <p>Creates a <i>trial component</i>, which is a stage of a machine learning
     *         <i>trial</i>. A trial is composed of one or more trial components. A trial
     *       component can be used in multiple trials.</p>
     *          <p>Trial components include pre-processing jobs, training jobs, and batch transform
     *       jobs.</p>
     *          <p>When you use SageMaker Studio or the SageMaker Python SDK, all experiments, trials, and trial
     *       components are automatically tracked, logged, and indexed. When you use the AWS SDK for Python (Boto), you
     *       must use the logging APIs provided by the SDK.</p>
     *          <p>You can add tags to a trial component and then use the <a>Search</a> API to
     *       search for the tags.</p>
     *          <note>
     *             <p>
     *                <code>CreateTrialComponent</code> can only be invoked from within an SageMaker managed
     *         environment. This includes SageMaker training jobs, processing jobs, transform jobs, and SageMaker
     *         notebooks. A call to <code>CreateTrialComponent</code> from outside one of these
     *         environments results in an error.</p>
     *          </note>
     */
    createTrialComponent(args: CreateTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<CreateTrialComponentCommandOutput>;
    createTrialComponent(args: CreateTrialComponentCommandInput, cb: (err: any, data?: CreateTrialComponentCommandOutput) => void): void;
    createTrialComponent(args: CreateTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateTrialComponentCommandOutput) => void): void;
    /**
     * <p>Creates a user profile. A user profile represents a single user within a domain, and is
     *      the main way to reference a "person" for the purposes of sharing, reporting, and other
     *      user-oriented features. This entity is created when a user onboards to Amazon SageMaker Studio. If an
     *      administrator invites a person by email or imports them from SSO, a user profile is
     *      automatically created. A user profile is the primary holder of settings for an individual
     *      user and has a reference to the user's private Amazon Elastic File System (EFS) home directory.
     *    </p>
     */
    createUserProfile(args: CreateUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<CreateUserProfileCommandOutput>;
    createUserProfile(args: CreateUserProfileCommandInput, cb: (err: any, data?: CreateUserProfileCommandOutput) => void): void;
    createUserProfile(args: CreateUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateUserProfileCommandOutput) => void): void;
    /**
     * <p>Use this operation to create a workforce. This operation will return an error
     *       if a workforce already exists in the AWS Region that you specify. You can only
     *       create one workforce in each AWS Region per AWS account.</p>
     *
     *          <p>If you want to create a new workforce in an AWS Region where
     *       a workforce already exists, use the  API
     *       operation to delete the existing workforce and then use <code>CreateWorkforce</code>
     *       to create a new workforce.</p>
     *
     *          <p>To create a private workforce using Amazon Cognito, you must specify a Cognito user pool
     *     in <code>CognitoConfig</code>.
     *     You can also create an Amazon Cognito workforce using the Amazon SageMaker console.
     *     For more information, see
     *       <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private.html">
     *       Create a Private Workforce (Amazon Cognito)</a>.</p>
     *
     *          <p>To create a private workforce using your own OIDC Identity Provider (IdP), specify your IdP
     *       configuration in <code>OidcConfig</code>. Your OIDC IdP must support <i>groups</i>
     *       because groups are used by Ground Truth and Amazon A2I to create work teams.
     *       For more information, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/sms-workforce-create-private-oidc.html">
     *       Create a Private Workforce (OIDC IdP)</a>.</p>
     */
    createWorkforce(args: CreateWorkforceCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorkforceCommandOutput>;
    createWorkforce(args: CreateWorkforceCommandInput, cb: (err: any, data?: CreateWorkforceCommandOutput) => void): void;
    createWorkforce(args: CreateWorkforceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorkforceCommandOutput) => void): void;
    /**
     * <p>Creates a new work team for labeling your data. A work team is defined by one or more
     *             Amazon Cognito user pools. You must first create the user pools before you can create a work
     *             team.</p>
     *         <p>You cannot create more than 25 work teams in an account and region.</p>
     */
    createWorkteam(args: CreateWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorkteamCommandOutput>;
    createWorkteam(args: CreateWorkteamCommandInput, cb: (err: any, data?: CreateWorkteamCommandOutput) => void): void;
    createWorkteam(args: CreateWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorkteamCommandOutput) => void): void;
    /**
     * <p>Deletes an action.</p>
     */
    deleteAction(args: DeleteActionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteActionCommandOutput>;
    deleteAction(args: DeleteActionCommandInput, cb: (err: any, data?: DeleteActionCommandOutput) => void): void;
    deleteAction(args: DeleteActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteActionCommandOutput) => void): void;
    /**
     * <p>Removes the specified algorithm from your account.</p>
     */
    deleteAlgorithm(args: DeleteAlgorithmCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAlgorithmCommandOutput>;
    deleteAlgorithm(args: DeleteAlgorithmCommandInput, cb: (err: any, data?: DeleteAlgorithmCommandOutput) => void): void;
    deleteAlgorithm(args: DeleteAlgorithmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAlgorithmCommandOutput) => void): void;
    /**
     * <p>Used to stop and delete an app.</p>
     */
    deleteApp(args: DeleteAppCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppCommandOutput>;
    deleteApp(args: DeleteAppCommandInput, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
    deleteApp(args: DeleteAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAppCommandOutput) => void): void;
    /**
     * <p>Deletes an AppImageConfig.</p>
     */
    deleteAppImageConfig(args: DeleteAppImageConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAppImageConfigCommandOutput>;
    deleteAppImageConfig(args: DeleteAppImageConfigCommandInput, cb: (err: any, data?: DeleteAppImageConfigCommandOutput) => void): void;
    deleteAppImageConfig(args: DeleteAppImageConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAppImageConfigCommandOutput) => void): void;
    /**
     * <p>Deletes an artifact. Either <code>ArtifactArn</code> or <code>Source</code> must be
     *         specified.</p>
     */
    deleteArtifact(args: DeleteArtifactCommandInput, options?: __HttpHandlerOptions): Promise<DeleteArtifactCommandOutput>;
    deleteArtifact(args: DeleteArtifactCommandInput, cb: (err: any, data?: DeleteArtifactCommandOutput) => void): void;
    deleteArtifact(args: DeleteArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteArtifactCommandOutput) => void): void;
    /**
     * <p>Deletes an association.</p>
     */
    deleteAssociation(args: DeleteAssociationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAssociationCommandOutput>;
    deleteAssociation(args: DeleteAssociationCommandInput, cb: (err: any, data?: DeleteAssociationCommandOutput) => void): void;
    deleteAssociation(args: DeleteAssociationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAssociationCommandOutput) => void): void;
    /**
     * <p>Deletes the specified Git repository from your account.</p>
     */
    deleteCodeRepository(args: DeleteCodeRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<DeleteCodeRepositoryCommandOutput>;
    deleteCodeRepository(args: DeleteCodeRepositoryCommandInput, cb: (err: any, data?: DeleteCodeRepositoryCommandOutput) => void): void;
    deleteCodeRepository(args: DeleteCodeRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteCodeRepositoryCommandOutput) => void): void;
    /**
     * <p>Deletes an context.</p>
     */
    deleteContext(args: DeleteContextCommandInput, options?: __HttpHandlerOptions): Promise<DeleteContextCommandOutput>;
    deleteContext(args: DeleteContextCommandInput, cb: (err: any, data?: DeleteContextCommandOutput) => void): void;
    deleteContext(args: DeleteContextCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteContextCommandOutput) => void): void;
    /**
     * <p>Deletes a data quality monitoring job definition.</p>
     */
    deleteDataQualityJobDefinition(args: DeleteDataQualityJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDataQualityJobDefinitionCommandOutput>;
    deleteDataQualityJobDefinition(args: DeleteDataQualityJobDefinitionCommandInput, cb: (err: any, data?: DeleteDataQualityJobDefinitionCommandOutput) => void): void;
    deleteDataQualityJobDefinition(args: DeleteDataQualityJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDataQualityJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Deletes a fleet.</p>
     */
    deleteDeviceFleet(args: DeleteDeviceFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDeviceFleetCommandOutput>;
    deleteDeviceFleet(args: DeleteDeviceFleetCommandInput, cb: (err: any, data?: DeleteDeviceFleetCommandOutput) => void): void;
    deleteDeviceFleet(args: DeleteDeviceFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDeviceFleetCommandOutput) => void): void;
    /**
     * <p>Used to delete a domain.
     *      If you onboarded with IAM mode, you will need to delete your domain to onboard again using SSO.
     *      Use with caution. All of the members of the domain will lose access to their EFS volume,
     *      including data, notebooks, and other artifacts.
     *    </p>
     */
    deleteDomain(args: DeleteDomainCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDomainCommandOutput>;
    deleteDomain(args: DeleteDomainCommandInput, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    deleteDomain(args: DeleteDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDomainCommandOutput) => void): void;
    /**
     * <p>Deletes an endpoint. Amazon SageMaker frees up all of the resources that were deployed when the
     *             endpoint was created. </p>
     *         <p>Amazon SageMaker retires any custom KMS key grants associated with the endpoint, meaning you don't
     *             need to use the <a href="http://docs.aws.amazon.com/kms/latest/APIReference/API_RevokeGrant.html">RevokeGrant</a> API call.</p>
     */
    deleteEndpoint(args: DeleteEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEndpointCommandOutput>;
    deleteEndpoint(args: DeleteEndpointCommandInput, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
    deleteEndpoint(args: DeleteEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEndpointCommandOutput) => void): void;
    /**
     * <p>Deletes an endpoint configuration. The <code>DeleteEndpointConfig</code> API
     *             deletes only the specified configuration. It does not delete endpoints created using the
     *             configuration. </p>
     *         <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
     *             live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code> operations
     *             are being performed on the endpoint. If you delete the <code>EndpointConfig</code> of an
     *             endpoint that is active or being created or updated you may lose visibility into the
     *             instance type the endpoint is using. The endpoint must be deleted in order to stop
     *             incurring charges.</p>
     */
    deleteEndpointConfig(args: DeleteEndpointConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteEndpointConfigCommandOutput>;
    deleteEndpointConfig(args: DeleteEndpointConfigCommandInput, cb: (err: any, data?: DeleteEndpointConfigCommandOutput) => void): void;
    deleteEndpointConfig(args: DeleteEndpointConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteEndpointConfigCommandOutput) => void): void;
    /**
     * <p>Deletes an SageMaker experiment. All trials associated with the experiment must be deleted
     *       first. Use the <a>ListTrials</a> API to get a list of the trials associated with
     *       the experiment.</p>
     */
    deleteExperiment(args: DeleteExperimentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteExperimentCommandOutput>;
    deleteExperiment(args: DeleteExperimentCommandInput, cb: (err: any, data?: DeleteExperimentCommandOutput) => void): void;
    deleteExperiment(args: DeleteExperimentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteExperimentCommandOutput) => void): void;
    /**
     * <p>Delete the <code>FeatureGroup</code> and any data that was written to the
     *             <code>OnlineStore</code> of the <code>FeatureGroup</code>. Data cannot be accessed from
     *          the <code>OnlineStore</code> immediately after <code>DeleteFeatureGroup</code> is called. </p>
     *          <p>Data written into the <code>OfflineStore</code> will not be deleted. The AWS Glue
     *          database and tables that are automatically created for your <code>OfflineStore</code> are
     *          not deleted. </p>
     */
    deleteFeatureGroup(args: DeleteFeatureGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFeatureGroupCommandOutput>;
    deleteFeatureGroup(args: DeleteFeatureGroupCommandInput, cb: (err: any, data?: DeleteFeatureGroupCommandOutput) => void): void;
    deleteFeatureGroup(args: DeleteFeatureGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFeatureGroupCommandOutput) => void): void;
    /**
     * <p>Deletes the specified flow definition.</p>
     */
    deleteFlowDefinition(args: DeleteFlowDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFlowDefinitionCommandOutput>;
    deleteFlowDefinition(args: DeleteFlowDefinitionCommandInput, cb: (err: any, data?: DeleteFlowDefinitionCommandOutput) => void): void;
    deleteFlowDefinition(args: DeleteFlowDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFlowDefinitionCommandOutput) => void): void;
    /**
     * <p>Use this operation to delete a human task user interface (worker task template).</p>
     *          <p>
     *       To see a list of human task user interfaces
     *       (work task templates) in your account, use .
     *       When you delete a worker task template, it no longer appears when you call <code>ListHumanTaskUis</code>.</p>
     */
    deleteHumanTaskUi(args: DeleteHumanTaskUiCommandInput, options?: __HttpHandlerOptions): Promise<DeleteHumanTaskUiCommandOutput>;
    deleteHumanTaskUi(args: DeleteHumanTaskUiCommandInput, cb: (err: any, data?: DeleteHumanTaskUiCommandOutput) => void): void;
    deleteHumanTaskUi(args: DeleteHumanTaskUiCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteHumanTaskUiCommandOutput) => void): void;
    /**
     * <p>Deletes a SageMaker image and all versions of the image. The container images aren't
     *         deleted.</p>
     */
    deleteImage(args: DeleteImageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImageCommandOutput>;
    deleteImage(args: DeleteImageCommandInput, cb: (err: any, data?: DeleteImageCommandOutput) => void): void;
    deleteImage(args: DeleteImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteImageCommandOutput) => void): void;
    /**
     * <p>Deletes a version of a SageMaker image. The container image the version represents isn't
     *         deleted.</p>
     */
    deleteImageVersion(args: DeleteImageVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteImageVersionCommandOutput>;
    deleteImageVersion(args: DeleteImageVersionCommandInput, cb: (err: any, data?: DeleteImageVersionCommandOutput) => void): void;
    deleteImageVersion(args: DeleteImageVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteImageVersionCommandOutput) => void): void;
    /**
     * <p>Deletes a model. The <code>DeleteModel</code> API deletes only the model entry that
     *             was created in Amazon SageMaker when you called the <a>CreateModel</a> API. It does not
     *             delete model artifacts, inference code, or the IAM role that you specified when
     *             creating the model. </p>
     */
    deleteModel(args: DeleteModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelCommandOutput>;
    deleteModel(args: DeleteModelCommandInput, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
    deleteModel(args: DeleteModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon SageMaker model bias job definition.</p>
     */
    deleteModelBiasJobDefinition(args: DeleteModelBiasJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelBiasJobDefinitionCommandOutput>;
    deleteModelBiasJobDefinition(args: DeleteModelBiasJobDefinitionCommandInput, cb: (err: any, data?: DeleteModelBiasJobDefinitionCommandOutput) => void): void;
    deleteModelBiasJobDefinition(args: DeleteModelBiasJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelBiasJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Deletes an Amazon SageMaker model explainability job definition.</p>
     */
    deleteModelExplainabilityJobDefinition(args: DeleteModelExplainabilityJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelExplainabilityJobDefinitionCommandOutput>;
    deleteModelExplainabilityJobDefinition(args: DeleteModelExplainabilityJobDefinitionCommandInput, cb: (err: any, data?: DeleteModelExplainabilityJobDefinitionCommandOutput) => void): void;
    deleteModelExplainabilityJobDefinition(args: DeleteModelExplainabilityJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelExplainabilityJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Deletes a model package.</p>
     *         <p>A model package is used to create Amazon SageMaker models or list on AWS Marketplace. Buyers can
     *             subscribe to model packages listed on AWS Marketplace to create models in Amazon SageMaker.</p>
     */
    deleteModelPackage(args: DeleteModelPackageCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelPackageCommandOutput>;
    deleteModelPackage(args: DeleteModelPackageCommandInput, cb: (err: any, data?: DeleteModelPackageCommandOutput) => void): void;
    deleteModelPackage(args: DeleteModelPackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelPackageCommandOutput) => void): void;
    /**
     * <p>Deletes the specified model group.</p>
     */
    deleteModelPackageGroup(args: DeleteModelPackageGroupCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelPackageGroupCommandOutput>;
    deleteModelPackageGroup(args: DeleteModelPackageGroupCommandInput, cb: (err: any, data?: DeleteModelPackageGroupCommandOutput) => void): void;
    deleteModelPackageGroup(args: DeleteModelPackageGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelPackageGroupCommandOutput) => void): void;
    /**
     * <p>Deletes a model group resource policy.</p>
     */
    deleteModelPackageGroupPolicy(args: DeleteModelPackageGroupPolicyCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelPackageGroupPolicyCommandOutput>;
    deleteModelPackageGroupPolicy(args: DeleteModelPackageGroupPolicyCommandInput, cb: (err: any, data?: DeleteModelPackageGroupPolicyCommandOutput) => void): void;
    deleteModelPackageGroupPolicy(args: DeleteModelPackageGroupPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelPackageGroupPolicyCommandOutput) => void): void;
    /**
     * <p>Deletes the secified model quality monitoring job definition.</p>
     */
    deleteModelQualityJobDefinition(args: DeleteModelQualityJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteModelQualityJobDefinitionCommandOutput>;
    deleteModelQualityJobDefinition(args: DeleteModelQualityJobDefinitionCommandInput, cb: (err: any, data?: DeleteModelQualityJobDefinitionCommandOutput) => void): void;
    deleteModelQualityJobDefinition(args: DeleteModelQualityJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteModelQualityJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Deletes a monitoring schedule. Also stops the schedule had not already been stopped.
     *          This does not delete the job execution history of the monitoring schedule. </p>
     */
    deleteMonitoringSchedule(args: DeleteMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteMonitoringScheduleCommandOutput>;
    deleteMonitoringSchedule(args: DeleteMonitoringScheduleCommandInput, cb: (err: any, data?: DeleteMonitoringScheduleCommandOutput) => void): void;
    deleteMonitoringSchedule(args: DeleteMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p> Deletes an Amazon SageMaker notebook instance. Before you can delete a notebook instance, you
     *             must call the <code>StopNotebookInstance</code> API. </p>
     *         <important>
     *             <p>When you delete a notebook instance, you lose all of your data. Amazon SageMaker removes
     *                 the ML compute instance, and deletes the ML storage volume and the network interface
     *                 associated with the notebook instance. </p>
     *         </important>
     */
    deleteNotebookInstance(args: DeleteNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNotebookInstanceCommandOutput>;
    deleteNotebookInstance(args: DeleteNotebookInstanceCommandInput, cb: (err: any, data?: DeleteNotebookInstanceCommandOutput) => void): void;
    deleteNotebookInstance(args: DeleteNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>Deletes a notebook instance lifecycle configuration.</p>
     */
    deleteNotebookInstanceLifecycleConfig(args: DeleteNotebookInstanceLifecycleConfigCommandInput, options?: __HttpHandlerOptions): Promise<DeleteNotebookInstanceLifecycleConfigCommandOutput>;
    deleteNotebookInstanceLifecycleConfig(args: DeleteNotebookInstanceLifecycleConfigCommandInput, cb: (err: any, data?: DeleteNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    deleteNotebookInstanceLifecycleConfig(args: DeleteNotebookInstanceLifecycleConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    /**
     * <p>Deletes a pipeline if there are no running instances of the pipeline. To delete a
     *         pipeline, you must stop all running instances of the pipeline using the
     *         <code>StopPipelineExecution</code> API. When you delete a pipeline, all instances of the
     *         pipeline are deleted.</p>
     */
    deletePipeline(args: DeletePipelineCommandInput, options?: __HttpHandlerOptions): Promise<DeletePipelineCommandOutput>;
    deletePipeline(args: DeletePipelineCommandInput, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
    deletePipeline(args: DeletePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeletePipelineCommandOutput) => void): void;
    /**
     * <p>Delete the specified project.</p>
     */
    deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
    deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    deleteProject(args: DeleteProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    /**
     * <p>Deletes the specified tags from an Amazon SageMaker resource.</p>
     *         <p>To list a resource's tags, use the <code>ListTags</code> API. </p>
     *         <note>
     *             <p>When you call this API to delete tags from a hyperparameter tuning job, the
     *                 deleted tags are not removed from training jobs that the hyperparameter tuning job
     *                 launched before you called this API.</p>
     *         </note>
     *         <note>
     *             <p>When you call this API to delete tags from a SageMaker Studio Domain or User Profile, the
     *                 deleted tags are not removed from Apps that the SageMaker Studio Domain or User Profile
     *                 launched before you called this API.</p>
     *         </note>
     */
    deleteTags(args: DeleteTagsCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTagsCommandOutput>;
    deleteTags(args: DeleteTagsCommandInput, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    deleteTags(args: DeleteTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTagsCommandOutput) => void): void;
    /**
     * <p>Deletes the specified trial. All trial components that make up the trial must be deleted
     *       first. Use the <a>DescribeTrialComponent</a> API to get the list of trial
     *       components.</p>
     */
    deleteTrial(args: DeleteTrialCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrialCommandOutput>;
    deleteTrial(args: DeleteTrialCommandInput, cb: (err: any, data?: DeleteTrialCommandOutput) => void): void;
    deleteTrial(args: DeleteTrialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTrialCommandOutput) => void): void;
    /**
     * <p>Deletes the specified trial component. A trial component must be disassociated from all
     *       trials before the trial component can be deleted. To disassociate a trial component from a
     *       trial, call the <a>DisassociateTrialComponent</a> API.</p>
     */
    deleteTrialComponent(args: DeleteTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<DeleteTrialComponentCommandOutput>;
    deleteTrialComponent(args: DeleteTrialComponentCommandInput, cb: (err: any, data?: DeleteTrialComponentCommandOutput) => void): void;
    deleteTrialComponent(args: DeleteTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteTrialComponentCommandOutput) => void): void;
    /**
     * <p>Deletes a user profile. When a user profile is deleted, the user loses access to their EFS
     *      volume, including data, notebooks, and other artifacts.</p>
     */
    deleteUserProfile(args: DeleteUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<DeleteUserProfileCommandOutput>;
    deleteUserProfile(args: DeleteUserProfileCommandInput, cb: (err: any, data?: DeleteUserProfileCommandOutput) => void): void;
    deleteUserProfile(args: DeleteUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteUserProfileCommandOutput) => void): void;
    /**
     * <p>Use this operation to delete a workforce.</p>
     *
     *          <p>If you want to create a new workforce in an AWS Region where
     *       a workforce already exists, use this operation to delete the
     *       existing workforce and then use
     *       to create a new workforce.</p>
     *          <important>
     *             <p>If a private workforce contains one or more work teams, you must use
     *             the
     *             operation to delete all work teams before you delete the workforce.
     *             If you try to delete a workforce that contains one or more work teams,
     *             you will recieve a <code>ResourceInUse</code> error.</p>
     *         </important>
     */
    deleteWorkforce(args: DeleteWorkforceCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWorkforceCommandOutput>;
    deleteWorkforce(args: DeleteWorkforceCommandInput, cb: (err: any, data?: DeleteWorkforceCommandOutput) => void): void;
    deleteWorkforce(args: DeleteWorkforceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWorkforceCommandOutput) => void): void;
    /**
     * <p>Deletes an existing work team. This operation can't be undone.</p>
     */
    deleteWorkteam(args: DeleteWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWorkteamCommandOutput>;
    deleteWorkteam(args: DeleteWorkteamCommandInput, cb: (err: any, data?: DeleteWorkteamCommandOutput) => void): void;
    deleteWorkteam(args: DeleteWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWorkteamCommandOutput) => void): void;
    /**
     * <p>Deregisters the specified devices. After you deregister a device, you will need to re-register the devices.</p>
     */
    deregisterDevices(args: DeregisterDevicesCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterDevicesCommandOutput>;
    deregisterDevices(args: DeregisterDevicesCommandInput, cb: (err: any, data?: DeregisterDevicesCommandOutput) => void): void;
    deregisterDevices(args: DeregisterDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterDevicesCommandOutput) => void): void;
    /**
     * <p>Describes an action.</p>
     */
    describeAction(args: DescribeActionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeActionCommandOutput>;
    describeAction(args: DescribeActionCommandInput, cb: (err: any, data?: DescribeActionCommandOutput) => void): void;
    describeAction(args: DescribeActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeActionCommandOutput) => void): void;
    /**
     * <p>Returns a description of the specified algorithm that is in your account.</p>
     */
    describeAlgorithm(args: DescribeAlgorithmCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAlgorithmCommandOutput>;
    describeAlgorithm(args: DescribeAlgorithmCommandInput, cb: (err: any, data?: DescribeAlgorithmCommandOutput) => void): void;
    describeAlgorithm(args: DescribeAlgorithmCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAlgorithmCommandOutput) => void): void;
    /**
     * <p>Describes the app.</p>
     */
    describeApp(args: DescribeAppCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAppCommandOutput>;
    describeApp(args: DescribeAppCommandInput, cb: (err: any, data?: DescribeAppCommandOutput) => void): void;
    describeApp(args: DescribeAppCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAppCommandOutput) => void): void;
    /**
     * <p>Describes an AppImageConfig.</p>
     */
    describeAppImageConfig(args: DescribeAppImageConfigCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAppImageConfigCommandOutput>;
    describeAppImageConfig(args: DescribeAppImageConfigCommandInput, cb: (err: any, data?: DescribeAppImageConfigCommandOutput) => void): void;
    describeAppImageConfig(args: DescribeAppImageConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAppImageConfigCommandOutput) => void): void;
    /**
     * <p>Describes an artifact.</p>
     */
    describeArtifact(args: DescribeArtifactCommandInput, options?: __HttpHandlerOptions): Promise<DescribeArtifactCommandOutput>;
    describeArtifact(args: DescribeArtifactCommandInput, cb: (err: any, data?: DescribeArtifactCommandOutput) => void): void;
    describeArtifact(args: DescribeArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeArtifactCommandOutput) => void): void;
    /**
     * <p>Returns information about an Amazon SageMaker AutoML job.</p>
     */
    describeAutoMLJob(args: DescribeAutoMLJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAutoMLJobCommandOutput>;
    describeAutoMLJob(args: DescribeAutoMLJobCommandInput, cb: (err: any, data?: DescribeAutoMLJobCommandOutput) => void): void;
    describeAutoMLJob(args: DescribeAutoMLJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAutoMLJobCommandOutput) => void): void;
    /**
     * <p>Gets details about the specified Git repository.</p>
     */
    describeCodeRepository(args: DescribeCodeRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCodeRepositoryCommandOutput>;
    describeCodeRepository(args: DescribeCodeRepositoryCommandInput, cb: (err: any, data?: DescribeCodeRepositoryCommandOutput) => void): void;
    describeCodeRepository(args: DescribeCodeRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCodeRepositoryCommandOutput) => void): void;
    /**
     * <p>Returns information about a model compilation job.</p>
     *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
     *             information about multiple model compilation jobs, use <a>ListCompilationJobs</a>.</p>
     */
    describeCompilationJob(args: DescribeCompilationJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeCompilationJobCommandOutput>;
    describeCompilationJob(args: DescribeCompilationJobCommandInput, cb: (err: any, data?: DescribeCompilationJobCommandOutput) => void): void;
    describeCompilationJob(args: DescribeCompilationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeCompilationJobCommandOutput) => void): void;
    /**
     * <p>Describes a context.</p>
     */
    describeContext(args: DescribeContextCommandInput, options?: __HttpHandlerOptions): Promise<DescribeContextCommandOutput>;
    describeContext(args: DescribeContextCommandInput, cb: (err: any, data?: DescribeContextCommandOutput) => void): void;
    describeContext(args: DescribeContextCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeContextCommandOutput) => void): void;
    /**
     * <p>Gets the details of a data quality monitoring job definition.</p>
     */
    describeDataQualityJobDefinition(args: DescribeDataQualityJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDataQualityJobDefinitionCommandOutput>;
    describeDataQualityJobDefinition(args: DescribeDataQualityJobDefinitionCommandInput, cb: (err: any, data?: DescribeDataQualityJobDefinitionCommandOutput) => void): void;
    describeDataQualityJobDefinition(args: DescribeDataQualityJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDataQualityJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Describes the device.</p>
     */
    describeDevice(args: DescribeDeviceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDeviceCommandOutput>;
    describeDevice(args: DescribeDeviceCommandInput, cb: (err: any, data?: DescribeDeviceCommandOutput) => void): void;
    describeDevice(args: DescribeDeviceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDeviceCommandOutput) => void): void;
    /**
     * <p>A description of the fleet the device belongs to.</p>
     */
    describeDeviceFleet(args: DescribeDeviceFleetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDeviceFleetCommandOutput>;
    describeDeviceFleet(args: DescribeDeviceFleetCommandInput, cb: (err: any, data?: DescribeDeviceFleetCommandOutput) => void): void;
    describeDeviceFleet(args: DescribeDeviceFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDeviceFleetCommandOutput) => void): void;
    /**
     * <p>The description of the domain.</p>
     */
    describeDomain(args: DescribeDomainCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDomainCommandOutput>;
    describeDomain(args: DescribeDomainCommandInput, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
    describeDomain(args: DescribeDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDomainCommandOutput) => void): void;
    /**
     * <p>A description of edge packaging jobs.</p>
     */
    describeEdgePackagingJob(args: DescribeEdgePackagingJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEdgePackagingJobCommandOutput>;
    describeEdgePackagingJob(args: DescribeEdgePackagingJobCommandInput, cb: (err: any, data?: DescribeEdgePackagingJobCommandOutput) => void): void;
    describeEdgePackagingJob(args: DescribeEdgePackagingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEdgePackagingJobCommandOutput) => void): void;
    /**
     * <p>Returns the description of an endpoint.</p>
     */
    describeEndpoint(args: DescribeEndpointCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointCommandOutput>;
    describeEndpoint(args: DescribeEndpointCommandInput, cb: (err: any, data?: DescribeEndpointCommandOutput) => void): void;
    describeEndpoint(args: DescribeEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointCommandOutput) => void): void;
    /**
     * <p>Returns the description of an endpoint configuration created using the
     *                 <code>CreateEndpointConfig</code> API.</p>
     */
    describeEndpointConfig(args: DescribeEndpointConfigCommandInput, options?: __HttpHandlerOptions): Promise<DescribeEndpointConfigCommandOutput>;
    describeEndpointConfig(args: DescribeEndpointConfigCommandInput, cb: (err: any, data?: DescribeEndpointConfigCommandOutput) => void): void;
    describeEndpointConfig(args: DescribeEndpointConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeEndpointConfigCommandOutput) => void): void;
    /**
     * <p>Provides a list of an experiment's properties.</p>
     */
    describeExperiment(args: DescribeExperimentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeExperimentCommandOutput>;
    describeExperiment(args: DescribeExperimentCommandInput, cb: (err: any, data?: DescribeExperimentCommandOutput) => void): void;
    describeExperiment(args: DescribeExperimentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeExperimentCommandOutput) => void): void;
    /**
     * <p>Use this operation to describe a <code>FeatureGroup</code>. The response includes
     *          information on the creation time, <code>FeatureGroup</code> name, the unique identifier for
     *          each <code>FeatureGroup</code>, and more.</p>
     */
    describeFeatureGroup(args: DescribeFeatureGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFeatureGroupCommandOutput>;
    describeFeatureGroup(args: DescribeFeatureGroupCommandInput, cb: (err: any, data?: DescribeFeatureGroupCommandOutput) => void): void;
    describeFeatureGroup(args: DescribeFeatureGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFeatureGroupCommandOutput) => void): void;
    /**
     * <p>Returns information about the specified flow definition.</p>
     */
    describeFlowDefinition(args: DescribeFlowDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFlowDefinitionCommandOutput>;
    describeFlowDefinition(args: DescribeFlowDefinitionCommandInput, cb: (err: any, data?: DescribeFlowDefinitionCommandOutput) => void): void;
    describeFlowDefinition(args: DescribeFlowDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFlowDefinitionCommandOutput) => void): void;
    /**
     * <p>Returns information about the requested human task user interface (worker task template).</p>
     */
    describeHumanTaskUi(args: DescribeHumanTaskUiCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHumanTaskUiCommandOutput>;
    describeHumanTaskUi(args: DescribeHumanTaskUiCommandInput, cb: (err: any, data?: DescribeHumanTaskUiCommandOutput) => void): void;
    describeHumanTaskUi(args: DescribeHumanTaskUiCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHumanTaskUiCommandOutput) => void): void;
    /**
     * <p>Gets
     *             a description of a hyperparameter tuning job.</p>
     */
    describeHyperParameterTuningJob(args: DescribeHyperParameterTuningJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeHyperParameterTuningJobCommandOutput>;
    describeHyperParameterTuningJob(args: DescribeHyperParameterTuningJobCommandInput, cb: (err: any, data?: DescribeHyperParameterTuningJobCommandOutput) => void): void;
    describeHyperParameterTuningJob(args: DescribeHyperParameterTuningJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeHyperParameterTuningJobCommandOutput) => void): void;
    /**
     * <p>Describes a SageMaker image.</p>
     */
    describeImage(args: DescribeImageCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImageCommandOutput>;
    describeImage(args: DescribeImageCommandInput, cb: (err: any, data?: DescribeImageCommandOutput) => void): void;
    describeImage(args: DescribeImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeImageCommandOutput) => void): void;
    /**
     * <p>Describes a version of a SageMaker image.</p>
     */
    describeImageVersion(args: DescribeImageVersionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeImageVersionCommandOutput>;
    describeImageVersion(args: DescribeImageVersionCommandInput, cb: (err: any, data?: DescribeImageVersionCommandOutput) => void): void;
    describeImageVersion(args: DescribeImageVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeImageVersionCommandOutput) => void): void;
    /**
     * <p>Gets information about a labeling job.</p>
     */
    describeLabelingJob(args: DescribeLabelingJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLabelingJobCommandOutput>;
    describeLabelingJob(args: DescribeLabelingJobCommandInput, cb: (err: any, data?: DescribeLabelingJobCommandOutput) => void): void;
    describeLabelingJob(args: DescribeLabelingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLabelingJobCommandOutput) => void): void;
    /**
     * <p>Describes a model that you created using the <code>CreateModel</code>
     *             API.</p>
     */
    describeModel(args: DescribeModelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelCommandOutput>;
    describeModel(args: DescribeModelCommandInput, cb: (err: any, data?: DescribeModelCommandOutput) => void): void;
    describeModel(args: DescribeModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelCommandOutput) => void): void;
    /**
     * <p>Returns a description of a model bias job definition.</p>
     */
    describeModelBiasJobDefinition(args: DescribeModelBiasJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelBiasJobDefinitionCommandOutput>;
    describeModelBiasJobDefinition(args: DescribeModelBiasJobDefinitionCommandInput, cb: (err: any, data?: DescribeModelBiasJobDefinitionCommandOutput) => void): void;
    describeModelBiasJobDefinition(args: DescribeModelBiasJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelBiasJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Returns a description of a model explainability job definition.</p>
     */
    describeModelExplainabilityJobDefinition(args: DescribeModelExplainabilityJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelExplainabilityJobDefinitionCommandOutput>;
    describeModelExplainabilityJobDefinition(args: DescribeModelExplainabilityJobDefinitionCommandInput, cb: (err: any, data?: DescribeModelExplainabilityJobDefinitionCommandOutput) => void): void;
    describeModelExplainabilityJobDefinition(args: DescribeModelExplainabilityJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelExplainabilityJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Returns a description of the specified model package, which is used to create Amazon SageMaker
     *             models or list them on AWS Marketplace.</p>
     *         <p>To create models in Amazon SageMaker, buyers can subscribe to model packages listed on AWS
     *             Marketplace.</p>
     */
    describeModelPackage(args: DescribeModelPackageCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelPackageCommandOutput>;
    describeModelPackage(args: DescribeModelPackageCommandInput, cb: (err: any, data?: DescribeModelPackageCommandOutput) => void): void;
    describeModelPackage(args: DescribeModelPackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelPackageCommandOutput) => void): void;
    /**
     * <p>Gets a description for the specified model group.</p>
     */
    describeModelPackageGroup(args: DescribeModelPackageGroupCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelPackageGroupCommandOutput>;
    describeModelPackageGroup(args: DescribeModelPackageGroupCommandInput, cb: (err: any, data?: DescribeModelPackageGroupCommandOutput) => void): void;
    describeModelPackageGroup(args: DescribeModelPackageGroupCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelPackageGroupCommandOutput) => void): void;
    /**
     * <p>Returns a description of a model quality job definition.</p>
     */
    describeModelQualityJobDefinition(args: DescribeModelQualityJobDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DescribeModelQualityJobDefinitionCommandOutput>;
    describeModelQualityJobDefinition(args: DescribeModelQualityJobDefinitionCommandInput, cb: (err: any, data?: DescribeModelQualityJobDefinitionCommandOutput) => void): void;
    describeModelQualityJobDefinition(args: DescribeModelQualityJobDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeModelQualityJobDefinitionCommandOutput) => void): void;
    /**
     * <p>Describes the schedule for a monitoring job.</p>
     */
    describeMonitoringSchedule(args: DescribeMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeMonitoringScheduleCommandOutput>;
    describeMonitoringSchedule(args: DescribeMonitoringScheduleCommandInput, cb: (err: any, data?: DescribeMonitoringScheduleCommandOutput) => void): void;
    describeMonitoringSchedule(args: DescribeMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p>Returns information about a notebook instance.</p>
     */
    describeNotebookInstance(args: DescribeNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNotebookInstanceCommandOutput>;
    describeNotebookInstance(args: DescribeNotebookInstanceCommandInput, cb: (err: any, data?: DescribeNotebookInstanceCommandOutput) => void): void;
    describeNotebookInstance(args: DescribeNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>Returns a description of a notebook instance lifecycle configuration.</p>
     *         <p>For information about notebook instance lifestyle configurations, see <a href="https://docs.aws.amazon.com/sagemaker/latest/dg/notebook-lifecycle-config.html">Step
     *                 2.1: (Optional) Customize a Notebook Instance</a>.</p>
     */
    describeNotebookInstanceLifecycleConfig(args: DescribeNotebookInstanceLifecycleConfigCommandInput, options?: __HttpHandlerOptions): Promise<DescribeNotebookInstanceLifecycleConfigCommandOutput>;
    describeNotebookInstanceLifecycleConfig(args: DescribeNotebookInstanceLifecycleConfigCommandInput, cb: (err: any, data?: DescribeNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    describeNotebookInstanceLifecycleConfig(args: DescribeNotebookInstanceLifecycleConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    /**
     * <p>Describes the details of a pipeline.</p>
     */
    describePipeline(args: DescribePipelineCommandInput, options?: __HttpHandlerOptions): Promise<DescribePipelineCommandOutput>;
    describePipeline(args: DescribePipelineCommandInput, cb: (err: any, data?: DescribePipelineCommandOutput) => void): void;
    describePipeline(args: DescribePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePipelineCommandOutput) => void): void;
    /**
     * <p>Describes the details of an execution's pipeline definition.</p>
     */
    describePipelineDefinitionForExecution(args: DescribePipelineDefinitionForExecutionCommandInput, options?: __HttpHandlerOptions): Promise<DescribePipelineDefinitionForExecutionCommandOutput>;
    describePipelineDefinitionForExecution(args: DescribePipelineDefinitionForExecutionCommandInput, cb: (err: any, data?: DescribePipelineDefinitionForExecutionCommandOutput) => void): void;
    describePipelineDefinitionForExecution(args: DescribePipelineDefinitionForExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePipelineDefinitionForExecutionCommandOutput) => void): void;
    /**
     * <p>Describes the details of a pipeline execution.</p>
     */
    describePipelineExecution(args: DescribePipelineExecutionCommandInput, options?: __HttpHandlerOptions): Promise<DescribePipelineExecutionCommandOutput>;
    describePipelineExecution(args: DescribePipelineExecutionCommandInput, cb: (err: any, data?: DescribePipelineExecutionCommandOutput) => void): void;
    describePipelineExecution(args: DescribePipelineExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribePipelineExecutionCommandOutput) => void): void;
    /**
     * <p>Returns a description of a processing job.</p>
     */
    describeProcessingJob(args: DescribeProcessingJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProcessingJobCommandOutput>;
    describeProcessingJob(args: DescribeProcessingJobCommandInput, cb: (err: any, data?: DescribeProcessingJobCommandOutput) => void): void;
    describeProcessingJob(args: DescribeProcessingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProcessingJobCommandOutput) => void): void;
    /**
     * <p>Describes the details of a project.</p>
     */
    describeProject(args: DescribeProjectCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProjectCommandOutput>;
    describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    describeProject(args: DescribeProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    /**
     * <p>Gets information about a work team provided by a vendor. It returns details about the
     *             subscription with a vendor in the AWS Marketplace.</p>
     */
    describeSubscribedWorkteam(args: DescribeSubscribedWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSubscribedWorkteamCommandOutput>;
    describeSubscribedWorkteam(args: DescribeSubscribedWorkteamCommandInput, cb: (err: any, data?: DescribeSubscribedWorkteamCommandOutput) => void): void;
    describeSubscribedWorkteam(args: DescribeSubscribedWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSubscribedWorkteamCommandOutput) => void): void;
    /**
     * <p>Returns information about a training job. </p>
     *         <p>Some of the attributes below only appear if the training job successfully starts.
     *             If the training job fails, <code>TrainingJobStatus</code> is <code>Failed</code> and,
     *             depending on the <code>FailureReason</code>, attributes like
     *                 <code>TrainingStartTime</code>, <code>TrainingTimeInSeconds</code>,
     *                 <code>TrainingEndTime</code>, and <code>BillableTimeInSeconds</code> may not be
     *             present in the response.</p>
     */
    describeTrainingJob(args: DescribeTrainingJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrainingJobCommandOutput>;
    describeTrainingJob(args: DescribeTrainingJobCommandInput, cb: (err: any, data?: DescribeTrainingJobCommandOutput) => void): void;
    describeTrainingJob(args: DescribeTrainingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrainingJobCommandOutput) => void): void;
    /**
     * <p>Returns information about a transform job.</p>
     */
    describeTransformJob(args: DescribeTransformJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTransformJobCommandOutput>;
    describeTransformJob(args: DescribeTransformJobCommandInput, cb: (err: any, data?: DescribeTransformJobCommandOutput) => void): void;
    describeTransformJob(args: DescribeTransformJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTransformJobCommandOutput) => void): void;
    /**
     * <p>Provides a list of a trial's properties.</p>
     */
    describeTrial(args: DescribeTrialCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrialCommandOutput>;
    describeTrial(args: DescribeTrialCommandInput, cb: (err: any, data?: DescribeTrialCommandOutput) => void): void;
    describeTrial(args: DescribeTrialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrialCommandOutput) => void): void;
    /**
     * <p>Provides a list of a trials component's properties.</p>
     */
    describeTrialComponent(args: DescribeTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<DescribeTrialComponentCommandOutput>;
    describeTrialComponent(args: DescribeTrialComponentCommandInput, cb: (err: any, data?: DescribeTrialComponentCommandOutput) => void): void;
    describeTrialComponent(args: DescribeTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeTrialComponentCommandOutput) => void): void;
    /**
     * <p>Describes a user profile. For more information, see <code>CreateUserProfile</code>.</p>
     */
    describeUserProfile(args: DescribeUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<DescribeUserProfileCommandOutput>;
    describeUserProfile(args: DescribeUserProfileCommandInput, cb: (err: any, data?: DescribeUserProfileCommandOutput) => void): void;
    describeUserProfile(args: DescribeUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeUserProfileCommandOutput) => void): void;
    /**
     * <p>Lists private workforce information, including workforce name, Amazon Resource Name
     *             (ARN), and, if applicable, allowed IP address ranges (<a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>). Allowable IP address
     *             ranges are the IP addresses that workers can use to access tasks. </p>
     *         <important>
     *             <p>This operation applies only to private workforces.</p>
     *         </important>
     */
    describeWorkforce(args: DescribeWorkforceCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkforceCommandOutput>;
    describeWorkforce(args: DescribeWorkforceCommandInput, cb: (err: any, data?: DescribeWorkforceCommandOutput) => void): void;
    describeWorkforce(args: DescribeWorkforceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkforceCommandOutput) => void): void;
    /**
     * <p>Gets information about a specific work team. You can see information such as the
     *             create date, the last updated date, membership information, and the work team's Amazon
     *             Resource Name (ARN).</p>
     */
    describeWorkteam(args: DescribeWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorkteamCommandOutput>;
    describeWorkteam(args: DescribeWorkteamCommandInput, cb: (err: any, data?: DescribeWorkteamCommandOutput) => void): void;
    describeWorkteam(args: DescribeWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorkteamCommandOutput) => void): void;
    /**
     * <p>Disables using Service Catalog in SageMaker. Service Catalog is used to create
     *             SageMaker projects.</p>
     */
    disableSagemakerServicecatalogPortfolio(args: DisableSagemakerServicecatalogPortfolioCommandInput, options?: __HttpHandlerOptions): Promise<DisableSagemakerServicecatalogPortfolioCommandOutput>;
    disableSagemakerServicecatalogPortfolio(args: DisableSagemakerServicecatalogPortfolioCommandInput, cb: (err: any, data?: DisableSagemakerServicecatalogPortfolioCommandOutput) => void): void;
    disableSagemakerServicecatalogPortfolio(args: DisableSagemakerServicecatalogPortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisableSagemakerServicecatalogPortfolioCommandOutput) => void): void;
    /**
     * <p>Disassociates a trial component from a trial. This doesn't effect other trials the
     *       component is associated with. Before you can delete a component, you must disassociate the
     *       component from all trials it is associated with. To associate a trial component with a trial,
     *       call the <a>AssociateTrialComponent</a> API.</p>
     *          <p>To get a list of the trials a component is associated with, use the <a>Search</a> API. Specify <code>ExperimentTrialComponent</code> for the <code>Resource</code> parameter.
     *       The list appears in the response under <code>Results.TrialComponent.Parents</code>.</p>
     */
    disassociateTrialComponent(args: DisassociateTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<DisassociateTrialComponentCommandOutput>;
    disassociateTrialComponent(args: DisassociateTrialComponentCommandInput, cb: (err: any, data?: DisassociateTrialComponentCommandOutput) => void): void;
    disassociateTrialComponent(args: DisassociateTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DisassociateTrialComponentCommandOutput) => void): void;
    /**
     * <p>Enables using Service Catalog in SageMaker. Service Catalog is used to create
     *             SageMaker projects.</p>
     */
    enableSagemakerServicecatalogPortfolio(args: EnableSagemakerServicecatalogPortfolioCommandInput, options?: __HttpHandlerOptions): Promise<EnableSagemakerServicecatalogPortfolioCommandOutput>;
    enableSagemakerServicecatalogPortfolio(args: EnableSagemakerServicecatalogPortfolioCommandInput, cb: (err: any, data?: EnableSagemakerServicecatalogPortfolioCommandOutput) => void): void;
    enableSagemakerServicecatalogPortfolio(args: EnableSagemakerServicecatalogPortfolioCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: EnableSagemakerServicecatalogPortfolioCommandOutput) => void): void;
    /**
     * <p>Describes a fleet.</p>
     */
    getDeviceFleetReport(args: GetDeviceFleetReportCommandInput, options?: __HttpHandlerOptions): Promise<GetDeviceFleetReportCommandOutput>;
    getDeviceFleetReport(args: GetDeviceFleetReportCommandInput, cb: (err: any, data?: GetDeviceFleetReportCommandOutput) => void): void;
    getDeviceFleetReport(args: GetDeviceFleetReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDeviceFleetReportCommandOutput) => void): void;
    /**
     * <p>Gets a resource policy that manages access for a model group. For information about
     *             resource policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based
     *                 policies and resource-based policies</a> in the <i>AWS Identity and
     *                     Access Management User Guide.</i>.</p>
     */
    getModelPackageGroupPolicy(args: GetModelPackageGroupPolicyCommandInput, options?: __HttpHandlerOptions): Promise<GetModelPackageGroupPolicyCommandOutput>;
    getModelPackageGroupPolicy(args: GetModelPackageGroupPolicyCommandInput, cb: (err: any, data?: GetModelPackageGroupPolicyCommandOutput) => void): void;
    getModelPackageGroupPolicy(args: GetModelPackageGroupPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetModelPackageGroupPolicyCommandOutput) => void): void;
    /**
     * <p>Gets the status of Service Catalog in SageMaker. Service Catalog is used to create
     *             SageMaker projects.</p>
     */
    getSagemakerServicecatalogPortfolioStatus(args: GetSagemakerServicecatalogPortfolioStatusCommandInput, options?: __HttpHandlerOptions): Promise<GetSagemakerServicecatalogPortfolioStatusCommandOutput>;
    getSagemakerServicecatalogPortfolioStatus(args: GetSagemakerServicecatalogPortfolioStatusCommandInput, cb: (err: any, data?: GetSagemakerServicecatalogPortfolioStatusCommandOutput) => void): void;
    getSagemakerServicecatalogPortfolioStatus(args: GetSagemakerServicecatalogPortfolioStatusCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSagemakerServicecatalogPortfolioStatusCommandOutput) => void): void;
    /**
     * <p>An auto-complete API for the search functionality in the Amazon SageMaker console. It returns
     *       suggestions of possible matches for the property name to use in <code>Search</code>
     *       queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and
     *       <code>Metrics</code>.</p>
     */
    getSearchSuggestions(args: GetSearchSuggestionsCommandInput, options?: __HttpHandlerOptions): Promise<GetSearchSuggestionsCommandOutput>;
    getSearchSuggestions(args: GetSearchSuggestionsCommandInput, cb: (err: any, data?: GetSearchSuggestionsCommandOutput) => void): void;
    getSearchSuggestions(args: GetSearchSuggestionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSearchSuggestionsCommandOutput) => void): void;
    /**
     * <p>Lists the actions in your account and their properties.</p>
     */
    listActions(args: ListActionsCommandInput, options?: __HttpHandlerOptions): Promise<ListActionsCommandOutput>;
    listActions(args: ListActionsCommandInput, cb: (err: any, data?: ListActionsCommandOutput) => void): void;
    listActions(args: ListActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListActionsCommandOutput) => void): void;
    /**
     * <p>Lists the machine learning algorithms that have been created.</p>
     */
    listAlgorithms(args: ListAlgorithmsCommandInput, options?: __HttpHandlerOptions): Promise<ListAlgorithmsCommandOutput>;
    listAlgorithms(args: ListAlgorithmsCommandInput, cb: (err: any, data?: ListAlgorithmsCommandOutput) => void): void;
    listAlgorithms(args: ListAlgorithmsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAlgorithmsCommandOutput) => void): void;
    /**
     * <p>Lists the AppImageConfigs in your account and their properties. The list can be
     *         filtered by creation time or modified time, and whether the AppImageConfig name contains
     *         a specified string.</p>
     */
    listAppImageConfigs(args: ListAppImageConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppImageConfigsCommandOutput>;
    listAppImageConfigs(args: ListAppImageConfigsCommandInput, cb: (err: any, data?: ListAppImageConfigsCommandOutput) => void): void;
    listAppImageConfigs(args: ListAppImageConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAppImageConfigsCommandOutput) => void): void;
    /**
     * <p>Lists apps.</p>
     */
    listApps(args: ListAppsCommandInput, options?: __HttpHandlerOptions): Promise<ListAppsCommandOutput>;
    listApps(args: ListAppsCommandInput, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
    listApps(args: ListAppsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAppsCommandOutput) => void): void;
    /**
     * <p>Lists the artifacts in your account and their properties.</p>
     */
    listArtifacts(args: ListArtifactsCommandInput, options?: __HttpHandlerOptions): Promise<ListArtifactsCommandOutput>;
    listArtifacts(args: ListArtifactsCommandInput, cb: (err: any, data?: ListArtifactsCommandOutput) => void): void;
    listArtifacts(args: ListArtifactsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListArtifactsCommandOutput) => void): void;
    /**
     * <p>Lists the associations in your account and their properties.</p>
     */
    listAssociations(args: ListAssociationsCommandInput, options?: __HttpHandlerOptions): Promise<ListAssociationsCommandOutput>;
    listAssociations(args: ListAssociationsCommandInput, cb: (err: any, data?: ListAssociationsCommandOutput) => void): void;
    listAssociations(args: ListAssociationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAssociationsCommandOutput) => void): void;
    /**
     * <p>Request a list of jobs.</p>
     */
    listAutoMLJobs(args: ListAutoMLJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListAutoMLJobsCommandOutput>;
    listAutoMLJobs(args: ListAutoMLJobsCommandInput, cb: (err: any, data?: ListAutoMLJobsCommandOutput) => void): void;
    listAutoMLJobs(args: ListAutoMLJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAutoMLJobsCommandOutput) => void): void;
    /**
     * <p>List the candidates created for the job.</p>
     */
    listCandidatesForAutoMLJob(args: ListCandidatesForAutoMLJobCommandInput, options?: __HttpHandlerOptions): Promise<ListCandidatesForAutoMLJobCommandOutput>;
    listCandidatesForAutoMLJob(args: ListCandidatesForAutoMLJobCommandInput, cb: (err: any, data?: ListCandidatesForAutoMLJobCommandOutput) => void): void;
    listCandidatesForAutoMLJob(args: ListCandidatesForAutoMLJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCandidatesForAutoMLJobCommandOutput) => void): void;
    /**
     * <p>Gets a list of the Git repositories in your account.</p>
     */
    listCodeRepositories(args: ListCodeRepositoriesCommandInput, options?: __HttpHandlerOptions): Promise<ListCodeRepositoriesCommandOutput>;
    listCodeRepositories(args: ListCodeRepositoriesCommandInput, cb: (err: any, data?: ListCodeRepositoriesCommandOutput) => void): void;
    listCodeRepositories(args: ListCodeRepositoriesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCodeRepositoriesCommandOutput) => void): void;
    /**
     * <p>Lists model compilation jobs that satisfy various filters.</p>
     *         <p>To create a model compilation job, use <a>CreateCompilationJob</a>. To get
     *             information about a particular model compilation job you have created, use <a>DescribeCompilationJob</a>.</p>
     */
    listCompilationJobs(args: ListCompilationJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListCompilationJobsCommandOutput>;
    listCompilationJobs(args: ListCompilationJobsCommandInput, cb: (err: any, data?: ListCompilationJobsCommandOutput) => void): void;
    listCompilationJobs(args: ListCompilationJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListCompilationJobsCommandOutput) => void): void;
    /**
     * <p>Lists the contexts in your account and their properties.</p>
     */
    listContexts(args: ListContextsCommandInput, options?: __HttpHandlerOptions): Promise<ListContextsCommandOutput>;
    listContexts(args: ListContextsCommandInput, cb: (err: any, data?: ListContextsCommandOutput) => void): void;
    listContexts(args: ListContextsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListContextsCommandOutput) => void): void;
    /**
     * <p>Lists the data quality job definitions in your account.</p>
     */
    listDataQualityJobDefinitions(args: ListDataQualityJobDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListDataQualityJobDefinitionsCommandOutput>;
    listDataQualityJobDefinitions(args: ListDataQualityJobDefinitionsCommandInput, cb: (err: any, data?: ListDataQualityJobDefinitionsCommandOutput) => void): void;
    listDataQualityJobDefinitions(args: ListDataQualityJobDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDataQualityJobDefinitionsCommandOutput) => void): void;
    /**
     * <p>Returns a list of devices in the fleet.</p>
     */
    listDeviceFleets(args: ListDeviceFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeviceFleetsCommandOutput>;
    listDeviceFleets(args: ListDeviceFleetsCommandInput, cb: (err: any, data?: ListDeviceFleetsCommandOutput) => void): void;
    listDeviceFleets(args: ListDeviceFleetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeviceFleetsCommandOutput) => void): void;
    /**
     * <p>A list of devices.</p>
     */
    listDevices(args: ListDevicesCommandInput, options?: __HttpHandlerOptions): Promise<ListDevicesCommandOutput>;
    listDevices(args: ListDevicesCommandInput, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
    listDevices(args: ListDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDevicesCommandOutput) => void): void;
    /**
     * <p>Lists the domains.</p>
     */
    listDomains(args: ListDomainsCommandInput, options?: __HttpHandlerOptions): Promise<ListDomainsCommandOutput>;
    listDomains(args: ListDomainsCommandInput, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    listDomains(args: ListDomainsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDomainsCommandOutput) => void): void;
    /**
     * <p>Returns a list of edge packaging jobs.</p>
     */
    listEdgePackagingJobs(args: ListEdgePackagingJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListEdgePackagingJobsCommandOutput>;
    listEdgePackagingJobs(args: ListEdgePackagingJobsCommandInput, cb: (err: any, data?: ListEdgePackagingJobsCommandOutput) => void): void;
    listEdgePackagingJobs(args: ListEdgePackagingJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEdgePackagingJobsCommandOutput) => void): void;
    /**
     * <p>Lists endpoint configurations.</p>
     */
    listEndpointConfigs(args: ListEndpointConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListEndpointConfigsCommandOutput>;
    listEndpointConfigs(args: ListEndpointConfigsCommandInput, cb: (err: any, data?: ListEndpointConfigsCommandOutput) => void): void;
    listEndpointConfigs(args: ListEndpointConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEndpointConfigsCommandOutput) => void): void;
    /**
     * <p>Lists endpoints.</p>
     */
    listEndpoints(args: ListEndpointsCommandInput, options?: __HttpHandlerOptions): Promise<ListEndpointsCommandOutput>;
    listEndpoints(args: ListEndpointsCommandInput, cb: (err: any, data?: ListEndpointsCommandOutput) => void): void;
    listEndpoints(args: ListEndpointsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListEndpointsCommandOutput) => void): void;
    /**
     * <p>Lists all the experiments in your account. The list can be filtered to show only
     *       experiments that were created in a specific time range. The list can be sorted by experiment
     *       name or creation time.</p>
     */
    listExperiments(args: ListExperimentsCommandInput, options?: __HttpHandlerOptions): Promise<ListExperimentsCommandOutput>;
    listExperiments(args: ListExperimentsCommandInput, cb: (err: any, data?: ListExperimentsCommandOutput) => void): void;
    listExperiments(args: ListExperimentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListExperimentsCommandOutput) => void): void;
    /**
     * <p>List <code>FeatureGroup</code>s based on given filter and order.</p>
     */
    listFeatureGroups(args: ListFeatureGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListFeatureGroupsCommandOutput>;
    listFeatureGroups(args: ListFeatureGroupsCommandInput, cb: (err: any, data?: ListFeatureGroupsCommandOutput) => void): void;
    listFeatureGroups(args: ListFeatureGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFeatureGroupsCommandOutput) => void): void;
    /**
     * <p>Returns information about the flow definitions in your account.</p>
     */
    listFlowDefinitions(args: ListFlowDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListFlowDefinitionsCommandOutput>;
    listFlowDefinitions(args: ListFlowDefinitionsCommandInput, cb: (err: any, data?: ListFlowDefinitionsCommandOutput) => void): void;
    listFlowDefinitions(args: ListFlowDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFlowDefinitionsCommandOutput) => void): void;
    /**
     * <p>Returns information about the human task user interfaces in your account.</p>
     */
    listHumanTaskUis(args: ListHumanTaskUisCommandInput, options?: __HttpHandlerOptions): Promise<ListHumanTaskUisCommandOutput>;
    listHumanTaskUis(args: ListHumanTaskUisCommandInput, cb: (err: any, data?: ListHumanTaskUisCommandOutput) => void): void;
    listHumanTaskUis(args: ListHumanTaskUisCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListHumanTaskUisCommandOutput) => void): void;
    /**
     * <p>Gets a list of <a>HyperParameterTuningJobSummary</a> objects that
     *             describe
     *             the hyperparameter tuning jobs launched in your account.</p>
     */
    listHyperParameterTuningJobs(args: ListHyperParameterTuningJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListHyperParameterTuningJobsCommandOutput>;
    listHyperParameterTuningJobs(args: ListHyperParameterTuningJobsCommandInput, cb: (err: any, data?: ListHyperParameterTuningJobsCommandOutput) => void): void;
    listHyperParameterTuningJobs(args: ListHyperParameterTuningJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListHyperParameterTuningJobsCommandOutput) => void): void;
    /**
     * <p>Lists the images in your account and their properties. The list can be filtered by
     *         creation time or modified time, and whether the image name contains a specified string.</p>
     */
    listImages(args: ListImagesCommandInput, options?: __HttpHandlerOptions): Promise<ListImagesCommandOutput>;
    listImages(args: ListImagesCommandInput, cb: (err: any, data?: ListImagesCommandOutput) => void): void;
    listImages(args: ListImagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListImagesCommandOutput) => void): void;
    /**
     * <p>Lists the versions of a specified image and their properties. The list can be filtered
     *         by creation time or modified time.</p>
     */
    listImageVersions(args: ListImageVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListImageVersionsCommandOutput>;
    listImageVersions(args: ListImageVersionsCommandInput, cb: (err: any, data?: ListImageVersionsCommandOutput) => void): void;
    listImageVersions(args: ListImageVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListImageVersionsCommandOutput) => void): void;
    /**
     * <p>Gets a list of labeling jobs.</p>
     */
    listLabelingJobs(args: ListLabelingJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListLabelingJobsCommandOutput>;
    listLabelingJobs(args: ListLabelingJobsCommandInput, cb: (err: any, data?: ListLabelingJobsCommandOutput) => void): void;
    listLabelingJobs(args: ListLabelingJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLabelingJobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of labeling jobs assigned to a specified work team.</p>
     */
    listLabelingJobsForWorkteam(args: ListLabelingJobsForWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<ListLabelingJobsForWorkteamCommandOutput>;
    listLabelingJobsForWorkteam(args: ListLabelingJobsForWorkteamCommandInput, cb: (err: any, data?: ListLabelingJobsForWorkteamCommandOutput) => void): void;
    listLabelingJobsForWorkteam(args: ListLabelingJobsForWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListLabelingJobsForWorkteamCommandOutput) => void): void;
    /**
     * <p>Lists model bias jobs definitions that satisfy various filters.</p>
     */
    listModelBiasJobDefinitions(args: ListModelBiasJobDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelBiasJobDefinitionsCommandOutput>;
    listModelBiasJobDefinitions(args: ListModelBiasJobDefinitionsCommandInput, cb: (err: any, data?: ListModelBiasJobDefinitionsCommandOutput) => void): void;
    listModelBiasJobDefinitions(args: ListModelBiasJobDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListModelBiasJobDefinitionsCommandOutput) => void): void;
    /**
     * <p>Lists model explainability job definitions that satisfy various filters.</p>
     */
    listModelExplainabilityJobDefinitions(args: ListModelExplainabilityJobDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelExplainabilityJobDefinitionsCommandOutput>;
    listModelExplainabilityJobDefinitions(args: ListModelExplainabilityJobDefinitionsCommandInput, cb: (err: any, data?: ListModelExplainabilityJobDefinitionsCommandOutput) => void): void;
    listModelExplainabilityJobDefinitions(args: ListModelExplainabilityJobDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListModelExplainabilityJobDefinitionsCommandOutput) => void): void;
    /**
     * <p>Gets a list of the model groups in your AWS account.</p>
     */
    listModelPackageGroups(args: ListModelPackageGroupsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelPackageGroupsCommandOutput>;
    listModelPackageGroups(args: ListModelPackageGroupsCommandInput, cb: (err: any, data?: ListModelPackageGroupsCommandOutput) => void): void;
    listModelPackageGroups(args: ListModelPackageGroupsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListModelPackageGroupsCommandOutput) => void): void;
    /**
     * <p>Lists the model packages that have been created.</p>
     */
    listModelPackages(args: ListModelPackagesCommandInput, options?: __HttpHandlerOptions): Promise<ListModelPackagesCommandOutput>;
    listModelPackages(args: ListModelPackagesCommandInput, cb: (err: any, data?: ListModelPackagesCommandOutput) => void): void;
    listModelPackages(args: ListModelPackagesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListModelPackagesCommandOutput) => void): void;
    /**
     * <p>Gets a list of model quality monitoring job definitions in your account.</p>
     */
    listModelQualityJobDefinitions(args: ListModelQualityJobDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelQualityJobDefinitionsCommandOutput>;
    listModelQualityJobDefinitions(args: ListModelQualityJobDefinitionsCommandInput, cb: (err: any, data?: ListModelQualityJobDefinitionsCommandOutput) => void): void;
    listModelQualityJobDefinitions(args: ListModelQualityJobDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListModelQualityJobDefinitionsCommandOutput) => void): void;
    /**
     * <p>Lists models created with the <a>CreateModel</a> API.</p>
     */
    listModels(args: ListModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListModelsCommandOutput>;
    listModels(args: ListModelsCommandInput, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
    listModels(args: ListModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListModelsCommandOutput) => void): void;
    /**
     * <p>Returns list of all monitoring job executions.</p>
     */
    listMonitoringExecutions(args: ListMonitoringExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListMonitoringExecutionsCommandOutput>;
    listMonitoringExecutions(args: ListMonitoringExecutionsCommandInput, cb: (err: any, data?: ListMonitoringExecutionsCommandOutput) => void): void;
    listMonitoringExecutions(args: ListMonitoringExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMonitoringExecutionsCommandOutput) => void): void;
    /**
     * <p>Returns list of all monitoring schedules.</p>
     */
    listMonitoringSchedules(args: ListMonitoringSchedulesCommandInput, options?: __HttpHandlerOptions): Promise<ListMonitoringSchedulesCommandOutput>;
    listMonitoringSchedules(args: ListMonitoringSchedulesCommandInput, cb: (err: any, data?: ListMonitoringSchedulesCommandOutput) => void): void;
    listMonitoringSchedules(args: ListMonitoringSchedulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListMonitoringSchedulesCommandOutput) => void): void;
    /**
     * <p>Lists notebook instance lifestyle configurations created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
     */
    listNotebookInstanceLifecycleConfigs(args: ListNotebookInstanceLifecycleConfigsCommandInput, options?: __HttpHandlerOptions): Promise<ListNotebookInstanceLifecycleConfigsCommandOutput>;
    listNotebookInstanceLifecycleConfigs(args: ListNotebookInstanceLifecycleConfigsCommandInput, cb: (err: any, data?: ListNotebookInstanceLifecycleConfigsCommandOutput) => void): void;
    listNotebookInstanceLifecycleConfigs(args: ListNotebookInstanceLifecycleConfigsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNotebookInstanceLifecycleConfigsCommandOutput) => void): void;
    /**
     * <p>Returns a list of the Amazon SageMaker notebook instances in the requester's account in an AWS
     *             Region. </p>
     */
    listNotebookInstances(args: ListNotebookInstancesCommandInput, options?: __HttpHandlerOptions): Promise<ListNotebookInstancesCommandOutput>;
    listNotebookInstances(args: ListNotebookInstancesCommandInput, cb: (err: any, data?: ListNotebookInstancesCommandOutput) => void): void;
    listNotebookInstances(args: ListNotebookInstancesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListNotebookInstancesCommandOutput) => void): void;
    /**
     * <p>Gets a list of the pipeline executions.</p>
     */
    listPipelineExecutions(args: ListPipelineExecutionsCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelineExecutionsCommandOutput>;
    listPipelineExecutions(args: ListPipelineExecutionsCommandInput, cb: (err: any, data?: ListPipelineExecutionsCommandOutput) => void): void;
    listPipelineExecutions(args: ListPipelineExecutionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPipelineExecutionsCommandOutput) => void): void;
    /**
     * <p>Gets a list of <code>PipeLineExecutionStep</code> objects.</p>
     */
    listPipelineExecutionSteps(args: ListPipelineExecutionStepsCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelineExecutionStepsCommandOutput>;
    listPipelineExecutionSteps(args: ListPipelineExecutionStepsCommandInput, cb: (err: any, data?: ListPipelineExecutionStepsCommandOutput) => void): void;
    listPipelineExecutionSteps(args: ListPipelineExecutionStepsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPipelineExecutionStepsCommandOutput) => void): void;
    /**
     * <p>Gets a list of parameters for a pipeline execution.</p>
     */
    listPipelineParametersForExecution(args: ListPipelineParametersForExecutionCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelineParametersForExecutionCommandOutput>;
    listPipelineParametersForExecution(args: ListPipelineParametersForExecutionCommandInput, cb: (err: any, data?: ListPipelineParametersForExecutionCommandOutput) => void): void;
    listPipelineParametersForExecution(args: ListPipelineParametersForExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPipelineParametersForExecutionCommandOutput) => void): void;
    /**
     * <p>Gets a list of pipelines.</p>
     */
    listPipelines(args: ListPipelinesCommandInput, options?: __HttpHandlerOptions): Promise<ListPipelinesCommandOutput>;
    listPipelines(args: ListPipelinesCommandInput, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
    listPipelines(args: ListPipelinesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListPipelinesCommandOutput) => void): void;
    /**
     * <p>Lists processing jobs that satisfy various filters.</p>
     */
    listProcessingJobs(args: ListProcessingJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListProcessingJobsCommandOutput>;
    listProcessingJobs(args: ListProcessingJobsCommandInput, cb: (err: any, data?: ListProcessingJobsCommandOutput) => void): void;
    listProcessingJobs(args: ListProcessingJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProcessingJobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of the projects in an AWS account.</p>
     */
    listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
    listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    listProjects(args: ListProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    /**
     * <p>Gets a list of the work teams that you are subscribed to in the AWS Marketplace. The
     *             list may be empty if no work team satisfies the filter specified in the
     *                 <code>NameContains</code> parameter.</p>
     */
    listSubscribedWorkteams(args: ListSubscribedWorkteamsCommandInput, options?: __HttpHandlerOptions): Promise<ListSubscribedWorkteamsCommandOutput>;
    listSubscribedWorkteams(args: ListSubscribedWorkteamsCommandInput, cb: (err: any, data?: ListSubscribedWorkteamsCommandOutput) => void): void;
    listSubscribedWorkteams(args: ListSubscribedWorkteamsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSubscribedWorkteamsCommandOutput) => void): void;
    /**
     * <p>Returns the tags for the specified Amazon SageMaker resource.</p>
     */
    listTags(args: ListTagsCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsCommandOutput>;
    listTags(args: ListTagsCommandInput, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    listTags(args: ListTagsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsCommandOutput) => void): void;
    /**
     * <p>Lists training jobs.</p>
     *         <note>
     *             <p>When <code>StatusEquals</code> and <code>MaxResults</code> are set at the same
     *                 time, the <code>MaxResults</code> number of training jobs are first retrieved
     *                 ignoring the <code>StatusEquals</code> parameter and then they are filtered by the
     *                 <code>StatusEquals</code> parameter, which is returned as a response.</p>
     *             <p>For example, if <code>ListTrainingJobs</code> is invoked with the following parameters:</p>
     *             <p>
     *                <code>{ ... MaxResults: 100, StatusEquals: InProgress ... }</code>
     *             </p>
     *             <p>First, 100 trainings jobs with any status, including those other than
     *                 <code>InProgress</code>, are selected (sorted according to the creation time,
     *                 from the most current to the oldest). Next, those with a status of
     *                 <code>InProgress</code> are returned.</p>
     *             <p>You can quickly test the API using the following AWS CLI code.</p>
     *             <p>
     *                <code>aws sagemaker list-training-jobs --max-results 100 --status-equals
     *                     InProgress</code>
     *             </p>
     *         </note>
     */
    listTrainingJobs(args: ListTrainingJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListTrainingJobsCommandOutput>;
    listTrainingJobs(args: ListTrainingJobsCommandInput, cb: (err: any, data?: ListTrainingJobsCommandOutput) => void): void;
    listTrainingJobs(args: ListTrainingJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTrainingJobsCommandOutput) => void): void;
    /**
     * <p>Gets a list of <a>TrainingJobSummary</a> objects that describe the training
     *             jobs that a hyperparameter tuning job launched.</p>
     */
    listTrainingJobsForHyperParameterTuningJob(args: ListTrainingJobsForHyperParameterTuningJobCommandInput, options?: __HttpHandlerOptions): Promise<ListTrainingJobsForHyperParameterTuningJobCommandOutput>;
    listTrainingJobsForHyperParameterTuningJob(args: ListTrainingJobsForHyperParameterTuningJobCommandInput, cb: (err: any, data?: ListTrainingJobsForHyperParameterTuningJobCommandOutput) => void): void;
    listTrainingJobsForHyperParameterTuningJob(args: ListTrainingJobsForHyperParameterTuningJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTrainingJobsForHyperParameterTuningJobCommandOutput) => void): void;
    /**
     * <p>Lists transform jobs.</p>
     */
    listTransformJobs(args: ListTransformJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListTransformJobsCommandOutput>;
    listTransformJobs(args: ListTransformJobsCommandInput, cb: (err: any, data?: ListTransformJobsCommandOutput) => void): void;
    listTransformJobs(args: ListTransformJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTransformJobsCommandOutput) => void): void;
    /**
     * <p>Lists the trial components in your account. You can sort the list by trial component name
     *       or creation time. You can filter the list to show only components that were created in a
     *       specific time range. You can also filter on one of the following:</p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <code>ExperimentName</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>SourceArn</code>
     *                </p>
     *             </li>
     *             <li>
     *                <p>
     *                   <code>TrialName</code>
     *                </p>
     *             </li>
     *          </ul>
     */
    listTrialComponents(args: ListTrialComponentsCommandInput, options?: __HttpHandlerOptions): Promise<ListTrialComponentsCommandOutput>;
    listTrialComponents(args: ListTrialComponentsCommandInput, cb: (err: any, data?: ListTrialComponentsCommandOutput) => void): void;
    listTrialComponents(args: ListTrialComponentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTrialComponentsCommandOutput) => void): void;
    /**
     * <p>Lists the trials in your account. Specify an experiment name to limit the list to the
     *       trials that are part of that experiment. Specify a trial component name to limit the list to
     *       the trials that associated with that trial component. The list can be filtered to show only
     *       trials that were created in a specific time range. The list can be sorted by trial name or
     *       creation time.</p>
     */
    listTrials(args: ListTrialsCommandInput, options?: __HttpHandlerOptions): Promise<ListTrialsCommandOutput>;
    listTrials(args: ListTrialsCommandInput, cb: (err: any, data?: ListTrialsCommandOutput) => void): void;
    listTrials(args: ListTrialsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTrialsCommandOutput) => void): void;
    /**
     * <p>Lists user profiles.</p>
     */
    listUserProfiles(args: ListUserProfilesCommandInput, options?: __HttpHandlerOptions): Promise<ListUserProfilesCommandOutput>;
    listUserProfiles(args: ListUserProfilesCommandInput, cb: (err: any, data?: ListUserProfilesCommandOutput) => void): void;
    listUserProfiles(args: ListUserProfilesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListUserProfilesCommandOutput) => void): void;
    /**
     * <p>Use this operation to list all private and vendor workforces in an AWS Region. Note that you can only
     *       have one private workforce per AWS Region.</p>
     */
    listWorkforces(args: ListWorkforcesCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkforcesCommandOutput>;
    listWorkforces(args: ListWorkforcesCommandInput, cb: (err: any, data?: ListWorkforcesCommandOutput) => void): void;
    listWorkforces(args: ListWorkforcesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorkforcesCommandOutput) => void): void;
    /**
     * <p>Gets a list of private work teams that you have defined in a region. The list may be empty if
     *             no work team satisfies the filter specified in the <code>NameContains</code>
     *             parameter.</p>
     */
    listWorkteams(args: ListWorkteamsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorkteamsCommandOutput>;
    listWorkteams(args: ListWorkteamsCommandInput, cb: (err: any, data?: ListWorkteamsCommandOutput) => void): void;
    listWorkteams(args: ListWorkteamsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorkteamsCommandOutput) => void): void;
    /**
     * <p>Adds a resouce policy to control access to a model group. For information about
     *             resoure policies, see <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/access_policies_identity-vs-resource.html">Identity-based
     *                 policies and resource-based policies</a> in the <i>AWS Identity and Access Management User Guide.</i>.</p>
     */
    putModelPackageGroupPolicy(args: PutModelPackageGroupPolicyCommandInput, options?: __HttpHandlerOptions): Promise<PutModelPackageGroupPolicyCommandOutput>;
    putModelPackageGroupPolicy(args: PutModelPackageGroupPolicyCommandInput, cb: (err: any, data?: PutModelPackageGroupPolicyCommandOutput) => void): void;
    putModelPackageGroupPolicy(args: PutModelPackageGroupPolicyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutModelPackageGroupPolicyCommandOutput) => void): void;
    /**
     * <p>Register devices.</p>
     */
    registerDevices(args: RegisterDevicesCommandInput, options?: __HttpHandlerOptions): Promise<RegisterDevicesCommandOutput>;
    registerDevices(args: RegisterDevicesCommandInput, cb: (err: any, data?: RegisterDevicesCommandOutput) => void): void;
    registerDevices(args: RegisterDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterDevicesCommandOutput) => void): void;
    /**
     * <p>Renders the UI template so that you can preview the worker's experience. </p>
     */
    renderUiTemplate(args: RenderUiTemplateCommandInput, options?: __HttpHandlerOptions): Promise<RenderUiTemplateCommandOutput>;
    renderUiTemplate(args: RenderUiTemplateCommandInput, cb: (err: any, data?: RenderUiTemplateCommandOutput) => void): void;
    renderUiTemplate(args: RenderUiTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RenderUiTemplateCommandOutput) => void): void;
    /**
     * <p>Finds Amazon SageMaker resources that match a search query. Matching resources are returned
     *       as a list of <code>SearchRecord</code> objects in the response. You can sort the search
     *       results by any resource property in a ascending or descending order.</p>
     *          <p>You can query against the following value types: numeric, text, Boolean, and
     *       timestamp.</p>
     */
    search(args: SearchCommandInput, options?: __HttpHandlerOptions): Promise<SearchCommandOutput>;
    search(args: SearchCommandInput, cb: (err: any, data?: SearchCommandOutput) => void): void;
    search(args: SearchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SearchCommandOutput) => void): void;
    /**
     * <p>Starts a previously stopped monitoring schedule.</p>
     *          <note>
     *             <p>By default, when you successfully create a new schedule, the status of a monitoring
     *             schedule is <code>scheduled</code>.</p>
     *          </note>
     */
    startMonitoringSchedule(args: StartMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<StartMonitoringScheduleCommandOutput>;
    startMonitoringSchedule(args: StartMonitoringScheduleCommandInput, cb: (err: any, data?: StartMonitoringScheduleCommandOutput) => void): void;
    startMonitoringSchedule(args: StartMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p>Launches an ML compute instance with the latest version of the libraries and
     *             attaches your ML storage volume. After configuring the notebook instance, Amazon SageMaker sets the
     *             notebook instance status to <code>InService</code>. A notebook instance's status must be
     *                 <code>InService</code> before you can connect to your Jupyter notebook. </p>
     */
    startNotebookInstance(args: StartNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StartNotebookInstanceCommandOutput>;
    startNotebookInstance(args: StartNotebookInstanceCommandInput, cb: (err: any, data?: StartNotebookInstanceCommandOutput) => void): void;
    startNotebookInstance(args: StartNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>Starts a pipeline execution.</p>
     */
    startPipelineExecution(args: StartPipelineExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StartPipelineExecutionCommandOutput>;
    startPipelineExecution(args: StartPipelineExecutionCommandInput, cb: (err: any, data?: StartPipelineExecutionCommandOutput) => void): void;
    startPipelineExecution(args: StartPipelineExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartPipelineExecutionCommandOutput) => void): void;
    /**
     * <p>A method for forcing the termination of a running job.</p>
     */
    stopAutoMLJob(args: StopAutoMLJobCommandInput, options?: __HttpHandlerOptions): Promise<StopAutoMLJobCommandOutput>;
    stopAutoMLJob(args: StopAutoMLJobCommandInput, cb: (err: any, data?: StopAutoMLJobCommandOutput) => void): void;
    stopAutoMLJob(args: StopAutoMLJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopAutoMLJobCommandOutput) => void): void;
    /**
     * <p>Stops a model compilation job.</p>
     *         <p> To stop a job, Amazon SageMaker sends the algorithm the SIGTERM signal. This gracefully shuts the
     *             job down. If the job hasn't stopped, it sends the SIGKILL signal.</p>
     *         <p>When it receives a <code>StopCompilationJob</code> request, Amazon SageMaker changes the <a>CompilationJobSummary$CompilationJobStatus</a> of the job to
     *             <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the <a>CompilationJobSummary$CompilationJobStatus</a> to <code>Stopped</code>.
     *         </p>
     */
    stopCompilationJob(args: StopCompilationJobCommandInput, options?: __HttpHandlerOptions): Promise<StopCompilationJobCommandOutput>;
    stopCompilationJob(args: StopCompilationJobCommandInput, cb: (err: any, data?: StopCompilationJobCommandOutput) => void): void;
    stopCompilationJob(args: StopCompilationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopCompilationJobCommandOutput) => void): void;
    /**
     * <p>Request to stop an edge packaging job.</p>
     */
    stopEdgePackagingJob(args: StopEdgePackagingJobCommandInput, options?: __HttpHandlerOptions): Promise<StopEdgePackagingJobCommandOutput>;
    stopEdgePackagingJob(args: StopEdgePackagingJobCommandInput, cb: (err: any, data?: StopEdgePackagingJobCommandOutput) => void): void;
    stopEdgePackagingJob(args: StopEdgePackagingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopEdgePackagingJobCommandOutput) => void): void;
    /**
     * <p>Stops a running hyperparameter tuning job and all running training jobs that the
     *             tuning job launched.</p>
     *         <p>All model artifacts output from the training jobs are stored in Amazon Simple Storage Service (Amazon S3). All
     *             data that the training jobs write to Amazon CloudWatch Logs are still available in CloudWatch. After the
     *             tuning job moves to the <code>Stopped</code> state, it releases all
     *             reserved
     *             resources for the tuning job.</p>
     */
    stopHyperParameterTuningJob(args: StopHyperParameterTuningJobCommandInput, options?: __HttpHandlerOptions): Promise<StopHyperParameterTuningJobCommandOutput>;
    stopHyperParameterTuningJob(args: StopHyperParameterTuningJobCommandInput, cb: (err: any, data?: StopHyperParameterTuningJobCommandOutput) => void): void;
    stopHyperParameterTuningJob(args: StopHyperParameterTuningJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopHyperParameterTuningJobCommandOutput) => void): void;
    /**
     * <p>Stops a running labeling job. A job that is stopped cannot be restarted. Any results
     *             obtained before the job is stopped are placed in the Amazon S3 output bucket.</p>
     */
    stopLabelingJob(args: StopLabelingJobCommandInput, options?: __HttpHandlerOptions): Promise<StopLabelingJobCommandOutput>;
    stopLabelingJob(args: StopLabelingJobCommandInput, cb: (err: any, data?: StopLabelingJobCommandOutput) => void): void;
    stopLabelingJob(args: StopLabelingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopLabelingJobCommandOutput) => void): void;
    /**
     * <p>Stops a previously started monitoring schedule.</p>
     */
    stopMonitoringSchedule(args: StopMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<StopMonitoringScheduleCommandOutput>;
    stopMonitoringSchedule(args: StopMonitoringScheduleCommandInput, cb: (err: any, data?: StopMonitoringScheduleCommandOutput) => void): void;
    stopMonitoringSchedule(args: StopMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p>Terminates the ML compute instance. Before terminating the instance, Amazon SageMaker
     *             disconnects the ML storage volume from it. Amazon SageMaker preserves the ML storage volume. Amazon SageMaker
     *             stops charging you for the ML compute instance when you call
     *                 <code>StopNotebookInstance</code>.</p>
     *         <p>To access data on the ML storage volume for a notebook instance that has been
     *             terminated, call the <code>StartNotebookInstance</code> API.
     *                 <code>StartNotebookInstance</code> launches another ML compute instance, configures
     *             it, and attaches the preserved ML storage volume so you can continue your work.
     *         </p>
     */
    stopNotebookInstance(args: StopNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<StopNotebookInstanceCommandOutput>;
    stopNotebookInstance(args: StopNotebookInstanceCommandInput, cb: (err: any, data?: StopNotebookInstanceCommandOutput) => void): void;
    stopNotebookInstance(args: StopNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>Stops a pipeline execution.</p>
     */
    stopPipelineExecution(args: StopPipelineExecutionCommandInput, options?: __HttpHandlerOptions): Promise<StopPipelineExecutionCommandOutput>;
    stopPipelineExecution(args: StopPipelineExecutionCommandInput, cb: (err: any, data?: StopPipelineExecutionCommandOutput) => void): void;
    stopPipelineExecution(args: StopPipelineExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopPipelineExecutionCommandOutput) => void): void;
    /**
     * <p>Stops a processing job.</p>
     */
    stopProcessingJob(args: StopProcessingJobCommandInput, options?: __HttpHandlerOptions): Promise<StopProcessingJobCommandOutput>;
    stopProcessingJob(args: StopProcessingJobCommandInput, cb: (err: any, data?: StopProcessingJobCommandOutput) => void): void;
    stopProcessingJob(args: StopProcessingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopProcessingJobCommandOutput) => void): void;
    /**
     * <p>Stops a training job. To stop a job, Amazon SageMaker sends the algorithm the
     *                 <code>SIGTERM</code> signal, which delays job termination for 120 seconds.
     *             Algorithms might use this 120-second window to save the model artifacts, so the results
     *             of the training is not lost. </p>
     *         <p>When it receives a <code>StopTrainingJob</code> request, Amazon SageMaker changes the status of
     *             the job to <code>Stopping</code>. After Amazon SageMaker stops the job, it sets the status to
     *                 <code>Stopped</code>.</p>
     */
    stopTrainingJob(args: StopTrainingJobCommandInput, options?: __HttpHandlerOptions): Promise<StopTrainingJobCommandOutput>;
    stopTrainingJob(args: StopTrainingJobCommandInput, cb: (err: any, data?: StopTrainingJobCommandOutput) => void): void;
    stopTrainingJob(args: StopTrainingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopTrainingJobCommandOutput) => void): void;
    /**
     * <p>Stops a transform job.</p>
     *         <p>When Amazon SageMaker receives a <code>StopTransformJob</code> request, the status of the job
     *             changes to <code>Stopping</code>. After Amazon SageMaker
     *             stops
     *             the job, the status is set to <code>Stopped</code>. When you stop a transform job before
     *             it is completed, Amazon SageMaker doesn't store the job's output in Amazon S3.</p>
     */
    stopTransformJob(args: StopTransformJobCommandInput, options?: __HttpHandlerOptions): Promise<StopTransformJobCommandOutput>;
    stopTransformJob(args: StopTransformJobCommandInput, cb: (err: any, data?: StopTransformJobCommandOutput) => void): void;
    stopTransformJob(args: StopTransformJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopTransformJobCommandOutput) => void): void;
    /**
     * <p>Updates an action.</p>
     */
    updateAction(args: UpdateActionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateActionCommandOutput>;
    updateAction(args: UpdateActionCommandInput, cb: (err: any, data?: UpdateActionCommandOutput) => void): void;
    updateAction(args: UpdateActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateActionCommandOutput) => void): void;
    /**
     * <p>Updates the properties of an AppImageConfig.</p>
     */
    updateAppImageConfig(args: UpdateAppImageConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAppImageConfigCommandOutput>;
    updateAppImageConfig(args: UpdateAppImageConfigCommandInput, cb: (err: any, data?: UpdateAppImageConfigCommandOutput) => void): void;
    updateAppImageConfig(args: UpdateAppImageConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAppImageConfigCommandOutput) => void): void;
    /**
     * <p>Updates an artifact.</p>
     */
    updateArtifact(args: UpdateArtifactCommandInput, options?: __HttpHandlerOptions): Promise<UpdateArtifactCommandOutput>;
    updateArtifact(args: UpdateArtifactCommandInput, cb: (err: any, data?: UpdateArtifactCommandOutput) => void): void;
    updateArtifact(args: UpdateArtifactCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateArtifactCommandOutput) => void): void;
    /**
     * <p>Updates the specified Git repository with the specified values.</p>
     */
    updateCodeRepository(args: UpdateCodeRepositoryCommandInput, options?: __HttpHandlerOptions): Promise<UpdateCodeRepositoryCommandOutput>;
    updateCodeRepository(args: UpdateCodeRepositoryCommandInput, cb: (err: any, data?: UpdateCodeRepositoryCommandOutput) => void): void;
    updateCodeRepository(args: UpdateCodeRepositoryCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateCodeRepositoryCommandOutput) => void): void;
    /**
     * <p>Updates a context.</p>
     */
    updateContext(args: UpdateContextCommandInput, options?: __HttpHandlerOptions): Promise<UpdateContextCommandOutput>;
    updateContext(args: UpdateContextCommandInput, cb: (err: any, data?: UpdateContextCommandOutput) => void): void;
    updateContext(args: UpdateContextCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateContextCommandOutput) => void): void;
    /**
     * <p>Updates a fleet of devices.</p>
     */
    updateDeviceFleet(args: UpdateDeviceFleetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDeviceFleetCommandOutput>;
    updateDeviceFleet(args: UpdateDeviceFleetCommandInput, cb: (err: any, data?: UpdateDeviceFleetCommandOutput) => void): void;
    updateDeviceFleet(args: UpdateDeviceFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDeviceFleetCommandOutput) => void): void;
    /**
     * <p>Updates one or more devices in a fleet.</p>
     */
    updateDevices(args: UpdateDevicesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDevicesCommandOutput>;
    updateDevices(args: UpdateDevicesCommandInput, cb: (err: any, data?: UpdateDevicesCommandOutput) => void): void;
    updateDevices(args: UpdateDevicesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDevicesCommandOutput) => void): void;
    /**
     * <p>Updates the default settings for new user profiles in the domain.</p>
     */
    updateDomain(args: UpdateDomainCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDomainCommandOutput>;
    updateDomain(args: UpdateDomainCommandInput, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
    updateDomain(args: UpdateDomainCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDomainCommandOutput) => void): void;
    /**
     * <p>Deploys the new <code>EndpointConfig</code> specified in the request, switches to
     *             using newly created endpoint, and then deletes resources provisioned for the endpoint
     *             using the previous <code>EndpointConfig</code> (there is no availability loss). </p>
     *         <p>When Amazon SageMaker receives the request, it sets the endpoint status to
     *                 <code>Updating</code>. After updating the endpoint, it sets the status to
     *                 <code>InService</code>. To check the status of an endpoint, use the <a>DescribeEndpoint</a> API.
     *
     *         </p>
     *         <note>
     *             <p>You must not delete an <code>EndpointConfig</code> in use by an endpoint that is
     *                 live or while the <code>UpdateEndpoint</code> or <code>CreateEndpoint</code>
     *                 operations are being performed on the endpoint. To update an endpoint, you must
     *                 create a new <code>EndpointConfig</code>.</p>
     *             <p>If you delete the <code>EndpointConfig</code> of an endpoint that is active or
     *                 being created or updated you may lose visibility into the instance type the endpoint
     *                 is using. The endpoint must be deleted in order to stop incurring charges.</p>
     *         </note>
     */
    updateEndpoint(args: UpdateEndpointCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEndpointCommandOutput>;
    updateEndpoint(args: UpdateEndpointCommandInput, cb: (err: any, data?: UpdateEndpointCommandOutput) => void): void;
    updateEndpoint(args: UpdateEndpointCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEndpointCommandOutput) => void): void;
    /**
     * <p>Updates variant weight of one or more variants associated with an existing
     *             endpoint, or capacity of one variant associated with an existing endpoint. When it
     *             receives the request, Amazon SageMaker sets the endpoint status to <code>Updating</code>. After
     *             updating the endpoint, it sets the status to <code>InService</code>. To check the status
     *             of an endpoint, use the <a>DescribeEndpoint</a> API. </p>
     */
    updateEndpointWeightsAndCapacities(args: UpdateEndpointWeightsAndCapacitiesCommandInput, options?: __HttpHandlerOptions): Promise<UpdateEndpointWeightsAndCapacitiesCommandOutput>;
    updateEndpointWeightsAndCapacities(args: UpdateEndpointWeightsAndCapacitiesCommandInput, cb: (err: any, data?: UpdateEndpointWeightsAndCapacitiesCommandOutput) => void): void;
    updateEndpointWeightsAndCapacities(args: UpdateEndpointWeightsAndCapacitiesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateEndpointWeightsAndCapacitiesCommandOutput) => void): void;
    /**
     * <p>Adds, updates, or removes the description of an experiment. Updates the display name of an
     *       experiment.</p>
     */
    updateExperiment(args: UpdateExperimentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateExperimentCommandOutput>;
    updateExperiment(args: UpdateExperimentCommandInput, cb: (err: any, data?: UpdateExperimentCommandOutput) => void): void;
    updateExperiment(args: UpdateExperimentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateExperimentCommandOutput) => void): void;
    /**
     * <p>Updates the properties of a SageMaker image. To change the image's tags, use the
     *         <a>AddTags</a> and <a>DeleteTags</a> APIs.</p>
     */
    updateImage(args: UpdateImageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateImageCommandOutput>;
    updateImage(args: UpdateImageCommandInput, cb: (err: any, data?: UpdateImageCommandOutput) => void): void;
    updateImage(args: UpdateImageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateImageCommandOutput) => void): void;
    /**
     * <p>Updates a versioned model.</p>
     */
    updateModelPackage(args: UpdateModelPackageCommandInput, options?: __HttpHandlerOptions): Promise<UpdateModelPackageCommandOutput>;
    updateModelPackage(args: UpdateModelPackageCommandInput, cb: (err: any, data?: UpdateModelPackageCommandOutput) => void): void;
    updateModelPackage(args: UpdateModelPackageCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateModelPackageCommandOutput) => void): void;
    /**
     * <p>Updates a previously created schedule.</p>
     */
    updateMonitoringSchedule(args: UpdateMonitoringScheduleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateMonitoringScheduleCommandOutput>;
    updateMonitoringSchedule(args: UpdateMonitoringScheduleCommandInput, cb: (err: any, data?: UpdateMonitoringScheduleCommandOutput) => void): void;
    updateMonitoringSchedule(args: UpdateMonitoringScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateMonitoringScheduleCommandOutput) => void): void;
    /**
     * <p>Updates a notebook instance. NotebookInstance updates include upgrading or
     *             downgrading the ML compute instance used for your notebook instance to accommodate
     *             changes in your workload requirements.</p>
     */
    updateNotebookInstance(args: UpdateNotebookInstanceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNotebookInstanceCommandOutput>;
    updateNotebookInstance(args: UpdateNotebookInstanceCommandInput, cb: (err: any, data?: UpdateNotebookInstanceCommandOutput) => void): void;
    updateNotebookInstance(args: UpdateNotebookInstanceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNotebookInstanceCommandOutput) => void): void;
    /**
     * <p>Updates a notebook instance lifecycle configuration created with the <a>CreateNotebookInstanceLifecycleConfig</a> API.</p>
     */
    updateNotebookInstanceLifecycleConfig(args: UpdateNotebookInstanceLifecycleConfigCommandInput, options?: __HttpHandlerOptions): Promise<UpdateNotebookInstanceLifecycleConfigCommandOutput>;
    updateNotebookInstanceLifecycleConfig(args: UpdateNotebookInstanceLifecycleConfigCommandInput, cb: (err: any, data?: UpdateNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    updateNotebookInstanceLifecycleConfig(args: UpdateNotebookInstanceLifecycleConfigCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateNotebookInstanceLifecycleConfigCommandOutput) => void): void;
    /**
     * <p>Updates a pipeline.</p>
     */
    updatePipeline(args: UpdatePipelineCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePipelineCommandOutput>;
    updatePipeline(args: UpdatePipelineCommandInput, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
    updatePipeline(args: UpdatePipelineCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePipelineCommandOutput) => void): void;
    /**
     * <p>Updates a pipeline execution.</p>
     */
    updatePipelineExecution(args: UpdatePipelineExecutionCommandInput, options?: __HttpHandlerOptions): Promise<UpdatePipelineExecutionCommandOutput>;
    updatePipelineExecution(args: UpdatePipelineExecutionCommandInput, cb: (err: any, data?: UpdatePipelineExecutionCommandOutput) => void): void;
    updatePipelineExecution(args: UpdatePipelineExecutionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdatePipelineExecutionCommandOutput) => void): void;
    /**
     * <p>Update a model training job to request a new Debugger profiling configuration.</p>
     */
    updateTrainingJob(args: UpdateTrainingJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrainingJobCommandOutput>;
    updateTrainingJob(args: UpdateTrainingJobCommandInput, cb: (err: any, data?: UpdateTrainingJobCommandOutput) => void): void;
    updateTrainingJob(args: UpdateTrainingJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTrainingJobCommandOutput) => void): void;
    /**
     * <p>Updates the display name of a trial.</p>
     */
    updateTrial(args: UpdateTrialCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrialCommandOutput>;
    updateTrial(args: UpdateTrialCommandInput, cb: (err: any, data?: UpdateTrialCommandOutput) => void): void;
    updateTrial(args: UpdateTrialCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTrialCommandOutput) => void): void;
    /**
     * <p>Updates one or more properties of a trial component.</p>
     */
    updateTrialComponent(args: UpdateTrialComponentCommandInput, options?: __HttpHandlerOptions): Promise<UpdateTrialComponentCommandOutput>;
    updateTrialComponent(args: UpdateTrialComponentCommandInput, cb: (err: any, data?: UpdateTrialComponentCommandOutput) => void): void;
    updateTrialComponent(args: UpdateTrialComponentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateTrialComponentCommandOutput) => void): void;
    /**
     * <p>Updates a user profile.</p>
     */
    updateUserProfile(args: UpdateUserProfileCommandInput, options?: __HttpHandlerOptions): Promise<UpdateUserProfileCommandOutput>;
    updateUserProfile(args: UpdateUserProfileCommandInput, cb: (err: any, data?: UpdateUserProfileCommandOutput) => void): void;
    updateUserProfile(args: UpdateUserProfileCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateUserProfileCommandOutput) => void): void;
    /**
     * <p>Use this operation to update your workforce. You can use this operation to
     *         require that workers use specific IP addresses to work on tasks
     *         and to update your OpenID Connect (OIDC) Identity Provider (IdP) workforce configuration.</p>
     *
     *         <p> Use <code>SourceIpConfig</code> to restrict worker access to tasks to a specific range of IP addresses.
     *         You specify allowed IP addresses by creating a list of up to ten <a href="https://docs.aws.amazon.com/vpc/latest/userguide/VPC_Subnets.html">CIDRs</a>.
     *         By default, a workforce isn't restricted to specific IP addresses. If you specify a
     *             range of IP addresses, workers who attempt to access tasks using any IP address outside
     *             the specified range are denied and get a <code>Not Found</code> error message on
     *             the worker portal.</p>
     *         <p>Use <code>OidcConfig</code> to update the configuration of a workforce created using
     *             your own OIDC IdP. </p>
     *         <important>
     *             <p>You can only update your OIDC IdP configuration when there are no work teams
     *                 associated with your workforce. You can delete work teams using the  operation.</p>
     *         </important>
     *         <p>After restricting access to a range of IP addresses or updating your OIDC IdP configuration with this operation, you
     *         can view details about your update workforce using the
     *             operation.</p>
     *         <important>
     *             <p>This operation only applies to private workforces.</p>
     *         </important>
     */
    updateWorkforce(args: UpdateWorkforceCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorkforceCommandOutput>;
    updateWorkforce(args: UpdateWorkforceCommandInput, cb: (err: any, data?: UpdateWorkforceCommandOutput) => void): void;
    updateWorkforce(args: UpdateWorkforceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWorkforceCommandOutput) => void): void;
    /**
     * <p>Updates an existing work team with new member definitions or description.</p>
     */
    updateWorkteam(args: UpdateWorkteamCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorkteamCommandOutput>;
    updateWorkteam(args: UpdateWorkteamCommandInput, cb: (err: any, data?: UpdateWorkteamCommandOutput) => void): void;
    updateWorkteam(args: UpdateWorkteamCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWorkteamCommandOutput) => void): void;
}
