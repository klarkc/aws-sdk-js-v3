import { CloudWatchLogsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchLogsClient";
import { PutRetentionPolicyRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutRetentionPolicyCommandInput extends PutRetentionPolicyRequest {
}
export interface PutRetentionPolicyCommandOutput extends __MetadataBearer {
}
/**
 * <p>Sets the retention of the specified log group. A retention policy allows you to
 *       configure the number of days for which to retain log events in the specified log
 *       group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchLogsClient, PutRetentionPolicyCommand } from "@aws-sdk/client-cloudwatch-logs"; // ES Modules import
 * // const { CloudWatchLogsClient, PutRetentionPolicyCommand } = require("@aws-sdk/client-cloudwatch-logs"); // CommonJS import
 * const client = new CloudWatchLogsClient(config);
 * const command = new PutRetentionPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutRetentionPolicyCommandInput} for command's `input` shape.
 * @see {@link PutRetentionPolicyCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchLogsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutRetentionPolicyCommand extends $Command<PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput, CloudWatchLogsClientResolvedConfig> {
    readonly input: PutRetentionPolicyCommandInput;
    constructor(input: PutRetentionPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchLogsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutRetentionPolicyCommandInput, PutRetentionPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
