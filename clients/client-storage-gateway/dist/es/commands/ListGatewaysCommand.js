import { __extends } from "tslib";
import { ListGatewaysInput, ListGatewaysOutput } from "../models/models_0";
import { deserializeAws_json1_1ListGatewaysCommand, serializeAws_json1_1ListGatewaysCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists gateways owned by an AWS account in an AWS Region specified in the request. The
 *          returned list is ordered by gateway Amazon Resource Name (ARN).</p>
 *
 *          <p>By default, the operation returns a maximum of 100 gateways. This operation supports
 *          pagination that allows you to optionally reduce the number of gateways returned in a
 *          response.</p>
 *
 *          <p>If you have more gateways than are returned in a response (that is, the response returns
 *          only a truncated list of your gateways), the response contains a marker that you can
 *          specify in your next request to fetch the next page of gateways.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListGatewaysCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListGatewaysCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListGatewaysCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListGatewaysCommandInput} for command's `input` shape.
 * @see {@link ListGatewaysCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListGatewaysCommand = /** @class */ (function (_super) {
    __extends(ListGatewaysCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListGatewaysCommand(input) {
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
    ListGatewaysCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "ListGatewaysCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListGatewaysInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListGatewaysOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListGatewaysCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListGatewaysCommand(input, context);
    };
    ListGatewaysCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListGatewaysCommand(output, context);
    };
    return ListGatewaysCommand;
}($Command));
export { ListGatewaysCommand };
//# sourceMappingURL=ListGatewaysCommand.js.map