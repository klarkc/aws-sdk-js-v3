import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { UntagResourceRequest, UntagResourceResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface UntagResourceCommandInput extends UntagResourceRequest {
}
export interface UntagResourceCommandOutput extends UntagResourceResponse, __MetadataBearer {
}
/**
 * <p>Removes a tag that is assigned to a GameLift resource.
 *             Resource tags are used to organize AWS resources for a range of purposes.
 *             This operation handles the permissions necessary to manage tags for the following
 *             GameLift resource types:</p>
 *         <ul>
 *             <li>
 *                 <p>Build</p>
 *             </li>
 *             <li>
 *                 <p>Script</p>
 *             </li>
 *             <li>
 *                 <p>Fleet</p>
 *             </li>
 *             <li>
 *                 <p>Alias</p>
 *             </li>
 *             <li>
 *                 <p>GameSessionQueue</p>
 *             </li>
 *             <li>
 *                 <p>MatchmakingConfiguration</p>
 *             </li>
 *             <li>
 *                 <p>MatchmakingRuleSet</p>
 *             </li>
 *          </ul>
 *         <p>To remove a tag from a resource, specify the unique ARN value for the resource and provide
 *             a string list containing one or more tags to be removed.
 *             This operation succeeds even if the list includes tags that are not currently assigned to the
 *             specified resource.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html">Tagging AWS Resources</a> in the
 *             <i>AWS General Reference</i>
 *          </p>
 *         <p>
 *             <a href="http://aws.amazon.com/answers/account-management/aws-tagging-strategies/">
 *             AWS Tagging Strategies</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>TagResource</a> |
 *                     <a>UntagResource</a> |
 *                     <a>ListTagsForResource</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UntagResourceCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UntagResourceCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UntagResourceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UntagResourceCommandInput} for command's `input` shape.
 * @see {@link UntagResourceCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class UntagResourceCommand extends $Command<UntagResourceCommandInput, UntagResourceCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: UntagResourceCommandInput;
    constructor(input: UntagResourceCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<UntagResourceCommandInput, UntagResourceCommandOutput>;
    private serialize;
    private deserialize;
}
