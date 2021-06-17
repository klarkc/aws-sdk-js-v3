import { __extends } from "tslib";
import { IndexDocumentsRequest, IndexDocumentsResponse } from "../models/models_0";
import { deserializeAws_queryIndexDocumentsCommand, serializeAws_queryIndexDocumentsCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Tells the search domain to start indexing its documents using the latest indexing options. This operation must be invoked to activate options whose <a>OptionStatus</a> is  <code>RequiresIndexDocuments</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, IndexDocumentsCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, IndexDocumentsCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new IndexDocumentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link IndexDocumentsCommandInput} for command's `input` shape.
 * @see {@link IndexDocumentsCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var IndexDocumentsCommand = /** @class */ (function (_super) {
    __extends(IndexDocumentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function IndexDocumentsCommand(input) {
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
    IndexDocumentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "IndexDocumentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: IndexDocumentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: IndexDocumentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    IndexDocumentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryIndexDocumentsCommand(input, context);
    };
    IndexDocumentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryIndexDocumentsCommand(output, context);
    };
    return IndexDocumentsCommand;
}($Command));
export { IndexDocumentsCommand };
//# sourceMappingURL=IndexDocumentsCommand.js.map