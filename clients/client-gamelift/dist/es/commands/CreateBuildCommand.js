import { __extends } from "tslib";
import { CreateBuildInput, CreateBuildOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateBuildCommand, serializeAws_json1_1CreateBuildCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new Amazon GameLift build resource for your game server binary files. Game server
 *             binaries must be combined into a zip file for use with Amazon GameLift. </p>
 *         <important>
 *             <p>When setting up a new game build for GameLift, we recommend using the AWS CLI
 *                 command <b>
 *                   <a href="https://docs.aws.amazon.com/cli/latest/reference/gamelift/upload-build.html">upload-build</a>
 *                </b>. This helper command combines two tasks: (1) it
 *                 uploads your build files from a file directory to a GameLift Amazon S3 location, and (2)
 *                 it creates a new build resource. </p>
 *         </important>
 *         <p>The <code>CreateBuild</code> operation can used in the following scenarios:</p>
 *         <ul>
 *             <li>
 *                 <p>To create a new game build with build files that are in an Amazon S3 location under
 *                     an AWS account that you control. To use this option, you must first give Amazon GameLift
 *                     access to the Amazon S3 bucket. With permissions in place, call
 *                         <code>CreateBuild</code> and specify a build name, operating system, and the
 *                     Amazon S3 storage location of your game build.</p>
 *             </li>
 *             <li>
 *                 <p>To directly upload your build files to a GameLift Amazon S3 location. To use this
 *                     option, first call <code>CreateBuild</code> and specify a build name and
 *                     operating system. This operation creates a new build resource and also returns an
 *                     Amazon S3 location with temporary access credentials. Use the credentials to manually
 *                     upload your build files to the specified Amazon S3 location. For more information,
 *                     see <a href="https://docs.aws.amazon.com/AmazonS3/latest/dev/UploadingObjects.html">Uploading Objects</a> in the <i>Amazon S3 Developer
 *                         Guide</i>. Build files can be uploaded to the GameLift Amazon S3 location
 *                     once only; that can't be updated. </p>
 *             </li>
 *          </ul>
 *         <p>If successful, this operation creates a new build resource with a unique build ID and
 *             places it in <code>INITIALIZED</code> status. A build must be in <code>READY</code>
 *             status before you can create fleets with it.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">Uploading Your
 *                 Game</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-cli-uploading.html#gamelift-build-cli-uploading-create-build"> Create a Build with Files in Amazon S3</a>
 *          </p>
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
 * import { GameLiftClient, CreateBuildCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateBuildCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateBuildCommandInput} for command's `input` shape.
 * @see {@link CreateBuildCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateBuildCommand = /** @class */ (function (_super) {
    __extends(CreateBuildCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateBuildCommand(input) {
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
    CreateBuildCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "CreateBuildCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateBuildInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateBuildOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateBuildCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateBuildCommand(input, context);
    };
    CreateBuildCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateBuildCommand(output, context);
    };
    return CreateBuildCommand;
}($Command));
export { CreateBuildCommand };
//# sourceMappingURL=CreateBuildCommand.js.map