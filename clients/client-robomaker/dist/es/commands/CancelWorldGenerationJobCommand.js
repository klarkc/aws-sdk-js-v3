import { __extends } from "tslib";
import { CancelWorldGenerationJobRequest, CancelWorldGenerationJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelWorldGenerationJobCommand, serializeAws_restJson1CancelWorldGenerationJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the specified world generator job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelWorldGenerationJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelWorldGenerationJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelWorldGenerationJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelWorldGenerationJobCommandInput} for command's `input` shape.
 * @see {@link CancelWorldGenerationJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelWorldGenerationJobCommand = /** @class */ (function (_super) {
    __extends(CancelWorldGenerationJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelWorldGenerationJobCommand(input) {
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
    CancelWorldGenerationJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CancelWorldGenerationJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelWorldGenerationJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelWorldGenerationJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelWorldGenerationJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelWorldGenerationJobCommand(input, context);
    };
    CancelWorldGenerationJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelWorldGenerationJobCommand(output, context);
    };
    return CancelWorldGenerationJobCommand;
}($Command));
export { CancelWorldGenerationJobCommand };
//# sourceMappingURL=CancelWorldGenerationJobCommand.js.map