import { __extends } from "tslib";
import { MissionProfileIdResponse, UpdateMissionProfileRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateMissionProfileCommand, serializeAws_restJson1UpdateMissionProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates a mission profile.</p>
 *          <p>Updating a mission profile will not update the execution parameters
 *          for existing future contacts.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, UpdateMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, UpdateMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new UpdateMissionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateMissionProfileCommandInput} for command's `input` shape.
 * @see {@link UpdateMissionProfileCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateMissionProfileCommand = /** @class */ (function (_super) {
    __extends(UpdateMissionProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateMissionProfileCommand(input) {
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
    UpdateMissionProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "UpdateMissionProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateMissionProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: MissionProfileIdResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateMissionProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateMissionProfileCommand(input, context);
    };
    UpdateMissionProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateMissionProfileCommand(output, context);
    };
    return UpdateMissionProfileCommand;
}($Command));
export { UpdateMissionProfileCommand };
//# sourceMappingURL=UpdateMissionProfileCommand.js.map