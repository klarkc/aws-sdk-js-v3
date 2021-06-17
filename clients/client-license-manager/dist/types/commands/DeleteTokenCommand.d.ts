import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { DeleteTokenRequest, DeleteTokenResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTokenCommandInput extends DeleteTokenRequest {
}
export interface DeleteTokenCommandOutput extends DeleteTokenResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified token. Must be called in the license home Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteTokenCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteTokenCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new DeleteTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteTokenCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTokenCommand extends $Command<DeleteTokenCommandInput, DeleteTokenCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: DeleteTokenCommandInput;
    constructor(input: DeleteTokenCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTokenCommandInput, DeleteTokenCommandOutput>;
    private serialize;
    private deserialize;
}
