import { __extends } from "tslib";
import { UpdateAssociationStatusRequest, UpdateAssociationStatusResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateAssociationStatusCommand, serializeAws_json1_1UpdateAssociationStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates the status of the Systems Manager document associated with the specified instance.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateAssociationStatusCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateAssociationStatusCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateAssociationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssociationStatusCommandInput} for command's `input` shape.
 * @see {@link UpdateAssociationStatusCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssociationStatusCommand = /** @class */ (function (_super) {
    __extends(UpdateAssociationStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAssociationStatusCommand(input) {
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
    UpdateAssociationStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateAssociationStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAssociationStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAssociationStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAssociationStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAssociationStatusCommand(input, context);
    };
    UpdateAssociationStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAssociationStatusCommand(output, context);
    };
    return UpdateAssociationStatusCommand;
}($Command));
export { UpdateAssociationStatusCommand };
//# sourceMappingURL=UpdateAssociationStatusCommand.js.map