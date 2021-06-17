import { __extends } from "tslib";
import { CreateElasticsearchDomainRequest, CreateElasticsearchDomainResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateElasticsearchDomainCommand, serializeAws_restJson1CreateElasticsearchDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Elasticsearch domain. For more information,
 *           see <a href="http://docs.aws.amazon.com/elasticsearch-service/latest/developerguide/es-createupdatedomains.html#es-createdomains" target="_blank">Creating Elasticsearch Domains</a> in the <i>Amazon Elasticsearch Service Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, CreateElasticsearchDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, CreateElasticsearchDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new CreateElasticsearchDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateElasticsearchDomainCommandInput} for command's `input` shape.
 * @see {@link CreateElasticsearchDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateElasticsearchDomainCommand = /** @class */ (function (_super) {
    __extends(CreateElasticsearchDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateElasticsearchDomainCommand(input) {
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
    CreateElasticsearchDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "CreateElasticsearchDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateElasticsearchDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateElasticsearchDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateElasticsearchDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateElasticsearchDomainCommand(input, context);
    };
    CreateElasticsearchDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateElasticsearchDomainCommand(output, context);
    };
    return CreateElasticsearchDomainCommand;
}($Command));
export { CreateElasticsearchDomainCommand };
//# sourceMappingURL=CreateElasticsearchDomainCommand.js.map