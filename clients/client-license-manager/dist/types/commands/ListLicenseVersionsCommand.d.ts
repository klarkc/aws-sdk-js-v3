import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListLicenseVersionsRequest, ListLicenseVersionsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLicenseVersionsCommandInput extends ListLicenseVersionsRequest {
}
export interface ListLicenseVersionsCommandOutput extends ListLicenseVersionsResponse, __MetadataBearer {
}
/**
 * <p>Lists all versions of the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicenseVersionsCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicenseVersionsCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListLicenseVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLicenseVersionsCommandInput} for command's `input` shape.
 * @see {@link ListLicenseVersionsCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLicenseVersionsCommand extends $Command<ListLicenseVersionsCommandInput, ListLicenseVersionsCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListLicenseVersionsCommandInput;
    constructor(input: ListLicenseVersionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLicenseVersionsCommandInput, ListLicenseVersionsCommandOutput>;
    private serialize;
    private deserialize;
}
