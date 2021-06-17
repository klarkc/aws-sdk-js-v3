import { __extends } from "tslib";
import { RequestUploadCredentialsInput, RequestUploadCredentialsOutput } from "../models/models_0";
import { deserializeAws_json1_1RequestUploadCredentialsCommand, serializeAws_json1_1RequestUploadCredentialsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves a fresh set of credentials for use when uploading a new set of game build
 *             files to Amazon GameLift's Amazon S3. This is done as part of the build creation process; see
 *                 <a>CreateBuild</a>.</p>
 *         <p>To request new credentials, specify the build ID as returned with an initial
 *                 <code>CreateBuild</code> request. If successful, a new set of credentials are
 *             returned, along with the S3 storage location associated with the build ID.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build">
 *             Create a Build with Files in S3</a>
 *         </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateBuild</a> |
 *                     <a>ListBuilds</a> |
 *                     <a>DescribeBuild</a> |
 *                     <a>UpdateBuild</a> |
 *                     <a>DeleteBuild</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, RequestUploadCredentialsCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, RequestUploadCredentialsCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new RequestUploadCredentialsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link RequestUploadCredentialsCommandInput} for command's `input` shape.
 * @see {@link RequestUploadCredentialsCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var RequestUploadCredentialsCommand = /** @class */ (function (_super) {
    __extends(RequestUploadCredentialsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function RequestUploadCredentialsCommand(input) {
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
    RequestUploadCredentialsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "RequestUploadCredentialsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: RequestUploadCredentialsInput.filterSensitiveLog,
            outputFilterSensitiveLog: RequestUploadCredentialsOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    RequestUploadCredentialsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1RequestUploadCredentialsCommand(input, context);
    };
    RequestUploadCredentialsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1RequestUploadCredentialsCommand(output, context);
    };
    return RequestUploadCredentialsCommand;
}($Command));
export { RequestUploadCredentialsCommand };
//# sourceMappingURL=RequestUploadCredentialsCommand.js.map