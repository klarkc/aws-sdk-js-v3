import { __extends } from "tslib";
import { DescribeApiDestinationRequest, DescribeApiDestinationResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeApiDestinationCommand, serializeAws_json1_1DescribeApiDestinationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves details about an API destination.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeApiDestinationCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeApiDestinationCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DescribeApiDestinationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeApiDestinationCommandInput} for command's `input` shape.
 * @see {@link DescribeApiDestinationCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeApiDestinationCommand = /** @class */ (function (_super) {
    __extends(DescribeApiDestinationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeApiDestinationCommand(input) {
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
    DescribeApiDestinationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "DescribeApiDestinationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeApiDestinationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeApiDestinationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeApiDestinationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeApiDestinationCommand(input, context);
    };
    DescribeApiDestinationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeApiDestinationCommand(output, context);
    };
    return DescribeApiDestinationCommand;
}($Command));
export { DescribeApiDestinationCommand };
//# sourceMappingURL=DescribeApiDestinationCommand.js.map