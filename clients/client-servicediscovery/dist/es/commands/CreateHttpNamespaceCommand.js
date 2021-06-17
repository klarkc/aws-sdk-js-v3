import { __extends } from "tslib";
import { CreateHttpNamespaceRequest, CreateHttpNamespaceResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateHttpNamespaceCommand, serializeAws_json1_1CreateHttpNamespaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an HTTP namespace. Service instances registered using an HTTP namespace can be discovered using a
 *     <code>DiscoverInstances</code> request but can't be discovered using DNS.</p>
 *          <p>For the current quota on the number of namespaces that you can create using the same AWS account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map quotas</a> in the
 *     <i>AWS Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreateHttpNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreateHttpNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new CreateHttpNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateHttpNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreateHttpNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateHttpNamespaceCommand = /** @class */ (function (_super) {
    __extends(CreateHttpNamespaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateHttpNamespaceCommand(input) {
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
    CreateHttpNamespaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "CreateHttpNamespaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateHttpNamespaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateHttpNamespaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateHttpNamespaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateHttpNamespaceCommand(input, context);
    };
    CreateHttpNamespaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateHttpNamespaceCommand(output, context);
    };
    return CreateHttpNamespaceCommand;
}($Command));
export { CreateHttpNamespaceCommand };
//# sourceMappingURL=CreateHttpNamespaceCommand.js.map