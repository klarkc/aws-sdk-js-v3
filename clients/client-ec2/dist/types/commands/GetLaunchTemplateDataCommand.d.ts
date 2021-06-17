import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetLaunchTemplateDataRequest, GetLaunchTemplateDataResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLaunchTemplateDataCommandInput extends GetLaunchTemplateDataRequest {
}
export interface GetLaunchTemplateDataCommandOutput extends GetLaunchTemplateDataResult, __MetadataBearer {
}
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
export declare class GetLaunchTemplateDataCommand extends $Command<GetLaunchTemplateDataCommandInput, GetLaunchTemplateDataCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetLaunchTemplateDataCommandInput;
    constructor(input: GetLaunchTemplateDataCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLaunchTemplateDataCommandInput, GetLaunchTemplateDataCommandOutput>;
    private serialize;
    private deserialize;
}
