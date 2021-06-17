import { __extends } from "tslib";
import { ListBulkDeploymentDetailedReportsRequest, ListBulkDeploymentDetailedReportsResponse, } from "../models/models_0";
import { deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand, serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Gets a paginated list of the deployments that have been started in a bulk deployment operation, and their current deployment status.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListBulkDeploymentDetailedReportsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListBulkDeploymentDetailedReportsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListBulkDeploymentDetailedReportsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListBulkDeploymentDetailedReportsCommandInput} for command's `input` shape.
 * @see {@link ListBulkDeploymentDetailedReportsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListBulkDeploymentDetailedReportsCommand = /** @class */ (function (_super) {
    __extends(ListBulkDeploymentDetailedReportsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListBulkDeploymentDetailedReportsCommand(input) {
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
    ListBulkDeploymentDetailedReportsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListBulkDeploymentDetailedReportsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListBulkDeploymentDetailedReportsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListBulkDeploymentDetailedReportsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListBulkDeploymentDetailedReportsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListBulkDeploymentDetailedReportsCommand(input, context);
    };
    ListBulkDeploymentDetailedReportsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListBulkDeploymentDetailedReportsCommand(output, context);
    };
    return ListBulkDeploymentDetailedReportsCommand;
}($Command));
export { ListBulkDeploymentDetailedReportsCommand };
//# sourceMappingURL=ListBulkDeploymentDetailedReportsCommand.js.map