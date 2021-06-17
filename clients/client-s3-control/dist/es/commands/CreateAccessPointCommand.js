import { __extends } from "tslib";
import { CreateAccessPointRequest, CreateAccessPointResult } from "../models/models_0";
import { deserializeAws_restXmlCreateAccessPointCommand, serializeAws_restXmlCreateAccessPointCommand, } from "../protocols/Aws_restXml";
import { getProcessArnablesPlugin } from "@aws-sdk/middleware-sdk-s3-control";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an access point and associates it with the specified bucket. For more information, see
 *          <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points.html">Managing Data Access with Amazon S3 Access
 *             Points</a> in the <i>Amazon S3 User Guide</i>.</p>
 *          <p></p>
 *          <note>
 *             <p>S3 on Outposts only supports VPC-style access points.
 *          </p>
 *             <p>For more information, see <a href="https://docs.aws.amazon.com/AmazonS3/latest/userguide/S3onOutposts.html">
 *          Accessing Amazon S3 on Outposts using virtual private cloud (VPC) only access points</a> in
 *          the <i>Amazon S3 User Guide</i>.</p>
 *          </note>
 *          <p>All Amazon S3 on Outposts REST API requests for this action require an additional parameter of <code>x-amz-outpost-id</code> to be passed with the request and an S3 on Outposts endpoint hostname prefix instead of <code>s3-control</code>. For an example of the request syntax for Amazon S3 on Outposts that uses the S3 on Outposts endpoint hostname prefix and the <code>x-amz-outpost-id</code> derived using the access point ARN, see the <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_CreateAccessPoint.html#API_control_CreateAccessPoint_Examples">Examples</a> section.</p>
 *          <p></p>
 *          <p>The following actions are related to <code>CreateAccessPoint</code>:</p>
 *          <ul>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_GetAccessPoint.html">GetAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_DeleteAccessPoint.html">DeleteAccessPoint</a>
 *                </p>
 *             </li>
 *             <li>
 *                <p>
 *                   <a href="https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_ListAccessPoints.html">ListAccessPoints</a>
 *                </p>
 *             </li>
 *          </ul>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { S3ControlClient, CreateAccessPointCommand } from "@aws-sdk/client-s3-control"; // ES Modules import
 * // const { S3ControlClient, CreateAccessPointCommand } = require("@aws-sdk/client-s3-control"); // CommonJS import
 * const client = new S3ControlClient(config);
 * const command = new CreateAccessPointCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateAccessPointCommandInput} for command's `input` shape.
 * @see {@link CreateAccessPointCommandOutput} for command's `response` shape.
 * @see {@link S3ControlClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateAccessPointCommand = /** @class */ (function (_super) {
    __extends(CreateAccessPointCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateAccessPointCommand(input) {
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
    CreateAccessPointCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        this.middlewareStack.use(getProcessArnablesPlugin(configuration));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "S3ControlClient";
        var commandName = "CreateAccessPointCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateAccessPointRequest.filterSensitiveLog,
            outputFilterSensitiveLog: CreateAccessPointResult.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateAccessPointCommand.prototype.serialize = function (input, context) {
        return serializeAws_restXmlCreateAccessPointCommand(input, context);
    };
    CreateAccessPointCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restXmlCreateAccessPointCommand(output, context);
    };
    return CreateAccessPointCommand;
}($Command));
export { CreateAccessPointCommand };
//# sourceMappingURL=CreateAccessPointCommand.js.map