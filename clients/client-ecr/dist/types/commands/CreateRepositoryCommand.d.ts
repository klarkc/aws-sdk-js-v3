import { ECRClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../ECRClient";
import { CreateRepositoryRequest, CreateRepositoryResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateRepositoryCommandInput extends CreateRepositoryRequest {
}
export interface CreateRepositoryCommandOutput extends CreateRepositoryResponse, __MetadataBearer {
}
/**
 * <p>Creates a repository. For more information, see <a href="https://docs.aws.amazon.com/AmazonECR/latest/userguide/Repositories.html">Amazon ECR Repositories</a> in the
 *                 <i>Amazon Elastic Container Registry User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, CreateRepositoryCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, CreateRepositoryCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new CreateRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRepositoryCommandInput} for command's `input` shape.
 * @see {@link CreateRepositoryCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateRepositoryCommand extends $Command<CreateRepositoryCommandInput, CreateRepositoryCommandOutput, ECRClientResolvedConfig> {
    readonly input: CreateRepositoryCommandInput;
    constructor(input: CreateRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: ECRClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateRepositoryCommandInput, CreateRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
