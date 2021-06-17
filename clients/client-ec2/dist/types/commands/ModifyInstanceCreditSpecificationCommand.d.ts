import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ModifyInstanceCreditSpecificationRequest, ModifyInstanceCreditSpecificationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ModifyInstanceCreditSpecificationCommandInput extends ModifyInstanceCreditSpecificationRequest {
}
export interface ModifyInstanceCreditSpecificationCommandOutput extends ModifyInstanceCreditSpecificationResult, __MetadataBearer {
}
/**
 * <p>Modifies the credit option for CPU usage on a running or stopped burstable performance
 *             instance. The credit options are <code>standard</code> and
 *             <code>unlimited</code>.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *                 performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ModifyInstanceCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ModifyInstanceCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ModifyInstanceCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyInstanceCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link ModifyInstanceCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ModifyInstanceCreditSpecificationCommand extends $Command<ModifyInstanceCreditSpecificationCommandInput, ModifyInstanceCreditSpecificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ModifyInstanceCreditSpecificationCommandInput;
    constructor(input: ModifyInstanceCreditSpecificationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ModifyInstanceCreditSpecificationCommandInput, ModifyInstanceCreditSpecificationCommandOutput>;
    private serialize;
    private deserialize;
}
