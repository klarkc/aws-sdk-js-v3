import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { ExtendLicenseConsumptionRequest, ExtendLicenseConsumptionResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExtendLicenseConsumptionCommandInput extends ExtendLicenseConsumptionRequest {
}
export interface ExtendLicenseConsumptionCommandOutput extends ExtendLicenseConsumptionResponse, __MetadataBearer {
}
/**
 * <p>Extends the expiration date for license consumption.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, ExtendLicenseConsumptionCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, ExtendLicenseConsumptionCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new ExtendLicenseConsumptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExtendLicenseConsumptionCommandInput} for command's `input` shape.
 * @see {@link ExtendLicenseConsumptionCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExtendLicenseConsumptionCommand extends $Command<ExtendLicenseConsumptionCommandInput, ExtendLicenseConsumptionCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: ExtendLicenseConsumptionCommandInput;
    constructor(input: ExtendLicenseConsumptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExtendLicenseConsumptionCommandInput, ExtendLicenseConsumptionCommandOutput>;
    private serialize;
    private deserialize;
}
