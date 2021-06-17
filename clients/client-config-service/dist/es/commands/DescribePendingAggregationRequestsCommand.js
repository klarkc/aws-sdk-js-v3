import { __extends } from "tslib";
import { DescribePendingAggregationRequestsRequest, DescribePendingAggregationRequestsResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribePendingAggregationRequestsCommand, serializeAws_json1_1DescribePendingAggregationRequestsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of all pending aggregation requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DescribePendingAggregationRequestsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DescribePendingAggregationRequestsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DescribePendingAggregationRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePendingAggregationRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribePendingAggregationRequestsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribePendingAggregationRequestsCommand = /** @class */ (function (_super) {
    __extends(DescribePendingAggregationRequestsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribePendingAggregationRequestsCommand(input) {
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
    DescribePendingAggregationRequestsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DescribePendingAggregationRequestsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribePendingAggregationRequestsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribePendingAggregationRequestsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribePendingAggregationRequestsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribePendingAggregationRequestsCommand(input, context);
    };
    DescribePendingAggregationRequestsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribePendingAggregationRequestsCommand(output, context);
    };
    return DescribePendingAggregationRequestsCommand;
}($Command));
export { DescribePendingAggregationRequestsCommand };
//# sourceMappingURL=DescribePendingAggregationRequestsCommand.js.map