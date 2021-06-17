import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { StopAutoMLJobRequest } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface StopAutoMLJobCommandInput extends StopAutoMLJobRequest {
}
export interface StopAutoMLJobCommandOutput extends __MetadataBearer {
}
/**
 * <p>A method for forcing the termination of a running job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, StopAutoMLJobCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, StopAutoMLJobCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new StopAutoMLJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StopAutoMLJobCommandInput} for command's `input` shape.
 * @see {@link StopAutoMLJobCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class StopAutoMLJobCommand extends $Command<StopAutoMLJobCommandInput, StopAutoMLJobCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: StopAutoMLJobCommandInput;
    constructor(input: StopAutoMLJobCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<StopAutoMLJobCommandInput, StopAutoMLJobCommandOutput>;
    private serialize;
    private deserialize;
}
