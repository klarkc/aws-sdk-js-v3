import { __extends } from "tslib";
import { DescribeAlertRequest, DescribeAlertResponse } from "../models/models_0";
import { deserializeAws_restJson1DescribeAlertCommand, serializeAws_restJson1DescribeAlertCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes an alert.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, DescribeAlertCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, DescribeAlertCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new DescribeAlertCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAlertCommandInput} for command's `input` shape.
 * @see {@link DescribeAlertCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAlertCommand = /** @class */ (function (_super) {
    __extends(DescribeAlertCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAlertCommand(input) {
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
    DescribeAlertCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "DescribeAlertCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAlertRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAlertResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAlertCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeAlertCommand(input, context);
    };
    DescribeAlertCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeAlertCommand(output, context);
    };
    return DescribeAlertCommand;
}($Command));
export { DescribeAlertCommand };
//# sourceMappingURL=DescribeAlertCommand.js.map