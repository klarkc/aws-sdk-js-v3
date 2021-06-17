import { __extends } from "tslib";
import { DescribeEventSourceRequest, DescribeEventSourceResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeEventSourceCommand, serializeAws_json1_1DescribeEventSourceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation lists details about a partner event source that is shared with your
 *       account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudWatchEventsClient, DescribeEventSourceCommand } from "@aws-sdk/client-cloudwatch-events"; // ES Modules import
 * // const { CloudWatchEventsClient, DescribeEventSourceCommand } = require("@aws-sdk/client-cloudwatch-events"); // CommonJS import
 * const client = new CloudWatchEventsClient(config);
 * const command = new DescribeEventSourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeEventSourceCommandInput} for command's `input` shape.
 * @see {@link DescribeEventSourceCommandOutput} for command's `response` shape.
 * @see {@link CloudWatchEventsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeEventSourceCommand = /** @class */ (function (_super) {
    __extends(DescribeEventSourceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeEventSourceCommand(input) {
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
    DescribeEventSourceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudWatchEventsClient";
        var commandName = "DescribeEventSourceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeEventSourceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeEventSourceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeEventSourceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeEventSourceCommand(input, context);
    };
    DescribeEventSourceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeEventSourceCommand(output, context);
    };
    return DescribeEventSourceCommand;
}($Command));
export { DescribeEventSourceCommand };
//# sourceMappingURL=DescribeEventSourceCommand.js.map