import { __extends } from "tslib";
import { UpdateFleetPortSettingsInput, UpdateFleetPortSettingsOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateFleetPortSettingsCommand, serializeAws_json1_1UpdateFleetPortSettingsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates permissions that allow inbound traffic to connect to game sessions that are
 *             being hosted on instances in the fleet. </p>
 *         <p>To update settings, specify the fleet ID to be updated and specify the changes to be
 *             made. List the permissions you want to add in
 *                 <code>InboundPermissionAuthorizations</code>, and permissions you want to remove in
 *                 <code>InboundPermissionRevocations</code>. Permissions to be removed must match
 *             existing fleet permissions. </p>
 *         <p>If successful, the fleet ID for the updated fleet is returned. For fleets with remote
 *             locations, port setting updates can take time to propagate across all locations. You can
 *             check the status of updates in each location by calling
 *                 <code>DescribeFleetPortSettings</code> with a location name.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift fleets</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateFleetLocations</a> |
 *                     <a>UpdateFleetAttributes</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>UpdateFleetPortSettings</a> |
 *                     <a>UpdateRuntimeConfiguration</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>StartFleetActions</a> |
 *                     <a>PutScalingPolicy</a> |
 *                     <a>DeleteFleet</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a>DeleteScalingPolicy</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, UpdateFleetPortSettingsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateFleetPortSettingsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateFleetPortSettingsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFleetPortSettingsCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetPortSettingsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFleetPortSettingsCommand = /** @class */ (function (_super) {
    __extends(UpdateFleetPortSettingsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFleetPortSettingsCommand(input) {
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
    UpdateFleetPortSettingsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "UpdateFleetPortSettingsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFleetPortSettingsInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFleetPortSettingsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFleetPortSettingsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateFleetPortSettingsCommand(input, context);
    };
    UpdateFleetPortSettingsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateFleetPortSettingsCommand(output, context);
    };
    return UpdateFleetPortSettingsCommand;
}($Command));
export { UpdateFleetPortSettingsCommand };
//# sourceMappingURL=UpdateFleetPortSettingsCommand.js.map