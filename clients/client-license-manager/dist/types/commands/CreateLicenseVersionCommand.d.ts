import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CreateLicenseVersionRequest, CreateLicenseVersionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateLicenseVersionCommandInput extends CreateLicenseVersionRequest {
}
export interface CreateLicenseVersionCommandOutput extends CreateLicenseVersionResponse, __MetadataBearer {
}
/**
 * <p>Creates a new version of the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CreateLicenseVersionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CreateLicenseVersionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CreateLicenseVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateLicenseVersionCommandInput} for command's `input` shape.
 * @see {@link CreateLicenseVersionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateLicenseVersionCommand extends $Command<CreateLicenseVersionCommandInput, CreateLicenseVersionCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: CreateLicenseVersionCommandInput;
    constructor(input: CreateLicenseVersionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateLicenseVersionCommandInput, CreateLicenseVersionCommandOutput>;
    private serialize;
    private deserialize;
}
