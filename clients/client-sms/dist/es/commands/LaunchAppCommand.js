import { __extends } from "tslib";
import { LaunchAppRequest, LaunchAppResponse } from "../models/models_0";
import { deserializeAws_json1_1LaunchAppCommand, serializeAws_json1_1LaunchAppCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Launches the specified application as a stack in AWS CloudFormation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SMSClient, LaunchAppCommand } from "@aws-sdk/client-sms"; // ES Modules import
 * // const { SMSClient, LaunchAppCommand } = require("@aws-sdk/client-sms"); // CommonJS import
 * const client = new SMSClient(config);
 * const command = new LaunchAppCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link LaunchAppCommandInput} for command's `input` shape.
 * @see {@link LaunchAppCommandOutput} for command's `response` shape.
 * @see {@link SMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var LaunchAppCommand = /** @class */ (function (_super) {
    __extends(LaunchAppCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function LaunchAppCommand(input) {
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
    LaunchAppCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SMSClient";
        var commandName = "LaunchAppCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: LaunchAppRequest.filterSensitiveLog,
            outputFilterSensitiveLog: LaunchAppResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    LaunchAppCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1LaunchAppCommand(input, context);
    };
    LaunchAppCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1LaunchAppCommand(output, context);
    };
    return LaunchAppCommand;
}($Command));
export { LaunchAppCommand };
//# sourceMappingURL=LaunchAppCommand.js.map