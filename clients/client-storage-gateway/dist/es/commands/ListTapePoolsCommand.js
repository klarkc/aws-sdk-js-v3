import { __extends } from "tslib";
import { ListTapePoolsInput, ListTapePoolsOutput } from "../models/models_0";
import { deserializeAws_json1_1ListTapePoolsCommand, serializeAws_json1_1ListTapePoolsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists custom tape pools. You specify custom tape pools to list by specifying one or more
 *          custom tape pool Amazon Resource Names (ARNs). If you don't specify a custom tape pool ARN,
 *          the operation lists all custom tape pools.</p>
 *
 *          <p>This operation supports pagination. You can optionally specify the <code>Limit</code>
 *          parameter in the body to limit the number of tape pools in the response. If the number of
 *          tape pools returned in the response is truncated, the response includes a
 *             <code>Marker</code> element that you can use in your subsequent request to retrieve the
 *          next set of tape pools.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, ListTapePoolsCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, ListTapePoolsCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new ListTapePoolsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListTapePoolsCommandInput} for command's `input` shape.
 * @see {@link ListTapePoolsCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListTapePoolsCommand = /** @class */ (function (_super) {
    __extends(ListTapePoolsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListTapePoolsCommand(input) {
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
    ListTapePoolsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "ListTapePoolsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListTapePoolsInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListTapePoolsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListTapePoolsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListTapePoolsCommand(input, context);
    };
    ListTapePoolsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListTapePoolsCommand(output, context);
    };
    return ListTapePoolsCommand;
}($Command));
export { ListTapePoolsCommand };
//# sourceMappingURL=ListTapePoolsCommand.js.map