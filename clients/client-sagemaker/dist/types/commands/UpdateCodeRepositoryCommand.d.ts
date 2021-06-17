import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { UpdateCodeRepositoryInput, UpdateCodeRepositoryOutput } from "../models/models_2";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdateCodeRepositoryCommandInput extends UpdateCodeRepositoryInput {
}
export interface UpdateCodeRepositoryCommandOutput extends UpdateCodeRepositoryOutput, __MetadataBearer {
}
/**
 * <p>Updates the specified Git repository with the specified values.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, UpdateCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, UpdateCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new UpdateCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link UpdateCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdateCodeRepositoryCommand extends $Command<UpdateCodeRepositoryCommandInput, UpdateCodeRepositoryCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: UpdateCodeRepositoryCommandInput;
    constructor(input: UpdateCodeRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdateCodeRepositoryCommandInput, UpdateCodeRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
