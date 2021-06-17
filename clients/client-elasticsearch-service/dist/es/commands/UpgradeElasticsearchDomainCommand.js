import { __extends } from "tslib";
import { UpgradeElasticsearchDomainRequest, UpgradeElasticsearchDomainResponse } from "../models/models_0";
import { deserializeAws_restJson1UpgradeElasticsearchDomainCommand, serializeAws_restJson1UpgradeElasticsearchDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Allows you to either upgrade your domain or perform an Upgrade eligibility check to a compatible Elasticsearch version.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, UpgradeElasticsearchDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, UpgradeElasticsearchDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new UpgradeElasticsearchDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpgradeElasticsearchDomainCommandInput} for command's `input` shape.
 * @see {@link UpgradeElasticsearchDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpgradeElasticsearchDomainCommand = /** @class */ (function (_super) {
    __extends(UpgradeElasticsearchDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpgradeElasticsearchDomainCommand(input) {
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
    UpgradeElasticsearchDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "UpgradeElasticsearchDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpgradeElasticsearchDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpgradeElasticsearchDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpgradeElasticsearchDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1UpgradeElasticsearchDomainCommand(input, context);
    };
    UpgradeElasticsearchDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1UpgradeElasticsearchDomainCommand(output, context);
    };
    return UpgradeElasticsearchDomainCommand;
}($Command));
export { UpgradeElasticsearchDomainCommand };
//# sourceMappingURL=UpgradeElasticsearchDomainCommand.js.map