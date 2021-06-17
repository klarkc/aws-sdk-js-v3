import { __extends } from "tslib";
import { ListPackagesForDomainRequest, ListPackagesForDomainResponse } from "../models/models_0";
import { deserializeAws_restJson1ListPackagesForDomainCommand, serializeAws_restJson1ListPackagesForDomainCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists all packages associated with the Amazon ES domain.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListPackagesForDomainCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListPackagesForDomainCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListPackagesForDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListPackagesForDomainCommandInput} for command's `input` shape.
 * @see {@link ListPackagesForDomainCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListPackagesForDomainCommand = /** @class */ (function (_super) {
    __extends(ListPackagesForDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListPackagesForDomainCommand(input) {
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
    ListPackagesForDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "ListPackagesForDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListPackagesForDomainRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListPackagesForDomainResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListPackagesForDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListPackagesForDomainCommand(input, context);
    };
    ListPackagesForDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListPackagesForDomainCommand(output, context);
    };
    return ListPackagesForDomainCommand;
}($Command));
export { ListPackagesForDomainCommand };
//# sourceMappingURL=ListPackagesForDomainCommand.js.map