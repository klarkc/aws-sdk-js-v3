import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { CreatePullRequestInput, CreatePullRequestOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreatePullRequestCommandInput extends CreatePullRequestInput {
}
export interface CreatePullRequestCommandOutput extends CreatePullRequestOutput, __MetadataBearer {
}
/**
 * <p>Creates a pull request in the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, CreatePullRequestCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, CreatePullRequestCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new CreatePullRequestCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePullRequestCommandInput} for command's `input` shape.
 * @see {@link CreatePullRequestCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreatePullRequestCommand extends $Command<CreatePullRequestCommandInput, CreatePullRequestCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: CreatePullRequestCommandInput;
    constructor(input: CreatePullRequestCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreatePullRequestCommandInput, CreatePullRequestCommandOutput>;
    private serialize;
    private deserialize;
}
