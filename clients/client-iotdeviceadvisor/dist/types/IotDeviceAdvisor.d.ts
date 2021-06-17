import { IotDeviceAdvisorClient } from "./IotDeviceAdvisorClient";
import { CreateSuiteDefinitionCommandInput, CreateSuiteDefinitionCommandOutput } from "./commands/CreateSuiteDefinitionCommand";
import { DeleteSuiteDefinitionCommandInput, DeleteSuiteDefinitionCommandOutput } from "./commands/DeleteSuiteDefinitionCommand";
import { GetSuiteDefinitionCommandInput, GetSuiteDefinitionCommandOutput } from "./commands/GetSuiteDefinitionCommand";
import { GetSuiteRunCommandInput, GetSuiteRunCommandOutput } from "./commands/GetSuiteRunCommand";
import { GetSuiteRunReportCommandInput, GetSuiteRunReportCommandOutput } from "./commands/GetSuiteRunReportCommand";
import { ListSuiteDefinitionsCommandInput, ListSuiteDefinitionsCommandOutput } from "./commands/ListSuiteDefinitionsCommand";
import { ListSuiteRunsCommandInput, ListSuiteRunsCommandOutput } from "./commands/ListSuiteRunsCommand";
import { ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput } from "./commands/ListTagsForResourceCommand";
import { StartSuiteRunCommandInput, StartSuiteRunCommandOutput } from "./commands/StartSuiteRunCommand";
import { StopSuiteRunCommandInput, StopSuiteRunCommandOutput } from "./commands/StopSuiteRunCommand";
import { TagResourceCommandInput, TagResourceCommandOutput } from "./commands/TagResourceCommand";
import { UntagResourceCommandInput, UntagResourceCommandOutput } from "./commands/UntagResourceCommand";
import { UpdateSuiteDefinitionCommandInput, UpdateSuiteDefinitionCommandOutput } from "./commands/UpdateSuiteDefinitionCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p>AWS IoT Core Device Advisor is a cloud-based, fully managed test capability for validating IoT devices during device software development. Device Advisor provides pre-built tests that you can use to validate IoT devices for reliable and secure connectivity with AWS IoT Core before deploying devices to production. By using Device Advisor, you can confirm that your devices can connect to AWS IoT Core, follow security best practices and, if applicable, receive software updates from IoT Device Management. You can also download signed qualification reports to submit to the AWS Partner Network to get your device qualified for the AWS Partner Device Catalog without the need to send your device in and wait for it to be tested.</p>
 */
export declare class IotDeviceAdvisor extends IotDeviceAdvisorClient {
    /**
     * <p>Creates a Device Advisor test suite.</p>
     */
    createSuiteDefinition(args: CreateSuiteDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<CreateSuiteDefinitionCommandOutput>;
    createSuiteDefinition(args: CreateSuiteDefinitionCommandInput, cb: (err: any, data?: CreateSuiteDefinitionCommandOutput) => void): void;
    createSuiteDefinition(args: CreateSuiteDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: CreateSuiteDefinitionCommandOutput) => void): void;
    /**
     * <p>Deletes a Device Advisor test suite.</p>
     */
    deleteSuiteDefinition(args: DeleteSuiteDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<DeleteSuiteDefinitionCommandOutput>;
    deleteSuiteDefinition(args: DeleteSuiteDefinitionCommandInput, cb: (err: any, data?: DeleteSuiteDefinitionCommandOutput) => void): void;
    deleteSuiteDefinition(args: DeleteSuiteDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: DeleteSuiteDefinitionCommandOutput) => void): void;
    /**
     * <p>Gets information about a Device Advisor test suite.</p>
     */
    getSuiteDefinition(args: GetSuiteDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<GetSuiteDefinitionCommandOutput>;
    getSuiteDefinition(args: GetSuiteDefinitionCommandInput, cb: (err: any, data?: GetSuiteDefinitionCommandOutput) => void): void;
    getSuiteDefinition(args: GetSuiteDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSuiteDefinitionCommandOutput) => void): void;
    /**
     * <p>Gets information about a Device Advisor test suite run.</p>
     */
    getSuiteRun(args: GetSuiteRunCommandInput, options?: __HttpHandlerOptions): Promise<GetSuiteRunCommandOutput>;
    getSuiteRun(args: GetSuiteRunCommandInput, cb: (err: any, data?: GetSuiteRunCommandOutput) => void): void;
    getSuiteRun(args: GetSuiteRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSuiteRunCommandOutput) => void): void;
    /**
     * <p>Gets a report download link for a successful Device Advisor qualifying test suite run.</p>
     */
    getSuiteRunReport(args: GetSuiteRunReportCommandInput, options?: __HttpHandlerOptions): Promise<GetSuiteRunReportCommandOutput>;
    getSuiteRunReport(args: GetSuiteRunReportCommandInput, cb: (err: any, data?: GetSuiteRunReportCommandOutput) => void): void;
    getSuiteRunReport(args: GetSuiteRunReportCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetSuiteRunReportCommandOutput) => void): void;
    /**
     * <p>Lists the Device Advisor test suites you have created.</p>
     */
    listSuiteDefinitions(args: ListSuiteDefinitionsCommandInput, options?: __HttpHandlerOptions): Promise<ListSuiteDefinitionsCommandOutput>;
    listSuiteDefinitions(args: ListSuiteDefinitionsCommandInput, cb: (err: any, data?: ListSuiteDefinitionsCommandOutput) => void): void;
    listSuiteDefinitions(args: ListSuiteDefinitionsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSuiteDefinitionsCommandOutput) => void): void;
    /**
     * <p>Lists the runs of the specified Device Advisor test suite.
     *             You can list all runs of the test suite, or the runs of a specific version of the test suite.</p>
     */
    listSuiteRuns(args: ListSuiteRunsCommandInput, options?: __HttpHandlerOptions): Promise<ListSuiteRunsCommandOutput>;
    listSuiteRuns(args: ListSuiteRunsCommandInput, cb: (err: any, data?: ListSuiteRunsCommandOutput) => void): void;
    listSuiteRuns(args: ListSuiteRunsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListSuiteRunsCommandOutput) => void): void;
    /**
     * <p>Lists the tags attached to an IoT Device Advisor resource.</p>
     */
    listTagsForResource(args: ListTagsForResourceCommandInput, options?: __HttpHandlerOptions): Promise<ListTagsForResourceCommandOutput>;
    listTagsForResource(args: ListTagsForResourceCommandInput, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    listTagsForResource(args: ListTagsForResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: ListTagsForResourceCommandOutput) => void): void;
    /**
     * <p>Starts a Device Advisor test suite run.</p>
     */
    startSuiteRun(args: StartSuiteRunCommandInput, options?: __HttpHandlerOptions): Promise<StartSuiteRunCommandOutput>;
    startSuiteRun(args: StartSuiteRunCommandInput, cb: (err: any, data?: StartSuiteRunCommandOutput) => void): void;
    startSuiteRun(args: StartSuiteRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StartSuiteRunCommandOutput) => void): void;
    /**
     * <p>Stops a Device Advisor test suite run that is currently running.</p>
     */
    stopSuiteRun(args: StopSuiteRunCommandInput, options?: __HttpHandlerOptions): Promise<StopSuiteRunCommandOutput>;
    stopSuiteRun(args: StopSuiteRunCommandInput, cb: (err: any, data?: StopSuiteRunCommandOutput) => void): void;
    stopSuiteRun(args: StopSuiteRunCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: StopSuiteRunCommandOutput) => void): void;
    /**
     * <p>Adds to and modifies existing tags of an IoT Device Advisor resource.</p>
     */
    tagResource(args: TagResourceCommandInput, options?: __HttpHandlerOptions): Promise<TagResourceCommandOutput>;
    tagResource(args: TagResourceCommandInput, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    tagResource(args: TagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: TagResourceCommandOutput) => void): void;
    /**
     * <p>Removes tags from an IoT Device Advisor resource.</p>
     */
    untagResource(args: UntagResourceCommandInput, options?: __HttpHandlerOptions): Promise<UntagResourceCommandOutput>;
    untagResource(args: UntagResourceCommandInput, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    untagResource(args: UntagResourceCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UntagResourceCommandOutput) => void): void;
    /**
     * <p>Updates a Device Advisor test suite.</p>
     */
    updateSuiteDefinition(args: UpdateSuiteDefinitionCommandInput, options?: __HttpHandlerOptions): Promise<UpdateSuiteDefinitionCommandOutput>;
    updateSuiteDefinition(args: UpdateSuiteDefinitionCommandInput, cb: (err: any, data?: UpdateSuiteDefinitionCommandOutput) => void): void;
    updateSuiteDefinition(args: UpdateSuiteDefinitionCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: UpdateSuiteDefinitionCommandOutput) => void): void;
}
