import { __extends } from "tslib";
import { SearchIndexRequest, SearchIndexResponse } from "../models/models_2";
import { deserializeAws_restJson1SearchIndexCommand, serializeAws_restJson1SearchIndexCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>The query search index.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, SearchIndexCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, SearchIndexCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new SearchIndexCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchIndexCommandInput} for command's `input` shape.
 * @see {@link SearchIndexCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchIndexCommand = /** @class */ (function (_super) {
    __extends(SearchIndexCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchIndexCommand(input) {
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
    SearchIndexCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "SearchIndexCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchIndexRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchIndexResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchIndexCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1SearchIndexCommand(input, context);
    };
    SearchIndexCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1SearchIndexCommand(output, context);
    };
    return SearchIndexCommand;
}($Command));
export { SearchIndexCommand };
//# sourceMappingURL=SearchIndexCommand.js.map