import { __extends } from "tslib";
import { UpdateAliasInput, UpdateAliasOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateAliasCommand, serializeAws_json1_1UpdateAliasCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates properties for an alias. To update properties, specify the alias ID to be
 *             updated and provide the information to be changed. To reassign an alias to another
 *             fleet, provide an updated routing strategy. If successful, the updated alias record is
 *             returned.</p>
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
 * import { GameLiftClient, UpdateAliasCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateAliasCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateAliasCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAliasCommandInput} for command's `input` shape.
 * @see {@link UpdateAliasCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAliasCommand = /** @class */ (function (_super) {
    __extends(UpdateAliasCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAliasCommand(input) {
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
    UpdateAliasCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "UpdateAliasCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAliasInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAliasOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAliasCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAliasCommand(input, context);
    };
    UpdateAliasCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAliasCommand(output, context);
    };
    return UpdateAliasCommand;
}($Command));
export { UpdateAliasCommand };
//# sourceMappingURL=UpdateAliasCommand.js.map