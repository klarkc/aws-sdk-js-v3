import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetLicenseConfigurationRequest, GetLicenseConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLicenseConfigurationCommandInput extends GetLicenseConfigurationRequest {
}
export interface GetLicenseConfigurationCommandOutput extends GetLicenseConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Gets detailed information about the specified license configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLicenseConfigurationCommand extends $Command<GetLicenseConfigurationCommandInput, GetLicenseConfigurationCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: GetLicenseConfigurationCommandInput;
    constructor(input: GetLicenseConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLicenseConfigurationCommandInput, GetLicenseConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
