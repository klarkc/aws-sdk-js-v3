import { CustomerProfilesClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../CustomerProfilesClient";
import { MergeProfilesRequest, MergeProfilesResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface MergeProfilesCommandInput extends MergeProfilesRequest {
}
export interface MergeProfilesCommandOutput extends MergeProfilesResponse, __MetadataBearer {
}
/**
 * <p>This API is in preview release for Amazon Connect and subject to change.</p>
 *          <p>Runs an AWS Lambda job that does the following:</p>
 *          <ol>
 *             <li>
 *                <p>All the profileKeys in the <code>ProfileToBeMerged</code> will be moved to the
 *                main profile.</p>
 *             </li>
 *             <li>
 *                <p>All the objects in the <code>ProfileToBeMerged</code> will be moved to the main
 *                profile.</p>
 *             </li>
 *             <li>
 *                <p>All the <code>ProfileToBeMerged</code> will be deleted at the end.</p>
 *             </li>
 *             <li>
 *                <p>All the profileKeys in the <code>ProfileIdsToBeMerged</code> will be moved to the
 *                main profile.</p>
 *             </li>
 *             <li>
 *                <p>Standard fields are merged as follows:</p>
 *                <ol>
 *                   <li>
 *                      <p>Fields are always "union"-ed if there are no conflicts in standard fields or
 *                      attributeKeys.</p>
 *                   </li>
 *                   <li>
 *                      <p>When there are conflicting fields:</p>
 *
 *                      <ol>
 *                         <li>
 *                            <p>If no <code>SourceProfileIds</code> entry is specified, the main
 *                            Profile value is always taken. </p>
 *                         </li>
 *                         <li>
 *                            <p>If a <code>SourceProfileIds</code> entry is specified, the specified
 *                            profileId is always taken, even if it is a NULL value.</p>
 *                         </li>
 *                      </ol>
 *                   </li>
 *                </ol>
 *             </li>
 *          </ol>
 *          <p>You can use MergeProfiles together with <a href="https://docs.aws.amazon.com/customerprofiles/latest/APIReference/API_GetMatches.html">GetMatches</a>, which
 *          returns potentially matching profiles, or use it with the results of another matching
 *          system. After profiles have been merged, they cannot be separated (unmerged).</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CustomerProfilesClient, MergeProfilesCommand } from "@aws-sdk/client-customer-profiles"; // ES Modules import
 * // const { CustomerProfilesClient, MergeProfilesCommand } = require("@aws-sdk/client-customer-profiles"); // CommonJS import
 * const client = new CustomerProfilesClient(config);
 * const command = new MergeProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link MergeProfilesCommandInput} for command's `input` shape.
 * @see {@link MergeProfilesCommandOutput} for command's `response` shape.
 * @see {@link CustomerProfilesClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class MergeProfilesCommand extends $Command<MergeProfilesCommandInput, MergeProfilesCommandOutput, CustomerProfilesClientResolvedConfig> {
    readonly input: MergeProfilesCommandInput;
    constructor(input: MergeProfilesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: CustomerProfilesClientResolvedConfig, options?: __HttpHandlerOptions): Handler<MergeProfilesCommandInput, MergeProfilesCommandOutput>;
    private serialize;
    private deserialize;
}
