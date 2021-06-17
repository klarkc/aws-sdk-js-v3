import { SSMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SSMClient";
import { DescribeInstanceInformationRequest, DescribeInstanceInformationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeInstanceInformationCommandInput extends DescribeInstanceInformationRequest {
}
export interface DescribeInstanceInformationCommandOutput extends DescribeInstanceInformationResult, __MetadataBearer {
}
/**
 * <p>Describes one or more of your instances, including information about the operating system
 *    platform, the version of SSM Agent installed on the instance, instance status, and so on.</p>
 *          <p>If you specify one or more instance IDs, it returns information for those instances. If you
 *    do not specify instance IDs, it returns information for all your instances. If you specify an
 *    instance ID that is not valid or an instance that you do not own, you receive an error.</p>
 *          <note>
 *             <p>The IamRole field for this API action is the Amazon Identity and Access Management (IAM)
 *     role assigned to on-premises instances. This call does not return the IAM role for EC2
 *     instances.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeInstanceInformationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeInstanceInformationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeInstanceInformationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeInstanceInformationCommandInput} for command's `input` shape.
 * @see {@link DescribeInstanceInformationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeInstanceInformationCommand extends $Command<DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput, SSMClientResolvedConfig> {
    readonly input: DescribeInstanceInformationCommandInput;
    constructor(input: DescribeInstanceInformationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SSMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeInstanceInformationCommandInput, DescribeInstanceInformationCommandOutput>;
    private serialize;
    private deserialize;
}
