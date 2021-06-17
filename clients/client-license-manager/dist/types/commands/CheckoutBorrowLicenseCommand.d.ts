import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CheckoutBorrowLicenseRequest, CheckoutBorrowLicenseResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CheckoutBorrowLicenseCommandInput extends CheckoutBorrowLicenseRequest {
}
export interface CheckoutBorrowLicenseCommandOutput extends CheckoutBorrowLicenseResponse, __MetadataBearer {
}
/**
 * <p>Checks out the specified license for offline use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckoutBorrowLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckoutBorrowLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CheckoutBorrowLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckoutBorrowLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckoutBorrowLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CheckoutBorrowLicenseCommand extends $Command<CheckoutBorrowLicenseCommandInput, CheckoutBorrowLicenseCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: CheckoutBorrowLicenseCommandInput;
    constructor(input: CheckoutBorrowLicenseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckoutBorrowLicenseCommandInput, CheckoutBorrowLicenseCommandOutput>;
    private serialize;
    private deserialize;
}
