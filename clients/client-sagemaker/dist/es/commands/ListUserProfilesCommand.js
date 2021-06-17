import { __extends } from "tslib";
import { ListUserProfilesRequest, ListUserProfilesResponse } from "../models/models_2";
import { deserializeAws_json1_1ListUserProfilesCommand, serializeAws_json1_1ListUserProfilesCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists user profiles.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { SageMakerClient, ListUserProfilesCommand } from "@aws-sdk/client-sagemaker"; // ES Modules import
 * // const { SageMakerClient, ListUserProfilesCommand } = require("@aws-sdk/client-sagemaker"); // CommonJS import
 * const client = new SageMakerClient(config);
 * const command = new ListUserProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListUserProfilesCommandInput} for command's `input` shape.
 * @see {@link ListUserProfilesCommandOutput} for command's `response` shape.
 * @see {@link SageMakerClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListUserProfilesCommand = /** @class */ (function (_super) {
    __extends(ListUserProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListUserProfilesCommand(input) {
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
    ListUserProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "SageMakerClient";
        var commandName = "ListUserProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListUserProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListUserProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListUserProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1ListUserProfilesCommand(input, context);
    };
    ListUserProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1ListUserProfilesCommand(output, context);
    };
    return ListUserProfilesCommand;
}($Command));
export { ListUserProfilesCommand };
//# sourceMappingURL=ListUserProfilesCommand.js.map