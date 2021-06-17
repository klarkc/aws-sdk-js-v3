import { __extends } from "tslib";
import { ListInventoryEntriesRequest, ListInventoryEntriesResult } from "../models/models_1";
import { deserializeAws_json1_1ListInventoryEntriesCommand, serializeAws_json1_1ListInventoryEntriesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A list of inventory items returned by the request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, ListInventoryEntriesCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, ListInventoryEntriesCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new ListInventoryEntriesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInventoryEntriesCommandInput} for command's `input` shape.
 * @see {@link ListInventoryEntriesCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInventoryEntriesCommand = /** @class */ (function (_super) {
    __extends(ListInventoryEntriesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInventoryEntriesCommand(input) {
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
    ListInventoryEntriesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "ListInventoryEntriesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInventoryEntriesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInventoryEntriesResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInventoryEntriesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListInventoryEntriesCommand(input, context);
    };
    ListInventoryEntriesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListInventoryEntriesCommand(output, context);
    };
    return ListInventoryEntriesCommand;
}($Command));
export { ListInventoryEntriesCommand };
//# sourceMappingURL=ListInventoryEntriesCommand.js.map