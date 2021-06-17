"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetFlowLogsIntegrationTemplateCommand = void 0;
const models_4_1 = require("../models/models_4");
const Aws_ec2_1 = require("../protocols/Aws_ec2");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
/**
 * <p>Generates a CloudFormation template that streamlines and automates the integration of VPC flow logs
 *             with Amazon Athena. This make it easier for you to query and gain insights from VPC flow logs data.
 *             Based on the information that you provide, we configure resources in the template to do the following:</p>
 *         <ul>
 *             <li>
 *                 <p>Create a table in Athena that maps fields to a custom log format</p>
 *             </li>
 *             <li>
 *                 <p>Create a Lambda function that updates the table with new partitions on a daily, weekly, or
 *                     monthly basis</p>
 *             </li>
 *             <li>
 *                 <p>Create a table partitioned between two timestamps in the past</p>
 *             </li>
 *             <li>
 *                 <p>Create a set of named queries in Athena that you can use to get started quickly</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetFlowLogsIntegrationTemplateCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetFlowLogsIntegrationTemplateCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetFlowLogsIntegrationTemplateCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetFlowLogsIntegrationTemplateCommandInput} for command's `input` shape.
 * @see {@link GetFlowLogsIntegrationTemplateCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
class GetFlowLogsIntegrationTemplateCommand extends smithy_client_1.Command {
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
        const commandName = "GetFlowLogsIntegrationTemplateCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_4_1.GetFlowLogsIntegrationTemplateRequest.filterSensitiveLog,
            outputFilterSensitiveLog: models_4_1.GetFlowLogsIntegrationTemplateResult.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_ec2_1.serializeAws_ec2GetFlowLogsIntegrationTemplateCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_ec2_1.deserializeAws_ec2GetFlowLogsIntegrationTemplateCommand(output, context);
    }
}
exports.GetFlowLogsIntegrationTemplateCommand = GetFlowLogsIntegrationTemplateCommand;
//# sourceMappingURL=GetFlowLogsIntegrationTemplateCommand.js.map