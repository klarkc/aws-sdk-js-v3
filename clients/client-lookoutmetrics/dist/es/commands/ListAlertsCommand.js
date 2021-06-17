import { __extends } from "tslib";
import { ListAlertsRequest, ListAlertsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAlertsCommand, serializeAws_restJson1ListAlertsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the alerts attached to a detector.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAlertsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAlertsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ListAlertsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAlertsCommandInput} for command's `input` shape.
 * @see {@link ListAlertsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAlertsCommand = /** @class */ (function (_super) {
    __extends(ListAlertsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAlertsCommand(input) {
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
    ListAlertsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "ListAlertsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAlertsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAlertsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAlertsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAlertsCommand(input, context);
    };
    ListAlertsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAlertsCommand(output, context);
    };
    return ListAlertsCommand;
}($Command));
export { ListAlertsCommand };
//# sourceMappingURL=ListAlertsCommand.js.map