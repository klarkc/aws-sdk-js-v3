"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeVolumesCommand = void 0;
const models_3_1 = require("../models/models_3");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the specified EBS volumes or all of your EBS volumes.</p>
 *          <p>If you are describing a long list of volumes, we recommend that you paginate the output to make the list
 *       more manageable. The <code>MaxResults</code> parameter sets the maximum number of results
 *       returned in a single page. If the list of results exceeds your <code>MaxResults</code> value,
 *       then that number of results is returned along with a <code>NextToken</code> value that can be
 *       passed to a subsequent <code>DescribeVolumes</code> request to retrieve the remaining
 *       results.</p>
 *          <p>For more information about EBS volumes, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/EBSVolumes.html">Amazon EBS volumes</a> in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeVolumesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeVolumesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeVolumesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeVolumesCommandInput} for command's `input` shape.
 * @see {@link DescribeVolumesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeVolumesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeVolumesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_3_1.DescribeVolumesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_3_1.DescribeVolumesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeVolumesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeVolumesCommand(output, context);
    }
}
exports.DescribeVolumesCommand = DescribeVolumesCommand;
//# sourceMappingURL=DescribeVolumesCommand.js.map