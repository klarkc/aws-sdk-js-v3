import { __extends } from "tslib";
import { DeleteFleetInput } from "../models/models_0";
import { deserializeAws_json1_1DeleteFleetCommand, serializeAws_json1_1DeleteFleetCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes all resources and information related a fleet. Any current fleet instances,
 *             including those in remote locations, are shut down. You don't need to call
 *                 <code>DeleteFleetLocations</code> separately.</p>
 *         <note>
 *             <p>If the fleet being deleted has a VPC peering connection, you first need to get a
 *                 valid authorization (good for 24 hours) by calling <a>CreateVpcPeeringAuthorization</a>. You do not need to explicitly delete
 *                 the VPC peering connection--this is done as part of the delete fleet process.</p>
 *         </note>
 *         <p>To delete a fleet, specify the fleet ID to be terminated. During the deletion process
 *             the fleet status is changed to <code>DELETING</code>. When completed, the status
 *             switches to <code>TERMINATED</code> and the fleet event <code>FLEET_DELETED</code> is
 *             sent.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/fleets-intro.html">Setting up GameLift Fleets</a>
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
 * import { GameLiftClient, DeleteFleetCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteFleetCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteFleetCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFleetCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFleetCommand = /** @class */ (function (_super) {
    __extends(DeleteFleetCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFleetCommand(input) {
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
    DeleteFleetCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DeleteFleetCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFleetInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFleetCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteFleetCommand(input, context);
    };
    DeleteFleetCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteFleetCommand(output, context);
    };
    return DeleteFleetCommand;
}($Command));
export { DeleteFleetCommand };
//# sourceMappingURL=DeleteFleetCommand.js.map