"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DescribeInstancesCommand = void 0;
const models_2_1 = require("../models/models_2");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Describes the specified instances or all instances.</p>
 *         <p>If you specify instance IDs, the output includes information for only the specified instances.
 *             If you specify filters, the output includes information for only those instances that meet the filter criteria.
 *             If you do not specify instance IDs or filters, the output includes information for all instances,
 *             which can affect performance. We recommend that you use pagination to ensure that the operation
 *             returns quickly and successfully.</p>
 *         <p>If you specify an instance ID that is not valid, an error is returned. If you
 *             specify an instance that you do not own, it is not included in the output.</p>
 *         <p>Recently terminated instances might appear in the returned results. This interval is
 *             usually less than one hour.</p>
 *         <p>If you describe instances in the rare case where an Availability Zone is experiencing
 *             a service disruption and you specify instance IDs that are in the affected zone, or do
 *             not specify any instance IDs at all, the call fails. If you describe instances and
 *             specify only instance IDs that are in an unaffected zone, the call works
 *             normally.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DescribeInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DescribeInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DescribeInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstancesCommandInput} for command's `input` shape.
 * @see {@link DescribeInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class DescribeInstancesCommand extends smithy_client_1.Command {
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
        const commandName = "DescribeInstancesCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_2_1.DescribeInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_2_1.DescribeInstancesResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2DescribeInstancesCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2DescribeInstancesCommand(output, context);
    }
}
exports.DescribeInstancesCommand = DescribeInstancesCommand;
//# sourceMappingURL=DescribeInstancesCommand.js.map