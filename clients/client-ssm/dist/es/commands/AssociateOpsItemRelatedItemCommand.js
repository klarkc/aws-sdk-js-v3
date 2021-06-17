import { __extends } from "tslib";
import { AssociateOpsItemRelatedItemRequest, AssociateOpsItemRelatedItemResponse } from "../models/models_0";
import { deserializeAws_json1_1AssociateOpsItemRelatedItemCommand, serializeAws_json1_1AssociateOpsItemRelatedItemCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Associates a related resource to a Systems Manager OpsCenter OpsItem. For example, you can
 *    associate an Incident Manager incident or analysis with an OpsItem. Incident Manager is a
 *    capability of AWS Systems Manager.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, AssociateOpsItemRelatedItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, AssociateOpsItemRelatedItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new AssociateOpsItemRelatedItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link AssociateOpsItemRelatedItemCommandInput} for command's `input` shape.
 * @see {@link AssociateOpsItemRelatedItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var AssociateOpsItemRelatedItemCommand = /** @class */ (function (_super) {
    __extends(AssociateOpsItemRelatedItemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function AssociateOpsItemRelatedItemCommand(input) {
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
    AssociateOpsItemRelatedItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "AssociateOpsItemRelatedItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: AssociateOpsItemRelatedItemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: AssociateOpsItemRelatedItemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    AssociateOpsItemRelatedItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1AssociateOpsItemRelatedItemCommand(input, context);
    };
    AssociateOpsItemRelatedItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1AssociateOpsItemRelatedItemCommand(output, context);
    };
    return AssociateOpsItemRelatedItemCommand;
}($Command));
export { AssociateOpsItemRelatedItemCommand };
//# sourceMappingURL=AssociateOpsItemRelatedItemCommand.js.map