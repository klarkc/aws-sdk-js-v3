import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { DescribeFHIRExportJobRequest, DescribeFHIRExportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeFHIRExportJobCommandInput extends DescribeFHIRExportJobRequest {
}
export interface DescribeFHIRExportJobCommandOutput extends DescribeFHIRExportJobResponse, __MetadataBearer {
}
/**
 * <p>Displays the properties of a FHIR export job, including the ID, ARN, name, and the status of the job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, DescribeFHIRExportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, DescribeFHIRExportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new DescribeFHIRExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeFHIRExportJobCommandInput} for command's `input` shape.
 * @see {@link DescribeFHIRExportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeFHIRExportJobCommand extends $Command<DescribeFHIRExportJobCommandInput, DescribeFHIRExportJobCommandOutput, HealthLakeClientResolvedConfig> {
    readonly input: DescribeFHIRExportJobCommandInput;
    constructor(input: DescribeFHIRExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthLakeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeFHIRExportJobCommandInput, DescribeFHIRExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
