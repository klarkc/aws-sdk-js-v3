"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetLaunchTemplateDataCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Retrieves the configuration data of the specified instance. You can use this data
 *             to create a launch template. </p>
 *         <p>This action calls on other describe actions to get instance information. Depending on your instance configuration, you may need to allow the following
 *             actions in your IAM policy: DescribeSpotInstanceRequests, DescribeInstanceCreditSpecifications, DescribeVolumes, DescribeInstanceAttribute, and DescribeElasticGpus. Or, you can allow
 *         <code>describe*</code> depending on your instance requirements.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetLaunchTemplateDataCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetLaunchTemplateDataCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetLaunchTemplateDataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLaunchTemplateDataCommandInput} for command's `input` shape.
 * @see {@link GetLaunchTemplateDataCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetLaunchTemplateDataCommand extends smithy_client_1.Command {
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
        const commandName = "GetLaunchTemplateDataCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.GetLaunchTemplateDataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.GetLaunchTemplateDataResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2GetLaunchTemplateDataCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2GetLaunchTemplateDataCommand(output, context);
    }
}
exports.GetLaunchTemplateDataCommand = GetLaunchTemplateDataCommand;
//# sourceMappingURL=GetLaunchTemplateDataCommand.js.map