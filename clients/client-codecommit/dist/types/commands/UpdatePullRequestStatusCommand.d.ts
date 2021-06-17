import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { UpdatePullRequestStatusInput, UpdatePullRequestStatusOutput } from "../models/models_1";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UpdatePullRequestStatusCommandInput extends UpdatePullRequestStatusInput {
}
export interface UpdatePullRequestStatusCommandOutput extends UpdatePullRequestStatusOutput, __MetadataBearer {
}
/**
 * <p>Updates the status of a pull request. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, UpdatePullRequestStatusCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, UpdatePullRequestStatusCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new UpdatePullRequestStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdatePullRequestStatusCommandInput} for command's `input` shape.
 * @see {@link UpdatePullRequestStatusCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UpdatePullRequestStatusCommand extends $Command<UpdatePullRequestStatusCommandInput, UpdatePullRequestStatusCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: UpdatePullRequestStatusCommandInput;
    constructor(input: UpdatePullRequestStatusCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UpdatePullRequestStatusCommandInput, UpdatePullRequestStatusCommandOutput>;
    private serialize;
    private deserialize;
}
