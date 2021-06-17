import { __extends } from "tslib";
import { ListMetricSetsRequest, ListMetricSetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListMetricSetsCommand, serializeAws_restJson1ListMetricSetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the datasets in the current AWS Region.</p>
 *          <p>Amazon Lookout for Metrics API actions are eventually consistent. If you do a read operation on a resource
 *       immediately after creating or modifying it, use retries to allow time for the write operation to complete.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutMetricsClient, ListMetricSetsCommand } from "@aws-sdk/client-lookoutmetrics"; // ES Modules import
 * // const { LookoutMetricsClient, ListMetricSetsCommand } = require("@aws-sdk/client-lookoutmetrics"); // CommonJS import
 * const client = new LookoutMetricsClient(config);
 * const command = new ListMetricSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListMetricSetsCommandInput} for command's `input` shape.
 * @see {@link ListMetricSetsCommandOutput} for command's `response` shape.
 * @see {@link LookoutMetricsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListMetricSetsCommand = /** @class */ (function (_super) {
    __extends(ListMetricSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListMetricSetsCommand(input) {
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
    ListMetricSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LookoutMetricsClient";
        var commandName = "ListMetricSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListMetricSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListMetricSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListMetricSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListMetricSetsCommand(input, context);
    };
    ListMetricSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListMetricSetsCommand(output, context);
    };
    return ListMetricSetsCommand;
}($Command));
export { ListMetricSetsCommand };
//# sourceMappingURL=ListMetricSetsCommand.js.map