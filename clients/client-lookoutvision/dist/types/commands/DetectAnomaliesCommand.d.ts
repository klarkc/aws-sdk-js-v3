/// <reference types="node" />
import { LookoutVisionClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../LookoutVisionClient";
import { DetectAnomaliesRequest, DetectAnomaliesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
declare type DetectAnomaliesCommandInputType = Omit<DetectAnomaliesRequest, "Body"> & {
    /**
     * For *`DetectAnomaliesRequest["Body"]`*, see {@link DetectAnomaliesRequest.Body}.
     */
    Body: DetectAnomaliesRequest["Body"] | string | Uint8Array | Buffer;
};
/**
 * This interface extends from `DetectAnomaliesRequest` interface. There are more parameters than `Body` defined in {@link DetectAnomaliesRequest}
 */
export interface DetectAnomaliesCommandInput extends DetectAnomaliesCommandInputType {
}
export interface DetectAnomaliesCommandOutput extends DetectAnomaliesResponse, __MetadataBearer {
}
/**
 * <p>Detects anomalies in an image that you supply. </p>
 *          <p>The response from <code>DetectAnomalies</code> includes a boolean prediction
 *          that the image contains one or more anomalies and a confidence value for the prediction.</p>
 *          <note>
 *             <p>Before calling <code>DetectAnomalies</code>, you must first start your model with the <a>StartModel</a> operation.
 *          You are charged for the amount of time, in minutes, that a model runs and for the number of anomaly detection units that your
 *          model uses. If you are not using a model, use the <a>StopModel</a> operation to stop your model. </p>
 *          </note>
 *          <p>This operation requires permissions to perform the
 *          <code>lookoutvision:DetectAnomalies</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LookoutVisionClient, DetectAnomaliesCommand } from "@aws-sdk/client-lookoutvision"; // ES Modules import
 * // const { LookoutVisionClient, DetectAnomaliesCommand } = require("@aws-sdk/client-lookoutvision"); // CommonJS import
 * const client = new LookoutVisionClient(config);
 * const command = new DetectAnomaliesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DetectAnomaliesCommandInput} for command's `input` shape.
 * @see {@link DetectAnomaliesCommandOutput} for command's `response` shape.
 * @see {@link LookoutVisionClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DetectAnomaliesCommand extends $Command<DetectAnomaliesCommandInput, DetectAnomaliesCommandOutput, LookoutVisionClientResolvedConfig> {
    readonly input: DetectAnomaliesCommandInput;
    constructor(input: DetectAnomaliesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: LookoutVisionClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DetectAnomaliesCommandInput, DetectAnomaliesCommandOutput>;
    private serialize;
    private deserialize;
}
export {};
