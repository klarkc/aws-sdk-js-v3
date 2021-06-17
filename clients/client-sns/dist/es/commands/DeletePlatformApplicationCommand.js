import { __extends } from "tslib";
import { DeletePlatformApplicationInput } from "../models/models_0";
import { deserializeAws_queryDeletePlatformApplicationCommand, serializeAws_queryDeletePlatformApplicationCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a platform application object for one of the supported push notification
 *             services, such as APNS and GCM (Firebase Cloud Messaging). For more information, see
 *                 <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS
 *                 Mobile Push Notifications</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, DeletePlatformApplicationCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, DeletePlatformApplicationCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new DeletePlatformApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeletePlatformApplicationCommandInput} for command's `input` shape.
 * @see {@link DeletePlatformApplicationCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeletePlatformApplicationCommand = /** @class */ (function (_super) {
    __extends(DeletePlatformApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeletePlatformApplicationCommand(input) {
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
    DeletePlatformApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "DeletePlatformApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeletePlatformApplicationInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeletePlatformApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeletePlatformApplicationCommand(input, context);
    };
    DeletePlatformApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeletePlatformApplicationCommand(output, context);
    };
    return DeletePlatformApplicationCommand;
}($Command));
export { DeletePlatformApplicationCommand };
//# sourceMappingURL=DeletePlatformApplicationCommand.js.map