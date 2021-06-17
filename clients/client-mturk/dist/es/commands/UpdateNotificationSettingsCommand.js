import { __extends } from "tslib";
import { UpdateNotificationSettingsRequest, UpdateNotificationSettingsResponse } from "../models/models_0";
import { deserializeAws_json1_1UpdateNotificationSettingsCommand, serializeAws_json1_1UpdateNotificationSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var UpdateNotificationSettingsCommand = /** @class */ (function (_super) {
    __extends(UpdateNotificationSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateNotificationSettingsCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    UpdateNotificationSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MTurkClient";
        var commandName = "UpdateNotificationSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateNotificationSettingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateNotificationSettingsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateNotificationSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateNotificationSettingsCommand(input, context);
    };
    UpdateNotificationSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateNotificationSettingsCommand(output, context);
    };
    return UpdateNotificationSettingsCommand;
}($Command));
export { UpdateNotificationSettingsCommand };
//# sourceMappingURL=UpdateNotificationSettingsCommand.js.map