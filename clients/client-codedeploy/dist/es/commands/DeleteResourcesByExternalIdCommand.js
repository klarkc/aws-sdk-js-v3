import { __extends } from "tslib";
import { DeleteResourcesByExternalIdInput, DeleteResourcesByExternalIdOutput } from "../models/models_0";
import { deserializeAws_json1_1DeleteResourcesByExternalIdCommand, serializeAws_json1_1DeleteResourcesByExternalIdCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes resources linked to an external ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeDeployClient, DeleteResourcesByExternalIdCommand } from "@aws-sdk/client-codedeploy"; // ES Modules import
 * // const { CodeDeployClient, DeleteResourcesByExternalIdCommand } = require("@aws-sdk/client-codedeploy"); // CommonJS import
 * const client = new CodeDeployClient(config);
 * const command = new DeleteResourcesByExternalIdCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteResourcesByExternalIdCommandInput} for command's `input` shape.
 * @see {@link DeleteResourcesByExternalIdCommandOutput} for command's `response` shape.
 * @see {@link CodeDeployClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteResourcesByExternalIdCommand = /** @class */ (function (_super) {
    __extends(DeleteResourcesByExternalIdCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteResourcesByExternalIdCommand(input) {
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
    DeleteResourcesByExternalIdCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeDeployClient";
        var commandName = "DeleteResourcesByExternalIdCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteResourcesByExternalIdInput.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteResourcesByExternalIdOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteResourcesByExternalIdCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteResourcesByExternalIdCommand(input, context);
    };
    DeleteResourcesByExternalIdCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteResourcesByExternalIdCommand(output, context);
    };
    return DeleteResourcesByExternalIdCommand;
}($Command));
export { DeleteResourcesByExternalIdCommand };
//# sourceMappingURL=DeleteResourcesByExternalIdCommand.js.map