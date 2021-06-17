import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetMergeConflictsInput, GetMergeConflictsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMergeConflictsCommandInput extends GetMergeConflictsInput {
}
export interface GetMergeConflictsCommandOutput extends GetMergeConflictsOutput, __MetadataBearer {
}
/**
 * <p>Returns information about merge conflicts between the before and after commit IDs for a pull request in a repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetMergeConflictsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMergeConflictsCommandInput} for command's `input` shape.
 * @see {@link GetMergeConflictsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMergeConflictsCommand extends $Command<GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetMergeConflictsCommandInput;
    constructor(input: GetMergeConflictsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMergeConflictsCommandInput, GetMergeConflictsCommandOutput>;
    private serialize;
    private deserialize;
}
