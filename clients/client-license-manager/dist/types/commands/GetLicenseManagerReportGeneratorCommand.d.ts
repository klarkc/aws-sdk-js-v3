import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { GetLicenseManagerReportGeneratorRequest, GetLicenseManagerReportGeneratorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetLicenseManagerReportGeneratorCommandInput extends GetLicenseManagerReportGeneratorRequest {
}
export interface GetLicenseManagerReportGeneratorCommandOutput extends GetLicenseManagerReportGeneratorResponse, __MetadataBearer {
}
/**
 * <p>Gets information on the specified report generator.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, GetLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, GetLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new GetLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link GetLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetLicenseManagerReportGeneratorCommand extends $Command<GetLicenseManagerReportGeneratorCommandInput, GetLicenseManagerReportGeneratorCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: GetLicenseManagerReportGeneratorCommandInput;
    constructor(input: GetLicenseManagerReportGeneratorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetLicenseManagerReportGeneratorCommandInput, GetLicenseManagerReportGeneratorCommandOutput>;
    private serialize;
    private deserialize;
}
