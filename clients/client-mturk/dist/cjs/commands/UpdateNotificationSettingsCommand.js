"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateNotificationSettingsCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class UpdateNotificationSettingsCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "MTurkClient";
        const commandName = "UpdateNotificationSettingsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.UpdateNotificationSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.UpdateNotificationSettingsResponse.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1UpdateNotificationSettingsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1UpdateNotificationSettingsCommand(output, context);
    }
}
exports.UpdateNotificationSettingsCommand = UpdateNotificationSettingsCommand;
//# sourceMappingURL=UpdateNotificationSettingsCommand.js.map