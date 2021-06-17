import { __extends } from "tslib";
import { DeleteRepositoryPolicyRequest, DeleteRepositoryPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1DeleteRepositoryPolicyCommand, serializeAws_json1_1DeleteRepositoryPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the repository policy associated with the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRPUBLICClient, DeleteRepositoryPolicyCommand } from "@aws-sdk/client-ecr-public"; // ES Modules import
 * // const { ECRPUBLICClient, DeleteRepositoryPolicyCommand } = require("@aws-sdk/client-ecr-public"); // CommonJS import
 * const client = new ECRPUBLICClient(config);
 * const command = new DeleteRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteRepositoryPolicyCommandInput} for command's `input` shape.
 * @see {@link DeleteRepositoryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRPUBLICClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteRepositoryPolicyCommand = /** @class */ (function (_super) {
    __extends(DeleteRepositoryPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteRepositoryPolicyCommand(input) {
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
    DeleteRepositoryPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRPUBLICClient";
        var commandName = "DeleteRepositoryPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteRepositoryPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteRepositoryPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteRepositoryPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteRepositoryPolicyCommand(input, context);
    };
    DeleteRepositoryPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteRepositoryPolicyCommand(output, context);
    };
    return DeleteRepositoryPolicyCommand;
}($Command));
export { DeleteRepositoryPolicyCommand };
//# sourceMappingURL=DeleteRepositoryPolicyCommand.js.map