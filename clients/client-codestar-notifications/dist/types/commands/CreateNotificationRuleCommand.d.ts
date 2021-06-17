import { CodestarNotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodestarNotificationsClient";
import { CreateNotificationRuleRequest, CreateNotificationRuleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateNotificationRuleCommandInput extends CreateNotificationRuleRequest {
}
export interface CreateNotificationRuleCommandOutput extends CreateNotificationRuleResult, __MetadataBearer {
}
/**
 * <p>Creates a notification rule for a resource. The rule specifies the events you want
 *             notifications about and the targets (such as SNS topics) where you want to receive
 *             them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, CreateNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, CreateNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new CreateNotificationRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link CreateNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateNotificationRuleCommand extends $Command<CreateNotificationRuleCommandInput, CreateNotificationRuleCommandOutput, CodestarNotificationsClientResolvedConfig> {
    readonly input: CreateNotificationRuleCommandInput;
    constructor(input: CreateNotificationRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodestarNotificationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateNotificationRuleCommandInput, CreateNotificationRuleCommandOutput>;
    private serialize;
    private deserialize;
}
