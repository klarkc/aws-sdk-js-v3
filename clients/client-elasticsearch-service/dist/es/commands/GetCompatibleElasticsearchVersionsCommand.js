import { __extends } from "tslib";
import { GetCompatibleElasticsearchVersionsRequest, GetCompatibleElasticsearchVersionsResponse, } from "../models/models_0";
import { deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand, serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Returns a list of upgrade compatible Elastisearch versions.
 *         You can optionally pass a
 *         <code>
 *           <a>DomainName</a>
 *         </code>
 *         to get all upgrade compatible Elasticsearch versions for that specific domain.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, GetCompatibleElasticsearchVersionsCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, GetCompatibleElasticsearchVersionsCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new GetCompatibleElasticsearchVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetCompatibleElasticsearchVersionsCommandInput} for command's `input` shape.
 * @see {@link GetCompatibleElasticsearchVersionsCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetCompatibleElasticsearchVersionsCommand = /** @class */ (function (_super) {
    __extends(GetCompatibleElasticsearchVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetCompatibleElasticsearchVersionsCommand(input) {
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
    GetCompatibleElasticsearchVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "GetCompatibleElasticsearchVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetCompatibleElasticsearchVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetCompatibleElasticsearchVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetCompatibleElasticsearchVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1GetCompatibleElasticsearchVersionsCommand(input, context);
    };
    GetCompatibleElasticsearchVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1GetCompatibleElasticsearchVersionsCommand(output, context);
    };
    return GetCompatibleElasticsearchVersionsCommand;
}($Command));
export { GetCompatibleElasticsearchVersionsCommand };
//# sourceMappingURL=GetCompatibleElasticsearchVersionsCommand.js.map