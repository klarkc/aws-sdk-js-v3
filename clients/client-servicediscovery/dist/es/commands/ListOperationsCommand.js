import { __extends } from "tslib";
import { ListOperationsRequest, ListOperationsResponse } from "../models/models_0";
import { deserializeAws_json1_1ListOperationsCommand, serializeAws_json1_1ListOperationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists operations that match the criteria that you specify.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, ListOperationsCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, ListOperationsCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new ListOperationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListOperationsCommandInput} for command's `input` shape.
 * @see {@link ListOperationsCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListOperationsCommand = /** @class */ (function (_super) {
    __extends(ListOperationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListOperationsCommand(input) {
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
    ListOperationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "ListOperationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListOperationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListOperationsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListOperationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListOperationsCommand(input, context);
    };
    ListOperationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListOperationsCommand(output, context);
    };
    return ListOperationsCommand;
}($Command));
export { ListOperationsCommand };
//# sourceMappingURL=ListOperationsCommand.js.map