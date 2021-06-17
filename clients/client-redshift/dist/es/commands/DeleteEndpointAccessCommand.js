import { __extends } from "tslib";
import { DeleteEndpointAccessMessage, EndpointAccess } from "../models/models_0";
import { deserializeAws_queryDeleteEndpointAccessCommand, serializeAws_queryDeleteEndpointAccessCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a Redshift-managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, DeleteEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, DeleteEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new DeleteEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link DeleteEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteEndpointAccessCommand = /** @class */ (function (_super) {
    __extends(DeleteEndpointAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteEndpointAccessCommand(input) {
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
    DeleteEndpointAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "DeleteEndpointAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteEndpointAccessMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EndpointAccess.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteEndpointAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryDeleteEndpointAccessCommand(input, context);
    };
    DeleteEndpointAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryDeleteEndpointAccessCommand(output, context);
    };
    return DeleteEndpointAccessCommand;
}($Command));
export { DeleteEndpointAccessCommand };
//# sourceMappingURL=DeleteEndpointAccessCommand.js.map