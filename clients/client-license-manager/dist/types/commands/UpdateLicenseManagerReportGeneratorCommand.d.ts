import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { UpdateLicenseManagerReportGeneratorRequest, UpdateLicenseManagerReportGeneratorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateLicenseManagerReportGeneratorCommandInput extends UpdateLicenseManagerReportGeneratorRequest {
}
export interface UpdateLicenseManagerReportGeneratorCommandOutput extends UpdateLicenseManagerReportGeneratorResponse, __MetadataBearer {
}
/**
 * <p>Updates a report generator.</p>
 *          <p>After you make changes to a report generator, it will start generating new reports within 60 minutes of being updated.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, UpdateLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, UpdateLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new UpdateLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link UpdateLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateLicenseManagerReportGeneratorCommand extends $Command<UpdateLicenseManagerReportGeneratorCommandInput, UpdateLicenseManagerReportGeneratorCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: UpdateLicenseManagerReportGeneratorCommandInput;
    constructor(input: UpdateLicenseManagerReportGeneratorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateLicenseManagerReportGeneratorCommandInput, UpdateLicenseManagerReportGeneratorCommandOutput>;
    private serialize;
    private deserialize;
}
