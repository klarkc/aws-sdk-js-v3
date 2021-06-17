import { __extends } from "tslib";
import { DescribeReservedDBInstancesOfferingsMessage, ReservedDBInstancesOfferingMessage } from "../models/models_1";
import { deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand, serializeAws_queryDescribeReservedDBInstancesOfferingsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists available reserved DB instance offerings.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DescribeReservedDBInstancesOfferingsCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DescribeReservedDBInstancesOfferingsCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DescribeReservedDBInstancesOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedDBInstancesOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedDBInstancesOfferingsCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservedDBInstancesOfferingsCommand = /** @class */ (function (_super) {
    __extends(DescribeReservedDBInstancesOfferingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservedDBInstancesOfferingsCommand(input) {
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
    DescribeReservedDBInstancesOfferingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DescribeReservedDBInstancesOfferingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservedDBInstancesOfferingsMessage.filterSensitiveLog,
            outputFilterSensitiveLog: ReservedDBInstancesOfferingMessage.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservedDBInstancesOfferingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDescribeReservedDBInstancesOfferingsCommand(input, context);
    };
    DescribeReservedDBInstancesOfferingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDescribeReservedDBInstancesOfferingsCommand(output, context);
    };
    return DescribeReservedDBInstancesOfferingsCommand;
}($Command));
export { DescribeReservedDBInstancesOfferingsCommand };
//# sourceMappingURL=DescribeReservedDBInstancesOfferingsCommand.js.map