import { __extends } from "tslib";
import { BuildSuggestersRequest, BuildSuggestersResponse } from "../models/models_0";
import { deserializeAws_queryBuildSuggestersCommand, serializeAws_queryBuildSuggestersCommand, } from "../protocols/Aws_query";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Indexes the search suggestions. For more information, see <a href="http://docs.aws.amazon.com/cloudsearch/latest/developerguide/getting-suggestions.html#configuring-suggesters">Configuring Suggesters</a> in the <i>Amazon CloudSearch Developer Guide</i>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { CloudSearchClient, BuildSuggestersCommand } from "@aws-sdk/client-cloudsearch"; // ES Modules import
 * // const { CloudSearchClient, BuildSuggestersCommand } = require("@aws-sdk/client-cloudsearch"); // CommonJS import
 * const client = new CloudSearchClient(config);
 * const command = new BuildSuggestersCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link BuildSuggestersCommandInput} for command's `input` shape.
 * @see {@link BuildSuggestersCommandOutput} for command's `response` shape.
 * @see {@link CloudSearchClientResolvedConfig | config} for command's `input` shape.
 *
 */
var BuildSuggestersCommand = /** @class */ (function (_super) {
    __extends(BuildSuggestersCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function BuildSuggestersCommand(input) {
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
    BuildSuggestersCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "CloudSearchClient";
        var commandName = "BuildSuggestersCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: BuildSuggestersRequest.filterSensitiveLog,
            outputFilterSensitiveLog: BuildSuggestersResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    BuildSuggestersCommand.prototype.serialize = function (input, context) {
        return serializeAws_queryBuildSuggestersCommand(input, context);
    };
    BuildSuggestersCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_queryBuildSuggestersCommand(output, context);
    };
    return BuildSuggestersCommand;
}($Command));
export { BuildSuggestersCommand };
//# sourceMappingURL=BuildSuggestersCommand.js.map