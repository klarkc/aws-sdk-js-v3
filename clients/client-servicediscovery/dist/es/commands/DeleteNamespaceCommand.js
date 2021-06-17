import { __extends } from "tslib";
import { DeleteNamespaceRequest, DeleteNamespaceResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteNamespaceCommand, serializeAws_json1_1DeleteNamespaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a namespace from the current account. If the namespace still contains one or more services, the request
 *    fails.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, DeleteNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, DeleteNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new DeleteNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteNamespaceCommandInput} for command's `input` shape.
 * @see {@link DeleteNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteNamespaceCommand = /** @class */ (function (_super) {
    __extends(DeleteNamespaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteNamespaceCommand(input) {
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
    DeleteNamespaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "DeleteNamespaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteNamespaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteNamespaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteNamespaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteNamespaceCommand(input, context);
    };
    DeleteNamespaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteNamespaceCommand(output, context);
    };
    return DeleteNamespaceCommand;
}($Command));
export { DeleteNamespaceCommand };
//# sourceMappingURL=DeleteNamespaceCommand.js.map