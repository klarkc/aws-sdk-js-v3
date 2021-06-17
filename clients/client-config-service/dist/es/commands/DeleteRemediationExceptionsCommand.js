import { __extends } from "tslib";
import { DeleteRemediationExceptionsRequest, DeleteRemediationExceptionsResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteRemediationExceptionsCommand, serializeAws_json1_1DeleteRemediationExceptionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes one or more remediation exceptions mentioned in the resource keys.</p>
 * 		       <note>
 *             <p>AWS Config generates a remediation exception when a problem occurs executing a remediation action to a specific resource.
 * 			Remediation exceptions blocks auto-remediation until the exception is cleared.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteRemediationExceptionsCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteRemediationExceptionsCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteRemediationExceptionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRemediationExceptionsCommandInput} for command's `input` shape.
 * @see {@link DeleteRemediationExceptionsCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRemediationExceptionsCommand = /** @class */ (function (_super) {
    __extends(DeleteRemediationExceptionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRemediationExceptionsCommand(input) {
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
    DeleteRemediationExceptionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteRemediationExceptionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRemediationExceptionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRemediationExceptionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRemediationExceptionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRemediationExceptionsCommand(input, context);
    };
    DeleteRemediationExceptionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRemediationExceptionsCommand(output, context);
    };
    return DeleteRemediationExceptionsCommand;
}($Command));
export { DeleteRemediationExceptionsCommand };
//# sourceMappingURL=DeleteRemediationExceptionsCommand.js.map