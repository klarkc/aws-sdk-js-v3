import { __extends } from "tslib";
import { UpdateRobotApplicationRequest, UpdateRobotApplicationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateRobotApplicationCommand, serializeAws_restJson1UpdateRobotApplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a robot application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, UpdateRobotApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, UpdateRobotApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new UpdateRobotApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateRobotApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateRobotApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateRobotApplicationCommand = /** @class */ (function (_super) {
    __extends(UpdateRobotApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateRobotApplicationCommand(input) {
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
    UpdateRobotApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "UpdateRobotApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateRobotApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateRobotApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateRobotApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateRobotApplicationCommand(input, context);
    };
    UpdateRobotApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateRobotApplicationCommand(output, context);
    };
    return UpdateRobotApplicationCommand;
}($Command));
export { UpdateRobotApplicationCommand };
//# sourceMappingURL=UpdateRobotApplicationCommand.js.map