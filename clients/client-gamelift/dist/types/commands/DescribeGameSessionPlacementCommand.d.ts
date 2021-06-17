import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameSessionPlacementInput, DescribeGameSessionPlacementOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeGameSessionPlacementCommandInput extends DescribeGameSessionPlacementInput {
}
export interface DescribeGameSessionPlacementCommandOutput extends DescribeGameSessionPlacementOutput, __MetadataBearer {
}
/**
 * <p>Retrieves information, including current status, about a game session placement request. </p>
 *         <p>To get game session placement details, specify the placement ID.</p>
 *         <p>If successful, a <a>GameSessionPlacement</a> object is returned.</p>
 *          <p>
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
 * import { GameLiftClient, DescribeGameSessionPlacementCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionPlacementCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameSessionPlacementCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameSessionPlacementCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionPlacementCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGameSessionPlacementCommand extends $Command<DescribeGameSessionPlacementCommandInput, DescribeGameSessionPlacementCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeGameSessionPlacementCommandInput;
    constructor(input: DescribeGameSessionPlacementCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGameSessionPlacementCommandInput, DescribeGameSessionPlacementCommandOutput>;
    private serialize;
    private deserialize;
}
