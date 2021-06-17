import { __extends } from "tslib";
import { CreateSimulationJobRequest, CreateSimulationJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateSimulationJobCommand, serializeAws_restJson1CreateSimulationJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a simulation job.</p>
 *          <note>
 *             <p>After 90 days, simulation jobs expire and will be deleted. They will no longer be
 *             accessible. </p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CreateSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CreateSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CreateSimulationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateSimulationJobCommandInput} for command's `input` shape.
 * @see {@link CreateSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateSimulationJobCommand = /** @class */ (function (_super) {
    __extends(CreateSimulationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateSimulationJobCommand(input) {
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
    CreateSimulationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CreateSimulationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateSimulationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateSimulationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateSimulationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateSimulationJobCommand(input, context);
    };
    CreateSimulationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateSimulationJobCommand(output, context);
    };
    return CreateSimulationJobCommand;
}($Command));
export { CreateSimulationJobCommand };
//# sourceMappingURL=CreateSimulationJobCommand.js.map