import { __extends } from "tslib";
import { DescribeMatchmakingRuleSetsInput, DescribeMatchmakingRuleSetsOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand, serializeAws_json1_1DescribeMatchmakingRuleSetsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the details for FlexMatch matchmaking rule sets. You can request all
 *             existing rule sets for the Region, or provide a list of one or more rule set names. When
 *             requesting multiple items, use the pagination parameters to retrieve results as a set of
 *             sequential pages. If successful, a rule set is returned for each requested name. </p>
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
 * import { GameLiftClient, DescribeMatchmakingRuleSetsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeMatchmakingRuleSetsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeMatchmakingRuleSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeMatchmakingRuleSetsCommandInput} for command's `input` shape.
 * @see {@link DescribeMatchmakingRuleSetsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeMatchmakingRuleSetsCommand = /** @class */ (function (_super) {
    __extends(DescribeMatchmakingRuleSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeMatchmakingRuleSetsCommand(input) {
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
    DescribeMatchmakingRuleSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeMatchmakingRuleSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeMatchmakingRuleSetsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeMatchmakingRuleSetsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeMatchmakingRuleSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeMatchmakingRuleSetsCommand(input, context);
    };
    DescribeMatchmakingRuleSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeMatchmakingRuleSetsCommand(output, context);
    };
    return DescribeMatchmakingRuleSetsCommand;
}($Command));
export { DescribeMatchmakingRuleSetsCommand };
//# sourceMappingURL=DescribeMatchmakingRuleSetsCommand.js.map