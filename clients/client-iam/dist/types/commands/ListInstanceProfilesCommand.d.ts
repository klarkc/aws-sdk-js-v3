import { IAMClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../IAMClient";
import { ListInstanceProfilesRequest, ListInstanceProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListInstanceProfilesCommandInput extends ListInstanceProfilesRequest {
}
export interface ListInstanceProfilesCommandOutput extends ListInstanceProfilesResponse, __MetadataBearer {
}
/**
 * <p>Lists the instance profiles that have the specified path prefix. If there are none,
 *             the operation returns an empty list. For more information about instance profiles, see
 *                 <a href="https://docs.aws.amazon.com/IAM/latest/UserGuide/AboutInstanceProfiles.html">About
 *                 instance profiles</a>.</p>
 *         <note>
 *             <p>IAM resource-listing operations return a subset of the available
 *    attributes for the resource. For example, this operation does not return tags, even though they are an attribute of the returned object. To view all of the information for an instance profile, see <a>GetInstanceProfile</a>.</p>
 *         </note>
 *         <p>You can paginate the results using the <code>MaxItems</code> and <code>Marker</code>
 *             parameters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IAMClient, ListInstanceProfilesCommand } from "@aws-sdk/client-iam"; // ES Modules import
 * // const { IAMClient, ListInstanceProfilesCommand } = require("@aws-sdk/client-iam"); // CommonJS import
 * const client = new IAMClient(config);
 * const command = new ListInstanceProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstanceProfilesCommandInput} for command's `input` shape.
 * @see {@link ListInstanceProfilesCommandOutput} for command's `response` shape.
 * @see {@link IAMClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListInstanceProfilesCommand extends $Command<ListInstanceProfilesCommandInput, ListInstanceProfilesCommandOutput, IAMClientResolvedConfig> {
    readonly input: ListInstanceProfilesCommandInput;
    constructor(input: ListInstanceProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: IAMClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListInstanceProfilesCommandInput, ListInstanceProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
