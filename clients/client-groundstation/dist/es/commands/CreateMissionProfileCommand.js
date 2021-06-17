import { __extends } from "tslib";
import { CreateMissionProfileRequest, MissionProfileIdResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateMissionProfileCommand, serializeAws_restJson1CreateMissionProfileCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a mission profile.</p>
 *          <p>
 *             <code>dataflowEdges</code> is a list of lists of strings. Each lower level list of strings
 *          has two elements: a <i>from</i> ARN and a <i>to</i> ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GroundStationClient, CreateMissionProfileCommand } from "@aws-sdk/client-groundstation"; // ES Modules import
 * // const { GroundStationClient, CreateMissionProfileCommand } = require("@aws-sdk/client-groundstation"); // CommonJS import
 * const client = new GroundStationClient(config);
 * const command = new CreateMissionProfileCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateMissionProfileCommandInput} for command's `input` shape.
 * @see {@link CreateMissionProfileCommandOutput} for command's `response` shape.
 * @see {@link GroundStationClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateMissionProfileCommand = /** @class */ (function (_super) {
    __extends(CreateMissionProfileCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateMissionProfileCommand(input) {
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
    CreateMissionProfileCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GroundStationClient";
        var commandName = "CreateMissionProfileCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateMissionProfileRequest.filterSensitiveLog,
            outputFilterSensitiveLog: MissionProfileIdResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateMissionProfileCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateMissionProfileCommand(input, context);
    };
    CreateMissionProfileCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateMissionProfileCommand(output, context);
    };
    return CreateMissionProfileCommand;
}($Command));
export { CreateMissionProfileCommand };
//# sourceMappingURL=CreateMissionProfileCommand.js.map