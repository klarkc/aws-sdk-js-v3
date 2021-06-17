import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { ImportKeyPairRequest, ImportKeyPairResult } from "../models/models_4";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ImportKeyPairCommandInput extends ImportKeyPairRequest {
}
export interface ImportKeyPairCommandOutput extends ImportKeyPairResult, __MetadataBearer {
}
/**
 * <p>Imports the public key from an RSA key pair that you created with a third-party tool.
 *         Compare this with <a>CreateKeyPair</a>, in which AWS creates the key pair and gives the keys to you
 *         (AWS keeps a copy of the public key). With ImportKeyPair, you create the key pair and give AWS just the public key.
 *         The private key is never transferred between you and AWS.</p>
 *          <p>For more information about key pairs, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a>
 * 				in the <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, ImportKeyPairCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, ImportKeyPairCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new ImportKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ImportKeyPairCommandInput} for command's `input` shape.
 * @see {@link ImportKeyPairCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ImportKeyPairCommand extends $Command<ImportKeyPairCommandInput, ImportKeyPairCommandOutput, EC2ClientResolvedConfig> {
    readonly input: ImportKeyPairCommandInput;
    constructor(input: ImportKeyPairCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ImportKeyPairCommandInput, ImportKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
