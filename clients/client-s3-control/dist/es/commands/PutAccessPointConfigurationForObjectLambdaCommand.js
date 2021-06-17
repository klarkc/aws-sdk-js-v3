import { __extends } from "tslib";
import { PutAccessPointConfigurationForObjectLambdaRequest } from "../models/models_0";
import { deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand, serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Replaces configuration for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to <code>PutAccessPointConfigurationForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPointConfigurationForObjectLambda.html">GetAccessPointConfigurationForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, PutAccessPointConfigurationForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, PutAccessPointConfigurationForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new PutAccessPointConfigurationForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutAccessPointConfigurationForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link PutAccessPointConfigurationForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutAccessPointConfigurationForObjectLambdaCommand = /** @class */ (function (_super) {
    __extends(PutAccessPointConfigurationForObjectLambdaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutAccessPointConfigurationForObjectLambdaCommand(input) {
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
    PutAccessPointConfigurationForObjectLambdaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "PutAccessPointConfigurationForObjectLambdaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutAccessPointConfigurationForObjectLambdaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutAccessPointConfigurationForObjectLambdaCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand(input, context);
    };
    PutAccessPointConfigurationForObjectLambdaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlPutAccessPointConfigurationForObjectLambdaCommand(output, context);
    };
    return PutAccessPointConfigurationForObjectLambdaCommand;
}($Command));
export { PutAccessPointConfigurationForObjectLambdaCommand };
//# sourceMappingURL=PutAccessPointConfigurationForObjectLambdaCommand.js.map