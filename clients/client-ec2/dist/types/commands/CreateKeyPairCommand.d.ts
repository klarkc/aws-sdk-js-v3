import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { CreateKeyPairRequest, KeyPair } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateKeyPairCommandInput extends CreateKeyPairRequest {
}
export interface CreateKeyPairCommandOutput extends KeyPair, __MetadataBearer {
}
/**
 * <p>Creates a 2048-bit RSA key pair with the specified name. Amazon EC2 stores the public
 *             key and displays the private key for you to save to a file. The private key is returned
 *             as an unencrypted PEM encoded PKCS#1 private key. If a key with the specified name
 *             already exists, Amazon EC2 returns an error.</p>
 *          <p>You can have up to five thousand key pairs per Region.</p>
 * 		       <p>The key pair returned to you is available only in the Region in which you create it.
 *             If you prefer, you can create your own key pair using a third-party tool and upload it
 *             to any Region using <a>ImportKeyPair</a>.</p>
 *          <p>For more information, see <a href="https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/ec2-key-pairs.html">Key Pairs</a> in the
 *                 <i>Amazon Elastic Compute Cloud User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateKeyPairCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateKeyPairCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateKeyPairCommandInput} for command's `input` shape.
 * @see {@link CreateKeyPairCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateKeyPairCommand extends $Command<CreateKeyPairCommandInput, CreateKeyPairCommandOutput, EC2ClientResolvedConfig> {
    readonly input: CreateKeyPairCommandInput;
    constructor(input: CreateKeyPairCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateKeyPairCommandInput, CreateKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
