import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { CheckInLicenseRequest, CheckInLicenseResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CheckInLicenseCommandInput extends CheckInLicenseRequest {
}
export interface CheckInLicenseCommandOutput extends CheckInLicenseResponse, __MetadataBearer {
}
/**
 * <p>Checks in the specified license. Check in a license when it is no longer in use.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, CheckInLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, CheckInLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new CheckInLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CheckInLicenseCommandInput} for command's `input` shape.
 * @see {@link CheckInLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CheckInLicenseCommand extends $Command<CheckInLicenseCommandInput, CheckInLicenseCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: CheckInLicenseCommandInput;
    constructor(input: CheckInLicenseCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CheckInLicenseCommandInput, CheckInLicenseCommandOutput>;
    private serialize;
    private deserialize;
}
