import { __extends } from "tslib";
import { DeleteConformancePackRequest } from "../models/models_0";
import { deserializeAws_json1_1DeleteConformancePackCommand, serializeAws_json1_1DeleteConformancePackCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the specified conformance pack and all the AWS Config rules, remediation actions, and all evaluation results within that
 * 			conformance pack.</p>
 * 		       <p>AWS Config sets the conformance pack to <code>DELETE_IN_PROGRESS</code> until the deletion is complete.
 * 			You cannot update a conformance pack while it is in this state.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ConfigServiceClient, DeleteConformancePackCommand } from "@aws-sdk/client-config-service"; // ES Modules import
 * // const { ConfigServiceClient, DeleteConformancePackCommand } = require("@aws-sdk/client-config-service"); // CommonJS import
 * const client = new ConfigServiceClient(config);
 * const command = new DeleteConformancePackCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteConformancePackCommandInput} for command's `input` shape.
 * @see {@link DeleteConformancePackCommandOutput} for command's `response` shape.
 * @see {@link ConfigServiceClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteConformancePackCommand = /** @class */ (function (_super) {
    __extends(DeleteConformancePackCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteConformancePackCommand(input) {
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
    DeleteConformancePackCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ConfigServiceClient";
        var commandName = "DeleteConformancePackCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteConformancePackRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteConformancePackCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteConformancePackCommand(input, context);
    };
    DeleteConformancePackCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteConformancePackCommand(output, context);
    };
    return DeleteConformancePackCommand;
}($Command));
export { DeleteConformancePackCommand };
//# sourceMappingURL=DeleteConformancePackCommand.js.map