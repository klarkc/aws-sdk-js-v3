import { SageMakerClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../SageMakerClient";
import { CreateCodeRepositoryInput, CreateCodeRepositoryOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCodeRepositoryCommandInput extends CreateCodeRepositoryInput {
}
export interface CreateCodeRepositoryCommandOutput extends CreateCodeRepositoryOutput, __MetadataBearer {
}
/**
 * <p>Creates a Git repository as a resource in your Amazon SageMaker account. You can associate the
 *             repository with notebook instances so that you can use Git source control for the
 *             notebooks you create. The Git repository is a resource in your Amazon SageMaker account, so it can
 *             be associated with more than one notebook instance, and it persists independently from
 *             the lifecycle of any notebook instances it is associated with.</p>
 *         <p>The repository can be hosted either in <a href="https://docs.aws.amazon.com/codecommit/latest/userguide/welcome.html">AWS CodeCommit</a> or in any
 *             other Git repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, CreateCodeRepositoryCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, CreateCodeRepositoryCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new CreateCodeRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCodeRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateCodeRepositoryCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCodeRepositoryCommand extends $Command<CreateCodeRepositoryCommandInput, CreateCodeRepositoryCommandOutput, SageMakerClientResolvedConfig> {
    readonly input: CreateCodeRepositoryCommandInput;
    constructor(input: CreateCodeRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: SageMakerClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCodeRepositoryCommandInput, CreateCodeRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
