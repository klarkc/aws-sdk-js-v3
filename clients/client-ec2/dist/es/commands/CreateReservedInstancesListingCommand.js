import { __extends } from "tslib";
import { CreateReservedInstancesListingRequest, CreateReservedInstancesListingResult } from "../models/models_1";
import { deserializeAws_ec2CreateReservedInstancesListingCommand, serializeAws_ec2CreateReservedInstancesListingCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a listing for Amazon EC2 Standard Reserved Instances to be sold in the Reserved Instance
 * 			Marketplace. You can submit one Standard Reserved Instance listing at a time. To get a list of your
 * 			Standard Reserved Instances, you can use the <a>DescribeReservedInstances</a> operation.</p>
 *          <note>
 *             <p>Only Standard Reserved Instances can be sold in the Reserved Instance Marketplace.
 *        Convertible Reserved Instances cannot be sold.</p>
 *          </note>
 * 		       <p>The Reserved Instance Marketplace matches sellers who want to resell Standard Reserved Instance capacity that they no longer need with buyers who want to purchase additional capacity. Reserved Instances bought and sold through the Reserved Instance Marketplace work like any other Reserved Instances.</p>
 * 		       <p>To sell your Standard Reserved Instances, you must first register as a seller in the Reserved Instance
 *       Marketplace. After completing the registration process, you can create a Reserved Instance
 *       Marketplace listing of some or all of your Standard Reserved Instances, and specify the upfront price
 *       to receive for them. Your Standard Reserved Instance listings then become available for purchase. To
 *       view the details of your Standard Reserved Instance listing, you can use the
 *         <a>DescribeReservedInstancesListings</a> operation.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-market-general.html">Reserved Instance Marketplace</a> in the
 * 				<i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateReservedInstancesListingCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateReservedInstancesListingCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateReservedInstancesListingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateReservedInstancesListingCommandInput} for command's `input` shape.
 * @see {@link CreateReservedInstancesListingCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateReservedInstancesListingCommand = /** @class */ (function (_super) {
    __extends(CreateReservedInstancesListingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateReservedInstancesListingCommand(input) {
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
    CreateReservedInstancesListingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateReservedInstancesListingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateReservedInstancesListingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateReservedInstancesListingResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateReservedInstancesListingCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateReservedInstancesListingCommand(input, context);
    };
    CreateReservedInstancesListingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateReservedInstancesListingCommand(output, context);
    };
    return CreateReservedInstancesListingCommand;
}($Command));
export { CreateReservedInstancesListingCommand };
//# sourceMappingURL=CreateReservedInstancesListingCommand.js.map