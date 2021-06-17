import { KMSClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../KMSClient";
import { ListGrantsResponse, ListRetirableGrantsRequest } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface ListRetirableGrantsCommandInput extends ListRetirableGrantsRequest {
}
export interface ListRetirableGrantsCommandOutput extends ListGrantsResponse, __MetadataBearer {
}
/**
 * <p>Returns all grants in which the specified principal is the <code>RetiringPrincipal</code>
 *       in the grant. </p>
 *          <p>You can specify any principal in your AWS account. The grants that are returned include
 *       grants for CMKs in your AWS account and other AWS accounts.</p>
 *          <p>You might use this operation to determine which grants you may retire. To retire a grant,
 *       use the <a>RetireGrant</a> operation.</p>
 *          <p>
 *             <b>Cross-account use</b>: You must specify a principal in your
 *       AWS account. However, this operation can return grants in any AWS account. You do not need
 *         <code>kms:ListRetirableGrants</code> permission (or any other additional permission) in any
 *       AWS account other than your own.</p>
 *
 *          <p>
 *             <b>Required permissions</b>: <a href="https://docs.aws.amazon.com/kms/latest/developerguide/kms-api-permissions-reference.html">kms:ListRetirableGrants</a> (IAM policy) in your AWS
 *       account.</p>
 *          <p>
 *             <b>Related operations:</b>
 *          </p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a>CreateGrant</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>ListGrants</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RetireGrant</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a>RevokeGrant</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KMSClient, ListRetirableGrantsCommand } from "@aws-sdk/client-kms"; // ES Modules import
 * // const { KMSClient, ListRetirableGrantsCommand } = require("@aws-sdk/client-kms"); // CommonJS import
 * const client = new KMSClient(config);
 * const command = new ListRetirableGrantsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRetirableGrantsCommandInput} for command's `input` shape.
 * @see {@link ListRetirableGrantsCommandOutput} for command's `response` shape.
 * @see {@link KMSClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class ListRetirableGrantsCommand extends $Command<ListRetirableGrantsCommandInput, ListRetirableGrantsCommandOutput, KMSClientResolvedConfig> {
    readonly input: ListRetirableGrantsCommandInput;
    constructor(input: ListRetirableGrantsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: KMSClientResolvedConfig, options?: __HttpHandlerOptions): Handler<ListRetirableGrantsCommandInput, ListRetirableGrantsCommandOutput>;
    private serialize;
    private deserialize;
}
