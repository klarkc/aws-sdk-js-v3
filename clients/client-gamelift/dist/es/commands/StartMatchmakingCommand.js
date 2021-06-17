import { __extends } from "tslib";
import { StartMatchmakingInput, StartMatchmakingOutput } from "../models/models_0";
import { deserializeAws_json1_1StartMatchmakingCommand, serializeAws_json1_1StartMatchmakingCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Uses FlexMatch to create a game match for a group of players based on custom matchmaking
 *             rules. With games that use GameLift managed hosting, this operation also triggers GameLift
 *             to find hosting resources and start a new game session for the new match. Each
 *             matchmaking request includes information on one or more players and specifies the
 *             FlexMatch matchmaker to use. When a request is for multiple players, FlexMatch attempts to
 *             build a match that includes all players in the request, placing them in the same team
 *             and finding additional players as needed to fill the match. </p>
 *         <p>To start matchmaking, provide a unique ticket ID, specify a matchmaking configuration,
 *             and include the players to be matched. You must also include any player attributes that
 *             are required by the matchmaking configuration's rule set. If successful, a matchmaking
 *             ticket is returned with status set to <code>QUEUED</code>. </p>
 *         <p>Track matchmaking events to respond as needed and acquire game session connection
 *             information for successfully completed matches. Ticket status updates are tracked using
 *             event notification through Amazon Simple Notification Service (SNS), which is defined in the matchmaking
 *             configuration.</p>
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
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/gamelift-match.html">
 *             How GameLift FlexMatch works</a>
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
 * import { GameLiftClient, StartMatchmakingCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, StartMatchmakingCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new StartMatchmakingCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link StartMatchmakingCommandInput} for command's `input` shape.
 * @see {@link StartMatchmakingCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var StartMatchmakingCommand = /** @class */ (function (_super) {
    __extends(StartMatchmakingCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function StartMatchmakingCommand(input) {
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
    StartMatchmakingCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "StartMatchmakingCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: StartMatchmakingInput.filterSensitiveLog,
            outputFilterSensitiveLog: StartMatchmakingOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    StartMatchmakingCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1StartMatchmakingCommand(input, context);
    };
    StartMatchmakingCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1StartMatchmakingCommand(output, context);
    };
    return StartMatchmakingCommand;
}($Command));
export { StartMatchmakingCommand };
//# sourceMappingURL=StartMatchmakingCommand.js.map