import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetLicenseUsageRequest, GetLicenseUsageResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLicenseUsageCommandInput extends GetLicenseUsageRequest {
}
export interface GetLicenseUsageCommandOutput extends GetLicenseUsageResponse, __MetadataBearer {
}
/**
 * <p>Gets detailed information about the usage of the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseUsageCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseUsageCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetLicenseUsageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLicenseUsageCommandInput} for command's `input` shape.
 * @see {@link GetLicenseUsageCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLicenseUsageCommand extends $Command<GetLicenseUsageCommandInput, GetLicenseUsageCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: GetLicenseUsageCommandInput;
    constructor(input: GetLicenseUsageCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLicenseUsageCommandInput, GetLicenseUsageCommandOutput>;
    private serialize;
    private deserialize;
}
