import { __extends } from "tslib";
import { UpdateSimulationApplicationRequest, UpdateSimulationApplicationResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateSimulationApplicationCommand, serializeAws_restJson1UpdateSimulationApplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, UpdateSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, UpdateSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new UpdateSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link UpdateSimulationApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateSimulationApplicationCommand = /** @class */ (function (_super) {
    __extends(UpdateSimulationApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateSimulationApplicationCommand(input) {
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
    UpdateSimulationApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "UpdateSimulationApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateSimulationApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateSimulationApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateSimulationApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateSimulationApplicationCommand(input, context);
    };
    UpdateSimulationApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateSimulationApplicationCommand(output, context);
    };
    return UpdateSimulationApplicationCommand;
}($Command));
export { UpdateSimulationApplicationCommand };
//# sourceMappingURL=UpdateSimulationApplicationCommand.js.map