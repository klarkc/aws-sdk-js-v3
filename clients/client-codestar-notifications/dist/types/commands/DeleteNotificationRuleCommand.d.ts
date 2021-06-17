import { CodestarNotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodestarNotificationsClient";
import { DeleteNotificationRuleRequest, DeleteNotificationRuleResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteNotificationRuleCommandInput extends DeleteNotificationRuleRequest {
}
export interface DeleteNotificationRuleCommandOutput extends DeleteNotificationRuleResult, __MetadataBearer {
}
/**
 * <p>Deletes a notification rule for a resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, DeleteNotificationRuleCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, DeleteNotificationRuleCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new DeleteNotificationRuleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationRuleCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationRuleCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteNotificationRuleCommand extends $Command<DeleteNotificationRuleCommandInput, DeleteNotificationRuleCommandOutput, CodestarNotificationsClientResolvedConfig> {
    readonly input: DeleteNotificationRuleCommandInput;
    constructor(input: DeleteNotificationRuleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodestarNotificationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteNotificationRuleCommandInput, DeleteNotificationRuleCommandOutput>;
    private serialize;
    private deserialize;
}
