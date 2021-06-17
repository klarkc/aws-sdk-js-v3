import { __extends } from "tslib";
import { ListProvisioningTemplatesRequest, ListProvisioningTemplatesResponse } from "../models/models_1";
import { deserializeAws_restJson1ListProvisioningTemplatesCommand, serializeAws_restJson1ListProvisioningTemplatesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the fleet provisioning templates in your AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IoTClient, ListProvisioningTemplatesCommand } from "@aws-sdk/client-iot"; // ES Modules import
 * // const { IoTClient, ListProvisioningTemplatesCommand } = require("@aws-sdk/client-iot"); // CommonJS import
 * const client = new IoTClient(config);
 * const command = new ListProvisioningTemplatesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListProvisioningTemplatesCommandInput} for command's `input` shape.
 * @see {@link ListProvisioningTemplatesCommandOutput} for command's `response` shape.
 * @see {@link IoTClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListProvisioningTemplatesCommand = /** @class */ (function (_super) {
    __extends(ListProvisioningTemplatesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListProvisioningTemplatesCommand(input) {
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
    ListProvisioningTemplatesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IoTClient";
        var commandName = "ListProvisioningTemplatesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListProvisioningTemplatesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListProvisioningTemplatesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListProvisioningTemplatesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListProvisioningTemplatesCommand(input, context);
    };
    ListProvisioningTemplatesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListProvisioningTemplatesCommand(output, context);
    };
    return ListProvisioningTemplatesCommand;
}($Command));
export { ListProvisioningTemplatesCommand };
//# sourceMappingURL=ListProvisioningTemplatesCommand.js.map