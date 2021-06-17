import { ServiceInputTypes, ServiceOutputTypes, TransferClientResolvedConfig } from "../TransferClient";
import { DescribeSecurityPolicyRequest, DescribeSecurityPolicyResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeSecurityPolicyCommandInput extends DescribeSecurityPolicyRequest {
}
export interface DescribeSecurityPolicyCommandOutput extends DescribeSecurityPolicyResponse, __MetadataBearer {
}
/**
 * <p>Describes the security policy that is attached to your file transfer protocol-enabled
 *       server. The response contains a description of the security policy's properties. For more
 *       information about security policies, see <a href="https://docs.aws.amazon.com/transfer/latest/userguide/security-policies.html">Working with security
 *         policies</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { TransferClient, DescribeSecurityPolicyCommand } from "@aws-sdk/client-transfer"; // ES Modules import
 * // const { TransferClient, DescribeSecurityPolicyCommand } = require("@aws-sdk/client-transfer"); // CommonJS import
 * const client = new TransferClient(config);
 * const command = new DescribeSecurityPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeSecurityPolicyCommandInput} for command's `input` shape.
 * @see {@link DescribeSecurityPolicyCommandOutput} for command's `response` shape.
 * @see {@link TransferClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeSecurityPolicyCommand extends $Command<DescribeSecurityPolicyCommandInput, DescribeSecurityPolicyCommandOutput, TransferClientResolvedConfig> {
    readonly input: DescribeSecurityPolicyCommandInput;
    constructor(input: DescribeSecurityPolicyCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: TransferClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeSecurityPolicyCommandInput, DescribeSecurityPolicyCommandOutput>;
    private serialize;
    private deserialize;
}
