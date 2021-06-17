import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteTrialComponentRequest, DeleteTrialComponentResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTrialComponentCommandInput extends DeleteTrialComponentRequest {
}
export interface DeleteTrialComponentCommandOutput extends DeleteTrialComponentResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified trial component. A trial component must be disassociated from all
 *       trials before the trial component can be deleted. To disassociate a trial component from a
 *       trial, call the <a>DisassociateTrialComponent</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrialComponentCommandInput} for command's `input` shape.
 * @see {@link DeleteTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTrialComponentCommand extends $Command<DeleteTrialComponentCommandInput, DeleteTrialComponentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteTrialComponentCommandInput;
    constructor(input: DeleteTrialComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrialComponentCommandInput, DeleteTrialComponentCommandOutput>;
    private serialize;
    private deserialize;
}
