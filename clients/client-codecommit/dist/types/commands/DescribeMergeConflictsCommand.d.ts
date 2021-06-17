import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { DescribeMergeConflictsInput, DescribeMergeConflictsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMergeConflictsCommandInput extends DescribeMergeConflictsInput {
}
export interface DescribeMergeConflictsCommandOutput extends DescribeMergeConflictsOutput, __MetadataBearer {
}
/**
 * <p>Returns information about one or more merge conflicts in the attempted merge of two
 *             commit specifiers using the squash or three-way merge strategy. If the merge option for
 *             the attempted merge is specified as FAST_FORWARD_MERGE, an exception is thrown.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, DescribeMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, DescribeMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new DescribeMergeConflictsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMergeConflictsCommandInput} for command's `input` shape.
 * @see {@link DescribeMergeConflictsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMergeConflictsCommand extends $Command<DescribeMergeConflictsCommandInput, DescribeMergeConflictsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: DescribeMergeConflictsCommandInput;
    constructor(input: DescribeMergeConflictsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMergeConflictsCommandInput, DescribeMergeConflictsCommandOutput>;
    private serialize;
    private deserialize;
}
