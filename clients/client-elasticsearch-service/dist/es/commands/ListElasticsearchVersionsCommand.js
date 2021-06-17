import { __extends } from "tslib";
import { ListElasticsearchVersionsRequest, ListElasticsearchVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListElasticsearchVersionsCommand, serializeAws_restJson1ListElasticsearchVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all supported Elasticsearch versions</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListElasticsearchVersionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListElasticsearchVersionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListElasticsearchVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListElasticsearchVersionsCommandInput} for command's `input` shape.
 * @see {@link ListElasticsearchVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListElasticsearchVersionsCommand = /** @class */ (function (_super) {
    __extends(ListElasticsearchVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListElasticsearchVersionsCommand(input) {
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
    ListElasticsearchVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "ListElasticsearchVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListElasticsearchVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListElasticsearchVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListElasticsearchVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListElasticsearchVersionsCommand(input, context);
    };
    ListElasticsearchVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListElasticsearchVersionsCommand(output, context);
    };
    return ListElasticsearchVersionsCommand;
}($Command));
export { ListElasticsearchVersionsCommand };
//# sourceMappingURL=ListElasticsearchVersionsCommand.js.map