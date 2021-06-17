import { __extends } from "tslib";
import { ResolveAliasInput, ResolveAliasOutput } from "../models/models_0";
import { deserializeAws_json1_1ResolveAliasCommand, serializeAws_json1_1ResolveAliasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the fleet ID that an alias is currently pointing to.</p>
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
 * import { GameLiftClient, ResolveAliasCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ResolveAliasCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ResolveAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ResolveAliasCommandInput} for command's `input` shape.
 * @see {@link ResolveAliasCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ResolveAliasCommand = /** @class */ (function (_super) {
    __extends(ResolveAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ResolveAliasCommand(input) {
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
    ResolveAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "ResolveAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ResolveAliasInput.filterSensitiveLog,
            outputFilterSensitiveLog: ResolveAliasOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ResolveAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ResolveAliasCommand(input, context);
    };
    ResolveAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ResolveAliasCommand(output, context);
    };
    return ResolveAliasCommand;
}($Command));
export { ResolveAliasCommand };
//# sourceMappingURL=ResolveAliasCommand.js.map