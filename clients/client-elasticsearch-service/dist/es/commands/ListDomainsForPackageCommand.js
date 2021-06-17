import { __extends } from "tslib";
import { ListDomainsForPackageRequest, ListDomainsForPackageResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDomainsForPackageCommand, serializeAws_restJson1ListDomainsForPackageCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all Amazon ES domains associated with the package.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListDomainsForPackageCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListDomainsForPackageCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListDomainsForPackageCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainsForPackageCommandInput} for command's `input` shape.
 * @see {@link ListDomainsForPackageCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDomainsForPackageCommand = /** @class */ (function (_super) {
    __extends(ListDomainsForPackageCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDomainsForPackageCommand(input) {
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
    ListDomainsForPackageCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "ListDomainsForPackageCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDomainsForPackageRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDomainsForPackageResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDomainsForPackageCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDomainsForPackageCommand(input, context);
    };
    ListDomainsForPackageCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDomainsForPackageCommand(output, context);
    };
    return ListDomainsForPackageCommand;
}($Command));
export { ListDomainsForPackageCommand };
//# sourceMappingURL=ListDomainsForPackageCommand.js.map