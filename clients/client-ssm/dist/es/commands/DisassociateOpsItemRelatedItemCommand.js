import { __extends } from "tslib";
import { DisassociateOpsItemRelatedItemRequest, DisassociateOpsItemRelatedItemResponse } from "../models/models_1";
import { deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand, serializeAws_json1_1DisassociateOpsItemRelatedItemCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes the association between an OpsItem and a related resource. For example, this API
 *    action can delete an Incident Manager incident from an OpsItem. Incident Manager is a capability
 *    of AWS Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DisassociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DisassociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DisassociateOpsItemRelatedItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DisassociateOpsItemRelatedItemCommandInput} for command's `input` shape.
 * @see {@link DisassociateOpsItemRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DisassociateOpsItemRelatedItemCommand = /** @class */ (function (_super) {
    __extends(DisassociateOpsItemRelatedItemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DisassociateOpsItemRelatedItemCommand(input) {
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
    DisassociateOpsItemRelatedItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DisassociateOpsItemRelatedItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DisassociateOpsItemRelatedItemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DisassociateOpsItemRelatedItemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DisassociateOpsItemRelatedItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DisassociateOpsItemRelatedItemCommand(input, context);
    };
    DisassociateOpsItemRelatedItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DisassociateOpsItemRelatedItemCommand(output, context);
    };
    return DisassociateOpsItemRelatedItemCommand;
}($Command));
export { DisassociateOpsItemRelatedItemCommand };
//# sourceMappingURL=DisassociateOpsItemRelatedItemCommand.js.map