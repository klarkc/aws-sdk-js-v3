import { FSxClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../FSxClient";
import { ListTagsForResourceRequest, ListTagsForResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListTagsForResourceCommandInput extends ListTagsForResourceRequest {
}
export interface ListTagsForResourceCommandOutput extends ListTagsForResourceResponse, __MetadataBearer {
}
/**
 * <p>Lists tags for an Amazon FSx file systems and backups in the case of Amazon FSx for
 *             Windows File Server.</p>
 *
 *         <p>When retrieving all tags, you can optionally specify the <code>MaxResults</code>
 *             parameter to limit the number of tags in a response. If more tags remain, Amazon FSx
 *             returns a <code>NextToken</code> value in the response. In this case, send a later
 *             request with the <code>NextToken</code> request parameter set to the value of
 *                 <code>NextToken</code> from the last response.</p>
 *
 *         <p>This action is used in an iterative process to retrieve a list of your tags.
 *                 <code>ListTagsForResource</code> is called first without a
 *             <code>NextToken</code>value. Then the action continues to be called with the
 *                 <code>NextToken</code> parameter set to the value of the last <code>NextToken</code>
 *             value until a response has no <code>NextToken</code>.</p>
 *
 *         <p>When using this action, keep the following in mind:</p>
 *         <ul>
 *             <li>
 *                 <p>The implementation might return fewer than <code>MaxResults</code> file
 *                     system descriptions while still including a <code>NextToken</code>
 *                     value.</p>
 *
 *             </li>
 *             <li>
 *                 <p>The order of tags returned in the response of one
 *                         <code>ListTagsForResource</code> call and the order of tags returned across
 *                     the responses of a multi-call iteration is unspecified.</p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { FSxClient, ListTagsForResourceCommand } from "@aws-sdk/client-fsx"; // ES Modules import
 * // const { FSxClient, ListTagsForResourceCommand } = require("@aws-sdk/client-fsx"); // CommonJS import
 * const client = new FSxClient(config);
 * const command = new ListTagsForResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTagsForResourceCommandInput} for command's `input` shape.
 * @see {@link ListTagsForResourceCommandOutput} for command's `response` shape.
 * @see {@link FSxClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListTagsForResourceCommand extends $Command<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput, FSxClientResolvedConfig> {
    readonly input: ListTagsForResourceCommandInput;
    constructor(input: ListTagsForResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: FSxClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListTagsForResourceCommandInput, ListTagsForResourceCommandOutput>;
    private serialize;
    private deserialize;
}
