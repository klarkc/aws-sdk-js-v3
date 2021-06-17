import { __extends } from "tslib";
import { GetExportJobRequest, GetExportJobResponse } from "../models/models_0";
import { deserializeAws_restJson1GetExportJobCommand, serializeAws_restJson1GetExportJobCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves information about the status and settings of a specific export job for an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { PinpointClient, GetExportJobCommand } from "@aws-sdk/client-pinpoint"; // ES Modules import
 * // const { PinpointClient, GetExportJobCommand } = require("@aws-sdk/client-pinpoint"); // CommonJS import
 * const client = new PinpointClient(config);
 * const command = new GetExportJobCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetExportJobCommandInput} for command's `input` shape.
 * @see {@link GetExportJobCommandOutput} for command's `response` shape.
 * @see {@link PinpointClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetExportJobCommand = /** @class */ (function (_super) {
    __extends(GetExportJobCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetExportJobCommand(input) {
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
    GetExportJobCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "PinpointClient";
        var commandName = "GetExportJobCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetExportJobRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetExportJobResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetExportJobCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetExportJobCommand(input, context);
    };
    GetExportJobCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetExportJobCommand(output, context);
    };
    return GetExportJobCommand;
}($Command));
export { GetExportJobCommand };
//# sourceMappingURL=GetExportJobCommand.js.map