import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetFlowLogsIntegrationTemplateRequest, GetFlowLogsIntegrationTemplateResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetFlowLogsIntegrationTemplateCommandInput extends GetFlowLogsIntegrationTemplateRequest {
}
export interface GetFlowLogsIntegrationTemplateCommandOutput extends GetFlowLogsIntegrationTemplateResult, __MetadataBearer {
}
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
export declare class GetFlowLogsIntegrationTemplateCommand extends $Command<GetFlowLogsIntegrationTemplateCommandInput, GetFlowLogsIntegrationTemplateCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetFlowLogsIntegrationTemplateCommandInput;
    constructor(input: GetFlowLogsIntegrationTemplateCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetFlowLogsIntegrationTemplateCommandInput, GetFlowLogsIntegrationTemplateCommandOutput>;
    private serialize;
    private deserialize;
}
