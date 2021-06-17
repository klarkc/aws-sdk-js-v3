import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListAssociationsForLicenseConfigurationRequest, ListAssociationsForLicenseConfigurationResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListAssociationsForLicenseConfigurationCommandInput extends ListAssociationsForLicenseConfigurationRequest {
}
export interface ListAssociationsForLicenseConfigurationCommandOutput extends ListAssociationsForLicenseConfigurationResponse, __MetadataBearer {
}
/**
 * <p>Lists the resource associations for the specified license configuration.</p>
 *          <p>Resource associations need not consume licenses from a license configuration.
 *          For example, an AMI or a stopped instance might not consume a license (depending on
 *          the license rules).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListAssociationsForLicenseConfigurationCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListAssociationsForLicenseConfigurationCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListAssociationsForLicenseConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAssociationsForLicenseConfigurationCommandInput} for command's `input` shape.
 * @see {@link ListAssociationsForLicenseConfigurationCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListAssociationsForLicenseConfigurationCommand extends $Command<ListAssociationsForLicenseConfigurationCommandInput, ListAssociationsForLicenseConfigurationCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListAssociationsForLicenseConfigurationCommandInput;
    constructor(input: ListAssociationsForLicenseConfigurationCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListAssociationsForLicenseConfigurationCommandInput, ListAssociationsForLicenseConfigurationCommandOutput>;
    private serialize;
    private deserialize;
}
