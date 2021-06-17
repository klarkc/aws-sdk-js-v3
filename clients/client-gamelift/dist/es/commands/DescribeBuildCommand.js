import { __extends } from "tslib";
import { DescribeBuildInput, DescribeBuildOutput } from "../models/models_0";
import { deserializeAws_json1_1DescribeBuildCommand, serializeAws_json1_1DescribeBuildCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves properties for a custom game build. To request a build resource, specify a
 *             build ID. If successful, an object containing the build properties is returned.</p>
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
 * import { GameLiftClient, DescribeBuildCommand } from "@aws-sdk/client-gamelift"; // ES Modules import
 * // const { GameLiftClient, DescribeBuildCommand } = require("@aws-sdk/client-gamelift"); // CommonJS import
 * const client = new GameLiftClient(config);
 * const command = new DescribeBuildCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link DescribeBuildCommandInput} for command's `input` shape.
 * @see {@link DescribeBuildCommandOutput} for command's `response` shape.
 * @see {@link GameLiftClientResolvedConfig | config} for command's `input` shape.
 *
 */
var DescribeBuildCommand = /** @class */ (function (_super) {
    __extends(DescribeBuildCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function DescribeBuildCommand(input) {
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
    DescribeBuildCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "GameLiftClient";
        var commandName = "DescribeBuildCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: DescribeBuildInput.filterSensitiveLog,
            outputFilterSensitiveLog: DescribeBuildOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    DescribeBuildCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1DescribeBuildCommand(input, context);
    };
    DescribeBuildCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1DescribeBuildCommand(output, context);
    };
    return DescribeBuildCommand;
}($Command));
export { DescribeBuildCommand };
//# sourceMappingURL=DescribeBuildCommand.js.map