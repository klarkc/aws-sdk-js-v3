import { __extends } from "tslib";
import { UpdateScriptInput, UpdateScriptOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateScriptCommand, serializeAws_json1_1UpdateScriptCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates Realtime script metadata and content.</p>
 *         <p>To update script metadata, specify the script ID and provide updated name and/or
 *             version values. </p>
 *         <p>To update script content, provide an updated zip file by pointing to either a local
 *             file or an Amazon S3 bucket location. You can use either method regardless of how the
 *             original script was uploaded. Use the <i>Version</i> parameter to track
 *             updates to the script.</p>
 *         <p>If the call is successful, the updated metadata is stored in the script record and a
 *             revised script is uploaded to the Amazon GameLift service. Once the script is updated and
 *             acquired by a fleet instance, the new version is used for all new game sessions. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/realtime-intro.html">Amazon GameLift Realtime Servers</a>
 *         </p>
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
 * import { GameLiftClient, UpdateScriptCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateScriptCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateScriptCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateScriptCommandInput} for command's `input` shape.
 * @see {@link UpdateScriptCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateScriptCommand = /** @class */ (function (_super) {
    __extends(UpdateScriptCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateScriptCommand(input) {
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
    UpdateScriptCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "UpdateScriptCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateScriptInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateScriptOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateScriptCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateScriptCommand(input, context);
    };
    UpdateScriptCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateScriptCommand(output, context);
    };
    return UpdateScriptCommand;
}($Command));
export { UpdateScriptCommand };
//# sourceMappingURL=UpdateScriptCommand.js.map