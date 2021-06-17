import { __extends } from "tslib";
import { PutCorsPolicyInput, PutCorsPolicyOutput } from "../models/models_0";
import { deserializeAws_json1_1PutCorsPolicyCommand, serializeAws_json1_1PutCorsPolicyCommand, } from "../protocols/Aws_json1_1";
import { getSerdePlugin } from "@aws-sdk/middleware-serde";
import { Command as $Command } from "@aws-sdk/smithy-client";
/**
 * <p>Sets the cross-origin resource sharing (CORS) configuration on a container so that
 *          the container can service cross-origin requests. For example, you might want to enable a
 *          request whose origin is http://www.example.com to access your AWS Elemental MediaStore
 *          container at my.example.container.com by using the browser's XMLHttpRequest
 *          capability.</p>
 *          <p>To enable CORS on a container, you attach a CORS policy to the container. In the CORS
 *          policy, you configure rules that identify origins and the HTTP methods that can be executed
 *          on your container. The policy can contain up to 398,000 characters. You can add up to 100
 *          rules to a CORS policy. If more than one rule applies, the service uses the first
 *          applicable rule listed.</p>
 *          <p>To learn more about CORS, see <a href="https://docs.aws.amazon.com/mediastore/latest/ug/cors-policy.html">Cross-Origin Resource Sharing (CORS) in AWS Elemental MediaStore</a>.</p>
 * @example
 * Use a bare-bones client and the command you need to make an API call.
 * ```javascript
 * import { MediaStoreClient, PutCorsPolicyCommand } from "@aws-sdk/client-mediastore"; // ES Modules import
 * // const { MediaStoreClient, PutCorsPolicyCommand } = require("@aws-sdk/client-mediastore"); // CommonJS import
 * const client = new MediaStoreClient(config);
 * const command = new PutCorsPolicyCommand(input);
 * const response = await client.send(command);
 * ```
 *
 * @see {@link PutCorsPolicyCommandInput} for command's `input` shape.
 * @see {@link PutCorsPolicyCommandOutput} for command's `response` shape.
 * @see {@link MediaStoreClientResolvedConfig | config} for command's `input` shape.
 *
 */
var PutCorsPolicyCommand = /** @class */ (function (_super) {
    __extends(PutCorsPolicyCommand, _super);
    // Start section: command_properties
    // End section: command_properties
    function PutCorsPolicyCommand(input) {
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
    PutCorsPolicyCommand.prototype.resolveMiddleware = function (clientStack, configuration, options) {
        this.middlewareStack.use(getSerdePlugin(configuration, this.serialize, this.deserialize));
        var stack = clientStack.concat(this.middlewareStack);
        var logger = configuration.logger;
        var clientName = "MediaStoreClient";
        var commandName = "PutCorsPolicyCommand";
        var handlerExecutionContext = {
            logger: logger,
            clientName: clientName,
            commandName: commandName,
            inputFilterSensitiveLog: PutCorsPolicyInput.filterSensitiveLog,
            outputFilterSensitiveLog: PutCorsPolicyOutput.filterSensitiveLog,
        };
        var requestHandler = configuration.requestHandler;
        return stack.resolve(function (request) {
            return requestHandler.handle(request.request, options || {});
        }, handlerExecutionContext);
    };
    PutCorsPolicyCommand.prototype.serialize = function (input, context) {
        return serializeAws_json1_1PutCorsPolicyCommand(input, context);
    };
    PutCorsPolicyCommand.prototype.deserialize = function (output, context) {
        return deserializeAws_json1_1PutCorsPolicyCommand(output, context);
    };
    return PutCorsPolicyCommand;
}($Command));
export { PutCorsPolicyCommand };
//# sourceMappingURL=PutCorsPolicyCommand.js.map