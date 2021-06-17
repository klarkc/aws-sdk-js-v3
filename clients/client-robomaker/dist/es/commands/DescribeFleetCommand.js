import { __extends } from "tslib";
import { DescribeFleetRequest, DescribeFleetResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeFleetCommand, serializeAws_restJson1DescribeFleetCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a fleet.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeFleetCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeFleetCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFleetCommandInput} for command's `input` shape.
 * @see {@link DescribeFleetCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeFleetCommand = /** @class */ (function (_super) {
    __extends(DescribeFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeFleetCommand(input) {
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
    DescribeFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DescribeFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeFleetRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeFleetResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeFleetCommand(input, context);
    };
    DescribeFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeFleetCommand(output, context);
    };
    return DescribeFleetCommand;
}($Command));
export { DescribeFleetCommand };
//# sourceMappingURL=DescribeFleetCommand.js.map