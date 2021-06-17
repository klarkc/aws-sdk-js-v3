import { __extends } from "tslib";
import { RestartSimulationJobRequest, RestartSimulationJobResponse } from "../models/models_0";
import { deserializeAws_restJson1RestartSimulationJobCommand, serializeAws_restJson1RestartSimulationJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Restarts a running simulation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, RestartSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, RestartSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new RestartSimulationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RestartSimulationJobCommandInput} for command's `input` shape.
 * @see {@link RestartSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RestartSimulationJobCommand = /** @class */ (function (_super) {
    __extends(RestartSimulationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RestartSimulationJobCommand(input) {
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
    RestartSimulationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "RestartSimulationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RestartSimulationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RestartSimulationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RestartSimulationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RestartSimulationJobCommand(input, context);
    };
    RestartSimulationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RestartSimulationJobCommand(output, context);
    };
    return RestartSimulationJobCommand;
}($Command));
export { RestartSimulationJobCommand };
//# sourceMappingURL=RestartSimulationJobCommand.js.map