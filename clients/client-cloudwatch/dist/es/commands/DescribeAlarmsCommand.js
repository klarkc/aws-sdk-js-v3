import { __extends } from "tslib";
import { DescribeAlarmsInput, DescribeAlarmsOutput } from "../models/models_0";
import { deserializeAws_queryDescribeAlarmsCommand, serializeAws_queryDescribeAlarmsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the specified alarms. You can filter the results by specifying a prefix for the alarm
 * 			name, the alarm state, or a prefix for any action.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchClient, DescribeAlarmsCommand } from "@aws-sdk/client-cloudwatch"; // ES Modules import
 * // const { CloudWatchClient, DescribeAlarmsCommand } = require("@aws-sdk/client-cloudwatch"); // CommonJS import
 * const client = new CloudWatchClient(config);
 * const command = new DescribeAlarmsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlarmsCommandInput} for command's `input` shape.
 * @see {@link DescribeAlarmsCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAlarmsCommand = /** @class */ (function (_super) {
    __extends(DescribeAlarmsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAlarmsCommand(input) {
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
    DescribeAlarmsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchClient";
        var commandName = "DescribeAlarmsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAlarmsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAlarmsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAlarmsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeAlarmsCommand(input, context);
    };
    DescribeAlarmsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeAlarmsCommand(output, context);
    };
    return DescribeAlarmsCommand;
}($Command));
export { DescribeAlarmsCommand };
//# sourceMappingURL=DescribeAlarmsCommand.js.map