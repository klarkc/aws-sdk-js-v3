import { RoboMakerClient } from "./RoboMakerClient";
import { BatchDeleteWorldsCommandInput, BatchDeleteWorldsCommandOutput } from "./commands/BatchDeleteWorldsCommand";
import { BatchDescribeSimulationJobCommandInput, BatchDescribeSimulationJobCommandOutput } from "./commands/BatchDescribeSimulationJobCommand";
import { CancelDeploymentJobCommandInput, CancelDeploymentJobCommandOutput } from "./commands/CancelDeploymentJobCommand";
import { CancelSimulationJobBatchCommandInput, CancelSimulationJobBatchCommandOutput } from "./commands/CancelSimulationJobBatchCommand";
import { CancelSimulationJobCommandInput, CancelSimulationJobCommandOutput } from "./commands/CancelSimulationJobCommand";
import { CancelWorldExportJobCommandInput, CancelWorldExportJobCommandOutput } from "./commands/CancelWorldExportJobCommand";
import { CancelWorldGenerationJobCommandInput, CancelWorldGenerationJobCommandOutput } from "./commands/CancelWorldGenerationJobCommand";
import { CreateDeploymentJobCommandInput, CreateDeploymentJobCommandOutput } from "./commands/CreateDeploymentJobCommand";
import { CreateFleetCommandInput, CreateFleetCommandOutput } from "./commands/CreateFleetCommand";
import { CreateRobotApplicationCommandInput, CreateRobotApplicationCommandOutput } from "./commands/CreateRobotApplicationCommand";
import { CreateRobotApplicationVersionCommandInput, CreateRobotApplicationVersionCommandOutput } from "./commands/CreateRobotApplicationVersionCommand";
import { CreateRobotCommandInput, CreateRobotCommandOutput } from "./commands/CreateRobotCommand";
import { CreateSimulationApplicationCommandInput, CreateSimulationApplicationCommandOutput } from "./commands/CreateSimulationApplicationCommand";
import { CreateSimulationApplicationVersionCommandInput, CreateSimulationApplicationVersionCommandOutput } from "./commands/CreateSimulationApplicationVersionCommand";
import { CreateSimulationJobCommandInput, CreateSimulationJobCommandOutput } from "./commands/CreateSimulationJobCommand";
import { CreateWorldExportJobCommandInput, CreateWorldExportJobCommandOutput } from "./commands/CreateWorldExportJobCommand";
import { CreateWorldGenerationJobCommandInput, CreateWorldGenerationJobCommandOutput } from "./commands/CreateWorldGenerationJobCommand";
import { CreateWorldTemplateCommandInput, CreateWorldTemplateCommandOutput } from "./commands/CreateWorldTemplateCommand";
import { DeleteFleetCommandInput, DeleteFleetCommandOutput } from "./commands/DeleteFleetCommand";
import { DeleteRobotApplicationCommandInput, DeleteRobotApplicationCommandOutput } from "./commands/DeleteRobotApplicationCommand";
import { DeleteRobotCommandInput, DeleteRobotCommandOutput } from "./commands/DeleteRobotCommand";
import { DeleteSimulationApplicationCommandInput, DeleteSimulationApplicationCommandOutput } from "./commands/DeleteSimulationApplicationCommand";
import { DeleteWorldTemplateCommandInput, DeleteWorldTemplateCommandOutput } from "./commands/DeleteWorldTemplateCommand";
import { DeregisterRobotCommandInput, DeregisterRobotCommandOutput } from "./commands/DeregisterRobotCommand";
import { DescribeDeploymentJobCommandInput, DescribeDeploymentJobCommandOutput } from "./commands/DescribeDeploymentJobCommand";
import { DescribeFleetCommandInput, DescribeFleetCommandOutput } from "./commands/DescribeFleetCommand";
import { DescribeRobotApplicationCommandInput, DescribeRobotApplicationCommandOutput } from "./commands/DescribeRobotApplicationCommand";
import { DescribeRobotCommandInput, DescribeRobotCommandOutput } from "./commands/DescribeRobotCommand";
import { DescribeSimulationApplicationCommandInput, DescribeSimulationApplicationCommandOutput } from "./commands/DescribeSimulationApplicationCommand";
import { DescribeSimulationJobBatchCommandInput, DescribeSimulationJobBatchCommandOutput } from "./commands/DescribeSimulationJobBatchCommand";
import { DescribeSimulationJobCommandInput, DescribeSimulationJobCommandOutput } from "./commands/DescribeSimulationJobCommand";
import { DescribeWorldCommandInput, DescribeWorldCommandOutput } from "./commands/DescribeWorldCommand";
import { DescribeWorldExportJobCommandInput, DescribeWorldExportJobCommandOutput } from "./commands/DescribeWorldExportJobCommand";
import { DescribeWorldGenerationJobCommandInput, DescribeWorldGenerationJobCommandOutput } from "./commands/DescribeWorldGenerationJobCommand";
import { DescribeWorldTemplateCommandInput, DescribeWorldTemplateCommandOutput } from "./commands/DescribeWorldTemplateCommand";
import { GetWorldTemplateBodyCommandInput, GetWorldTemplateBodyCommandOutput } from "./commands/GetWorldTemplateBodyCommand";
import { ListDeploymentJobsCommandInput, ListDeploymentJobsCommandOutput } from "./commands/ListDeploymentJobsCommand";
import { ListFleetsCommandInput, ListFleetsCommandOutput } from "./commands/ListFleetsCommand";
import { ListRobotApplicationsCommandInput, ListRobotApplicationsCommandOutput } from "./commands/ListRobotApplicationsCommand";
import { ListRobotsCommandInput, ListRobotsCommandOutput } from "./commands/ListRobotsCommand";
import { ListSimulationApplicationsCommandInput, ListSimulationApplicationsCommandOutput } from "./commands/ListSimulationApplicationsCommand";
import { ListSimulationJobBatchesCommandInput, ListSimulationJobBatchesCommandOutput } from "./commands/ListSimulationJobBatchesCommand";
import { ListSimulationJobsCommandInput, ListSimulationJobsCommandOutput } from "./commands/ListSimulationJobsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { ListWorldExportJobsCommandInput, ListWorldExportJobsCommandOutput } from "./commands/ListWorldExportJobsCommand";
import { ListWorldGenerationJobsCommandInput, ListWorldGenerationJobsCommandOutput } from "./commands/ListWorldGenerationJobsCommand";
import { ListWorldTemplatesCommandInput, ListWorldTemplatesCommandOutput } from "./commands/ListWorldTemplatesCommand";
import { ListWorldsCommandInput, ListWorldsCommandOutput } from "./commands/ListWorldsCommand";
import { RegisterRobotCommandInput, RegisterRobotCommandOutput } from "./commands/RegisterRobotCommand";
import { RestartSimulationJobCommandInput, RestartSimulationJobCommandOutput } from "./commands/RestartSimulationJobCommand";
import { StartSimulationJobBatchCommandInput, StartSimulationJobBatchCommandOutput } from "./commands/StartSimulationJobBatchCommand";
import { SyncDeploymentJobCommandInput, SyncDeploymentJobCommandOutput } from "./commands/SyncDeploymentJobCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateRobotApplicationCommandInput, UpdateRobotApplicationCommandOutput } from "./commands/UpdateRobotApplicationCommand";
import { UpdateSimulationApplicationCommandInput, UpdateSimulationApplicationCommandOutput } from "./commands/UpdateSimulationApplicationCommand";
import { UpdateWorldTemplateCommandInput, UpdateWorldTemplateCommandOutput } from "./commands/UpdateWorldTemplateCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>This section provides documentation for the AWS RoboMaker API operations.</p>
 */
export declare class RoboMaker extends RoboMakerClient {
    /**
     * <p>Deletes one or more worlds in a batch operation.</p>
     */
    batchDeleteWorlds(args: BatchDeleteWorldsCommandInput, options?: __HttpHandlerOptions): Promise<BatchDeleteWorldsCommandOutput>;
    batchDeleteWorlds(args: BatchDeleteWorldsCommandInput, cb: (err: any, data?: BatchDeleteWorldsCommandOutput) => void): void;
    batchDeleteWorlds(args: BatchDeleteWorldsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDeleteWorldsCommandOutput) => void): void;
    /**
     * <p>Describes one or more simulation jobs.</p>
     */
    batchDescribeSimulationJob(args: BatchDescribeSimulationJobCommandInput, options?: __HttpHandlerOptions): Promise<BatchDescribeSimulationJobCommandOutput>;
    batchDescribeSimulationJob(args: BatchDescribeSimulationJobCommandInput, cb: (err: any, data?: BatchDescribeSimulationJobCommandOutput) => void): void;
    batchDescribeSimulationJob(args: BatchDescribeSimulationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: BatchDescribeSimulationJobCommandOutput) => void): void;
    /**
     * <p>Cancels the specified deployment job.</p>
     */
    cancelDeploymentJob(args: CancelDeploymentJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelDeploymentJobCommandOutput>;
    cancelDeploymentJob(args: CancelDeploymentJobCommandInput, cb: (err: any, data?: CancelDeploymentJobCommandOutput) => void): void;
    cancelDeploymentJob(args: CancelDeploymentJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelDeploymentJobCommandOutput) => void): void;
    /**
     * <p>Cancels the specified simulation job.</p>
     */
    cancelSimulationJob(args: CancelSimulationJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelSimulationJobCommandOutput>;
    cancelSimulationJob(args: CancelSimulationJobCommandInput, cb: (err: any, data?: CancelSimulationJobCommandOutput) => void): void;
    cancelSimulationJob(args: CancelSimulationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelSimulationJobCommandOutput) => void): void;
    /**
     * <p>Cancels a simulation job batch. When you cancel a simulation job batch, you are also
     *          cancelling all of the active simulation jobs created as part of the batch. </p>
     */
    cancelSimulationJobBatch(args: CancelSimulationJobBatchCommandInput, options?: __HttpHandlerOptions): Promise<CancelSimulationJobBatchCommandOutput>;
    cancelSimulationJobBatch(args: CancelSimulationJobBatchCommandInput, cb: (err: any, data?: CancelSimulationJobBatchCommandOutput) => void): void;
    cancelSimulationJobBatch(args: CancelSimulationJobBatchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelSimulationJobBatchCommandOutput) => void): void;
    /**
     * <p>Cancels the specified export job.</p>
     */
    cancelWorldExportJob(args: CancelWorldExportJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelWorldExportJobCommandOutput>;
    cancelWorldExportJob(args: CancelWorldExportJobCommandInput, cb: (err: any, data?: CancelWorldExportJobCommandOutput) => void): void;
    cancelWorldExportJob(args: CancelWorldExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelWorldExportJobCommandOutput) => void): void;
    /**
     * <p>Cancels the specified world generator job.</p>
     */
    cancelWorldGenerationJob(args: CancelWorldGenerationJobCommandInput, options?: __HttpHandlerOptions): Promise<CancelWorldGenerationJobCommandOutput>;
    cancelWorldGenerationJob(args: CancelWorldGenerationJobCommandInput, cb: (err: any, data?: CancelWorldGenerationJobCommandOutput) => void): void;
    cancelWorldGenerationJob(args: CancelWorldGenerationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CancelWorldGenerationJobCommandOutput) => void): void;
    /**
     * <p>Deploys a specific version of a robot application to robots in a fleet.</p>
     *          <p>The robot application must have a numbered <code>applicationVersion</code> for
     *          consistency reasons. To create a new version, use
     *             <code>CreateRobotApplicationVersion</code> or see <a href="https://docs.aws.amazon.com/robomaker/latest/dg/create-robot-application-version.html">Creating a Robot Application Version</a>. </p>
     *          <note>
     *             <p>After 90 days, deployment jobs expire and will be deleted. They will no longer be
     *             accessible. </p>
     *          </note>
     */
    createDeploymentJob(args: CreateDeploymentJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateDeploymentJobCommandOutput>;
    createDeploymentJob(args: CreateDeploymentJobCommandInput, cb: (err: any, data?: CreateDeploymentJobCommandOutput) => void): void;
    createDeploymentJob(args: CreateDeploymentJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDeploymentJobCommandOutput) => void): void;
    /**
     * <p>Creates a fleet, a logical group of robots running the same robot application.</p>
     */
    createFleet(args: CreateFleetCommandInput, options?: __HttpHandlerOptions): Promise<CreateFleetCommandOutput>;
    createFleet(args: CreateFleetCommandInput, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
    createFleet(args: CreateFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateFleetCommandOutput) => void): void;
    /**
     * <p>Creates a robot.</p>
     */
    createRobot(args: CreateRobotCommandInput, options?: __HttpHandlerOptions): Promise<CreateRobotCommandOutput>;
    createRobot(args: CreateRobotCommandInput, cb: (err: any, data?: CreateRobotCommandOutput) => void): void;
    createRobot(args: CreateRobotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRobotCommandOutput) => void): void;
    /**
     * <p>Creates a robot application. </p>
     */
    createRobotApplication(args: CreateRobotApplicationCommandInput, options?: __HttpHandlerOptions): Promise<CreateRobotApplicationCommandOutput>;
    createRobotApplication(args: CreateRobotApplicationCommandInput, cb: (err: any, data?: CreateRobotApplicationCommandOutput) => void): void;
    createRobotApplication(args: CreateRobotApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRobotApplicationCommandOutput) => void): void;
    /**
     * <p>Creates a version of a robot application.</p>
     */
    createRobotApplicationVersion(args: CreateRobotApplicationVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateRobotApplicationVersionCommandOutput>;
    createRobotApplicationVersion(args: CreateRobotApplicationVersionCommandInput, cb: (err: any, data?: CreateRobotApplicationVersionCommandOutput) => void): void;
    createRobotApplicationVersion(args: CreateRobotApplicationVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateRobotApplicationVersionCommandOutput) => void): void;
    /**
     * <p>Creates a simulation application.</p>
     */
    createSimulationApplication(args: CreateSimulationApplicationCommandInput, options?: __HttpHandlerOptions): Promise<CreateSimulationApplicationCommandOutput>;
    createSimulationApplication(args: CreateSimulationApplicationCommandInput, cb: (err: any, data?: CreateSimulationApplicationCommandOutput) => void): void;
    createSimulationApplication(args: CreateSimulationApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSimulationApplicationCommandOutput) => void): void;
    /**
     * <p>Creates a simulation application with a specific revision id.</p>
     */
    createSimulationApplicationVersion(args: CreateSimulationApplicationVersionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSimulationApplicationVersionCommandOutput>;
    createSimulationApplicationVersion(args: CreateSimulationApplicationVersionCommandInput, cb: (err: any, data?: CreateSimulationApplicationVersionCommandOutput) => void): void;
    createSimulationApplicationVersion(args: CreateSimulationApplicationVersionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSimulationApplicationVersionCommandOutput) => void): void;
    /**
     * <p>Creates a simulation job.</p>
     *          <note>
     *             <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be
     *             accessible. </p>
     *          </note>
     */
    createSimulationJob(args: CreateSimulationJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateSimulationJobCommandOutput>;
    createSimulationJob(args: CreateSimulationJobCommandInput, cb: (err: any, data?: CreateSimulationJobCommandOutput) => void): void;
    createSimulationJob(args: CreateSimulationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSimulationJobCommandOutput) => void): void;
    /**
     * <p>Creates a world export job.</p>
     */
    createWorldExportJob(args: CreateWorldExportJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorldExportJobCommandOutput>;
    createWorldExportJob(args: CreateWorldExportJobCommandInput, cb: (err: any, data?: CreateWorldExportJobCommandOutput) => void): void;
    createWorldExportJob(args: CreateWorldExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorldExportJobCommandOutput) => void): void;
    /**
     * <p>Creates worlds using the specified template.</p>
     */
    createWorldGenerationJob(args: CreateWorldGenerationJobCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorldGenerationJobCommandOutput>;
    createWorldGenerationJob(args: CreateWorldGenerationJobCommandInput, cb: (err: any, data?: CreateWorldGenerationJobCommandOutput) => void): void;
    createWorldGenerationJob(args: CreateWorldGenerationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorldGenerationJobCommandOutput) => void): void;
    /**
     * <p>Creates a world template.</p>
     */
    createWorldTemplate(args: CreateWorldTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateWorldTemplateCommandOutput>;
    createWorldTemplate(args: CreateWorldTemplateCommandInput, cb: (err: any, data?: CreateWorldTemplateCommandOutput) => void): void;
    createWorldTemplate(args: CreateWorldTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateWorldTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes a fleet.</p>
     */
    deleteFleet(args: DeleteFleetCommandInput, options?: __HttpHandlerOptions): Promise<DeleteFleetCommandOutput>;
    deleteFleet(args: DeleteFleetCommandInput, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
    deleteFleet(args: DeleteFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteFleetCommandOutput) => void): void;
    /**
     * <p>Deletes a robot.</p>
     */
    deleteRobot(args: DeleteRobotCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRobotCommandOutput>;
    deleteRobot(args: DeleteRobotCommandInput, cb: (err: any, data?: DeleteRobotCommandOutput) => void): void;
    deleteRobot(args: DeleteRobotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRobotCommandOutput) => void): void;
    /**
     * <p>Deletes a robot application.</p>
     */
    deleteRobotApplication(args: DeleteRobotApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteRobotApplicationCommandOutput>;
    deleteRobotApplication(args: DeleteRobotApplicationCommandInput, cb: (err: any, data?: DeleteRobotApplicationCommandOutput) => void): void;
    deleteRobotApplication(args: DeleteRobotApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteRobotApplicationCommandOutput) => void): void;
    /**
     * <p>Deletes a simulation application.</p>
     */
    deleteSimulationApplication(args: DeleteSimulationApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSimulationApplicationCommandOutput>;
    deleteSimulationApplication(args: DeleteSimulationApplicationCommandInput, cb: (err: any, data?: DeleteSimulationApplicationCommandOutput) => void): void;
    deleteSimulationApplication(args: DeleteSimulationApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSimulationApplicationCommandOutput) => void): void;
    /**
     * <p>Deletes a world template.</p>
     */
    deleteWorldTemplate(args: DeleteWorldTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteWorldTemplateCommandOutput>;
    deleteWorldTemplate(args: DeleteWorldTemplateCommandInput, cb: (err: any, data?: DeleteWorldTemplateCommandOutput) => void): void;
    deleteWorldTemplate(args: DeleteWorldTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteWorldTemplateCommandOutput) => void): void;
    /**
     * <p>Deregisters a robot.</p>
     */
    deregisterRobot(args: DeregisterRobotCommandInput, options?: __HttpHandlerOptions): Promise<DeregisterRobotCommandOutput>;
    deregisterRobot(args: DeregisterRobotCommandInput, cb: (err: any, data?: DeregisterRobotCommandOutput) => void): void;
    deregisterRobot(args: DeregisterRobotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeregisterRobotCommandOutput) => void): void;
    /**
     * <p>Describes a deployment job.</p>
     */
    describeDeploymentJob(args: DescribeDeploymentJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDeploymentJobCommandOutput>;
    describeDeploymentJob(args: DescribeDeploymentJobCommandInput, cb: (err: any, data?: DescribeDeploymentJobCommandOutput) => void): void;
    describeDeploymentJob(args: DescribeDeploymentJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDeploymentJobCommandOutput) => void): void;
    /**
     * <p>Describes a fleet.</p>
     */
    describeFleet(args: DescribeFleetCommandInput, options?: __HttpHandlerOptions): Promise<DescribeFleetCommandOutput>;
    describeFleet(args: DescribeFleetCommandInput, cb: (err: any, data?: DescribeFleetCommandOutput) => void): void;
    describeFleet(args: DescribeFleetCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeFleetCommandOutput) => void): void;
    /**
     * <p>Describes a robot.</p>
     */
    describeRobot(args: DescribeRobotCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRobotCommandOutput>;
    describeRobot(args: DescribeRobotCommandInput, cb: (err: any, data?: DescribeRobotCommandOutput) => void): void;
    describeRobot(args: DescribeRobotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRobotCommandOutput) => void): void;
    /**
     * <p>Describes a robot application.</p>
     */
    describeRobotApplication(args: DescribeRobotApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeRobotApplicationCommandOutput>;
    describeRobotApplication(args: DescribeRobotApplicationCommandInput, cb: (err: any, data?: DescribeRobotApplicationCommandOutput) => void): void;
    describeRobotApplication(args: DescribeRobotApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeRobotApplicationCommandOutput) => void): void;
    /**
     * <p>Describes a simulation application.</p>
     */
    describeSimulationApplication(args: DescribeSimulationApplicationCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSimulationApplicationCommandOutput>;
    describeSimulationApplication(args: DescribeSimulationApplicationCommandInput, cb: (err: any, data?: DescribeSimulationApplicationCommandOutput) => void): void;
    describeSimulationApplication(args: DescribeSimulationApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSimulationApplicationCommandOutput) => void): void;
    /**
     * <p>Describes a simulation job.</p>
     */
    describeSimulationJob(args: DescribeSimulationJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSimulationJobCommandOutput>;
    describeSimulationJob(args: DescribeSimulationJobCommandInput, cb: (err: any, data?: DescribeSimulationJobCommandOutput) => void): void;
    describeSimulationJob(args: DescribeSimulationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSimulationJobCommandOutput) => void): void;
    /**
     * <p>Describes a simulation job batch.</p>
     */
    describeSimulationJobBatch(args: DescribeSimulationJobBatchCommandInput, options?: __HttpHandlerOptions): Promise<DescribeSimulationJobBatchCommandOutput>;
    describeSimulationJobBatch(args: DescribeSimulationJobBatchCommandInput, cb: (err: any, data?: DescribeSimulationJobBatchCommandOutput) => void): void;
    describeSimulationJobBatch(args: DescribeSimulationJobBatchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeSimulationJobBatchCommandOutput) => void): void;
    /**
     * <p>Describes a world.</p>
     */
    describeWorld(args: DescribeWorldCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorldCommandOutput>;
    describeWorld(args: DescribeWorldCommandInput, cb: (err: any, data?: DescribeWorldCommandOutput) => void): void;
    describeWorld(args: DescribeWorldCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorldCommandOutput) => void): void;
    /**
     * <p>Describes a world export job.</p>
     */
    describeWorldExportJob(args: DescribeWorldExportJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorldExportJobCommandOutput>;
    describeWorldExportJob(args: DescribeWorldExportJobCommandInput, cb: (err: any, data?: DescribeWorldExportJobCommandOutput) => void): void;
    describeWorldExportJob(args: DescribeWorldExportJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorldExportJobCommandOutput) => void): void;
    /**
     * <p>Describes a world generation job.</p>
     */
    describeWorldGenerationJob(args: DescribeWorldGenerationJobCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorldGenerationJobCommandOutput>;
    describeWorldGenerationJob(args: DescribeWorldGenerationJobCommandInput, cb: (err: any, data?: DescribeWorldGenerationJobCommandOutput) => void): void;
    describeWorldGenerationJob(args: DescribeWorldGenerationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorldGenerationJobCommandOutput) => void): void;
    /**
     * <p>Describes a world template.</p>
     */
    describeWorldTemplate(args: DescribeWorldTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DescribeWorldTemplateCommandOutput>;
    describeWorldTemplate(args: DescribeWorldTemplateCommandInput, cb: (err: any, data?: DescribeWorldTemplateCommandOutput) => void): void;
    describeWorldTemplate(args: DescribeWorldTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeWorldTemplateCommandOutput) => void): void;
    /**
     * <p>Gets the world template body.</p>
     */
    getWorldTemplateBody(args: GetWorldTemplateBodyCommandInput, options?: __HttpHandlerOptions): Promise<GetWorldTemplateBodyCommandOutput>;
    getWorldTemplateBody(args: GetWorldTemplateBodyCommandInput, cb: (err: any, data?: GetWorldTemplateBodyCommandOutput) => void): void;
    getWorldTemplateBody(args: GetWorldTemplateBodyCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetWorldTemplateBodyCommandOutput) => void): void;
    /**
     * <p>Returns a list of deployment jobs for a fleet. You can optionally provide filters to
     *          retrieve specific deployment jobs. </p>
     */
    listDeploymentJobs(args: ListDeploymentJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListDeploymentJobsCommandOutput>;
    listDeploymentJobs(args: ListDeploymentJobsCommandInput, cb: (err: any, data?: ListDeploymentJobsCommandOutput) => void): void;
    listDeploymentJobs(args: ListDeploymentJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDeploymentJobsCommandOutput) => void): void;
    /**
     * <p>Returns a list of fleets. You can optionally provide filters to retrieve specific
     *          fleets. </p>
     */
    listFleets(args: ListFleetsCommandInput, options?: __HttpHandlerOptions): Promise<ListFleetsCommandOutput>;
    listFleets(args: ListFleetsCommandInput, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
    listFleets(args: ListFleetsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListFleetsCommandOutput) => void): void;
    /**
     * <p>Returns a list of robot application. You can optionally provide filters to retrieve
     *          specific robot applications.</p>
     */
    listRobotApplications(args: ListRobotApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<ListRobotApplicationsCommandOutput>;
    listRobotApplications(args: ListRobotApplicationsCommandInput, cb: (err: any, data?: ListRobotApplicationsCommandOutput) => void): void;
    listRobotApplications(args: ListRobotApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRobotApplicationsCommandOutput) => void): void;
    /**
     * <p>Returns a list of robots. You can optionally provide filters to retrieve specific
     *          robots.</p>
     */
    listRobots(args: ListRobotsCommandInput, options?: __HttpHandlerOptions): Promise<ListRobotsCommandOutput>;
    listRobots(args: ListRobotsCommandInput, cb: (err: any, data?: ListRobotsCommandOutput) => void): void;
    listRobots(args: ListRobotsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListRobotsCommandOutput) => void): void;
    /**
     * <p>Returns a list of simulation applications. You can optionally provide filters to
     *          retrieve specific simulation applications. </p>
     */
    listSimulationApplications(args: ListSimulationApplicationsCommandInput, options?: __HttpHandlerOptions): Promise<ListSimulationApplicationsCommandOutput>;
    listSimulationApplications(args: ListSimulationApplicationsCommandInput, cb: (err: any, data?: ListSimulationApplicationsCommandOutput) => void): void;
    listSimulationApplications(args: ListSimulationApplicationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSimulationApplicationsCommandOutput) => void): void;
    /**
     * <p>Returns a list simulation job batches. You can optionally provide filters to retrieve
     *          specific simulation batch jobs. </p>
     */
    listSimulationJobBatches(args: ListSimulationJobBatchesCommandInput, options?: __HttpHandlerOptions): Promise<ListSimulationJobBatchesCommandOutput>;
    listSimulationJobBatches(args: ListSimulationJobBatchesCommandInput, cb: (err: any, data?: ListSimulationJobBatchesCommandOutput) => void): void;
    listSimulationJobBatches(args: ListSimulationJobBatchesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSimulationJobBatchesCommandOutput) => void): void;
    /**
     * <p>Returns a list of simulation jobs. You can optionally provide filters to retrieve
     *          specific simulation jobs. </p>
     */
    listSimulationJobs(args: ListSimulationJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListSimulationJobsCommandOutput>;
    listSimulationJobs(args: ListSimulationJobsCommandInput, cb: (err: any, data?: ListSimulationJobsCommandOutput) => void): void;
    listSimulationJobs(args: ListSimulationJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSimulationJobsCommandOutput) => void): void;
    /**
     * <p>Lists all tags on a AWS RoboMaker resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Lists world export jobs.</p>
     */
    listWorldExportJobs(args: ListWorldExportJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorldExportJobsCommandOutput>;
    listWorldExportJobs(args: ListWorldExportJobsCommandInput, cb: (err: any, data?: ListWorldExportJobsCommandOutput) => void): void;
    listWorldExportJobs(args: ListWorldExportJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorldExportJobsCommandOutput) => void): void;
    /**
     * <p>Lists world generator jobs.</p>
     */
    listWorldGenerationJobs(args: ListWorldGenerationJobsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorldGenerationJobsCommandOutput>;
    listWorldGenerationJobs(args: ListWorldGenerationJobsCommandInput, cb: (err: any, data?: ListWorldGenerationJobsCommandOutput) => void): void;
    listWorldGenerationJobs(args: ListWorldGenerationJobsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorldGenerationJobsCommandOutput) => void): void;
    /**
     * <p>Lists worlds.</p>
     */
    listWorlds(args: ListWorldsCommandInput, options?: __HttpHandlerOptions): Promise<ListWorldsCommandOutput>;
    listWorlds(args: ListWorldsCommandInput, cb: (err: any, data?: ListWorldsCommandOutput) => void): void;
    listWorlds(args: ListWorldsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorldsCommandOutput) => void): void;
    /**
     * <p>Lists world templates.</p>
     */
    listWorldTemplates(args: ListWorldTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListWorldTemplatesCommandOutput>;
    listWorldTemplates(args: ListWorldTemplatesCommandInput, cb: (err: any, data?: ListWorldTemplatesCommandOutput) => void): void;
    listWorldTemplates(args: ListWorldTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListWorldTemplatesCommandOutput) => void): void;
    /**
     * <p>Registers a robot with a fleet.</p>
     */
    registerRobot(args: RegisterRobotCommandInput, options?: __HttpHandlerOptions): Promise<RegisterRobotCommandOutput>;
    registerRobot(args: RegisterRobotCommandInput, cb: (err: any, data?: RegisterRobotCommandOutput) => void): void;
    registerRobot(args: RegisterRobotCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RegisterRobotCommandOutput) => void): void;
    /**
     * <p>Restarts a running simulation job.</p>
     */
    restartSimulationJob(args: RestartSimulationJobCommandInput, options?: __HttpHandlerOptions): Promise<RestartSimulationJobCommandOutput>;
    restartSimulationJob(args: RestartSimulationJobCommandInput, cb: (err: any, data?: RestartSimulationJobCommandOutput) => void): void;
    restartSimulationJob(args: RestartSimulationJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: RestartSimulationJobCommandOutput) => void): void;
    /**
     * <p>Starts a new simulation job batch. The batch is defined using one or more
     *             <code>SimulationJobRequest</code> objects. </p>
     */
    startSimulationJobBatch(args: StartSimulationJobBatchCommandInput, options?: __HttpHandlerOptions): Promise<StartSimulationJobBatchCommandOutput>;
    startSimulationJobBatch(args: StartSimulationJobBatchCommandInput, cb: (err: any, data?: StartSimulationJobBatchCommandOutput) => void): void;
    startSimulationJobBatch(args: StartSimulationJobBatchCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartSimulationJobBatchCommandOutput) => void): void;
    /**
     * <p>Syncrhonizes robots in a fleet to the latest deployment. This is helpful if robots were
     *          added after a deployment.</p>
     */
    syncDeploymentJob(args: SyncDeploymentJobCommandInput, options?: __HttpHandlerOptions): Promise<SyncDeploymentJobCommandOutput>;
    syncDeploymentJob(args: SyncDeploymentJobCommandInput, cb: (err: any, data?: SyncDeploymentJobCommandOutput) => void): void;
    syncDeploymentJob(args: SyncDeploymentJobCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: SyncDeploymentJobCommandOutput) => void): void;
    /**
     * <p>Adds or edits tags for a AWS RoboMaker resource.</p>
     *          <p>Each tag consists of a tag key and a tag value. Tag keys and tag values are both
     *          required, but tag values can be empty strings. </p>
     *          <p>For information about the rules that apply to tag keys and tag values, see <a href="https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/allocation-tag-restrictions.html">User-Defined Tag Restrictions</a> in the <i>AWS Billing and Cost Management
     *             User Guide</i>. </p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the specified AWS RoboMaker resource.</p>
     *          <p>To remove a tag, specify the tag key. To change the tag value of an existing tag key,
     *          use <a href="https://docs.aws.amazon.com/robomaker/latest/dg/API_TagResource.html">
     *                <code>TagResource</code>
     *             </a>. </p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a robot application.</p>
     */
    updateRobotApplication(args: UpdateRobotApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateRobotApplicationCommandOutput>;
    updateRobotApplication(args: UpdateRobotApplicationCommandInput, cb: (err: any, data?: UpdateRobotApplicationCommandOutput) => void): void;
    updateRobotApplication(args: UpdateRobotApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateRobotApplicationCommandOutput) => void): void;
    /**
     * <p>Updates a simulation application.</p>
     */
    updateSimulationApplication(args: UpdateSimulationApplicationCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSimulationApplicationCommandOutput>;
    updateSimulationApplication(args: UpdateSimulationApplicationCommandInput, cb: (err: any, data?: UpdateSimulationApplicationCommandOutput) => void): void;
    updateSimulationApplication(args: UpdateSimulationApplicationCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSimulationApplicationCommandOutput) => void): void;
    /**
     * <p>Updates a world template.</p>
     */
    updateWorldTemplate(args: UpdateWorldTemplateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateWorldTemplateCommandOutput>;
    updateWorldTemplate(args: UpdateWorldTemplateCommandInput, cb: (err: any, data?: UpdateWorldTemplateCommandOutput) => void): void;
    updateWorldTemplate(args: UpdateWorldTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateWorldTemplateCommandOutput) => void): void;
}
