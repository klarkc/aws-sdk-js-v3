import { __extends } from "tslib";
import { ListIndicesRequest, ListIndicesResponse } from "../models/models_0";
import { deserializeAws_json1_1ListIndicesCommand, serializeAws_json1_1ListIndicesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the Amazon Kendra indexes that you have created.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { KendraClient, ListIndicesCommand } from "@aws-sdk/client-kendra"; // ES Modules import
 * // const { KendraClient, ListIndicesCommand } = require("@aws-sdk/client-kendra"); // CommonJS import
 * const client = new KendraClient(config);
 * const command = new ListIndicesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListIndicesCommandInput} for command's `input` shape.
 * @see {@link ListIndicesCommandOutput} for command's `response` shape.
 * @see {@link KendraClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListIndicesCommand = /** @class */ (function (_super) {
    __extends(ListIndicesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListIndicesCommand(input) {
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
    ListIndicesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "KendraClient";
        var commandName = "ListIndicesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListIndicesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListIndicesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListIndicesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListIndicesCommand(input, context);
    };
    ListIndicesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListIndicesCommand(output, context);
    };
    return ListIndicesCommand;
}($Command));
export { ListIndicesCommand };
//# sourceMappingURL=ListIndicesCommand.js.map