import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { PutPermissionRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutPermissionCommandInput extends PutPermissionRequest {
}
export interface PutPermissionCommandOutput extends __MetadataBearer {
}
/**
 * <p>Running <code>PutPermission</code> permits the specified AWS account or AWS organization
 *       to put events to the specified <i>event bus</i>. Amazon EventBridge (CloudWatch
 *       Events) rules in your account are triggered by these events arriving to an event bus in your
 *       account. </p>
 *          <p>For another account to send events to your account, that external account must have an
 *       EventBridge rule with your account's event bus as a target.</p>
 *
 *          <p>To enable multiple AWS accounts to put events to your event bus, run
 *         <code>PutPermission</code> once for each of these accounts. Or, if all the accounts are
 *       members of the same AWS organization, you can run <code>PutPermission</code> once specifying
 *         <code>Principal</code> as "*" and specifying the AWS organization ID in
 *         <code>Condition</code>, to grant permissions to all accounts in that organization.</p>
 *
 *          <p>If you grant permissions using an organization, then accounts in that organization must
 *       specify a <code>RoleArn</code> with proper permissions when they use <code>PutTarget</code> to
 *       add your account's event bus as a target. For more information, see <a href="https://docs.aws.amazon.com/eventbridge/latest/userguide/eventbridge-cross-account-event-delivery.html">Sending and
 *         Receiving Events Between AWS Accounts</a> in the <i>Amazon EventBridge User
 *         Guide</i>.</p>
 *
 *          <p>The permission policy on the default event bus cannot exceed 10 KB in size.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, PutPermissionCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, PutPermissionCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new PutPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutPermissionCommandInput} for command's `input` shape.
 * @see {@link PutPermissionCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutPermissionCommand extends $Command<PutPermissionCommandInput, PutPermissionCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: PutPermissionCommandInput;
    constructor(input: PutPermissionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutPermissionCommandInput, PutPermissionCommandOutput>;
    private serialize;
    private deserialize;
}
