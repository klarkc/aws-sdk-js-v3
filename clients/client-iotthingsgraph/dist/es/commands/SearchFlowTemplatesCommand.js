import { __extends } from "tslib";
import { SearchFlowTemplatesRequest, SearchFlowTemplatesResponse } from "../models/models_0";
import { deserializeAws_json1_1SearchFlowTemplatesCommand, serializeAws_json1_1SearchFlowTemplatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches for summary information about workflows.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchFlowTemplatesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchFlowTemplatesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new SearchFlowTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchFlowTemplatesCommandInput} for command's `input` shape.
 * @see {@link SearchFlowTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchFlowTemplatesCommand = /** @class */ (function (_super) {
    __extends(SearchFlowTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchFlowTemplatesCommand(input) {
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
    SearchFlowTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "SearchFlowTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchFlowTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchFlowTemplatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchFlowTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchFlowTemplatesCommand(input, context);
    };
    SearchFlowTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchFlowTemplatesCommand(output, context);
    };
    return SearchFlowTemplatesCommand;
}($Command));
export { SearchFlowTemplatesCommand };
//# sourceMappingURL=SearchFlowTemplatesCommand.js.map