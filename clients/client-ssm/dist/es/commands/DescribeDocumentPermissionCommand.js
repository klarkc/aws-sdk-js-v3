import { __extends } from "tslib";
import { DescribeDocumentPermissionRequest, DescribeDocumentPermissionResponse } from "../models/models_0";
import { deserializeAws_json1_1DescribeDocumentPermissionCommand, serializeAws_json1_1DescribeDocumentPermissionCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Describes the permissions for a Systems Manager document. If you created the document, you are the
 *    owner. If a document is shared, it can either be shared privately (by specifying a user's AWS
 *    account ID) or publicly (<i>All</i>). </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SSMClient, DescribeDocumentPermissionCommand } from "@aws-sdk/client-ssm"; // ES Modules import
 * // const { SSMClient, DescribeDocumentPermissionCommand } = require("@aws-sdk/client-ssm"); // CommonJS import
 * const client = new SSMClient(config);
 * const command = new DescribeDocumentPermissionCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeDocumentPermissionCommandInput} for command's `input` shape.
 * @see {@link DescribeDocumentPermissionCommandOutput} for command's `response` shape.
 * @see {@link SSMClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeDocumentPermissionCommand = /** @class */ (function (_super) {
    __extends(DescribeDocumentPermissionCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeDocumentPermissionCommand(input) {
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
    DescribeDocumentPermissionCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SSMClient";
        var commandName = "DescribeDocumentPermissionCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeDocumentPermissionRequest.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeDocumentPermissionResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeDocumentPermissionCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeDocumentPermissionCommand(input, context);
    };
    DescribeDocumentPermissionCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeDocumentPermissionCommand(output, context);
    };
    return DescribeDocumentPermissionCommand;
}($Command));
export { DescribeDocumentPermissionCommand };
//# sourceMappingURL=DescribeDocumentPermissionCommand.js.map