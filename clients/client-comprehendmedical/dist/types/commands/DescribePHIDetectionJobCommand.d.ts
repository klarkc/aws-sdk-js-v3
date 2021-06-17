import { ComprehendMedicalClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComprehendMedicalClient";
import { DescribePHIDetectionJobRequest, DescribePHIDetectionJobResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribePHIDetectionJobCommandInput extends DescribePHIDetectionJobRequest {
}
export interface DescribePHIDetectionJobCommandOutput extends DescribePHIDetectionJobResponse, __MetadataBearer {
}
/**
 * <p>Gets the properties associated with a protected health information (PHI) detection job.
 *       Use this operation to get the status of a detection job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendMedicalClient, DescribePHIDetectionJobCommand } from "@aws-sdk/client-comprehendmedical"; // ES Modules import
 * // const { ComprehendMedicalClient, DescribePHIDetectionJobCommand } = require("@aws-sdk/client-comprehendmedical"); // CommonJS import
 * const client = new ComprehendMedicalClient(config);
 * const command = new DescribePHIDetectionJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribePHIDetectionJobCommandInput} for command's `input` shape.
 * @see {@link DescribePHIDetectionJobCommandOutput} for command's `response` shape.
 * @see {@link ComprehendMedicalClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribePHIDetectionJobCommand extends $Command<DescribePHIDetectionJobCommandInput, DescribePHIDetectionJobCommandOutput, ComprehendMedicalClientResolvedConfig> {
    readonly input: DescribePHIDetectionJobCommandInput;
    constructor(input: DescribePHIDetectionJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComprehendMedicalClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribePHIDetectionJobCommandInput, DescribePHIDetectionJobCommandOutput>;
    private serialize;
    private deserialize;
}
