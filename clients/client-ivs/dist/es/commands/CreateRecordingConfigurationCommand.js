import { __extends } from "tslib";
import { CreateRecordingConfigurationRequest, CreateRecordingConfigurationResponse } from "../models/models_0";
import { deserializeAws_restJson1CreateRecordingConfigurationCommand, serializeAws_restJson1CreateRecordingConfigurationCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new recording configuration, used to enable recording to Amazon S3.</p>
 *          <p>
 *             <b>Known issue:</b> In the us-east-1 region, if you use the AWS
 *       CLI to create a recording configuration, it returns success even if the S3 bucket is in a
 *       different region. In this case, the <code>state</code> of the recording configuration is
 *         <code>CREATE_FAILED</code> (instead of <code>ACTIVE</code>). (In other regions, the CLI
 *       correctly returns failure if the bucket is in a different region.)</p>
 *          <p>
 *             <b>Workaround:</b> Ensure that your S3 bucket is in the same region as the recording
 *       configuration. If you create a recording configuration in a different region as your S3
 *       bucket, delete that recording configuration and create a new one with an S3 bucket from the
 *       correct region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { IvsClient, CreateRecordingConfigurationCommand } from "@aws-sdk/client-ivs"; // ES Modules import
 * // const { IvsClient, CreateRecordingConfigurationCommand } = require("@aws-sdk/client-ivs"); // CommonJS import
 * const client = new IvsClient(config);
 * const command = new CreateRecordingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateRecordingConfigurationCommandInput} for command's `input` shape.
 * @see {@link CreateRecordingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link IvsClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateRecordingConfigurationCommand = /** @class */ (function (_super) {
    __extends(CreateRecordingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateRecordingConfigurationCommand(input) {
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
    CreateRecordingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "IvsClient";
        var commandName = "CreateRecordingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateRecordingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateRecordingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateRecordingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1CreateRecordingConfigurationCommand(input, context);
    };
    CreateRecordingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1CreateRecordingConfigurationCommand(output, context);
    };
    return CreateRecordingConfigurationCommand;
}($Command));
export { CreateRecordingConfigurationCommand };
//# sourceMappingURL=CreateRecordingConfigurationCommand.js.map