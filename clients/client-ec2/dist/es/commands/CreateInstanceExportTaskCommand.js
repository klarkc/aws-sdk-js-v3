import { __extends } from "tslib";
import { CreateInstanceExportTaskRequest, CreateInstanceExportTaskResult } from "../models/models_0";
import { deserializeAws_ec2CreateInstanceExportTaskCommand, serializeAws_ec2CreateInstanceExportTaskCommand, } from "../protocols/Aws_ec2";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Exports a running or stopped instance to an Amazon S3 bucket.</p>
 *          <p>For information about the supported operating systems, image formats, and known limitations
 *    for the types of instances you can export, see <a href="https://docs.aws.amazon.com/vm-import/latest/userguide/vmexport.html">Exporting an instance as a VM Using VM Import/Export</a>
 *    in the <i>VM Import/Export User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EC2Client, CreateInstanceExportTaskCommand } from "@aws-sdk/client-ec2"; // ES Modules import
 * // const { EC2Client, CreateInstanceExportTaskCommand } = require("@aws-sdk/client-ec2"); // CommonJS import
 * const client = new EC2Client(config);
 * const command = new CreateInstanceExportTaskCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateInstanceExportTaskCommandInput} for command's `input` shape.
 * @see {@link CreateInstanceExportTaskCommandOutput} for command's `response` shape.
 * @see {@link EC2ClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateInstanceExportTaskCommand = /** @class */ (function (_super) {
    __extends(CreateInstanceExportTaskCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateInstanceExportTaskCommand(input) {
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
    CreateInstanceExportTaskCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EC2Client";
        var commandName = "CreateInstanceExportTaskCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateInstanceExportTaskRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateInstanceExportTaskResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateInstanceExportTaskCommand.prototype.serialize = function (input, context) {
        return serializeAws_ec2CreateInstanceExportTaskCommand(input, context);
    };
    CreateInstanceExportTaskCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_ec2CreateInstanceExportTaskCommand(output, context);
    };
    return CreateInstanceExportTaskCommand;
}($Command));
export { CreateInstanceExportTaskCommand };
//# sourceMappingURL=CreateInstanceExportTaskCommand.js.map