import { __extends } from "tslib";
import { PutLoggingConfigurationRequest, PutLoggingConfigurationResponse } from "../models/models_0";
import { deserializeAws_json1_1PutLoggingConfigurationCommand, serializeAws_json1_1PutLoggingConfigurationCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <note>
 *             <p>This is <b>AWS WAF Classic</b> documentation. For
 *       more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/classic-waf-chapter.html">AWS
 *       WAF Classic</a> in the developer guide.</p>
 *             <p>
 *                <b>For the latest version of AWS
 *       WAF</b>, use the AWS WAFV2 API and see the <a href="https://docs.aws.amazon.com/waf/latest/developerguide/waf-chapter.html">AWS WAF Developer Guide</a>. With the latest version, AWS WAF has a single set of endpoints for regional and global use. </p>
 *          </note>
 *          <p>Associates a <a>LoggingConfiguration</a> with a specified web ACL.</p>
 * 	        <p>You can access information about all traffic that AWS WAF inspects using the following
 *          steps:</p>
 * 	        <ol>
 *             <li>
 *                <p>Create an Amazon Kinesis Data
 *                Firehose. </p>
 * 	              <p>Create the data firehose with a PUT source and in the region that you are operating. However, if you are capturing logs for Amazon CloudFront, always create the firehose in US East (N. Virginia). </p>
 * 	              <note>
 *                   <p>Do not create the data firehose using a <code>Kinesis stream</code> as your source.</p>
 *                </note>
 *             </li>
 *             <li>
 *                <p>Associate that firehose to your web ACL using a <code>PutLoggingConfiguration</code> request.</p>
 *             </li>
 *          </ol>
 *
 *          <p>When you successfully enable logging using a <code>PutLoggingConfiguration</code> request, AWS WAF will create a service linked role with the necessary permissions to write logs to the Amazon Kinesis Data Firehose.  For more information, see <a href="https://docs.aws.amazon.com/waf/latest/developerguide/logging.html">Logging Web ACL Traffic Information</a> in the <i>AWS WAF Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { WAFClient, PutLoggingConfigurationCommand } from "@aws-sdk/client-waf"; // ES Modules import
 * // const { WAFClient, PutLoggingConfigurationCommand } = require("@aws-sdk/client-waf"); // CommonJS import
 * const client = new WAFClient(config);
 * const command = new PutLoggingConfigurationCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutLoggingConfigurationCommandInput} for command's `input` shape.
 * @see {@link PutLoggingConfigurationCommandOutput} for command's `response` shape.
 * @see {@link WAFClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutLoggingConfigurationCommand = /** @class */ (function (_super) {
    __extends(PutLoggingConfigurationCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutLoggingConfigurationCommand(input) {
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
    PutLoggingConfigurationCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "WAFClient";
        var commandName = "PutLoggingConfigurationCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutLoggingConfigurationRequest.filterSensitiveLog,
            outputFilterSensitiveLog: PutLoggingConfigurationResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutLoggingConfigurationCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutLoggingConfigurationCommand(input, context);
    };
    PutLoggingConfigurationCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutLoggingConfigurationCommand(output, context);
    };
    return PutLoggingConfigurationCommand;
}($Command));
export { PutLoggingConfigurationCommand };
//# sourceMappingURL=PutLoggingConfigurationCommand.js.map