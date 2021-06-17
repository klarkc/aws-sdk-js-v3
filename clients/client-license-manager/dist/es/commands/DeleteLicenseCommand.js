import { __extends } from "tslib";
import { DeleteLicenseRequest, DeleteLicenseResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteLicenseCommand, serializeAws_json1_1DeleteLicenseCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified license.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { LicenseManagerClient, DeleteLicenseCommand } from "@aws-sdk/client-license-manager"; // ES Modules import
 * // const { LicenseManagerClient, DeleteLicenseCommand } = require("@aws-sdk/client-license-manager"); // CommonJS import
 * const client = new LicenseManagerClient(config);
 * const command = new DeleteLicenseCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteLicenseCommandInput} for command's `input` shape.
 * @see {@link DeleteLicenseCommandOutput} for command's `response` shape.
 * @see {@link LicenseManagerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteLicenseCommand = /** @class */ (function (_super) {
    __extends(DeleteLicenseCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteLicenseCommand(input) {
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
    DeleteLicenseCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "LicenseManagerClient";
        var commandName = "DeleteLicenseCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteLicenseRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteLicenseResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteLicenseCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteLicenseCommand(input, context);
    };
    DeleteLicenseCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteLicenseCommand(output, context);
    };
    return DeleteLicenseCommand;
}($Command));
export { DeleteLicenseCommand };
//# sourceMappingURL=DeleteLicenseCommand.js.map