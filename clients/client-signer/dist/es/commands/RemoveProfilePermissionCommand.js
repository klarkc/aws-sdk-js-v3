import { __extends } from "tslib";
import { RemoveProfilePermissionRequest, RemoveProfilePermissionResponse } from "../models/models_0";
import { deserializeAws_restJson1RemoveProfilePermissionCommand, serializeAws_restJson1RemoveProfilePermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Removes cross-account permissions from a signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, RemoveProfilePermissionCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, RemoveProfilePermissionCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new RemoveProfilePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RemoveProfilePermissionCommandInput} for command's `input` shape.
 * @see {@link RemoveProfilePermissionCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RemoveProfilePermissionCommand = /** @class */ (function (_super) {
    __extends(RemoveProfilePermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RemoveProfilePermissionCommand(input) {
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
    RemoveProfilePermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "RemoveProfilePermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RemoveProfilePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: RemoveProfilePermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RemoveProfilePermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1RemoveProfilePermissionCommand(input, context);
    };
    RemoveProfilePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1RemoveProfilePermissionCommand(output, context);
    };
    return RemoveProfilePermissionCommand;
}($Command));
export { RemoveProfilePermissionCommand };
//# sourceMappingURL=RemoveProfilePermissionCommand.js.map