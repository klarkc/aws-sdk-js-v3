import { __extends } from "tslib";
import { DescribeSimulationJobRequest, DescribeSimulationJobResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeSimulationJobCommand, serializeAws_restJson1DescribeSimulationJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a simulation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeSimulationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSimulationJobCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSimulationJobCommand = /** @class */ (function (_super) {
    __extends(DescribeSimulationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSimulationJobCommand(input) {
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
    DescribeSimulationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DescribeSimulationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSimulationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSimulationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSimulationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSimulationJobCommand(input, context);
    };
    DescribeSimulationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSimulationJobCommand(output, context);
    };
    return DescribeSimulationJobCommand;
}($Command));
export { DescribeSimulationJobCommand };
//# sourceMappingURL=DescribeSimulationJobCommand.js.map