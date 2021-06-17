import { __extends } from "tslib";
import { DeleteElasticsearchDomainRequest, DeleteElasticsearchDomainResponse } from "../models/models_0";
import { deserializeAws_restJson1DeleteElasticsearchDomainCommand, serializeAws_restJson1DeleteElasticsearchDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Permanently deletes the specified Elasticsearch domain and all of its data. Once a domain is deleted, it cannot be recovered.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteElasticsearchDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteElasticsearchDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DeleteElasticsearchDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteElasticsearchDomainCommandInput} for command's `input` shape.
 * @see {@link DeleteElasticsearchDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteElasticsearchDomainCommand = /** @class */ (function (_super) {
    __extends(DeleteElasticsearchDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteElasticsearchDomainCommand(input) {
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
    DeleteElasticsearchDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DeleteElasticsearchDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteElasticsearchDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteElasticsearchDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteElasticsearchDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteElasticsearchDomainCommand(input, context);
    };
    DeleteElasticsearchDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteElasticsearchDomainCommand(output, context);
    };
    return DeleteElasticsearchDomainCommand;
}($Command));
export { DeleteElasticsearchDomainCommand };
//# sourceMappingURL=DeleteElasticsearchDomainCommand.js.map