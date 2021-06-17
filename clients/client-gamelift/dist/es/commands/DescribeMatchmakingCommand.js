import { __extends } from "tslib";
import { DescribeMatchmakingInput, DescribeMatchmakingOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeMatchmakingCommand, serializeAws_json1_1DescribeMatchmakingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
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
var DescribeMatchmakingCommand = /** @class */ (function (_super) {
    __extends(DescribeMatchmakingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMatchmakingCommand(input) {
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
    DescribeMatchmakingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeMatchmakingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMatchmakingInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMatchmakingOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMatchmakingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMatchmakingCommand(input, context);
    };
    DescribeMatchmakingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMatchmakingCommand(output, context);
    };
    return DescribeMatchmakingCommand;
}($Command));
export { DescribeMatchmakingCommand };
//# sourceMappingURL=DescribeMatchmakingCommand.js.map