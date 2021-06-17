import { GlueClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GlueClient";
import { StartExportLabelsTaskRunRequest, StartExportLabelsTaskRunResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartExportLabelsTaskRunCommandInput extends StartExportLabelsTaskRunRequest {
}
export interface StartExportLabelsTaskRunCommandOutput extends StartExportLabelsTaskRunResponse, __MetadataBearer {
}
/**
 * <p>Begins an asynchronous task to export all labeled data for a particular transform. This
 *       task is the only label-related API call that is not part of the typical active learning
 *       workflow. You typically use <code>StartExportLabelsTaskRun</code> when you want to work with
 *       all of your existing labels at the same time, such as when you want to remove or change labels
 *       that were previously submitted as truth. This API operation accepts the
 *         <code>TransformId</code> whose labels you want to export and an Amazon Simple Storage
 *       Service (Amazon S3) path to export the labels to. The operation returns a
 *         <code>TaskRunId</code>. You can check on the status of your task run by calling the
 *         <code>GetMLTaskRun</code> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GlueClient, StartExportLabelsTaskRunCommand } from "@aws-sdk/client-glue"; // ES Modules import
 * // const { GlueClient, StartExportLabelsTaskRunCommand } = require("@aws-sdk/client-glue"); // CommonJS import
 * const client = new GlueClient(config);
 * const command = new StartExportLabelsTaskRunCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExportLabelsTaskRunCommandInput} for command's `input` shape.
 * @see {@link StartExportLabelsTaskRunCommandOutput} for command's `response` shape.
 * @see {@link GlueClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartExportLabelsTaskRunCommand extends $Command<StartExportLabelsTaskRunCommandInput, StartExportLabelsTaskRunCommandOutput, GlueClientResolvedConfig> {
    readonly input: StartExportLabelsTaskRunCommandInput;
    constructor(input: StartExportLabelsTaskRunCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GlueClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartExportLabelsTaskRunCommandInput, StartExportLabelsTaskRunCommandOutput>;
    private serialize;
    private deserialize;
}
