import { __extends } from "tslib";
import { EndpointAccess } from "../models/models_0";
import { ModifyEndpointAccessMessage } from "../models/models_1";
import { deserializeAws_queryModifyEndpointAccessCommand, serializeAws_queryModifyEndpointAccessCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Modifies a Redshift-managed VPC endpoint.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { RedshiftClient, ModifyEndpointAccessCommand } from "@aws-sdk/client-redshift"; // ES Modules import
 * // const { RedshiftClient, ModifyEndpointAccessCommand } = require("@aws-sdk/client-redshift"); // CommonJS import
 * const client = new RedshiftClient(config);
 * const command = new ModifyEndpointAccessCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ModifyEndpointAccessCommandInput} for command's `input` shape.
 * @see {@link ModifyEndpointAccessCommandOutput} for command's `response` shape.
 * @see {@link RedshiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ModifyEndpointAccessCommand = /** @class */ (function (_super) {
    __extends(ModifyEndpointAccessCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ModifyEndpointAccessCommand(input) {
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
    ModifyEndpointAccessCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "RedshiftClient";
        var commandName = "ModifyEndpointAccessCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ModifyEndpointAccessMessage.filterSensitiveLog,
            outputFilterSensitiveLog: EndpointAccess.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ModifyEndpointAccessCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryModifyEndpointAccessCommand(input, context);
    };
    ModifyEndpointAccessCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryModifyEndpointAccessCommand(output, context);
    };
    return ModifyEndpointAccessCommand;
}($Command));
export { ModifyEndpointAccessCommand };
//# sourceMappingURL=ModifyEndpointAccessCommand.js.map