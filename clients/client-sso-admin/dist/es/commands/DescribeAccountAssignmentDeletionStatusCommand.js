import { __extends } from "tslib";
import { DescribeAccountAssignmentDeletionStatusRequest, DescribeAccountAssignmentDeletionStatusResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommand, serializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the status of the assignment deletion request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeAccountAssignmentDeletionStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeAccountAssignmentDeletionStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DescribeAccountAssignmentDeletionStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAssignmentDeletionStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAssignmentDeletionStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountAssignmentDeletionStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountAssignmentDeletionStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountAssignmentDeletionStatusCommand(input) {
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
    DescribeAccountAssignmentDeletionStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "DescribeAccountAssignmentDeletionStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountAssignmentDeletionStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccountAssignmentDeletionStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountAssignmentDeletionStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommand(input, context);
    };
    DescribeAccountAssignmentDeletionStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAccountAssignmentDeletionStatusCommand(output, context);
    };
    return DescribeAccountAssignmentDeletionStatusCommand;
}($Command));
export { DescribeAccountAssignmentDeletionStatusCommand };
//# sourceMappingURL=DescribeAccountAssignmentDeletionStatusCommand.js.map