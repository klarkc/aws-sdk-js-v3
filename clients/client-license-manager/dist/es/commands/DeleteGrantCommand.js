import { __extends } from "tslib";
import { DeleteGrantRequest, DeleteGrantResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteGrantCommand, serializeAws_json1_1DeleteGrantCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified grant.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteGrantCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteGrantCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new DeleteGrantCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteGrantCommandInput} for command's `input` shape.
 * @see {@link DeleteGrantCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteGrantCommand = /** @class */ (function (_super) {
    __extends(DeleteGrantCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteGrantCommand(input) {
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
    DeleteGrantCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "DeleteGrantCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteGrantRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteGrantResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteGrantCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteGrantCommand(input, context);
    };
    DeleteGrantCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteGrantCommand(output, context);
    };
    return DeleteGrantCommand;
}($Command));
export { DeleteGrantCommand };
//# sourceMappingURL=DeleteGrantCommand.js.map