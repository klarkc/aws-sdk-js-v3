import { __extends } from "tslib";
import { MeterUsageRequest, MeterUsageResult } from "../models/models_0";
import { deserializeAws_json1_1MeterUsageCommand, serializeAws_json1_1MeterUsageCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>API to emit metering records. For identical requests, the API is idempotent. It
 *             simply returns the metering record ID.</p>
 *         <p>MeterUsage is authenticated on the buyer's AWS account using credentials from the
 *             EC2 instance, ECS task, or EKS pod.</p>
 *         <p>MeterUsage can optionally include multiple usage allocations, to provide customers
 *             with usage data split into buckets by tags that you define (or allow the customer to
 *             define).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MarketplaceMeteringClient, MeterUsageCommand } from "@aws-sdk/client-marketplace-metering"; // ES Modules import
 * // const { MarketplaceMeteringClient, MeterUsageCommand } = require("@aws-sdk/client-marketplace-metering"); // CommonJS import
 * const client = new MarketplaceMeteringClient(config);
 * const command = new MeterUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MeterUsageCommandInput} for command's `input` shape.
 * @see {@link MeterUsageCommandOutput} for command's `response` shape.
 * @see {@link MarketplaceMeteringClientResolvedConfig | config} for command's `input` shape.
 *
 */
var MeterUsageCommand = /** @class */ (function (_super) {
    __extends(MeterUsageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function MeterUsageCommand(input) {
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
    MeterUsageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MarketplaceMeteringClient";
        var commandName = "MeterUsageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: MeterUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: MeterUsageResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    MeterUsageCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1MeterUsageCommand(input, context);
    };
    MeterUsageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1MeterUsageCommand(output, context);
    };
    return MeterUsageCommand;
}($Command));
export { MeterUsageCommand };
//# sourceMappingURL=MeterUsageCommand.js.map