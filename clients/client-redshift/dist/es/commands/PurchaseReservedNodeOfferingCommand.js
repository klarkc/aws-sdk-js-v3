import { __extends } from "tslib";
import { PurchaseReservedNodeOfferingMessage, PurchaseReservedNodeOfferingResult } from "../models/models_1";
import { deserializeAws_queryPurchaseReservedNodeOfferingCommand, serializeAws_queryPurchaseReservedNodeOfferingCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows you to purchase reserved nodes. Amazon Redshift offers a predefined set of
 *             reserved node offerings. You can purchase one or more of the offerings. You can call the
 *                 <a>DescribeReservedNodeOfferings</a> API to obtain the available reserved
 *             node offerings. You can call this API by providing a specific reserved node offering and
 *             the number of nodes you want to reserve. </p>
 *         <p>
 * For more information about reserved node offerings, go to
 * <a href="https://docs.aws.amazon.com/redshift/latest/mgmt/purchase-reserved-node-instance.html">Purchasing Reserved Nodes</a>
 * in the <i>Amazon Redshift Cluster Management Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, PurchaseReservedNodeOfferingCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, PurchaseReservedNodeOfferingCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new PurchaseReservedNodeOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedNodeOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedNodeOfferingCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PurchaseReservedNodeOfferingCommand = /** @class */ (function (_super) {
    __extends(PurchaseReservedNodeOfferingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PurchaseReservedNodeOfferingCommand(input) {
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
    PurchaseReservedNodeOfferingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "PurchaseReservedNodeOfferingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PurchaseReservedNodeOfferingMessage.filterSensitiveLog,
            outputFilterSensitiveLog: PurchaseReservedNodeOfferingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PurchaseReservedNodeOfferingCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPurchaseReservedNodeOfferingCommand(input, context);
    };
    PurchaseReservedNodeOfferingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPurchaseReservedNodeOfferingCommand(output, context);
    };
    return PurchaseReservedNodeOfferingCommand;
}($Command));
export { PurchaseReservedNodeOfferingCommand };
//# sourceMappingURL=PurchaseReservedNodeOfferingCommand.js.map