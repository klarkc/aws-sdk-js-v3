import { __extends } from "tslib";
import { DBClusterEndpoint, DeleteDBClusterEndpointMessage } from "../models/models_0";
import { deserializeAws_queryDeleteDBClusterEndpointCommand, serializeAws_queryDeleteDBClusterEndpointCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a custom endpoint and removes it from an Amazon Aurora DB cluster.</p>
 *          <note>
 *            <p>This action only applies to Aurora DB clusters.</p>
 *          </note>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RDSClient, DeleteDBClusterEndpointCommand } from "@aws-sdk/client-rds"; // ES Modules import
 * // const { RDSClient, DeleteDBClusterEndpointCommand } = require("@aws-sdk/client-rds"); // CommonJS import
 * const client = new RDSClient(config);
 * const command = new DeleteDBClusterEndpointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteDBClusterEndpointCommandInput} for command's `input` shape.
 * @see {@link DeleteDBClusterEndpointCommandOutput} for command's `response` shape.
 * @see {@link RDSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteDBClusterEndpointCommand = /** @class */ (function (_super) {
    __extends(DeleteDBClusterEndpointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteDBClusterEndpointCommand(input) {
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
    DeleteDBClusterEndpointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RDSClient";
        var commandName = "DeleteDBClusterEndpointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteDBClusterEndpointMessage.filterSensitiveLog,
            outputFilterSensitiveLog: DBClusterEndpoint.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteDBClusterEndpointCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteDBClusterEndpointCommand(input, context);
    };
    DeleteDBClusterEndpointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteDBClusterEndpointCommand(output, context);
    };
    return DeleteDBClusterEndpointCommand;
}($Command));
export { DeleteDBClusterEndpointCommand };
//# sourceMappingURL=DeleteDBClusterEndpointCommand.js.map