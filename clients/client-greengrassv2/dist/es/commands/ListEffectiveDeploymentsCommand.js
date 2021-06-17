import { __extends } from "tslib";
import { ListEffectiveDeploymentsRequest, ListEffectiveDeploymentsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListEffectiveDeploymentsCommand, serializeAws_restJson1ListEffectiveDeploymentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of deployment jobs that AWS IoT Greengrass sends to AWS IoT Greengrass core
 *       devices.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListEffectiveDeploymentsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListEffectiveDeploymentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListEffectiveDeploymentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListEffectiveDeploymentsCommandInput} for command's `input` shape.
 * @see {@link ListEffectiveDeploymentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListEffectiveDeploymentsCommand = /** @class */ (function (_super) {
    __extends(ListEffectiveDeploymentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListEffectiveDeploymentsCommand(input) {
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
    ListEffectiveDeploymentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "ListEffectiveDeploymentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListEffectiveDeploymentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListEffectiveDeploymentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListEffectiveDeploymentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListEffectiveDeploymentsCommand(input, context);
    };
    ListEffectiveDeploymentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListEffectiveDeploymentsCommand(output, context);
    };
    return ListEffectiveDeploymentsCommand;
}($Command));
export { ListEffectiveDeploymentsCommand };
//# sourceMappingURL=ListEffectiveDeploymentsCommand.js.map