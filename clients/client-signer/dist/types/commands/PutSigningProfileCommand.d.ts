import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { PutSigningProfileRequest, PutSigningProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface PutSigningProfileCommandInput extends PutSigningProfileRequest {
}
export interface PutSigningProfileCommandOutput extends PutSigningProfileResponse, __MetadataBearer {
}
/**
 * <p>Creates a signing profile. A signing profile is a code signing template that can be used to
 * 			carry out a pre-defined signing job. For more information, see <a href="http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html">http://docs.aws.amazon.com/signer/latest/developerguide/gs-profile.html</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, PutSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, PutSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new PutSigningProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutSigningProfileCommandInput} for command's `input` shape.
 * @see {@link PutSigningProfileCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class PutSigningProfileCommand extends $Command<PutSigningProfileCommandInput, PutSigningProfileCommandOutput, SignerClientResolvedConfig> {
    readonly input: PutSigningProfileCommandInput;
    constructor(input: PutSigningProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SignerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<PutSigningProfileCommandInput, PutSigningProfileCommandOutput>;
    private serialize;
    private deserialize;
}
