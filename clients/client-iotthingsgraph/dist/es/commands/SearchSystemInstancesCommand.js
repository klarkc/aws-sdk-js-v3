import { __extends } from "tslib";
import { SearchSystemInstancesRequest, SearchSystemInstancesResponse } from "../models/models_0";
import { deserializeAws_json1_1SearchSystemInstancesCommand, serializeAws_json1_1SearchSystemInstancesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches for system instances in the user's account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchSystemInstancesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchSystemInstancesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new SearchSystemInstancesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchSystemInstancesCommandInput} for command's `input` shape.
 * @see {@link SearchSystemInstancesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchSystemInstancesCommand = /** @class */ (function (_super) {
    __extends(SearchSystemInstancesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchSystemInstancesCommand(input) {
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
    SearchSystemInstancesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "SearchSystemInstancesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchSystemInstancesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchSystemInstancesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchSystemInstancesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchSystemInstancesCommand(input, context);
    };
    SearchSystemInstancesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchSystemInstancesCommand(output, context);
    };
    return SearchSystemInstancesCommand;
}($Command));
export { SearchSystemInstancesCommand };
//# sourceMappingURL=SearchSystemInstancesCommand.js.map