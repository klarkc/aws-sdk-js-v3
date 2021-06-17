import { __extends } from "tslib";
import { GetAccessPointPolicyStatusForObjectLambdaRequest, GetAccessPointPolicyStatusForObjectLambdaResult, } from "../models/models_0";
import { deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand, serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Returns the status of the resource policy associated with an Object Lambda Access Point.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointPolicyStatusForObjectLambdaCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointPolicyStatusForObjectLambdaCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetAccessPointPolicyStatusForObjectLambdaCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessPointPolicyStatusForObjectLambdaCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointPolicyStatusForObjectLambdaCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccessPointPolicyStatusForObjectLambdaCommand = /** @class */ (function (_super) {
    __extends(GetAccessPointPolicyStatusForObjectLambdaCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccessPointPolicyStatusForObjectLambdaCommand(input) {
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
    GetAccessPointPolicyStatusForObjectLambdaCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "GetAccessPointPolicyStatusForObjectLambdaCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccessPointPolicyStatusForObjectLambdaRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccessPointPolicyStatusForObjectLambdaResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccessPointPolicyStatusForObjectLambdaCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand(input, context);
    };
    GetAccessPointPolicyStatusForObjectLambdaCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetAccessPointPolicyStatusForObjectLambdaCommand(output, context);
    };
    return GetAccessPointPolicyStatusForObjectLambdaCommand;
}($Command));
export { GetAccessPointPolicyStatusForObjectLambdaCommand };
//# sourceMappingURL=GetAccessPointPolicyStatusForObjectLambdaCommand.js.map