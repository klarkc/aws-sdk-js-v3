import { __extends } from "tslib";
import { ValidateMatchmakingRuleSetInput, ValidateMatchmakingRuleSetOutput } from "../models/models_0";
import { deserializeAws_json1_1ValidateMatchmakingRuleSetCommand, serializeAws_json1_1ValidateMatchmakingRuleSetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Validates the syntax of a matchmaking rule or rule set. This operation checks that
 *             the rule set is using syntactically correct JSON and that it conforms to allowed
 *             property expressions. To validate syntax, provide a rule set JSON string.</p>
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
 * import { GameLiftClient, ValidateMatchmakingRuleSetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ValidateMatchmakingRuleSetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ValidateMatchmakingRuleSetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ValidateMatchmakingRuleSetCommandInput} for command's `input` shape.
 * @see {@link ValidateMatchmakingRuleSetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ValidateMatchmakingRuleSetCommand = /** @class */ (function (_super) {
    __extends(ValidateMatchmakingRuleSetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ValidateMatchmakingRuleSetCommand(input) {
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
    ValidateMatchmakingRuleSetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "ValidateMatchmakingRuleSetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ValidateMatchmakingRuleSetInput.filterSensitiveLog,
            outputFilterSensitiveLog: ValidateMatchmakingRuleSetOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ValidateMatchmakingRuleSetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ValidateMatchmakingRuleSetCommand(input, context);
    };
    ValidateMatchmakingRuleSetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ValidateMatchmakingRuleSetCommand(output, context);
    };
    return ValidateMatchmakingRuleSetCommand;
}($Command));
export { ValidateMatchmakingRuleSetCommand };
//# sourceMappingURL=ValidateMatchmakingRuleSetCommand.js.map