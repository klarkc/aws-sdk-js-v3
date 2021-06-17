import { ServiceInputTypes, ServiceOutputTypes, WorkDocsClientResolvedConfig } from "../WorkDocsClient";
import { DescribeRootFoldersRequest, DescribeRootFoldersResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeRootFoldersCommandInput extends DescribeRootFoldersRequest {
}
export interface DescribeRootFoldersCommandOutput extends DescribeRootFoldersResponse, __MetadataBearer {
}
/**
 * <p>Describes the current user's special folders; the <code>RootFolder</code> and the
 *                 <code>RecycleBin</code>. <code>RootFolder</code> is the root of user's files and
 *             folders and <code>RecycleBin</code> is the root of recycled items. This is not a valid
 *             action for SigV4 (administrative API) clients.</p>
 *         <p>This action requires an authentication token. To get an authentication token,
 *             register an application with Amazon WorkDocs. For more information, see <a href="https://docs.aws.amazon.com/workdocs/latest/developerguide/wd-auth-user.html">Authentication and Access
 *                 Control for User Applications</a> in the
 *             <i>Amazon
 *             WorkDocs Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, DescribeRootFoldersCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, DescribeRootFoldersCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new DescribeRootFoldersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeRootFoldersCommandInput} for command's `input` shape.
 * @see {@link DescribeRootFoldersCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeRootFoldersCommand extends $Command<DescribeRootFoldersCommandInput, DescribeRootFoldersCommandOutput, WorkDocsClientResolvedConfig> {
    readonly input: DescribeRootFoldersCommandInput;
    constructor(input: DescribeRootFoldersCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: WorkDocsClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeRootFoldersCommandInput, DescribeRootFoldersCommandOutput>;
    private serialize;
    private deserialize;
}
