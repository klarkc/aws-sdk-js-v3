import { __extends } from "tslib";
import { GetOpsItemRequest, GetOpsItemResponse } from "../models/models_1";
import { deserializeAws_json1_1GetOpsItemCommand, serializeAws_json1_1GetOpsItemCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Get information about an OpsItem by using the ID. You must have permission in AWS Identity
 *    and Access Management (IAM) to view information about an OpsItem. For more information, see
 *     <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
 *     OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
 *    operational issues impacting the performance and health of their AWS resources. For more
 *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
 *     <i>AWS Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, GetOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, GetOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new GetOpsItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetOpsItemCommandInput} for command's `input` shape.
 * @see {@link GetOpsItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetOpsItemCommand = /** @class */ (function (_super) {
    __extends(GetOpsItemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetOpsItemCommand(input) {
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
    GetOpsItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "GetOpsItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetOpsItemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetOpsItemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetOpsItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetOpsItemCommand(input, context);
    };
    GetOpsItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetOpsItemCommand(output, context);
    };
    return GetOpsItemCommand;
}($Command));
export { GetOpsItemCommand };
//# sourceMappingURL=GetOpsItemCommand.js.map