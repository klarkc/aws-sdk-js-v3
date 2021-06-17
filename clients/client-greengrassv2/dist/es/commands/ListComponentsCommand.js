import { __extends } from "tslib";
import { ListComponentsRequest, ListComponentsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListComponentsCommand, serializeAws_restJson1ListComponentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of component summaries. This list includes components that you
 *       have permission to view.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListComponentsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListComponentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListComponentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComponentsCommandInput} for command's `input` shape.
 * @see {@link ListComponentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListComponentsCommand = /** @class */ (function (_super) {
    __extends(ListComponentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListComponentsCommand(input) {
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
    ListComponentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "ListComponentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListComponentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListComponentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListComponentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListComponentsCommand(input, context);
    };
    ListComponentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListComponentsCommand(output, context);
    };
    return ListComponentsCommand;
}($Command));
export { ListComponentsCommand };
//# sourceMappingURL=ListComponentsCommand.js.map