import { __extends } from "tslib";
import { RegisterRobotRequest, RegisterRobotResponse } from "../models/models_0";
import { deserializeAws_restJson1RegisterRobotCommand, serializeAws_restJson1RegisterRobotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Registers a robot with a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, RegisterRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, RegisterRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new RegisterRobotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterRobotCommandInput} for command's `input` shape.
 * @see {@link RegisterRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterRobotCommand = /** @class */ (function (_super) {
    __extends(RegisterRobotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterRobotCommand(input) {
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
    RegisterRobotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "RegisterRobotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterRobotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterRobotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterRobotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RegisterRobotCommand(input, context);
    };
    RegisterRobotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RegisterRobotCommand(output, context);
    };
    return RegisterRobotCommand;
}($Command));
export { RegisterRobotCommand };
//# sourceMappingURL=RegisterRobotCommand.js.map