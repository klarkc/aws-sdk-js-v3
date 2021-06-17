import { ServiceInputTypes, ServiceOutputTypes, SignerClientResolvedConfig } from "../SignerClient";
import { GetSigningPlatformRequest, GetSigningPlatformResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetSigningPlatformCommandInput extends GetSigningPlatformRequest {
}
export interface GetSigningPlatformCommandOutput extends GetSigningPlatformResponse, __MetadataBearer {
}
/**
 * <p>Returns information on a specific signing platform.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, GetSigningPlatformCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, GetSigningPlatformCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new GetSigningPlatformCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSigningPlatformCommandInput} for command's `input` shape.
 * @see {@link GetSigningPlatformCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetSigningPlatformCommand extends $Command<GetSigningPlatformCommandInput, GetSigningPlatformCommandOutput, SignerClientResolvedConfig> {
    readonly input: GetSigningPlatformCommandInput;
    constructor(input: GetSigningPlatformCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SignerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetSigningPlatformCommandInput, GetSigningPlatformCommandOutput>;
    private serialize;
    private deserialize;
}
