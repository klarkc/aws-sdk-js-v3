import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetServiceSettingsRequest, GetServiceSettingsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetServiceSettingsCommandInput extends GetServiceSettingsRequest {
}
export interface GetServiceSettingsCommandOutput extends GetServiceSettingsResponse, __MetadataBearer {
}
/**
 * <p>Gets the License Manager settings for the current Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetServiceSettingsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetServiceSettingsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetServiceSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetServiceSettingsCommandInput} for command's `input` shape.
 * @see {@link GetServiceSettingsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetServiceSettingsCommand extends $Command<GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: GetServiceSettingsCommandInput;
    constructor(input: GetServiceSettingsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetServiceSettingsCommandInput, GetServiceSettingsCommandOutput>;
    private serialize;
    private deserialize;
}
