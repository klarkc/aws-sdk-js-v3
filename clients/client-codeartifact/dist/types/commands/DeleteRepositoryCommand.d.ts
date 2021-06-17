import { CodeartifactClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeartifactClient";
import { DeleteRepositoryRequest, DeleteRepositoryResult } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DeleteRepositoryCommandInput extends DeleteRepositoryRequest {
}
export interface DeleteRepositoryCommandOutput extends DeleteRepositoryResult, __MetadataBearer {
}
/**
 * <p>
 *          Deletes a repository.
 *        </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeleteRepositoryCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeleteRepositoryCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DeleteRepositoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DeleteRepositoryCommand extends $Command<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput, CodeartifactClientResolvedConfig> {
    readonly input: DeleteRepositoryCommandInput;
    constructor(input: DeleteRepositoryCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeartifactClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DeleteRepositoryCommandInput, DeleteRepositoryCommandOutput>;
    private serialize;
    private deserialize;
}
