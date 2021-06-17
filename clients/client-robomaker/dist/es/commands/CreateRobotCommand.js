import { __extends } from "tslib";
import { CreateRobotRequest, CreateRobotResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateRobotCommand, serializeAws_restJson1CreateRobotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a robot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateRobotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRobotCommandInput} for command's `input` shape.
 * @see {@link CreateRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRobotCommand = /** @class */ (function (_super) {
    __extends(CreateRobotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRobotCommand(input) {
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
    CreateRobotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CreateRobotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRobotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRobotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRobotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRobotCommand(input, context);
    };
    CreateRobotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRobotCommand(output, context);
    };
    return CreateRobotCommand;
}($Command));
export { CreateRobotCommand };
//# sourceMappingURL=CreateRobotCommand.js.map