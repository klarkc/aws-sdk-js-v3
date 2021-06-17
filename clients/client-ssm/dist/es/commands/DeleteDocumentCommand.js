import { __extends } from "tslib";
import { DeleteDocumentRequest, DeleteDocumentResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteDocumentCommand, serializeAws_json1_1DeleteDocumentCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the Systems Manager document and all instance associations to the document.</p>
 *          <p>Before you delete the document, we recommend that you use <a>DeleteAssociation</a> to disassociate all instances that are associated with the document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteDocumentCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteDocumentCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDocumentCommandInput} for command's `input` shape.
 * @see {@link DeleteDocumentCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDocumentCommand = /** @class */ (function (_super) {
    __extends(DeleteDocumentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDocumentCommand(input) {
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
    DeleteDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDocumentResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteDocumentCommand(input, context);
    };
    DeleteDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteDocumentCommand(output, context);
    };
    return DeleteDocumentCommand;
}($Command));
export { DeleteDocumentCommand };
//# sourceMappingURL=DeleteDocumentCommand.js.map