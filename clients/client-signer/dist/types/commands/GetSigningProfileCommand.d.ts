import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { GetSigningProfileRequest, GetSigningProfileResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSigningProfileCommandInput extends GetSigningProfileRequest {
}
export interface GetSigningProfileCommandOutput extends GetSigningProfileResponse, __MetadataBearer {
}
/**
 * <p>Returns information on a specific signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, GetSigningProfileCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, GetSigningProfileCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new GetSigningProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSigningProfileCommandInput} for command's `input` shape.
 * @see {@link GetSigningProfileCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSigningProfileCommand extends $Command<GetSigningProfileCommandInput, GetSigningProfileCommandOutput, SignerClientResolvedConfig> {
    readonly input: GetSigningProfileCommandInput;
    constructor(input: GetSigningProfileCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SignerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSigningProfileCommandInput, GetSigningProfileCommandOutput>;
    private serialize;
    private deserialize;
}
