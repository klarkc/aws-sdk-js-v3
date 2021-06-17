import { __extends } from "tslib";
import { DescribeRobotRequest, DescribeRobotResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeRobotCommand, serializeAws_restJson1DescribeRobotCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a robot.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeRobotCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeRobotCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeRobotCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRobotCommandInput} for command's `input` shape.
 * @see {@link DescribeRobotCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRobotCommand = /** @class */ (function (_super) {
    __extends(DescribeRobotCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRobotCommand(input) {
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
    DescribeRobotCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DescribeRobotCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRobotRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRobotResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRobotCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeRobotCommand(input, context);
    };
    DescribeRobotCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeRobotCommand(output, context);
    };
    return DescribeRobotCommand;
}($Command));
export { DescribeRobotCommand };
//# sourceMappingURL=DescribeRobotCommand.js.map