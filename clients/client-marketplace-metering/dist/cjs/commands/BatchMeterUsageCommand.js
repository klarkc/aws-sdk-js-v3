"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BatchMeterUsageCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class BatchMeterUsageCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "MarketplaceMeteringClient";
        const commandName = "BatchMeterUsageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.BatchMeterUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.BatchMeterUsageResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1BatchMeterUsageCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1BatchMeterUsageCommand(output, context);
    }
}
exports.BatchMeterUsageCommand = BatchMeterUsageCommand;
//# sourceMappingURL=BatchMeterUsageCommand.js.map