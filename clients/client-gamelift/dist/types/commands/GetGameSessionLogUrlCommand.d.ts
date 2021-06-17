import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { GetGameSessionLogUrlInput, GetGameSessionLogUrlOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface GetGameSessionLogUrlCommandInput extends GetGameSessionLogUrlInput {
}
export interface GetGameSessionLogUrlCommandOutput extends GetGameSessionLogUrlOutput, __MetadataBearer {
}
/**
 * <p>Retrieves the location of stored game session logs for a specified game session.
 *             When a game session is terminated, GameLift automatically stores the logs in Amazon S3 and
 *             retains them for 14 days. Use this URL to download the logs.</p>
 *         <note>
 *             <p>See the <a href="https://docs.aws.amazon.com/general/latest/gr/aws_service_limits.html#limits_gamelift">AWS Service
 *                     Limits</a> page for maximum log file sizes. Log files that exceed this limit
 *                 are not saved.</p>
 *         </note>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameSession</a> |
 *                     <a>DescribeGameSessions</a> |
 *                     <a>DescribeGameSessionDetails</a> |
 *                     <a>SearchGameSessions</a> |
 *                     <a>UpdateGameSession</a> |
 *                     <a>GetGameSessionLogUrl</a> |
 *                     <a>StartGameSessionPlacement</a> |
 *                     <a>DescribeGameSessionPlacement</a> |
 *                     <a>StopGameSessionPlacement</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, GetGameSessionLogUrlCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, GetGameSessionLogUrlCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new GetGameSessionLogUrlCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetGameSessionLogUrlCommandInput} for command's `input` shape.
 * @see {@link GetGameSessionLogUrlCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class GetGameSessionLogUrlCommand extends $Command<GetGameSessionLogUrlCommandInput, GetGameSessionLogUrlCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: GetGameSessionLogUrlCommandInput;
    constructor(input: GetGameSessionLogUrlCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<GetGameSessionLogUrlCommandInput, GetGameSessionLogUrlCommandOutput>;
    private serialize;
    private deserialize;
}
