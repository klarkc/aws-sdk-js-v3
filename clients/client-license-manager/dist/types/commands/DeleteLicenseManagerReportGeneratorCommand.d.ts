import { LicenseManagerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LicenseManagerClient";
import { DeleteLicenseManagerReportGeneratorRequest, DeleteLicenseManagerReportGeneratorResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteLicenseManagerReportGeneratorCommandInput extends DeleteLicenseManagerReportGeneratorRequest {
}
export interface DeleteLicenseManagerReportGeneratorCommandOutput extends DeleteLicenseManagerReportGeneratorResponse, __MetadataBearer {
}
/**
 * <p>Delete an existing report generator.</p>
 *          <p>This action deletes the report generator, which stops it from generating future reports and cannot be reversed. However, the previous reports from this generator will remain in your S3 bucket.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseManagerReportGeneratorCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseManagerReportGeneratorCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new DeleteLicenseManagerReportGeneratorCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLicenseManagerReportGeneratorCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseManagerReportGeneratorCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteLicenseManagerReportGeneratorCommand extends $Command<DeleteLicenseManagerReportGeneratorCommandInput, DeleteLicenseManagerReportGeneratorCommandOutput, LicenseManagerClientResolvedConfig> {
    readonly input: DeleteLicenseManagerReportGeneratorCommandInput;
    constructor(input: DeleteLicenseManagerReportGeneratorCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LicenseManagerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteLicenseManagerReportGeneratorCommandInput, DeleteLicenseManagerReportGeneratorCommandOutput>;
    private serialize;
    private deserialize;
}
