import { __extends } from "tslib";
import { AddProfilePermissionRequest, AddProfilePermissionResponse } from "../models/models_0";
import { deserializeAws_restJson1AddProfilePermissionCommand, serializeAws_restJson1AddProfilePermissionCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds cross-account permissions to a signing profile.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SignerClient, AddProfilePermissionCommand } from "@aws-sdk/client-signer"; // ES Modules import
 * // const { SignerClient, AddProfilePermissionCommand } = require("@aws-sdk/client-signer"); // CommonJS import
 * const client = new SignerClient(config);
 * const command = new AddProfilePermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AddProfilePermissionCommandInput} for command's `input` shape.
 * @see {@link AddProfilePermissionCommandOutput} for command's `response` shape.
 * @see {@link SignerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AddProfilePermissionCommand = /** @class */ (function (_super) {
    __extends(AddProfilePermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AddProfilePermissionCommand(input) {
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
    AddProfilePermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SignerClient";
        var commandName = "AddProfilePermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AddProfilePermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AddProfilePermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AddProfilePermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AddProfilePermissionCommand(input, context);
    };
    AddProfilePermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AddProfilePermissionCommand(output, context);
    };
    return AddProfilePermissionCommand;
}($Command));
export { AddProfilePermissionCommand };
//# sourceMappingURL=AddProfilePermissionCommand.js.map