import { __extends } from "tslib";
import { SearchEntitiesRequest, SearchEntitiesResponse } from "../models/models_0";
import { deserializeAws_json1_1SearchEntitiesCommand, serializeAws_json1_1SearchEntitiesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches for entities of the specified type. You can search for entities in your namespace and the public namespace that you're tracking.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchEntitiesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchEntitiesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new SearchEntitiesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchEntitiesCommandInput} for command's `input` shape.
 * @see {@link SearchEntitiesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchEntitiesCommand = /** @class */ (function (_super) {
    __extends(SearchEntitiesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchEntitiesCommand(input) {
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
    SearchEntitiesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "SearchEntitiesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchEntitiesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchEntitiesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchEntitiesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchEntitiesCommand(input, context);
    };
    SearchEntitiesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchEntitiesCommand(output, context);
    };
    return SearchEntitiesCommand;
}($Command));
export { SearchEntitiesCommand };
//# sourceMappingURL=SearchEntitiesCommand.js.map