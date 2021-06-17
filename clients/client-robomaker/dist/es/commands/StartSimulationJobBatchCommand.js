import { __extends } from "tslib";
import { StartSimulationJobBatchRequest, StartSimulationJobBatchResponse } from "../models/models_0";
import { deserializeAws_restJson1StartSimulationJobBatchCommand, serializeAws_restJson1StartSimulationJobBatchCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Starts a new simulation job batch. The batch is defined using one or more
 *             <code>SimulationJobRequest</code> objects. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, StartSimulationJobBatchCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, StartSimulationJobBatchCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new StartSimulationJobBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartSimulationJobBatchCommandInput} for command's `input` shape.
 * @see {@link StartSimulationJobBatchCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartSimulationJobBatchCommand = /** @class */ (function (_super) {
    __extends(StartSimulationJobBatchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartSimulationJobBatchCommand(input) {
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
    StartSimulationJobBatchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "StartSimulationJobBatchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartSimulationJobBatchRequest.filterSensitiveLog,
            outputFilterSensitiveLog: StartSimulationJobBatchResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartSimulationJobBatchCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1StartSimulationJobBatchCommand(input, context);
    };
    StartSimulationJobBatchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1StartSimulationJobBatchCommand(output, context);
    };
    return StartSimulationJobBatchCommand;
}($Command));
export { StartSimulationJobBatchCommand };
//# sourceMappingURL=StartSimulationJobBatchCommand.js.map