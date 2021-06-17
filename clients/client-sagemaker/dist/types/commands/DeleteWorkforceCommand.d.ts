import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteWorkforceRequest, DeleteWorkforceResponse } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteWorkforceCommandInput extends DeleteWorkforceRequest {
}
export interface DeleteWorkforceCommandOutput extends DeleteWorkforceResponse, __MetadataBearer {
}
/**
 * <p>Use this operation to delete a workforce.</p>
 *
 *          <p>If you want to create a new workforce in an AWS Region where
 *       a workforce already exists, use this operation to delete the
 *       existing workforce and then use
 *       to create a new workforce.</p>
 *          <important>
 *             <p>If a private workforce contains one or more work teams, you must use
 *             the
 *             operation to delete all work teams before you delete the workforce.
 *             If you try to delete a workforce that contains one or more work teams,
 *             you will recieve a <code>ResourceInUse</code> error.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteWorkforceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkforceCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteWorkforceCommand extends $Command<DeleteWorkforceCommandInput, DeleteWorkforceCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteWorkforceCommandInput;
    constructor(input: DeleteWorkforceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteWorkforceCommandInput, DeleteWorkforceCommandOutput>;
    private serialize;
    private deserialize;
}
