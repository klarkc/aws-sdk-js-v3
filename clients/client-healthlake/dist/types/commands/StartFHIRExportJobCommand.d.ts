import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { StartFHIRExportJobRequest, StartFHIRExportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartFHIRExportJobCommandInput extends StartFHIRExportJobRequest {
}
export interface StartFHIRExportJobCommandOutput extends StartFHIRExportJobResponse, __MetadataBearer {
}
/**
 * <p>Begins a FHIR export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, StartFHIRExportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, StartFHIRExportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new StartFHIRExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFHIRExportJobCommandInput} for command's `input` shape.
 * @see {@link StartFHIRExportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartFHIRExportJobCommand extends $Command<StartFHIRExportJobCommandInput, StartFHIRExportJobCommandOutput, HealthLakeClientResolvedConfig> {
    readonly input: StartFHIRExportJobCommandInput;
    constructor(input: StartFHIRExportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthLakeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartFHIRExportJobCommandInput, StartFHIRExportJobCommandOutput>;
    private serialize;
    private deserialize;
}
