"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeVpcClassicLinkDnsSupportCommand = void 0;
const models_3_1 = require("../models/models_3");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the ClassicLink DNS support status of one or more VPCs. If enabled, the DNS
 *             hostname of a linked EC2-Classic instance resolves to its private IP address when
 *             addressed from an instance in the VPC to which it's linked. Similarly, the DNS hostname
 *             of an instance in a VPC resolves to its private IP address when addressed from a linked
 *             EC2-Classic instance. For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/vpc-classiclink.html">ClassicLink</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVpcClassicLinkDnsSupportCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVpcClassicLinkDnsSupportCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVpcClassicLinkDnsSupportCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVpcClassicLinkDnsSupportCommandInput} for command's `input` shape.
 * @see {@link DescribeVpcClassicLinkDnsSupportCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeVpcClassicLinkDnsSupportCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeVpcClassicLinkDnsSupportCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_3_1.DescribeVpcClassicLinkDnsSupportRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_3_1.DescribeVpcClassicLinkDnsSupportResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeVpcClassicLinkDnsSupportCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeVpcClassicLinkDnsSupportCommand(output, context);
    }
}
exports.DescribeVpcClassicLinkDnsSupportCommand = DescribeVpcClassicLinkDnsSupportCommand;
//# sourceMappingURL=DescribeVpcClassicLinkDnsSupportCommand.js.map