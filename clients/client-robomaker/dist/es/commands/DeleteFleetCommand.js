import { __extends } from "tslib";
import { DeleteFleetRequest, DeleteFleetResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteFleetCommand, serializeAws_restJson1DeleteFleetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DeleteFleetCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DeleteFleetCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DeleteFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFleetCommand = /** @class */ (function (_super) {
    __extends(DeleteFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFleetCommand(input) {
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
    DeleteFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DeleteFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFleetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFleetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteFleetCommand(input, context);
    };
    DeleteFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteFleetCommand(output, context);
    };
    return DeleteFleetCommand;
}($Command));
export { DeleteFleetCommand };
//# sourceMappingURL=DeleteFleetCommand.js.map