import { __extends } from "tslib";
import { CreateSimulationApplicationVersionRequest, CreateSimulationApplicationVersionResponse, } from "../models/models_0";
import { deserializeAws_restJson1CreateSimulationApplicationVersionCommand, serializeAws_restJson1CreateSimulationApplicationVersionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a simulation application with a specific revision id.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateSimulationApplicationVersionCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateSimulationApplicationVersionCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateSimulationApplicationVersionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSimulationApplicationVersionCommandInput} for command's `input` shape.
 * @see {@link CreateSimulationApplicationVersionCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSimulationApplicationVersionCommand = /** @class */ (function (_super) {
    __extends(CreateSimulationApplicationVersionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSimulationApplicationVersionCommand(input) {
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
    CreateSimulationApplicationVersionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CreateSimulationApplicationVersionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSimulationApplicationVersionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSimulationApplicationVersionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSimulationApplicationVersionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSimulationApplicationVersionCommand(input, context);
    };
    CreateSimulationApplicationVersionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSimulationApplicationVersionCommand(output, context);
    };
    return CreateSimulationApplicationVersionCommand;
}($Command));
export { CreateSimulationApplicationVersionCommand };
//# sourceMappingURL=CreateSimulationApplicationVersionCommand.js.map