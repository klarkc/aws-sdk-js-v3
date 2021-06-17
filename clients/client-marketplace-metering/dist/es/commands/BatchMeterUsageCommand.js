import { __extends } from "tslib";
import { BatchMeterUsageRequest, BatchMeterUsageResult } from "../models/models_0";
import { deserializeAws_json1_1BatchMeterUsageCommand, serializeAws_json1_1BatchMeterUsageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>BatchMeterUsage is called from a SaaS application listed on the AWS Marketplace to
 *             post metering records for a set of customers.</p>
 *         <p>For identical requests, the API is idempotent; requests can be retried with the
 *             same records or a subset of the input records.</p>
 *         <p>Every request to BatchMeterUsage is for one product. If you need to meter usage for
 *             multiple products, you must make multiple calls to BatchMeterUsage.</p>
 *         <p>BatchMeterUsage can process up to 25 UsageRecords at a time.</p>
 *         <p>A UsageRecord can optionally include multiple usage allocations, to provide customers
 *             with usagedata split into buckets by tags that you define (or allow the customer to
 *             define).</p>
 *         <p>BatchMeterUsage requests must be less than 1MB in size.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, BatchMeterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, BatchMeterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const command = new BatchMeterUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchMeterUsageCommandInput} for command's `input` shape.
 * @see {@link BatchMeterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BatchMeterUsageCommand = /** @class */ (function (_super) {
    __extends(BatchMeterUsageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BatchMeterUsageCommand(input) {
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
    BatchMeterUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MarketplaceMeteringClient";
        var commandName = "BatchMeterUsageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BatchMeterUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BatchMeterUsageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BatchMeterUsageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1BatchMeterUsageCommand(input, context);
    };
    BatchMeterUsageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1BatchMeterUsageCommand(output, context);
    };
    return BatchMeterUsageCommand;
}($Command));
export { BatchMeterUsageCommand };
//# sourceMappingURL=BatchMeterUsageCommand.js.map