import { __extends } from "tslib";
import { ListDocumentsRequest, ListDocumentsResult } from "../models/models_1";
import { deserializeAws_json1_1ListDocumentsCommand, serializeAws_json1_1ListDocumentsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns all Systems Manager (SSM) documents in the current AWS account and Region. You can limit the
 *    results of this request by using a filter.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListDocumentsCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListDocumentsCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListDocumentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDocumentsCommandInput} for command's `input` shape.
 * @see {@link ListDocumentsCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDocumentsCommand = /** @class */ (function (_super) {
    __extends(ListDocumentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDocumentsCommand(input) {
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
    ListDocumentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListDocumentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDocumentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDocumentsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDocumentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListDocumentsCommand(input, context);
    };
    ListDocumentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListDocumentsCommand(output, context);
    };
    return ListDocumentsCommand;
}($Command));
export { ListDocumentsCommand };
//# sourceMappingURL=ListDocumentsCommand.js.map