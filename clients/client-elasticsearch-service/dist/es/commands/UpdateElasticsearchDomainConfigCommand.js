import { __extends } from "tslib";
import { UpdateElasticsearchDomainConfigRequest, UpdateElasticsearchDomainConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1UpdateElasticsearchDomainConfigCommand, serializeAws_restJson1UpdateElasticsearchDomainConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies the cluster configuration of the specified Elasticsearch domain, setting as setting the instance type and the number of instances. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, UpdateElasticsearchDomainConfigCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, UpdateElasticsearchDomainConfigCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new UpdateElasticsearchDomainConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateElasticsearchDomainConfigCommandInput} for command's `input` shape.
 * @see {@link UpdateElasticsearchDomainConfigCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateElasticsearchDomainConfigCommand = /** @class */ (function (_super) {
    __extends(UpdateElasticsearchDomainConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateElasticsearchDomainConfigCommand(input) {
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
    UpdateElasticsearchDomainConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "UpdateElasticsearchDomainConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateElasticsearchDomainConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateElasticsearchDomainConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateElasticsearchDomainConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpdateElasticsearchDomainConfigCommand(input, context);
    };
    UpdateElasticsearchDomainConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpdateElasticsearchDomainConfigCommand(output, context);
    };
    return UpdateElasticsearchDomainConfigCommand;
}($Command));
export { UpdateElasticsearchDomainConfigCommand };
//# sourceMappingURL=UpdateElasticsearchDomainConfigCommand.js.map