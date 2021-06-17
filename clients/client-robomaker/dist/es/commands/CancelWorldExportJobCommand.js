import { __extends } from "tslib";
import { CancelWorldExportJobRequest, CancelWorldExportJobResponse } from "../models/models_0";
import { deserializeAws_restJson1CancelWorldExportJobCommand, serializeAws_restJson1CancelWorldExportJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels the specified export job.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RoboMakerClient, CancelWorldExportJobCommand } from "@aws-sdk/client-robomaker"; // ES Modules import
 * // const { RoboMakerClient, CancelWorldExportJobCommand } = require("@aws-sdk/client-robomaker"); // CommonJS import
 * const client = new RoboMakerClient(config);
 * const command = new CancelWorldExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelWorldExportJobCommandInput} for command's `input` shape.
 * @see {@link CancelWorldExportJobCommandOutput} for command's `response` shape.
 * @see {@link RoboMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelWorldExportJobCommand = /** @class */ (function (_super) {
    __extends(CancelWorldExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelWorldExportJobCommand(input) {
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
    CancelWorldExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RoboMakerClient";
        var commandName = "CancelWorldExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelWorldExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelWorldExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelWorldExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CancelWorldExportJobCommand(input, context);
    };
    CancelWorldExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CancelWorldExportJobCommand(output, context);
    };
    return CancelWorldExportJobCommand;
}($Command));
export { CancelWorldExportJobCommand };
//# sourceMappingURL=CancelWorldExportJobCommand.js.map