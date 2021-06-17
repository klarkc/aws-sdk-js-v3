import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteTrialRequest, DeleteTrialResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteTrialCommandInput extends DeleteTrialRequest {
}
export interface DeleteTrialCommandOutput extends DeleteTrialResponse, __MetadataBearer {
}
/**
 * <p>Deletes the specified trial. All trial components that make up the trial must be deleted
 *       first. Use the <a>DescribeTrialComponent</a> API to get the list of trial
 *       components.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteTrialCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteTrialCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteTrialCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTrialCommandInput} for command's `input` shape.
 * @see {@link DeleteTrialCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteTrialCommand extends $Command<DeleteTrialCommandInput, DeleteTrialCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteTrialCommandInput;
    constructor(input: DeleteTrialCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteTrialCommandInput, DeleteTrialCommandOutput>;
    private serialize;
    private deserialize;
}
