import { __extends } from "tslib";
import { ListAnomalyGroupSummariesRequest, ListAnomalyGroupSummariesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListAnomalyGroupSummariesCommand, serializeAws_restJson1ListAnomalyGroupSummariesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of anomaly groups.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListAnomalyGroupSummariesCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListAnomalyGroupSummariesCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ListAnomalyGroupSummariesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAnomalyGroupSummariesCommandInput} for command's `input` shape.
 * @see {@link ListAnomalyGroupSummariesCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAnomalyGroupSummariesCommand = /** @class */ (function (_super) {
    __extends(ListAnomalyGroupSummariesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAnomalyGroupSummariesCommand(input) {
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
    ListAnomalyGroupSummariesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "ListAnomalyGroupSummariesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAnomalyGroupSummariesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListAnomalyGroupSummariesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAnomalyGroupSummariesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListAnomalyGroupSummariesCommand(input, context);
    };
    ListAnomalyGroupSummariesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListAnomalyGroupSummariesCommand(output, context);
    };
    return ListAnomalyGroupSummariesCommand;
}($Command));
export { ListAnomalyGroupSummariesCommand };
//# sourceMappingURL=ListAnomalyGroupSummariesCommand.js.map