import { __extends } from "tslib";
import { CreateScriptInput, CreateScriptOutput } from "../models/models_0";
import { deserializeAws_json1_1CreateScriptCommand, serializeAws_json1_1CreateScriptCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates a new script record for your Realtime Servers script. Realtime scripts are JavaScript that
 *             provide configuration settings and optional custom game logic for your game. The script
 *             is deployed when you create a Realtime Servers fleet to host your game sessions. Script logic is
 *             executed during an active game session. </p>
 *         <p>To create a new script record, specify a script name and provide the script file(s).
 *             The script files and all dependencies must be zipped into a single file. You can pull
 *             the zip file from either of these locations: </p>
 *         <ul>
 *             <li>
 *                <p>A locally available directory. Use the <i>ZipFile</i> parameter for this
 *                     option.</p>
 *             </li>
 *             <li>
 *                <p>An Amazon Simple Storage Service (Amazon S3) bucket under your AWS account. Use the
 *                         <i>StorageLocation</i> parameter for this option. You'll need
 *                     to have an Identity Access Management (IAM) role that allows the Amazon GameLift
 *                     service to access your S3 bucket. </p>
 *             </li>
 *          </ul>
 *         <p>If the call is successful, a new script record is created with a unique script ID. If the
 *             script file is provided as a local file, the file is uploaded to an Amazon GameLift-owned S3 bucket
 *             and the script record's storage location reflects this location. If the script file is provided
 *             as an S3 bucket, Amazon GameLift accesses the file at this storage location as needed for deployment.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/setting-up-role.html">Set Up a Role for Amazon GameLift Access</a>
 *          </p>
 *         <p>
 *             <b>Related actions</b>
 *          </p>
 *                     <p>
 *             <a>CreateScript</a> |
 *                     <a>ListScripts</a> |
 *                     <a>DescribeScript</a> |
 *                     <a>UpdateScript</a> |
 *                     <a>DeleteScript</a> |
 *                     <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a>
 *          </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { GameLiftClient, CreateScriptCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, CreateScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new CreateScriptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link CreateScriptCommandInput} for command's `input` shape.
 * @see {@link CreateScriptCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var CreateScriptCommand = /** @class */ (function (_super) {
    __extends(CreateScriptCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function CreateScriptCommand(input) {
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
    CreateScriptCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "CreateScriptCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: CreateScriptInput.filterSensitiveLog,
            outputFilterSensitiveLog: CreateScriptOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    CreateScriptCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1CreateScriptCommand(input, context);
    };
    CreateScriptCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1CreateScriptCommand(output, context);
    };
    return CreateScriptCommand;
}($Command));
export { CreateScriptCommand };
//# sourceMappingURL=CreateScriptCommand.js.map