import { __extends } from "tslib";
import { DeleteDBProxyEndpointRequest, DeleteDBProxyEndpointResponse } from "../models/models_0";
import { deserializeAws_queryDeleteDBProxyEndpointCommand, serializeAws_queryDeleteDBProxyEndpointCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a <code>DBProxyEndpoint</code>. Doing so removes the ability to access the DB proxy using the
 *         endpoint that you defined. The endpoint that you delete might have provided capabilities such as read/write
 *         or read-only operations, or using a different VPC than the DB proxy's default VPC.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBProxyEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBProxyEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBProxyEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBProxyEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteDBProxyEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBProxyEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteDBProxyEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBProxyEndpointCommand(input) {
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
    DeleteDBProxyEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeleteDBProxyEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBProxyEndpointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteDBProxyEndpointResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBProxyEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBProxyEndpointCommand(input, context);
    };
    DeleteDBProxyEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBProxyEndpointCommand(output, context);
    };
    return DeleteDBProxyEndpointCommand;
}($Command));
export { DeleteDBProxyEndpointCommand };
//# sourceMappingURL=DeleteDBProxyEndpointCommand.js.map