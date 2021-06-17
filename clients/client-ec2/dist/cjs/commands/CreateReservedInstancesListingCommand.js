"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateReservedInstancesListingCommand = void 0;
const models_1_1 = require("../models/models_1");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateReservedInstancesListingCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "EC2Client";
        const commandName = "CreateReservedInstancesListingCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_1_1.CreateReservedInstancesListingRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_1_1.CreateReservedInstancesListingResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2CreateReservedInstancesListingCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2CreateReservedInstancesListingCommand(output, context);
    }
}
exports.CreateReservedInstancesListingCommand = CreateReservedInstancesListingCommand;
//# sourceMappingURL=CreateReservedInstancesListingCommand.js.map