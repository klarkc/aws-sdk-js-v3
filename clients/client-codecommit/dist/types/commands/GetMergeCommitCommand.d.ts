import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetMergeCommitInput, GetMergeCommitOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMergeCommitCommandInput extends GetMergeCommitInput {
}
export interface GetMergeCommitCommandOutput extends GetMergeCommitOutput, __MetadataBearer {
}
/**
 * <p>Returns information about a specified merge commit.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetMergeCommitCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetMergeCommitCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetMergeCommitCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMergeCommitCommandInput} for command's `input` shape.
 * @see {@link GetMergeCommitCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMergeCommitCommand extends $Command<GetMergeCommitCommandInput, GetMergeCommitCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetMergeCommitCommandInput;
    constructor(input: GetMergeCommitCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMergeCommitCommandInput, GetMergeCommitCommandOutput>;
    private serialize;
    private deserialize;
}
