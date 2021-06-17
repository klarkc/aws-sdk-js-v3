import { __extends } from "tslib";
import { DescribeGameServerInput, DescribeGameServerOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeGameServerCommand, serializeAws_json1_1DescribeGameServerCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves information for a registered game server. Information includes game server
 *             status, health check info, and the instance that the game server is running on. </p>
 *         <p>To retrieve game server information, specify the game server ID. If successful, the
 *             requested game server object is returned. </p>
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
 * import { GameLiftClient, DescribeGameServerCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeGameServerCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeGameServerCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeGameServerCommandInput} for command's `input` shape.
 * @see {@link DescribeGameServerCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeGameServerCommand = /** @class */ (function (_super) {
    __extends(DescribeGameServerCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeGameServerCommand(input) {
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
    DescribeGameServerCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeGameServerCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeGameServerInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeGameServerOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeGameServerCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeGameServerCommand(input, context);
    };
    DescribeGameServerCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeGameServerCommand(output, context);
    };
    return DescribeGameServerCommand;
}($Command));
export { DescribeGameServerCommand };
//# sourceMappingURL=DescribeGameServerCommand.js.map