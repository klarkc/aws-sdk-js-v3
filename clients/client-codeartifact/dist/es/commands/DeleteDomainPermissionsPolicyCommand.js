import { __extends } from "tslib";
import { DeleteDomainPermissionsPolicyRequest, DeleteDomainPermissionsPolicyResult } from "../models/models_0";
import { deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand, serializeAws_restJson1DeleteDomainPermissionsPolicyCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Deletes the resource policy set on a domain.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeartifactClient, DeleteDomainPermissionsPolicyCommand } from "@aws-sdk/client-codeartifact"; // ES Modules import
 * // const { CodeartifactClient, DeleteDomainPermissionsPolicyCommand } = require("@aws-sdk/client-codeartifact"); // CommonJS import
 * const client = new CodeartifactClient(config);
 * const command = new DeleteDomainPermissionsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDomainPermissionsPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteDomainPermissionsPolicyCommandOutput} for command's `response` shape.
 * @see {@link CodeartifactClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDomainPermissionsPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteDomainPermissionsPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDomainPermissionsPolicyCommand(input) {
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
    DeleteDomainPermissionsPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeartifactClient";
        var commandName = "DeleteDomainPermissionsPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDomainPermissionsPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDomainPermissionsPolicyResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDomainPermissionsPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteDomainPermissionsPolicyCommand(input, context);
    };
    DeleteDomainPermissionsPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteDomainPermissionsPolicyCommand(output, context);
    };
    return DeleteDomainPermissionsPolicyCommand;
}($Command));
export { DeleteDomainPermissionsPolicyCommand };
//# sourceMappingURL=DeleteDomainPermissionsPolicyCommand.js.map