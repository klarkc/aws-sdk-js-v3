import { __extends } from "tslib";
import { deserializeAws_restJson1DeleteElasticsearchServiceRoleCommand, serializeAws_restJson1DeleteElasticsearchServiceRoleCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the service-linked role that Elasticsearch Service uses to manage and maintain VPC domains. Role deletion will fail if any existing VPC domains use the role. You must delete any such Elasticsearch domains before deleting the role. See <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-vpc.html#es-enabling-slr" target="_blank">Deleting Elasticsearch Service Role</a> in <i>VPC Endpoints for Amazon Elasticsearch Service Domains</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, DeleteElasticsearchServiceRoleCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, DeleteElasticsearchServiceRoleCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new DeleteElasticsearchServiceRoleCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteElasticsearchServiceRoleCommandInput} for command's `input` shape.
 * @see {@link DeleteElasticsearchServiceRoleCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteElasticsearchServiceRoleCommand = /** @class */ (function (_super) {
    __extends(DeleteElasticsearchServiceRoleCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteElasticsearchServiceRoleCommand(input) {
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
    DeleteElasticsearchServiceRoleCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "DeleteElasticsearchServiceRoleCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteElasticsearchServiceRoleCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DeleteElasticsearchServiceRoleCommand(input, context);
    };
    DeleteElasticsearchServiceRoleCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DeleteElasticsearchServiceRoleCommand(output, context);
    };
    return DeleteElasticsearchServiceRoleCommand;
}($Command));
export { DeleteElasticsearchServiceRoleCommand };
//# sourceMappingURL=DeleteElasticsearchServiceRoleCommand.js.map