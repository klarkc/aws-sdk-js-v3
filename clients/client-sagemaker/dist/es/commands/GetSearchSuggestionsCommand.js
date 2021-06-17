import { __extends } from "tslib";
import { GetSearchSuggestionsRequest, GetSearchSuggestionsResponse } from "../models/models_2";
import { deserializeAws_json1_1GetSearchSuggestionsCommand, serializeAws_json1_1GetSearchSuggestionsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>An auto-complete API for the search functionality in the Amazon SageMaker console. It returns
 *       suggestions of possible matches for the property name to use in <code>Search</code>
 *       queries. Provides suggestions for <code>HyperParameters</code>, <code>Tags</code>, and
 *       <code>Metrics</code>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, GetSearchSuggestionsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, GetSearchSuggestionsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new GetSearchSuggestionsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetSearchSuggestionsCommandInput} for command's `input` shape.
 * @see {@link GetSearchSuggestionsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetSearchSuggestionsCommand = /** @class */ (function (_super) {
    __extends(GetSearchSuggestionsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetSearchSuggestionsCommand(input) {
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
    GetSearchSuggestionsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "GetSearchSuggestionsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetSearchSuggestionsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetSearchSuggestionsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetSearchSuggestionsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetSearchSuggestionsCommand(input, context);
    };
    GetSearchSuggestionsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetSearchSuggestionsCommand(output, context);
    };
    return GetSearchSuggestionsCommand;
}($Command));
export { GetSearchSuggestionsCommand };
//# sourceMappingURL=GetSearchSuggestionsCommand.js.map