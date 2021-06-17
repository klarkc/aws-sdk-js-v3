import { __extends } from "tslib";
import { GetContainerPolicyInput, GetContainerPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1GetContainerPolicyCommand, serializeAws_json1_1GetContainerPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the access policy for the specified container. For information about the
 *          data that is included in an access policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and Access Management User
 *             Guide</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, GetContainerPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, GetContainerPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new GetContainerPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetContainerPolicyCommandInput} for command's `input` shape.
 * @see {@link GetContainerPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetContainerPolicyCommand = /** @class */ (function (_super) {
    __extends(GetContainerPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetContainerPolicyCommand(input) {
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
    GetContainerPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "GetContainerPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetContainerPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: GetContainerPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetContainerPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetContainerPolicyCommand(input, context);
    };
    GetContainerPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetContainerPolicyCommand(output, context);
    };
    return GetContainerPolicyCommand;
}($Command));
export { GetContainerPolicyCommand };
//# sourceMappingURL=GetContainerPolicyCommand.js.map