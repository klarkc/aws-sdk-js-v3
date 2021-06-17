import { __extends } from "tslib";
import { CreatePrivateDnsNamespaceRequest, CreatePrivateDnsNamespaceResponse } from "../models/models_0";
import { deserializeAws_json1_1CreatePrivateDnsNamespaceCommand, serializeAws_json1_1CreatePrivateDnsNamespaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a private namespace based on DNS, which is visible only inside a specified Amazon VPC. The namespace
 *    defines your service naming scheme. For example, if you name your namespace <code>example.com</code> and name your
 *    service <code>backend</code>, the resulting DNS name for the service is <code>backend.example.com</code>. Service
 *    instances that are registered using a private DNS namespace can be discovered using either a
 *     <code>DiscoverInstances</code> request or using DNS. For the current quota on the number of namespaces that you can
 *    create using the same AWS account, see <a href="https://docs.aws.amazon.com/cloud-map/latest/dg/cloud-map-limits.html">AWS Cloud Map Limits</a> in the <i>AWS Cloud Map Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, CreatePrivateDnsNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, CreatePrivateDnsNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new CreatePrivateDnsNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreatePrivateDnsNamespaceCommandInput} for command's `input` shape.
 * @see {@link CreatePrivateDnsNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreatePrivateDnsNamespaceCommand = /** @class */ (function (_super) {
    __extends(CreatePrivateDnsNamespaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreatePrivateDnsNamespaceCommand(input) {
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
    CreatePrivateDnsNamespaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "CreatePrivateDnsNamespaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreatePrivateDnsNamespaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreatePrivateDnsNamespaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreatePrivateDnsNamespaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreatePrivateDnsNamespaceCommand(input, context);
    };
    CreatePrivateDnsNamespaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreatePrivateDnsNamespaceCommand(output, context);
    };
    return CreatePrivateDnsNamespaceCommand;
}($Command));
export { CreatePrivateDnsNamespaceCommand };
//# sourceMappingURL=CreatePrivateDnsNamespaceCommand.js.map