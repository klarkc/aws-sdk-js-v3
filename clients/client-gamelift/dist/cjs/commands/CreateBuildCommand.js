"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateBuildCommand = void 0;
const models_0_1 = require("../models/models_0");
const Aws_json1_1_1 = require("../protocols/Aws_json1_1");
const middleware_serde_1 = require("@aws-sdk/middleware-serde");
const smithy_client_1 = require("@aws-sdk/smithy-client");
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
class CreateBuildCommand extends smithy_client_1.Command {
    // Start section: command_properties
    // End section: command_properties
    constructor(input) {
        // Start section: command_constructor
        super();
        this.input = input;
        // End section: command_constructor
    }
    /**
     * @internal
     */
    resolveMiddleware(clientStack, configuration, options) {
        this.middlewareStack.use(middleware_serde_1.getSerdePlugin(configuration, this.serialize, this.deserialize));
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const clientName = "GameLiftClient";
        const commandName = "CreateBuildCommand";
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog: models_0_1.CreateBuildInput.filterSensitiveLog,
            outputFilterSensitiveLog: models_0_1.CreateBuildOutput.filterSensitiveLog,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
    serialize(input, context) {
        return Aws_json1_1_1.serializeAws_json1_1CreateBuildCommand(input, context);
    }
    deserialize(output, context) {
        return Aws_json1_1_1.deserializeAws_json1_1CreateBuildCommand(output, context);
    }
}
exports.CreateBuildCommand = CreateBuildCommand;
//# sourceMappingURL=CreateBuildCommand.js.map