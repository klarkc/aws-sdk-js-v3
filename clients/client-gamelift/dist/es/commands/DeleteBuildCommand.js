import { __extends } from "tslib";
import { DeleteBuildInput } from "../models/models_0";
import { deserializeAws_json1_1DeleteBuildCommand, serializeAws_json1_1DeleteBuildCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Deletes a build. This operation permanently deletes the build resource and any uploaded
 *             build files. Deleting a build does not affect the status of any active fleets using the
 *             build, but you can no longer create new fleets with the deleted build.</p>
 *         <p>To delete a build, specify the build ID. </p>
 *         <p>
 *             <b>Learn more</b>
 *          </p>
 *         <p>
 *             <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/gamelift-build-intro.html">
 *                 Upload a Custom Server Build</a>
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
 * import { GameLiftClient, DeleteBuildCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DeleteBuildCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DeleteBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DeleteBuildCommandInput} for command's `input` shape.
 * @see {@link DeleteBuildCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DeleteBuildCommand = /** @class */ (function (_super) {
    __extends(DeleteBuildCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DeleteBuildCommand(input) {
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
    DeleteBuildCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DeleteBuildCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DeleteBuildInput.filterSensitiveLog,
            outputFilterSensitiveLog: function (output) { return output; },
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DeleteBuildCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DeleteBuildCommand(input, context);
    };
    DeleteBuildCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DeleteBuildCommand(output, context);
    };
    return DeleteBuildCommand;
}($Command));
export { DeleteBuildCommand };
//# sourceMappingURL=DeleteBuildCommand.js.map