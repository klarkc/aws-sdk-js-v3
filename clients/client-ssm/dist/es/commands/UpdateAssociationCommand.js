import { __extends } from "tslib";
import { UpdateAssociationRequest, UpdateAssociationResult } from "../models/models_1";
import { deserializeAws_json1_1UpdateAssociationCommand, serializeAws_json1_1UpdateAssociationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates an association. You can update the association name and version, the document
 *    version, schedule, parameters, and Amazon S3 output. </p>
 *          <p>In order to call this API action, your IAM user account, group, or role must be configured
 *    with permission to call the <a>DescribeAssociation</a> API action. If you don't have
 *    permission to call DescribeAssociation, then you receive the following error: <code>An error
 *     occurred (AccessDeniedException) when calling the UpdateAssociation operation: User:
 *     <user_arn> is not authorized to perform: ssm:DescribeAssociation on resource:
 *     <resource_arn></code>
 *          </p>
 *          <important>
 *             <p>When you update an association, the association immediately runs against the specified
 *     targets.</p>
 *          </important>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, UpdateAssociationCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, UpdateAssociationCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new UpdateAssociationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateAssociationCommandInput} for command's `input` shape.
 * @see {@link UpdateAssociationCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateAssociationCommand = /** @class */ (function (_super) {
    __extends(UpdateAssociationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateAssociationCommand(input) {
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
    UpdateAssociationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "UpdateAssociationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateAssociationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateAssociationResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateAssociationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateAssociationCommand(input, context);
    };
    UpdateAssociationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateAssociationCommand(output, context);
    };
    return UpdateAssociationCommand;
}($Command));
export { UpdateAssociationCommand };
//# sourceMappingURL=UpdateAssociationCommand.js.map