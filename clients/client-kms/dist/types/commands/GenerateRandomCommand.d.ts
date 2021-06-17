import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { GenerateRandomRequest, GenerateRandomResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GenerateRandomCommandInput extends GenerateRandomRequest {
}
export interface GenerateRandomCommandOutput extends GenerateRandomResponse, __MetadataBearer {
}
/**
 * <p>Returns a random byte string that is cryptographically secure.</p>
 *          <p>By default, the random byte string is generated in AWS KMS. To generate the byte string in
 *       the AWS CloudHSM cluster that is associated with a <a href="https://docs.aws.amazon.com/kms/latest/developerguide/custom-key-store-overview.html">custom key store</a>, specify the custom key store
 *       ID.</p>
 *          <p>For more information about entropy and random number generation, see the <a href="https://d0.awsstatic.com/whitepapers/KMS-Cryptographic-Details.pdf">AWS Key Management Service
 *       Cryptographic Details</a> whitepaper.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:GenerateRandom</a> (IAM policy)</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, GenerateRandomCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, GenerateRandomCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new GenerateRandomCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GenerateRandomCommandInput} for command's `input` shape.
 * @see {@link GenerateRandomCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GenerateRandomCommand extends $Command<GenerateRandomCommandInput, GenerateRandomCommandOutput, KMSClientResolvedConfig> {
    readonly input: GenerateRandomCommandInput;
    constructor(input: GenerateRandomCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GenerateRandomCommandInput, GenerateRandomCommandOutput>;
    private serialize;
    private deserialize;
}
