import { __extends } from "tslib";
import { ListRecordHistoryInput, ListRecordHistoryOutput } from "../models/models_0";
import { deserializeAws_json1_1ListRecordHistoryCommand, serializeAws_json1_1ListRecordHistoryCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the specified requests or all performed requests.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceCatalogClient, ListRecordHistoryCommand } from "@aws-sdk/client-service-catalog"; // ES Modules import
 * // const { ServiceCatalogClient, ListRecordHistoryCommand } = require("@aws-sdk/client-service-catalog"); // CommonJS import
 * const client = new ServiceCatalogClient(config);
 * const command = new ListRecordHistoryCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListRecordHistoryCommandInput} for command's `input` shape.
 * @see {@link ListRecordHistoryCommandOutput} for command's `response` shape.
 * @see {@link ServiceCatalogClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListRecordHistoryCommand = /** @class */ (function (_super) {
    __extends(ListRecordHistoryCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListRecordHistoryCommand(input) {
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
    ListRecordHistoryCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceCatalogClient";
        var commandName = "ListRecordHistoryCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListRecordHistoryInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListRecordHistoryOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListRecordHistoryCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListRecordHistoryCommand(input, context);
    };
    ListRecordHistoryCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListRecordHistoryCommand(output, context);
    };
    return ListRecordHistoryCommand;
}($Command));
export { ListRecordHistoryCommand };
//# sourceMappingURL=ListRecordHistoryCommand.js.map