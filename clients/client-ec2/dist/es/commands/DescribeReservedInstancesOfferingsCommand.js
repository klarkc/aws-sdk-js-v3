import { __extends } from "tslib";
import { DescribeReservedInstancesOfferingsRequest, DescribeReservedInstancesOfferingsResult, } from "../models/models_3";
import { deserializeAws_ec2DescribeReservedInstancesOfferingsCommand, serializeAws_ec2DescribeReservedInstancesOfferingsCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes Reserved Instance offerings that are available for purchase. With Reserved Instances, you purchase the right to launch instances for a period of time. During that time period, you do not receive insufficient capacity errors, and you pay a lower usage rate than the rate charged for On-Demand instances for the actual time used.</p>
 *          <p>If you have listed your own Reserved Instances for sale in the Reserved Instance Marketplace, they will be excluded from these results. This is to ensure that you do not purchase your own Reserved Instances.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a>
 * 				in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeReservedInstancesOfferingsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeReservedInstancesOfferingsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeReservedInstancesOfferingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeReservedInstancesOfferingsCommandInput} for command's `input` shape.
 * @see {@link DescribeReservedInstancesOfferingsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeReservedInstancesOfferingsCommand = /** @class */ (function (_super) {
    __extends(DescribeReservedInstancesOfferingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeReservedInstancesOfferingsCommand(input) {
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
    DescribeReservedInstancesOfferingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "DescribeReservedInstancesOfferingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeReservedInstancesOfferingsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeReservedInstancesOfferingsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeReservedInstancesOfferingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2DescribeReservedInstancesOfferingsCommand(input, context);
    };
    DescribeReservedInstancesOfferingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2DescribeReservedInstancesOfferingsCommand(output, context);
    };
    return DescribeReservedInstancesOfferingsCommand;
}($Command));
export { DescribeReservedInstancesOfferingsCommand };
//# sourceMappingURL=DescribeReservedInstancesOfferingsCommand.js.map