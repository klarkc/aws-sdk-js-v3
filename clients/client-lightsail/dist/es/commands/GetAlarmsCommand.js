import { __extends } from "tslib";
import { GetAlarmsRequest, GetAlarmsResult } from "../models/models_0";
import { deserializeAws_json1_1GetAlarmsCommand, serializeAws_json1_1GetAlarmsCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about the configured alarms. Specify an alarm name in your request to
 *       return information about a specific alarm, or specify a monitored resource name to return
 *       information about all alarms for a specific resource.</p>
 *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
 *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
 *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, GetAlarmsCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, GetAlarmsCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new GetAlarmsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAlarmsCommandInput} for command's `input` shape.
 * @see {@link GetAlarmsCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAlarmsCommand = /** @class */ (function (_super) {
    __extends(GetAlarmsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAlarmsCommand(input) {
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
    GetAlarmsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "GetAlarmsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAlarmsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAlarmsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAlarmsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetAlarmsCommand(input, context);
    };
    GetAlarmsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetAlarmsCommand(output, context);
    };
    return GetAlarmsCommand;
}($Command));
export { GetAlarmsCommand };
//# sourceMappingURL=GetAlarmsCommand.js.map