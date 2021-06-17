import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { StartPHIDetectionJobRequest, StartPHIDetectionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StartPHIDetectionJobCommandInput extends StartPHIDetectionJobRequest {
}
export interface StartPHIDetectionJobCommandOutput extends StartPHIDetectionJobResponse, __MetadataBearer {
}
/**
 * <p>Starts an asynchronous job to detect protected health information (PHI). Use the
 *         <code>DescribePHIDetectionJob</code> operation to track the status of a job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, StartPHIDetectionJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, StartPHIDetectionJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new StartPHIDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartPHIDetectionJobCommandInput} for command's `input` shape.
 * @see {@link StartPHIDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StartPHIDetectionJobCommand extends $Command<StartPHIDetectionJobCommandInput, StartPHIDetectionJobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: StartPHIDetectionJobCommandInput;
    constructor(input: StartPHIDetectionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StartPHIDetectionJobCommandInput, StartPHIDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
