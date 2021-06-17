import { __extends } from "tslib";
import { ListFeatureGroupsRequest, ListFeatureGroupsResponse } from "../models/models_2";
import { deserializeAws_json1_1ListFeatureGroupsCommand, serializeAws_json1_1ListFeatureGroupsCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>List <code>FeatureGroup</code>s based on given filter and order.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListFeatureGroupsCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListFeatureGroupsCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListFeatureGroupsCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFeatureGroupsCommandInput} for command's `input` shape.
 * @see {@link ListFeatureGroupsCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFeatureGroupsCommand = /** @class */ (function (_super) {
    __extends(ListFeatureGroupsCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFeatureGroupsCommand(input) {
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
    ListFeatureGroupsCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListFeatureGroupsCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFeatureGroupsRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFeatureGroupsResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFeatureGroupsCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListFeatureGroupsCommand(input, context);
    };
    ListFeatureGroupsCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListFeatureGroupsCommand(output, context);
    };
    return ListFeatureGroupsCommand;
}($Command));
export { ListFeatureGroupsCommand };
//# sourceMappingURL=ListFeatureGroupsCommand.js.map