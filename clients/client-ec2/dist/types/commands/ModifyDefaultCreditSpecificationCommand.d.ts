import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyDefaultCreditSpecificationRequest, ModifyDefaultCreditSpecificationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyDefaultCreditSpecificationCommandInput extends ModifyDefaultCreditSpecificationRequest {
}
export interface ModifyDefaultCreditSpecificationCommandOutput extends ModifyDefaultCreditSpecificationResult, __MetadataBearer {
}
/**
 * <p>Modifies the default credit option for CPU usage of burstable performance instances.
 *             The default credit option is set at the account level per AWS Region, and is specified
 *             per instance family. All new burstable performance instances in the account launch using
 *             the default credit option.</p>
 *         <p>
 *             <code>ModifyDefaultCreditSpecification</code> is an asynchronous operation, which works at an AWS
 *             Region level and modifies the credit option for each Availability Zone. All zones in a
 *             Region are updated within five minutes. But if instances are launched during this
 *             operation, they might not get the new credit option until the zone is updated. To verify
 *             whether the update has occurred, you can call <code>GetDefaultCreditSpecification</code> and check
 *             <code>DefaultCreditSpecification</code> for updates.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *             performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyDefaultCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyDefaultCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyDefaultCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDefaultCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link ModifyDefaultCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyDefaultCreditSpecificationCommand extends $Command<ModifyDefaultCreditSpecificationCommandInput, ModifyDefaultCreditSpecificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyDefaultCreditSpecificationCommandInput;
    constructor(input: ModifyDefaultCreditSpecificationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyDefaultCreditSpecificationCommandInput, ModifyDefaultCreditSpecificationCommandOutput>;
    private serialize;
    private deserialize;
}
