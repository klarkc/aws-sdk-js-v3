import { __extends } from "tslib";
import { DescribeRobotApplicationRequest, DescribeRobotApplicationResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeRobotApplicationCommand, serializeAws_restJson1DescribeRobotApplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes a robot application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, DescribeRobotApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, DescribeRobotApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new DescribeRobotApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRobotApplicationCommandInput} for command's `input` shape.
 * @see {@link DescribeRobotApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeRobotApplicationCommand = /** @class */ (function (_super) {
    __extends(DescribeRobotApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeRobotApplicationCommand(input) {
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
    DescribeRobotApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "DescribeRobotApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeRobotApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeRobotApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeRobotApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeRobotApplicationCommand(input, context);
    };
    DescribeRobotApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeRobotApplicationCommand(output, context);
    };
    return DescribeRobotApplicationCommand;
}($Command));
export { DescribeRobotApplicationCommand };
//# sourceMappingURL=DescribeRobotApplicationCommand.js.map