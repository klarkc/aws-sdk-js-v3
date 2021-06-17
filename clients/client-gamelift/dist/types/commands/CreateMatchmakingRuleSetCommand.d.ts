import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { CreateMatchmakingRuleSetInput, CreateMatchmakingRuleSetOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface CreateMatchmakingRuleSetCommandInput extends CreateMatchmakingRuleSetInput {
}
export interface CreateMatchmakingRuleSetCommandOutput extends CreateMatchmakingRuleSetOutput, __MetadataBearer {
}
/**
 * <p>Creates a new rule set for FlexMatch matchmaking. A rule set describes the type of match
 *             to create, such as the number and size of teams. It also sets the parameters for
 *             acceptable player matches, such as minimum skill level or character type. A rule set is
 *             used by a <a>MatchmakingConfiguration</a>. </p>
 *         <p>To create a matchmaking rule set, provide unique rule set name and the rule set body
 *             in JSON format. Rule sets must be defined in the same Region as the matchmaking
 *             configuration they are used with.</p>
 *         <p>Since matchmaking rule sets cannot be edited, it is a good idea to check the rule
 *             set syntax using <a>ValidateMatchmakingRuleSet</a> before creating a new rule
 *             set.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <ul>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-rulesets.html">Build a rule
 *                         set</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">Design a
 *                         matchmaker</a>
 *                </p>
 *             </li>
 *             <li>
 *                 <p>
 *                   <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-intro.html">Matchmaking with
 *                         FlexMatch</a>
 *                </p>
 *             </li>
 *          </ul>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateMatchmakingConfiguration</a> |
 *                     <a>DescribeMatchmakingConfigurations</a> |
 *                     <a>UpdateMatchmakingConfiguration</a> |
 *                     <a>DeleteMatchmakingConfiguration</a> |
 *                     <a>CreateMatchmakingRuleSet</a> |
 *                     <a>DescribeMatchmakingRuleSets</a> |
 *                     <a>ValidateMatchmakingRuleSet</a> |
 *                     <a>DeleteMatchmakingRuleSet</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateMatchmakingRuleSetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateMatchmakingRuleSetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateMatchmakingRuleSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMatchmakingRuleSetCommandInput} for command's `input` shape.
 * @see {@link CreateMatchmakingRuleSetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class CreateMatchmakingRuleSetCommand extends $Command<CreateMatchmakingRuleSetCommandInput, CreateMatchmakingRuleSetCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: CreateMatchmakingRuleSetCommandInput;
    constructor(input: CreateMatchmakingRuleSetCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<CreateMatchmakingRuleSetCommandInput, CreateMatchmakingRuleSetCommandOutput>;
    private serialize;
    private deserialize;
}
