import { __extends } from "tslib";
import { DeleteAssociationRequest, DeleteAssociationResult } from "../models/models_0";
import { deserializeAws_json1_1DeleteAssociationCommand, serializeAws_json1_1DeleteAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Disassociates the specified Systems Manager document from the specified instance.</p>
 *          <p>When you disassociate a document from an instance, it does not change the configuration of
 *    the instance. To change the configuration state of an instance after you disassociate a document,
 *    you must create a new document with the desired configuration and associate it with the
 *    instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DeleteAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DeleteAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DeleteAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteAssociationCommandInput} for command's `input` shape.
 * @see {@link DeleteAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteAssociationCommand = /** @class */ (function (_super) {
    __extends(DeleteAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteAssociationCommand(input) {
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
    DeleteAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DeleteAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DeleteAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteAssociationCommand(input, context);
    };
    DeleteAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteAssociationCommand(output, context);
    };
    return DeleteAssociationCommand;
}($Command));
export { DeleteAssociationCommand };
//# sourceMappingURL=DeleteAssociationCommand.js.map