import { __extends } from "tslib";
import { DeleteRobotApplicationRequest, DeleteRobotApplicationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteRobotApplicationCommand, serializeAws_restJson1DeleteRobotApplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a robot application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeleteRobotApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeleteRobotApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DeleteRobotApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRobotApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteRobotApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRobotApplicationCommand = /** @class */ (function (_super) {
    __extends(DeleteRobotApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRobotApplicationCommand(input) {
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
    DeleteRobotApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DeleteRobotApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRobotApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRobotApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRobotApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteRobotApplicationCommand(input, context);
    };
    DeleteRobotApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteRobotApplicationCommand(output, context);
    };
    return DeleteRobotApplicationCommand;
}($Command));
export { DeleteRobotApplicationCommand };
//# sourceMappingURL=DeleteRobotApplicationCommand.js.map