import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { AssociateTrialComponentRequest, AssociateTrialComponentResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface AssociateTrialComponentCommandInput extends AssociateTrialComponentRequest {
}
export interface AssociateTrialComponentCommandOutput extends AssociateTrialComponentResponse, __MetadataBearer {
}
/**
 * <p>Associates a trial component with a trial. A trial component can be associated with
 *       multiple trials. To disassociate a trial component from a trial, call the <a>DisassociateTrialComponent</a> API.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, AssociateTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, AssociateTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new AssociateTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateTrialComponentCommandInput} for command's `input` shape.
 * @see {@link AssociateTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class AssociateTrialComponentCommand extends $Command<AssociateTrialComponentCommandInput, AssociateTrialComponentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: AssociateTrialComponentCommandInput;
    constructor(input: AssociateTrialComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<AssociateTrialComponentCommandInput, AssociateTrialComponentCommandOutput>;
    private serialize;
    private deserialize;
}
