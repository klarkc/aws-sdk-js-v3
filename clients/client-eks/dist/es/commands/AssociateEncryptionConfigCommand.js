import { __extends } from "tslib";
import { AssociateEncryptionConfigRequest, AssociateEncryptionConfigResponse } from "../models/models_0";
import { deserializeAws_restJson1AssociateEncryptionConfigCommand, serializeAws_restJson1AssociateEncryptionConfigCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associate encryption configuration to an existing cluster.</p>
 *         <p>You can use this API to enable encryption on existing clusters which do not have
 *             encryption already enabled. This allows you to implement a defense-in-depth security
 *             strategy without migrating applications to new EKS clusters.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, AssociateEncryptionConfigCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, AssociateEncryptionConfigCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new AssociateEncryptionConfigCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateEncryptionConfigCommandInput} for command's `input` shape.
 * @see {@link AssociateEncryptionConfigCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateEncryptionConfigCommand = /** @class */ (function (_super) {
    __extends(AssociateEncryptionConfigCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateEncryptionConfigCommand(input) {
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
    AssociateEncryptionConfigCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "AssociateEncryptionConfigCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateEncryptionConfigRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateEncryptionConfigResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateEncryptionConfigCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1AssociateEncryptionConfigCommand(input, context);
    };
    AssociateEncryptionConfigCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1AssociateEncryptionConfigCommand(output, context);
    };
    return AssociateEncryptionConfigCommand;
}($Command));
export { AssociateEncryptionConfigCommand };
//# sourceMappingURL=AssociateEncryptionConfigCommand.js.map