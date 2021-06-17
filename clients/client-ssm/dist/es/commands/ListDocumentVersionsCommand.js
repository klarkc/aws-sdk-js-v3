import { __extends } from "tslib";
import { ListDocumentVersionsRequest, ListDocumentVersionsResult } from "../models/models_1";
import { deserializeAws_json1_1ListDocumentVersionsCommand, serializeAws_json1_1ListDocumentVersionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all versions for a document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentVersionsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentVersionsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListDocumentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDocumentVersionsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDocumentVersionsCommand = /** @class */ (function (_super) {
    __extends(ListDocumentVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDocumentVersionsCommand(input) {
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
    ListDocumentVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListDocumentVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDocumentVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDocumentVersionsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDocumentVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDocumentVersionsCommand(input, context);
    };
    ListDocumentVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDocumentVersionsCommand(output, context);
    };
    return ListDocumentVersionsCommand;
}($Command));
export { ListDocumentVersionsCommand };
//# sourceMappingURL=ListDocumentVersionsCommand.js.map