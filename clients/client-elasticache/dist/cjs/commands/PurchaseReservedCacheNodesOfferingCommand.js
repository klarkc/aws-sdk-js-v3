"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PurchaseReservedCacheNodesOfferingCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_query_1 = require("../protocols/Aws_query");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Allows you to purchase a reserved
 *             cache node offering. Reserved nodes are not eligible for cancellation and are non-refundable. For more information,
 *             see <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/red-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Redis or
 *             <a href="https://docs.aws.amazon.com/AmazonElastiCache/latest/mem-ug/reserved-nodes.html">Managing Costs with Reserved Nodes</a> for Memcached.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, PurchaseReservedCacheNodesOfferingCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, PurchaseReservedCacheNodesOfferingCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new PurchaseReservedCacheNodesOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedCacheNodesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedCacheNodesOfferingCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
class PurchaseReservedCacheNodesOfferingCommand extends smithy_client_1.Command {
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
        const clientName = "ElastiCacheClient";
        const commandName = "PurchaseReservedCacheNodesOfferingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.PurchaseReservedCacheNodesOfferingMessage.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.PurchaseReservedCacheNodesOfferingResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_query_1.serializeAws_queryPurchaseReservedCacheNodesOfferingCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_query_1.deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand(output, context);
    }
}
exports.PurchaseReservedCacheNodesOfferingCommand = PurchaseReservedCacheNodesOfferingCommand;
//# sourceMappingURL=PurchaseReservedCacheNodesOfferingCommand.js.map