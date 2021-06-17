import { __extends } from "tslib";
import { DeleteOpsMetadataRequest, DeleteOpsMetadataResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteOpsMetadataCommand, serializeAws_json1_1DeleteOpsMetadataCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Delete OpsMetadata related to an application.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteOpsMetadataCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteOpsMetadataCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteOpsMetadataCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteOpsMetadataCommandInput} for command's `input` shape.
 * @see {@link DeleteOpsMetadataCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteOpsMetadataCommand = /** @class */ (function (_super) {
    __extends(DeleteOpsMetadataCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteOpsMetadataCommand(input) {
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
    DeleteOpsMetadataCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteOpsMetadataCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteOpsMetadataRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteOpsMetadataResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteOpsMetadataCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteOpsMetadataCommand(input, context);
    };
    DeleteOpsMetadataCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteOpsMetadataCommand(output, context);
    };
    return DeleteOpsMetadataCommand;
}($Command));
export { DeleteOpsMetadataCommand };
//# sourceMappingURL=DeleteOpsMetadataCommand.js.map