import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdatePullRequestTitleInput, UpdatePullRequestTitleOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePullRequestTitleCommandInput extends UpdatePullRequestTitleInput {
}
export interface UpdatePullRequestTitleCommandOutput extends UpdatePullRequestTitleOutput, __MetadataBearer {
}
/**
 * <p>Replaces the title of a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestTitleCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestTitleCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdatePullRequestTitleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePullRequestTitleCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestTitleCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePullRequestTitleCommand extends $Command<UpdatePullRequestTitleCommandInput, UpdatePullRequestTitleCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdatePullRequestTitleCommandInput;
    constructor(input: UpdatePullRequestTitleCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePullRequestTitleCommandInput, UpdatePullRequestTitleCommandOutput>;
    private serialize;
    private deserialize;
}
