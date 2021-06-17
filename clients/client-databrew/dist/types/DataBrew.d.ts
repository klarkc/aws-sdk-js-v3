import { DataBrewClient } from "./DataBrewClient";
import { BatchDeleteRecipeVersionCommandInput, BatchDeleteRecipeVersionCommandOutput } from "./commands/BatchDeleteRecipeVersionCommand";
import { CreateDatasetCommandInput, CreateDatasetCommandOutput } from "./commands/CreateDatasetCommand";
import { CreateProfileJobCommandInput, CreateProfileJobCommandOutput } from "./commands/CreateProfileJobCommand";
import { CreateProjectCommandInput, CreateProjectCommandOutput } from "./commands/CreateProjectCommand";
import { CreateRecipeCommandInput, CreateRecipeCommandOutput } from "./commands/CreateRecipeCommand";
import { CreateRecipeJobCommandInput, CreateRecipeJobCommandOutput } from "./commands/CreateRecipeJobCommand";
import { CreateScheduleCommandInput, CreateScheduleCommandOutput } from "./commands/CreateScheduleCommand";
import { DeleteDatasetCommandInput, DeleteDatasetCommandOutput } from "./commands/DeleteDatasetCommand";
import { DeleteJobCommandInput, DeleteJobCommandOutput } from "./commands/DeleteJobCommand";
import { DeleteProjectCommandInput, DeleteProjectCommandOutput } from "./commands/DeleteProjectCommand";
import { DeleteRecipeVersionCommandInput, DeleteRecipeVersionCommandOutput } from "./commands/DeleteRecipeVersionCommand";
import { DeleteScheduleCommandInput, DeleteScheduleCommandOutput } from "./commands/DeleteScheduleCommand";
import { DescribeDatasetCommandInput, DescribeDatasetCommandOutput } from "./commands/DescribeDatasetCommand";
import { DescribeJobCommandInput, DescribeJobCommandOutput } from "./commands/DescribeJobCommand";
import { DescribeJobRunCommandInput, DescribeJobRunCommandOutput } from "./commands/DescribeJobRunCommand";
import { DescribeProjectCommandInput, DescribeProjectCommandOutput } from "./commands/DescribeProjectCommand";
import { DescribeRecipeCommandInput, DescribeRecipeCommandOutput } from "./commands/DescribeRecipeCommand";
import { DescribeScheduleCommandInput, DescribeScheduleCommandOutput } from "./commands/DescribeScheduleCommand";
import { ListDatasetsCommandInput, ListDatasetsCommandOutput } from "./commands/ListDatasetsCommand";
import { ListJobRunsCommandInput, ListJobRunsCommandOutput } from "./commands/ListJobRunsCommand";
import { ListJobsCommandInput, ListJobsCommandOutput } from "./commands/ListJobsCommand";
import { ListProjectsCommandInput, ListProjectsCommandOutput } from "./commands/ListProjectsCommand";
import { ListRecipeVersionsCommandInput, ListRecipeVersionsCommandOutput } from "./commands/ListRecipeVersionsCommand";
import { ListRecipesCommandInput, ListRecipesCommandOutput } from "./commands/ListRecipesCommand";
import { ListSchedulesCommandInput, ListSchedulesCommandOutput } from "./commands/ListSchedulesCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PublishRecipeCommandInput, PublishRecipeCommandOutput } from "./commands/PublishRecipeCommand";
import { SendProjectSessionActionCommandInput, SendProjectSessionActionCommandOutput } from "./commands/SendProjectSessionActionCommand";
import { StartJobRunCommandInput, StartJobRunCommandOutput } from "./commands/StartJobRunCommand";
import { StartProjectSessionCommandInput, StartProjectSessionCommandOutput } from "./commands/StartProjectSessionCommand";
import { StopJobRunCommandInput, StopJobRunCommandOutput } from "./commands/StopJobRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateDatasetCommandInput, UpdateDatasetCommandOutput } from "./commands/UpdateDatasetCommand";
import { UpdateProfileJobCommandInput, UpdateProfileJobCommandOutput } from "./commands/UpdateProfileJobCommand";
import { UpdateProjectCommandInput, UpdateProjectCommandOutput } from "./commands/UpdateProjectCommand";
import { UpdateRecipeCommandInput, UpdateRecipeCommandOutput } from "./commands/UpdateRecipeCommand";
import { UpdateRecipeJobCommandInput, UpdateRecipeJobCommandOutput } from "./commands/UpdateRecipeJobCommand";
import { UpdateScheduleCommandInput, UpdateScheduleCommandOutput } from "./commands/UpdateScheduleCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Glue DataBrew is a visual, cloud-scale data-preparation service. DataBrew
 *             simplifies data preparation tasks, targeting data issues that are hard to spot and
 *             time-consuming to fix. DataBrew empowers users of all technical levels to visualize the
 *             data and perform one-click data transformations, with no coding required.</p>
 */
export declare class DataBrew extends DataBrewClient {
    /**
     * <p>Deletes one or more versions of a recipe at a time.</p>
     *
     *         <p>The entire request will be rejected if:</p>
     *         <ul>
     *             <li>
     *                 <p>The recipe does not exist.</p>
     *             </li>
     *             <li>
     *                 <p>There is an invalid version identifier in the list of versions.</p>
     *             </li>
     *             <li>
     *                 <p>The version list is empty.</p>
     *             </li>
     *             <li>
     *                 <p>The version list size exceeds 50.</p>
     *             </li>
     *             <li>
     *                 <p>The version list contains duplicate entries.</p>
     *             </li>
     *          </ul>
     *
     *         <p>The request will complete successfully, but with partial failures, if:</p>
     *         <ul>
     *             <li>
     *                 <p>A version does not exist.</p>
     *             </li>
     *             <li>
     *                 <p>A version is being used by a job.</p>
     *             </li>
     *             <li>
     *                 <p>You specify <code>LATEST_WORKING</code>, but it's being used by a
     *                     project.</p>
     *             </li>
     *             <li>
     *                 <p>The version fails to be deleted.</p>
     *             </li>
     *          </ul>
     *         <p>The <code>LATEST_WORKING</code> version will only be deleted if the recipe has no
     *             other versions. If you try to delete <code>LATEST_WORKING</code> while other versions
     *             exist (or if they can't be deleted), then <code>LATEST_WORKING</code> will be listed as
     *             partial failure in the response.</p>
     */
    batchDeleteRecipeVersion(args: BatchDeleteRecipeVersionCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteRecipeVersionCommandOutput>;
    batchDeleteRecipeVersion(args: BatchDeleteRecipeVersionCommandInput, cb: (err: any, data?: BatchDeleteRecipeVersionCommandOutput) => void): void;
    batchDeleteRecipeVersion(args: BatchDeleteRecipeVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteRecipeVersionCommandOutput) => void): void;
    /**
     * <p>Creates a new DataBrew dataset.</p>
     */
    createDataset(args: CreateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<CreateDatasetCommandOutput>;
    createDataset(args: CreateDatasetCommandInput, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
    createDataset(args: CreateDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDatasetCommandOutput) => void): void;
    /**
     * <p>Creates a new job to analyze a dataset and create its data profile.</p>
     */
    createProfileJob(args: CreateProfileJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateProfileJobCommandOutput>;
    createProfileJob(args: CreateProfileJobCommandInput, cb: (err: any, data?: CreateProfileJobCommandOutput) => void): void;
    createProfileJob(args: CreateProfileJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProfileJobCommandOutput) => void): void;
    /**
     * <p>Creates a new DataBrew project.</p>
     */
    createProject(args: CreateProjectCommandInput, options?: __HttpHandlerOptions): Promise<CreateProjectCommandOutput>;
    createProject(args: CreateProjectCommandInput, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    createProject(args: CreateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateProjectCommandOutput) => void): void;
    /**
     * <p>Creates a new DataBrew recipe.</p>
     */
    createRecipe(args: CreateRecipeCommandInput, options?: __HttpHandlerOptions): Promise<CreateRecipeCommandOutput>;
    createRecipe(args: CreateRecipeCommandInput, cb: (err: any, data?: CreateRecipeCommandOutput) => void): void;
    createRecipe(args: CreateRecipeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRecipeCommandOutput) => void): void;
    /**
     * <p>Creates a new job to transform input data, using steps defined in an existing AWS Glue
     *             DataBrew recipe</p>
     */
    createRecipeJob(args: CreateRecipeJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateRecipeJobCommandOutput>;
    createRecipeJob(args: CreateRecipeJobCommandInput, cb: (err: any, data?: CreateRecipeJobCommandOutput) => void): void;
    createRecipeJob(args: CreateRecipeJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRecipeJobCommandOutput) => void): void;
    /**
     * <p>Creates a new schedule for one or more DataBrew jobs. Jobs can be run at a specific
     *             date and time, or at regular intervals.</p>
     */
    createSchedule(args: CreateScheduleCommandInput, options?: __HttpHandlerOptions): Promise<CreateScheduleCommandOutput>;
    createSchedule(args: CreateScheduleCommandInput, cb: (err: any, data?: CreateScheduleCommandOutput) => void): void;
    createSchedule(args: CreateScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateScheduleCommandOutput) => void): void;
    /**
     * <p>Deletes a dataset from DataBrew.</p>
     */
    deleteDataset(args: DeleteDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDatasetCommandOutput>;
    deleteDataset(args: DeleteDatasetCommandInput, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
    deleteDataset(args: DeleteDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDatasetCommandOutput) => void): void;
    /**
     * <p>Deletes the specified DataBrew job.</p>
     */
    deleteJob(args: DeleteJobCommandInput, options?: __HttpHandlerOptions): Promise<DeleteJobCommandOutput>;
    deleteJob(args: DeleteJobCommandInput, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
    deleteJob(args: DeleteJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteJobCommandOutput) => void): void;
    /**
     * <p>Deletes an existing DataBrew project.</p>
     */
    deleteProject(args: DeleteProjectCommandInput, options?: __HttpHandlerOptions): Promise<DeleteProjectCommandOutput>;
    deleteProject(args: DeleteProjectCommandInput, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    deleteProject(args: DeleteProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteProjectCommandOutput) => void): void;
    /**
     * <p>Deletes a single version of a DataBrew recipe.</p>
     */
    deleteRecipeVersion(args: DeleteRecipeVersionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRecipeVersionCommandOutput>;
    deleteRecipeVersion(args: DeleteRecipeVersionCommandInput, cb: (err: any, data?: DeleteRecipeVersionCommandOutput) => void): void;
    deleteRecipeVersion(args: DeleteRecipeVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRecipeVersionCommandOutput) => void): void;
    /**
     * <p>Deletes the specified DataBrew schedule.</p>
     */
    deleteSchedule(args: DeleteScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DeleteScheduleCommandOutput>;
    deleteSchedule(args: DeleteScheduleCommandInput, cb: (err: any, data?: DeleteScheduleCommandOutput) => void): void;
    deleteSchedule(args: DeleteScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteScheduleCommandOutput) => void): void;
    /**
     * <p>Returns the definition of a specific DataBrew dataset.</p>
     */
    describeDataset(args: DescribeDatasetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDatasetCommandOutput>;
    describeDataset(args: DescribeDatasetCommandInput, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
    describeDataset(args: DescribeDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDatasetCommandOutput) => void): void;
    /**
     * <p>Returns the definition of a specific DataBrew job.</p>
     */
    describeJob(args: DescribeJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobCommandOutput>;
    describeJob(args: DescribeJobCommandInput, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
    describeJob(args: DescribeJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobCommandOutput) => void): void;
    /**
     * <p>Represents one run of a DataBrew job.</p>
     */
    describeJobRun(args: DescribeJobRunCommandInput, options?: __HttpHandlerOptions): Promise<DescribeJobRunCommandOutput>;
    describeJobRun(args: DescribeJobRunCommandInput, cb: (err: any, data?: DescribeJobRunCommandOutput) => void): void;
    describeJobRun(args: DescribeJobRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeJobRunCommandOutput) => void): void;
    /**
     * <p>Returns the definition of a specific DataBrew project.</p>
     */
    describeProject(args: DescribeProjectCommandInput, options?: __HttpHandlerOptions): Promise<DescribeProjectCommandOutput>;
    describeProject(args: DescribeProjectCommandInput, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    describeProject(args: DescribeProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeProjectCommandOutput) => void): void;
    /**
     * <p>Returns the definition of a specific DataBrew recipe corresponding to a particular
     *             version.</p>
     */
    describeRecipe(args: DescribeRecipeCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRecipeCommandOutput>;
    describeRecipe(args: DescribeRecipeCommandInput, cb: (err: any, data?: DescribeRecipeCommandOutput) => void): void;
    describeRecipe(args: DescribeRecipeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRecipeCommandOutput) => void): void;
    /**
     * <p>Returns the definition of a specific DataBrew schedule.</p>
     */
    describeSchedule(args: DescribeScheduleCommandInput, options?: __HttpHandlerOptions): Promise<DescribeScheduleCommandOutput>;
    describeSchedule(args: DescribeScheduleCommandInput, cb: (err: any, data?: DescribeScheduleCommandOutput) => void): void;
    describeSchedule(args: DescribeScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeScheduleCommandOutput) => void): void;
    /**
     * <p>Lists all of the DataBrew datasets.</p>
     */
    listDatasets(args: ListDatasetsCommandInput, options?: __HttpHandlerOptions): Promise<ListDatasetsCommandOutput>;
    listDatasets(args: ListDatasetsCommandInput, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
    listDatasets(args: ListDatasetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDatasetsCommandOutput) => void): void;
    /**
     * <p>Lists all of the previous runs of a particular DataBrew job.</p>
     */
    listJobRuns(args: ListJobRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobRunsCommandOutput>;
    listJobRuns(args: ListJobRunsCommandInput, cb: (err: any, data?: ListJobRunsCommandOutput) => void): void;
    listJobRuns(args: ListJobRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobRunsCommandOutput) => void): void;
    /**
     * <p>Lists all of the DataBrew jobs that are defined.</p>
     */
    listJobs(args: ListJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListJobsCommandOutput>;
    listJobs(args: ListJobsCommandInput, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    listJobs(args: ListJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListJobsCommandOutput) => void): void;
    /**
     * <p>Lists all of the DataBrew projects that are defined.</p>
     */
    listProjects(args: ListProjectsCommandInput, options?: __HttpHandlerOptions): Promise<ListProjectsCommandOutput>;
    listProjects(args: ListProjectsCommandInput, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    listProjects(args: ListProjectsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListProjectsCommandOutput) => void): void;
    /**
     * <p>Lists all of the DataBrew recipes that are defined.</p>
     */
    listRecipes(args: ListRecipesCommandInput, options?: __HttpHandlerOptions): Promise<ListRecipesCommandOutput>;
    listRecipes(args: ListRecipesCommandInput, cb: (err: any, data?: ListRecipesCommandOutput) => void): void;
    listRecipes(args: ListRecipesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRecipesCommandOutput) => void): void;
    /**
     * <p>Lists the versions of a particular DataBrew recipe, except for
     *                 <code>LATEST_WORKING</code>.</p>
     */
    listRecipeVersions(args: ListRecipeVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListRecipeVersionsCommandOutput>;
    listRecipeVersions(args: ListRecipeVersionsCommandInput, cb: (err: any, data?: ListRecipeVersionsCommandOutput) => void): void;
    listRecipeVersions(args: ListRecipeVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRecipeVersionsCommandOutput) => void): void;
    /**
     * <p>Lists the DataBrew schedules that are defined.</p>
     */
    listSchedules(args: ListSchedulesCommandInput, options?: __HttpHandlerOptions): Promise<ListSchedulesCommandOutput>;
    listSchedules(args: ListSchedulesCommandInput, cb: (err: any, data?: ListSchedulesCommandOutput) => void): void;
    listSchedules(args: ListSchedulesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSchedulesCommandOutput) => void): void;
    /**
     * <p>Lists all the tags for a DataBrew resource. </p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Publishes a new version of a DataBrew recipe.</p>
     */
    publishRecipe(args: PublishRecipeCommandInput, options?: __HttpHandlerOptions): Promise<PublishRecipeCommandOutput>;
    publishRecipe(args: PublishRecipeCommandInput, cb: (err: any, data?: PublishRecipeCommandOutput) => void): void;
    publishRecipe(args: PublishRecipeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PublishRecipeCommandOutput) => void): void;
    /**
     * <p>Performs a recipe step within an interactive DataBrew session that's currently
     *             open.</p>
     */
    sendProjectSessionAction(args: SendProjectSessionActionCommandInput, options?: __HttpHandlerOptions): Promise<SendProjectSessionActionCommandOutput>;
    sendProjectSessionAction(args: SendProjectSessionActionCommandInput, cb: (err: any, data?: SendProjectSessionActionCommandOutput) => void): void;
    sendProjectSessionAction(args: SendProjectSessionActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SendProjectSessionActionCommandOutput) => void): void;
    /**
     * <p>Runs a DataBrew job.</p>
     */
    startJobRun(args: StartJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StartJobRunCommandOutput>;
    startJobRun(args: StartJobRunCommandInput, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
    startJobRun(args: StartJobRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartJobRunCommandOutput) => void): void;
    /**
     * <p>Creates an interactive session, enabling you to manipulate data in a DataBrew
     *             project.</p>
     */
    startProjectSession(args: StartProjectSessionCommandInput, options?: __HttpHandlerOptions): Promise<StartProjectSessionCommandOutput>;
    startProjectSession(args: StartProjectSessionCommandInput, cb: (err: any, data?: StartProjectSessionCommandOutput) => void): void;
    startProjectSession(args: StartProjectSessionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartProjectSessionCommandOutput) => void): void;
    /**
     * <p>Stops a particular run of a job.</p>
     */
    stopJobRun(args: StopJobRunCommandInput, options?: __HttpHandlerOptions): Promise<StopJobRunCommandOutput>;
    stopJobRun(args: StopJobRunCommandInput, cb: (err: any, data?: StopJobRunCommandOutput) => void): void;
    stopJobRun(args: StopJobRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopJobRunCommandOutput) => void): void;
    /**
     * <p>Adds metadata tags to a DataBrew resource, such as a dataset, project, recipe, job, or
     *             schedule.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes metadata tags from a DataBrew resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Modifies the definition of an existing DataBrew dataset.</p>
     */
    updateDataset(args: UpdateDatasetCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDatasetCommandOutput>;
    updateDataset(args: UpdateDatasetCommandInput, cb: (err: any, data?: UpdateDatasetCommandOutput) => void): void;
    updateDataset(args: UpdateDatasetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDatasetCommandOutput) => void): void;
    /**
     * <p>Modifies the definition of an existing profile job.</p>
     */
    updateProfileJob(args: UpdateProfileJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProfileJobCommandOutput>;
    updateProfileJob(args: UpdateProfileJobCommandInput, cb: (err: any, data?: UpdateProfileJobCommandOutput) => void): void;
    updateProfileJob(args: UpdateProfileJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProfileJobCommandOutput) => void): void;
    /**
     * <p>Modifies the definition of an existing DataBrew project.</p>
     */
    updateProject(args: UpdateProjectCommandInput, options?: __HttpHandlerOptions): Promise<UpdateProjectCommandOutput>;
    updateProject(args: UpdateProjectCommandInput, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
    updateProject(args: UpdateProjectCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateProjectCommandOutput) => void): void;
    /**
     * <p>Modifies the definition of the <code>LATEST_WORKING</code> version of a DataBrew
     *             recipe.</p>
     */
    updateRecipe(args: UpdateRecipeCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRecipeCommandOutput>;
    updateRecipe(args: UpdateRecipeCommandInput, cb: (err: any, data?: UpdateRecipeCommandOutput) => void): void;
    updateRecipe(args: UpdateRecipeCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRecipeCommandOutput) => void): void;
    /**
     * <p>Modifies the definition of an existing DataBrew recipe job.</p>
     */
    updateRecipeJob(args: UpdateRecipeJobCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRecipeJobCommandOutput>;
    updateRecipeJob(args: UpdateRecipeJobCommandInput, cb: (err: any, data?: UpdateRecipeJobCommandOutput) => void): void;
    updateRecipeJob(args: UpdateRecipeJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRecipeJobCommandOutput) => void): void;
    /**
     * <p>Modifies the definition of an existing DataBrew schedule.</p>
     */
    updateSchedule(args: UpdateScheduleCommandInput, options?: __HttpHandlerOptions): Promise<UpdateScheduleCommandOutput>;
    updateSchedule(args: UpdateScheduleCommandInput, cb: (err: any, data?: UpdateScheduleCommandOutput) => void): void;
    updateSchedule(args: UpdateScheduleCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateScheduleCommandOutput) => void): void;
}
