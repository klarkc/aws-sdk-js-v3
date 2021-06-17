import { __extends } from "tslib";
import { DescribeAccountAssignmentCreationStatusRequest, DescribeAccountAssignmentCreationStatusResponse, } from "../models/models_0";
import { deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand, serializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the status of the assignment creation request.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSOAdminClient, DescribeAccountAssignmentCreationStatusCommand } from "@aws-sdk/client-sso-admin"; // ES Modules import
 * // const { SSOAdminClient, DescribeAccountAssignmentCreationStatusCommand } = require("@aws-sdk/client-sso-admin"); // CommonJS import
 * const client = new SSOAdminClient(config);
 * const command = new DescribeAccountAssignmentCreationStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeAccountAssignmentCreationStatusCommandInput} for command's `input` shape.
 * @see {@link DescribeAccountAssignmentCreationStatusCommandOutput} for command's `response` shape.
 * @see {@link SSOAdminClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeAccountAssignmentCreationStatusCommand = /** @class */ (function (_super) {
    __extends(DescribeAccountAssignmentCreationStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeAccountAssignmentCreationStatusCommand(input) {
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
    DescribeAccountAssignmentCreationStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSOAdminClient";
        var commandName = "DescribeAccountAssignmentCreationStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeAccountAssignmentCreationStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeAccountAssignmentCreationStatusResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeAccountAssignmentCreationStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand(input, context);
    };
    DescribeAccountAssignmentCreationStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeAccountAssignmentCreationStatusCommand(output, context);
    };
    return DescribeAccountAssignmentCreationStatusCommand;
}($Command));
export { DescribeAccountAssignmentCreationStatusCommand };
//# sourceMappingURL=DescribeAccountAssignmentCreationStatusCommand.js.map