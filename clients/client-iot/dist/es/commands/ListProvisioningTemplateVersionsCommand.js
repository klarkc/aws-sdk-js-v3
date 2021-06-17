import { __extends } from "tslib";
import { ListProvisioningTemplateVersionsRequest, ListProvisioningTemplateVersionsResponse } from "../models/models_1";
import { deserializeAws_restJson1ListProvisioningTemplateVersionsCommand, serializeAws_restJson1ListProvisioningTemplateVersionsCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>A list of fleet provisioning template versions.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListProvisioningTemplateVersionsCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListProvisioningTemplateVersionsCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListProvisioningTemplateVersionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningTemplateVersionsCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningTemplateVersionsCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProvisioningTemplateVersionsCommand = /** @class */ (function (_super) {
    __extends(ListProvisioningTemplateVersionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProvisioningTemplateVersionsCommand(input) {
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
    ListProvisioningTemplateVersionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListProvisioningTemplateVersionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProvisioningTemplateVersionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProvisioningTemplateVersionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProvisioningTemplateVersionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProvisioningTemplateVersionsCommand(input, context);
    };
    ListProvisioningTemplateVersionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProvisioningTemplateVersionsCommand(output, context);
    };
    return ListProvisioningTemplateVersionsCommand;
}($Command));
export { ListProvisioningTemplateVersionsCommand };
//# sourceMappingURL=ListProvisioningTemplateVersionsCommand.js.map