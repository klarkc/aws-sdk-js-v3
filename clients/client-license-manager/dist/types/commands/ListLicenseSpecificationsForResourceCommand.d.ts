import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListLicenseSpecificationsForResourceRequest, ListLicenseSpecificationsForResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLicenseSpecificationsForResourceCommandInput extends ListLicenseSpecificationsForResourceRequest {
}
export interface ListLicenseSpecificationsForResourceCommandOutput extends ListLicenseSpecificationsForResourceResponse, __MetadataBearer {
}
/**
 * <p>Describes the license configurations for the specified resource.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseSpecificationsForResourceCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseSpecificationsForResourceCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListLicenseSpecificationsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLicenseSpecificationsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListLicenseSpecificationsForResourceCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLicenseSpecificationsForResourceCommand extends $Command<ListLicenseSpecificationsForResourceCommandInput, ListLicenseSpecificationsForResourceCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListLicenseSpecificationsForResourceCommandInput;
    constructor(input: ListLicenseSpecificationsForResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLicenseSpecificationsForResourceCommandInput, ListLicenseSpecificationsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
