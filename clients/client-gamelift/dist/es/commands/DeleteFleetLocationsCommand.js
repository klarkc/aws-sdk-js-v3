import { __extends } from "tslib";
import { DeleteFleetLocationsInput, DeleteFleetLocationsOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteFleetLocationsCommand, serializeAws_json1_1DeleteFleetLocationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes locations from a multi-location fleet. When deleting a location, all game
 *             server process and all instances that are still active in the location are shut down. </p>
 *         <p>To delete fleet locations, identify the fleet ID and provide a list of the locations
 *             to be deleted. </p>
 *         <p>If successful, GameLift sets the location status to <code>DELETING</code>, and begins
 *             to shut down existing server processes and terminate instances in each location being
 *             deleted. When completed, the location status changes to <code>TERMINATED</code>.</p>
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
 *                     <a>DescribeFleetLocationAttributes</a> |
 *                     <a>DescribeFleetLocationCapacity</a> |
 *                     <a>DescribeFleetLocationUtilization</a> |
 *                     <a>DescribeFleetAttributes</a> |
 *                     <a>DescribeFleetCapacity</a> |
 *                     <a>DescribeFleetUtilization</a> |
 *                     <a>UpdateFleetCapacity</a> |
 *                     <a>StopFleetActions</a> |
 *                     <a>DeleteFleetLocations</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, DeleteFleetLocationsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteFleetLocationsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteFleetLocationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteFleetLocationsCommandInput} for command's `input` shape.
 * @see {@link DeleteFleetLocationsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteFleetLocationsCommand = /** @class */ (function (_super) {
    __extends(DeleteFleetLocationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteFleetLocationsCommand(input) {
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
    DeleteFleetLocationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DeleteFleetLocationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteFleetLocationsInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteFleetLocationsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteFleetLocationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteFleetLocationsCommand(input, context);
    };
    DeleteFleetLocationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteFleetLocationsCommand(output, context);
    };
    return DeleteFleetLocationsCommand;
}($Command));
export { DeleteFleetLocationsCommand };
//# sourceMappingURL=DeleteFleetLocationsCommand.js.map