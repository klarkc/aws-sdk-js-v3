import { __extends } from "tslib";
import { DeleteAlarmRequest, DeleteAlarmResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteAlarmCommand, serializeAws_json1_1DeleteAlarmCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an alarm.</p>
 *          <p>An alarm is used to monitor a single metric for one of your resources. When a metric
 *       condition is met, the alarm can notify you by email, SMS text message, and a banner displayed
 *       on the Amazon Lightsail console. For more information, see <a href="https://lightsail.aws.amazon.com/ls/docs/en_us/articles/amazon-lightsail-alarms">Alarms
 *         in Amazon Lightsail</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DeleteAlarmCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DeleteAlarmCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DeleteAlarmCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAlarmCommandInput} for command's `input` shape.
 * @see {@link DeleteAlarmCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAlarmCommand = /** @class */ (function (_super) {
    __extends(DeleteAlarmCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAlarmCommand(input) {
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
    DeleteAlarmCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DeleteAlarmCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAlarmRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAlarmResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAlarmCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAlarmCommand(input, context);
    };
    DeleteAlarmCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAlarmCommand(output, context);
    };
    return DeleteAlarmCommand;
}($Command));
export { DeleteAlarmCommand };
//# sourceMappingURL=DeleteAlarmCommand.js.map