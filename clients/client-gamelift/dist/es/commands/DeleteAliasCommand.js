import { __extends } from "tslib";
import { DeleteAliasInput } from "../models/models_0";
import { deserializeAws_json1_1DeleteAliasCommand, serializeAws_json1_1DeleteAliasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes an alias. This operation removes all record of the alias. Game clients
 *             attempting to access a server process using the deleted alias receive an error. To
 *             delete an alias, specify the alias ID to be deleted.</p>
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
 * import { GameLiftClient, DeleteAliasCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteAliasCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAliasCommandInput} for command's `input` shape.
 * @see {@link DeleteAliasCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAliasCommand = /** @class */ (function (_super) {
    __extends(DeleteAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAliasCommand(input) {
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
    DeleteAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DeleteAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAliasInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAliasCommand(input, context);
    };
    DeleteAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAliasCommand(output, context);
    };
    return DeleteAliasCommand;
}($Command));
export { DeleteAliasCommand };
//# sourceMappingURL=DeleteAliasCommand.js.map