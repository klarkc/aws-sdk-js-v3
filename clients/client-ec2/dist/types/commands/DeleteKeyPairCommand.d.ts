import { EC2ClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../EC2Client";
import { DeleteKeyPairRequest } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteKeyPairCommandInput extends DeleteKeyPairRequest {
}
export interface DeleteKeyPairCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified key pair, by removing the public key from Amazon EC2.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, DeleteKeyPairCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, DeleteKeyPairCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new DeleteKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteKeyPairCommandInput} for command's `input` shape.
 * @see {@link DeleteKeyPairCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteKeyPairCommand extends $Command<DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput, EC2ClientResolvedConfig> {
    readonly input: DeleteKeyPairCommandInput;
    constructor(input: DeleteKeyPairCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: EC2ClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteKeyPairCommandInput, DeleteKeyPairCommandOutput>;
    private serialize;
    private deserialize;
}
