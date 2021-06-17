import { __extends } from "tslib";
import { ModifyDocumentPermissionRequest, ModifyDocumentPermissionResponse } from "../models/models_1";
import { deserializeAws_json1_1ModifyDocumentPermissionCommand, serializeAws_json1_1ModifyDocumentPermissionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Shares a Systems Manager document publicly or privately. If you share a document privately, you must
 *    specify the AWS user account IDs for those people who can use the document. If you share a
 *    document publicly, you must specify <i>All</i> as the account ID.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ModifyDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ModifyDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ModifyDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link ModifyDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyDocumentPermissionCommand = /** @class */ (function (_super) {
    __extends(ModifyDocumentPermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyDocumentPermissionCommand(input) {
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
    ModifyDocumentPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ModifyDocumentPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyDocumentPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ModifyDocumentPermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyDocumentPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ModifyDocumentPermissionCommand(input, context);
    };
    ModifyDocumentPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ModifyDocumentPermissionCommand(output, context);
    };
    return ModifyDocumentPermissionCommand;
}($Command));
export { ModifyDocumentPermissionCommand };
//# sourceMappingURL=ModifyDocumentPermissionCommand.js.map