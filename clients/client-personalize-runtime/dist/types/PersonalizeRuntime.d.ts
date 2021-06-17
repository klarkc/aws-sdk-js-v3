import { PersonalizeRuntimeClient } from "./PersonalizeRuntimeClient";
import { GetPersonalizedRankingCommandInput, GetPersonalizedRankingCommandOutput } from "./commands/GetPersonalizedRankingCommand";
import { GetRecommendationsCommandInput, GetRecommendationsCommandOutput } from "./commands/GetRecommendationsCommand";
import { HttpHandlerOptions as __HttpHandlerOptions } from "@aws-sdk/types";
/**
 * <p></p>
 */
export declare class PersonalizeRuntime extends PersonalizeRuntimeClient {
    /**
     * <p>Re-ranks a list of recommended items for the given user. The first item in the list is
     *       deemed the most likely item to be of interest to the user.</p>
     *          <note>
     *             <p>The solution backing the campaign must have been created using a recipe of type
     *         PERSONALIZED_RANKING.</p>
     *          </note>
     */
    getPersonalizedRanking(args: GetPersonalizedRankingCommandInput, options?: __HttpHandlerOptions): Promise<GetPersonalizedRankingCommandOutput>;
    getPersonalizedRanking(args: GetPersonalizedRankingCommandInput, cb: (err: any, data?: GetPersonalizedRankingCommandOutput) => void): void;
    getPersonalizedRanking(args: GetPersonalizedRankingCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetPersonalizedRankingCommandOutput) => void): void;
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
     */
    getRecommendations(args: GetRecommendationsCommandInput, options?: __HttpHandlerOptions): Promise<GetRecommendationsCommandOutput>;
    getRecommendations(args: GetRecommendationsCommandInput, cb: (err: any, data?: GetRecommendationsCommandOutput) => void): void;
    getRecommendations(args: GetRecommendationsCommandInput, options: __HttpHandlerOptions, cb: (err: any, data?: GetRecommendationsCommandOutput) => void): void;
}
