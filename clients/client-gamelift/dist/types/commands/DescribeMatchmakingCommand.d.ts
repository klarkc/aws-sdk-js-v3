import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeMatchmakingInput, DescribeMatchmakingOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeMatchmakingCommandInput extends DescribeMatchmakingInput {
}
export interface DescribeMatchmakingCommandOutput extends DescribeMatchmakingOutput, __MetadataBearer {
}
/**
 * <p>Retrieves one or more matchmaking tickets. Use this operation to retrieve ticket
 *             information, including--after a successful match is made--connection information for the
 *             resulting new game session. </p>
 *         <p>To request matchmaking tickets, provide a list of up to 10 ticket IDs. If the
 *             request is successful, a ticket object is returned for each requested ID that currently
 *             exists.</p>
 *         <p>This operation is not designed to be continually called to track matchmaking ticket
 *             status. This practice can cause you to exceed your API limit, which results in errors.
 *             Instead, as a best practice, set up an Amazon Simple Notification Service (SNS) to receive notifications, and provide
 *             the topic ARN in the matchmaking configuration. Continuously poling ticket status with
 *                 <a>DescribeMatchmaking</a> should only be used for games in development
 *             with low matchmaking usage.</p>
 *         <p></p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-client.html">
 *             Add FlexMatch to a game client</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
 *             Set Up FlexMatch event notification</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>StartMatchmaking</a> |
 *                     <a>DescribeMatchmaking</a> |
 *                     <a>StopMatchmaking</a> |
 *                     <a>AcceptMatch</a> |
 *                     <a>StartMatchBackfill</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeMatchmakingCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeMatchmakingCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeMatchmakingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMatchmakingCommandInput} for command's `input` shape.
 * @see {@link DescribeMatchmakingCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeMatchmakingCommand extends $Command<DescribeMatchmakingCommandInput, DescribeMatchmakingCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeMatchmakingCommandInput;
    constructor(input: DescribeMatchmakingCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeMatchmakingCommandInput, DescribeMatchmakingCommandOutput>;
    private serialize;
    private deserialize;
}
