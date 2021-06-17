import { __extends } from "tslib";
import { DescribeLifecycleConfigurationRequest, LifecycleConfigurationDescription } from "../models/models_0";
import { deserializeAws_restJson1DescribeLifecycleConfigurationCommand, serializeAws_restJson1DescribeLifecycleConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the current <code>LifecycleConfiguration</code> object for the specified Amazon
 *       EFS file system. EFS lifecycle management uses the <code>LifecycleConfiguration</code> object
 *       to identify which files to move to the EFS Infrequent Access (IA) storage class. For a file system
 *       without a <code>LifecycleConfiguration</code> object, the call returns an empty array in the
 *       response.</p>
 *          <p>This operation requires permissions for the
 *         <code>elasticfilesystem:DescribeLifecycleConfiguration</code> operation.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EFSClient, DescribeLifecycleConfigurationCommand } from "@aws-sdk/client-efs"; // ES Modules import
 * // const { EFSClient, DescribeLifecycleConfigurationCommand } = require("@aws-sdk/client-efs"); // CommonJS import
 * const client = new EFSClient(config);
 * const command = new DescribeLifecycleConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeLifecycleConfigurationCommandInput} for command's `input` shape.
 * @see {@link DescribeLifecycleConfigurationCommandOutput} for command's `response` shape.
 * @see {@link EFSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeLifecycleConfigurationCommand = /** @class */ (function (_super) {
    __extends(DescribeLifecycleConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeLifecycleConfigurationCommand(input) {
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
    DescribeLifecycleConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EFSClient";
        var commandName = "DescribeLifecycleConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeLifecycleConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: LifecycleConfigurationDescription.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeLifecycleConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1DescribeLifecycleConfigurationCommand(input, context);
    };
    DescribeLifecycleConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1DescribeLifecycleConfigurationCommand(output, context);
    };
    return DescribeLifecycleConfigurationCommand;
}($Command));
export { DescribeLifecycleConfigurationCommand };
//# sourceMappingURL=DescribeLifecycleConfigurationCommand.js.map