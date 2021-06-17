import { __extends } from "tslib";
import { UpdateOpsItemRequest, UpdateOpsItemResponse } from "../models/models_2";
import { deserializeAws_json1_1UpdateOpsItemCommand, serializeAws_json1_1UpdateOpsItemCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Edit or change an OpsItem. You must have permission in AWS Identity and Access Management
 *    (IAM) to update an OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
 *     OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
 *    operational issues impacting the performance and health of their AWS resources. For more
 *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
 *     <i>AWS Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateOpsItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateOpsItemCommandInput} for command's `input` shape.
 * @see {@link UpdateOpsItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateOpsItemCommand = /** @class */ (function (_super) {
    __extends(UpdateOpsItemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateOpsItemCommand(input) {
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
    UpdateOpsItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateOpsItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateOpsItemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateOpsItemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateOpsItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateOpsItemCommand(input, context);
    };
    UpdateOpsItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateOpsItemCommand(output, context);
    };
    return UpdateOpsItemCommand;
}($Command));
export { UpdateOpsItemCommand };
//# sourceMappingURL=UpdateOpsItemCommand.js.map