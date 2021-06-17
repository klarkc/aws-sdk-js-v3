import { __extends } from "tslib";
import { ListDeviceDefinitionVersionsRequest, ListDeviceDefinitionVersionsResponse } from "../models/models_0";
import { deserializeAws_restJson1ListDeviceDefinitionVersionsCommand, serializeAws_restJson1ListDeviceDefinitionVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * Lists the versions of a device definition.
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GreengrassClient, ListDeviceDefinitionVersionsCommand } from "@aws-sdk/client-greengrass"; // ES Modules import
 * // const { GreengrassClient, ListDeviceDefinitionVersionsCommand } = require("@aws-sdk/client-greengrass"); // CommonJS import
 * const client = new GreengrassClient(config);
 * const command = new ListDeviceDefinitionVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListDeviceDefinitionVersionsCommandInput} for command's `input` shape.
 * @see {@link ListDeviceDefinitionVersionsCommandOutput} for command's `response` shape.
 * @see {@link GreengrassClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListDeviceDefinitionVersionsCommand = /** @class */ (function (_super) {
    __extends(ListDeviceDefinitionVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListDeviceDefinitionVersionsCommand(input) {
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
    ListDeviceDefinitionVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GreengrassClient";
        var commandName = "ListDeviceDefinitionVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListDeviceDefinitionVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListDeviceDefinitionVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListDeviceDefinitionVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListDeviceDefinitionVersionsCommand(input, context);
    };
    ListDeviceDefinitionVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListDeviceDefinitionVersionsCommand(output, context);
    };
    return ListDeviceDefinitionVersionsCommand;
}($Command));
export { ListDeviceDefinitionVersionsCommand };
//# sourceMappingURL=ListDeviceDefinitionVersionsCommand.js.map