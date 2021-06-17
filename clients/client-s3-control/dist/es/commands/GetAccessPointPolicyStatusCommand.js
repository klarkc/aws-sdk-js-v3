import { __extends } from "tslib";
import { GetAccessPointPolicyStatusRequest, GetAccessPointPolicyStatusResult } from "../models/models_0";
import { deserializeAws_restXmlGetAccessPointPolicyStatusCommand, serializeAws_restXmlGetAccessPointPolicyStatusCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Indicates whether the specified access point currently has a policy that allows public access. For more information about public access through access points, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing Data Access with Amazon S3 access points</a> in the <i>Amazon S3 User Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, GetAccessPointPolicyStatusCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, GetAccessPointPolicyStatusCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new GetAccessPointPolicyStatusCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetAccessPointPolicyStatusCommandInput} for command's `input` shape.
 * @see {@link GetAccessPointPolicyStatusCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetAccessPointPolicyStatusCommand = /** @class */ (function (_super) {
    __extends(GetAccessPointPolicyStatusCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetAccessPointPolicyStatusCommand(input) {
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
    GetAccessPointPolicyStatusCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "GetAccessPointPolicyStatusCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetAccessPointPolicyStatusRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetAccessPointPolicyStatusResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetAccessPointPolicyStatusCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlGetAccessPointPolicyStatusCommand(input, context);
    };
    GetAccessPointPolicyStatusCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlGetAccessPointPolicyStatusCommand(output, context);
    };
    return GetAccessPointPolicyStatusCommand;
}($Command));
export { GetAccessPointPolicyStatusCommand };
//# sourceMappingURL=GetAccessPointPolicyStatusCommand.js.map