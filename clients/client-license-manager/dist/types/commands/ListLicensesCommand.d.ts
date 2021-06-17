import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListLicensesRequest, ListLicensesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListLicensesCommandInput extends ListLicensesRequest {
}
export interface ListLicensesCommandOutput extends ListLicensesResponse, __MetadataBearer {
}
/**
 * <p>Lists the licenses for your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListLicensesCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListLicensesCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListLicensesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListLicensesCommandInput} for command's `input` shape.
 * @see {@link ListLicensesCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListLicensesCommand extends $Command<ListLicensesCommandInput, ListLicensesCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListLicensesCommandInput;
    constructor(input: ListLicensesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListLicensesCommandInput, ListLicensesCommandOutput>;
    private serialize;
    private deserialize;
}
