import { __extends } from "tslib";
import { DeregisterRobotRequest, DeregisterRobotResponse } from "../models/models_0";
import { deserializeAws_restJson1DeregisterRobotCommand, serializeAws_restJson1DeregisterRobotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deregisters a robot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeregisterRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeregisterRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DeregisterRobotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterRobotCommandInput} for command's `input` shape.
 * @see {@link DeregisterRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterRobotCommand = /** @class */ (function (_super) {
    __extends(DeregisterRobotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterRobotCommand(input) {
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
    DeregisterRobotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DeregisterRobotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterRobotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeregisterRobotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterRobotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeregisterRobotCommand(input, context);
    };
    DeregisterRobotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeregisterRobotCommand(output, context);
    };
    return DeregisterRobotCommand;
}($Command));
export { DeregisterRobotCommand };
//# sourceMappingURL=DeregisterRobotCommand.js.map