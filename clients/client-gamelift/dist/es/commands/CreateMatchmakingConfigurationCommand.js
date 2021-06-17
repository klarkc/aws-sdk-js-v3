import { __extends } from "tslib";
import { CreateMatchmakingConfigurationInput, CreateMatchmakingConfigurationOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateMatchmakingConfigurationCommand, serializeAws_json1_1CreateMatchmakingConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Defines a new matchmaking configuration for use with FlexMatch. Whether your are using
 *             FlexMatch with GameLift hosting or as a standalone matchmaking service, the matchmaking
 *             configuration sets out rules for matching players and forming teams. If you're also
 *             using GameLift hosting, it defines how to start game sessions for each match. Your
 *             matchmaking system can use multiple configurations to handle different game scenarios.
 *             All matchmaking requests (<a>StartMatchmaking</a> or <a>StartMatchBackfill</a>) identify the matchmaking configuration to use and
 *             provide player attributes consistent with that configuration. </p>
 *         <p>To create a matchmaking configuration, you must provide the following: configuration
 *             name and FlexMatch mode (with or without GameLift hosting); a rule set that specifies how
 *             to evaluate players and find acceptable matches; whether player acceptance is required;
 *             and the maximum time allowed for a matchmaking attempt. When using FlexMatch with GameLift
 *             hosting, you also need to identify the game session queue to use when starting a game
 *             session for the match.</p>
 *         <p>In addition, you must set up an Amazon Simple Notification Service (SNS) topic to receive matchmaking notifications.
 *             Provide the topic ARN in the matchmaking configuration. An alternative method,
 *             continuously polling ticket status with <a>DescribeMatchmaking</a>, is only
 *             suitable for games in development with low matchmaking usage.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-configuration.html">
 *                 Design a FlexMatch matchmaker</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/flexmatchguide/match-notification.html">
 *             Set up FlexMatch event notification</a>
 *          </p>
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
 * import { GameLiftClient, CreateMatchmakingConfigurationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateMatchmakingConfigurationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateMatchmakingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMatchmakingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateMatchmakingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMatchmakingConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreateMatchmakingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMatchmakingConfigurationCommand(input) {
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
    CreateMatchmakingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "CreateMatchmakingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMatchmakingConfigurationInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateMatchmakingConfigurationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMatchmakingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateMatchmakingConfigurationCommand(input, context);
    };
    CreateMatchmakingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateMatchmakingConfigurationCommand(output, context);
    };
    return CreateMatchmakingConfigurationCommand;
}($Command));
export { CreateMatchmakingConfigurationCommand };
//# sourceMappingURL=CreateMatchmakingConfigurationCommand.js.map