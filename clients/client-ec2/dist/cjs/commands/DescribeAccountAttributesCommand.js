"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeAccountAttributesCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes attributes of your AWS account. The following are the supported account attributes:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <code>supported-platforms</code>: Indicates whether your account can launch instances
 *           into EC2-Classic and EC2-VPC, or only into EC2-VPC.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>default-vpc</code>: The ID of the default VPC for your account, or
 *             <code>none</code>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                     <code>max-instances</code>: This attribute is no longer supported. The returned
 *                     value does not reflect your actual vCPU limit for running On-Demand Instances.
 *                     For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-on-demand-instances.html#ec2-on-demand-instances-limits">On-Demand Instance Limits</a> in the
 *                         <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-security-groups-per-interface</code>: The maximum number of security groups
 *           that you can assign to a network interface.</p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can
 *           allocate for use with EC2-Classic. </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <code>vpc-max-elastic-ips</code>: The maximum number of Elastic IP addresses that you can
 *           allocate for use with EC2-VPC.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeAccountAttributesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeAccountAttributesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeAccountAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAttributesCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAttributesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeAccountAttributesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeAccountAttributesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DescribeAccountAttributesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.DescribeAccountAttributesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeAccountAttributesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeAccountAttributesCommand(output, context);
    }
}
exports.DescribeAccountAttributesCommand = DescribeAccountAttributesCommand;
//# sourceMappingURL=DescribeAccountAttributesCommand.js.map