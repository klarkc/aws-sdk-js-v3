import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreateCommitInput, CreateCommitOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateCommitCommandInput extends CreateCommitInput {
}
export interface CreateCommitCommandOutput extends CreateCommitOutput, __MetadataBearer {
}
/**
 * <p>Creates a commit for a repository on the tip of a specified branch.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreateCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreateCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreateCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateCommitCommandInput} for command's `input` shape.
 * @see {@link CreateCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateCommitCommand extends $Command<CreateCommitCommandInput, CreateCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: CreateCommitCommandInput;
    constructor(input: CreateCommitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateCommitCommandInput, CreateCommitCommandOutput>;
    private serialize;
    private deserialize;
}
