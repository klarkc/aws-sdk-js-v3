import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { RevokeSignatureRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface RevokeSignatureCommandInput extends RevokeSignatureRequest {
}
export interface RevokeSignatureCommandOutput extends __MetadataBearer {
}
/**
 * <p>Changes the state of a signing job to REVOKED. This indicates that the signature is no
 * 			longer valid.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RevokeSignatureCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RevokeSignatureCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new RevokeSignatureCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RevokeSignatureCommandInput} for command's `input` shape.
 * @see {@link RevokeSignatureCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class RevokeSignatureCommand extends $Command<RevokeSignatureCommandInput, RevokeSignatureCommandOutput, SignerClientResolvedConfig> {
    readonly input: RevokeSignatureCommandInput;
    constructor(input: RevokeSignatureCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SignerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<RevokeSignatureCommandInput, RevokeSignatureCommandOutput>;
    private serialize;
    private deserialize;
}
