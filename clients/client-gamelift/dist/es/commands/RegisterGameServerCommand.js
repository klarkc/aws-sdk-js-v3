import { __extends } from "tslib";
import { RegisterGameServerInput, RegisterGameServerOutput } from "../models/models_0";
import { deserializeAws_json1_1RegisterGameServerCommand, serializeAws_json1_1RegisterGameServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Creates a new game server resource and notifies GameLift FleetIQ that the game server is ready to
 *             host gameplay and players. This operation is called by a game server process that is
 *             running on an instance in a game server group. Registering game servers enables GameLift FleetIQ to
 *             track available game servers and enables game clients and services to claim a game
 *             server for a new game session. </p>
 *         <p>To register a game server, identify the game server group and instance where the game
 *             server is running, and provide a unique identifier for the game server. You can also
 *             include connection and game server data. When a game client or service requests a game
 *             server by calling <a>ClaimGameServer</a>, this information is returned in the
 *             response.</p>
 *         <p>Once a game server is successfully registered, it is put in status
 *                 <code>AVAILABLE</code>. A request to register a game server may fail if the instance
 *             it is running on is in the process of shutting down as part of instance balancing or
 *             scale-down activity. </p>
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
 * import { GameLiftClient, RegisterGameServerCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, RegisterGameServerCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new RegisterGameServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RegisterGameServerCommandInput} for command's `input` shape.
 * @see {@link RegisterGameServerCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RegisterGameServerCommand = /** @class */ (function (_super) {
    __extends(RegisterGameServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RegisterGameServerCommand(input) {
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
    RegisterGameServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "RegisterGameServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RegisterGameServerInput.filterSensitiveLog,
            outputFilterSensitiveLog: RegisterGameServerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RegisterGameServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RegisterGameServerCommand(input, context);
    };
    RegisterGameServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RegisterGameServerCommand(output, context);
    };
    return RegisterGameServerCommand;
}($Command));
export { RegisterGameServerCommand };
//# sourceMappingURL=RegisterGameServerCommand.js.map