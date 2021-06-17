import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { DeleteCodeRepositoryInput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteCodeRepositoryCommandInput extends DeleteCodeRepositoryInput {
}
export interface DeleteCodeRepositoryCommandOutput extends __MetadataBearer {
}
/**
 * <p>Deletes the specified Git repository from your account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteCodeRepositoryCommand extends $Command<DeleteCodeRepositoryCommandInput, DeleteCodeRepositoryCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: DeleteCodeRepositoryCommandInput;
    constructor(input: DeleteCodeRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteCodeRepositoryCommandInput, DeleteCodeRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
