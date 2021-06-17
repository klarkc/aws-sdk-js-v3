import { __extends } from "tslib";
import { CreateOpsItemRequest, CreateOpsItemResponse } from "../models/models_0";
import { deserializeAws_json1_1CreateOpsItemCommand, serializeAws_json1_1CreateOpsItemCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new OpsItem. You must have permission in AWS Identity and Access Management (IAM)
 *    to create a new OpsItem. For more information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter-getting-started.html">Getting started with
 *     OpsCenter</a> in the <i>AWS Systems Manager User Guide</i>.</p>
 *          <p>Operations engineers and IT professionals use OpsCenter to view, investigate, and remediate
 *    operational issues impacting the performance and health of their AWS resources. For more
 *    information, see <a href="https://docs.aws.amazon.com/systems-manager/latest/userguide/OpsCenter.html">AWS Systems Manager OpsCenter</a> in the
 *     <i>AWS Systems Manager User Guide</i>. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, CreateOpsItemCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, CreateOpsItemCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new CreateOpsItemCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateOpsItemCommandInput} for command's `input` shape.
 * @see {@link CreateOpsItemCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateOpsItemCommand = /** @class */ (function (_super) {
    __extends(CreateOpsItemCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateOpsItemCommand(input) {
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
    CreateOpsItemCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "CreateOpsItemCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateOpsItemRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateOpsItemResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateOpsItemCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateOpsItemCommand(input, context);
    };
    CreateOpsItemCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateOpsItemCommand(output, context);
    };
    return CreateOpsItemCommand;
}($Command));
export { CreateOpsItemCommand };
//# sourceMappingURL=CreateOpsItemCommand.js.map