import { __extends } from "tslib";
import { DeleteWorkforceRequest, DeleteWorkforceResponse } from "../models/models_1";
import { deserializeAws_json1_1DeleteWorkforceCommand, serializeAws_json1_1DeleteWorkforceCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Use this operation to delete a workforce.</p>
 *
 *          <p>If you want to create a new workforce in an AWS Region where
 *       a workforce already exists, use this operation to delete the
 *       existing workforce and then use
 *       to create a new workforce.</p>
 *          <important>
 *             <p>If a private workforce contains one or more work teams, you must use
 *             the
 *             operation to delete all work teams before you delete the workforce.
 *             If you try to delete a workforce that contains one or more work teams,
 *             you will recieve a <code>ResourceInUse</code> error.</p>
 *         </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, DeleteWorkforceCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, DeleteWorkforceCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new DeleteWorkforceCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteWorkforceCommandInput} for command's `input` shape.
 * @see {@link DeleteWorkforceCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteWorkforceCommand = /** @class */ (function (_super) {
    __extends(DeleteWorkforceCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteWorkforceCommand(input) {
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
    DeleteWorkforceCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "DeleteWorkforceCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteWorkforceRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteWorkforceResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteWorkforceCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteWorkforceCommand(input, context);
    };
    DeleteWorkforceCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteWorkforceCommand(output, context);
    };
    return DeleteWorkforceCommand;
}($Command));
export { DeleteWorkforceCommand };
//# sourceMappingURL=DeleteWorkforceCommand.js.map