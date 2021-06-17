import { __extends } from "tslib";
import { DownloadDefaultKeyPairRequest, DownloadDefaultKeyPairResult } from "../models/models_0";
import { deserializeAws_json1_1DownloadDefaultKeyPairCommand, serializeAws_json1_1DownloadDefaultKeyPairCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Downloads the default SSH key pair from the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LightsailClient, DownloadDefaultKeyPairCommand } from "@aws-sdk/client-lightsail"; // ES Modules import
 * // const { LightsailClient, DownloadDefaultKeyPairCommand } = require("@aws-sdk/client-lightsail"); // CommonJS import
 * const client = new LightsailClient(config);
 * const command = new DownloadDefaultKeyPairCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DownloadDefaultKeyPairCommandInput} for command's `input` shape.
 * @see {@link DownloadDefaultKeyPairCommandOutput} for command's `response` shape.
 * @see {@link LightsailClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DownloadDefaultKeyPairCommand = /** @class */ (function (_super) {
    __extends(DownloadDefaultKeyPairCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DownloadDefaultKeyPairCommand(input) {
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
    DownloadDefaultKeyPairCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LightsailClient";
        var commandName = "DownloadDefaultKeyPairCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DownloadDefaultKeyPairRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DownloadDefaultKeyPairResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DownloadDefaultKeyPairCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DownloadDefaultKeyPairCommand(input, context);
    };
    DownloadDefaultKeyPairCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DownloadDefaultKeyPairCommand(output, context);
    };
    return DownloadDefaultKeyPairCommand;
}($Command));
export { DownloadDefaultKeyPairCommand };
//# sourceMappingURL=DownloadDefaultKeyPairCommand.js.map