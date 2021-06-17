import { RDSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../RDSClient";
import { ExportTask } from "../models/models_0";
import { StartExportTaskMessage } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartExportTaskCommandInput extends StartExportTaskMessage {
}
export interface StartExportTaskCommandOutput extends ExportTask, __MetadataBearer {
}
/**
 * <p>Starts an export of a snapshot to Amazon S3.
 *             The provided IAM role must have access to the S3 bucket.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, StartExportTaskCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, StartExportTaskCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new StartExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartExportTaskCommandInput} for command's `input` shape.
 * @see {@link StartExportTaskCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartExportTaskCommand extends $Command<StartExportTaskCommandInput, StartExportTaskCommandOutput, RDSClientResolvedConfig> {
    readonly input: StartExportTaskCommandInput;
    constructor(input: StartExportTaskCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: RDSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartExportTaskCommandInput, StartExportTaskCommandOutput>;
    private serialize;
    private deserialize;
}
