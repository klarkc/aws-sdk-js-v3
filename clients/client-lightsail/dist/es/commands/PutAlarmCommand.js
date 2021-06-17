import { __extends } from "tslib";
import { PutAlarmRequest, PutAlarmResult } from "../models/models_1";
import { deserializeAws_json1_1PutAlarmCommand, serializeAws_json1_1PutAlarmCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates or updates an alarm, and associates it with the specified metric.</p>
 *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
 *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
 *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 *          <p>When this action creates an alarm, the alarm state is immediately set to
 *         <code>INSUFFICIENT_DATA</code>. The alarm is then evaluated and its state is set
 *       appropriately. Any actions associated with the new state are then executed.</p>
 *          <p>When you update an existing alarm, its state is left unchanged, but the update completely
 *       overwrites the previous configuration of the alarm. The alarm is then evaluated with the
 *       updated configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, PutAlarmCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, PutAlarmCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new PutAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAlarmCommandInput} for command's `input` shape.
 * @see {@link PutAlarmCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAlarmCommand = /** @class */ (function (_super) {
    __extends(PutAlarmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAlarmCommand(input) {
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
    PutAlarmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "PutAlarmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAlarmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutAlarmResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAlarmCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutAlarmCommand(input, context);
    };
    PutAlarmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutAlarmCommand(output, context);
    };
    return PutAlarmCommand;
}($Command));
export { PutAlarmCommand };
//# sourceMappingURL=PutAlarmCommand.js.map