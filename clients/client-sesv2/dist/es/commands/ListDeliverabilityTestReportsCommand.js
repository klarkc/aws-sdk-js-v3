import { __extends } from "tslib";
import { ListDeliverabilityTestReportsRequest, ListDeliverabilityTestReportsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDeliverabilityTestReportsCommand, serializeAws_restJson1ListDeliverabilityTestReportsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Show a list of the predictive inbox placement tests that you've performed, regardless of their statuses. For
 *             predictive inbox placement tests that are complete, you can use the <code>GetDeliverabilityTestReport</code>
 *             operation to view the results.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SESv2Client, ListDeliverabilityTestReportsCommand } from "@aws-sdk/client-sesv2"; // ES Modules import
 * // const { SESv2Client, ListDeliverabilityTestReportsCommand } = require("@aws-sdk/client-sesv2"); // CommonJS import
 * const client = new SESv2Client(config);
 * const command = new ListDeliverabilityTestReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeliverabilityTestReportsCommandInput} for command's `input` shape.
 * @see {@link ListDeliverabilityTestReportsCommandOutput} for command's `response` shape.
 * @see {@link SESv2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeliverabilityTestReportsCommand = /** @class */ (function (_super) {
    __extends(ListDeliverabilityTestReportsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDeliverabilityTestReportsCommand(input) {
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
    ListDeliverabilityTestReportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SESv2Client";
        var commandName = "ListDeliverabilityTestReportsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDeliverabilityTestReportsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDeliverabilityTestReportsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDeliverabilityTestReportsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDeliverabilityTestReportsCommand(input, context);
    };
    ListDeliverabilityTestReportsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDeliverabilityTestReportsCommand(output, context);
    };
    return ListDeliverabilityTestReportsCommand;
}($Command));
export { ListDeliverabilityTestReportsCommand };
//# sourceMappingURL=ListDeliverabilityTestReportsCommand.js.map