import { __extends } from "tslib";
import { ListRevisionAssetsRequest, ListRevisionAssetsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListRevisionAssetsCommand, serializeAws_restJson1ListRevisionAssetsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>This operation lists a revision's assets sorted alphabetically in descending order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DataExchangeClient, ListRevisionAssetsCommand } from "@aws-sdk/client-dataexchange"; // ES Modules import
 * // const { DataExchangeClient, ListRevisionAssetsCommand } = require("@aws-sdk/client-dataexchange"); // CommonJS import
 * const client = new DataExchangeClient(config);
 * const command = new ListRevisionAssetsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRevisionAssetsCommandInput} for command's `input` shape.
 * @see {@link ListRevisionAssetsCommandOutput} for command's `response` shape.
 * @see {@link DataExchangeClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRevisionAssetsCommand = /** @class */ (function (_super) {
    __extends(ListRevisionAssetsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRevisionAssetsCommand(input) {
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
    ListRevisionAssetsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DataExchangeClient";
        var commandName = "ListRevisionAssetsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRevisionAssetsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListRevisionAssetsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRevisionAssetsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListRevisionAssetsCommand(input, context);
    };
    ListRevisionAssetsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListRevisionAssetsCommand(output, context);
    };
    return ListRevisionAssetsCommand;
}($Command));
export { ListRevisionAssetsCommand };
//# sourceMappingURL=ListRevisionAssetsCommand.js.map