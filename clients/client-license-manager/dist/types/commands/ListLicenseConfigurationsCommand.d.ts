import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListLicenseConfigurationsRequest, ListLicenseConfigurationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLicenseConfigurationsCommandInput extends ListLicenseConfigurationsRequest {
}
export interface ListLicenseConfigurationsCommandOutput extends ListLicenseConfigurationsResponse, __MetadataBearer {
}
/**
 * <p>Lists the license configurations for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseConfigurationsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseConfigurationsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListLicenseConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLicenseConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLicenseConfigurationsCommand extends $Command<ListLicenseConfigurationsCommandInput, ListLicenseConfigurationsCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListLicenseConfigurationsCommandInput;
    constructor(input: ListLicenseConfigurationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLicenseConfigurationsCommandInput, ListLicenseConfigurationsCommandOutput>;
    private serialize;
    private deserialize;
}
