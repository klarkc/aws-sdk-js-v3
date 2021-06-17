import { __extends } from "tslib";
import { DescribeConnectionRequest, DescribeConnectionResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeConnectionCommand, serializeAws_json1_1DescribeConnectionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves details about a connection.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribeConnectionCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribeConnectionCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DescribeConnectionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeConnectionCommandInput} for command's `input` shape.
 * @see {@link DescribeConnectionCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeConnectionCommand = /** @class */ (function (_super) {
    __extends(DescribeConnectionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeConnectionCommand(input) {
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
    DescribeConnectionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "DescribeConnectionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeConnectionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeConnectionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeConnectionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeConnectionCommand(input, context);
    };
    DescribeConnectionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeConnectionCommand(output, context);
    };
    return DescribeConnectionCommand;
}($Command));
export { DescribeConnectionCommand };
//# sourceMappingURL=DescribeConnectionCommand.js.map