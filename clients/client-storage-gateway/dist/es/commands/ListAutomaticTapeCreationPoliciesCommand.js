import { __extends } from "tslib";
import { ListAutomaticTapeCreationPoliciesInput, ListAutomaticTapeCreationPoliciesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand, serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the automatic tape creation policies for a gateway. If there are no automatic tape
 *          creation policies for the gateway, it returns an empty list.</p>
 *
 *          <p>This operation is only supported for tape gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListAutomaticTapeCreationPoliciesCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListAutomaticTapeCreationPoliciesCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListAutomaticTapeCreationPoliciesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListAutomaticTapeCreationPoliciesCommandInput} for command's `input` shape.
 * @see {@link ListAutomaticTapeCreationPoliciesCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListAutomaticTapeCreationPoliciesCommand = /** @class */ (function (_super) {
    __extends(ListAutomaticTapeCreationPoliciesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListAutomaticTapeCreationPoliciesCommand(input) {
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
    ListAutomaticTapeCreationPoliciesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "ListAutomaticTapeCreationPoliciesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListAutomaticTapeCreationPoliciesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListAutomaticTapeCreationPoliciesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListAutomaticTapeCreationPoliciesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand(input, context);
    };
    ListAutomaticTapeCreationPoliciesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListAutomaticTapeCreationPoliciesCommand(output, context);
    };
    return ListAutomaticTapeCreationPoliciesCommand;
}($Command));
export { ListAutomaticTapeCreationPoliciesCommand };
//# sourceMappingURL=ListAutomaticTapeCreationPoliciesCommand.js.map