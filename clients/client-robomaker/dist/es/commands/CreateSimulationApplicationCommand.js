import { __extends } from "tslib";
import { CreateSimulationApplicationRequest, CreateSimulationApplicationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSimulationApplicationCommand, serializeAws_restJson1CreateSimulationApplicationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a simulation application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateSimulationApplicationCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateSimulationApplicationCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateSimulationApplicationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSimulationApplicationCommandInput} for command's `input` shape.
 * @see {@link CreateSimulationApplicationCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSimulationApplicationCommand = /** @class */ (function (_super) {
    __extends(CreateSimulationApplicationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSimulationApplicationCommand(input) {
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
    CreateSimulationApplicationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CreateSimulationApplicationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSimulationApplicationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSimulationApplicationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSimulationApplicationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSimulationApplicationCommand(input, context);
    };
    CreateSimulationApplicationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSimulationApplicationCommand(output, context);
    };
    return CreateSimulationApplicationCommand;
}($Command));
export { CreateSimulationApplicationCommand };
//# sourceMappingURL=CreateSimulationApplicationCommand.js.map