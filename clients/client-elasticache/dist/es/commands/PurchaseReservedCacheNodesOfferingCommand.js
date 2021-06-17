import { __extends } from "tslib";
import { PurchaseReservedCacheNodesOfferingMessage, PurchaseReservedCacheNodesOfferingResult, } from "../models/models_0";
import { deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand, serializeAws_queryPurchaseReservedCacheNodesOfferingCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var PurchaseReservedCacheNodesOfferingCommand = /** @class */ (function (_super) {
    __extends(PurchaseReservedCacheNodesOfferingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PurchaseReservedCacheNodesOfferingCommand(input) {
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
    PurchaseReservedCacheNodesOfferingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "PurchaseReservedCacheNodesOfferingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PurchaseReservedCacheNodesOfferingMessage.filterSensitiveLog,
            outputFilterSensitiveLog: PurchaseReservedCacheNodesOfferingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PurchaseReservedCacheNodesOfferingCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPurchaseReservedCacheNodesOfferingCommand(input, context);
    };
    PurchaseReservedCacheNodesOfferingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPurchaseReservedCacheNodesOfferingCommand(output, context);
    };
    return PurchaseReservedCacheNodesOfferingCommand;
}($Command));
export { PurchaseReservedCacheNodesOfferingCommand };
//# sourceMappingURL=PurchaseReservedCacheNodesOfferingCommand.js.map