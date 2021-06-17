import { __extends } from "tslib";
import { GetAccessPointConfigurationForObjectLambdaRequest, GetAccessPointConfigurationForObjectLambdaResult, } from "../models/models_0";
import { deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand, serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns configuration for an Object Lambda Access Point.</p>
 *          <p>The following actions are related to <code>GetAccessPointConfigurationForObjectLambda</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_PutAccessPointConfigurationForObjectLambda.html">PutAccessPointConfigurationForObjectLambda</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointConfigurationForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointConfigurationForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetAccessPointConfigurationForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessPointConfigurationForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointConfigurationForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccessPointConfigurationForObjectLambdaCommand = /** @class */ (function (_super) {
    __extends(GetAccessPointConfigurationForObjectLambdaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccessPointConfigurationForObjectLambdaCommand(input) {
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
    GetAccessPointConfigurationForObjectLambdaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "GetAccessPointConfigurationForObjectLambdaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccessPointConfigurationForObjectLambdaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccessPointConfigurationForObjectLambdaResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccessPointConfigurationForObjectLambdaCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand(input, context);
    };
    GetAccessPointConfigurationForObjectLambdaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetAccessPointConfigurationForObjectLambdaCommand(output, context);
    };
    return GetAccessPointConfigurationForObjectLambdaCommand;
}($Command));
export { GetAccessPointConfigurationForObjectLambdaCommand };
//# sourceMappingURL=GetAccessPointConfigurationForObjectLambdaCommand.js.map