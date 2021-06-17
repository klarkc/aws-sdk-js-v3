import { __extends } from "tslib";
import { DescribeReservedCacheNodesOfferingsMessage, ReservedCacheNodesOfferingMessage } from "../models/models_0";
import { deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand, serializeAws_queryDescribeReservedCacheNodesOfferingsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists available reserved cache
 *             node offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElastiCacheClient, DescribeReservedCacheNodesOfferingsCommand } from "@aws-sdk/client-elasticache"; // ES Modules import
 * // const { ElastiCacheClient, DescribeReservedCacheNodesOfferingsCommand } = require("@aws-sdk/client-elasticache"); // CommonJS import
 * const client = new ElastiCacheClient(config);
 * const command = new DescribeReservedCacheNodesOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedCacheNodesOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedCacheNodesOfferingsCommandOutput} for command's `response` shape.
 * @see {@link ElastiCacheClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservedCacheNodesOfferingsCommand = /** @class */ (function (_super) {
    __extends(DescribeReservedCacheNodesOfferingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservedCacheNodesOfferingsCommand(input) {
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
    DescribeReservedCacheNodesOfferingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElastiCacheClient";
        var commandName = "DescribeReservedCacheNodesOfferingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservedCacheNodesOfferingsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ReservedCacheNodesOfferingMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservedCacheNodesOfferingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeReservedCacheNodesOfferingsCommand(input, context);
    };
    DescribeReservedCacheNodesOfferingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeReservedCacheNodesOfferingsCommand(output, context);
    };
    return DescribeReservedCacheNodesOfferingsCommand;
}($Command));
export { DescribeReservedCacheNodesOfferingsCommand };
//# sourceMappingURL=DescribeReservedCacheNodesOfferingsCommand.js.map