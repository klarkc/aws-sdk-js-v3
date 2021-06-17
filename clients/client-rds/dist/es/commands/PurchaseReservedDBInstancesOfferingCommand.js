import { __extends } from "tslib";
import { PurchaseReservedDBInstancesOfferingMessage, PurchaseReservedDBInstancesOfferingResult, } from "../models/models_1";
import { deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand, serializeAws_queryPurchaseReservedDBInstancesOfferingCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Purchases a reserved DB instance offering.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, PurchaseReservedDBInstancesOfferingCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, PurchaseReservedDBInstancesOfferingCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new PurchaseReservedDBInstancesOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedDBInstancesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedDBInstancesOfferingCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PurchaseReservedDBInstancesOfferingCommand = /** @class */ (function (_super) {
    __extends(PurchaseReservedDBInstancesOfferingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PurchaseReservedDBInstancesOfferingCommand(input) {
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
    PurchaseReservedDBInstancesOfferingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "PurchaseReservedDBInstancesOfferingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PurchaseReservedDBInstancesOfferingMessage.filterSensitiveLog,
            outputFilterSensitiveLog: PurchaseReservedDBInstancesOfferingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PurchaseReservedDBInstancesOfferingCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryPurchaseReservedDBInstancesOfferingCommand(input, context);
    };
    PurchaseReservedDBInstancesOfferingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryPurchaseReservedDBInstancesOfferingCommand(output, context);
    };
    return PurchaseReservedDBInstancesOfferingCommand;
}($Command));
export { PurchaseReservedDBInstancesOfferingCommand };
//# sourceMappingURL=PurchaseReservedDBInstancesOfferingCommand.js.map