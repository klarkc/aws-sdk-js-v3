import { __extends } from "tslib";
import { CancelSimulationJobBatchRequest, CancelSimulationJobBatchResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelSimulationJobBatchCommand, serializeAws_restJson1CancelSimulationJobBatchCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels a simulation job batch. When you cancel a simulation job batch, you are also
 *          cancelling all of the active simulation jobs created as part of the batch. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelSimulationJobBatchCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelSimulationJobBatchCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelSimulationJobBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSimulationJobBatchCommandInput} for command's `input` shape.
 * @see {@link CancelSimulationJobBatchCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelSimulationJobBatchCommand = /** @class */ (function (_super) {
    __extends(CancelSimulationJobBatchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelSimulationJobBatchCommand(input) {
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
    CancelSimulationJobBatchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CancelSimulationJobBatchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelSimulationJobBatchRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelSimulationJobBatchResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelSimulationJobBatchCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelSimulationJobBatchCommand(input, context);
    };
    CancelSimulationJobBatchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelSimulationJobBatchCommand(output, context);
    };
    return CancelSimulationJobBatchCommand;
}($Command));
export { CancelSimulationJobBatchCommand };
//# sourceMappingURL=CancelSimulationJobBatchCommand.js.map