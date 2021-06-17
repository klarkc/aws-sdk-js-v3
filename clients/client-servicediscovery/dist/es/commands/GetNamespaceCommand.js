import { __extends } from "tslib";
import { GetNamespaceRequest, GetNamespaceResponse } from "../models/models_0";
import { deserializeAws_json1_1GetNamespaceCommand, serializeAws_json1_1GetNamespaceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about a namespace.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ServiceDiscoveryClient, GetNamespaceCommand } from "@aws-sdk/client-servicediscovery"; // ES Modules import
 * // const { ServiceDiscoveryClient, GetNamespaceCommand } = require("@aws-sdk/client-servicediscovery"); // CommonJS import
 * const client = new ServiceDiscoveryClient(config);
 * const command = new GetNamespaceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetNamespaceCommandInput} for command's `input` shape.
 * @see {@link GetNamespaceCommandOutput} for command's `response` shape.
 * @see {@link ServiceDiscoveryClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetNamespaceCommand = /** @class */ (function (_super) {
    __extends(GetNamespaceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetNamespaceCommand(input) {
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
    GetNamespaceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ServiceDiscoveryClient";
        var commandName = "GetNamespaceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetNamespaceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetNamespaceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetNamespaceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetNamespaceCommand(input, context);
    };
    GetNamespaceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetNamespaceCommand(output, context);
    };
    return GetNamespaceCommand;
}($Command));
export { GetNamespaceCommand };
//# sourceMappingURL=GetNamespaceCommand.js.map