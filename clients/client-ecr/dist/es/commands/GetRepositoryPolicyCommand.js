import { __extends } from "tslib";
import { GetRepositoryPolicyRequest, GetRepositoryPolicyResponse } from "../models/models_0";
import { deserializeAws_json1_1GetRepositoryPolicyCommand, serializeAws_json1_1GetRepositoryPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Retrieves the repository policy for the specified repository.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { ECRClient, GetRepositoryPolicyCommand } from "@aws-sdk/client-ecr"; // ES Modules import
 * // const { ECRClient, GetRepositoryPolicyCommand } = require("@aws-sdk/client-ecr"); // CommonJS import
 * const client = new ECRClient(config);
 * const command = new GetRepositoryPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link GetRepositoryPolicyCommandInput} for command's `input` shape.
 * @see {@link GetRepositoryPolicyCommandOutput} for command's `response` shape.
 * @see {@link ECRClientResolvedConfig | config} for command's `input` shape.
 *
 */
var GetRepositoryPolicyCommand = /** @class */ (function (_super) {
    __extends(GetRepositoryPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function GetRepositoryPolicyCommand(input) {
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
    GetRepositoryPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "ECRClient";
        var commandName = "GetRepositoryPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: GetRepositoryPolicyRequest.filterSensitiveLog,
            outputFilterSensitiveLog: GetRepositoryPolicyResponse.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    GetRepositoryPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1GetRepositoryPolicyCommand(input, context);
    };
    GetRepositoryPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1GetRepositoryPolicyCommand(output, context);
    };
    return GetRepositoryPolicyCommand;
}($Command));
export { GetRepositoryPolicyCommand };
//# sourceMappingURL=GetRepositoryPolicyCommand.js.map