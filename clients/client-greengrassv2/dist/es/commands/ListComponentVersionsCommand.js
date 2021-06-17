import { __extends } from "tslib";
import { ListComponentVersionsRequest, ListComponentVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListComponentVersionsCommand, serializeAws_restJson1ListComponentVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of all versions for a component.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListComponentVersionsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListComponentVersionsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListComponentVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListComponentVersionsCommandInput} for command's `input` shape.
 * @see {@link ListComponentVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListComponentVersionsCommand = /** @class */ (function (_super) {
    __extends(ListComponentVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListComponentVersionsCommand(input) {
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
    ListComponentVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "ListComponentVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListComponentVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListComponentVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListComponentVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListComponentVersionsCommand(input, context);
    };
    ListComponentVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListComponentVersionsCommand(output, context);
    };
    return ListComponentVersionsCommand;
}($Command));
export { ListComponentVersionsCommand };
//# sourceMappingURL=ListComponentVersionsCommand.js.map