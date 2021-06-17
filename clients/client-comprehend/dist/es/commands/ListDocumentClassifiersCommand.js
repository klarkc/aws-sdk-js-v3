import { __extends } from "tslib";
import { ListDocumentClassifiersRequest, ListDocumentClassifiersResponse } from "../models/models_0";
import { deserializeAws_json1_1ListDocumentClassifiersCommand, serializeAws_json1_1ListDocumentClassifiersCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets a list of the document classifiers that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ComprehendClient, ListDocumentClassifiersCommand } from "@aws-sdk/client-comprehend"; // ES Modules import
 * // const { ComprehendClient, ListDocumentClassifiersCommand } = require("@aws-sdk/client-comprehend"); // CommonJS import
 * const client = new ComprehendClient(config);
 * const command = new ListDocumentClassifiersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentClassifiersCommandInput} for command's `input` shape.
 * @see {@link ListDocumentClassifiersCommandOutput} for command's `response` shape.
 * @see {@link ComprehendClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDocumentClassifiersCommand = /** @class */ (function (_super) {
    __extends(ListDocumentClassifiersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDocumentClassifiersCommand(input) {
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
    ListDocumentClassifiersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ComprehendClient";
        var commandName = "ListDocumentClassifiersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDocumentClassifiersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDocumentClassifiersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDocumentClassifiersCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDocumentClassifiersCommand(input, context);
    };
    ListDocumentClassifiersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDocumentClassifiersCommand(output, context);
    };
    return ListDocumentClassifiersCommand;
}($Command));
export { ListDocumentClassifiersCommand };
//# sourceMappingURL=ListDocumentClassifiersCommand.js.map