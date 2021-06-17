import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { BatchDescribeMergeConflictsInput, BatchDescribeMergeConflictsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface BatchDescribeMergeConflictsCommandInput extends BatchDescribeMergeConflictsInput {
}
export interface BatchDescribeMergeConflictsCommandOutput extends BatchDescribeMergeConflictsOutput, __MetadataBearer {
}
/**
 * <p>Returns information about one or more merge conflicts in the attempted merge of two commit specifiers using the squash or three-way merge strategy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, BatchDescribeMergeConflictsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, BatchDescribeMergeConflictsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new BatchDescribeMergeConflictsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BatchDescribeMergeConflictsCommandInput} for command's `input` shape.
 * @see {@link BatchDescribeMergeConflictsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class BatchDescribeMergeConflictsCommand extends $Command<BatchDescribeMergeConflictsCommandInput, BatchDescribeMergeConflictsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: BatchDescribeMergeConflictsCommandInput;
    constructor(input: BatchDescribeMergeConflictsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<BatchDescribeMergeConflictsCommandInput, BatchDescribeMergeConflictsCommandOutput>;
    private serialize;
    private deserialize;
}
