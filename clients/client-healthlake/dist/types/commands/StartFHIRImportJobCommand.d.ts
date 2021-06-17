import { HealthLakeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../HealthLakeClient";
import { StartFHIRImportJobRequest, StartFHIRImportJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartFHIRImportJobCommandInput extends StartFHIRImportJobRequest {
}
export interface StartFHIRImportJobCommandOutput extends StartFHIRImportJobResponse, __MetadataBearer {
}
/**
 * <p>Begins a FHIR Import job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { HealthLakeClient, StartFHIRImportJobCommand } from "@aws-sdk/client-healthlake"; // ES Modules import
 * // const { HealthLakeClient, StartFHIRImportJobCommand } = require("@aws-sdk/client-healthlake"); // CommonJS import
 * const client = new HealthLakeClient(config);
 * const command = new StartFHIRImportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartFHIRImportJobCommandInput} for command's `input` shape.
 * @see {@link StartFHIRImportJobCommandOutput} for command's `response` shape.
 * @see {@link HealthLakeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartFHIRImportJobCommand extends $Command<StartFHIRImportJobCommandInput, StartFHIRImportJobCommandOutput, HealthLakeClientResolvedConfig> {
    readonly input: StartFHIRImportJobCommandInput;
    constructor(input: StartFHIRImportJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: HealthLakeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartFHIRImportJobCommandInput, StartFHIRImportJobCommandOutput>;
    private serialize;
    private deserialize;
}
