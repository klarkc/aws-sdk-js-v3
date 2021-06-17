import { __extends } from "tslib";
import { ListDomainNamesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDomainNamesCommand, serializeAws_restJson1ListDomainNamesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the name of all Elasticsearch domains owned by the current user's account. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ElasticsearchServiceClient, ListDomainNamesCommand } from "@aws-sdk/client-elasticsearch-service"; // ES Modules import
 * // const { ElasticsearchServiceClient, ListDomainNamesCommand } = require("@aws-sdk/client-elasticsearch-service"); // CommonJS import
 * const client = new ElasticsearchServiceClient(config);
 * const command = new ListDomainNamesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDomainNamesCommandInput} for command's `input` shape.
 * @see {@link ListDomainNamesCommandOutput} for command's `response` shape.
 * @see {@link ElasticsearchServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDomainNamesCommand = /** @class */ (function (_super) {
    __extends(ListDomainNamesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDomainNamesCommand(input) {
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
    ListDomainNamesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ElasticsearchServiceClient";
        var commandName = "ListDomainNamesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: function (input) { return input; },
            outputFilterSensitiveLog: ListDomainNamesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDomainNamesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDomainNamesCommand(input, context);
    };
    ListDomainNamesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDomainNamesCommand(output, context);
    };
    return ListDomainNamesCommand;
}($Command));
export { ListDomainNamesCommand };
//# sourceMappingURL=ListDomainNamesCommand.js.map