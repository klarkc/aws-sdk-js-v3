import { MTurkClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../MTurkClient";
import { UpdateNotificationSettingsRequest, UpdateNotificationSettingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateNotificationSettingsCommandInput extends UpdateNotificationSettingsRequest {
}
export interface UpdateNotificationSettingsCommandOutput extends UpdateNotificationSettingsResponse, __MetadataBearer {
}
/**
 * <p>
 *             The <code>UpdateNotificationSettings</code> operation creates, updates,
 *             disables or re-enables notifications for a HIT type.
 *             If you call the UpdateNotificationSettings operation for a HIT type that already has a
 *             notification specification, the operation replaces the old specification with a new one.
 *             You can call the UpdateNotificationSettings operation to enable or disable notifications
 *             for the HIT type, without having to modify the notification specification itself by providing
 *             updates to the Active status without specifying a new notification specification.
 *             To change the Active status of a HIT type's notifications,
 *             the HIT type must already have a notification specification,
 *             or one must be provided in the same call to <code>UpdateNotificationSettings</code>.
 *         </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MTurkClient, UpdateNotificationSettingsCommand } from "@aws-sdk/client-mturk"; // ES Modules import
 * // const { MTurkClient, UpdateNotificationSettingsCommand } = require("@aws-sdk/client-mturk"); // CommonJS import
 * const client = new MTurkClient(config);
 * const command = new UpdateNotificationSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateNotificationSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateNotificationSettingsCommandOutput} for command's `response` shape.
 * @see {@link MTurkClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateNotificationSettingsCommand extends $Command<UpdateNotificationSettingsCommandInput, UpdateNotificationSettingsCommandOutput, MTurkClientResolvedConfig> {
    readonly input: UpdateNotificationSettingsCommandInput;
    constructor(input: UpdateNotificationSettingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: MTurkClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateNotificationSettingsCommandInput, UpdateNotificationSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
