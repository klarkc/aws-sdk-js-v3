import { __extends } from "tslib";
import { SearchFlowExecutionsRequest, SearchFlowExecutionsResponse } from "../models/models_0";
import { deserializeAws_json1_1SearchFlowExecutionsCommand, serializeAws_json1_1SearchFlowExecutionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches for AWS IoT Things Graph workflow execution instances.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchFlowExecutionsCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchFlowExecutionsCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new SearchFlowExecutionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchFlowExecutionsCommandInput} for command's `input` shape.
 * @see {@link SearchFlowExecutionsCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchFlowExecutionsCommand = /** @class */ (function (_super) {
    __extends(SearchFlowExecutionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchFlowExecutionsCommand(input) {
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
    SearchFlowExecutionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "SearchFlowExecutionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchFlowExecutionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchFlowExecutionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchFlowExecutionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchFlowExecutionsCommand(input, context);
    };
    SearchFlowExecutionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchFlowExecutionsCommand(output, context);
    };
    return SearchFlowExecutionsCommand;
}($Command));
export { SearchFlowExecutionsCommand };
//# sourceMappingURL=SearchFlowExecutionsCommand.js.map