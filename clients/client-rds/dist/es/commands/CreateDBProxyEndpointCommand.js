import { __extends } from "tslib";
import { CreateDBProxyEndpointRequest, CreateDBProxyEndpointResponse } from "../models/models_0";
import { deserializeAws_queryCreateDBProxyEndpointCommand, serializeAws_queryCreateDBProxyEndpointCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>
 *         Creates a <code>DBProxyEndpoint</code>. Only applies to proxies that are associated with Aurora DB clusters.
 *         You can use DB proxy endpoints to specify read/write or read-only access to the DB cluster. You can also use
 *         DB proxy endpoints to access a DB proxy through a different VPC than the proxy's default VPC.
 *       </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, CreateDBProxyEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, CreateDBProxyEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new CreateDBProxyEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateDBProxyEndpointCommandInput} for command's `input` shape.
 * @see {@link CreateDBProxyEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateDBProxyEndpointCommand = /** @class */ (function (_super) {
    __extends(CreateDBProxyEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateDBProxyEndpointCommand(input) {
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
    CreateDBProxyEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "CreateDBProxyEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateDBProxyEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateDBProxyEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateDBProxyEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryCreateDBProxyEndpointCommand(input, context);
    };
    CreateDBProxyEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryCreateDBProxyEndpointCommand(output, context);
    };
    return CreateDBProxyEndpointCommand;
}($Command));
export { CreateDBProxyEndpointCommand };
//# sourceMappingURL=CreateDBProxyEndpointCommand.js.map