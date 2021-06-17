import { __extends } from "tslib";
import { SearchResponse } from "../models/models_2";
import { SearchRequest } from "../models/models_3";
import { deserializeAws_json1_1SearchCommand, serializeAws_json1_1SearchCommand } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Finds Amazon SageMaker resources that match a search query. Matching resources are returned
 *       as a list of <code>SearchRecord</code> objects in the response. You can sort the search
 *       results by any resource property in a ascending or descending order.</p>
 *          <p>You can query against the following value types: numeric, text, Boolean, and
 *       timestamp.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, SearchCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, SearchCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new SearchCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link SearchCommandInput} for command's `input` shape.
 * @see {@link SearchCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var SearchCommand = /** @class */ (function (_super) {
    __extends(SearchCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function SearchCommand(input) {
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
    SearchCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "SearchCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: SearchRequest.filterSensitiveLog,
            outputFilterSensitiveLog: SearchResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    SearchCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1SearchCommand(input, context);
    };
    SearchCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1SearchCommand(output, context);
    };
    return SearchCommand;
}($Command));
export { SearchCommand };
//# sourceMappingURL=SearchCommand.js.map