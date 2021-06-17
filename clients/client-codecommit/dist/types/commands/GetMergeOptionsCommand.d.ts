import { CodeCommitClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CodeCommitClient";
import { GetMergeOptionsInput, GetMergeOptionsOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetMergeOptionsCommandInput extends GetMergeOptionsInput {
}
export interface GetMergeOptionsCommandOutput extends GetMergeOptionsOutput, __MetadataBearer {
}
/**
 * <p>Returns information about the merge options available for merging two specified
 *             branches. For details about why a merge option is not available, use GetMergeConflicts
 *             or DescribeMergeConflicts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeCommitClient, GetMergeOptionsCommand } from "@aws-sdk/client-codecommit"; // ES Modules import
 * // const { CodeCommitClient, GetMergeOptionsCommand } = require("@aws-sdk/client-codecommit"); // CommonJS import
 * const client = new CodeCommitClient(config);
 * const command = new GetMergeOptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetMergeOptionsCommandInput} for command's `input` shape.
 * @see {@link GetMergeOptionsCommandOutput} for command's `response` shape.
 * @see {@link CodeCommitClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetMergeOptionsCommand extends $Command<GetMergeOptionsCommandInput, GetMergeOptionsCommandOutput, CodeCommitClientResolvedConfig> {
    readonly input: GetMergeOptionsCommandInput;
    constructor(input: GetMergeOptionsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CodeCommitClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetMergeOptionsCommandInput, GetMergeOptionsCommandOutput>;
    private serialize;
    private deserialize;
}
