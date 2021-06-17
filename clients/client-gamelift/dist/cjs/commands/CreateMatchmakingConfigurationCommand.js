"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateMatchmakingConfigurationCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateMatchmakingConfigurationCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GameLiftClient";
        const commandName = "CreateMatchmakingConfigurationCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateMatchmakingConfigurationInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateMatchmakingConfigurationOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateMatchmakingConfigurationCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateMatchmakingConfigurationCommand(output, context);
    }
}
exports.CreateMatchmakingConfigurationCommand = CreateMatchmakingConfigurationCommand;
//# sourceMappingURL=CreateMatchmakingConfigurationCommand.js.map