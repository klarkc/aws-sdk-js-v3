import { __extends } from "tslib";
import { ListBulkDeploymentsRequest, ListBulkDeploymentsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListBulkDeploymentsCommand, serializeAws_restJson1ListBulkDeploymentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Returns a list of bulk deployments.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListBulkDeploymentsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListBulkDeploymentsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListBulkDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBulkDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListBulkDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBulkDeploymentsCommand = /** @class */ (function (_super) {
    __extends(ListBulkDeploymentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBulkDeploymentsCommand(input) {
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
    ListBulkDeploymentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListBulkDeploymentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBulkDeploymentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBulkDeploymentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBulkDeploymentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListBulkDeploymentsCommand(input, context);
    };
    ListBulkDeploymentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListBulkDeploymentsCommand(output, context);
    };
    return ListBulkDeploymentsCommand;
}($Command));
export { ListBulkDeploymentsCommand };
//# sourceMappingURL=ListBulkDeploymentsCommand.js.map