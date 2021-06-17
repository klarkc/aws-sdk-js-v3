import { __extends } from "tslib";
import { GetRecordingConfigurationRequest, GetRecordingConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1GetRecordingConfigurationCommand, serializeAws_restJson1GetRecordingConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the recording configuration for the specified ARN.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, GetRecordingConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, GetRecordingConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new GetRecordingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRecordingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetRecordingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRecordingConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetRecordingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRecordingConfigurationCommand(input) {
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
    GetRecordingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IvsClient";
        var commandName = "GetRecordingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRecordingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRecordingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRecordingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetRecordingConfigurationCommand(input, context);
    };
    GetRecordingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetRecordingConfigurationCommand(output, context);
    };
    return GetRecordingConfigurationCommand;
}($Command));
export { GetRecordingConfigurationCommand };
//# sourceMappingURL=GetRecordingConfigurationCommand.js.map