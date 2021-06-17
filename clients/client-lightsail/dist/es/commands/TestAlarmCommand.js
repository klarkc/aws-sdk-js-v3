import { __extends } from "tslib";
import { TestAlarmRequest, TestAlarmResult } from "../models/models_1";
import { deserializeAws_json1_1TestAlarmCommand, serializeAws_json1_1TestAlarmCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Tests an alarm by displaying a banner on the Amazon Lightsail console. If a notification
 *       trigger is configured for the specified alarm, the test also sends a notification to the
 *       notification protocol (<code>Email</code> and/or <code>SMS</code>) configured for the
 *       alarm.</p>
 *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
 *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
 *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, TestAlarmCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, TestAlarmCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new TestAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link TestAlarmCommandInput} for command's `input` shape.
 * @see {@link TestAlarmCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var TestAlarmCommand = /** @class */ (function (_super) {
    __extends(TestAlarmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function TestAlarmCommand(input) {
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
    TestAlarmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "TestAlarmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: TestAlarmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: TestAlarmResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    TestAlarmCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1TestAlarmCommand(input, context);
    };
    TestAlarmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1TestAlarmCommand(output, context);
    };
    return TestAlarmCommand;
}($Command));
export { TestAlarmCommand };
//# sourceMappingURL=TestAlarmCommand.js.map