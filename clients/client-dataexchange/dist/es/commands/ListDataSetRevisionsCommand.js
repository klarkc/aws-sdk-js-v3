import { __extends } from "tslib";
import { ListDataSetRevisionsRequest, ListDataSetRevisionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDataSetRevisionsCommand, serializeAws_restJson1ListDataSetRevisionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation lists a data set's revisions sorted by CreatedAt in descending order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListDataSetRevisionsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListDataSetRevisionsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new ListDataSetRevisionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSetRevisionsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetRevisionsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDataSetRevisionsCommand = /** @class */ (function (_super) {
    __extends(ListDataSetRevisionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDataSetRevisionsCommand(input) {
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
    ListDataSetRevisionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataExchangeClient";
        var commandName = "ListDataSetRevisionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDataSetRevisionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDataSetRevisionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDataSetRevisionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDataSetRevisionsCommand(input, context);
    };
    ListDataSetRevisionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDataSetRevisionsCommand(output, context);
    };
    return ListDataSetRevisionsCommand;
}($Command));
export { ListDataSetRevisionsCommand };
//# sourceMappingURL=ListDataSetRevisionsCommand.js.map