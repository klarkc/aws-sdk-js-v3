import { __extends } from "tslib";
import { DeleteNotificationChannelRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteNotificationChannelCommand, serializeAws_json1_1DeleteNotificationChannelCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an AWS Firewall Manager association with the IAM role and the Amazon Simple
 *       Notification Service (SNS) topic that is used to record AWS Firewall Manager SNS logs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FMSClient, DeleteNotificationChannelCommand } from "@aws-sdk/client-fms"; // ES Modules import
 * // const { FMSClient, DeleteNotificationChannelCommand } = require("@aws-sdk/client-fms"); // CommonJS import
 * const client = new FMSClient(config);
 * const command = new DeleteNotificationChannelCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNotificationChannelCommandInput} for command's `input` shape.
 * @see {@link DeleteNotificationChannelCommandOutput} for command's `response` shape.
 * @see {@link FMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNotificationChannelCommand = /** @class */ (function (_super) {
    __extends(DeleteNotificationChannelCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNotificationChannelCommand(input) {
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
    DeleteNotificationChannelCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "FMSClient";
        var commandName = "DeleteNotificationChannelCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNotificationChannelRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNotificationChannelCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteNotificationChannelCommand(input, context);
    };
    DeleteNotificationChannelCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteNotificationChannelCommand(output, context);
    };
    return DeleteNotificationChannelCommand;
}($Command));
export { DeleteNotificationChannelCommand };
//# sourceMappingURL=DeleteNotificationChannelCommand.js.map