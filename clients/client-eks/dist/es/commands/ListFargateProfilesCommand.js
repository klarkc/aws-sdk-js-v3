import { __extends } from "tslib";
import { ListFargateProfilesRequest, ListFargateProfilesResponse } from "../models/models_0";
import { deserializeAws_restJson1ListFargateProfilesCommand, serializeAws_restJson1ListFargateProfilesCommand, } from "../protocols/Aws_restJson1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Lists the AWS Fargate profiles associated with the specified cluster in your AWS
 *             account in the specified Region.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { EKSClient, ListFargateProfilesCommand } from "@aws-sdk/client-eks"; // ES Modules import
 * // const { EKSClient, ListFargateProfilesCommand } = require("@aws-sdk/client-eks"); // CommonJS import
 * const client = new EKSClient(config);
 * const command = new ListFargateProfilesCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link ListFargateProfilesCommandInput} for command's `input` shape.
 * @see {@link ListFargateProfilesCommandOutput} for command's `response` shape.
 * @see {@link EKSClientResolvedConfig | config} for command's `input` shape.
 *
 */
var ListFargateProfilesCommand = /** @class */ (function (_super) {
    __extends(ListFargateProfilesCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function ListFargateProfilesCommand(input) {
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
    ListFargateProfilesCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "EKSClient";
        var commandName = "ListFargateProfilesCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: ListFargateProfilesRequest.filterSensitiveLog,
            outputFilterSensitiveLog: ListFargateProfilesResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    ListFargateProfilesCommand.prototype.serialize = function (input, context) {
        return serializeAws_restJson1ListFargateProfilesCommand(input, context);
    };
    ListFargateProfilesCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_restJson1ListFargateProfilesCommand(output, context);
    };
    return ListFargateProfilesCommand;
}($Command));
export { ListFargateProfilesCommand };
//# sourceMappingURL=ListFargateProfilesCommand.js.map