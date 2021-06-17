import { PersonalizeRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeRuntimeClient";
import { GetRecommendationsRequest, GetRecommendationsResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetRecommendationsCommandInput extends GetRecommendationsRequest {
}
export interface GetRecommendationsCommandOutput extends GetRecommendationsResponse, __MetadataBearer {
}
/**
 * <p>Returns a list of recommended items. The required input depends on the recipe type used to
 *       create the solution backing the campaign, as follows:</p>
 *          <ul>
 *             <li>
 *                <p>RELATED_ITEMS - <code>itemId</code> required, <code>userId</code> not used</p>
 *             </li>
 *             <li>
 *                <p>USER_PERSONALIZATION - <code>itemId</code> optional, <code>userId</code>
 *           required</p>
 *             </li>
 *          </ul>
 *          <note>
 *             <p>Campaigns that are backed by a solution created using a recipe of type
 *         PERSONALIZED_RANKING use the  API.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetRecommendationsCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetRecommendationsCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const command = new GetRecommendationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecommendationsCommandInput} for command's `input` shape.
 * @see {@link GetRecommendationsCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetRecommendationsCommand extends $Command<GetRecommendationsCommandInput, GetRecommendationsCommandOutput, PersonalizeRuntimeClientResolvedConfig> {
    readonly input: GetRecommendationsCommandInput;
    constructor(input: GetRecommendationsCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeRuntimeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetRecommendationsCommandInput, GetRecommendationsCommandOutput>;
    private serialize;
    private deserialize;
}
