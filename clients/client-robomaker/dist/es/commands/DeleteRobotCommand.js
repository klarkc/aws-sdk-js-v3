import { __extends } from "tslib";
import { DeleteRobotRequest, DeleteRobotResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteRobotCommand, serializeAws_restJson1DeleteRobotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a robot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeleteRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeleteRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DeleteRobotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRobotCommandInput} for command's `input` shape.
 * @see {@link DeleteRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRobotCommand = /** @class */ (function (_super) {
    __extends(DeleteRobotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRobotCommand(input) {
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
    DeleteRobotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DeleteRobotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRobotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRobotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRobotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRobotCommand(input, context);
    };
    DeleteRobotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRobotCommand(output, context);
    };
    return DeleteRobotCommand;
}($Command));
export { DeleteRobotCommand };
//# sourceMappingURL=DeleteRobotCommand.js.map