import { __extends } from "tslib";
import { PurchaseReservedInstancesOfferingRequest, PurchaseReservedInstancesOfferingResult } from "../models/models_4";
import { deserializeAws_ec2PurchaseReservedInstancesOfferingCommand, serializeAws_ec2PurchaseReservedInstancesOfferingCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Purchases a Reserved Instance for use with your account. With Reserved Instances, you pay a lower
 *        hourly rate compared to On-Demand instance pricing.</p>
 * 		       <p>Use <a>DescribeReservedInstancesOfferings</a> to get a list of Reserved Instance offerings
 * 			that match your specifications. After you've purchased a Reserved Instance, you can check for your
 * 			new Reserved Instance with <a>DescribeReservedInstances</a>.</p>
 *          <p>To queue a purchase for a future date and time, specify a purchase time. If you do not specify a
 *       purchase time, the default is the current time.</p>
 *    	     <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts-on-demand-reserved-instances.html">Reserved Instances</a> and
 *    	   <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *    	   in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, PurchaseReservedInstancesOfferingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, PurchaseReservedInstancesOfferingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new PurchaseReservedInstancesOfferingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PurchaseReservedInstancesOfferingCommandInput} for command's `input` shape.
 * @see {@link PurchaseReservedInstancesOfferingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PurchaseReservedInstancesOfferingCommand = /** @class */ (function (_super) {
    __extends(PurchaseReservedInstancesOfferingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PurchaseReservedInstancesOfferingCommand(input) {
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
    PurchaseReservedInstancesOfferingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "PurchaseReservedInstancesOfferingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PurchaseReservedInstancesOfferingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PurchaseReservedInstancesOfferingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PurchaseReservedInstancesOfferingCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2PurchaseReservedInstancesOfferingCommand(input, context);
    };
    PurchaseReservedInstancesOfferingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2PurchaseReservedInstancesOfferingCommand(output, context);
    };
    return PurchaseReservedInstancesOfferingCommand;
}($Command));
export { PurchaseReservedInstancesOfferingCommand };
//# sourceMappingURL=PurchaseReservedInstancesOfferingCommand.js.map