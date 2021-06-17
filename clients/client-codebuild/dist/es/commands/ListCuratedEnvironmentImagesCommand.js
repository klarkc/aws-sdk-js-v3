import { __extends } from "tslib";
import { ListCuratedEnvironmentImagesInput, ListCuratedEnvironmentImagesOutput } from "../models/models_0";
import { deserializeAws_json1_1ListCuratedEnvironmentImagesCommand, serializeAws_json1_1ListCuratedEnvironmentImagesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Gets information about Docker images that are managed by AWS CodeBuild.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, ListCuratedEnvironmentImagesCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, ListCuratedEnvironmentImagesCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new ListCuratedEnvironmentImagesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListCuratedEnvironmentImagesCommandInput} for command's `input` shape.
 * @see {@link ListCuratedEnvironmentImagesCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListCuratedEnvironmentImagesCommand = /** @class */ (function (_super) {
    __extends(ListCuratedEnvironmentImagesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListCuratedEnvironmentImagesCommand(input) {
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
    ListCuratedEnvironmentImagesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "ListCuratedEnvironmentImagesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListCuratedEnvironmentImagesInput.filterSensitiveLog,
            outputFilterSensitiveLog: ListCuratedEnvironmentImagesOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListCuratedEnvironmentImagesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListCuratedEnvironmentImagesCommand(input, context);
    };
    ListCuratedEnvironmentImagesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListCuratedEnvironmentImagesCommand(output, context);
    };
    return ListCuratedEnvironmentImagesCommand;
}($Command));
export { ListCuratedEnvironmentImagesCommand };
//# sourceMappingURL=ListCuratedEnvironmentImagesCommand.js.map