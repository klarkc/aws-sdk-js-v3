import { __extends } from "tslib";
import { ListInstalledComponentsRequest, ListInstalledComponentsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListInstalledComponentsCommand, serializeAws_restJson1ListInstalledComponentsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a paginated list of the components that a AWS IoT Greengrass core device runs.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassV2Client, ListInstalledComponentsCommand } from "@aws-sdk/client-greengrassv2"; // ES Modules import
 * // const { GreengrassV2Client, ListInstalledComponentsCommand } = require("@aws-sdk/client-greengrassv2"); // CommonJS import
 * const client = new GreengrassV2Client(config);
 * const command = new ListInstalledComponentsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListInstalledComponentsCommandInput} for command's `input` shape.
 * @see {@link ListInstalledComponentsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassV2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListInstalledComponentsCommand = /** @class */ (function (_super) {
    __extends(ListInstalledComponentsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListInstalledComponentsCommand(input) {
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
    ListInstalledComponentsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassV2Client";
        var commandName = "ListInstalledComponentsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListInstalledComponentsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListInstalledComponentsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListInstalledComponentsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListInstalledComponentsCommand(input, context);
    };
    ListInstalledComponentsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListInstalledComponentsCommand(output, context);
    };
    return ListInstalledComponentsCommand;
}($Command));
export { ListInstalledComponentsCommand };
//# sourceMappingURL=ListInstalledComponentsCommand.js.map