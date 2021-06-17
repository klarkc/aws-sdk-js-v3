import { __extends } from "tslib";
import { ListDataSetsRequest, ListDataSetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDataSetsCommand, serializeAws_restJson1ListDataSetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation lists your data sets. When listing by origin OWNED, results are sorted by CreatedAt in descending order. When listing by origin ENTITLED, there is no order and the maxResults parameter is ignored.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListDataSetsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListDataSetsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new ListDataSetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDataSetsCommandInput} for command's `input` shape.
 * @see {@link ListDataSetsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDataSetsCommand = /** @class */ (function (_super) {
    __extends(ListDataSetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDataSetsCommand(input) {
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
    ListDataSetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataExchangeClient";
        var commandName = "ListDataSetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDataSetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDataSetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDataSetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDataSetsCommand(input, context);
    };
    ListDataSetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDataSetsCommand(output, context);
    };
    return ListDataSetsCommand;
}($Command));
export { ListDataSetsCommand };
//# sourceMappingURL=ListDataSetsCommand.js.map