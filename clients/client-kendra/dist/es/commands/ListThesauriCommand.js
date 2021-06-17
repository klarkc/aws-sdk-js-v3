import { __extends } from "tslib";
import { ListThesauriRequest, ListThesauriResponse } from "../models/models_0";
import { deserializeAws_json1_1ListThesauriCommand, serializeAws_json1_1ListThesauriCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Amazon Kendra thesauri associated with an index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListThesauriCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListThesauriCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListThesauriCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListThesauriCommandInput} for command's `input` shape.
 * @see {@link ListThesauriCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListThesauriCommand = /** @class */ (function (_super) {
    __extends(ListThesauriCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListThesauriCommand(input) {
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
    ListThesauriCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "ListThesauriCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListThesauriRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListThesauriResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListThesauriCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListThesauriCommand(input, context);
    };
    ListThesauriCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListThesauriCommand(output, context);
    };
    return ListThesauriCommand;
}($Command));
export { ListThesauriCommand };
//# sourceMappingURL=ListThesauriCommand.js.map