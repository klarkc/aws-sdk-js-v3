import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { DeleteGrantRequest, DeleteGrantResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteGrantCommandInput extends DeleteGrantRequest {
}
export interface DeleteGrantCommandOutput extends DeleteGrantResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new DeleteGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGrantCommandInput} for command's `input` shape.
 * @see {@link DeleteGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteGrantCommand extends $Command<DeleteGrantCommandInput, DeleteGrantCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: DeleteGrantCommandInput;
    constructor(input: DeleteGrantCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteGrantCommandInput, DeleteGrantCommandOutput>;
    private serialize;
    private deserialize;
}
