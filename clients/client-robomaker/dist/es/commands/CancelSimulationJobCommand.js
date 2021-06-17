import { __extends } from "tslib";
import { CancelSimulationJobRequest, CancelSimulationJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelSimulationJobCommand, serializeAws_restJson1CancelSimulationJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the specified simulation job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelSimulationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelSimulationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelSimulationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelSimulationJobCommandInput} for command's `input` shape.
 * @see {@link CancelSimulationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelSimulationJobCommand = /** @class */ (function (_super) {
    __extends(CancelSimulationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelSimulationJobCommand(input) {
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
    CancelSimulationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CancelSimulationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelSimulationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelSimulationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelSimulationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelSimulationJobCommand(input, context);
    };
    CancelSimulationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelSimulationJobCommand(output, context);
    };
    return CancelSimulationJobCommand;
}($Command));
export { CancelSimulationJobCommand };
//# sourceMappingURL=CancelSimulationJobCommand.js.map