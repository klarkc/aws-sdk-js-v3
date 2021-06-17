import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { GetDefaultCreditSpecificationRequest, GetDefaultCreditSpecificationResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetDefaultCreditSpecificationCommandInput extends GetDefaultCreditSpecificationRequest {
}
export interface GetDefaultCreditSpecificationCommandOutput extends GetDefaultCreditSpecificationResult, __MetadataBearer {
}
/**
 * <p>Describes the default credit option for CPU usage of a burstable performance instance family.</p>
 *         <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-performance-instances.html">Burstable
 *             performance instances</a> in the <i>Amazon EC2 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, GetDefaultCreditSpecificationCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, GetDefaultCreditSpecificationCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new GetDefaultCreditSpecificationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetDefaultCreditSpecificationCommandInput} for command's `input` shape.
 * @see {@link GetDefaultCreditSpecificationCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetDefaultCreditSpecificationCommand extends $Command<GetDefaultCreditSpecificationCommandInput, GetDefaultCreditSpecificationCommandOutput, EC2ClientResolvedConfig> {
    readonly input: GetDefaultCreditSpecificationCommandInput;
    constructor(input: GetDefaultCreditSpecificationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetDefaultCreditSpecificationCommandInput, GetDefaultCreditSpecificationCommandOutput>;
    private serialize;
    private deserialize;
}
