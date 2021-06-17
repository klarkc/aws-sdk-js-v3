import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DisassociateTrialComponentRequest, DisassociateTrialComponentResponse } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DisassociateTrialComponentCommandInput extends DisassociateTrialComponentRequest {
}
export interface DisassociateTrialComponentCommandOutput extends DisassociateTrialComponentResponse, __MetadataBearer {
}
/**
 * <p>Disassociates a trial component from a trial. This doesn't effect other trials the
 *       component is associated with. Before you can delete a component, you must disassociate the
 *       component from all trials it is associated with. To associate a trial component with a trial,
 *       call the <a>AssociateTrialComponent</a> API.</p>
 *          <p>To get a list of the trials a component is associated with, use the <a>Search</a> API. Specify <code>ExperimentTrialComponent</code> for the <code>Resource</code> parameter.
 *       The list appears in the response under <code>Results.TrialComponent.Parents</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DisassociateTrialComponentCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DisassociateTrialComponentCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DisassociateTrialComponentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateTrialComponentCommandInput} for command's `input` shape.
 * @see {@link DisassociateTrialComponentCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DisassociateTrialComponentCommand extends $Command<DisassociateTrialComponentCommandInput, DisassociateTrialComponentCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DisassociateTrialComponentCommandInput;
    constructor(input: DisassociateTrialComponentCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DisassociateTrialComponentCommandInput, DisassociateTrialComponentCommandOutput>;
    private serialize;
    private deserialize;
}
