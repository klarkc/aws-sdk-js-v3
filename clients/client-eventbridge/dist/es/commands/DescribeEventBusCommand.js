import { __extends } from "tslib";
import { DescribeEventBusRequest, DescribeEventBusResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEventBusCommand, serializeAws_json1_1DescribeEventBusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Displays details about an event bus in your account. This can include the external AWS
 *       accounts that are permitted to write events to your default event bus, and the associated
 *       policy. For custom event buses and partner event buses, it displays the name, ARN, policy,
 *       state, and creation time.</p>
 *          <p> To enable your account to receive events from other accounts on its default event bus,
 *       use <a>PutPermission</a>.</p>
 *          <p>For more information about partner event buses, see <a>CreateEventBus</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeEventBusCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeEventBusCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DescribeEventBusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventBusCommandInput} for command's `input` shape.
 * @see {@link DescribeEventBusCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventBusCommand = /** @class */ (function (_super) {
    __extends(DescribeEventBusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventBusCommand(input) {
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
    DescribeEventBusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "DescribeEventBusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventBusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEventBusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventBusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEventBusCommand(input, context);
    };
    DescribeEventBusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEventBusCommand(output, context);
    };
    return DescribeEventBusCommand;
}($Command));
export { DescribeEventBusCommand };
//# sourceMappingURL=DescribeEventBusCommand.js.map