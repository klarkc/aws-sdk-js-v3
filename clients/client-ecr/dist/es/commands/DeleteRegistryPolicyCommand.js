import { __extends } from "tslib";
import { DeleteRegistryPolicyRequest, DeleteRegistryPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteRegistryPolicyCommand, serializeAws_json1_1DeleteRegistryPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the registry permissions policy.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, DeleteRegistryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, DeleteRegistryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new DeleteRegistryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRegistryPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRegistryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRegistryPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteRegistryPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRegistryPolicyCommand(input) {
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
    DeleteRegistryPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "DeleteRegistryPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRegistryPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRegistryPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRegistryPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRegistryPolicyCommand(input, context);
    };
    DeleteRegistryPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRegistryPolicyCommand(output, context);
    };
    return DeleteRegistryPolicyCommand;
}($Command));
export { DeleteRegistryPolicyCommand };
//# sourceMappingURL=DeleteRegistryPolicyCommand.js.map