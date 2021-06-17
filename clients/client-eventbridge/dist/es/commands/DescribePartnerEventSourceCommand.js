import { __extends } from "tslib";
import { DescribePartnerEventSourceRequest, DescribePartnerEventSourceResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribePartnerEventSourceCommand, serializeAws_json1_1DescribePartnerEventSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>An SaaS partner can use this operation to list details about a partner event source that
 *       they have created. AWS customers do not use this operation. Instead, AWS customers can use
 *         <a>DescribeEventSource</a> to see details about a partner event source that is
 *       shared with them.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EventBridgeClient, DescribePartnerEventSourceCommand } from "@aws-sdk/client-eventbridge"; // ES Modules import
 * // const { EventBridgeClient, DescribePartnerEventSourceCommand } = require("@aws-sdk/client-eventbridge"); // CommonJS import
 * const client = new EventBridgeClient(config);
 * const command = new DescribePartnerEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePartnerEventSourceCommandInput} for command's `input` shape.
 * @see {@link DescribePartnerEventSourceCommandOutput} for command's `response` shape.
 * @see {@link EventBridgeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePartnerEventSourceCommand = /** @class */ (function (_super) {
    __extends(DescribePartnerEventSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePartnerEventSourceCommand(input) {
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
    DescribePartnerEventSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EventBridgeClient";
        var commandName = "DescribePartnerEventSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePartnerEventSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePartnerEventSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePartnerEventSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePartnerEventSourceCommand(input, context);
    };
    DescribePartnerEventSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePartnerEventSourceCommand(output, context);
    };
    return DescribePartnerEventSourceCommand;
}($Command));
export { DescribePartnerEventSourceCommand };
//# sourceMappingURL=DescribePartnerEventSourceCommand.js.map