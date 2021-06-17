import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { CancelExportTaskRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CancelExportTaskCommandInput extends CancelExportTaskRequest {
}
export interface CancelExportTaskCommandOutput extends __MetadataBearer {
}
/**
 * <p>Cancels the specified export task.</p>
 *          <p>The task must be in the <code>PENDING</code> or <code>RUNNING</code> state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, CancelExportTaskCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, CancelExportTaskCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new CancelExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelExportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelExportTaskCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CancelExportTaskCommand extends $Command<CancelExportTaskCommandInput, CancelExportTaskCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: CancelExportTaskCommandInput;
    constructor(input: CancelExportTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CancelExportTaskCommandInput, CancelExportTaskCommandOutput>;
    private serialize;
    private deserialize;
}
