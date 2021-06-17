"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MeterUsageCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class MeterUsageCommand extends smithy_client_1.Command {
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
        const commandName = "MeterUsageCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.MeterUsageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.MeterUsageResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1MeterUsageCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1MeterUsageCommand(output, context);
    }
}
exports.MeterUsageCommand = MeterUsageCommand;
//# sourceMappingURL=MeterUsageCommand.js.map