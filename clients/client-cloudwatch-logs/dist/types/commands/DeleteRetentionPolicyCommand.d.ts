import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { DeleteRetentionPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRetentionPolicyCommandInput extends DeleteRetentionPolicyRequest {
}
export interface DeleteRetentionPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified retention policy.</p>
 *          <p>Log events do not expire if they belong to log groups without a retention policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, DeleteRetentionPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, DeleteRetentionPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new DeleteRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRetentionPolicyCommand extends $Command<DeleteRetentionPolicyCommandInput, DeleteRetentionPolicyCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: DeleteRetentionPolicyCommandInput;
    constructor(input: DeleteRetentionPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRetentionPolicyCommandInput, DeleteRetentionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
