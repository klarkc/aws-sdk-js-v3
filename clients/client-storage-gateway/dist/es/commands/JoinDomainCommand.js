import { __extends } from "tslib";
import { JoinDomainInput, JoinDomainOutput } from "../models/models_0";
import { deserializeAws_json1_1JoinDomainCommand, serializeAws_json1_1JoinDomainCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Adds a file gateway to an Active Directory domain. This operation is only supported for
 *          file gateways that support the SMB file protocol.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { StorageGatewayClient, JoinDomainCommand } from "@aws-sdk/client-storage-gateway"; // ES Modules import
 * // const { StorageGatewayClient, JoinDomainCommand } = require("@aws-sdk/client-storage-gateway"); // CommonJS import
 * const client = new StorageGatewayClient(config);
 * const command = new JoinDomainCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link JoinDomainCommandInput} for command's `input` shape.
 * @see {@link JoinDomainCommandOutput} for command's `response` shape.
 * @see {@link StorageGatewayClientResolvedConfig | config} for command's `input` shape.
 *
 */
var JoinDomainCommand = /** @class */ (function (_super) {
    __extends(JoinDomainCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function JoinDomainCommand(input) {
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
    JoinDomainCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "StorageGatewayClient";
        var commandName = "JoinDomainCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: JoinDomainInput.filterSensitiveLog,
            outputFilterSensitiveLog: JoinDomainOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    JoinDomainCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1JoinDomainCommand(input, context);
    };
    JoinDomainCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1JoinDomainCommand(output, context);
    };
    return JoinDomainCommand;
}($Command));
export { JoinDomainCommand };
//# sourceMappingURL=JoinDomainCommand.js.map