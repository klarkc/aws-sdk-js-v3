import { __extends } from "tslib";
import { BatchDescribeSimulationJobRequest, BatchDescribeSimulationJobResponse } from "../models/models_0";
import { deserializeAws_restJson1BatchDescribeSimulationJobCommand, serializeAws_restJson1BatchDescribeSimulationJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes one or more simulation jobs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, BatchDescribeSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, BatchDescribeSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new BatchDescribeSimulationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDescribeSimulationJobCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchDescribeSimulationJobCommand = /** @class */ (function (_super) {
    __extends(BatchDescribeSimulationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchDescribeSimulationJobCommand(input) {
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
    BatchDescribeSimulationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "BatchDescribeSimulationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchDescribeSimulationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchDescribeSimulationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchDescribeSimulationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1BatchDescribeSimulationJobCommand(input, context);
    };
    BatchDescribeSimulationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1BatchDescribeSimulationJobCommand(output, context);
    };
    return BatchDescribeSimulationJobCommand;
}($Command));
export { BatchDescribeSimulationJobCommand };
//# sourceMappingURL=BatchDescribeSimulationJobCommand.js.map