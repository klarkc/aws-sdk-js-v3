import { CodestarNotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodestarNotificationsClient";
import { UpdateNotificationRuleRequest, UpdateNotificationRuleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateNotificationRuleCommandInput extends UpdateNotificationRuleRequest {
}
export interface UpdateNotificationRuleCommandOutput extends UpdateNotificationRuleResult, __MetadataBearer {
}
/**
 * <p>Updates a notification rule for a resource. You can change the events that trigger the
 *             notification rule, the status of the rule, and the targets that receive the
 *             notifications.</p>
 *          <note>
 *             <p>To add or remove tags for a notification rule, you must use <a>TagResource</a> and <a>UntagResource</a>.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, UpdateNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, UpdateNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new UpdateNotificationRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateNotificationRuleCommand extends $Command<UpdateNotificationRuleCommandInput, UpdateNotificationRuleCommandOutput, CodestarNotificationsClientResolvedConfig> {
    readonly input: UpdateNotificationRuleCommandInput;
    constructor(input: UpdateNotificationRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodestarNotificationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNotificationRuleCommandInput, UpdateNotificationRuleCommandOutput>;
    private serialize;
    private deserialize;
}
