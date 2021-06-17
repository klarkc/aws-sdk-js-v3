"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeSpotInstanceRequestsCommand = void 0;
const models_3_1 = require("../models/models_3");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the specified Spot Instance requests.</p>
 *          <p>You can use <code>DescribeSpotInstanceRequests</code> to find a
 * 		running Spot Instance by examining the response. If the status of
 * 		the Spot Instance is <code>fulfilled</code>, the instance ID
 * 		appears in the response and contains the identifier of the instance.
 * 		Alternatively, you can use <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_DescribeInstances">DescribeInstances</a> with a filter to
 * 		look for instances where the instance lifecycle is <code>spot</code>.</p>
 *         <p>We recommend that you set <code>MaxResults</code> to a value between 5 and 1000 to
 *             limit the number of results returned. This paginates the output, which makes the list
 *             more manageable and returns the results faster. If the list of results exceeds your
 *                 <code>MaxResults</code> value, then that number of results is returned along with a
 *                 <code>NextToken</code> value that can be passed to a subsequent
 *                 <code>DescribeSpotInstanceRequests</code> request to retrieve the remaining
 *             results.</p>
 * 	        <p>Spot Instance requests are deleted four hours after they are canceled and their instances
 *             are terminated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeSpotInstanceRequestsCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeSpotInstanceRequestsCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeSpotInstanceRequestsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSpotInstanceRequestsCommandInput} for command's `input` shape.
 * @see {@link DescribeSpotInstanceRequestsCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeSpotInstanceRequestsCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeSpotInstanceRequestsCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_3_1.DescribeSpotInstanceRequestsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_3_1.DescribeSpotInstanceRequestsResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeSpotInstanceRequestsCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeSpotInstanceRequestsCommand(output, context);
    }
}
exports.DescribeSpotInstanceRequestsCommand = DescribeSpotInstanceRequestsCommand;
//# sourceMappingURL=DescribeSpotInstanceRequestsCommand.js.map