import { __extends } from "tslib";
import { GetIndexingConfigurationRequest, GetIndexingConfigurationResponse } from "../models/models_1";
import { deserializeAws_restJson1GetIndexingConfigurationCommand, serializeAws_restJson1GetIndexingConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets the indexing configuration.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, GetIndexingConfigurationCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, GetIndexingConfigurationCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new GetIndexingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetIndexingConfigurationCommandInput} for command's `input` shape.
 * @see {@link GetIndexingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetIndexingConfigurationCommand = /** @class */ (function (_super) {
    __extends(GetIndexingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetIndexingConfigurationCommand(input) {
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
    GetIndexingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "GetIndexingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetIndexingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetIndexingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetIndexingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetIndexingConfigurationCommand(input, context);
    };
    GetIndexingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetIndexingConfigurationCommand(output, context);
    };
    return GetIndexingConfigurationCommand;
}($Command));
export { GetIndexingConfigurationCommand };
//# sourceMappingURL=GetIndexingConfigurationCommand.js.map