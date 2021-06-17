import { __extends } from "tslib";
import { DescribeReservedInstancesListingsRequest, DescribeReservedInstancesListingsResult } from "../models/models_3";
import { deserializeAws_ec2DescribeReservedInstancesListingsCommand, serializeAws_ec2DescribeReservedInstancesListingsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes your account's Reserved Instance listings in the Reserved Instance Marketplace.</p>
 * 		       <p>The Reserved Instance Marketplace matches sellers who want to resell Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p>
 * 		       <p>As a seller, you choose to list some or all of your Reserved Instances, and you specify the upfront price to receive for them. Your Reserved Instances are then listed in the Reserved Instance Marketplace and are available for purchase.</p>
 * 		       <p>As a buyer, you specify the configuration of the Reserved Instance to purchase, and the Marketplace matches what you're searching for with what's available. The Marketplace first sells the lowest priced Reserved Instances to you, and continues to sell available Reserved Instance listings to you until your demand is met. You are charged based on the total price of all of the listings that you purchase.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 *         in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReservedInstancesListingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReservedInstancesListingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeReservedInstancesListingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedInstancesListingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedInstancesListingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservedInstancesListingsCommand = /** @class */ (function (_super) {
    __extends(DescribeReservedInstancesListingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservedInstancesListingsCommand(input) {
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
    DescribeReservedInstancesListingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeReservedInstancesListingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservedInstancesListingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReservedInstancesListingsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservedInstancesListingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeReservedInstancesListingsCommand(input, context);
    };
    DescribeReservedInstancesListingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeReservedInstancesListingsCommand(output, context);
    };
    return DescribeReservedInstancesListingsCommand;
}($Command));
export { DescribeReservedInstancesListingsCommand };
//# sourceMappingURL=DescribeReservedInstancesListingsCommand.js.map