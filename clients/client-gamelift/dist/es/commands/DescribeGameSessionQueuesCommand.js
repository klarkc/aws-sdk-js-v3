import { __extends } from "tslib";
import { DescribeGameSessionQueuesInput, DescribeGameSessionQueuesOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeGameSessionQueuesCommand, serializeAws_json1_1DescribeGameSessionQueuesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeGameSessionQueuesCommand = /** @class */ (function (_super) {
    __extends(DescribeGameSessionQueuesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGameSessionQueuesCommand(input) {
        var _this = 
        // Start section: command_constructor
        _super.call(this) || this;
        _this.input = input;
        return _this;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    DescribeGameSessionQueuesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeGameSessionQueuesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGameSessionQueuesInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGameSessionQueuesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGameSessionQueuesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeGameSessionQueuesCommand(input, context);
    };
    DescribeGameSessionQueuesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeGameSessionQueuesCommand(output, context);
    };
    return DescribeGameSessionQueuesCommand;
}($Command));
export { DescribeGameSessionQueuesCommand };
//# sourceMappingURL=DescribeGameSessionQueuesCommand.js.map