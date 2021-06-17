import { __extends } from "tslib";
import { ListElasticsearchInstanceTypesRequest, ListElasticsearchInstanceTypesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListElasticsearchInstanceTypesCommand, serializeAws_restJson1ListElasticsearchInstanceTypesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List all Elasticsearch instance types that are supported for given ElasticsearchVersion</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListElasticsearchInstanceTypesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListElasticsearchInstanceTypesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListElasticsearchInstanceTypesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListElasticsearchInstanceTypesCommandInput} for command's `input` shape.
 * @see {@link ListElasticsearchInstanceTypesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListElasticsearchInstanceTypesCommand = /** @class */ (function (_super) {
    __extends(ListElasticsearchInstanceTypesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListElasticsearchInstanceTypesCommand(input) {
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
    ListElasticsearchInstanceTypesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "ListElasticsearchInstanceTypesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListElasticsearchInstanceTypesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListElasticsearchInstanceTypesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListElasticsearchInstanceTypesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListElasticsearchInstanceTypesCommand(input, context);
    };
    ListElasticsearchInstanceTypesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListElasticsearchInstanceTypesCommand(output, context);
    };
    return ListElasticsearchInstanceTypesCommand;
}($Command));
export { ListElasticsearchInstanceTypesCommand };
//# sourceMappingURL=ListElasticsearchInstanceTypesCommand.js.map