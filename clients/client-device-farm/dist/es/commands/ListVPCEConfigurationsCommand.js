import { __extends } from "tslib";
import { ListVPCEConfigurationsRequest, ListVPCEConfigurationsResult } from "../models/models_0";
import { deserializeAws_json1_1ListVPCEConfigurationsCommand, serializeAws_json1_1ListVPCEConfigurationsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns information about all Amazon Virtual Private Cloud (VPC) endpoint
 *             configurations in the AWS account.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { DeviceFarmClient, ListVPCEConfigurationsCommand } from "@aws-sdk/client-device-farm"; // ES Modules import
 * // const { DeviceFarmClient, ListVPCEConfigurationsCommand } = require("@aws-sdk/client-device-farm"); // CommonJS import
 * const client = new DeviceFarmClient(config);
 * const command = new ListVPCEConfigurationsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListVPCEConfigurationsCommandInput} for command's `input` shape.
 * @see {@link ListVPCEConfigurationsCommandOutput} for command's `response` shape.
 * @see {@link DeviceFarmClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListVPCEConfigurationsCommand = /** @class */ (function (_super) {
    __extends(ListVPCEConfigurationsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListVPCEConfigurationsCommand(input) {
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
    ListVPCEConfigurationsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "DeviceFarmClient";
        var commandName = "ListVPCEConfigurationsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListVPCEConfigurationsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListVPCEConfigurationsResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListVPCEConfigurationsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListVPCEConfigurationsCommand(input, context);
    };
    ListVPCEConfigurationsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListVPCEConfigurationsCommand(output, context);
    };
    return ListVPCEConfigurationsCommand;
}($Command));
export { ListVPCEConfigurationsCommand };
//# sourceMappingURL=ListVPCEConfigurationsCommand.js.map