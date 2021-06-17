import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { DeleteLicenseRequest, DeleteLicenseResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLicenseCommandInput extends DeleteLicenseRequest {
}
export interface DeleteLicenseCommandOutput extends DeleteLicenseResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new DeleteLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLicenseCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLicenseCommand extends $Command<DeleteLicenseCommandInput, DeleteLicenseCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: DeleteLicenseCommandInput;
    constructor(input: DeleteLicenseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLicenseCommandInput, DeleteLicenseCommandOutput>;
    private serialize;
    private deserialize;
}
