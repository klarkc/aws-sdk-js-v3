import { __extends } from "tslib";
import { ConfigureLogsRequest, ConfigureLogsResponse } from "../models/models_0";
import { deserializeAws_restJson1ConfigureLogsCommand, serializeAws_restJson1ConfigureLogsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Changes the Channel's properities to configure log subscription
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaPackageClient, ConfigureLogsCommand } from "@aws-sdk/client-mediapackage"; // ES Modules import
 * // const { MediaPackageClient, ConfigureLogsCommand } = require("@aws-sdk/client-mediapackage"); // CommonJS import
 * const client = new MediaPackageClient(config);
 * const command = new ConfigureLogsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ConfigureLogsCommandInput} for command's `input` shape.
 * @see {@link ConfigureLogsCommandOutput} for command's `response` shape.
 * @see {@link MediaPackageClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ConfigureLogsCommand = /** @class */ (function (_super) {
    __extends(ConfigureLogsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ConfigureLogsCommand(input) {
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
    ConfigureLogsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaPackageClient";
        var commandName = "ConfigureLogsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ConfigureLogsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ConfigureLogsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ConfigureLogsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ConfigureLogsCommand(input, context);
    };
    ConfigureLogsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ConfigureLogsCommand(output, context);
    };
    return ConfigureLogsCommand;
}($Command));
export { ConfigureLogsCommand };
//# sourceMappingURL=ConfigureLogsCommand.js.map