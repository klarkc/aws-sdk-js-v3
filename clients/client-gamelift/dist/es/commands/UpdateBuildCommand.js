import { __extends } from "tslib";
import { UpdateBuildInput, UpdateBuildOutput } from "../models/models_0";
import { deserializeAws_json1_1UpdateBuildCommand, serializeAws_json1_1UpdateBuildCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Updates metadata in a build resource, including the build name and version. To update
 *             the metadata, specify the build ID to update and provide the new values. If successful,
 *             a build object containing the updated metadata is returned.</p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">
 *             Upload a Custom Server Build</a>
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
 * import { GameLiftClient, UpdateBuildCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, UpdateBuildCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new UpdateBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link UpdateBuildCommandInput} for command's `input` shape.
 * @see {@link UpdateBuildCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var UpdateBuildCommand = /** @class */ (function (_super) {
    __extends(UpdateBuildCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function UpdateBuildCommand(input) {
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
    UpdateBuildCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "UpdateBuildCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: UpdateBuildInput.filterSensitiveLog,
            outputFilterSensitiveLog: UpdateBuildOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    UpdateBuildCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1UpdateBuildCommand(input, context);
    };
    UpdateBuildCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1UpdateBuildCommand(output, context);
    };
    return UpdateBuildCommand;
}($Command));
export { UpdateBuildCommand };
//# sourceMappingURL=UpdateBuildCommand.js.map