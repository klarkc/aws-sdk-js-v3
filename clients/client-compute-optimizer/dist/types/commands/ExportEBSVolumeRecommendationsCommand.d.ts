import { ComputeOptimizerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ComputeOptimizerClient";
import { ExportEBSVolumeRecommendationsRequest, ExportEBSVolumeRecommendationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ExportEBSVolumeRecommendationsCommandInput extends ExportEBSVolumeRecommendationsRequest {
}
export interface ExportEBSVolumeRecommendationsCommandOutput extends ExportEBSVolumeRecommendationsResponse, __MetadataBearer {
}
/**
 * <p>Exports optimization recommendations for Amazon EBS volumes.</p>
 *
 *         <p>Recommendations are exported in a comma-separated values (.csv) file, and its metadata
 *             in a JavaScript Object Notation (.json) file, to an existing Amazon Simple Storage Service (Amazon S3) bucket that
 *             you specify. For more information, see <a href="https://docs.aws.amazon.com/compute-optimizer/latest/ug/exporting-recommendations.html">Exporting
 *                 Recommendations</a> in the <i>Compute Optimizer User Guide</i>.</p>
 *
 *         <p>You can have only one Amazon EBS volume export job in progress per AWS
 *             Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComputeOptimizerClient, ExportEBSVolumeRecommendationsCommand } from "@aws-sdk/client-compute-optimizer"; // ES Modules import
 * // const { ComputeOptimizerClient, ExportEBSVolumeRecommendationsCommand } = require("@aws-sdk/client-compute-optimizer"); // CommonJS import
 * const client = new ComputeOptimizerClient(config);
 * const command = new ExportEBSVolumeRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ExportEBSVolumeRecommendationsCommandInput} for command's `input` shape.
 * @see {@link ExportEBSVolumeRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link ComputeOptimizerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ExportEBSVolumeRecommendationsCommand extends $Command<ExportEBSVolumeRecommendationsCommandInput, ExportEBSVolumeRecommendationsCommandOutput, ComputeOptimizerClientResolvedConfig> {
    readonly input: ExportEBSVolumeRecommendationsCommandInput;
    constructor(input: ExportEBSVolumeRecommendationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ComputeOptimizerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ExportEBSVolumeRecommendationsCommandInput, ExportEBSVolumeRecommendationsCommandOutput>;
    private serialize;
    private deserialize;
}
