import { __extends } from "tslib";
import { UpdateFleetAttributesInput, UpdateFleetAttributesOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateFleetAttributesCommand, serializeAws_json1_1UpdateFleetAttributesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a fleet's mutable attributes, including game session protection and resource
 *             creation limits.</p>
 *         <p>To update fleet attributes, specify the fleet ID and the property values that you want
 *             to change. </p>
 *         <p>If successful, an updated <code>FleetAttributes</code> object is returned.</p>
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
 * import { GameLiftClient, UpdateFleetAttributesCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateFleetAttributesCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateFleetAttributesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateFleetAttributesCommandInput} for command's `input` shape.
 * @see {@link UpdateFleetAttributesCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateFleetAttributesCommand = /** @class */ (function (_super) {
    __extends(UpdateFleetAttributesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateFleetAttributesCommand(input) {
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
    UpdateFleetAttributesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "UpdateFleetAttributesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateFleetAttributesInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateFleetAttributesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateFleetAttributesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateFleetAttributesCommand(input, context);
    };
    UpdateFleetAttributesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateFleetAttributesCommand(output, context);
    };
    return UpdateFleetAttributesCommand;
}($Command));
export { UpdateFleetAttributesCommand };
//# sourceMappingURL=UpdateFleetAttributesCommand.js.map