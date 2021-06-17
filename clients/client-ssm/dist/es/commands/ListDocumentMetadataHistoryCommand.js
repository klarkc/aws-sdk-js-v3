import { __extends } from "tslib";
import { ListDocumentMetadataHistoryRequest, ListDocumentMetadataHistoryResponse } from "../models/models_1";
import { deserializeAws_json1_1ListDocumentMetadataHistoryCommand, serializeAws_json1_1ListDocumentMetadataHistoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Information about approval reviews for a version of an SSM document.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentMetadataHistoryCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentMetadataHistoryCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListDocumentMetadataHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentMetadataHistoryCommandInput} for command's `input` shape.
 * @see {@link ListDocumentMetadataHistoryCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDocumentMetadataHistoryCommand = /** @class */ (function (_super) {
    __extends(ListDocumentMetadataHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDocumentMetadataHistoryCommand(input) {
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
    ListDocumentMetadataHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListDocumentMetadataHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDocumentMetadataHistoryRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDocumentMetadataHistoryResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDocumentMetadataHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDocumentMetadataHistoryCommand(input, context);
    };
    ListDocumentMetadataHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDocumentMetadataHistoryCommand(output, context);
    };
    return ListDocumentMetadataHistoryCommand;
}($Command));
export { ListDocumentMetadataHistoryCommand };
//# sourceMappingURL=ListDocumentMetadataHistoryCommand.js.map