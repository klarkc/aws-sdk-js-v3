import { __extends } from "tslib";
import { DescribeReservedNodeOfferingsMessage, ReservedNodeOfferingsMessage } from "../models/models_0";
import { deserializeAws_queryDescribeReservedNodeOfferingsCommand, serializeAws_queryDescribeReservedNodeOfferingsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns a list of the available reserved node offerings by Amazon Redshift with their
 *             descriptions including the node type, the fixed and recurring costs of reserving the
 *             node and duration the node will be reserved for you. These descriptions help you
 *             determine which reserve node offering you want to purchase. You then use the unique
 *             offering ID in you call to <a>PurchaseReservedNodeOffering</a> to reserve one
 *             or more nodes for your Amazon Redshift cluster. </p>
 *         <p>
 * For more information about reserved node offerings, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DescribeReservedNodeOfferingsCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DescribeReservedNodeOfferingsCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DescribeReservedNodeOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedNodeOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedNodeOfferingsCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservedNodeOfferingsCommand = /** @class */ (function (_super) {
    __extends(DescribeReservedNodeOfferingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservedNodeOfferingsCommand(input) {
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
    DescribeReservedNodeOfferingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DescribeReservedNodeOfferingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservedNodeOfferingsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ReservedNodeOfferingsMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservedNodeOfferingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeReservedNodeOfferingsCommand(input, context);
    };
    DescribeReservedNodeOfferingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeReservedNodeOfferingsCommand(output, context);
    };
    return DescribeReservedNodeOfferingsCommand;
}($Command));
export { DescribeReservedNodeOfferingsCommand };
//# sourceMappingURL=DescribeReservedNodeOfferingsCommand.js.map