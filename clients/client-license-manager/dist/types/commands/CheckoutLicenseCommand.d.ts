import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CheckoutLicenseRequest, CheckoutLicenseResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CheckoutLicenseCommandInput extends CheckoutLicenseRequest {
}
export interface CheckoutLicenseCommandOutput extends CheckoutLicenseResponse, __MetadataBearer {
}
/**
 * <p>Checks out the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckoutLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckoutLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CheckoutLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckoutLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckoutLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CheckoutLicenseCommand extends $Command<CheckoutLicenseCommandInput, CheckoutLicenseCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: CheckoutLicenseCommandInput;
    constructor(input: CheckoutLicenseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckoutLicenseCommandInput, CheckoutLicenseCommandOutput>;
    private serialize;
    private deserialize;
}
