import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyReservedInstancesRequest, ModifyReservedInstancesResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyReservedInstancesCommandInput extends ModifyReservedInstancesRequest {
}
export interface ModifyReservedInstancesCommandOutput extends ModifyReservedInstancesResult, __MetadataBearer {
}
/**
 * <p>Modifies the Availability Zone, instance count, instance type, or network platform
 *             (EC2-Classic or EC2-VPC) of your Reserved Instances. The Reserved Instances to be
 *             modified must be identical, except for Availability Zone, network platform, and instance
 *             type.</p>
 * 		       <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ri-modifying.html">Modifying Reserved
 * 				Instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyReservedInstancesCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyReservedInstancesCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyReservedInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyReservedInstancesCommandInput} for command's `input` shape.
 * @see {@link ModifyReservedInstancesCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyReservedInstancesCommand extends $Command<ModifyReservedInstancesCommandInput, ModifyReservedInstancesCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyReservedInstancesCommandInput;
    constructor(input: ModifyReservedInstancesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyReservedInstancesCommandInput, ModifyReservedInstancesCommandOutput>;
    private serialize;
    private deserialize;
}
