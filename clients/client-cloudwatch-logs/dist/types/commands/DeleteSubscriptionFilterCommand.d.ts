import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteSubscriptionFilterRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteSubscriptionFilterCommandInput extends DeleteSubscriptionFilterRequest {
}
export interface DeleteSubscriptionFilterCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified subscription filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteSubscriptionFilterCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteSubscriptionFilterCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DeleteSubscriptionFilterCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSubscriptionFilterCommandInput} for command's `input` shape.
 * @see {@link DeleteSubscriptionFilterCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteSubscriptionFilterCommand extends $Command<DeleteSubscriptionFilterCommandInput, DeleteSubscriptionFilterCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteSubscriptionFilterCommandInput;
    constructor(input: DeleteSubscriptionFilterCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteSubscriptionFilterCommandInput, DeleteSubscriptionFilterCommandOutput>;
    private serialize;
    private deserialize;
}
