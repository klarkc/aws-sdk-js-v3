import { __extends } from "tslib";
import { SetEndpointAttributesInput } from "../models/models_0";
import { deserializeAws_querySetEndpointAttributesCommand, serializeAws_querySetEndpointAttributesCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the attributes for an endpoint for a device on one of the supported push
 *             notification services, such as GCM (Firebase Cloud Messaging) and APNS. For more
 *             information, see <a href="https://docs.aws.amazon.com/sns/latest/dg/SNSMobilePush.html">Using Amazon SNS Mobile Push Notifications</a>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SNSClient, SetEndpointAttributesCommand } from "@aws-sdk/client-sns"; // ES Modules import
 * // const { SNSClient, SetEndpointAttributesCommand } = require("@aws-sdk/client-sns"); // CommonJS import
 * const client = new SNSClient(config);
 * const command = new SetEndpointAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SetEndpointAttributesCommandInput} for command's `input` shape.
 * @see {@link SetEndpointAttributesCommandOutput} for command's `response` shape.
 * @see {@link SNSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SetEndpointAttributesCommand = /** @class */ (function (_super) {
    __extends(SetEndpointAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SetEndpointAttributesCommand(input) {
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
    SetEndpointAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SNSClient";
        var commandName = "SetEndpointAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SetEndpointAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SetEndpointAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_querySetEndpointAttributesCommand(input, context);
    };
    SetEndpointAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_querySetEndpointAttributesCommand(output, context);
    };
    return SetEndpointAttributesCommand;
}($Command));
export { SetEndpointAttributesCommand };
//# sourceMappingURL=SetEndpointAttributesCommand.js.map