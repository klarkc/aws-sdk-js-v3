import { __extends } from "tslib";
import { UpdateDocumentRequest } from "../models/models_0";
import { deserializeAws_restJson1UpdateDocumentCommand, serializeAws_restJson1UpdateDocumentCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the specified attributes of a document. The user must have access to both
 *             the document and its parent folder, if applicable.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WorkDocsClient, UpdateDocumentCommand } from "@aws-sdk/client-workdocs"; // ES Modules import
 * // const { WorkDocsClient, UpdateDocumentCommand } = require("@aws-sdk/client-workdocs"); // CommonJS import
 * const client = new WorkDocsClient(config);
 * const command = new UpdateDocumentCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateDocumentCommandInput} for command's `input` shape.
 * @see {@link UpdateDocumentCommandOutput} for command's `response` shape.
 * @see {@link WorkDocsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateDocumentCommand = /** @class */ (function (_super) {
    __extends(UpdateDocumentCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateDocumentCommand(input) {
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
    UpdateDocumentCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WorkDocsClient";
        var commandName = "UpdateDocumentCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateDocumentRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateDocumentCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateDocumentCommand(input, context);
    };
    UpdateDocumentCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateDocumentCommand(output, context);
    };
    return UpdateDocumentCommand;
}($Command));
export { UpdateDocumentCommand };
//# sourceMappingURL=UpdateDocumentCommand.js.map