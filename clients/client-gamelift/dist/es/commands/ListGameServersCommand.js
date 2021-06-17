import { __extends } from "tslib";
import { ListGameServersInput, ListGameServersOutput } from "../models/models_0";
import { deserializeAws_json1_1ListGameServersCommand, serializeAws_json1_1ListGameServersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *             <b>This operation is used with the GameLift FleetIQ solution and game server groups.</b>
 *          </p>
 *         <p>Retrieves information on all game servers that are currently active in a specified
 *             game server group. You can opt to sort the list by game server age. Use the
 *             pagination parameters to retrieve results in a set of sequential segments. </p>
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
 * import { GameLiftClient, ListGameServersCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, ListGameServersCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new ListGameServersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGameServersCommandInput} for command's `input` shape.
 * @see {@link ListGameServersCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGameServersCommand = /** @class */ (function (_super) {
    __extends(ListGameServersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGameServersCommand(input) {
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
    ListGameServersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "ListGameServersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGameServersInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListGameServersOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGameServersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListGameServersCommand(input, context);
    };
    ListGameServersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListGameServersCommand(output, context);
    };
    return ListGameServersCommand;
}($Command));
export { ListGameServersCommand };
//# sourceMappingURL=ListGameServersCommand.js.map