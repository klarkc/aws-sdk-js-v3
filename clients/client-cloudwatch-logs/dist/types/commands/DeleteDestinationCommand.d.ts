import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteDestinationRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteDestinationCommandInput extends DeleteDestinationRequest {
}
export interface DeleteDestinationCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified destination, and eventually disables all the
 *       subscription filters that publish to it. This operation does not delete the
 *       physical resource encapsulated by the destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteDestinationCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteDestinationCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DeleteDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDestinationCommandInput} for command's `input` shape.
 * @see {@link DeleteDestinationCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteDestinationCommand extends $Command<DeleteDestinationCommandInput, DeleteDestinationCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteDestinationCommandInput;
    constructor(input: DeleteDestinationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteDestinationCommandInput, DeleteDestinationCommandOutput>;
    private serialize;
    private deserialize;
}
