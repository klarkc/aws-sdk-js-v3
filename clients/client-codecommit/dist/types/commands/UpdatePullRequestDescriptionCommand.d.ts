import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdatePullRequestDescriptionInput, UpdatePullRequestDescriptionOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePullRequestDescriptionCommandInput extends UpdatePullRequestDescriptionInput {
}
export interface UpdatePullRequestDescriptionCommandOutput extends UpdatePullRequestDescriptionOutput, __MetadataBearer {
}
/**
 * <p>Replaces the contents of the description of a pull request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestDescriptionCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestDescriptionCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdatePullRequestDescriptionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePullRequestDescriptionCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestDescriptionCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePullRequestDescriptionCommand extends $Command<UpdatePullRequestDescriptionCommandInput, UpdatePullRequestDescriptionCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdatePullRequestDescriptionCommandInput;
    constructor(input: UpdatePullRequestDescriptionCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePullRequestDescriptionCommandInput, UpdatePullRequestDescriptionCommandOutput>;
    private serialize;
    private deserialize;
}
