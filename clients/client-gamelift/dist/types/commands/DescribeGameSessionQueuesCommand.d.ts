import { GameLiftClientResolvedConfig, ServiceInputTypes, ServiceOutputTypes } from "../GameLiftClient";
import { DescribeGameSessionQueuesInput, DescribeGameSessionQueuesOutput } from "../models/models_0";
import { Command as $Command } from "@aws-sdk/smithy-client";
import { Handler, MiddlewareStack, HttpHandlerOptions as __HttpHandlerOptions, MetadataBearer as __MetadataBearer } from "@aws-sdk/types";
export interface DescribeGameSessionQueuesCommandInput extends DescribeGameSessionQueuesInput {
}
export interface DescribeGameSessionQueuesCommandOutput extends DescribeGameSessionQueuesOutput, __MetadataBearer {
}
/**
 * <p>Retrieves the properties for one or more game session queues. When requesting
 *             multiple queues, use the pagination parameters to retrieve results as a set of
 *             sequential pages. If successful, a <a>GameSessionQueue</a> object is returned
 *             for each requested queue. When specifying a list of queues, objects are returned only
 *             for queues that currently exist in the Region.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/queues-console.html">
 *            View Your Queues</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateGameSessionQueue</a> |
 *                     <a>DescribeGameSessionQueues</a> |
 *                     <a>UpdateGameSessionQueue</a> |
 *                     <a>DeleteGameSessionQueue</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DescribeGameSessionQueuesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameSessionQueuesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameSessionQueuesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameSessionQueuesCommandInput} for command's `input` shape.
 * @see {@link DescribeGameSessionQueuesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
export declare class DescribeGameSessionQueuesCommand extends $Command<DescribeGameSessionQueuesCommandInput, DescribeGameSessionQueuesCommandOutput, GameLiftClientResolvedConfig> {
    readonly input: DescribeGameSessionQueuesCommandInput;
    constructor(input: DescribeGameSessionQueuesCommandInput);
    /**
     * @internal
     */
    resolveMiddleware(clientStack: MiddlewareStack<ServiceInputTypes, ServiceOutputTypes>, configuration: GameLiftClientResolvedConfig, options?: __HttpHandlerOptions): Handler<DescribeGameSessionQueuesCommandInput, DescribeGameSessionQueuesCommandOutput>;
    private serialize;
    private deserialize;
}
