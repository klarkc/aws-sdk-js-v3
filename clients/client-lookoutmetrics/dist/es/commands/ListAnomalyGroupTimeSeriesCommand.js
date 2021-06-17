import { __extends } from "tslib";
import { ListAnomalyGroupTimeSeriesRequest, ListAnomalyGroupTimeSeriesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommand, serializeAws_restJson1ListAnomalyGroupTimeSeriesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of anomalous metrics for a measure in an anomaly group.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyGroupTimeSeriesCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyGroupTimeSeriesCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ListAnomalyGroupTimeSeriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnomalyGroupTimeSeriesCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyGroupTimeSeriesCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAnomalyGroupTimeSeriesCommand = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupTimeSeriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAnomalyGroupTimeSeriesCommand(input) {
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
    ListAnomalyGroupTimeSeriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "ListAnomalyGroupTimeSeriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAnomalyGroupTimeSeriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAnomalyGroupTimeSeriesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAnomalyGroupTimeSeriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAnomalyGroupTimeSeriesCommand(input, context);
    };
    ListAnomalyGroupTimeSeriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAnomalyGroupTimeSeriesCommand(output, context);
    };
    return ListAnomalyGroupTimeSeriesCommand;
}($Command));
export { ListAnomalyGroupTimeSeriesCommand };
//# sourceMappingURL=ListAnomalyGroupTimeSeriesCommand.js.map