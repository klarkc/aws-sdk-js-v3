import { CodestarNotificationsClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodestarNotificationsClient";
import { ListNotificationRulesRequest, ListNotificationRulesResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListNotificationRulesCommandInput extends ListNotificationRulesRequest {
}
export interface ListNotificationRulesCommandOutput extends ListNotificationRulesResult, __MetadataBearer {
}
/**
 * <p>Returns a list of the notification rules for an AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodestarNotificationsClient, ListNotificationRulesCommand } from "@aws-sdk/client-codestar-notifications"; // ES Modules import
 * // const { CodestarNotificationsClient, ListNotificationRulesCommand } = require("@aws-sdk/client-codestar-notifications"); // CommonJS import
 * const client = new CodestarNotificationsClient(config);
 * const command = new ListNotificationRulesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListNotificationRulesCommandInput} for command's `input` shape.
 * @see {@link ListNotificationRulesCommandOutput} for command's `response` shape.
 * @see {@link CodestarNotificationsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListNotificationRulesCommand extends $Command<ListNotificationRulesCommandInput, ListNotificationRulesCommandOutput, CodestarNotificationsClientResolvedConfig> {
    readonly input: ListNotificationRulesCommandInput;
    constructor(input: ListNotificationRulesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodestarNotificationsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListNotificationRulesCommandInput, ListNotificationRulesCommandOutput>;
    private serialize;
    private deserialize;
}
