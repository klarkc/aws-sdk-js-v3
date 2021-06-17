import { CloudWatchEventsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CloudWatchEventsClient";
import { DisableRuleRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableRuleCommandInput extends DisableRuleRequest {
}
export interface DisableRuleCommandOutput extends __MetadataBearer {
}
/**
 * <p>Disables the specified rule. A disabled rule won't match any events, and won't
 *       self-trigger if it has a schedule expression.</p>
 *
 *          <p>When you disable a rule, incoming events might continue to match to the disabled rule.
 *       Allow a short period of time for changes to take effect.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DisableRuleCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DisableRuleCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DisableRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableRuleCommandInput} for command's `input` shape.
 * @see {@link DisableRuleCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableRuleCommand extends $Command<DisableRuleCommandInput, DisableRuleCommandOutput, CloudWatchEventsClientResolvedConfig> {
    readonly input: DisableRuleCommandInput;
    constructor(input: DisableRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CloudWatchEventsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableRuleCommandInput, DisableRuleCommandOutput>;
    private serialize;
    private deserialize;
}
