import { __extends } from "tslib";
import { DeleteServiceRequest, DeleteServiceResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteServiceCommand, serializeAws_json1_1DeleteServiceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a specified service. If the service still contains one or more registered instances, the request
 *    fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DeleteServiceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DeleteServiceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new DeleteServiceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteServiceCommandInput} for command's `input` shape.
 * @see {@link DeleteServiceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteServiceCommand = /** @class */ (function (_super) {
    __extends(DeleteServiceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteServiceCommand(input) {
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
    DeleteServiceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "DeleteServiceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteServiceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteServiceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteServiceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteServiceCommand(input, context);
    };
    DeleteServiceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteServiceCommand(output, context);
    };
    return DeleteServiceCommand;
}($Command));
export { DeleteServiceCommand };
//# sourceMappingURL=DeleteServiceCommand.js.map