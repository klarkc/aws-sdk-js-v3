import { __extends } from "tslib";
import { DescribeSimulationApplicationRequest, DescribeSimulationApplicationResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeSimulationApplicationCommand, serializeAws_restJson1DescribeSimulationApplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeSimulationApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeSimulationApplicationCommand = /** @class */ (function (_super) {
    __extends(DescribeSimulationApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeSimulationApplicationCommand(input) {
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
    DescribeSimulationApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DescribeSimulationApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeSimulationApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeSimulationApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeSimulationApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeSimulationApplicationCommand(input, context);
    };
    DescribeSimulationApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeSimulationApplicationCommand(output, context);
    };
    return DescribeSimulationApplicationCommand;
}($Command));
export { DescribeSimulationApplicationCommand };
//# sourceMappingURL=DescribeSimulationApplicationCommand.js.map