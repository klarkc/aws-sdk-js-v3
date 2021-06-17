import { __extends } from "tslib";
import { SearchSystemTemplatesRequest, SearchSystemTemplatesResponse } from "../models/models_0";
import { deserializeAws_json1_1SearchSystemTemplatesCommand, serializeAws_json1_1SearchSystemTemplatesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Searches for summary information about systems in the user's account. You can filter by the ID of a workflow to return only systems that use the specified workflow.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTThingsGraphClient, SearchSystemTemplatesCommand } from "@aws-sdk/client-iotthingsgraph"; // ES Modules import
 * // const { IoTThingsGraphClient, SearchSystemTemplatesCommand } = require("@aws-sdk/client-iotthingsgraph"); // CommonJS import
 * const client = new IoTThingsGraphClient(config);
 * const command = new SearchSystemTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchSystemTemplatesCommandInput} for command's `input` shape.
 * @see {@link SearchSystemTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTThingsGraphClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchSystemTemplatesCommand = /** @class */ (function (_super) {
    __extends(SearchSystemTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchSystemTemplatesCommand(input) {
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
    SearchSystemTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTThingsGraphClient";
        var commandName = "SearchSystemTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchSystemTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchSystemTemplatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchSystemTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchSystemTemplatesCommand(input, context);
    };
    SearchSystemTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchSystemTemplatesCommand(output, context);
    };
    return SearchSystemTemplatesCommand;
}($Command));
export { SearchSystemTemplatesCommand };
//# sourceMappingURL=SearchSystemTemplatesCommand.js.map