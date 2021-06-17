import { __extends } from "tslib";
import { DeleteTokenRequest, DeleteTokenResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteTokenCommand, serializeAws_json1_1DeleteTokenCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified token. Must be called in the license home Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteTokenCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteTokenCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new DeleteTokenCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteTokenCommandInput} for command's `input` shape.
 * @see {@link DeleteTokenCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteTokenCommand = /** @class */ (function (_super) {
    __extends(DeleteTokenCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteTokenCommand(input) {
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
    DeleteTokenCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "DeleteTokenCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteTokenRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteTokenResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteTokenCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteTokenCommand(input, context);
    };
    DeleteTokenCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteTokenCommand(output, context);
    };
    return DeleteTokenCommand;
}($Command));
export { DeleteTokenCommand };
//# sourceMappingURL=DeleteTokenCommand.js.map