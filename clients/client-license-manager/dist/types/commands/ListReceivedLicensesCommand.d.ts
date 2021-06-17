import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ListReceivedLicensesRequest, ListReceivedLicensesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListReceivedLicensesCommandInput extends ListReceivedLicensesRequest {
}
export interface ListReceivedLicensesCommandOutput extends ListReceivedLicensesResponse, __MetadataBearer {
}
/**
 * <p>Lists received licenses.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ListReceivedLicensesCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ListReceivedLicensesCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ListReceivedLicensesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListReceivedLicensesCommandInput} for command's `input` shape.
 * @see {@link ListReceivedLicensesCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListReceivedLicensesCommand extends $Command<ListReceivedLicensesCommandInput, ListReceivedLicensesCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ListReceivedLicensesCommandInput;
    constructor(input: ListReceivedLicensesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListReceivedLicensesCommandInput, ListReceivedLicensesCommandOutput>;
    private serialize;
    private deserialize;
}
