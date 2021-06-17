import { __extends } from "tslib";
import { DeleteSimulationApplicationRequest, DeleteSimulationApplicationResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteSimulationApplicationCommand, serializeAws_restJson1DeleteSimulationApplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeleteSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeleteSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DeleteSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link DeleteSimulationApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteSimulationApplicationCommand = /** @class */ (function (_super) {
    __extends(DeleteSimulationApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteSimulationApplicationCommand(input) {
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
    DeleteSimulationApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DeleteSimulationApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteSimulationApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteSimulationApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteSimulationApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteSimulationApplicationCommand(input, context);
    };
    DeleteSimulationApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteSimulationApplicationCommand(output, context);
    };
    return DeleteSimulationApplicationCommand;
}($Command));
export { DeleteSimulationApplicationCommand };
//# sourceMappingURL=DeleteSimulationApplicationCommand.js.map