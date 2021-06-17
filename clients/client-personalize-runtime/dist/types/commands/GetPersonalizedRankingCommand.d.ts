import { PersonalizeRuntimeClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../PersonalizeRuntimeClient";
import { GetPersonalizedRankingRequest, GetPersonalizedRankingResponse } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetPersonalizedRankingCommandInput extends GetPersonalizedRankingRequest {
}
export interface GetPersonalizedRankingCommandOutput extends GetPersonalizedRankingResponse, __MetadataBearer {
}
/**
 * <p>Re-ranks a list of recommended items for the given user. The first item in the list is
 *       deemed the most likely item to be of interest to the user.</p>
 *          <note>
 *             <p>The solution backing the campaign must have been created using a recipe of type
 *         PERSONALIZED_RANKING.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } from "@aws-sdk/client-personalize-runtime"; // ES Modules import
 * // const { PersonalizeRuntimeClient, GetPersonalizedRankingCommand } = require("@aws-sdk/client-personalize-runtime"); // CommonJS import
 * const client = new PersonalizeRuntimeClient(config);
 * const command = new GetPersonalizedRankingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetPersonalizedRankingCommandInput} for command's `input` shape.
 * @see {@link GetPersonalizedRankingCommandOutput} for command's `response` shape.
 * @see {@link PersonalizeRuntimeClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetPersonalizedRankingCommand extends $Command<GetPersonalizedRankingCommandInput, GetPersonalizedRankingCommandOutput, PersonalizeRuntimeClientResolvedConfig> {
    readonly input: GetPersonalizedRankingCommandInput;
    constructor(input: GetPersonalizedRankingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: PersonalizeRuntimeClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetPersonalizedRankingCommandInput, GetPersonalizedRankingCommandOutput>;
    private serialize;
    private deserialize;
}
