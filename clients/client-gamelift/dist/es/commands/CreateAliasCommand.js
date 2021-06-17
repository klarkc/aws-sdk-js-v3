import { __extends } from "tslib";
import { CreateAliasInput, CreateAliasOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateAliasCommand, serializeAws_json1_1CreateAliasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an alias for a fleet. In most situations, you can use an alias ID in place of
 *             a fleet ID. An alias provides a level of abstraction for a fleet that is useful when
 *             redirecting player traffic from one fleet to another, such as when updating your game
 *             build.  </p>
 *         <p>Amazon GameLift supports two types of routing strategies for aliases: simple and terminal. A
 *             simple alias points to an active fleet. A terminal alias is used to display messaging or
 *             link to a URL instead of routing players to an active fleet. For example, you might use
 *             a terminal alias when a game version is no longer supported and you want to direct
 *             players to an upgrade site. </p>
 *         <p>To create a fleet alias, specify an alias name, routing strategy, and optional
 *             description. Each simple alias can point to only one fleet, but a fleet can have
 *             multiple aliases. If successful, a new alias record is returned, including an alias ID
 *             and an ARN. You can reassign an alias to another fleet by calling
 *                 <code>UpdateAlias</code>.</p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateAlias</a> |
 *                     <a>ListAliases</a> |
 *                     <a>DescribeAlias</a> |
 *                     <a>UpdateAlias</a> |
 *                     <a>DeleteAlias</a> |
 *                     <a>ResolveAlias</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateAliasCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateAliasCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAliasCommandInput} for command's `input` shape.
 * @see {@link CreateAliasCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAliasCommand = /** @class */ (function (_super) {
    __extends(CreateAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAliasCommand(input) {
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
    CreateAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "CreateAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAliasInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAliasOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateAliasCommand(input, context);
    };
    CreateAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateAliasCommand(output, context);
    };
    return CreateAliasCommand;
}($Command));
export { CreateAliasCommand };
//# sourceMappingURL=CreateAliasCommand.js.map