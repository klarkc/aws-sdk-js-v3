import { __extends } from "tslib";
import { ListDeploymentsRequest, ListDeploymentsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDeploymentsCommand, serializeAws_restJson1ListDeploymentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of deployments.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListDeploymentsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListDeploymentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeploymentsCommand = /** @class */ (function (_super) {
    __extends(ListDeploymentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDeploymentsCommand(input) {
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
    ListDeploymentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "ListDeploymentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDeploymentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDeploymentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDeploymentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDeploymentsCommand(input, context);
    };
    ListDeploymentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDeploymentsCommand(output, context);
    };
    return ListDeploymentsCommand;
}($Command));
export { ListDeploymentsCommand };
//# sourceMappingURL=ListDeploymentsCommand.js.map