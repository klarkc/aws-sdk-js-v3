import { IoTEventsClient } from "./IoTEventsClient";
import { CreateAlarmModelCommandInput, CreateAlarmModelCommandOutput } from "./commands/CreateAlarmModelCommand";
import { CreateDetectorModelCommandInput, CreateDetectorModelCommandOutput } from "./commands/CreateDetectorModelCommand";
import { CreateInputCommandInput, CreateInputCommandOutput } from "./commands/CreateInputCommand";
import { DeleteAlarmModelCommandInput, DeleteAlarmModelCommandOutput } from "./commands/DeleteAlarmModelCommand";
import { DeleteDetectorModelCommandInput, DeleteDetectorModelCommandOutput } from "./commands/DeleteDetectorModelCommand";
import { DeleteInputCommandInput, DeleteInputCommandOutput } from "./commands/DeleteInputCommand";
import { DescribeAlarmModelCommandInput, DescribeAlarmModelCommandOutput } from "./commands/DescribeAlarmModelCommand";
import { DescribeDetectorModelAnalysisCommandInput, DescribeDetectorModelAnalysisCommandOutput } from "./commands/DescribeDetectorModelAnalysisCommand";
import { DescribeDetectorModelCommandInput, DescribeDetectorModelCommandOutput } from "./commands/DescribeDetectorModelCommand";
import { DescribeInputCommandInput, DescribeInputCommandOutput } from "./commands/DescribeInputCommand";
import { DescribeLoggingOptionsCommandInput, DescribeLoggingOptionsCommandOutput } from "./commands/DescribeLoggingOptionsCommand";
import { GetDetectorModelAnalysisResultsCommandInput, GetDetectorModelAnalysisResultsCommandOutput } from "./commands/GetDetectorModelAnalysisResultsCommand";
import { ListAlarmModelVersionsCommandInput, ListAlarmModelVersionsCommandOutput } from "./commands/ListAlarmModelVersionsCommand";
import { ListAlarmModelsCommandInput, ListAlarmModelsCommandOutput } from "./commands/ListAlarmModelsCommand";
import { ListDetectorModelVersionsCommandInput, ListDetectorModelVersionsCommandOutput } from "./commands/ListDetectorModelVersionsCommand";
import { ListDetectorModelsCommandInput, ListDetectorModelsCommandOutput } from "./commands/ListDetectorModelsCommand";
import { ListInputRoutingsCommandInput, ListInputRoutingsCommandOutput } from "./commands/ListInputRoutingsCommand";
import { ListInputsCommandInput, ListInputsCommandOutput } from "./commands/ListInputsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { PutLoggingOptionsCommandInput, PutLoggingOptionsCommandOutput } from "./commands/PutLoggingOptionsCommand";
import { StartDetectorModelAnalysisCommandInput, StartDetectorModelAnalysisCommandOutput } from "./commands/StartDetectorModelAnalysisCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateAlarmModelCommandInput, UpdateAlarmModelCommandOutput } from "./commands/UpdateAlarmModelCommand";
import { UpdateDetectorModelCommandInput, UpdateDetectorModelCommandOutput } from "./commands/UpdateDetectorModelCommand";
import { UpdateInputCommandInput, UpdateInputCommandOutput } from "./commands/UpdateInputCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS IoT Events monitors your equipment or device fleets for failures or changes in operation, and
 *       triggers actions when such events occur. You can use AWS IoT Events API operations to create, read,
 *       update, and delete inputs and detector models, and to list their versions.</p>
 */
export declare class IoTEvents extends IoTEventsClient {
    /**
     * <p>Creates an alarm model to monitor an AWS IoT Events input attribute. You can use the alarm to get
     *       notified when the value is outside a specified range. For more information, see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/create-alarms.html">Create an
     *         alarm model</a> in the <i>AWS IoT Events Developer Guide</i>.</p>
     */
    createAlarmModel(args: CreateAlarmModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateAlarmModelCommandOutput>;
    createAlarmModel(args: CreateAlarmModelCommandInput, cb: (err: any, data?: CreateAlarmModelCommandOutput) => void): void;
    createAlarmModel(args: CreateAlarmModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateAlarmModelCommandOutput) => void): void;
    /**
     * <p>Creates a detector model.</p>
     */
    createDetectorModel(args: CreateDetectorModelCommandInput, options?: __HttpHandlerOptions): Promise<CreateDetectorModelCommandOutput>;
    createDetectorModel(args: CreateDetectorModelCommandInput, cb: (err: any, data?: CreateDetectorModelCommandOutput) => void): void;
    createDetectorModel(args: CreateDetectorModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateDetectorModelCommandOutput) => void): void;
    /**
     * <p>Creates an input.</p>
     */
    createInput(args: CreateInputCommandInput, options?: __HttpHandlerOptions): Promise<CreateInputCommandOutput>;
    createInput(args: CreateInputCommandInput, cb: (err: any, data?: CreateInputCommandOutput) => void): void;
    createInput(args: CreateInputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateInputCommandOutput) => void): void;
    /**
     * <p>Deletes an alarm model. Any alarm instances that were created based on this alarm model
     *       are also deleted. This action can't be undone.</p>
     */
    deleteAlarmModel(args: DeleteAlarmModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteAlarmModelCommandOutput>;
    deleteAlarmModel(args: DeleteAlarmModelCommandInput, cb: (err: any, data?: DeleteAlarmModelCommandOutput) => void): void;
    deleteAlarmModel(args: DeleteAlarmModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteAlarmModelCommandOutput) => void): void;
    /**
     * <p>Deletes a detector model. Any active instances of the detector model are also
     *       deleted.</p>
     */
    deleteDetectorModel(args: DeleteDetectorModelCommandInput, options?: __HttpHandlerOptions): Promise<DeleteDetectorModelCommandOutput>;
    deleteDetectorModel(args: DeleteDetectorModelCommandInput, cb: (err: any, data?: DeleteDetectorModelCommandOutput) => void): void;
    deleteDetectorModel(args: DeleteDetectorModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteDetectorModelCommandOutput) => void): void;
    /**
     * <p>Deletes an input.</p>
     */
    deleteInput(args: DeleteInputCommandInput, options?: __HttpHandlerOptions): Promise<DeleteInputCommandOutput>;
    deleteInput(args: DeleteInputCommandInput, cb: (err: any, data?: DeleteInputCommandOutput) => void): void;
    deleteInput(args: DeleteInputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteInputCommandOutput) => void): void;
    /**
     * <p>Retrieves information about an alarm model. If you don't specify a value for the
     *         <code>alarmModelVersion</code> parameter, the latest version is returned.</p>
     */
    describeAlarmModel(args: DescribeAlarmModelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeAlarmModelCommandOutput>;
    describeAlarmModel(args: DescribeAlarmModelCommandInput, cb: (err: any, data?: DescribeAlarmModelCommandOutput) => void): void;
    describeAlarmModel(args: DescribeAlarmModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeAlarmModelCommandOutput) => void): void;
    /**
     * <p>Describes a detector model. If the <code>version</code> parameter is not specified,
     *       information about the latest version is returned.</p>
     */
    describeDetectorModel(args: DescribeDetectorModelCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDetectorModelCommandOutput>;
    describeDetectorModel(args: DescribeDetectorModelCommandInput, cb: (err: any, data?: DescribeDetectorModelCommandOutput) => void): void;
    describeDetectorModel(args: DescribeDetectorModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDetectorModelCommandOutput) => void): void;
    /**
     * <p>Retrieves runtime information about a detector model analysis.</p>
     *          <note>
     *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
     *          </note>
     */
    describeDetectorModelAnalysis(args: DescribeDetectorModelAnalysisCommandInput, options?: __HttpHandlerOptions): Promise<DescribeDetectorModelAnalysisCommandOutput>;
    describeDetectorModelAnalysis(args: DescribeDetectorModelAnalysisCommandInput, cb: (err: any, data?: DescribeDetectorModelAnalysisCommandOutput) => void): void;
    describeDetectorModelAnalysis(args: DescribeDetectorModelAnalysisCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeDetectorModelAnalysisCommandOutput) => void): void;
    /**
     * <p>Describes an input.</p>
     */
    describeInput(args: DescribeInputCommandInput, options?: __HttpHandlerOptions): Promise<DescribeInputCommandOutput>;
    describeInput(args: DescribeInputCommandInput, cb: (err: any, data?: DescribeInputCommandOutput) => void): void;
    describeInput(args: DescribeInputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeInputCommandOutput) => void): void;
    /**
     * <p>Retrieves the current settings of the AWS IoT Events logging options.</p>
     */
    describeLoggingOptions(args: DescribeLoggingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<DescribeLoggingOptionsCommandOutput>;
    describeLoggingOptions(args: DescribeLoggingOptionsCommandInput, cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void): void;
    describeLoggingOptions(args: DescribeLoggingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DescribeLoggingOptionsCommandOutput) => void): void;
    /**
     * <p>Retrieves one or more analysis results of the detector model.</p>
     *          <note>
     *             <p>After AWS IoT Events starts analyzing your detector model, you have up to 24 hours to retrieve the analysis results.</p>
     *          </note>
     */
    getDetectorModelAnalysisResults(args: GetDetectorModelAnalysisResultsCommandInput, options?: __HttpHandlerOptions): Promise<GetDetectorModelAnalysisResultsCommandOutput>;
    getDetectorModelAnalysisResults(args: GetDetectorModelAnalysisResultsCommandInput, cb: (err: any, data?: GetDetectorModelAnalysisResultsCommandOutput) => void): void;
    getDetectorModelAnalysisResults(args: GetDetectorModelAnalysisResultsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetDetectorModelAnalysisResultsCommandOutput) => void): void;
    /**
     * <p>Lists the alarm models that you created. The operation returns only the metadata
     *       associated with each alarm model.</p>
     */
    listAlarmModels(args: ListAlarmModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListAlarmModelsCommandOutput>;
    listAlarmModels(args: ListAlarmModelsCommandInput, cb: (err: any, data?: ListAlarmModelsCommandOutput) => void): void;
    listAlarmModels(args: ListAlarmModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAlarmModelsCommandOutput) => void): void;
    /**
     * <p>Lists all the versions of an alarm model. The operation returns only the metadata
     *       associated with each alarm model version.</p>
     */
    listAlarmModelVersions(args: ListAlarmModelVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListAlarmModelVersionsCommandOutput>;
    listAlarmModelVersions(args: ListAlarmModelVersionsCommandInput, cb: (err: any, data?: ListAlarmModelVersionsCommandOutput) => void): void;
    listAlarmModelVersions(args: ListAlarmModelVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListAlarmModelVersionsCommandOutput) => void): void;
    /**
     * <p>Lists the detector models you have created. Only the metadata associated with each
     *       detector model is returned.</p>
     */
    listDetectorModels(args: ListDetectorModelsCommandInput, options?: __HttpHandlerOptions): Promise<ListDetectorModelsCommandOutput>;
    listDetectorModels(args: ListDetectorModelsCommandInput, cb: (err: any, data?: ListDetectorModelsCommandOutput) => void): void;
    listDetectorModels(args: ListDetectorModelsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDetectorModelsCommandOutput) => void): void;
    /**
     * <p>Lists all the versions of a detector model. Only the metadata associated with each
     *       detector model version is returned.</p>
     */
    listDetectorModelVersions(args: ListDetectorModelVersionsCommandInput, options?: __HttpHandlerOptions): Promise<ListDetectorModelVersionsCommandOutput>;
    listDetectorModelVersions(args: ListDetectorModelVersionsCommandInput, cb: (err: any, data?: ListDetectorModelVersionsCommandOutput) => void): void;
    listDetectorModelVersions(args: ListDetectorModelVersionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListDetectorModelVersionsCommandOutput) => void): void;
    /**
     * <p>
     *       Lists one or more input routings.
     *     </p>
     */
    listInputRoutings(args: ListInputRoutingsCommandInput, options?: __HttpHandlerOptions): Promise<ListInputRoutingsCommandOutput>;
    listInputRoutings(args: ListInputRoutingsCommandInput, cb: (err: any, data?: ListInputRoutingsCommandOutput) => void): void;
    listInputRoutings(args: ListInputRoutingsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInputRoutingsCommandOutput) => void): void;
    /**
     * <p>Lists the inputs you have created.</p>
     */
    listInputs(args: ListInputsCommandInput, options?: __HttpHandlerOptions): Promise<ListInputsCommandOutput>;
    listInputs(args: ListInputsCommandInput, cb: (err: any, data?: ListInputsCommandOutput) => void): void;
    listInputs(args: ListInputsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListInputsCommandOutput) => void): void;
    /**
     * <p>Lists the tags (metadata) you have assigned to the resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Sets or updates the AWS IoT Events logging options.</p>
     *          <p>If you update the value of any <code>loggingOptions</code> field, it takes up to one
     *       minute for the change to take effect. If you change the policy attached to the role you
     *       specified in the <code>roleArn</code> field (for example, to correct an invalid policy), it
     *       takes up to five minutes for that change to take effect.</p>
     */
    putLoggingOptions(args: PutLoggingOptionsCommandInput, options?: __HttpHandlerOptions): Promise<PutLoggingOptionsCommandOutput>;
    putLoggingOptions(args: PutLoggingOptionsCommandInput, cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void): void;
    putLoggingOptions(args: PutLoggingOptionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: PutLoggingOptionsCommandOutput) => void): void;
    /**
     * <p>Performs an analysis of your detector model. For more information,
     *       see <a href="https://docs.aws.amazon.com/iotevents/latest/developerguide/iotevents-analyze-api.html">Troubleshooting a detector model</a>
     *       in the <i>AWS IoT Events Developer Guide</i>.</p>
     */
    startDetectorModelAnalysis(args: StartDetectorModelAnalysisCommandInput, options?: __HttpHandlerOptions): Promise<StartDetectorModelAnalysisCommandOutput>;
    startDetectorModelAnalysis(args: StartDetectorModelAnalysisCommandInput, cb: (err: any, data?: StartDetectorModelAnalysisCommandOutput) => void): void;
    startDetectorModelAnalysis(args: StartDetectorModelAnalysisCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartDetectorModelAnalysisCommandOutput) => void): void;
    /**
     * <p>Adds to or modifies the tags of the given resource. Tags are metadata that can be used to
     *       manage a resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes the given tags (metadata) from the resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates an alarm model. Any alarms that were created based on the previous version are
     *       deleted and then created again as new data arrives.</p>
     */
    updateAlarmModel(args: UpdateAlarmModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateAlarmModelCommandOutput>;
    updateAlarmModel(args: UpdateAlarmModelCommandInput, cb: (err: any, data?: UpdateAlarmModelCommandOutput) => void): void;
    updateAlarmModel(args: UpdateAlarmModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateAlarmModelCommandOutput) => void): void;
    /**
     * <p>Updates a detector model. Detectors (instances) spawned by the previous version are
     *       deleted and then re-created as new inputs arrive.</p>
     */
    updateDetectorModel(args: UpdateDetectorModelCommandInput, options?: __HttpHandlerOptions): Promise<UpdateDetectorModelCommandOutput>;
    updateDetectorModel(args: UpdateDetectorModelCommandInput, cb: (err: any, data?: UpdateDetectorModelCommandOutput) => void): void;
    updateDetectorModel(args: UpdateDetectorModelCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateDetectorModelCommandOutput) => void): void;
    /**
     * <p>Updates an input.</p>
     */
    updateInput(args: UpdateInputCommandInput, options?: __HttpHandlerOptions): Promise<UpdateInputCommandOutput>;
    updateInput(args: UpdateInputCommandInput, cb: (err: any, data?: UpdateInputCommandOutput) => void): void;
    updateInput(args: UpdateInputCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateInputCommandOutput) => void): void;
}
