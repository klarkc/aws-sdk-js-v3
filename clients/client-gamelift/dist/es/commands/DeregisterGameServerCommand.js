import { __extends } from "tslib";
import { DeregisterGameServerInput } from "../models/models_0";
import { deserializeAws_json1_1DeregisterGameServerCommand, serializeAws_json1_1DeregisterGameServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Removes the game server from a game server group. As a result of this operation, the
 *             deregistered game server can no longer be claimed and will not be returned in a list of
 *             active game servers. </p>
 *         <p>To deregister a game server, specify the game server group and game server ID. If
 *             successful, this operation emits a CloudWatch event with termination timestamp and
 *             reason.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/gsg-intro.html">GameLift FleetIQ Guide</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>RegisterGameServer</a> |
 *                     <a>ListGameServers</a> |
 *                     <a>ClaimGameServer</a> |
 *                     <a>DescribeGameServer</a> |
 *                     <a>UpdateGameServer</a> |
 *                     <a>DeregisterGameServer</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/fleetiqguide/reference-awssdk-fleetiq.html">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeregisterGameServerCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeregisterGameServerCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeregisterGameServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeregisterGameServerCommandInput} for command's `input` shape.
 * @see {@link DeregisterGameServerCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeregisterGameServerCommand = /** @class */ (function (_super) {
    __extends(DeregisterGameServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeregisterGameServerCommand(input) {
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
    DeregisterGameServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DeregisterGameServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeregisterGameServerInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeregisterGameServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeregisterGameServerCommand(input, context);
    };
    DeregisterGameServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeregisterGameServerCommand(output, context);
    };
    return DeregisterGameServerCommand;
}($Command));
export { DeregisterGameServerCommand };
//# sourceMappingURL=DeregisterGameServerCommand.js.map