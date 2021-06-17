import { __extends } from "tslib";
import { PutContainerPolicyInput, PutContainerPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1PutContainerPolicyCommand, serializeAws_json1_1PutContainerPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Creates an access policy for the specified container to restrict the users and
 *          clients that can access it. For information about the data that is included in an access
 *          policy, see the <a href="https://aws.amazon.com/documentation/iam/">AWS Identity and
 *             Access Management User Guide</a>.</p>
 *          <p>For this release of the REST API, you can create only one policy for a container. If
 *          you enter <code>PutContainerPolicy</code> twice, the second command modifies the existing
 *          policy. </p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, PutContainerPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, PutContainerPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new PutContainerPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutContainerPolicyCommandInput} for command's `input` shape.
 * @see {@link PutContainerPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutContainerPolicyCommand = /** @class */ (function (_super) {
    __extends(PutContainerPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutContainerPolicyCommand(input) {
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
    PutContainerPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "PutContainerPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutContainerPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutContainerPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutContainerPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutContainerPolicyCommand(input, context);
    };
    PutContainerPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutContainerPolicyCommand(output, context);
    };
    return PutContainerPolicyCommand;
}($Command));
export { PutContainerPolicyCommand };
//# sourceMappingURL=PutContainerPolicyCommand.js.map