import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { DisableClientAuthenticationRequest, DisableClientAuthenticationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisableClientAuthenticationCommandInput extends DisableClientAuthenticationRequest {
}
export interface DisableClientAuthenticationCommandOutput extends DisableClientAuthenticationResult, __MetadataBearer {
}
/**
 * <p>Disables alternative client authentication methods for the specified directory. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableClientAuthenticationCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableClientAuthenticationCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DisableClientAuthenticationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableClientAuthenticationCommandInput} for command's `input` shape.
 * @see {@link DisableClientAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisableClientAuthenticationCommand extends $Command<DisableClientAuthenticationCommandInput, DisableClientAuthenticationCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: DisableClientAuthenticationCommandInput;
    constructor(input: DisableClientAuthenticationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisableClientAuthenticationCommandInput, DisableClientAuthenticationCommandOutput>;
    private serialize;
    private deserialize;
}
