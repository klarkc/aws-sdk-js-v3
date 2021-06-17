import { FisClient } from "./FisClient";
import { CreateExperimentTemplateCommandInput, CreateExperimentTemplateCommandOutput } from "./commands/CreateExperimentTemplateCommand";
import { DeleteExperimentTemplateCommandInput, DeleteExperimentTemplateCommandOutput } from "./commands/DeleteExperimentTemplateCommand";
import { GetActionCommandInput, GetActionCommandOutput } from "./commands/GetActionCommand";
import { GetExperimentCommandInput, GetExperimentCommandOutput } from "./commands/GetExperimentCommand";
import { GetExperimentTemplateCommandInput, GetExperimentTemplateCommandOutput } from "./commands/GetExperimentTemplateCommand";
import { ListActionsCommandInput, ListActionsCommandOutput } from "./commands/ListActionsCommand";
import { ListExperimentTemplatesCommandInput, ListExperimentTemplatesCommandOutput } from "./commands/ListExperimentTemplatesCommand";
import { ListExperimentsCommandInput, ListExperimentsCommandOutput } from "./commands/ListExperimentsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StartExperimentCommandInput, StartExperimentCommandOutput } from "./commands/StartExperimentCommand";
import { StopExperimentCommandInput, StopExperimentCommandOutput } from "./commands/StopExperimentCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateExperimentTemplateCommandInput, UpdateExperimentTemplateCommandOutput } from "./commands/UpdateExperimentTemplateCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS Fault Injection Simulator is a managed service that enables you to perform fault injection
 *            experiments on your AWS workloads. For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">AWS Fault Injection Simulator User Guide</a>.</p>
 */
export declare class Fis extends FisClient {
    /**
     * <p>Creates an experiment template. </p>
     *          <p>To create a template, specify the following information: </p>
     *          <ul>
     *             <li>
     *                <p>
     *                   <b>Targets</b>: A target can be a specific resource
     *                in your AWS environment, or one or more resources that match criteria that you
     *                specify, for example, resources that have specific tags.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Actions</b>: The actions to carry out on the
     *                target. You can specify multiple actions, the duration of each action, and when to start each action during an experiment.</p>
     *             </li>
     *             <li>
     *                <p>
     *                   <b>Stop conditions</b>: If a stop condition is
     *                triggered while an experiment is running, the experiment is automatically
     *                stopped. You can define a stop condition as a CloudWatch alarm.</p>
     *             </li>
     *          </ul>
     *          <p>For more information, see the <a href="https://docs.aws.amazon.com/fis/latest/userguide/">AWS Fault Injection Simulator User Guide</a>.</p>
     */
    createExperimentTemplate(args: CreateExperimentTemplateCommandInput, options?: __HttpHandlerOptions): Promise<CreateExperimentTemplateCommandOutput>;
    createExperimentTemplate(args: CreateExperimentTemplateCommandInput, cb: (err: any, data?: CreateExperimentTemplateCommandOutput) => void): void;
    createExperimentTemplate(args: CreateExperimentTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateExperimentTemplateCommandOutput) => void): void;
    /**
     * <p>Deletes the specified experiment template.</p>
     */
    deleteExperimentTemplate(args: DeleteExperimentTemplateCommandInput, options?: __HttpHandlerOptions): Promise<DeleteExperimentTemplateCommandOutput>;
    deleteExperimentTemplate(args: DeleteExperimentTemplateCommandInput, cb: (err: any, data?: DeleteExperimentTemplateCommandOutput) => void): void;
    deleteExperimentTemplate(args: DeleteExperimentTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteExperimentTemplateCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified AWS FIS action.</p>
     */
    getAction(args: GetActionCommandInput, options?: __HttpHandlerOptions): Promise<GetActionCommandOutput>;
    getAction(args: GetActionCommandInput, cb: (err: any, data?: GetActionCommandOutput) => void): void;
    getAction(args: GetActionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetActionCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified experiment.</p>
     */
    getExperiment(args: GetExperimentCommandInput, options?: __HttpHandlerOptions): Promise<GetExperimentCommandOutput>;
    getExperiment(args: GetExperimentCommandInput, cb: (err: any, data?: GetExperimentCommandOutput) => void): void;
    getExperiment(args: GetExperimentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetExperimentCommandOutput) => void): void;
    /**
     * <p>Gets information about the specified experiment template.</p>
     */
    getExperimentTemplate(args: GetExperimentTemplateCommandInput, options?: __HttpHandlerOptions): Promise<GetExperimentTemplateCommandOutput>;
    getExperimentTemplate(args: GetExperimentTemplateCommandInput, cb: (err: any, data?: GetExperimentTemplateCommandOutput) => void): void;
    getExperimentTemplate(args: GetExperimentTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetExperimentTemplateCommandOutput) => void): void;
    /**
     * <p>Lists the available AWS FIS actions.</p>
     */
    listActions(args: ListActionsCommandInput, options?: __HttpHandlerOptions): Promise<ListActionsCommandOutput>;
    listActions(args: ListActionsCommandInput, cb: (err: any, data?: ListActionsCommandOutput) => void): void;
    listActions(args: ListActionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListActionsCommandOutput) => void): void;
    /**
     * <p>Lists your experiments.</p>
     */
    listExperiments(args: ListExperimentsCommandInput, options?: __HttpHandlerOptions): Promise<ListExperimentsCommandOutput>;
    listExperiments(args: ListExperimentsCommandInput, cb: (err: any, data?: ListExperimentsCommandOutput) => void): void;
    listExperiments(args: ListExperimentsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListExperimentsCommandOutput) => void): void;
    /**
     * <p>Lists your experiment templates.</p>
     */
    listExperimentTemplates(args: ListExperimentTemplatesCommandInput, options?: __HttpHandlerOptions): Promise<ListExperimentTemplatesCommandOutput>;
    listExperimentTemplates(args: ListExperimentTemplatesCommandInput, cb: (err: any, data?: ListExperimentTemplatesCommandOutput) => void): void;
    listExperimentTemplates(args: ListExperimentTemplatesCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListExperimentTemplatesCommandOutput) => void): void;
    /**
     * <p>Lists the tags for the specified resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Starts running an experiment from the specified experiment template.</p>
     */
    startExperiment(args: StartExperimentCommandInput, options?: __HttpHandlerOptions): Promise<StartExperimentCommandOutput>;
    startExperiment(args: StartExperimentCommandInput, cb: (err: any, data?: StartExperimentCommandOutput) => void): void;
    startExperiment(args: StartExperimentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartExperimentCommandOutput) => void): void;
    /**
     * <p>Stops the specified experiment.</p>
     */
    stopExperiment(args: StopExperimentCommandInput, options?: __HttpHandlerOptions): Promise<StopExperimentCommandOutput>;
    stopExperiment(args: StopExperimentCommandInput, cb: (err: any, data?: StopExperimentCommandOutput) => void): void;
    stopExperiment(args: StopExperimentCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopExperimentCommandOutput) => void): void;
    /**
     * <p>Applies the specified tags to the specified resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the specified tags from the specified resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates the specified experiment template.</p>
     */
    updateExperimentTemplate(args: UpdateExperimentTemplateCommandInput, options?: __HttpHandlerOptions): Promise<UpdateExperimentTemplateCommandOutput>;
    updateExperimentTemplate(args: UpdateExperimentTemplateCommandInput, cb: (err: any, data?: UpdateExperimentTemplateCommandOutput) => void): void;
    updateExperimentTemplate(args: UpdateExperimentTemplateCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateExperimentTemplateCommandOutput) => void): void;
}
