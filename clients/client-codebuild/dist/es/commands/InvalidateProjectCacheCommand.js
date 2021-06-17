import { __extends } from "tslib";
import { InvalidateProjectCacheInput, InvalidateProjectCacheOutput } from "../models/models_0";
import { deserializeAws_json1_1InvalidateProjectCacheCommand, serializeAws_json1_1InvalidateProjectCacheCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Resets the cache for a project.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CodeBuildClient, InvalidateProjectCacheCommand } from "@aws-sdk/client-codebuild"; // ES Modules import
 * // const { CodeBuildClient, InvalidateProjectCacheCommand } = require("@aws-sdk/client-codebuild"); // CommonJS import
 * const client = new CodeBuildClient(config);
 * const command = new InvalidateProjectCacheCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link InvalidateProjectCacheCommandInput} for command's `input` shape.
 * @see {@link InvalidateProjectCacheCommandOutput} for command's `response` shape.
 * @see {@link CodeBuildClientResolvedConfig | config} for command's `input` shape.
 *
 */
var InvalidateProjectCacheCommand = /** @class */ (function (_super) {
    __extends(InvalidateProjectCacheCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function InvalidateProjectCacheCommand(input) {
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
    InvalidateProjectCacheCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CodeBuildClient";
        var commandName = "InvalidateProjectCacheCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: InvalidateProjectCacheInput.filterSensitiveLog,
            outputFilterSensitiveLog: InvalidateProjectCacheOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    InvalidateProjectCacheCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1InvalidateProjectCacheCommand(input, context);
    };
    InvalidateProjectCacheCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1InvalidateProjectCacheCommand(output, context);
    };
    return InvalidateProjectCacheCommand;
}($Command));
export { InvalidateProjectCacheCommand };
//# sourceMappingURL=InvalidateProjectCacheCommand.js.map