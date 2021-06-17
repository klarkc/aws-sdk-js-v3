import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteLogStreamRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLogStreamCommandInput extends DeleteLogStreamRequest {
}
export interface DeleteLogStreamCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified log stream and permanently deletes all the archived log events associated
 *       with the log stream.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteLogStreamCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteLogStreamCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DeleteLogStreamCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLogStreamCommandInput} for command's `input` shape.
 * @see {@link DeleteLogStreamCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLogStreamCommand extends $Command<DeleteLogStreamCommandInput, DeleteLogStreamCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteLogStreamCommandInput;
    constructor(input: DeleteLogStreamCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLogStreamCommandInput, DeleteLogStreamCommandOutput>;
    private serialize;
    private deserialize;
}
