import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyVpcTenancyRequest, ModifyVpcTenancyResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyVpcTenancyCommandInput extends ModifyVpcTenancyRequest {
}
export interface ModifyVpcTenancyCommandOutput extends ModifyVpcTenancyResult, __MetadataBearer {
}
/**
 * <p>Modifies the instance tenancy attribute of the specified VPC. You can change the
 *             instance tenancy attribute of a VPC to <code>default</code> only. You cannot change the
 *             instance tenancy attribute to <code>dedicated</code>.</p>
 *         <p>After you modify the tenancy of the VPC, any new instances that you launch into the
 *             VPC have a tenancy of <code>default</code>, unless you specify otherwise during launch.
 *             The tenancy of any existing instances in the VPC is not affected.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/dedicated-instance.html">Dedicated Instances</a> in the
 * 				<i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyVpcTenancyCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyVpcTenancyCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyVpcTenancyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyVpcTenancyCommandInput} for command's `input` shape.
 * @see {@link ModifyVpcTenancyCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyVpcTenancyCommand extends $Command<ModifyVpcTenancyCommandInput, ModifyVpcTenancyCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyVpcTenancyCommandInput;
    constructor(input: ModifyVpcTenancyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyVpcTenancyCommandInput, ModifyVpcTenancyCommandOutput>;
    private serialize;
    private deserialize;
}
