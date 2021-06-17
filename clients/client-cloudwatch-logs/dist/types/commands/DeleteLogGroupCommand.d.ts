import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteLogGroupRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLogGroupCommandInput extends DeleteLogGroupRequest {
}
export interface DeleteLogGroupCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified log group and permanently deletes all the archived
 *       log events associated with the log group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteLogGroupCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteLogGroupCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DeleteLogGroupCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLogGroupCommandInput} for command's `input` shape.
 * @see {@link DeleteLogGroupCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLogGroupCommand extends $Command<DeleteLogGroupCommandInput, DeleteLogGroupCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteLogGroupCommandInput;
    constructor(input: DeleteLogGroupCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLogGroupCommandInput, DeleteLogGroupCommandOutput>;
    private serialize;
    private deserialize;
}
