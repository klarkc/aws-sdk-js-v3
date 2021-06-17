import { __extends } from "tslib";
import { CancelImportTaskRequest, CancelImportTaskResult } from "../models/models_0";
import { deserializeAws_ec2CancelImportTaskCommand, serializeAws_ec2CancelImportTaskCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Cancels an in-process import virtual machine or import snapshot task.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CancelImportTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CancelImportTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CancelImportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CancelImportTaskCommandInput} for command's `input` shape.
 * @see {@link CancelImportTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CancelImportTaskCommand = /** @class */ (function (_super) {
    __extends(CancelImportTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CancelImportTaskCommand(input) {
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
    CancelImportTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CancelImportTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CancelImportTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CancelImportTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CancelImportTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CancelImportTaskCommand(input, context);
    };
    CancelImportTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CancelImportTaskCommand(output, context);
    };
    return CancelImportTaskCommand;
}($Command));
export { CancelImportTaskCommand };
//# sourceMappingURL=CancelImportTaskCommand.js.map