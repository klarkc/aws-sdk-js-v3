import { CodestarNotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodestarNotificationsClient";
import { DescribeNotificationRuleRequest, DescribeNotificationRuleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeNotificationRuleCommandInput extends DescribeNotificationRuleRequest {
}
export interface DescribeNotificationRuleCommandOutput extends DescribeNotificationRuleResult, __MetadataBearer {
}
/**
 * <p>Returns information about a specified notification rule.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DescribeNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, DescribeNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new DescribeNotificationRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link DescribeNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeNotificationRuleCommand extends $Command<DescribeNotificationRuleCommandInput, DescribeNotificationRuleCommandOutput, CodestarNotificationsClientResolvedConfig> {
    readonly input: DescribeNotificationRuleCommandInput;
    constructor(input: DescribeNotificationRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodestarNotificationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeNotificationRuleCommandInput, DescribeNotificationRuleCommandOutput>;
    private serialize;
    private deserialize;
}
