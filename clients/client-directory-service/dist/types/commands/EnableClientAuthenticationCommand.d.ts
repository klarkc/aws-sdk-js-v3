import { DirectoryServiceClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../DirectoryServiceClient";
import { EnableClientAuthenticationRequest, EnableClientAuthenticationResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface EnableClientAuthenticationCommandInput extends EnableClientAuthenticationRequest {
}
export interface EnableClientAuthenticationCommandOutput extends EnableClientAuthenticationResult, __MetadataBearer {
}
/**
 * <p>Enables alternative client authentication methods for the specified directory.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, EnableClientAuthenticationCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, EnableClientAuthenticationCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new EnableClientAuthenticationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link EnableClientAuthenticationCommandInput} for command's `input` shape.
 * @see {@link EnableClientAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class EnableClientAuthenticationCommand extends $Command<EnableClientAuthenticationCommandInput, EnableClientAuthenticationCommandOutput, DirectoryServiceClientResolvedConfig> {
    readonly input: EnableClientAuthenticationCommandInput;
    constructor(input: EnableClientAuthenticationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: DirectoryServiceClientResolvedConfig, options?: __HttpHandlerOptions): Handler<EnableClientAuthenticationCommandInput, EnableClientAuthenticationCommandOutput>;
    private serialize;
    private deserialize;
}
