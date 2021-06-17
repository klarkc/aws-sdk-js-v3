import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListFailuresForLicenseConfigurationOperationsRequest, ListFailuresForLicenseConfigurationOperationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListFailuresForLicenseConfigurationOperationsCommandInput extends ListFailuresForLicenseConfigurationOperationsRequest {
}
export interface ListFailuresForLicenseConfigurationOperationsCommandOutput extends ListFailuresForLicenseConfigurationOperationsResponse, __MetadataBearer {
}
/**
 * <p>Lists the license configuration operations that failed.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListFailuresForLicenseConfigurationOperationsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListFailuresForLicenseConfigurationOperationsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListFailuresForLicenseConfigurationOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFailuresForLicenseConfigurationOperationsCommandInput} for command's `input` shape.
 * @see {@link ListFailuresForLicenseConfigurationOperationsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListFailuresForLicenseConfigurationOperationsCommand extends $Command<ListFailuresForLicenseConfigurationOperationsCommandInput, ListFailuresForLicenseConfigurationOperationsCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListFailuresForLicenseConfigurationOperationsCommandInput;
    constructor(input: ListFailuresForLicenseConfigurationOperationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListFailuresForLicenseConfigurationOperationsCommandInput, ListFailuresForLicenseConfigurationOperationsCommandOutput>;
    private serialize;
    private deserialize;
}
