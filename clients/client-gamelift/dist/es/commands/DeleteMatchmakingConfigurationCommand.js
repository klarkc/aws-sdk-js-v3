import { __extends } from "tslib";
import { DeleteMatchmakingConfigurationInput, DeleteMatchmakingConfigurationOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteMatchmakingConfigurationCommand, serializeAws_json1_1DeleteMatchmakingConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently removes a FlexMatch matchmaking configuration. To delete, specify the
 *             configuration name. A matchmaking configuration cannot be deleted if it is being used in
 *             any active matchmaking tickets.</p>
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
 * import { GameLiftClient, DeleteMatchmakingConfigurationCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteMatchmakingConfigurationCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteMatchmakingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteMatchmakingConfigurationCommandInput} for command's `input` shape.
 * @see {@link DeleteMatchmakingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteMatchmakingConfigurationCommand = /** @class */ (function (_super) {
    __extends(DeleteMatchmakingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteMatchmakingConfigurationCommand(input) {
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
    DeleteMatchmakingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DeleteMatchmakingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteMatchmakingConfigurationInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteMatchmakingConfigurationOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteMatchmakingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteMatchmakingConfigurationCommand(input, context);
    };
    DeleteMatchmakingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteMatchmakingConfigurationCommand(output, context);
    };
    return DeleteMatchmakingConfigurationCommand;
}($Command));
export { DeleteMatchmakingConfigurationCommand };
//# sourceMappingURL=DeleteMatchmakingConfigurationCommand.js.map