import { __extends } from "tslib";
import { DescribeSimulationJobBatchRequest, DescribeSimulationJobBatchResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeSimulationJobBatchCommand, serializeAws_restJson1DescribeSimulationJobBatchCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a simulation job batch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeSimulationJobBatchCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeSimulationJobBatchCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeSimulationJobBatchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSimulationJobBatchCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationJobBatchCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSimulationJobBatchCommand = /** @class */ (function (_super) {
    __extends(DescribeSimulationJobBatchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSimulationJobBatchCommand(input) {
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
    DescribeSimulationJobBatchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DescribeSimulationJobBatchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSimulationJobBatchRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSimulationJobBatchResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSimulationJobBatchCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSimulationJobBatchCommand(input, context);
    };
    DescribeSimulationJobBatchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSimulationJobBatchCommand(output, context);
    };
    return DescribeSimulationJobBatchCommand;
}($Command));
export { DescribeSimulationJobBatchCommand };
//# sourceMappingURL=DescribeSimulationJobBatchCommand.js.map