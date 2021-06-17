import { __extends } from "tslib";
import { DisableClientAuthenticationRequest, DisableClientAuthenticationResult } from "../models/models_0";
import { deserializeAws_json1_1DisableClientAuthenticationCommand, serializeAws_json1_1DisableClientAuthenticationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disables alternative client authentication methods for the specified directory. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DirectoryServiceClient, DisableClientAuthenticationCommand } from "@aws-sdk/client-directory-service"; // ES Modules import
 * // const { DirectoryServiceClient, DisableClientAuthenticationCommand } = require("@aws-sdk/client-directory-service"); // CommonJS import
 * const client = new DirectoryServiceClient(config);
 * const command = new DisableClientAuthenticationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisableClientAuthenticationCommandInput} for command's `input` shape.
 * @see {@link DisableClientAuthenticationCommandOutput} for command's `response` shape.
 * @see {@link DirectoryServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisableClientAuthenticationCommand = /** @class */ (function (_super) {
    __extends(DisableClientAuthenticationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisableClientAuthenticationCommand(input) {
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
    DisableClientAuthenticationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DirectoryServiceClient";
        var commandName = "DisableClientAuthenticationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisableClientAuthenticationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisableClientAuthenticationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisableClientAuthenticationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisableClientAuthenticationCommand(input, context);
    };
    DisableClientAuthenticationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisableClientAuthenticationCommand(output, context);
    };
    return DisableClientAuthenticationCommand;
}($Command));
export { DisableClientAuthenticationCommand };
//# sourceMappingURL=DisableClientAuthenticationCommand.js.map